export type BlogItemProps = {
  slug: string;
  content: string;
  props: {
    readingTimeMinutes: number;
  };
  frontMatter: {
    title: string;
    date: string;
    draft: boolean;
    summary: string;
    featured: boolean;
    tags: string[];
    featured_image_url: string;
  };
};
