import { api } from 'cssapi'
import styled from 'styled-components'
import linkProps from '../../styles/mixins/linkProps'
import BaseLink from './BaseLink'

const Button = styled(BaseLink)`
  ${linkProps(`c:buttonC`, `c:white`)};
  
  padding: 8px 15px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  outline: none;
  margin: 0;

  :hover {
    transform: translateY(-7px);
    ${api({
      backgroundColor: `c:highlight`,
      boxShadow: `0px 15px 20px c:buttonShadow`
    })}
  }
  ${api({
    backgroundColor: `c:buttonBg`,
    color: `c:buttonC`
  })}
`

export default Button
