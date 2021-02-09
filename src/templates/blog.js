import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Head from "../components/head";

// export const query = graphql`
// query(
//   $slug: String
// ) {
//   markdownRemark(
//     fields: {
//       slug: {
//         eq: $slug
//       }
//     }
//   ) {
//     frontmatter {
//       title
//       date
//     }
//     html
//   }
// }
// `;

export const query = graphql`
query($slug: String) {
  contentfulBlogPost(
      slug: {
        eq: $slug
      }
  ) {
    title
    publishedDate(formatString:"MMMM Do, YYYY")
    body {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          fixed {
            width
            height
            src
            srcSet
          }
        }
      }
    }
  }
}
`;

function Blog(props) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
          <img src={props.data.contentfulBlogPost.body.references.filter((image) => image.contentful_id === node.data.target.sys.id)[0].fixed.src} alt={""}/>
          </>
        )
      }
  }
}
  return (
    <div>
      <Layout>
        <Head title={props.data.contentfulBlogPost.title} />
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        <p>{documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}</p>
      </Layout>
    </div>
  )
}

export default Blog
