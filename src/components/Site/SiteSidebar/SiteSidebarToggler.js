import PropTypes from 'prop-types'
import styled from 'styled-components'

const SiteSidebarToggler = styled.div`
  left: 318px;
  width: 66px;
  height: 100vh;
  cursor: pointer;
  display: flex;
  position: fixed;
  transition: 0.2s;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  :hover {
    background-color: #f3f3f3;
  }
`

SiteSidebarToggler.propTypes = {
  spacing: PropTypes.oneOf([
    `default`,
    `none`,
    `small`,
    `large`,
    `smallInverse`
  ])
}

SiteSidebarToggler.defaultProps = {
  spacing: `default`
}

export default SiteSidebarToggler
