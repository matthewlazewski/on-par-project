class DepartmentsAdapter{
    constructor(){

    }

    static fetchDepartments(){
        fetch(`${BACKEND_URL}/departments`)
            .then(resp => resp.json())          
            .then((response) => {
                this.renderDepts()
                response.data.forEach(dept => {
                    
                    container.innerHTML += 
                    `
                    <div class="dept-page">
                        <h2 class="dept-name">${dept.attributes.name}</h2>
                    </div>
                    
                    <div class="dept-items">
                        <h4 class="dept-item-title">Total Items</h4>
                        <h3 class="dept-item-number">${dept.relationships.items.data.length}</h3
                    </div>`
                })
            })
    }

    sanitizeDepartment(resp){
        
    }
}