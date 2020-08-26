class Item {
    static newItemRow  = document.createElement("div")
    static itemRow = document.createElement("div")
    static itemList = document.createElement("list")
    static all = []

    constructor({id, name,on_hand,par, department_id}){
        this.name = name;
        this.on_hand = on_hand;
        this.par = par;
        this.id = id;
        this.department_id = department_id;

        this.element = document.createElement('div')
        this.element.id = `item-${this.id}`

        Item.all.push(this)
    }

    get departments(){
        debugger
        return Department.all.forEach(dept =>  dept.name)
    }

    get department(){
        return Department.all.find((dept) => dept.id === this.department_id)
    }

    get itemList(){
        return document.getElementById('item-list')
    }

    addEventListeners(){
        container.addEventListener('click', this.editAndDeleteClick)
    }

    static findById(id){
        return Item.all.find((item) => item.id == id)
    }

    editAndDeleteClick = (e) => {
        if(e.target.className === "delete"){
            let id = e.target.dataset.id 
            itemsAdapter.deleteItem(id)
            this.element.remove()
        } else if(e.target.className === "update") {
            let id = e.target.dataset.id 
            e.target.className = "save"
            e.target.innerText = "Save"
            this.renderEditForm(id)
        } else if(e.target.className === "save"){
            let id = e.target.dataset.id 
            e.target.className = "update"
            e.target.innerText = "Update"
            itemsAdapter.updateItem(id)
        }
    }

    renderEditForm(id){
        let item = Item.findById(id)

        let editForm = document.createElement('div')
        editForm.id = `update-form-${id}`
        editForm.innerHTML = `
        <input type="text" value="${item.name}" name="name">
        <input type="number" value="${item.name}" name="on_hand">
        <input type="number" value="${item.name}" name="par">`

        item.element.querySelector('li').append(editForm)
    }

    attachToDom(){
        container.append(this.fullRender())
        this.addEventListeners()
        this.itemList.hidden = false 
    }

    renderItems(){
        this.element.innerHTML = ""

        container.appendChild(this.element)
    }

    dropDownMenu(){
        const dropDown = document.querySelector("select")
        const departments = Department.all 

        for(let i = 0; i < departments.length; i++){
            let dept = departments[i];
            let option = document.createElement("option");
            option.textContent = dept;
            dropDown.appendChild(option)
        }
    }

    newItemForm(){
        return `
            <ul id="items">

            </ul>
        
            <h3>Add Item</h3>
                <form id="item-form">
                <label for="item-name">Name:</label>
                <input type="text" name="name" id="item-name"><br><br>
                <label for="department_id">Department:</label>
                <select name="department" id="department_id" >
                    ${this.dropDownMenu}
                </select><br><br>
                <label for="item-on-hand">On Hand:</label>
                <input type="number" name="on-hand" id="item-on-hand"><br><br>
                <label for="item-par">Par:</label>
                <input type="number" name="par" id="item-par"><br><br>
            
                <input type="submit" value="Create Item">
                <br>
            </form>
        `
    }



    newItemEventListener(){
        const newItemButton = document.getElementById("new-item-button")
        newItemButton.addEventListener("click", () => {
            event.preventDefault()
            newItemButton.hidden = true 
            container.innerHTML = this.newItemForm()
            this.newItemFormListener
        })
    }

    static newItemFormListener(){
        let itemForm = document.querySelector("#item-form")

        itemForm.addEventListener("submit",() => {
            event.preventDefault()
            this.createNewItem()
        })
    }

    fullRender(){
        this.element.innerHTML +=
            `<div id= "${this.id}">
                <li>
                    <span class="name">Item Name: ${this.name}</span><br>
                    <span class="name">Department: ${this.department}</span><br>
                    <span class="name">On Hand: ${this.on_hand}</span><br>
                    <span class="name">Par: ${this.par}</span><br>
                    <span class="order">To Order: ${this.par - this.on_hand}</span>
                </li>
                    <button class="update">Edit Item</button>
                    <button class="delete">Delete Item</button>
                <br><br>
            </div>
            `
        return this.element
    }
    
};