import React, {FunctionComponent} from 'react'
import styled from 'styled-components/macro'
import Container from 'components/ui/Container'

interface Props {
  container?: boolean
}

const PageInner = styled.div`
  width: inherit;
  height: inherit;
  & > * {
    width: inherit;
    height: inherit;
  }
`

const Page: FunctionComponent<Props> = props => {
  const {children, container} = props
  return container ?
    (
      <Container>
        <PageInner>
          {children}
        </PageInner>
      </Container>
    ) :
    (
      <PageInner>
        {children}
      </PageInner>
    )
}

Page.defaultProps = {
  container: false
}

export default Page
