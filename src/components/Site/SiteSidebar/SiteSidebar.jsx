import { api, scope } from 'cssapi'
import { object, string, func, bool } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import VLayout from '../../shared/layouts/VLayout'
import SiteLogoLink from './SiteLogoLink'
import SiteSidebarToggler from './SiteSidebarToggler'
import SiteNav from './SiteNav'
import SiteTitle from './SiteTitle'

const Header = styled.div``

const Layout = styled(VLayout)`
  align-items: center;
  position: fixed;
  display: flex;
  left: 0;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  background: #fafafa;
  width: 320px;
  transition: 0.3s;
  transform: ${props =>
    props.isSidebarOpen ? `translateX(0)` : `translateX(-320px)`};
  ${api({
    padding: scope`0 0 0.7ru`
  })};

  ${Header} {
    ${api({
      width: [60, 70, 80]
    })};
  }
`

const SiteSidebar = ({ title, pages, setSidebarShape, isSidebarOpen }) => (
  <Layout spacing="small" isSidebarOpen={isSidebarOpen}>
    {/* <Header>
      <SiteLogoLink />
    </Header> */}
    <SiteSidebarToggler onClick={setSidebarShape}>
      {isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
    </SiteSidebarToggler>
    <SiteTitle>{title}</SiteTitle>
    <SiteNav pages={pages} />
  </Layout>
)

SiteSidebar.propTypes = {
  title: string.isRequired,
  pages: object.isRequired,
  isSidebarOpen: bool.isRequired,
  setSidebarShape: func.isRequired
}

export default SiteSidebar
