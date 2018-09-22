import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func } from 'prop-types'
import styled from 'styled-components'
import { uniq } from 'ramda'

import { pushTagsToList } from '../../state/ducks/fetch/actions'

import TagsListItem from './TagsListItem'

const ListWrapper = styled.ul`
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

  componentDidMount() {
    // const tagsData = this.splitByComa(this.getAllInOneArray);
    // const tagsData = this.result();
    this.fetchAndPushTags();
    // this.props.pushTagsToList(uniq(tagsData));
  }

  getAllInOneArray = (arr) => arr.reduce(( acc, val ) => acc.concat(val), []);
    
  // splitByComa(callback) {
  //   const arrayOfTags = [];
  //   this.props.allTags.map(tag => {
  //     arrayOfTags.push(tag.fieldValue.split(`, `))
  //   })
  //   return callback(arrayOfTags);
  // }

  splitByComa() {
    const arrayOfTags = [];
    this.props.allTags.map(tag => {
      arrayOfTags.push(tag.fieldValue.split(`, `))
    });
    return arrayOfTags;
  }

  async fetchAndPushTags() {
    const splittedByComa = await this.splitByComa();
    const tagsData = await this.getAllInOneArray(splittedByComa);
    this.props.pushTagsToList(uniq(tagsData));
  }

  render() {
    const { listOfTags} = this.props;
    return(
      <ListWrapper>
        {listOfTags.map(tag => <TagsListItem key={tag} tag={tag} />)}
      </ListWrapper>
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
