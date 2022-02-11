const { Post } = require('../models');

const postdata = [
  {
    workout: 'chest.',
    breakfast: ' shake',
    lunch: 'omlette',
    dinner: 'yogurt',
    dessert: 'cake',
    dailylog: 'a good workout',
    user_id: 7
  },
  {
    workout: 'back.',
    breakfast: 'idk',
    lunch: 'pork chops',
    dinner: 'aspargus',
    dessert: 'ice cream',
    dailylog: 'a bad workout',
    user_id: 7
  },
  {
    workout: 'legs',
    breakfast: 'bacon',
    lunch: 'sandwich',
    dinner: 'potatoes',
    dessert: 'canolli',
    dailylog: 'a good day',
    user_id: 7
  },
  {
    workout: 'shoulders',
    breakfast: 'pancakes',
    lunch: 'cheeseburger',
    dinner: 'steak',
    dessert: 'cupcake',
    dailylog: 'a bad day',
    user_id: 7
  },
  {
    workout: 'arms',
    breakfast: 'eggs',
    lunch: 'hamburger',
    dinner: 'chicken',
    dessert: 'ice cream sandwhich',
    dailylog: 'a great workout',
    user_id: 7
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;