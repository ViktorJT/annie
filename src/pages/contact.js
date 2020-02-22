import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from 'styled-components'

const Body = styled.div`
  margin: 0 auto;
  padding: 1.5em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  h3 {
    margin-bottom: 1em;
    font-weight: 500;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const Contact = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      {/* <SEO postNode={postNode} pagePath="contact" customTitle /> */}

      <Container>
        <Body>
          <h3>About</h3>
          <p>
            Annie is a multidisciplinary artist working mainly with film and
            photography. After graduating with a BA in Journalism, she
            understood that chasing stories wasn’t enough for her. So she
            decided to go back to school and study how to create them. She
            graduated with a BA in Experimental Film from the Utrecht school of
            Arts, where she began to develop her cinematic eye. During these
            studies she went on an exchange at the Rhode Island School of
            Design.
          </p>
          <p>
            This is where she started to develop her analogue camera skills,
            creating short films on 16mm film with a Bolex camera, editing on a
            Steenbeck and working in the darkroom for the first time. It was
            here where she really fell in love with image and the different ways
            to tell stories visually.
          </p>
          <p>
            Annie enjoys collaborating with clients to create visual concepts.
            This process is as much a part of her work as the creation of it.
            She is comfortable working with both digital and analogue techniques
            and has created work for clients such as Isabel Marant, Nina Ricci
            and Nike. Feel free to reach out for inquiries.
          </p>
          <h3>Drop her a line</h3>
          <p>+31 (0)6 38 33 05 45</p> <p>amvannoortwijk@gmail.com</p>
        </Body>
      </Container>
    </Layout>
  )
}

export default Contact
