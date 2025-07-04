// components/GameList.js
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import GameItem from './GameItem';

export default function GameList({ games }) {
  return (
    <View style={styles.list}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameItem game={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '90%',
    marginTop: 10,
  },
});
