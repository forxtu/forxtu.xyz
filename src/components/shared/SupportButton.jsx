import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { FiHeart } from 'react-icons/fi'

import linkProps from '../styles/mixins/linkProps'
import flexAlignCenter from '../styles/mixins/flexAlignCenter'
import BaseLink from '../shared/links/BaseLink'

const SupportLinkWrapper = styled(BaseLink)`
  ${linkProps(`c:text`, `c:red`)};
  ${flexAlignCenter};
  justify-content: center;
  padding: 8px;
  position: relative;
  text-align: center;
`

const SupportButton = ({ title }) => (
  <SupportLinkWrapper
    to="https://ko-fi.com/dennismerkulov"
    title={title}
    target="_blank"
  >
    <FiHeart />
  </SupportLinkWrapper>
)

SupportButton.propTypes = {
  title: string
}

SupportButton.defaultProps = {
  title: `Buy me a coffee`
}

export default SupportButton
