import { api } from 'cssapi'
import PropTypes from 'prop-types'
import { test } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import { isHomePage } from '../../../../helpers/paths'
import TextLink from '../../../../shared/links/TextLink'
import linkProps from '../../../../styles/mixins/linkProps'

const articlesIsActive = (match, location) =>
  match || test(/(categories|tags)/, location.pathname)

const Link = styled(TextLink).attrs({
  activeClassName: `isActive`
})`
  ${linkProps(`c:text`, `c:highlight`)};
  background: transparent;
  letter-spacing: 0.5px;
  z-index: 2;

  &.isActive {
    ${api({
      color: `c:active`
    })};
  }
`

const SiteNavLink = ({ page }) => {
  const isActive = page.navTitle === `Articles` ? articlesIsActive : null
  return (
    <Link exact={isHomePage(page.path)} to={page.path} isActive={isActive}>
      {page.navTitle}
    </Link>
  )
}

SiteNavLink.propTypes = {
  page: PropTypes.object.isRequired
}

export default SiteNavLink
