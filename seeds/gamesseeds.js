// Import necessary modules
const {Games} = require('../models');

// Seed data for the Games table
const gamesSeedData = [
  {
 
    title: 'Age of Empires 4',
    genre_name: 'Strategy',
    genre_id: 8,
    publisher: 'Microsoft',
    platform_name: 'PC',
    release_year: 2005,
    game_description: 'Age of Empires IV is a real-time strategy video game.',
    features: 'https://en.wikipedia.org/wiki/Age_of_Empires_IV', 
    cover_image: '/images/Age_of_Empires_IV_Cover_Art.png',
    trailer: 'https://www.youtube.com/watch?v=5TnynE3PuDE',
  },
  {

    title: 'Batman: Arkham knight',
    genre_name: 'Action',
    genre_id: 1,
    publisher: 'Warner Bros',
    platform_name: 'Playstation 3', 
    release_year: 2015,
    game_description: 'Batman: Arkham Knight is an action-adventure game.',
    features: 'https://en.wikipedia.org/wiki/Batman:_Arkham_Knight', 
    cover_image: '/images/Batman_Arkham_Knight_Cover_Art.jpg',
    trailer: 'https://www.youtube.com/watch?v=dxa34RatmSc',
  },
  {
    
    title: 'Bayonetta',
    genre_name: 'Hack and Slash',
    genre_id: 13,
    publisher: 'Nintendo',
    platform_name: 'Nintendo Switch',
    release_year: 2009,
    game_description: 'Bayonetta is a series of hack and slash action-adventure games.',
    features: 'https://en.wikipedia.org/wiki/Bayonetta_(video_game)', 
    cover_image: '/images/Bayonetta_box_artwork.png',
    trailer: 'https://www.youtube.com/watch?v=h7PZ1i992kc',
  },
  {

    title: 'Dark Souls 3',
    genre_name: 'RPG',
    genre_id: 5,
    publisher: 'Bandai Namco',
    platform_name: 'Xbox One',
    release_year: 2016,
    game_description: 'Dark Souls III is an action role-playing game.',
    features: 'https://en.wikipedia.org/wiki/Dark_Souls_III', 
    cover_image: '/images/Dark_souls_3_cover_art.jpg',
    trailer: 'https://www.youtube.com/watch?v=jDMj2m50QrM',
  },
  {
 
    title: 'ELDEN RING',
    genre_name: 'RPG',
    genre_id: 5,
    publisher: 'Bandai Namco',
    platform_name: 'Playstation 5',
    release_year: 2022,
    game_description: 'Dark Souls III is an action role-playing game..',
    features: 'https://en.wikipedia.org/wiki/Elden_Ring', 
    cover_image: '/images/Elden_Ring_Box_art.jpg',
    trailer: 'https://www.youtube.com/watch?v=AKXiKBnzpBQ',
  },
  {

    title: 'Grand Theft Auto Trilogy',
    genre_name: 'Adventure', 
    genre_id: 2,
    publisher: 'Rockstar Games',
    platform_name: 'Xbox Series X', 
    release_year: 2021,
    game_description: 'Grand Theft Auto: The Trilogy is a compilation of three action-adventure games in the Grand Theft Auto series: Grand Theft Auto III, Grand Theft Auto: Vice City, and Grand Theft Auto: San Andreas.',
    features: 'https://en.wikipedia.org/wiki/Grand_Theft_Auto:_The_Trilogy_–_The_Definitive_Edition', 
    cover_image: '/images/Grand_Theft_Auto_-_The_Trilogy_-_The_Definitive_Edition.jpg',
    trailer: 'https://www.youtube.com/watch?v=mtyOXKB0M5o',
  },
  {

    title: 'Halo: Combat Evolved',
    genre_name: 'Shooter', 
    genre_id: 10,
    publisher: 'Microsoft',
    platform_name: 'Xbox', 
    release_year: 2001,
    game_description: 'Halo: Combat Evolved is a first-person shooter video game.',
    features: 'https://en.wikipedia.org/wiki/Halo:_Combat_Evolved', 
    cover_image: '/images/Halo_-_Combat_Evolved_(XBox_version_-_box_art).jpg',
    trailer: 'https://www.youtube.com/watch?v=v0kHiEME0Vk',
  },
  {
   
    title: 'Minecraft',
    genre_name: 'Strategy',
    genre_id: 8,
    publisher: 'Mojang Studios',
    platform_name: 'PC',
    release_year: 2011,
    game_description: 'Minecraft is a sandbox game.',
    features: 'https://en.wikipedia.org/wiki/Minecraft', 
    cover_image: '/images/Minecraft_cover.png',
    trailer: 'https://www.youtube.com/watch?v=MmB9b5njVbA',
  },
];


const seedGames = () => Games.bulkCreate(gamesSeedData);

module.exports = seedGames;

