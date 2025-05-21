import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';

// const remarkSlug = require('remark-slug');
// const remarkAutolinkHeadings = require('remark-autolink-headings');
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
// const remarkAutolinkHeadings = require('remark-autolink-headings');

import { calculateReadingTime, formatExcerpt } from '@/common/helpers';
import { getTimestamp } from '@/common/helpers';
export interface MdxFileProps {
  slug: string;
  frontMatter: Record<string, unknown>;
  content?: string;
}

export const _loadMdxFiles = (dirPath: string): MdxFileProps[] => {
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  const files = fs.readdirSync(dirPath, { recursive: true });

  const contents = (files as string[])
    .filter((file) => {
      // 同时允许 md 和 mdx 文件
      return file.endsWith('.mdx') || file.endsWith('.md');
    })
    .map((file) => {
      const filePath = path.join(dirPath, file);
      const source = fs.readFileSync(filePath, 'utf-8');
      const { content, data } = matter(source);

      const mdxCompiler = remark()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkMdx)
        .use(remarkSlug)
        .use(remarkAutolinkHeadings, {
          behavior: 'append', // 或 'prepend'、'wrap'
          content: {
            type: 'text',
            value: '#', // 可以是字符串，如 '🔗'
          },
        });
      const mdxContent = mdxCompiler.processSync(content).toString();
      const filename = file.endsWith('.mdx')
        ? file.replace('.mdx', '')
        : file.replace('.md', '');

      return {
        slug: data.slug || filename,
        frontMatter: data,
        content: mdxContent,
        props: {
          readingTimeMinutes: calculateReadingTime(mdxContent) ?? 0,
          description: formatExcerpt(mdxContent) || '', // TODO 截取文章内容需要先转为 html，目前还是 md 语法
        },
      };
    });

  return contents;
};

export const getCollection = (
  endpointer: string,
  withContent = false
): MdxFileProps[] => {
  const dirPath = path.join(process.cwd(), 'src/contents', endpointer);
  const files = _loadMdxFiles(dirPath);

  files.sort((a, b) => {
    return getTimestamp(a.frontMatter.date as string) <
      getTimestamp(b.frontMatter.date as string)
      ? 1
      : -1;
  });

  if (withContent) {
    return files;
  }
  return files.map(({ content, ...rest }) => ({ ...rest }));
};

export const getEntry = (
  endpointer: string,
  slug: string
): MdxFileProps | null => {
  const dirPath = path.join(process.cwd(), 'src/contents', endpointer);
  const collection = _loadMdxFiles(dirPath);
  return collection.find((item) => item.slug === slug) || null;
};
