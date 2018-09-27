import React from 'react'
import { api } from 'cssapi'
import { func, bool, object } from 'prop-types'
import styled from 'styled-components'

import { FiMaximize, FiMinimize, FiArrowUp, FiCircle } from 'react-icons/fi'
import ScrollToTop from 'react-scroll-up'

import ActionBarGroup from './ActionBarGroup'
import ActionBarButton from './ActionBarButton'
import SupportButton from '../../shared/SupportButton'
import theme from '../../styles/theme'
import darkTheme from '../../styles/darkTheme'

const LightThemeBtn = styled(FiCircle)`
  border-radius: 50%;
  ${api({
    backgroundColor: `c:white`,
    color: `c:white`
  })};
`
const DarkThemeBtn = styled(FiCircle)`
  border-radius: 50%;
  ${api({
    backgroundColor: `c:darkGrey`,
    color: `c:darkGrey`
  })};
`

const SiteActionBarActions = ({
  isFullscreen,
  screenfull,
  fullscreenOnClick,
  currentTheme,
  setCurrentTheme
}) => (
  <ActionBarGroup>
    <ActionBarButton>
      <ScrollToTop
        showUnder={160}
        style={{ position: `relative`, bottom: 0, right: 0 }}
      >
        <FiArrowUp />
      </ScrollToTop>
    </ActionBarButton>
    <ActionBarButton>
      {currentTheme === theme ? (
        <DarkThemeBtn
          title="Toggle to Dark theme"
          onClick={() => setCurrentTheme(darkTheme)}
        />
      ) : (
        <LightThemeBtn
          title="Toggle to Light theme"
          onClick={() => setCurrentTheme(theme)}
        />
      )}
    </ActionBarButton>
    <ActionBarButton>
      <SupportButton title="Buy me a coffee" />
    </ActionBarButton>
    {screenfull.enabled && (
      <ActionBarButton>
        {isFullscreen ? (
          <FiMinimize onClick={fullscreenOnClick} />
        ) : (
          <FiMaximize onClick={fullscreenOnClick} />
        )}
      </ActionBarButton>
    )}
  </ActionBarGroup>
)

SiteActionBarActions.propTypes = {
  isFullscreen: bool.isRequired,
  screenfull: object.isRequired,
  fullscreenOnClick: func.isRequired
}

export default SiteActionBarActions
