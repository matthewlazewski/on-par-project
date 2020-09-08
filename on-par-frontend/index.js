const itemsAdapter = new ItemsAdapter;
const departmentsAdapter = new DepartmentsAdapter;
const navBar = document.querySelector(".navbar")
const container = document.querySelector(".selected-list")
const newItemButton = document.getElementById("new-item-button")
const itemList = document.getElementById("item-list")
const departmentList = document.getElementById("department-list")
const newDeptButton = document.getElementById("new-department-button")
const deptItemList = document.getElementById("department-items-list")

document.addEventListener("DOMContentLoaded",() => {
  navBar.addEventListener("click", navigate)
  departmentsAdapter.fetchDepartments()
  itemsAdapter.fetchItems()

})

function navigate(){
  switch(true) {
    case (event.target.id === "departments-nav"):
      container.innerHTML = ""
      Department.all.forEach((i) => {
        i.attachToDom()
        i.addEventListeners()
      }) 
      Department.newDeptEventListener()
      departmentList.hidden = false
      itemList.hidden = true 
      deptItemList.hidden = true 
      break;
    case (event.target.id === "items-nav"):
      container.innerHTML = ""
      departmentList.hidden = true 
      itemList.hidden = false 
      Item.all.forEach((i) => {
        i.attachToDom()
        i.addEventListeners()
      })
      newItemButton.hidden = false 
      break;
  }
}