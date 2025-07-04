import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function GameFilters({ genres, selectedGenre, onSelectGenre }) {
  return (
    <ScrollView horizontal style={styles.container}>
      <Button
        title="Tous"
        onPress={() => onSelectGenre(null)}
        color={selectedGenre === null ? '#4a90e2' : '#888'}
      />
      {genres.map((genre) => (
        <Button
          key={genre}
          title={genre}
          onPress={() => onSelectGenre(genre)}
          color={selectedGenre === genre ? '#4a90e2' : '#888'}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
});
