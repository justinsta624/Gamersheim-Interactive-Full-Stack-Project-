// Import necessary modules
const sequelize = require('../config/connection');
require('dotenv').config();

// Import seed files
const seedComments = require('./commentsseeds');
const seedGames = require('./gamesseeds');
const seedGenres = require('./genresseeds');
const seedPlatforms = require('./platformsseeds');
const seedUsersLibrary = require('./userslibraryseeds');
const seedUsers = require('./usersseeds');

// Function to seed all tables
const seedAll = async () => {
    await sequelize.sync({ force: true }); // This will drop and recreate tables, use with caution
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedGames();
    console.log('\n----- games SEEDED -----\n');
    await seedGenres();
    console.log('\n----- genres SEEDED -----\n');
    await seedPlatforms();
    console.log('\n----- platforms SEEDED -----\n');
    await seedUsersLibrary();
    console.log('\n----- users_Library SEEDED -----\n');    
    await seedUsers();
    console.log('\n----- users SEEDED -----\n');   
    await seedComments();
    console.log('\n----- comments SEEDED -----\n');  

    process.exit(0);
};

// Call the seedAll function
seedAll();