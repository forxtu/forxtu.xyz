import { api } from 'cssapi'
import styled from 'styled-components'
import linkProps from '../../styles/mixins/linkProps'
import BaseLink from './BaseLink'

const Button = styled(BaseLink)`
  ${linkProps(`c:black`, `c:white`)};
  
  padding: 8px 15px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  outline: none;
  margin: 0;

  :hover {
    background-color: #2EE59D;
    color: #fff !important;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: translateY(-7px);
  }
`

export default Button
