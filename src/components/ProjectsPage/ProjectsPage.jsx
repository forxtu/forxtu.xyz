import PropTypes from 'prop-types'
import React from 'react'
import { isEmpty } from 'ramda'

import { pluralise } from '../helpers/formatting'
import { markdownItemNodes } from '../helpers/markdown'
import {
  projectsPageMetadata,
  projectsResourceTitle
} from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import ProjectsList from './ProjectsList'

const ProjectsPage = ({ data }) => (
  <Page title={pluralise(projectsResourceTitle(data))}>
    <Metadata {...projectsPageMetadata(data)} />
    {isEmpty(data.projects) ? (
      <div>No Projects added yet</div>
    ) : (
      <ProjectsList projects={markdownItemNodes(data)} />
    )}
  </Page>
)

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ProjectsPage
