const { Menu } = require('../models');
const { User } = require('../models');



const resolvers = {
  Query: {
    menu: async () => {
      return Menu.find();
    },
    user: async () => {
      return User.find()
    }, 
  }
};

module.exports = resolvers;