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
                })
            })
    }

    sanitizeDepartment(resp){
        return new Department({id: resp.id, ...resp.attributes})
    }

    newDept(){

        const name = document.getElementById('department-name').value 
        
        let newObj = {
            name
        }

        

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json" 
            },
            body: JSON.stringify(newObj)
        }

        fetch(this.baseUrl, configObj)
            .then(resp => resp.json())
            .then(json => { 
                console.log(json)
                let dept = this.sanitizeDepartment(json.data)
                dept.attachToDom()
                
                let form = document.getElementById('dept-form')
                form.hidden = true 
            })  
    }
}