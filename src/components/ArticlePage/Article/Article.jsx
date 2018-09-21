import { object } from 'prop-types'
import React, { Fragment, Component } from 'react'
import { DiscussionEmbed } from 'disqus-react'
import styled from 'styled-components'

import ArticleHeadMeta from '../../shared/ArticleHeadMeta'
import ArticleFooterMeta from '../../shared/ArticleFooterMeta/ArticleFooterMeta'
import MarkdownContent from '../../shared/MarkdownContent'

export const NavWrapper = styled.div`
  margin-bottom: 30px;
`

class Article extends Component {
  componentDidMount() {
    // console.log(this.props)
  }
  render() {
    const { allData, article, nav } = this.props
    const { id } = allData.markdownRemark
    const { title, slug } = allData.markdownRemark.fields
    const disqusShortname = `forxtu`
    const disqusConfig = {
      url: `${location.origin}${slug}`,
      identifier: id,
      title
    }
    return (
      <Fragment>
        <ArticleHeadMeta article={article} />
        <MarkdownContent htmlAst={article.htmlAst} />
        <ArticleFooterMeta article={article} />
        {nav && <NavWrapper>{nav}</NavWrapper>}
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Fragment>
    )
  }
}

Article.propTypes = {
  article: object.isRequired,
  allData: object.isRequired
}

export default Article
