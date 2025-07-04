import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import GameList from './components/GameList';
import GameForm from './components/GameForm';
import Header from './components/Header';
import GameFilters from './components/GameFilters';
import GameSort from './components/GameSort';

// Import des images locales
import lastofusImg from './assets/images/lastofus.png';
import fifaImg from './assets/images/fifa.png';

export default function App() {
  const [games, setGames] = useState([
    {
      id: 1,
      titre: "The Last of Us Part II",
      prix: 25,
      genre: "Action-Aventure",
      image: lastofusImg,
      vendu: false,
    },
    {
      id: 2,
      titre: "FIFA 23",
      prix: 20,
      genre: "Sport",
      image: fifaImg,
      vendu: false,
    },
    {
      id: 3,
      titre: "Call of Duty: Modern Warfare II",
      prix: 30,
      genre: "FPS",
      vendu: false,
    },
    {
      id: 4,
      titre: "Horizon Forbidden West",
      prix: 28,
      genre: "Action-RPG",
      vendu: false,
    },
    {
      id: 5,
      titre: "Mario Kart 8 Deluxe",
      prix: 35,
      genre: "Course",
      vendu: false,
    },
    {
      id: 6,
      titre: "Animal Crossing: New Horizons",
      prix: 22,
      genre: "Simulation",
      vendu: false,
    },
    {
      id: 7,
      titre: "Elden Ring",
      prix: 32,
      genre: "Action-RPG",
      vendu: false,
    },
    {
      id: 8,
      titre: "God of War Ragnarök",
      prix: 40,
      genre: "Action-Aventure",
      vendu: false,
    },
    {
      id: 9,
      titre: "Gran Turismo 7",
      prix: 27,
      genre: "Course",
      vendu: false,
    },
    {
      id: 10,
      titre: "Minecraft",
      prix: 18,
      genre: "Sandbox",
      vendu: false,
    },
    {
      id: 11,
      titre: "Fortnite",
      prix: 0,
      genre: "Battle Royale",
      vendu: false,
    },
    {
      id: 12,
      titre: "Red Dead Redemption 2",
      prix: 23,
      genre: "Action-Aventure",
      vendu: false,
    },
    {
      id: 13,
      titre: "Cyberpunk 2077",
      prix: 15,
      genre: "RPG",
      vendu: false,
    },
    {
      id: 14,
      titre: "Resident Evil Village",
      prix: 19,
      genre: "Horreur",
      vendu: false,
    },
    {
      id: 15,
      titre: "Assassin's Creed Valhalla",
      prix: 21,
      genre: "Action-Aventure",
      vendu: false,
    },
  ]);

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  // 💶 Fonction pour marquer comme vendu
  const marquerCommeVendu = (id) => {
    const jeuxMisAJour = games.map((jeu) =>
      jeu.id === id ? { ...jeu, vendu: true } : jeu
    );
    setGames(jeuxMisAJour);
  };

  // 💰 Calcul du total encaissé
  const totalEncaissé = games
    .filter((g) => g.vendu)
    .reduce((total, g) => total + g.prix, 0);

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
      <Header
        pseudo="Geek_NoLife"
        nombreDeJeux={games.length}
        total={totalEncaissé}
      />
      <GameForm onAddGame={(jeu) => setGames([...games, jeu])} />
      <GameFilters
        genres={[...new Set(games.map((g) => g.genre))]}
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />
      <GameSort sortOrder={sortOrder} onChangeSort={setSortOrder} />
      <GameList games={jeuxAffiches} onVendre={marquerCommeVendu} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#cacaca',
  },
});
