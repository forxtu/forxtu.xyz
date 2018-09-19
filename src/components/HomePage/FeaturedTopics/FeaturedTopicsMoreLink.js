import React from 'react'
import styled from 'styled-components'
import { api, scope } from 'cssapi' 

import { FiChevronRight } from 'react-icons/fi'

import TextLink from '../../shared/links/TextLink'
import flexAlignCenter from '../../styles/mixins/flexAlignCenter'

const MoreLink = styled(TextLink)`
  ${flexAlignCenter};
  ${api({
    marginBottom: scope`1ru`,
    baseline: scope`s:mediumprint`
  })};
`

const FeaturedTopicsMoreLink = () => (
  <MoreLink to="/articles" title="all articles" >
    SEE ALL ARTICLES
    <FiChevronRight />
  </MoreLink>
)

export default FeaturedTopicsMoreLink