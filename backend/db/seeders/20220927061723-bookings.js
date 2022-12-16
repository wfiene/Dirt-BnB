'use strict';

const { User, Booking, Spot, ReviewImage, Review, SpotImage } = require('../models')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Bookings"

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
      spotId: 1,
      userId: 2,
      startDate: new Date('01/16/2022'),
      endDate: new Date('01/28/2022')
    },
    {
      spotId: 2,
      userId: 3,
      startDate: new Date('02/02/2022'),
      endDate: new Date('02/18/2022')
    },
    {
      spotId: 3,
      userId: 1,
      startDate: new Date('03/07/2022'),
      endDate: new Date('03/21/2022')
    },
    {
      spotId: 4,
      userId: 5,
      startDate: new Date('05/08/2022'),
      endDate: new Date('05/22/2022')
    },
    {
      spotId: 5,
      userId: 4,
      startDate: new Date('04/22/2022'),
      endDate: new Date('05/15/2022')
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
    await queryInterface.bulkDelete(options, null, {});
  }
};
