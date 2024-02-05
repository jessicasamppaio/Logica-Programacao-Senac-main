class Cliente {
     constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
     }
}

class Conta {
    constructor(cliente, numero, saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }
       sacar(valorParaSaque){
        return true;
       }

       depositar(valorParaDeposito){
        return true
       }

       transferir(valorTransferencia, cliente){
        return true;

       }
}

class ContaCorrente extends Conta {
    constructor(cliente, numero, saldo, limiteChequeEspeial){
        super(cliente, numero, saldo);
        this.limiteChequeEspeial = limiteChequeEspeial;
    }

    sacar(valorSaque){
      super(valorSaque);
      return true;
    }

}

class ContaPoupanca extends Conta {
    constructor(cliente, numero, saldo, taxaRendimento){
        super(cliente, numero, saldo);
        this.taxaRendimento = taxaRendimento;
    } 

    aplicarRendimento(){

    }
}

