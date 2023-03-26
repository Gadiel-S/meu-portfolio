const button = document.querySelector(".portfolio .mostrar");
const hidden = document.querySelectorAll(".portfolio .hidden");
const border = document.querySelector(".portfolio .border");

button.addEventListener("click", () => {
    hidden.forEach((project) => {
        if(project.classList.contains("hidden")) {
            project.classList.remove("hidden");
            button.innerHTML = "Mostrar menos";
            border.style.borderBottom = "1px dashed gray";
        } else {
            project.classList.add("hidden");
            button.innerHTML = "Mostrar mais";
            border.style.borderBottom = "none";
        }
    })
})