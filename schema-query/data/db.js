const usuarios = [
  {
    id: 1,
    nome: "Leandro",
    email: "lsoares@blupay.com.br",
    idade: 23,
    perfil_id: 2,
    status: "ATIVO"
  },
  {
    id: 2,
    nome: "Cesar",
    email: "cesar@gmail.com",
    idade: 51,
    perfil_id: 1,
    status: "INATIVO"
  },
  {
    id: 3,
    nome: "Milta",
    email: "milta@gmail.com",
    idade: 52,
    perfil_id: 1,
    status: "BLOQUEADO"
  }
];

const perfis = [
  {
    id: 1,
    nome: "Comum"
  },
  {
    id: 2,
    nome: "Administrador"
  }
];

module.exports = { usuarios, perfis };
