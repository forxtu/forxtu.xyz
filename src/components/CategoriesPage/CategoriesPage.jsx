import PropTypes from 'prop-types'
import React from 'react'
import { uniq } from 'ramda'

import { pluralise, firstToUpper } from '../helpers/formatting'
import {
  categoriesPageMetadata,
  categoriesResourceTitle
} from '../helpers/siteMetadata'
import {
  markdownItemNodes,
  frontmatterCategory,
  fieldsTags
} from '../helpers/markdown'
import renderListItems from '../helpers/renderListItems'
import { categoryPath } from '../../build/utils/url'

import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import TagList from '../shared/TagList'
import TextLink from '../shared/links/TextLink'

const CategoriesPage = ({ data }) => {
  const { group: allCategories } = data.allMarkdownRemark
  const { categories: categoriesMetadata } = data.site.siteMetadata.metadata
  return (
    <Page title="Categories">
      <Metadata {...categoriesMetadata} />
      {/* <TagList tags={tags} /> */}
      <ul>
        {allCategories.map(
          category =>
            category.fieldValue !== `undefined` ? (
              <li key={category.fieldValue}>
                <TextLink to={categoryPath(category.fieldValue)}>
                  {category.fieldValue} ({category.totalCount})
                </TextLink>
              </li>
            ) : null
        )}
      </ul>
    </Page>
  )
}

CategoriesPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default CategoriesPage
