import * as React from 'react'
import {FunctionComponent} from 'react'
import styled from 'styled-components/macro'
import Page from 'components/Page'

const AboutInner = styled.div`

`

const About: FunctionComponent = props => {

  return (
    <Page>
      <AboutInner>
        <h1>About</h1>
      </AboutInner>
    </Page>
  )
}

export default About
