valorEmDolar = parseFloat (prompt("Insira o valor do produto em dolar")) //Pega o valor em dolar inserido pelo usuário e converte a string em valor float (decimal)
valorEmReal = valorEmDolar * 5.50 //Converte de dolar em real
alert (valorEmReal.toFixed(2)) //Mostra ao usuário o valor já conertido, em real