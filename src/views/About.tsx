import * as React from 'react'
import {FunctionComponent} from 'react'
import styled from 'styled-components/macro'
import Page from 'components/Page'
import Card from 'components/ui/Card'

const AboutInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const About: FunctionComponent = props => {

  return (
    <Page>
      <AboutInner>
        <Card>
          <h1>About</h1>
        </Card>
      </AboutInner>
    </Page>
  )
}

export default About
