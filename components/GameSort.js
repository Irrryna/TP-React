import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function GameSort({ sortOrder, onChangeSort }) {
  return (
    <View style={styles.container}>
      <Button
        title="Pas de tri"
        onPress={() => onChangeSort(null)}
        color={sortOrder === null ? '#4a90e2' : '#888'}
      />
      <Button
        title="Prix croissant"
        onPress={() => onChangeSort('asc')}
        color={sortOrder === 'asc' ? '#4a90e2' : '#888'}
      />
      <Button
        title="Prix décroissant"
        onPress={() => onChangeSort('desc')}
        color={sortOrder === 'desc' ? '#4a90e2' : '#888'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});
