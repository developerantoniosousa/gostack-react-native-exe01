import '~/config/reactotron';
import '~/config/devtools';

import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import PostItem from '~/components/post';

const bgcolor = '#ef8b8b';
const bgcolorWhite = '#fff';
const titleColor = '#333';

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgcolorWhite,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  header: {
    alignItems: 'center',
    backgroundColor: bgcolorWhite,
    height: 50,
    justifyContent: 'center',
  },
  scrollview: {
    backgroundColor: bgcolor,
    flex: 1,
    paddingBottom: 40,
  },
  title: {
    color: titleColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
      {
        id: Math.random(),
        title: 'Apredendo React Native',
        author: 'Antônio Sousa',
        description:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>GoNative App</Text>
        </View>
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}
        >
          {posts.map(post => (
            <PostItem key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
