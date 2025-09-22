const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 1488;

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
  { id: 7, name: 'Director Orson Krennic', image: "/images/andor/director-orson-krennic.jpg" },
  { id: 8, name: 'B2EMO', image: '/images/andor/b2emo.jpeg' },
  { id: 9, name: 'K2SO', image: '/images/andor/k2so.jpeg' },
  { id: 10, name: 'Dedra Meero', image: '/images/andor/dedra-meero.jpeg' },
  { id: 11, name: 'Syril Karn', image: '/images/andor/syril-karn.jpeg' },
];

app.get('/api/characters/andor', (req, res) => {
  res.json(andorCharacters);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});