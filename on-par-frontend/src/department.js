class Department {
    static departmentRow = document.createElement("div")

    constructor(name){
        this.name = name;
    }

    static fetchDepartments(){
        fetch(`${BACKEND_URL}/department`)
            .then(resp => resp.json)
            .then(deptartments => {
                this.renderDepts()
                departments.forEach(department =>{
                    let dept = new Department(department)
                    this.departmentRow.innerHTML += dept.renderPage()
                })
            })
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
}