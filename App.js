import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import GameList from './components/GameList';
import GameForm from './components/GameForm';
import Header from './components/Header';
import GameFilters from './components/GameFilters';
import GameSort from './components/GameSort';

export default function App() {
  const [games, setGames] = useState([
    {
      "id": 1,
      "titre": "The Last of Us Part II",
      "prix": 25,
      "genre": "Action-Aventure"
    },
    {
      "id": 2,
      "titre": "FIFA 23",
      "prix": 20,
      "genre": "Sport"
    },
    {
      "id": 3,
      "titre": "Call of Duty: Modern Warfare II",
      "prix": 30,
      "genre": "FPS"
    },
    {
      "id": 4,
      "titre": "Horizon Forbidden West",
      "prix": 28,
      "genre": "Action-RPG"
    },
    {
      "id": 5,
      "titre": "Mario Kart 8 Deluxe",
      "prix": 35,
      "genre": "Course"
    },
    {
      "id": 6,
      "titre": "Animal Crossing: New Horizons",
      "prix": 22,
      "genre": "Simulation"
    },
    {
      "id": 7,
      "titre": "Elden Ring",
      "prix": 32,
      "genre": "Action-RPG"
    },
    {
      "id": 8,
      "titre": "God of War Ragnarök",
      "prix": 40,
      "genre": "Action-Aventure"
    },
    {
      "id": 9,
      "titre": "Gran Turismo 7",
      "prix": 27,
      "genre": "Course"
    },
    {
      "id": 10,
      "titre": "Minecraft",
      "prix": 18,
      "genre": "Sandbox"
    },
    {
      "id": 11,
      "titre": "Fortnite",
      "prix": 0,
      "genre": "Battle Royale"
    },
    {
      "id": 12,
      "titre": "Red Dead Redemption 2",
      "prix": 23,
      "genre": "Action-Aventure"
    },
    {
      "id": 13,
      "titre": "Cyberpunk 2077",
      "prix": 15,
      "genre": "RPG"
    },
    {
      "id": 14,
      "titre": "Resident Evil Village",
      "prix": 19,
      "genre": "Horreur"
    },
    {
      "id": 15,
      "titre": "Assassin's Creed Valhalla",
      "prix": 21,
      "genre": "Action-Aventure"
    }
  ]);

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  // Filtres + tri 
  let jeuxAffiches = selectedGenre
    ? games.filter((g) => g.genre === selectedGenre)
    : games;

  if (sortOrder === 'asc') {
    jeuxAffiches = [...jeuxAffiches].sort((a, b) => a.prix - b.prix);
  } else if (sortOrder === 'desc') {
    jeuxAffiches = [...jeuxAffiches].sort((a, b) => b.prix - a.prix);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header pseudo="Geek_NoLife" nombreDeJeux={games.length} />
      <GameForm onAddGame={(jeu) => setGames([...games, jeu])} />
      <GameFilters
        genres={[...new Set(games.map((g) => g.genre))]}
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />
      <GameSort
        sortOrder={sortOrder}
        onChangeSort={setSortOrder}
      />
      <GameList games={jeuxAffiches} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
