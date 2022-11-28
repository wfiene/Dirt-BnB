'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Spots"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        ownerId:'1',
        address:'1963-2022',
        city:'Compton',
        state:'California',
        country: 'USA',
        lat: 33.8958,
        lng: 118.2201,
        name: 'Coolio',
        description: 'A gangsters paradise',
        price: 300
      },
      {
        ownerId:'2',
        address:'0001 Cemetery Lane',
        city:'LA',
        state:'California',
        country: 'USA',
        lat: 34.0522,
        lng: 119.2437,
        name: 'Adams Family Home',
        description: 'A dark escape',
        price: 250
      },
      {
        ownerId:'3',
        address:'221/B Bakers St.',
        city:'London',
        state:'London',
        country: 'England',
        lat: 51.5072,
        lng: 0.1276,
        name: 'Sherlock',
        description: 'A most intriguing residence',
        price: 199
      },
      {
        ownerId:'4',
        address:'Room #231, 9005 Lincoln Blvd',
        city:'Camden',
        state:'New Jersey',
        country: 'USA',
        lat: 39.9259,
        lng: 75.1196,
        name: 'Earls Motel',
        description: 'Some stains here and there',
        price: 50
      },
      {
        ownerId:'5',
        address:'742 Evergreen Terrace',
        city:'Springfield',
        state:'No State',
        country: 'USA',
        lat: 90.00,
        lng: 135.00,
        name: 'Simpsons',
        description: 'Regular suburban house',
        price: 120
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, {});
  }
};
