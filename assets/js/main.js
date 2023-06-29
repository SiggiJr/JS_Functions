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