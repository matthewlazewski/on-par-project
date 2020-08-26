class DepartmentsAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/departments"
    }

    static fetchDepartments(){
        fetch(this.baseUrl)
            .then(resp => resp.json())          
            .then((response) => {  
                this.renderDepts()
                response.data.forEach(dept => {
                    this.sanitizeDepartment(dept)
                    dept.fullRender()
                })
            })
    }

    sanitizeDepartment(resp){
        let dept = new Department({id: resp.id, ...resp.attributes})
        dept.attachToDom()
    }
}