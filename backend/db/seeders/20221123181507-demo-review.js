'use strict';

const { User, Booking, Spot, ReviewImage, Review, SpotImage } = require('../models')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Reviews"

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
        userId: 5,
        review: 'I think I heard gunshots next door',
        stars: 2
        },
        {
        spotId: 1,
        userId: 4,
        review: 'A home away from home... Love the artwork on the house and the feel of the house',
        stars: 5
        },
        {
        spotId: 2,
        userId: 3,
        review: 'The house itself was very nice but I felt an odd energy, and I think I saw a severed hand running around.',
        stars: 5
        },
        {
        spotId: 2,
        userId: 1,
        review: 'Dope mansion, could feel the evil vibes',
        stars: 5
        },
        {
        spotId: 3,
        userId: 4,
        review: 'The space was absolutely what was promised. The bed was super comfy and clean.',
        stars: 5
        },
        {
        spotId: 3,
        userId: 3,
        review: 'We loved our stay! We felt very comfortable, safe, and it was very clean. The location was great, too. We just loved every minute of our visit.',
        stars: 5
        },
        {
        spotId: 4,
        userId: 5,
        review: 'This place is a dump, but at the same time homey and comfortable',
        stars: 3
        },
        {
        spotId: 4,
        userId: 2,
        review: 'This place is not up to my standard nor my families',
        stars: 2
        },
        {
        spotId: 5,
        userId: 1,
        review: 'Great and beautifully designed apartment! Strongly recommended for backpack traveller, it is your ultimate place to look for! Not so much for those who travel with luggages.',
        stars: 5
        },
        {
        spotId: 5,
        userId: 3,
        review: 'Finally an Airbnb that lives up to expectations and beyond. By far the nicest of any we stayed in before. Stylish beyond belief.',
        stars: 5
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
    await queryInterface.bulkDelete(options, {})
  }
};
