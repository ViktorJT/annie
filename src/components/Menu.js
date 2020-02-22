import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  background: white;
  width: 100%;
  padding: 4em 0;
`

const Logo = styled.div`
  display: inline-block;
`

const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    flex-flow: column nowrap;
    height: 4em;
  }

  ul {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      width: 260px;
    }
  }

  li {
    display: inline-block;
    margin-left: 2em;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      margin-left: 0;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 500;
    font-size: 0.9em;
    transition: all 0.24s;
    &:hover {
      color: ${props => props.theme.colors.base};
    }
  }
`

const activeLinkStyle = {
  color: '#121212',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <Logo>
          <Link to="/" activeStyle={activeLinkStyle}>
            Annie van Noortwijk
          </Link>
        </Logo>
        <ul>
          <li>
            <Link to="/commissioned/" activeStyle={activeLinkStyle}>
              Commissioned
            </Link>
          </li>
          <li>
            <Link to="/personal/" activeStyle={activeLinkStyle}>
              Personal
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
