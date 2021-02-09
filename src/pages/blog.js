import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from '../components/layout'
import blogStyles from '../styles/blog.module.scss'
import Head from "../components/head";

function BlogPage() {
  // const data = useStaticQuery(graphql`
  // query {
  //   allMarkdownRemark {
  //     edges {
  //       node {
  //         frontmatter {
  //           title
  //           date
  //         }
  //         html
  //         excerpt
  //         fields {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // }
  // `);
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: {fields: publishedDate order: DESC } ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `);
//  const blogs = data.allMarkdownRemark.edges;
const blogs = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <Head title="Blog" />
      <h1>My Blog</h1>
      <ol className={blogStyles.posts}>
      {blogs ?  
        blogs.map((edge) => (
          <li className={blogStyles.post} key={edge.node.slug}>
            <Link to={`/blog/${edge.node.slug}/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        )) : <p>No blogs for the moment</p>
      }
      </ol>
    </Layout>
  )
}

export default BlogPage
