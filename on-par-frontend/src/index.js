const BACKEND_URL = 'http://localhost:3000';
const navBar = document.querySelector("nav");
const container = document.querySelector(".container")

document.addEventListener("DOMContentLoaded",() => {
  navBar.addEventListener("click", navigate)
  Department.fetchDepartments()
})

function navigate(){
  switch(true) {
    case (event.target.id === "department-nav")
      container.innerHTML = ""
      Department.fetchDepartments()
      break;
    case (event.target.id === "items-nav")
      container.innerHTML = ""
      Item.fetchItems()
      break;
  }
}