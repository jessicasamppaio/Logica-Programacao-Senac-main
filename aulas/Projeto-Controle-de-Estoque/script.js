class Produto {
    constructor(nome, quantidadeDisponivel, precoUnitario) {
        this.nome = nome;
        this.quantidadeDisponivel = quantidadeDisponivel;
        this.precoUnitario = precoUnitario;
    }

    calcularValorTotal(valorTotal) {
        let valorTotal = this.quantidadeDisponivel * this.precoUnitario;
        return valorTotal;
    }
}

class ProdutoPerecivel extends Produto {
    constructor(nome, quantidadeDisponivel, precoUnitario, dataValidade) {
        super(nome, quantidadeDisponivel, precoUnitario)
        this.dataValidade = dataValidade;
    }

    verificarValidade() {
        const dataAtual = new Date();
        if (dataAtual <= this.dataValidade) {
            console.log('O produto está no prazo de validade.')
            return true
        } else {
            console.log('O produto está fora do prazo de validade.');
            return false;
        }
    }
}

class Estoque {
    constructor() {
        this.listaProdutos = [];
    }

    adicionarProduto(produto) {
        this.listaProdutos.push(produto);
    }

    removerProduto(nome) {
        for (let i = 0; i < this.listaProdutos.length; i++){
        
        }
    }

    verificarEstoqueDisponivel(nome) {

    }

    calcularValorTotalEstoque() {

        }
    }
 

const meuEstoque = new Estoque();

const produto1 = new Produto("Macarrao", 100, 5);
meuEstoque.adicionarProduto(produto1);



