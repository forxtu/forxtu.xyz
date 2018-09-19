import { api, scope } from 'cssapi'
import styled from 'styled-components'

const TitleSecondary = styled.h2`
  ${api({
    baseline: scope`s:secondaryTitle`
  })};
  font-weight: 700;
`

export default TitleSecondary
