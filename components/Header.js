import React from 'react';
import { Appbar } from 'react-native-paper';

const MyHeader = () => (
  <Appbar.Header style={styles.header}>
    <Appbar.Content
      title="Stopwatch"
      titleStyle={styles.title}
      style={styles.content}
    />
  </Appbar.Header>
);

const styles = {
  header: {
    backgroundColor: 'black',
    elevation: 0,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
};

export default MyHeader;