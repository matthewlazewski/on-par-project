const BACKEND_URL = 'http://localhost:3000';
const navBar = document.querySelector("nav");
const container = document.querySelector(".selected-list")

document.addEventListener("DOMContentLoaded",() => {
  navBar.addEventListener("click", navigate)
  DepartmentsAdapter.fetchDepartments()
})

function navigate(){
  switch(true) {
    case (event.target.id === "departments-nav"):
      container.innerHTML = ""
      Department.fetchDepartments()
      break;
    case (event.target.id === "items-nav"):
      container.innerHTML = ""
      Item.fetchItems()
      break;
  }
}