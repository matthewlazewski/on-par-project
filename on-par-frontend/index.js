const itemsAdapter = new ItemsAdapter;
const departmentsAdapter = new DepartmentsAdapter;
const navBar = document.querySelector(".navbar")
const container = document.querySelector(".selected-list")
const newItemButton = document.getElementById("new-item-button")


document.addEventListener("DOMContentLoaded",() => {
  navBar.addEventListener("click", navigate)
})

function navigate(){
  switch(true) {
    case (event.target.id === "departments-nav"):
      container.innerHTML = ""
      departmentsAdapter.fetchDepartments()
      break;
    case (event.target.id === "items-nav"):
      container.innerHTML = ""
      itemsAdapter.fetchItems()
      newItemButton.hidden = false 
      break;
  }
}