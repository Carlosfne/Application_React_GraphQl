const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  nome: String,
  cep: String,
  rua: String,
  numero: String,
  bairro: String,
  cidade: String,
  uf: String,
})

module.exports = mongoose.model('User', UserSchema)