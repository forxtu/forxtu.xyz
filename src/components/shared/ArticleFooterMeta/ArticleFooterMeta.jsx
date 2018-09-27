import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import { isNotEmpty } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'

import { FiBookmark, FiTag } from 'react-icons/fi'

import { categoryPath } from '../../../build/utils/url'
import { fieldsTags, frontmatterCategory } from '../../helpers/markdown'
import flexAlignCenter from '../../styles/mixins/flexAlignCenter'
import flexHorizontal from '../../styles/mixins/flexHorizontal'

import VLayout from '../layouts/VLayout'
import TextLink from '../links/TextLink'
import HList from '../lists/HList'
import TagList from '../TagList'

const Layout = styled(VLayout)`
  ${flexHorizontal};
  ${api({
    paddingV: scope`0.3ru`
  })};
`

const CategoryLink = styled(TextLink)`
  ${api({
    color: `c:grey`,
    marginLeft: scope`0.2ru`
  })};
`

const CategoryWrapper = styled.div`
  ${flexAlignCenter};
  ${api({
    color: `c:text`,
    marginRight: scope`0.5ru`,
    baseline: scope`s:mediumprint`
  })};
`

const TagWrapper = styled(HList)`
  ${flexAlignCenter};
  ${api({
    color: `c:text`,
    marginRight: scope`0.5ru`,
    baseline: scope`s:mediumprint`
  })};
`

const TagLink = styled(TagList)`
  ${api({
    color: `c:grey`,
    marginLeft: scope`0.2ru`
  })};
`

const ArticleFooterMeta = ({ article }) => {
  const category = frontmatterCategory(article)
  const tags = fieldsTags(article)
  return (
    <Layout spacing="none">
      <CategoryWrapper>
        <FiBookmark />
        <CategoryLink to={categoryPath(category)}>{category}</CategoryLink>
      </CategoryWrapper>
      {isNotEmpty(tags) && (
        <TagWrapper spacing="tiny">
          <FiTag />
          <TagLink tags={fieldsTags(article)} />
        </TagWrapper>
      )}
    </Layout>
  )
}

ArticleFooterMeta.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleFooterMeta
