import React from 'react'
import { object } from 'prop-types'
import { api, scope } from 'cssapi'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { categoryPath } from '../../build/utils/url'
import linkProps from '../styles/mixins/linkProps'

import ButtonLink from '../shared/links/ButtonLink'

const LinkWrapper = styled(ButtonLink)`
  ${api({
    baseline: scope`s:smallprint`
  })};
  margin: 10px;
  text-transform: capitalize;
`

const CategoriesListItem = ({ category }) => (
  <LinkWrapper
    key={categoryPath(category.fieldValue)}
    to={categoryPath(category.fieldValue)}
  >
    {category.fieldValue} ({category.totalCount})
    {/* <Img fluid={frontmatterImageSizes(project)} /> */}
  </LinkWrapper>
)

CategoriesListItem.propTypes = {
  category: object
}

export default CategoriesListItem
