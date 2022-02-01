let arrowButton = document.querySelector(".filter");

function listExpand(e) {
  let arrow = document.querySelector(".dropdown-list__header_arrow");
  if (e.target.innerHTML === arrow.innerHTML) {
    let parentDiv = e.target.parentNode.parentNode;
    if (parentDiv.querySelector(".dropdown-list__container")) {
      let list = parentDiv.querySelector(".dropdown-list__container");
      list.classList.toggle("dropdown-list__container_hidden");
      e.target.classList.toggle("dropdown-list__header_arrow-rotate");
    }
  }
}

arrowButton.addEventListener("click", listExpand, false);
