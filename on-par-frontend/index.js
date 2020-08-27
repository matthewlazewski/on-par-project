const itemsAdapter = new ItemsAdapter;
const departmentsAdapter = new DepartmentsAdapter;
const navBar = document.querySelector(".navbar")
const container = document.querySelector(".selected-list")
const newItemButton = document.getElementById("new-item-button")
const itemList = document.getElementById("item-list")
const departmentList = document.getElementById("department-list")
const newDeptButton = document.getElementById("new-department-button")

document.addEventListener("DOMContentLoaded",() => {
  navBar.addEventListener("click", navigate)
})

function navigate(){
  switch(true) {
    case (event.target.id === "departments-nav"):
      container.innerHTML = ""
      departmentsAdapter.fetchDepartments()
      debugger
      newDeptButton.hidden = false 
      itemList.hidden = true 
      departmentList.hidden = false 
      break;
    case (event.target.id === "items-nav"):
      container.innerHTML = ""
      itemsAdapter.fetchItems()
      departmentList.hidden = true 
      newDeptButton.hidden = true 
      break;
  }
}