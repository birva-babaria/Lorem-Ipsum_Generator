let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let paraDisplay = document.getElementById("paragraph");

let options = {
    method: "GET",
    headers: { 'X-Api-Key': CONFIG.API_KEY},
};

let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";
let generateParas = async () => {
    let noOfParas = document.getElementById("paragraph-number").value
    console.log(noOfParas);

    try{
        let response = await fetch(url+noOfParas, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        if (data){
            console.log(data.text);
            paraDisplay.innerText = data.text;
        }
    }
    catch{
        console.log("Error fetching data:", error);
    }
};

generateBtn.addEventListener("click", generateParas);
window.addEventListener("load", generateParas);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(paraDisplay.innerText);
    alert("Text Copied to Clipboard!");
});
