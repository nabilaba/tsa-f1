import { graphql, useStaticQuery } from "gatsby";

import { BlogListQueryData } from "../types/BlogList";

export const useBlogListQuery = () => {
  const { allMdx }: BlogListQueryData = useStaticQuery(graphql`
    query BLOG_LIST_QUERY {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            timeToRead
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date(formatString: "dddd, DD MMMM YYYY", locale: "id-ID")
            }
            fields {
              slug
              readingTime {
                text
              }
            }
            id
          }
        }
        totalCount
      }
    }
  `);

  return { allMdx };
};
