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

    items(){
        return Item.all.filter((item) => item.department_id === this.id)  
    }

    renderDeptPage(){
        this.element.innerHTML += 
            `<h2>${this.name}</h2>
            <p>${this.displayItems()}`
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
        this.items().forEach((i) => {
            i.attachToDom()
        })
    }

}