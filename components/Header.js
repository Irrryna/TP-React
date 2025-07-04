import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ pseudo, nombreDeJeux }) {
  return (
    <View style={styles.header}>
      <Text style={styles.pseudo}>{pseudo}</Text>
      <Text style={styles.total}>{nombreDeJeux} jeux</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 16,
    backgroundColor: '#4a90e2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pseudo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  total: {
    fontSize: 16,
    color: '#fff',
  },
});
