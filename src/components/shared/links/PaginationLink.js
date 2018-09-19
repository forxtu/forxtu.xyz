import { api, scope } from 'cssapi'
import { prop } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import directionBounce from '../../styles/animations/directionBounce'
import arrow from '../../styles/mixins/arrow'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import singleLineTruncate from '../../styles/mixins/singleLineTruncate'
import borderBottom from '../../styles/mixins/borderBottom'
import TextLink from './TextLink'

const Wrapper = styled.div`
  ${flexHorizontal};
  position: relative;
  z-index: 1;
`

const Link = styled(TextLink)`
  ${borderBottom};
`

const DisabledLink = styled.div`
  text-decoration: line-through;
  cursor: default;
  user-select: none;
  ${api({
    color: `c:grey`
  })};
`

const PaginationLink = props => (
  <Wrapper {...props}>
    {props.disabled ? <DisabledLink {...props} /> : <Link {...props} />}
  </Wrapper>
)

export default PaginationLink
