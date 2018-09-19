import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { api, scope } from 'cssapi'

import { FiStar } from 'react-icons/fi'

import flexAlignCenter from '../../styles/mixins/flexAlignCenter'
import {
  frontmatterAuthor,
  frontmatterDate,
  timeToRead,
  wordCount
} from '../../helpers/markdown'
import VLayout from '../layouts/VLayout'

const TopHead = styled.p`
  ${api({
    color: `c:black`
  })};
`
const BotHead = styled.p`
  ${flexAlignCenter};
  ${api({
    color: `c:grey`,
    baseline: scope`s:smallprint`
  })};
  svg {
    ${api({
      color: `c:black`,
      marginLeft: scope`0.5ru`,
      marginRight: scope`0.5ru`,
      baseline: scope`s:smallprint`
    })};
  }
`

const ArticleHeadMeta = ({ article }) => (
  <VLayout spacing="none">
    <TopHead>{frontmatterAuthor(article)}</TopHead>
    <BotHead>
      {frontmatterDate(article)} <FiStar /> {timeToRead(article)} min read
    </BotHead>
  </VLayout>
)

ArticleHeadMeta.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleHeadMeta
