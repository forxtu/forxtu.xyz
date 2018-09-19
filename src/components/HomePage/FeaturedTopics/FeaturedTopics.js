import PropTypes from 'prop-types'
import { isEmpty } from 'ramda'
import React from 'react'

import FeaturedTopicsList from './FeaturedTopicsList'

const Articles = ({ articles }) => (
  <React.Fragment>
    {isEmpty(articles) ? (
      <div>No Articles Yet</div>
    ) : (
      <FeaturedTopicsList articles={articles} />
    )}
  </React.Fragment>
)

Articles.propTypes = {
  articles: PropTypes.array.isRequired
}

export default Articles
