import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const BlogPost = ({ data, children }) => {
 return (
   <Layout pageTitle={data.mdx.frontmatter.title}>
     <small>{data.mdx.frontmatter.date}</small>
     {children}
   </Layout>
 )
}
export const query = graphql`
 query ($id: String) {
   mdx(id: {eq: $id}) {
     frontmatter {
       title
       date
     }
   }
 }
`
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />
export default BlogPost