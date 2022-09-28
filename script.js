
var myHeaders = new Headers();

myHeaders.append("apikey", "8oATCc5yKRncHw8gd5gmK8ZtBWHwQsYc");


var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};


let input = document.getElementById("enterInput");

let enter = document.getElementById("enter");
let res = document.getElementById("res");
let result = document.getElementById("result");


async function checkValue(to, from, amount) {
    let resp = "";
    await fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
        .then(response => response.json())
        .then(result => resp = result.result)
        .catch(error => console.log('error', error));
    return resp;
}

input.addEventListener("focusout", async (e) => {
    let from = enter.value;
    let amount = input.value ?? 0;
    let to = res.value;

    let resp = await checkValue(to, from, amount);
    result.innerText = resp;
})

enter.addEventListener("change", async (e) => {
    let from = enter.value;
    let amount = input.value ?? 0;
    let to = res.value;

    let resp = await checkValue(to, from, amount);
    result.innerText = resp;
})
res.addEventListener("change", async (e) => {
    let from = enter.value;
    let amount = input.value ?? 0;
    let to = res.value;

    let resp = await checkValue(to, from, amount);
    result.innerText = resp;
})
