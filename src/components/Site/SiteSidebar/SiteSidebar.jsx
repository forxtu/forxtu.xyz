import { api, scope } from 'cssapi'
import { object, string, func, bool } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import VLayout from '../../shared/layouts/VLayout'

import SiteSidebarToggler from './SiteSidebarToggler'
import SiteNav from './SiteNav'
import SiteTitle from './SiteTitle'
import SiteSocial from './SiteSocial/SiteSocial'

const Header = styled.div``
const Wrapper = styled.div``

const Layout = styled(VLayout)`
  align-items: center;
  position: fixed;
  display: flex;
  left: 0;
  justify-content: space-between;
  height: 100vh;
  border-right: 2px solid #f6f5f3;
  width: 320px;
  transition: 0.3s;
  transform: ${props =>
    props.isSidebarOpen ? `translateX(0)` : `translateX(-320px)`};
  ${api({
    padding: scope`0 0 0.7ru`
  })};

  ${Header} {
    justify-content: center;
    ${api({
      width: [60, 70, 80]
    })};
  }
  ${Wrapper} {
    justify-content: center;
  }
`

const SiteSidebar = ({ title, pages, setSidebarShape, isSidebarOpen }) => (
  <Layout spacing="small" isSidebarOpen={isSidebarOpen}>
    <SiteSidebarToggler onClick={setSidebarShape}>
      {isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
    </SiteSidebarToggler>
    <Header>
      <SiteTitle title={title} isSidebarOpen={isSidebarOpen} />
      <SiteNav pages={pages} />
    </Header>
    <Wrapper>
      <SiteSocial />
    </Wrapper>
  </Layout>
)

SiteSidebar.propTypes = {
  title: string.isRequired,
  pages: object.isRequired,
  isSidebarOpen: bool.isRequired,
  setSidebarShape: func.isRequired
}

export default SiteSidebar
