import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1em;
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  margin: 3em 0 0 0;
  line-height: 1.2;
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    text-align: left;
    margin: 0 1.5em;
  }
`

const PageTitle = props => {
  return <Title small={props.small}>{props.children}</Title>
}

export default PageTitle
