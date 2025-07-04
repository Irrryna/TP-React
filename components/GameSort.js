import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function GameSort({ sortOrder, onChangeSort }) {
  return (
    <View style={styles.container}>
      <Button
        title="Nos sugestions"
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
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
  },
});
