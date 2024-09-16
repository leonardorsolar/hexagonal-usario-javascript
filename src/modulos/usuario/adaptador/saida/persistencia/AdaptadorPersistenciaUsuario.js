class AdaptadorPersistenciaUsuario {
  constructor(repositorio) {
    this.repositorio = repositorio;
  }

  async criar(usuario) {
    return await this.repositorio.salvar(usuario);
  }
}

module.exports = AdaptadorPersistenciaUsuario;

//A classe AdaptadorPersistenciaUsuario tem a responsabilidade de adaptar a persistência dos dados do usuário,
//chamando o método salvar do repositório.
