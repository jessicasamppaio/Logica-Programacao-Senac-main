class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

}


class Conta {
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    sacar(realizarSaque) {
        if (realizarSaque <= this.saldo && this.saldo > 0) {
            this.saldo -= realizarSaque;
            return true;
        } else {
            return false;
        }
    }


    depositar(valorDeposito) {
        if (valorDeposito > 0) {
            this.saldo += valorDeposito; 
            return true;
        } else {
            return false;
        }
    }

    transferir(realizarTransferencia, conta) {
        if (realizarTransferencia <= this.saldo && this.saldo > 0) {
            this.saldo -= realizarTransferencia;
            return true
        } else {
            return false;
        }
    }


}

class ContaCorrente extends Conta {
    constructor(numero, saldo, cliente, limiteChequeEspecial) {
        super(numero, saldo, cliente);
        this.limiteChequeEspecial = limiteChequeEspecial;

    }
    sacar(realizarSaque) {
        const saldoComChequeEspecial = this.saldo + this.limiteChequeEspecial;
        if (realizarSaque <= saldoComChequeEspecial && saldoComChequeEspecial > 0 ) {
            saldoComChequeEspecial -= realizarSaque;
            return true;
        } else {
            return false;
        }
    }
}

class contaPoupança extends Conta {
    constructor(numero, saldo, cliente, taxaDeRendimento) {
        super(numero, saldo, cliente, taxaDeRendimento)
        this.taxaDeRendimento = taxaDeRendimento;
    }

    sacar(realizarSaque) {
        if (realizarSaque <= this.saldo && this.saldo > 0) {
            this.saldo -= realizarSaque;
            return true;
        } else {
            return false;
        }
    }

}