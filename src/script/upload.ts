import CliTable from 'cli-table';
import { consola } from 'consola';
import fs from 'fs-extra';
import { glob } from 'glob';
import inquirer from 'inquirer';
import fuzzypath from 'inquirer-fuzzy-path';
import path from 'node:path';
import pico from 'picocolors';
import qiniu from 'qiniu';

inquirer.registerPrompt('fuzzypath', fuzzypath);

const accessKey = 'pMdVBb-vwl8GbyBzH24u-teppeKCddbSTSKkoE6d';
const secretKey = 'fWpV6qzC4HFWDSTCQVo02WcFy64dw3YP_7al4vut';
const prefix = 'https://static.yunfan.com';

const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z2;
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

const putPolicy = new qiniu.rs.PutPolicy({
  scope: 'yunfan-cra',
  returnBody:
    '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
});

const uploadToken = putPolicy.uploadToken(mac);
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();

const uploadFile = (
  filePath: any
): Promise<{ fileName: string; status: boolean; data: string }> => {
  const fileName = path.basename(filePath);
  consola.start(`正在上传文件：${pico.cyan(fileName)}`);
  return new Promise((resolve) => {
    formUploader.putFile(
      uploadToken,
      null,
      filePath,
      putExtra,
      (respErr, respBody, respInfo) => {
        if (respErr) {
          console.error(pico.red(`上传失败：${respErr}`));
          resolve({
            fileName,
            status: false,
            data: '',
          });
        } else if (respInfo.statusCode === 200) {
          console.log('上传成功');
          resolve({
            fileName,
            status: true,
            data: `${prefix}/${respBody?.hash}`,
          });
        } else {
          console.error(pico.red(`上传失败${respInfo.statusCode}`));
          resolve({
            fileName,
            status: false,
            data: '',
          });
        }
      }
    );
  });
};

const upload = async () => {
  const { input } = await inquirer.prompt([
    {
      type: 'fuzzypath',
      name: 'input',
      excludePath: (nodePath: string) => nodePath.startsWith('node_modules'),
      itemType: 'directory',
      rootPath: './',
      message: '请选择输入目录路径',
      suggestOnly: false,
      depthLimit: undefined,
    },
  ]);

  const inputDirPath = path.resolve(process.cwd(), input);

  consola.info(`输入目录路径: ${pico.green(inputDirPath)}`);

  consola.start(`开始读取文件...`);

  const filePathList = await glob(`${inputDirPath}/**/*`, { nodir: true });

  console.log(
    `读取到待上传文件（共 ${filePathList?.length} 个）: ${pico.cyan(
      filePathList.map((i) => path.basename(i)).join('、')
    )}`
  );

  const { yes } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'yes',
      message: `确定上传文件？`,
    },
  ]);

  if (!yes) {
    consola.warn('已取消上传');
    return;
  }

  const result: Record<string, string> = {};

  for (const filePath of filePathList) {
    const { fileName, status, data } = await uploadFile(filePath);
    if (status) {
      result[fileName] = data;
    }
  }

  try {
    await fs.writeJSON(`${input}/map.json`, result, {
      encoding: 'utf8',
    });
  } catch (error) {
    console.error(pico.red('写入文件时出错：'));
    console.error(error);
    return;
  }

  const iTable = new CliTable({
    head: [
      pico.bold(pico.gray('序号')),
      pico.bold(pico.white('源文件')),
      pico.bold(pico.white('上传后的OSS URL')),
    ],
  });

  consola.success(pico.green('上传完毕！对应的 OSS URL 地址如下：'));
  console.info(
    pico.magenta('(你也可在源文件目录下找到对应的 OSS URL 的 map json 文件)')
  );

  Object.entries(result).forEach(([key, value], index) => {
    iTable.push([pico.gray(index), pico.white(key), pico.green(value)]);
  });

  console.log(iTable.toString());

  process.exit(0);
};

upload();
