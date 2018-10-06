// -----------------------------------------------------------------------------
// Contact Page > View >
// -----------------------------------------------------------------------------

import PropTypes from 'prop-types'
import React from 'react'

import MarkdownContent from '../shared/MarkdownContent'
import { markdownItemHTMLAst } from '../helpers/markdown'
import { contactPageMetadata } from '../helpers/siteMetadata'
// import ButtonLink from '../shared/links/ButtonLink'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import ContactForm from './ContactForm'

const ContactPage = ({ data }) => (
  <Page title="Contact me">
    <Metadata {...contactPageMetadata(data)} />
    <MarkdownContent htmlAst={markdownItemHTMLAst(data)} />
    <ContactForm />
  </Page>
)

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ContactPage
