class Produto {
    constructor(nome, quantidadeDisponivel, precoUnitario) {
        this.nome = nome;
        this.quantidadeDisponivel = quantidadeDisponivel;
        this.precoUnitario = precoUnitario;
    }

    calcularValorTotal() {
        return this.quantidadeDisponivel * this.precoUnitario;
    }
}

class ProdutoPerecivel extends Produto {
    constructor(nome, quantidadeDisponivel, precoUnitario, dataValidade) {
        super(nome, quantidadeDisponivel, precoUnitario)
        this.dataValidade = dataValidade;
    }

    verificarValidade() {
        const dataAtual = new Date();
        if (dataAtual < this.dataValidade) {
            console.log('O produto está no prazo de validade.');
            return true;
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
            console.log(`Produto '${nome}' removido do estoque.`);
            break;
          }
        }
    }

    verificarEstoqueDisponivel(nome) {
        for (const produto of this.listaProdutos){
            if(produto.nome === nome){
                console.log(`Quantidade disponível de '${nome}': ${produto.quantidadeDisponivel}`);
                return;
            }
        }
        console.log(`Produto '${nome}' não encontrado no estoque.`);
    }

    calcularValorTotalEstoque() {
        let valorTotalEstoque = 0;
        for (const produto of this.listaProdutos){
             valorTotalEstoque += produto.calcularValorTotal();
        }
        console.log(`Valor total do estoque: R$${valorTotalEstoque.toFixed(2)}`);
    }
}



const meuEstoque = new Estoque();

meuEstoque.adicionarProduto(new Produto("Macarrão", 100, 5));
meuEstoque.adicionarProduto(new ProdutoPerecivel("Leite", 50, 4, new Date(2024, 1, 1)));

meuEstoque.verificarEstoqueDisponivel("Macarrão");
meuEstoque.verificarEstoqueDisponivel("Leite");

meuEstoque.calcularValorTotalEstoque();
