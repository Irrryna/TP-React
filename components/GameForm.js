import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  Text,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function GameForm({ onAddGame }) {
  const [titre, setTitre] = useState('');
  const [prix, setPrix] = useState('');
  const [genre, setGenre] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleAdd = () => {
    if (!titre || !prix || !genre) return;

    const nouveauJeu = {
      id: Date.now(),
      titre,
      prix: parseFloat(prix),
      genre,
      image: imageUri || null,
      vendu: false,
    };

    onAddGame(nouveauJeu);
    setTitre('');
    setPrix('');
    setGenre('');
    setImageUri(null);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Titre"
        value={titre}
        onChangeText={setTitre}
      />
      <TextInput
        style={styles.input}
        placeholder="Prix"
        keyboardType="numeric"
        value={prix}
        onChangeText={setPrix}
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
      />

      <Pressable style={styles.imagePicker} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        ) : (
          <Text style={{ textAlign: 'center' }}>📷 ++ image</Text>
        )}
      </Pressable>

      <Pressable onPress={handleAdd} style={styles.addButton}>
        <Text style={styles.addButtonText}>AJOUTER +</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  imagePicker: {
    height: 100,
    width: '90%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 10,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 2 },
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
