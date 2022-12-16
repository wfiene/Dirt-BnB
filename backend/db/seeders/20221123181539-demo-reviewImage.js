'use strict';

const { User, Booking, Spot, ReviewImage, Review, SpotImage } = require('../models')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "ReviewImages"

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
        reviewId: 1,
        url: 'image1.com'
      },
      {
        reviewId: 2,
        url: 'image2.com'
      },
      {
        reviewId: 3,
        url: 'image3.com'
      },
      {
        reviewId: 4,
        url: 'image4.com'
      },
      {
        reviewId: 5,
        url: 'image5.com'
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
    await queryInterface.bulkDelete(options,{});
  }
};
