import { SnippetsMetaProps } from '@/common/types/snippets';

import ContentBody from './ContentBody';

interface ContentDetailProps {
  content: string;
  frontMatter: SnippetsMetaProps;
}

const ContentDetail = ({ content }: ContentDetailProps) => {
  return <>{content && <ContentBody content={content} />}</>;
};

export default ContentDetail;
