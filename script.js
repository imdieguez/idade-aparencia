let data = new Date();
let ano = data.getFullYear();
let anoNasc = document.getElementById("ano-nasc");
let verificar = document.getElementById("verificar");
verificar.addEventListener("click", clicar)
let res = document.getElementById("res")

function clicar() {
    if (anoNasc.value.length == 0 || anoNasc.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente.")
    } else {
        let checksex = document.getElementsByName("radsex");
        let idade = ano - Number(anoNasc.value);    
        let gênero = ""
        let img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(checksex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade <10) {
                // Criança
                img.setAttribute("src", "male-child2.png")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "male-young2.png")
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "male2.png")
            } else {
                //Idoso
                img.setAttribute("src", "male-elder2.png")
            }
        } else if (checksex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade <10) {
                // Criança
                img.setAttribute("src", "female-child2.png")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "female-young2.png")
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "female2.png")
            } else {
                //Idoso
                img.setAttribute("src", "female-elder2.png")
            }
        }
        res.innerText = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}