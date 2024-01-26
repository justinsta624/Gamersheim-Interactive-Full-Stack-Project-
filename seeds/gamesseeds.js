// Import necessary modules
const { Games } = require('../models');

// Seed data for the Games table
const gameSeedData = [
  {
    game_id: 1,
    title: 'Age of Empires 4',
    genre_id: 8,
    publisher: 'Microsoft',
    platform_id: 9,
    release_year: 2005,
    game_description: ' ',
    features: ' ', 
    cover_image: '/assets/images/Age_of_Empires_IV_Cover_Art.png',
    trailer: 'https://www.youtube.com/watch?v=5TnynE3PuDE',
  },
  {
    game_id: 2,
    title: 'Batman: arkham knight',
    genre_id: 1,
    publisher: 'Warner Bros',
    platform_id: 2, 
    release_year: 2015,
    game_description: ' ',
    features: ' ', 
    features: ' ', 
    cover_image: '/assets/images/Batman_Arkham_Knight_Cover_Art.jpg',
    trailer: 'https://www.youtube.com/watch?v=dxa34RatmSc',
  },
  {
    game_id: 3,
    title: 'Bayonetta',
    genre_id: 13,
    publisher: 'Nintendo',
    platform_id: 10,
    release_year: 2009,
    game_description: ' ',
    features: ' ', 
    cover_image: '/assets/images/Bayonetta_box_artwork.png',
    trailer: 'https://www.youtube.com/watch?v=h7PZ1i992kc',
  },
  {
    game_id: 4,
    title: 'Cyberpunk 2077',
    genre_id: 5, 
    publisher: 'CD Projekt',
    platform_id: 3, 
    release_year: 2020,
    game_description: ' ',
    features: ' ', 
    cover_image: '/assets/images/Cyberpunk_2077_box_art.jpg',
    trailer: 'https://www.youtube.com/watch?v=BO8lX3hDU30',
  },
  {
    game_id: 5,
    title: 'Dark Souls 3',
    genre_id: 5,
    publisher: 'Bandai Namco',
    platform_id: 7,
    release_year: 2016,
    game_description: ' ',
    features: ' ', 
    cover_image: '/assets/images/Dark_souls_3_cover_art.jpg',
    trailer: 'https://www.youtube.com/watch?v=jDMj2m50QrM',
  },
  {
    game_id: 6,
    title: 'ELDEN RING',
    genre_id: 5,
    publisher: 'Bandai Namco',
    platform_id: 4,
    release_year: 2022,
    game_description: ' ',
    features: ' ', 
    cover_image: '/assets/images/Elden_Ring_Box_art.jpg',
    trailer: 'https://www.youtube.com/watch?v=AKXiKBnzpBQ',
  },
  {
    game_id: 7,
    title: 'Grand Theft Auto Trilogy',
    genre_id: 2, 
    publisher: 'Rockstar Games',
    platform_id: 8, 
    release_year: 2021,
    game_description: ' ',
    features: ' ', 
    cover_image: '/assets/images/Grand_Theft_Auto_-_The_Trilogy_-_The_Definitive_Edition.jpg',
    trailer: 'https://www.youtube.com/watch?v=mtyOXKB0M5o',
  },
  {
    game_id: 8,
    title: 'Halo: Combat Evolved',
    genre_id: 10, 
    publisher: 'Microsoft',
    platform_id: 5, 
    release_year: 2001,
    game_description: ' ',
    features: ' ', 
    cover_image: '/assets/images/Halo_-_Combat_Evolved_(XBox_version_-_box_art).jpg',
    trailer: 'https://www.youtube.com/watch?v=v0kHiEME0Vk',
  },
  {
    game_id: 9,
    title: 'Mario Kart 8 Deluxe',
    genre_id: 4,
    publisher: 'Nintendo',
    platform_id: 10,
    release_year:2014,
    game_description: ' ',
    features: ' ', 
    cover_image: '/assets/images/MarioKart8Boxart.jpg',
    trailer: 'https://www.youtube.com/watch?v=ZKB9FEXhJ68',
  },
  {
    game_id: 10,
    title: 'Minecraft',
    genre_id: 8,
    publisher: 'Mojang Studios',
    platform_id: 9,
    release_year: 2011,
    game_description: ' ',
    features: ' ', 
    cover_image: '/assets/images/Minecraft_cover.png',
    trailer: 'https://www.youtube.com/watch?v=MmB9b5njVbA',
  },
];


const seedGames = () => Games.bulkCreate(gameSeedData);

module.exports = seedGames;