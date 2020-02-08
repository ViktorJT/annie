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
  display: block;
  font-size: 1.3em;
  font-weight: 600;
  text-transform: capitalize;
  flex-basis: 50%;
  margin-right: 1em;
  margin-bottom: 1em;
`

// const Overlay = styled.div`
// `

const Card = ({ slug, heroImage, title, body, ...props }) => {
  return (
    <Post>
      <Title>{title}</Title>
      <Link to={`/${slug}/`}>
        {/* <Overlay>{title}</Overlay> */}
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
      </Link>
    </Post>
  )
}

export default Card
