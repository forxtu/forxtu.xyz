import React from 'react'

import { FiHome, FiList, FiBookmark, FiTag } from 'react-icons/fi'

import ActionBarGroup from './ActionBarGroup'
import ActionBarButtonLink from './ActionBarButtonLink'

const SiteActionBarNav = () => (
  <ActionBarGroup>
    <ActionBarButtonLink to="/" title="home">
      <FiHome />
    </ActionBarButtonLink>
    <ActionBarButtonLink to="/articles" title="articles">
      <FiList />
    </ActionBarButtonLink>
    <ActionBarButtonLink to="/categories" title="categories">
      <FiBookmark />
    </ActionBarButtonLink>
    <ActionBarButtonLink to="/tags" title="tags">
      <FiTag />
    </ActionBarButtonLink>
  </ActionBarGroup>
)

SiteActionBarNav.propTypes = {}

export default SiteActionBarNav
