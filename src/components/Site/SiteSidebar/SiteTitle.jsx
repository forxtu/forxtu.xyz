import React, { Fragment } from 'react'
import { api, scope } from 'cssapi'
import styled from 'styled-components'
import { string, bool } from 'prop-types'

import blockCenterH from '../../styles/mixins/blockCenterH'
import BtnLink from './../../shared/links/BtnLink'

const Wrapper = styled(BtnLink)`
  ${blockCenterH};
  padding-top: 10px;
  ${api({
    fontFamily: `Limelight`,
    baseline: scope`s:primaryTitle`
  })};
`

const FloatWrapper = styled(BtnLink)`
  ${blockCenterH};
  padding-top: 10px;
  ${api({
    fontFamily: `Limelight`,
    baseline: scope`s:primaryTitle`
  })};
  left: 0;
  top: 0;
  position: absolute;
  transform: translateX(345px);
`

const SiteTitle = ({ title, isSidebarOpen }) => (
  <Fragment>
    {isSidebarOpen ? (
      <Wrapper to="/">{title}</Wrapper>
    ) : (
      <FloatWrapper to="/">{title}</FloatWrapper>
    )}
  </Fragment>
)

SiteTitle.propTypes = {
  title: string.isRequired,
  isSidebarOpen: bool.isRequired
}

export default SiteTitle
