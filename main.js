const selectFields = document.getElementById("selectFields")
const selectHeader = document.getElementById("selectHeader") 
const options = document.getElementsByClassName("options")
const selectList = document.getElementById("selectList")
const arrow = document.getElementById("arrow")

selectFields.onclick = function() {
  selectList.classList.toggle("hide")
  arrow.classList.toggle("rotate")
}

for (let i = 0; i < options.length; i++) {
  const option = options[i];
  option.addEventListener('click', () => {
    selectHeader.innerHTML = option.innerText
    selectList.classList.toggle("hide")
    arrow.classList.toggle("rotate")
  })
}