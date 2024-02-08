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
            this.saldo += valorDeposito; 
            return true;
        } else {
            return false;
        }
    }

    transferir(valorTransferencia, conta){
    // if(this.saldo >= valorTransferencia && valorTransferencia > 0){
        //     this.saldo -= valorTransferencia;
       
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

function cadastrarCliente(){
    // pegar dados da tela
    const nome = document.getElementById("nomeCliente").value
    const cpf = document.getElementById("cpfCliente").value
    // instanciar novo cliente
    const cliente = new Cliente(nome, cpf);
    // adicionar esse cliente a lista de clientes
    cliente.push(cliente);
}

function cadastrarConts() {
    // pegar os dados da tela
     const numero = parseInt(document.getElementById("numero").value)
     const saldo = parseInt(document.getElementById("saldo").value)
     const tipoConta = parseInt(document.getElementById("tipoConta").value)
    // identificar o cliente selecionado na lista de clientes

    // instanciar uma nova conta, a partir do tipo de conta selecionado
}