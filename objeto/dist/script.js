const estudante = {
  nome: "Tereza",
  idade: 32,
  matricula: "123456"
};
//console.log(estudante.nome);
//notação por .
//console.log(estudante["matricula"]);
//notação por colchetes
//console.log(`meu nome é ${estudante.nome} e tenho ${estudante.idade} anos .`);
//usando template string
//console.log(estudante.matricula.substring(0, 3));
//metodo substring
//for (const key in estudante) {
// console.log(estudante[key]);

//adicionar
//estudante.matricula= "123456";
//estudante.fones=["356789","98452314"];
//console.log(estudante)

//alterar
//estudante.curso= "front-end";
//estudante.fones= ["000000","7456982"];

//deletar
delete estudante.matricula; //notação de ponto
console.log(estudante);
delete estudante["idade"]; //notação de array
console.log(estudante);