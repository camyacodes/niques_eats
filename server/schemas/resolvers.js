const { Menu } = require('../models');


const resolvers = {
  Query: {
    menu: async () => {
      return Menu.find();
    }
  }
};

module.exports = resolvers;