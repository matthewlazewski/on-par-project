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

    addDepts(response){
        response.data.forEach(dept => {
            renderDeptPage(dept)
        });
    }

    renderDeptPage(){
        this.element.innerHTML += 
            `
            <div class="dept-page">
                <h2 class="dept-name">${this.name}</h2>
            </div>
            
            <div class="dept-items">
                <h4 class="dept-item-title">Items</h4>
                <h3 class="dept-item-number">${this.items()} </h3
            </div>`
        return this.element 
            
    }

    items(){
        return Item.all.filter((item) => item.department_id === this.id) 
    }

    attachToDom(){
        this.departmentList.append(this.renderDeptPage())
        this.element.addEventListener('click', this.displayItems)
    }

    displayItems = () => {
        document.getElementById('item-list').innerHTML = ''
        this.items().forEach((item) => {
            item.attachToDom
        })
    }

}