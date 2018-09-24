import { api, scope } from 'cssapi'
import { array } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { FiMoreVertical } from 'react-icons/fi'

import flexHorizontal from '../../styles/mixins/flexHorizontal'
import flexAlignCenter from '../../styles/mixins/flexAlignCenter'
import HLayout from '../../shared/layouts/HLayout'
import TextLink from '../../shared/links/TextLink'
import { categoryPath } from '../../../build/utils/url'

const Layout = styled(HLayout)`
  ${flexAlignCenter};
  flex-wrap: wrap;
  padding: 15px 0;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
  ${api({
    baseline: scope`s:smallprint`
  })};
`

const NavCategoryLink = styled(TextLink)`
  letter-spacing: 2px;
`

const NavMoreCategoryLink = styled(NavCategoryLink)`
  ${flexAlignCenter};
  ${api({
    baseline: scope`s:smallprint`
  })};
`

const SiteHeader = ({ categoriesGroup }) => {
  const categories = categoriesGroup.map((category, i) => {
    while(i < 5) {
      return(
        <NavCategoryLink
          key={categoryPath(category.fieldValue)}
          to={categoryPath(category.fieldValue)}
          title={`Category: ${category.fieldValue}`}
        >
          {category.fieldValue}
        </NavCategoryLink>
      )
    }
    return null;
  })

  return(
    <Layout>
      {categories}
      <NavMoreCategoryLink to="/categories" title="explore all categories">
        MORE
        <FiMoreVertical />
      </NavMoreCategoryLink>
    </Layout>
  )
}

SiteHeader.propTypes = {
  categoriesGroup: array.isRequired
}

export default SiteHeader
