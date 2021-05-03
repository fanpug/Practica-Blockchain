const SHA256 = require('crypto-js/sha256');

class Block{
  //Todos los blockchain tienen los siguientes componentes basicos
  //Index = Identificador de la posicion del bloque en la cadena
  //Data = El contenido del bloque
  //previousHash = valor del bloque anterior de la cadena
  constructor(index, data, previousHash = ''){
    this.index = index;
    this.data = data;
    this.previousHash = previousHash;
    this.date = new Date(); //genera un timestamp
    this.nonce = 0;
    this.hash = this.createdHash();

  }

  createdHash(){
    return SHA256(`${this.index} ${this.data} ${this.date} ${this.nonce}`).toString();
  }

  //Dificultad es que inicie con un cero el hash
  mine(difficulty){
    while(!this.hash.startsWith(difficulty)){
      this.nonce++;
      this.hash = this.createdHash();
    }
  }

}


module.exports = Block;
