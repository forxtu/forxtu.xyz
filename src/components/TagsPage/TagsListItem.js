import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { tagPath } from '../../build/utils/url'
import linkProps from '../styles/mixins/linkProps'
import BaseLink from '../shared/links/BaseLink'

const ListItemWrapper = styled.li`
`

const ListItemLink = styled(BaseLink)`
  ${linkProps(`c:text`, `c:highlight`)};
`

const TagsListItem = ({ tag }) => (
  <ListItemWrapper>
    <ListItemLink to={tagPath(tag)}>{tag}</ListItemLink>
  </ListItemWrapper>
)

TagsListItem.propTypes = {
  tag: string
}

export default TagsListItem
