import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  margin: 0 0 1em 0;
  padding: 4em 0;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  a {
    display: flex;
    flex-flow: row;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 100%;
      width: 100%;
    }
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  flex-basis: 50%;
`

const Card = ({ slug, heroImage, title, body, ...props }) => {
  return (
    <Post>
      <Link to={`/${slug}/`}>
        <Title>{title}</Title>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
      </Link>
    </Post>
  )
}

export default Card
