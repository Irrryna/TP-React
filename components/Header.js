import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Header({ pseudo, nombreDeJeux, total }) {
  return (
    <View style={styles.header}>
      <Text style={styles.pseudo}>{pseudo}</Text>
      <View style={styles.right}>
        <Text style={styles.total}>{nombreDeJeux} jeux</Text>
        <Text style={styles.encaissé}> € {total} €</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 12,
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
  right: {
    alignItems: 'flex-end',
  },
  total: {
    fontSize: 16,
    color: '#fff',
  },
  encaissé: {
    fontSize: 14,
    color: '#fff',
  },
});

