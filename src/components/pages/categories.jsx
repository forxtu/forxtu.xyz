import { graphql } from 'gatsby'
import CategoriesPage from '../CategoriesPage'

export default CategoriesPage

// Note: Ideally this would be in its own file and imported from a Page
// Container, but Gatsby preprocesses the pages looking for a graphql call.
// Moving it anywhere else results in an error.
export const query = graphql`
  query CategoriesPageQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        metadata {
          categories {
            title
            keywords
            description
          }
        }
      }
    }
  }
`