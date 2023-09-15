 //atribui o valor da tag h1 par a variável titulo 
 let titulo = document.querySelector("h1").textContent;
 //mostra no console do navegador a variável título
 console.log(titulo);
  //modifica o valor do titulo para a frase "So veneno kkkkkk"
  document.querySelector("h1").textContent = "So veneno kkkkk";

  //-----------aqui vamos mexer na tabela de imc--------------
  // ----------armazena no array  as paciente as informações de todos os paciente 
  let pacientes = document.querySelectorAll(".paciente");
 //---------console.log(paciente);
 //--------console.log(paciente);
//----------loop for para percorrer o array 
for(let i =0; i < pacientes.length; i++){
  let paciente = pacientes[i];
  console.log(paciente);
//-----------armazena somente as colunas de peso e altura
  
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");
//armazena somente as informações de texto de peso e altura 
let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

//-----------acessa a coluna imc e altera o valor para o resutado 
let tdImc = paciente.querySelector(".info-imc");


//----------------validação dos dados -----------
let pesoEhValido = true;
let alturaEhValida = true;

if(peso < 0 || peso > 1000){
console.log("peso inválido!");
tdImc.textContent = "Peso invalido";
pesoEhValido = false;
} 
if(altura < 0 || altura > 3){
  console.log("altura inválida!");
 tdImc.textContent = "altura invalida";
 alturaEhValida = false;
}   

if(pesoEhValido === true && alturaEhValida === true){
//calcula o imc 
let imc = peso/(altura * altura);
console.log (imc);
tdImc.textContent = imc.toFixed(2);
}else{
  //iforma que os valore informados para peso e/outro
tdImc.textContent = "peso e/ou altura inválidos!";
}
}

