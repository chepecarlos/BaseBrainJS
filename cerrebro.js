
window.onload = function() {
  const Entrada = document.querySelector("input")
  const Spoiler = document.querySelector("#spoiler")

  Entrada.addEventListener("change", (e) =>
    Spoiler.style.background = e.target.value
  )
}
