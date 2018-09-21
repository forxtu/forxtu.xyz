import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import VLayout from '../../../shared/layouts/VLayout'
import blockCenterH from '../../../styles/mixins/blockCenterH'

import SiteSocialList from './SiteSocialList'

const Layout = styled(VLayout)`
  ${blockCenterH};

  ${api({
    baseline: scope`s:smallprint`
  })};
`

const SiteSocial = () => (
  <Layout>
    <SiteSocialList />
  </Layout>
)

SiteSocial.propTypes = {
  
}

export default SiteSocial
