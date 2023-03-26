const botao = document.querySelector(".portfolio .mostrar");
const escondido = document.querySelectorAll(".portfolio .escondido");
const borda = document.querySelector(".portfolio .borda");

botao.addEventListener("click", () => {
    escondido.forEach((projeto) => {
        if(projeto.classList.contains("escondido")) {
            projeto.classList.remove("escondido");
            botao.innerHTML = "Mostrar menos";
            borda.style.borderBottom = "1px dashed gray";
        } else {
            projeto.classList.add("escondido");
            botao.innerHTML = "Mostrar mais";
            borda.style.borderBottom = "none";
        }
    })
})