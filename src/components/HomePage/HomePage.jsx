import PropTypes from 'prop-types'
import React from 'react'
import { uniq } from 'ramda'

import MarkdownContent from '../../components/shared/MarkdownContent'
import {
  markdownItemHTMLAst,
  markdownItemImageSizes,
  markdownItemNodes
} from '../helpers/markdown'
import { homePageMetadata, homePageTitle } from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'

import FeaturedTopics from './FeaturedTopics'

const HomePage = ({ data }) => {
  const articles = markdownItemNodes(data)
  return (
    <Page title={homePageTitle(data)} imageSizes={markdownItemImageSizes(data)}>
      <Metadata {...homePageMetadata(data)} />
      <FeaturedTopics articles={articles} />
      <MarkdownContent htmlAst={markdownItemHTMLAst(data)} />
    </Page>
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired
}

export default HomePage
