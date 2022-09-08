const email  = document.querySelector("#email");
const password  = document.querySelector("#password");
const btn  = document.querySelector("#btn");
const passPower  = document.querySelector(".passPower");

btn.addEventListener("click",function (e) {
    e.preventDefault();
    clearPassPower()
    for (let i = 0; i <checkStrengh(password.value); i++) {
        createPassShowSpan()
    }
})

function checkStrengh(pass) {
    let count = 0;
    if (pass.length >= 8) {
        count++
    }
    if ((/\d/).test(pass)) {
        count++
    }
    if(/[A-Z]/.test(pass)){
        count++
    }
    if (/[^A-Za-z0-9]/.test(pass)) {
        count++
    }
    return count 
}



function createPassShowSpan() {
    const span = document.createElement("span")
    passPower.appendChild(span)
}
function clearPassPower() {
    passPower.innerHTML=""
}