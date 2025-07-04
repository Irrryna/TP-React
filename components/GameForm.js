import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function GameForm({ onAddGame }) {
  const [titre, setTitre] = useState('');
  const [prix, setPrix] = useState('');
  const [genre, setGenre] = useState('');
  const [imageUri, setImageUri] = useState(null); // pour l’image

  const handleAdd = () => {
    if (!titre || !prix || !genre) return;

    const nouveauJeu = {
      id: Date.now(),
      titre,
      prix: parseFloat(prix),
      genre,
      image: imageUri || null,
      vendu: false
    };

    onAddGame(nouveauJeu);

    // Réinitialisation des champs
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
          <Text style={{ textAlign: 'center' }}>Choisir une image</Text>
        )}
      </Pressable>
      <Button title="Ajouter +" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '90%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  imagePicker: {
    height: 100,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
