import React, { Component } from 'react'
import { api, scope } from 'cssapi'
import { func, bool } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import screenfull from 'screenfull'

import {
  FiHome,
  FiList,
  FiBookmark,
  FiTag,
  FiMaximize,
  FiMinimize,
  FiArrowUp
} from 'react-icons/fi'
import ScrollToTop from 'react-scroll-up'

import flexHorizontal from '../../styles/mixins/flexHorizontal'
import flexVertical from '../../styles/mixins/flexVertical'
import { setFullscreen } from '../../../state/ducks/actionBar/actions'

import VLayout from '../../shared/layouts/VLayout'
import ActionBarGroup from './ActionBarGroup'
import ActionBarButton from './ActionBarButton'
import ActionBarButtonLink from './ActionBarButtonLink'
import SupportButton from '../../shared/SupportButton'

const Layout = styled(VLayout)`
  align-items: center;
  position: fixed;
  display: flex;
  right: 0;
  justify-content: space-between;
  height: 100vh;
  border-left: 2px solid #f6f5f3;
  width: 60px;
  transition: 0.3s;
  ${api({
    padding: scope`1ru`
  })};
`

class SiteActionBar extends Component {
  componentDidMount() {
    if (screenfull.enabled) {
      screenfull.on(`change`, () => {
        this.props.setFullscreen()
      })
    }
  }

  fullscreenOnClick = () => {
    if (screenfull.enabled) {
      screenfull.toggle()
    }
  }

  render() {
    const { isFullscreen, setFullscreen } = this.props
    return (
      <Layout spacing="small">
        <ActionBarGroup>
          <ActionBarButtonLink to={`/`} title={`home`}>
            <FiHome />
          </ActionBarButtonLink>
          <ActionBarButtonLink to={`/articles`} title={`articles`}>
            <FiList />
          </ActionBarButtonLink>
          <ActionBarButtonLink to={`/categories`} title={`categories`}>
            <FiBookmark />
          </ActionBarButtonLink>
          <ActionBarButtonLink to={`/tags`} title={`tags`}>
            <FiTag />
          </ActionBarButtonLink>
        </ActionBarGroup>
        <ActionBarGroup>
          <ActionBarButton>
            <ScrollToTop
              showUnder={160}
              style={{ position: 'relative', bottom: 0, right: 0 }}
            >
              <FiArrowUp />
            </ScrollToTop>
          </ActionBarButton>
          <ActionBarButton>
            <SupportButton title="Buy me a coffee" />
          </ActionBarButton>
          {screenfull.enabled && (
            <ActionBarButton>
              {isFullscreen ? (
                <FiMinimize onClick={this.fullscreenOnClick} />
              ) : (
                <FiMaximize onClick={this.fullscreenOnClick} />
              )}
            </ActionBarButton>
          )}
        </ActionBarGroup>
      </Layout>
    )
  }
}

SiteActionBar.propTypes = {
  isFullscreen: bool.isRequired,
  setFullscreen: func.isRequired
}

const mapStateToProps = state => ({
  isFullscreen: state.actionBar.isFullscreen
})

const mapDispatchToProps = {
  setFullscreen
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteActionBar)
