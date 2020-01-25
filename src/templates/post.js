import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
// import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Gallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 92vw;
  max-width: 1440px;
  & div {
    min-width: 360px;
    padding: 2vw;
    max-height: 80vh;
    &:nth-of-type(3n + 1) {
      align-self: center;
      width: 100%;
    }
    &:nth-of-type(3n + 2) {
      align-self: flex-start;
      width: 49%;
    }
    &:nth-of-type(3n + 3) {
      align-self: flex-end;
      width: 32%;
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
          timeToRead={body.childMarkdownRemark.timeToRead}
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
                  __html:
                    item.childContentfulVideoEmbedCodeTextNode
                      .childMarkdownRemark.html,
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
          childContentfulVideoEmbedCodeTextNode {
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
