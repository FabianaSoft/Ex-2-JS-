function soma(){
    var n1 = document.getElementById('n1').value;
    console.log(n1);
    var n2 = document.getElementById('n2').value;
    console.log(n2);
    var n3 = document.getElementById('n3').value;
    console.log(n3);
    var resultado = parseInt(n1) + parseInt(n2) + parseInt(n3);
    document.getElementById('resultado').innerHTML = resultado;
}