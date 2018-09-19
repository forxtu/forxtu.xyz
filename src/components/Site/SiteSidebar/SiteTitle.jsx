import { api, scope } from 'cssapi'
import styled from 'styled-components'

import blockCenterH from '../../styles/mixins/blockCenterH'

export default styled.div`
  ${blockCenterH};
  padding-top: 10px;
  ${api({
    fontFamily: `Limelight`,
    baseline: scope`s:primaryTitle`
  })};
`
