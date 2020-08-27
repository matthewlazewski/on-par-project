const itemsAdapter = new ItemsAdapter;
const departmentsAdapter = new DepartmentsAdapter;
const navBar = document.querySelector(".navbar")
const container = document.querySelector(".selected-list")
const newItemButton = document.getElementById("new-item-button")
const itemList = document.getElementById("item-list")
const departmentList = document.getElementById("department-list")

document.addEventListener("DOMContentLoaded",() => {
  navBar.addEventListener("click", navigate)
})

function navigate(){
  switch(true) {
    case (event.target.id === "departments-nav"):
      container.innerHTML = ""
      departmentsAdapter.fetchDepartments()
      newItemButton.hidden = true 
      itemList.hidden = true 
      departmentList.hidden = false 
      break;
    case (event.target.id === "items-nav"):
      container.innerHTML = ""
      departmentList.hidden = true 
      itemsAdapter.fetchItems()
      newItemButton.hidden = false 
      break;
  }
}