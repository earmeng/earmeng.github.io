var currency;
    
var datas = new XMLHttpRequest();
datas.open('GET','http://data.fixer.io/api/latest?access_key=1ad629c28a960e7769f6dffd89b9e869&format=1');
datas.onload = function(){
    currency = JSON.parse(datas.responseText); 
        
}
datas.send();

function cRiel(){
    var amount = document.getElementById("inputField").value;
    var ans = amount*currency.rates.KHR;
    document.getElementById("ansBox").innerHTML = "It is " + ans + " riels.";
}
function cUsd(){
    var amount = document.getElementById("inputField").value;
    var ans = amount*currency.rates.USD;
    document.getElementById("ansBox").innerHTML = "It is " + ans + " USD.";
}