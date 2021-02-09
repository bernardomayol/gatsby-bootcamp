import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import footerStyles from '../styles/footer.module.scss'

function Footer() {
  const data = useStaticQuery(graphql`
  query { 
    site {
      siteMetadata {
        author
      }
    }
  }`);
  return (
      <footer className={footerStyles.footer}>
        <p>Created by {data.site.siteMetadata.author}, c 2021</p>
      </footer>
  )
}

export default Footer