// @prettier

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import { APP_NAME } from '../../config'

const styles = {
  '@media (max-width: 800px)': {

  }
}

const HomePage = () => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <p>Home</p>
  </div>
)

export default injectSheet(styles)(HomePage)
