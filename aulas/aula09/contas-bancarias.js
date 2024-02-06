class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Conta {
    constructor(cliente, numero, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valorSaque) {
        if (this.saldo >= valorSaque && this.saldo > 0) {
        // this.saldo = this.saldo - valorSaque;
             this.saldo -= valorSaque;
            return true;

        } else {
            return false;
        }
    }



    depositar(valorDeposito) {
        if (valorDeposito > 0) {
        // this.saldo = this.saldo + valorDeposito;
            this.saldo -= valorSaque;
            return true;
        } else {
            return false
        }
    }

    transferir(valorTransferencia, conta){
    // if(this.saldo >= valorTransferencia && valorTransferencia > 0){
        //     this.saldo -= valorTransferencia;
        //     conta.saldo += valorTransferencia 
       
        if(this.sacar(valorTransferencia)){
            conta.depositar(valorTransferencia) 
            return true;
        } else{
            return false;
        }
       
    }
}

class ContaCorrente extends Conta {
    constructor(cliente, numero, saldo, limiteChequeEspecial) {
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    sacar(valorSaque) {
    //                {
    //     if(this.saldo + this.limiteChequeEspecial >= valorSaque && valorSaque > 0){
    //         this.saldo -= valorSaque; 
    //     }
    // }

    const valorLimiteEspecial = this.saldo + this.limiteChequeEspecial;
    if (valorSaque >= valorLimiteEspecial) {
        return super.sacar(valorSaque);
    }else{
        return false
    }
}
}

class ContaPoupanca extends Conta {
    constructor(cliente, numero, saldo, taxaRendimento) {
        super(cliente, numero, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    aplicarRendimento() {
        this.saldo += this.saldo * this.taxaRendimento;
    }
}

let contas = [];
let clientes = [];

// let clienteA = new Cliente("Mizuki", "1234567890");
// clientes.push(clienteA);
// let clienteB = new Cliente("Aiko", "0987654321");
// clientes.push(clienteB);

// let contaX = new ContaCorrente(clienteA, 123, 100, 150);
// contas.push(contaX);
// let contaY = new ContaPoupanca(clienteB, 111, 100, 0.01);
// contas.push(contaY);
// let contaZ = new ContaCorrente(clienteB, 235, 0, 180);
// contas.push(contaZ);

// contaY.transferir(50, contaX)
// console.log("Conta Y: ", contaY);
// console.log("Conta X: ", contaX)


