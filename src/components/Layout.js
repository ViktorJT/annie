import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Menu from '../components/Menu'
// import Footer from '../components/Footer'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <div className="siteContent">
            <div className="uc">
              <div className="uc-wrapper">
                <p>under construction</p>
                <p>
                  <b>+31 (0)6 38 33 05 45</b>
                </p>
                <p>
                  <b>amvannoortwijk@gmail.com</b>
                </p>
              </div>
            </div>
            // ! uncomment to take back the siteConfig
            {/* <Menu /> */}
            {/* {children} */}
          </div>
          {/* <Footer /> */}
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  )
}

export default Template
