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
        return Department.all.forEach(dept =>  dept.name)
    }

    get department(){
        return Department.all.find((dept) => dept.id == this.department_id)
    }

    get itemList(){
        return document.getElementById('item-list')
    }

    addEventListeners(){
        this.newItemEventListener()
        this.element.addEventListener('click', this.editAndDeleteClick)
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
            let itemId = e.target.dataset.id 
            e.target.className = "save"
            e.target.innerText = "Save"
            this.renderEditForm(itemId)
        } else if(e.target.className === "save"){
            let form = e.target.parentElement
            e.target.className = "update"
            e.target.innerText ="Update"
            itemsAdapter.updateItem(this.id)
        }
    }

    renderEditForm(itemId){
        let item = Item.findById(itemId)

        let editForm = document.createElement('div')
        
        editForm.id = `update-form-${itemId}`
        editForm.innerHTML = `
        <input type="text" id="update-name-${itemId}" value="${item.name}" name="name">
        <input type="number" id="update-on-hand-${itemId}" value="${item.on_hand}" name="on_hand">
        <input type="number" id= "update-par-${itemId}" value="${item.par}" name="par">`

        item.element.querySelector('li').append(editForm)
    }

    attachToDom(){
        this.itemList.append(this.fullRender())
        this.addEventListeners()
        this.itemList.hidden = false 
    }


    renderItems(){
        this.element.innerHTML = ""

        container.appendChild(this.element)
    }

    dropDownMenu(){
        const depts = Department.all

        return depts.map((d) => {
            return `<option value=${d.id}>${d.name}</option>`
        }).join(' ')
    }

    newItemForm(){
        return `
            <ul id="items">

            </ul>
            <form id="item-form">
            <h3>Add Item</h3>
            
                <label for="item-name">Name:</label>
                <input type="text" name="name" id="item-name"><br><br>
                <label for="department_id">Department:</label>
                <select name="department_id" id="department_id" >
                    ${this.dropDownMenu()}
                </select><br><br>
                <label for="item-on-hand">On Hand:</label>
                <input type="number" name="on_hand" id="item-on-hand"><br><br>
                <label for="item-par">Par:</label>
                <input type="number" name="par" id="item-par"><br><br>
            
                <input type="submit" id="create-item-button" value="Create Item">
                <br>
            </form>
        `
    }


    newItemEventListener(){
        itemList.hidden = false 
        const newItemButton = document.getElementById("new-item-button") 
        newItemButton.hidden = false 
        newItemButton.addEventListener("click", () => {
            event.preventDefault()
            newItemButton.hidden = true 
            container.innerHTML = this.newItemForm()
            this.newItemFormListener()
        })
    }

    newItemFormListener(){
        let itemForm = document.querySelector("#item-form")
        let itemAdapter = new ItemsAdapter;

        itemForm.addEventListener("submit", () => {
            event.preventDefault()
            itemAdapter.newItem()

        })
    }

    fullRender(){
        this.element.innerHTML =
            `<div id= "${this.id}">
                <li>
                    <span class="name"><u>Item Name:</u> ${this.name}</span><br>
                    <span class="name"><u>Department:</u> ${this.department.name}</span><br>
                    <span class="name"><u>On Hand:</u> ${this.on_hand}</span><br>
                    <span class="name"><u>Par:</u> ${this.par}</span><br>
                    <span class="order"><u>To Order:</u> ${this.par - this.on_hand}</span>
                </li>
                <button class="delete" data-id="${this.id}">Delete</button>
                <button class="update" data-id="${this.id}">Update</button>
                <br><br>
            </div>
            `
        return this.element
    }

    returnUpdatedItem({name,on_hand,par}){
        this.name = name
        this.on_hand = on_hand
        this.par = par

        this.fullRender()
    }
    
};