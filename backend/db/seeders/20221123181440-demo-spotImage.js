'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = "SpotImages"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/4226696/pexels-photo-4226696.jpeg',
        preview: true
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, {});
  }
};
