const { usuarios, perfis } = require("../data/db");

module.exports = {
  ola() {
    return "Bom dia!";
  },
  horaAtual() {
    return new Date();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Leandro",
      email: "lsoares@blupay.com.br",
      idade: 23,
      salario_real: 1500.5,
      vip: true
    };
  },
  produtoEmDestaque() {
    return {
      nome: "Notebook",
      preco: 100,
      desconto: 0.15
    };
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const selecionados = usuarios.filter(u => u.id == id);
    return selecionados ? selecionados[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const selecionados = perfis.filter(p => p.id == id);
    return selecionados ? selecionados[0] : null;
  }
};
