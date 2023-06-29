"use strict";

function intro2(paramName){
  const name= "SuperCoder:in.";
  console.log("Hi"+ " " + name + " " + "Mein Name ist" + " " + paramName +"."); 
}

intro2("Marco");
intro2("Cyril");
intro2("Micha");

console.log("%c =================================", "background: red; color:white");

function intro3(name, stadt, alter){
  console.log(`Hallo mein Name ist ${name}. Ich bin ${alter} Jahre alt. Ich komme aus ${stadt}.`);
}

intro3("Marco", "München", 26);
intro3("Felix", "Magdeburg", 24);

console.log("%c =================================", "background: red; color:white");

function math(number1, number2) {
  console.log(`Multiplikation: ${number1} * ${number2} = `,number1*number2);
  console.log(`Division: ${number1} / ${number2} = `,number1/number2);
}

math(10,2);
math(30,20);
math(100,100);
math(5,0);
math(45,173);
math(1,1000);