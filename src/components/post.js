import React from 'react';
import propTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';

const bgcolorWhite = '#fff';
const color = '#333';
const textColor = '#555';

const styles = StyleSheet.create({
  author: {
    color: textColor,
    fontSize: 13,
    marginBottom: 15,
  },
  description: {
    color: textColor,
    fontSize: 15,
  },
  post: {
    backgroundColor: bgcolorWhite,
    borderRadius: 6,
    height: 150,
    margin: 15,
    padding: 15,
  },
  title: {
    color,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Post = ({ data: { title, author, description } }) => (
  <View style={styles.post}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

Post.propTypes = {
  data: propTypes.shape({
    title: propTypes.string,
    author: propTypes.string,
    description: propTypes.string,
  }).isRequired,
};

export default Post;
