import PropTypes from 'prop-types'
import React from 'react'

import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import CategoriesList from './CategoriesList'

const CategoriesPage = ({ data }) => {
  const { group: allCategories } = data.allMarkdownRemark
  const { categories: categoriesMetadata } = data.site.siteMetadata.metadata
  return (
    <Page title="Categories">
      <Metadata {...categoriesMetadata} />
      <CategoriesList allCategories={allCategories} />
    </Page>
  )
}

CategoriesPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default CategoriesPage
