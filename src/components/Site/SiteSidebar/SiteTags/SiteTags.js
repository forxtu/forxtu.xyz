import { api, scope } from 'cssapi'
import { array } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { uniq } from 'ramda'

import { FiMoreHorizontal } from 'react-icons/fi'

import VLayout from '../../../shared/layouts/VLayout'
import blockCenterH from '../../../styles/mixins/blockCenterH'
import { fetchTags } from '../../../helpers/fetchTags'

import SiteTagsList from './SiteTagsList'
import TitleSecondary from '../../../shared/titles/TitleSecondary';
import flexJustifyCenter from '../../../styles/mixins/flexJustifyCenter';
import flexVertical from '../../../styles/mixins/flexVertical';
import TextLink from '../../../shared/links/TextLink';

const Layout = styled(VLayout)`
  ${blockCenterH};

  ${api({
    baseline: scope`s:smallprint`
  })};
`

const TagsTitle = styled(TitleSecondary)`
  ${flexJustifyCenter}
`

const MoreTagsLink = styled(TextLink)`
  ${flexVertical};
  align-items: center;
  ${api({
    baseline: scope`s:smallprint`,
    marginTop: `10px`
  })};
`

const SiteTags = ({ tags }) => (
  <Layout>
    <TagsTitle>Explore topics by tags</TagsTitle>
    <SiteTagsList tags={uniq(fetchTags(tags))} />
    <MoreTagsLink to="/tags" title="All tags">
      MORE
      <FiMoreHorizontal />
    </MoreTagsLink>
  </Layout>
)

SiteTags.propTypes = {
  tags: array.isRequired
}

export default SiteTags
