// Objetos Abstratos: Conta Bancária
class ContaBancaria {
    constructor(titular, numeroConta) {
      this.titular = titular;
      this.saldo = 0;
      this.numeroConta = numeroConta;
    }
  
    consultarSaldo() {
      console.log(`Saldo da conta ${this.numeroConta}: R$ ${this.saldo.toFixed(2)}`);
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depositado R$ ${valor.toFixed(2)} na conta de ${this.titular}.`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Sacado R$ ${valor.toFixed(2)} da conta de ${this.titular}.`);
      } else {
        console.log(`Saldo insuficiente para saque.`);
      }
    }
  }
  
  const minhaConta = new ContaBancaria("João", "12345-6");
  minhaConta.depositar(1000);
  minhaConta.consultarSaldo();
  minhaConta.sacar(500);
  minhaConta.consultarSaldo();

  
  // Objetos Abstratos: Agenda Eletrônica
  class AgendaEletronica {
    constructor(proprietario) {
      this.proprietario = proprietario;
      this.contatos = [];
    }
  
    adicionarContato(nome, telefone) {
      this.contatos.push({ nome, telefone });
      console.log(`Contato ${nome} adicionado à agenda de ${this.proprietario}.`);
    }
  
    exibirContatos() {
      console.log(`Contatos de ${this.proprietario}:`);
      this.contatos.forEach(contato => {
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}`);
      });
    }
  
    buscarContato(nome) {
      const contatoEncontrado = this.contatos.find(contato => contato.nome === nome);
      if (contatoEncontrado) {
        console.log(`Telefone de ${nome}: ${contatoEncontrado.telefone}`);
      } else {
        console.log(`Contato ${nome} não encontrado na agenda de ${this.proprietario}.`);
      }
    }
  }
  
  const minhaAgenda = new AgendaEletronica("Maria");
  minhaAgenda.adicionarContato("Amigo 1", "123456789");
  minhaAgenda.adicionarContato("Amigo 2", "987654321");
  minhaAgenda.exibirContatos();
  minhaAgenda.buscarContato("Amigo 1");
  