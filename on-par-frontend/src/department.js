class Department {
    static departmentRow = document.createElement("div")

    constructor(name){
        this.name = name;
    }

    static fetchDepartments(){
        fetch(`${BACKEND_URL}/department`)
            .then(resp => resp.json)
            .then(json => {

            })
    }
}