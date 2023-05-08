//Retorna a data
/*
let data = new Date()
document.write(data)
document.write("<br><br>")

//Retorna a data padrão americano
let data1 = new Date();
document.write(data1.toDateString())
document.write("<br><br>");

//Retona data padrão do navegador
let data2 = new Date();
document.write(data2.toLocaleDateString());
document.write("<br><br>");

//Retorna a data com array
let data3 = new Date();
let diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
document.write(diaSemana[data3.getDay()]);
document.write("<br><br>")

//Horas
let hour = new Date();
document.write(hour.getHours());
document.write("<br><br>");
hour.setHours(hour.getHours()+2);
document.write(hour.getHours()); 
document.write("<br><br>"); 


//Minutos
let min = new Date();
document.write(min.getMinutes());
document.write("<br><br>")

//Segundos
let seg = new Date();
document.wrire(seg.getSeconds());
document.write("<br.<br>")
*/

//tempo
function BemVindo(){
    alert('Olá, Dev, tudo bem?')
}
setTimeout(BemVindo, 1000)