// Objetos Materiais: Livro
class Livro {
    constructor(titulo, autor, paginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
    }
  
    abrir() {
      console.log(`${this.titulo} aberto.`);
    }
  
    ler(pagina) {
      console.log(`Lendo a página ${pagina} de ${this.titulo}.`);
    }
  
    fechar() {
      console.log(`${this.titulo} fechado.`);
    }
  }
  
  const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1200);
  meuLivro.abrir();
  meuLivro.ler(50);
  meuLivro.fechar();


  // Objetos Materiais: Carro
  class Carro {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
      this.velocidadeAtual = 0;
    }
  
    ligar() {
      console.log(`${this.marca} ${this.modelo} ligado.`);
    }
  
    acelerar(velocidade) {
      this.velocidadeAtual += velocidade;
      console.log(`Acelerando para ${this.velocidadeAtual} km/h.`);
    }
  
    frear() {
      this.velocidadeAtual = 0;
      console.log(`Freando ${this.marca} ${this.modelo}.`);
    }
  }
  
  const meuCarro = new Carro("Toyota", "Corolla");
  meuCarro.ligar();
  meuCarro.acelerar(60);
  meuCarro.frear();

  