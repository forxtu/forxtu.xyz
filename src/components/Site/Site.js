import { api, scope } from 'cssapi'
import { func, object, bool } from 'prop-types'
import { merge, lensProp, view, compose, uniq } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setSidebarShape } from '../../state/ducks/layout/actions'
import { setFullscreen } from '../../state/ducks/actionBar/actions'

import globalStyles from '../styles/globalStyles'
import blockRightH from '../styles/mixins/blockRightH'
import blockCenterH from '../styles/mixins/blockCenterH'
import flexVertical from '../styles/mixins/flexVertical'

import SiteBody from './SiteBody'
import SiteFooter from './SiteFooter'
import SiteSidebar from './SiteSidebar'
import SiteHeader from './SiteHeader'
import SiteActionBar from './SiteActionBar'

export const Header = styled.div``
export const Body = styled.div``
export const Footer = styled.div``

const Layout = styled.div`
  ${globalStyles()};
  transition: 0.3s;
  left: ${props => (props.isSidebarOpen ? `320px` : `0`)};
  ${props => (props.isSidebarOpen ? blockRightH : blockCenterH)};
  ${api({
    minHeight: `100vh`,
    maxWidth: 1100,
    minWidth: 300
  })};

  @media screen and (max-width: 767px) {
    left: 0;
    padding: 0 20px;
    width: calc(100vw - 75px);
  }

  ${Header} {
    display: flex;
  }

  ${Header}, ${Footer} {
    flex: 0 0 auto;
  }

  ${Body} {
    flex: 2 0 auto;
  }

  ${Footer} {
    ${api({
      padding: scope`3ru 0 2ru`
    })};
  }
`

const Site = props => {
  const { data, children, isSidebarOpen, setSidebarShape } = props

  const {
    data: { title, owner, startYear, showCredit },
    structure: { pages, resources }
  } = data.site.siteMetadata

  const { categoriesGroup, keywordsGroup } = data.allMarkdownRemark;

  const pagesData = merge(pages, resources)

  return (
    <Layout isSidebarOpen={isSidebarOpen}>
      <Header>
        <SiteHeader categoriesGroup={categoriesGroup} />
        <SiteSidebar
          title={title}
          pages={pagesData}
          isSidebarOpen={isSidebarOpen}
          setSidebarShape={setSidebarShape}
          tags={keywordsGroup}
        />
        <SiteActionBar />
      </Header>
      <Body>
        <SiteBody>{children}</SiteBody>
      </Body>
      <Footer>
        <SiteFooter {...{ owner, startYear, showCredit }} />
      </Footer>
    </Layout>
  )
}

Site.propTypes = {
  children: object.isRequired,
  data: object.isRequired,
  isSidebarOpen: bool.isRequired,
  setSidebarShape: func.isRequired
}

const mapStateToProps = state => ({
  isSidebarOpen: state.layout.isSidebarOpen,
  isFullscreen: state.actionBar.isFullscreen
})

const mapDispatchToProps = {
  setSidebarShape,
  setFullscreen
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Site)
