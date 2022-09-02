type EdgeNode<Type> = {
  node: {
    frontmatter: { [Property in keyof Type]: Type[Property] };
    excerpt?: string;
    id: string;
    fields: {
      slug: string,
      readingTime: {
        text: string
      },
    },
  };
};

type Post = {
  path: string;
  title: string;
  date: string;
};

export type BlogListQueryData = {
  allMdx: {
    edges?: [EdgeNode<Post>];
    totalCount: number;
  };
};
