import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func } from 'prop-types'
import styled from 'styled-components'
import { uniq } from 'ramda'

import { pushTagsToList } from '../../state/ducks/fetch/actions'
import { fetchTags } from '../helpers/fetchTags'

import HLayout from '../shared/layouts/HLayout'
import flexJustifyCenter from '../styles/mixins/flexJustifyCenter'
import TagsListItem from './TagsListItem'

const Layout = styled(HLayout)`
  ${flexJustifyCenter};
  flex-wrap: wrap;
`

class TagsList extends Component {
  static propTypes = {
    allTags: array.isRequired,
    listOfTags: array.isRequired,
    pushTagsToList: func.isRequired
  }

  static defaultProps = {
    allTags: [],
    listOfTags: [],
    pushTagsToList: (x) => x
  }

  // componentDidMount() {
  //   this.fetchAndPushTags();
  // }

  // setTagsInArray() {
  //   return this.props.allTags
  //     .map(tag => tag.fieldValue.split(`, `))
  //     .reduce((acc, val) => acc.concat(val), [])
  // }

  // async fetchAndPushTags() {
  //   const arrayOfTags = await this.setTagsInArray();
  //   await this.props.pushTagsToList(uniq(arrayOfTags));
  // }

  render() {
    // const { listOfTags } = this.props;
    const listOfTags = uniq(fetchTags(this.props.allTags));
    return(
      <Layout>
        {listOfTags.map(tag => <TagsListItem key={tag} tag={tag} />)}
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  listOfTags: state.fetch.listOfTags
})

const mapDispatchToProps = {
  pushTagsToList
}


export default connect(mapStateToProps, mapDispatchToProps)(TagsList)
