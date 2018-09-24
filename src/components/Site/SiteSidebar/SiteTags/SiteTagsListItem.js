import { string } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {api, scope} from 'cssapi'

import { tagPath } from '../../../../build/utils/url'
import ButtonLink from './../../../shared/links/ButtonLink';

const LinkWrapper = styled(ButtonLink)`
  ${api({
    baseline: scope`s:smallprint`
  })};
  font-size: 10px !important;
  margin: 10px;
`

const SiteTagsListItem = ({ tag }) => (
  <LinkWrapper to={tagPath(tag)} title={`Tag: ${tag}`}>
    {tag}
  </LinkWrapper>
)


SiteTagsListItem.propTypes = {
  tag: string.isRequired
}

export default SiteTagsListItem