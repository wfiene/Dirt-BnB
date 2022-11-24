'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = "Reviews"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
      spotId: 1,
      userId: 5,
      review: 'When we first stumbled upon this flat on AirBnB, it seemed almost too good to be true. There must be a catch! But everything was as perfect as it seemed online.',
      stars: 5
      },
      {
      spotId: 1,
      userId: 4,
      review: 'Very tidy and lovely AirBnb apartment equipped with everything you need. A good bed and nice bathroom.',
      stars: 5
      },
      {
      spotId: 2,
      userId: 3,
      review: 'The place was very clean, modern, had everything we needed to feel at home, and was an easy walk to all the sites we wanted to see.',
      stars: 5
      },
      {
      spotId: 2,
      userId: 1,
      review: 'Nicely renovated in a cool neighbourhood close to metro and lots of transit. Comfortable bed and well prepared small kitchen. I appreciated the coffee and tea. Host was super responsive and it was all great.',
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
      review: 'The apartment is beautifully furnished with particular attention to all the details for the best comfort.',
      stars: 5
      },
      {
      spotId: 4,
      userId: 2,
      review: 'If you are reading this, just book this amazing Airbnb. Every little detail is perfectly thought out and the space couldn’t be more perfect.',
      stars: 5
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
    await queryInterface.bulkDelete(options, {});
  }
};
