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
import TagList from '../shared/TagList'
import TextLink from '../shared/links/TextLink'

const TagsPage = ({ data }) => {
  const { group: allTags } = data.allMarkdownRemark
  const { tags: tagsMetadata } = data.site.siteMetadata.metadata
  return (
    <Page title={pluralise(tagsResourceTitle(data))}>
      <Metadata {...tagsMetadata} />
      {/* <TagList tags={tags} /> */}
      <ul>
        {allTags.map(
          tag =>
            tag.fieldValue !== `null` && tag.fieldValue !== `project` ? (
              <li key={tag.fieldValue}>
                <TextLink to={tagPath(tag.fieldValue)}>
                  {tag.fieldValue} ({tag.totalCount})
                </TextLink>
              </li>
            ) : null
        )}
      </ul>
    </Page>
  )
}

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default TagsPage
