class Produto {
    constructor(nome, quantidadeDisponivel, precoUnitario) {
        this.nome = nome;
        this.quantidadeDisponivel = quantidadeDisponivel;
        this.precoUnitario = precoUnitario;
    }

    calcularValorTotal() {
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
          if(this.listaProdutos[i].nome === nome){
            this.listaProdutos.splice(i, 1);
            break;
          }
        }
    }

    verificarEstoqueDisponivel(nome) {
      
    }

    calcularValorTotalEstoque() {
        let valorTotalEstoque = 0;
        for (const produto of this.listaProdutos){
             valorTotalEstoque = valorTotalEstoque + produto.calcularValorTotal();
        }
        return valorTotalEstoque
        }
    }


const meuEstoque = new Estoque();

meuEstoque.adicionarProduto(new Produto("Macarrao", 100, 5));
meuEstoque.verificarEstoqueDisponivel(new Produto("Leite", 50, 4));

meuEstoque.calcularValorTotalEstoque()



