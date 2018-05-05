window.onload = function() {
  var Entrada = document.querySelector("input")
  var Spoiler = document.querySelector("#spoiler")

  Entrada.addEventListener("change", (e) =>
    Spoiler.style.background = e.target.value
  )
}
