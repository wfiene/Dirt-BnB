'use strict';

const { User, Booking, Spot, ReviewImage, Review, SpotImage } = require('../models')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = "SpotImages"

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
    await queryInterface.bulkInsert(options,[
      {
        spotId: 1,
        url: 'https://i.scdn.co/image/ab67616d0000b273e2ed1a99dde9ccf8ba450d57',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://64.media.tumblr.com/85c92cf99a747b97a7c39f7ffdeb897f/tumblr_inline_nr1znsAAne1t565bk_1280.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://media.houseandgarden.co.uk/photos/618938787ec4df9dbbfebc7f/master/w_1600%2Cc_limit/8fb319cfcc817fa00eaee66e368db0cb-house-11jan17-Arwel-Wyn-Jones--BBC_b.jpg',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://i0.wp.com/www.iamnotastalker.com/wp-content/uploads/2016/01/Screenshot-000725.jpg',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://consequence.net/wp-content/uploads/2021/11/simpsons-house-valued-at-450000-Garretts-Real-Estate-Group.jpg?quality=80',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://www.rollingstone.com/wp-content/uploads/2019/10/StephenKing.jpg',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://i1.wp.com/www.vanishingtexas.net/wp-content/uploads/2020/05/The-Hewitt-House-Granger-Texas-1.jpg?fit=3004%2C1996&ssl=1',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://imageio.forbes.com/specials-images/imageserve/62380c71af36178f0f91f59d/0x0.jpg?format=jpg&width=1200',
        preview: true
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
