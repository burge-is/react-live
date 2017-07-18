import React from 'react'
import styled, { css } from 'styled-components'
import * as polished from 'polished'
import { foreground, red, lightGrey } from '../utils/colors'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
`


const column = css`
  width: 50%;
  max-width: 50%;
  display:inline;
  float:left;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`

const StyledEditor = styled(LiveEditor)`
  background: ${lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(14)};
  height: ${polished.rem(350)};
  overflow: scroll;

  ${column}
`

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: ${polished.rem(350)};
  overflow: hidden;

  ${column}
`

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
`

const LiveEdit = ({ noInline, code }) => (
  
  <StyledProvider
    code={code}
    noInline={noInline}
    mountStylesheet={false}
  >
    <StyledEditor />
    <StyledPreview />
  <StyledError />
</StyledProvider>
  
)

export default LiveEdit
