const User = require('./schema/User');

module.exports = {
  Query: {
    users: () => User.find(),
   },
   
   Mutation: {
    createUser: (_, { nome, cep, rua, numero, bairro, cidade, uf }) => 
    User.create({ nome, cep, rua, numero, bairro, cidade, uf }),
   }
};