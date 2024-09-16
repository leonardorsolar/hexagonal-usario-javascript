const Usuario = require('../dominio/Usuario');

class ServicoCriarUsuario {
  constructor(adaptadorPersistenciaUsuario) {
    this.adaptadorPersistenciaUsuario = adaptadorPersistenciaUsuario;
  }

  async criar(dadosUsuario) {
    const usuario = new Usuario(dadosUsuario.nome, dadosUsuario.email, dadosUsuario.senha);
    return await this.adaptadorPersistenciaUsuario.criar(usuario);
  }
}

module.exports = ServicoCriarUsuario;

//A classe ServicoCriarUsuario tem a responsabilidade de criar um usuário a partir dos dados fornecidos
//e delegar a persistência do usuário ao AdaptadorPersistenciaUsuario.
