// definindo o objeto Banco
const Banco = {
    conta: "123456",
    saldo: 1000,
    tipoConta: "Corrente",
    agencia: "7890",
    
    // método para buscar o saldo atual
    buscarSaldo: function() {
      return this.saldo;
    },
    
    // método para realizar depósito
    deposito: function(valor) {
      this.saldo += valor;
      return "Depósito realizado com sucesso. Novo saldo: " + this.saldo;
    },
    
    // método para realizar saque
    saque: function(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        return "Saque realizado com sucesso. Novo saldo: " + this.saldo;
      } else {
        return "Saldo insuficiente para o saque.";
      }
    },
    
    // método para retornar o número da conta
    numeroDaConta: function() {
      return this.conta;
    }
  };
  
  // exemplo de uso
  console.log("Saldo Atual:", Banco.buscarSaldo());
  console.log(Banco.deposito(500));
  console.log(Banco.saque(200));
  console.log("Número da Conta:", Banco.numeroDaConta());
  