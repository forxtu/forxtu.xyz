import { api, scope } from 'cssapi'
import styled from 'styled-components'

import flexHorizontal from '../../styles/mixins/flexHorizontal'
import linkProps from '../../styles/mixins/linkProps'

export default styled.div`
  ${flexHorizontal};
  ${linkProps(`c:text`, `c:highlight`)};
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
  ${api({
    color: `c:text`
  })}
`