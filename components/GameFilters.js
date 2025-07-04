// components/GameFilters.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function GameFilters({ genres, selectedGenre, onSelectGenre }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Filtrer par genre :</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedGenre}
          onValueChange={(itemValue) =>
            onSelectGenre(itemValue === 'TOUS' ? null : itemValue)
          }
          style={styles.picker}
        >
          <Picker.Item label="Tous les genres" value="TOUS" />
          {genres.map((genre) => (
            <Picker.Item key={genre} label={genre} value={genre} />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  picker: {
    height: 40,
    width: '100%',
  },
});
