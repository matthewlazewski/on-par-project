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

     

    renderDeptPage(){
        container.innerHTML += 
            `<h2>${this.name}</h2>`
        return this.element       
    }

    items(){
        return Item.all.filter((item) => item.department_id === this.id) 
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