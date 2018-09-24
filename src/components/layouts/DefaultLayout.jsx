import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import configureStore from '../../state'

import Site from '../Site'
import '../styles/global.css'
import '../styles/prism-greyscale-theme.css'
import theme from '../styles/theme'

const reduxStore = configureStore()

const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MainLayoutQuery {
        allMarkdownRemark(filter: { fields: { type: { eq: "article" } } }) {
          categoriesGroup: group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
          keywordsGroup: group(field: frontmatter___keywords) {
            fieldValue
            totalCount
          }
        }
        site {
          siteMetadata {
            data {
              owner
              title
              startYear
              showCredit
            }
            structure {
              resources {
                projects {
                  title
                  navTitle
                  path
                }
                articles {
                  title
                  navTitle
                  path
                }
              }
              pages {
                about {
                  title
                  navTitle
                  path
                }
                home {
                  title
                  navTitle
                  path
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <Site data={data}>{children}</Site>
        </ThemeProvider>
      </Provider>
    )}
  />
)

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object
}

export default DefaultLayout
