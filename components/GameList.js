import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import GameItem from './GameItem';

export default function GameList({ games }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameItem game={item} />}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
  },
  list: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});

