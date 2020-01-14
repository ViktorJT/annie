import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

// Reference from the annie-static backup:
{
  /* <header>
      <div class="description">
        <h2>Project Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque malesuada
          suscipit. Maecenas porttitor est interdum lorem egestas convallis. Integer ac ligula quis
          ligula luctus rhoncus. Quisque dictum hendrerit dapibus.
        </p>
        <p>
          Nam sollicitudin, risus nec vulputate faucibus, tellus est pulvinar odio, id iaculis dolor
          nunc in nisl. Integer fringilla risus dolor, at bibendum enim dapibus vitae.
        </p>
      </div>
    </header> */
}

// header,
// nav,
// footer {
//   width: 100%;
//   max-width: 1024px;
//   margin: 0 auto;
//   display: flex;
//   padding: 80px 2vw 80px 2vw;
// }

// header {
//   height: 56vh;
//   justify-content: space-around;
// }

// .description {
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-content: space-around;
//   width: 640px;
// }

// .description a {
//   font-style: italic;
//   display: inline-block;
//   width: 100%;
//   text-align: right;
//   color: gray;
// }

// .description p:first-of-type {
//   text-align: justify;
// }

// .description > p {
//   width: 300px;
// }

// .description > h2 {
//   width: 100%;
//   text-align: center;
//   text-transform: uppercase;
//   font-size: 13px;
// }

// @media only screen and (max-width: 640px) {
//   .description {
//     width: 88vw;
//   }

//   .description > p,
//   .description p:first-of-type {
//     width: 100%;
//     text-align: center;
//   }

//   header {
//     height: 40vh;
//     justify-content: space-around;
//   }

//   header {
//     padding: 32px 2vw 32px 2vw;
//   }
// }

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  ${'' /* 
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  } */}

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
  ${'' /* 
  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  } */}
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
