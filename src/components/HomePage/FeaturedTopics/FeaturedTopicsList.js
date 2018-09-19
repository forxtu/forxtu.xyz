import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { api, scope } from 'cssapi'

import renderListItemsFeatured from '../../helpers/renderListItemsFeatured'
import VList from '../../shared/lists/VList'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import borderBottom from '../../styles/mixins/borderBottom'

import FeaturedTopicsListItem from './FeaturedTopicsListItem'
import FeaturedTopicsMoreLink from './FeaturedTopicsMoreLink'

const Layout = styled.div`
  ${api({
    marginBottom: scope`2ru`
  })};
`
const MoreLinkWrapper = styled.div`
  ${flexHorizontal};
  ${borderBottom};
  justify-content: flex-end;
`

const FeaturedTopicsList = ({ articles }) => (
  // <Layout>{renderListItems(FeaturedTopicsListItem, `article`, articles)}</Layout>
  <Layout>
    {/* {articles.map((article, index) => (
      <FeaturedTopicsListItem article={article} index={index} />
    ))} */}
    {renderListItemsFeatured(FeaturedTopicsListItem, `article`, articles)}
    <MoreLinkWrapper>
      <FeaturedTopicsMoreLink />
    </MoreLinkWrapper>
  </Layout>
)

FeaturedTopicsList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default FeaturedTopicsList
