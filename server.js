const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 1488;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// Пример данных (пока что просто массив, потом будет база данных)
const andorCharacters = [
  { id: 1, name: 'Cassian Andor', image: "/images/andor/cassian-andor.jpeg" },
  { id: 2, name: 'Mon Mothma', image: '/images/andor/mon-mothma.jpeg' },
  { id: 3, name: 'Luthen Rael', image: "/images/andor/luthen-rael.jpeg" },
  { id: 4, name: 'Bix Caleen', image: '/images/andor/bix-caleen.jpeg' },
  { id: 5, name: 'Saw Gerrera', image: "/images/andor/saw-gerrera.jpeg" },
  { id: 6, name: 'Kleya Marki', image: '/images/andor/kleya-marki.jpeg' },
  { id: 7, name: 'Director Orson Krennic', image: "/images/andor/director-orson-krennic.jpeg" },
  { id: 8, name: 'B2EMO', image: '/images/andor/b2emo.jpeg' },
  { id: 9, name: 'K2SO', image: '/images/andor/k2so.jpeg' },
  { id: 10, name: 'Dedra Meero', image: '/images/andor/dedra-meero.jpeg' },
  { id: 11, name: 'Syril Karn', image: '/images/andor/syril-karn.jpeg' },
];

app.get('/api/characters/andor', (req, res) => {
  res.json(andorCharacters);
});


const roqueOneCharacters = [
  { id: 1, name: 'Jyn Erso', image: "/images/roqueOne/jyn-erso.jpeg"},
  { id: 2, name: 'Cassian Andor', image: "/images/roqueOne/cassian-andor-roqueone.jpeg"},
  { id: 3, name: 'K-2SO', image: "/images/roqueOne/k2so.jpeg"},
  { id: 4, name: 'Director Orson Krennic', image: "/images/roqueOne/director-orson-krennic.jpeg"},
  { id: 5, name: 'Galen Erso', image: "/images/roqueOne/galen-erso.jpeg"},
  { id: 6, name: 'Saw Gerrera', image: "/images/roqueOne/saw-gerrera.jpeg"},
  { id: 7, name: 'Chirrut Imwe', image: "/images/roqueOne/chirrut-imwe.jpeg"},
  { id: 8, name: 'Baze Malbus', image: "/images/roqueOne/baze-malbus.jpeg"},
  { id: 9, name: 'Bodhi Rook', image: "/images/roqueOne/bodhi-rook.jpeg"},
  { id: 10, name: 'Leia Organa', image: "/images/roqueOne/leia-organa.jpeg"},
];

app.get('/api/characters/roqueOne', (req, res) => {
  res.json(roqueOneCharacters);
});


const mandalorianCharacters = [
  { id: 1, name: "Din Djarin (The Mandalorian)", image: "/images/mandalorian/din-djarin.jpeg"},
  { id: 2, name: "Grogu", image: "/images/mandalorian/grogu.jpeg"},
  { id: 3, name: "Bo-Katan Kryze", image: "/images/mandalorian/bo-katan.jpeg"},
  { id: 4, name: "Moff Gideon", image: "/images/mandalorian/moff-gideon.jpeg"},
  { id: 5, name: "Paz Vizla", image: "/images/mandalorian/paz-vizla.jpeg"},
  { id: 6, name: "The Armorer", image: "/images/mandalorian/the-armorer.jpeg"},
];

app.get('/api/characters/mandalorian', (req, res) => {
  res.json(mandalorianCharacters);
});


const ahsokaCharacters = [
  { id: 1, name: "Ahsoka Tano", image: "/images/ahsoka/ahsoka.jpeg"},
  { id: 2, name: "Sabine Wren", image: "/images/ahsoka/sabine-wren.jpeg"},
  { id: 3, name: "Hera Syndulla", image: "/images/ahsoka/hera-syndulla.jpeg"},
  { id: 4, name: "Ezra Bridger", image: "/images/ahsoka/ezra-bridger.jpeg"},
  { id: 5, name: "Grand Admiral Thrawn", image: "/images/ahsoka/grand-admiral-thrawn.jpeg"},
  { id: 6, name: "Baylan Skoll", image: "/images/ahsoka/baylan-skoll.jpeg"},
];

app.get('/api/characters/ahsoka', (req, res) => {
  res.json(ahsokaCharacters);
});


app.get('/healthz', (req, res) => {
  res.status(200).send('Backend is running okay!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});