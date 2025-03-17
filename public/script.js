const modal = document.querySelector("#modal")

if (modal.classList.contains("show")) {
  modal.classList.remove("hide")
  isModalOn = true
} else {
  modal.classList.add("hide")
  isModalOn = false
}
