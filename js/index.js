var result = document.getElementById('resultado');

function inserirNumero(input){

    let r = result.innerHTML;

    if (isNaN(input) && result.innerHTML.charAt(0) == ''){
        result.innerHTML = '';
    } else {
        result.innerHTML = r+input;
    }

}

function limparLabel(){
    result.innerHTML = "";
}

function apagarLabel(){

    let rs = result.innerHTML; 
    result.innerHTML = result.innerHTML.substring(0, rs.length-1);
}

function calcular(){

    result.innerHTML = eval(result.innerHTML);
}