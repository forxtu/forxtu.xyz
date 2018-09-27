import { api , scope} from 'cssapi'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  fieldsSlug,
  fieldsTitle,
  frontmatterImageSizes
} from '../../helpers/markdown'
import VLayout from '../../shared/layouts/VLayout'
import TextLink from '../../shared/links/TextLink'
import TitleSecondary from '../../shared/titles/TitleSecondary'
import spaceChildrenH from '../../styles/mixins/spaceChildrenH'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import ArticleFooterMeta from '../../shared/ArticleFooterMeta'
import ArticleHeadMeta from '../../shared/ArticleHeadMeta'

const ArticleContentText = styled.div``

const Layout = styled.div`
  :first-child {
    ${spaceChildrenV([`1ru`, `1ru`, `1ru`])};
  }
  :not(:first-child) {
    display: flex;
    ${api({
      flexDirection: [`column`, `column`, `row`],
      marginTop: scope`2ru`,
      marginBottom: scope`2ru`
    })};
    ${spaceChildrenH([0, 0, `1ru`])};
    ${spaceChildrenV([`1ru`, `1ru`, 0])};
  
  }
  > * :first-child {
    ${api({
      flex: [`0 0 100%`, `0 0 100%`, `0 0 33.3%`]
    })};
  }

  ${ArticleContentText} {
    ${api({
      color: `c:contentText`
    })};
  }
`

const FeaturedTopicsListItem = ({ article, index }) => {
  const title = fieldsTitle(article)
  return (
    <Layout>
      <Link to={fieldsSlug(article)} title={title}>
        <Img fluid={frontmatterImageSizes(article)} />
      </Link>
      <VLayout spacing="small">
        <TextLink to={fieldsSlug(article)} title={title} underlineType="left">
          <TitleSecondary>{title}</TitleSecondary>
        </TextLink>
        <ArticleHeadMeta article={article} />
        <ArticleContentText>{article.excerpt}</ArticleContentText>
        <ArticleFooterMeta article={article} />
      </VLayout>
    </Layout>
  )
}

FeaturedTopicsListItem.propTypes = {
  article: PropTypes.object.isRequired
}

export default FeaturedTopicsListItem
