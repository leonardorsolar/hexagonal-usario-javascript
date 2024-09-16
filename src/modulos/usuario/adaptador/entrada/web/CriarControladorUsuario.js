const servicoCriarUsuario = require('../../../aplicacao/ServicoCriarUsuario');

class CriarControladorUsuario {
  constructor(servicoCriarUsuario) {
    this.servicoCriarUsuario = servicoCriarUsuario;
  }

  async manipulador(req, res) {
    const dto = req.body;
    try {
      const usuario = await this.servicoCriarUsuario.criar(dto);
      res.status(201).json(usuario);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = CriarControladorUsuario;
