import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
// import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Gallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 92vw;
  max-width: ${props => props.theme.sizes.maxWidth};
  & > * {
    flex-basis: 32%;
    margin: 3em 1.5em;
    &:first-child {
      flex-basis: 80%;
    }
    ${'' /* This fixes an issue where not having at least one image and one video crashes the site for some reason to do with the graphql query below, i think. */}
    &:last-child {
      display: none;
    }
    &:nth-of-type(3n + 2) {
      align-self: center;
      flex-grow: 2;
    }
    &:nth-of-type(3n + 3) {
      flex-grow: 3;
      align-self: flex-start;
    }
    &:nth-of-type(3n + 4) {
      align-self: flex-end;
    }
  }
`

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    gallery,
    heroImage,
    body,
    // publishDate,
    // tags,
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      {/* <Hero title={title} image={heroImage} height={'50vh'} /> */}
      {/* {tags && <TagList tags={tags} />} */}
      {/* <PostDetails
          date={publishDate}
          timeoRead={body.childMarkdownRemark.timeToRead}
        /> */}
      <PageBody body={body} />
      <Gallery>
        {gallery.map(item => {
          if (item.image) {
            return <Img fluid={item.image.fluid} />
          } else {
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: item.embedCode.childMarkdownRemark.html,
                }}
              />
            )
          }
        })}
      </Gallery>
      <PostLinks previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      gallery {
        ... on ContentfulImage {
          image {
            fluid(maxWidth: 1440) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
        ... on ContentfulVideo {
          embedCode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
