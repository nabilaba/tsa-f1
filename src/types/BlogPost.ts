export type BlogPostProps = {
  data: {
    mdx: {
      body: string;
      timeToRead: string;
      headings: BlogPostHeading[];
      frontmatter: {
        path: string;
        title: string;
        members: any;
        date: string;
      };
      fields: {
        readingTime: {
          text: string;
        };
      }
    };
  };
  pageContext: {
    prev: any;
    next: any;
  };
};

export type BlogPostHeading = {
  url: string;
  value: string;
  depth: number;
};
