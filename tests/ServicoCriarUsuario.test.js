const AdaptadorPersistenciaUsuario = require('../src/modulos/usuario/adaptador/saida/persistencia/AdaptadorPersistenciaUsuario');
const ServicoCriarUsuario = require('../src/modulos/usuario/aplicacao/ServicoCriarUsuario');
const Usuario = require('../src/modulos/usuario/dominio/Usuario');

describe('ServicoCriarUsuario', () => {
  it('deve criar um usuário e delegar a persistência ao adaptador', async () => {
    const mockRepositorio = {
      salvar: jest.fn().mockResolvedValue('Usuário salvo'),
    };

    const adaptadorPersistenciaUsuario = new AdaptadorPersistenciaUsuario(mockRepositorio);
    const servicoCriarUsuario = new ServicoCriarUsuario(adaptadorPersistenciaUsuario);

    const dadosUsuario = {
      nome: 'Leonardo',
      email: 'leonardo@example.com',
      senha: 'senha123',
    };

    const resultado = await servicoCriarUsuario.criar(dadosUsuario);

    expect(resultado).toBe('Usuário salvo');
    expect(mockRepositorio.salvar).toHaveBeenCalledWith(expect.any(Usuario));
  });
});
