import PropTypes from 'prop-types'
import React from 'react'
import { uniq } from 'ramda'

import { pluralise } from '../helpers/formatting'
import { tagsPageMetadata, tagsResourceTitle } from '../helpers/siteMetadata'
import {
  markdownItemNodes,
  frontmatterCategory,
  fieldsTags
} from '../helpers/markdown'
import renderListItems from '../helpers/renderListItems'
import { tagPath } from '../../build/utils/url'

import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
// import TagList from '../shared/TagList'
import TagsList from './TagsList'
import TextLink from '../shared/links/TextLink'

const TagsPage = ({ data }) => {
  const { group: allTags } = data.allMarkdownRemark
  const { tags: tagsMetadata } = data.site.siteMetadata.metadata
  return (
    <Page title={pluralise(tagsResourceTitle(data))}>
      <Metadata {...tagsMetadata} />
      <TagsList allTags={allTags} />
    </Page>
  )
}

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default TagsPage
