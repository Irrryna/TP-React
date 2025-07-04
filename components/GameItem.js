import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameItem({ game }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.titre}</Text>
      <Text>{game.genre} - {game.prix}€</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
