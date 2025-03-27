let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let paraDisplay = document.getElementById("paragraph");

let options = {
    method: "GET",
    headers: { 'X-Api-Key': CONFIG.API_KEY},
};

let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";
let generateParas = () => {
    let noOfParas = document.getElementById("paragraph-number")
    console.log(noOfParas);
};

generateBtn.addEventListener("click", generateParas);
window.addEventListener("load", generateParas);