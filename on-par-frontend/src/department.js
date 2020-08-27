class Department {
    static all = [];
    
    static newDeptRow = document.createElement("div")
    static departmentRow = document.createElement("div")

    constructor({id, name}){
        this.id = id;
        this.name = name;
        this.element = document.createElement('li')
        this.element.id = `department-${id}`
        this.departmentList = document.getElementById('department-list')

        Department.all.push(this) 
    }

    get items(){
        return Item.all.filter((item) => item.department_id == this.id)
    }

    renderDeptPage(){
        this.element.innerHTML = 
            `<h2>${this.name}</h2>`
        return this.element       
    }

    attachToDom(){
        this.departmentList.append(this.renderDeptPage())
        this.addEventListeners()
        
    }

    addEventListeners(){
        this.element.addEventListener('click',this.displayItems)
        
    }

    displayItems = () => {
        document.getElementById('item-list').innerHTML = ''
        const depts = document.getElementById('department-list')
        document.getElementById('new-department-button').hidden = true 
        depts.innerHTML = `<h1>${this.name}</h1>`
        this.items.forEach((item) => {
            console.log(item)
            item.attachToDom()
        })
    }

    static newDeptForm(){
         
        return `
            <ul id="departments">

            </ul>
        
            <h3>Add Department</h3>
                <form id="dept-form">
                <label for="department-name">Name:</label>
                <input type="text" name="name" id="department-name"><br><br>
            
                <input type="submit" id="create-department-button" value="Create Department">
                <br>
            </form>
        `
    }

    newDeptEventListener(){
        const newDeptButton = document.getElementById("new-department-button") 
        newDeptButton.addEventListener("click", () => {
            event.preventDefault()
            newDeptButton.hidden = true 
            container.innerHTML = this.newDeptForm()
            this.newDeptFormListener()
        })
    }

    newDeptFormListener(){
        let deptForm = document.querySelector("#dept-form")
        let deptAdapter = new DepartmentsAdapter;

        deptForm.addEventListener("submit", () => {
            event.preventDefault()
            deptAdapter.newDept()
        })
    }

}