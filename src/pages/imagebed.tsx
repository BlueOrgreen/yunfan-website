import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { siteMetadata } from '@/contents/siteMetadata';
import ImageBed from '@/modules/imageBed';

const title = '图床';
const description =
  '可以直接上传图片到我自己的腾讯云cos桶中，方便日常图片等静态资源的管理 😁';

type ImageBedPageType = {
  test: string;
};

const ImageBedPage: NextPage<ImageBedPageType> = (props) => {
  return (
    <>
      <NextSeo
        title={`${title} - ${siteMetadata.author}`}
        description={description}
      />
      <Container data-aos='fade-up'>
        <PageHeading title={title} description={description} />
        <ImageBed />
      </Container>
    </>
  );
};

export default ImageBedPage;
