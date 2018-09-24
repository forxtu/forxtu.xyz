import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import { api, scope } from 'cssapi'

import { tagPath } from '../../build/utils/url'
import linkProps from '../styles/mixins/linkProps'
import ButtonLink from '../shared/links/ButtonLink'

const ListItemWrapper = styled.li`
`

const ListItemLink = styled(ButtonLink)`
  ${linkProps(`c:text`, `c:highlight`)};
  ${api({
    baseline: scope`s:smallprint`
  })};
  text-transform: capitalize;
  margin: 10px;
`

const TagsListItem = ({ tag }) => (
  // <ListItemWrapper>
  <ListItemLink to={tagPath(tag)}>{tag}</ListItemLink>
  // </ListItemWrapper>
)

TagsListItem.propTypes = {
  tag: string
}

export default TagsListItem
