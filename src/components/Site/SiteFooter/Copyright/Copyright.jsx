import { api } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import SupportButton from '../../../shared/SupportButton'
import flexAlignCenter from '../../../styles/mixins/flexAlignCenter'

const Layout = styled.span`
  ${flexAlignCenter};
  position: relative;
  text-align: center;
  justify-content: center;
  ${api({
    color: `c:text`,
    padding: [`0.5ru 2ru`, `1ru 2ru`]
  })};
`

const Copyright = ({ owner, dateRange }) => (
  <Layout>
    Created with <SupportButton title="love and support of coffee" /> by {owner}
    {` `}
    {dateRange}
  </Layout>
)

Copyright.propTypes = {
  owner: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired
}

export default Copyright
