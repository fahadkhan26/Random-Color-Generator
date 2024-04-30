let code = document.querySelector(".color-code");

let colorBox = document.querySelector(".color");

let generate = document.querySelector(".generate-container button");

let copy = document.querySelector(".copy")


generate.addEventListener("click",
    async () => {
        const url = "https://x-colors.yurace.pro/api/random"
        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
            console.log(result["hex"]);
            code.innerText = result["hex"];
            colorBox.style.backgroundColor = result["hex"];
        } catch (error) {
            console.error();
        }
    });


copy.addEventListener("click" , () => {

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');

    selection.removeAllRanges();


})

