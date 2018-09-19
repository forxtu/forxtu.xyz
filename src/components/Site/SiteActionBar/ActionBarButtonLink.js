import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import linkProps from '../../styles/mixins/linkProps'
import BaseLink from '../../shared/links/BaseLink'

// Filter out styled-component-specific props so they don't trigger Unknown Prop
// Warnings on wrapped React components
// eslint-disable-next-line no-unused-vars
const ActionBarButtonLink = styled(({ underlineType, ...rest }) => <BaseLink {...rest} />)`
  ${linkProps(`c:text`, `c:highlight`)};
  font-weight: bold;
  position: relative;
  display: inline-block;
  margin-top: 10px;
  color: #000;
  font-size: 18px;
`

ActionBarButtonLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  underlineType: PropTypes.string
}

ActionBarButtonLink.defaultProps = {
  underlineType: `center`
}

ActionBarButtonLink.displayName = `ActionBarButtonLink`

export default ActionBarButtonLink