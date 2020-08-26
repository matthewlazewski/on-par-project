class DepartmentsAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/departments"
    }

    fetchDepartments(){
        fetch(this.baseUrl)
            .then(resp => resp.json())          
            .then((response) => {  
                response.data.forEach(dept => {
                    this.sanitizeDepartment(dept)
                    dept.renderDeptPage
                })
            })
    }

    sanitizeDepartment(resp){
        let dept = new Department({id: resp.id, ...resp.attributes})
        dept.attachToDom()
    }
}