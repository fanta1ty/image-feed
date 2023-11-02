import { FlatList } from "react-native";
import PropTypes from "prop-types";
import React from "react";

import { getImageFromId } from "../utils/api";
import Card from "./Card";

const keyExtractor = ({ id }) => id.toString();

export default class CardList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  renderObject = (obj) => {
    const { id, author } = obj.item;
    return <Card fullName={author} image={{ uri: getImageFromId(id) }} />;
  };

  renderItem = ({ item: { id, author } }) => (
    <Card fullName={author} image={{ uri: getImageFromId(id) }} />
  );
  render() {
    const { items } = this.props;

    return (
      <FlatList
        data={items}
        renderItem={this.renderObject}
        keyExtractor={keyExtractor}
      />
    );
  }
}
