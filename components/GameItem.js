import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function GameItem({ game }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{game.titre}</Text>

      {game.image && (
        <Image 
        source={
          typeof game.image === 'string' 
          ? { uri: game.image }
          : game.image //image du PC
          } 
          style={styles.image} 
          />
      )}

      <Text style={styles.price}>{game.prix} €</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 210,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  price: {
    fontSize: 13,
    color: '#333',
  },
});
