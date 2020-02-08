import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 0 1em 0;
  padding: 4em 0;
  width: 100%;
  a {
    display: grid;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;

    & > div:first-child {
      z-index: 99;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0);
      color: red;
      font-size: 6em;
      font-weight: 600;
      text-align: center;
    }

    & > div {
      grid-area: 1 / 1 / 2 / 2;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      transition: all 0.24s;
    }

    &:hover > div:first-child {
      opacity: 1;
    }

    &:hover img {
      filter: blur(2px) grayscale(100%);
    }

    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      &:hover > div:first-child {
        opacity: 0;
      }

      &:hover img {
        filter: blur(0px) grayscale(0);
      }
    }
  }
`

const Title = styled.h2`
  display: block;
  font-size: 1.3em;
  font-weight: 600;
  text-transform: capitalize;
  flex-basis: 50%;
  margin-right: 1em;
  margin-bottom: 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: none;
  }
`

const Overlay = styled.div``

const Card = ({ slug, heroImage, title, body, ...props }) => {
  return (
    <Post>
      <Title>{title}</Title>
      <Link to={`/${slug}/`}>
        <Overlay>{title}</Overlay>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
      </Link>
    </Post>
  )
}

export default Card
