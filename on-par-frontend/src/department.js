class Department {
    static newDeptRow = document.createElement("div")
    static departmentRow = document.createElement("div")

    constructor({name}){
        this.name = name;
    }

    static fetchDepartments(){
        fetch(`${BACKEND_URL}/departments`)
            .then(resp => resp.json())          
            .then(addDepts)
        }
    

    static fetchDepartment(departmentId){
        fetch(`${BACKEND_URL}/departments/${departmentId}`)
            .then(resp => resp.json())
            .then(department => {
                container.innerHTML=""

                let dept = new Department(department)
                this.departmentRow.innerHTML += dept.renderDept()
            })
    }

    renderDeptPage(){
           
        
        return 
            `
            <div class="dept-page">
                <h2 class="dept-name">${this.name}</h2>
            </div>
            
            <div class="dept-items">
                <h4 class="dept-item-title">Total Items</h4>
                <h3 class="dept-item-number">${this}
            </div>`
            
    }

    static renderDepts(){
        this.newDeptRow.innerHTML = ""
        this.newDeptRow.className = "new-dept-row"
        
        this.departmentRow.innerHTML = ""
        this.departmentRow.className = "dept-row"

        container.appendChild(this.newDeptRow)
        container.appendChild(this.departmentRow)

        this.newDeptRow.innerHTML = `
        <button type="button" class="btn btn-block btn-outline-primary ml-auto" id="add-league">Add Department</button>
        `
    }
}