import {createGlobalStyle} from "styled-components"
import {lightGray} from 'styles/modules/colors'
import bootstrap from 'styles/bootstrap'

export default createGlobalStyle`
  ${bootstrap};
  
  html {
    font-size: 100%;
  }
  
  body {
    background: ${lightGray};
    font-family: 'Nunito', sans-serif;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    font-family: 'Hind Siliguri', sans-serif;
  }
`
