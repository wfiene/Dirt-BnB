'use strict';

const { User, Booking, Spot, ReviewImage, Review, SpotImage } = require('../models')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Spots"

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(options, [
      {
        ownerId:'1',
        address:'1963-2022',
        city:'Compton',
        state:'California',
        country: 'USA',
        lat: 33.8958,
        lng: 118.2201,
        name: 'Coolios House',
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
        name: 'Sherlock Residence',
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
        state:'Oregon',
        country: 'USA',
        lat: 90.00,
        lng: 135.00,
        name: 'Simpsons House',
        description: 'Regular suburban house',
        price: 120
      },
      {
        ownerId:'6',
        address:'47 West Broadway',
        city:'Bangor',
        state:'Maine',
        country: 'USA',
        lat: 48.00,
        lng: 135.00,
        name: 'Horror Mansion',
        description: 'Where all the classic horror stories are written',
        price: 350
      },
      {
        ownerId:'7',
        address:'901 CR 336',
        city:'Granger',
        state:'Texas',
        country: 'USA',
        lat: 49.00,
        lng: 134.00,
        name: 'Southern Plantation',
        description: "Don't go in the basement",
        price: 100
      },
      {
        ownerId:'8',
        address:'192.168.1.1',
        city:'Inception',
        state:'Imagination',
        country: 'USA',
        lat: 69.00,
        lng: 69.00,
        name: 'Metaverse',
        description: "I mean, can you really stay here?",
        price: 29.99
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete(options, {});
  }
};
