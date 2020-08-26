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

    get department(){
        return Department.all.find((dept) => dept.id === this.department_id)
    }

    get itemList(){
        return document.getElementById('item-list')
    }

    addEventListeners(){
        container.addEventListener('click', this.handleListClick)
    }

    handleListClick = (e) => {
        
    }

    attachToDom(){
        container.append(this.fullRender())
        this.addEventListeners()
    }

    renderItems(){
        this.element.innerHTML = ""

        // this.itemRow.class = "item-rows"
        // this.itemRow.innerHTML = ""

        container.appendChild(this.element)
        // container.appendChild(this.itemRow)

        this.element.innerHTML = `
            <button type ="button" class="button" id="new-item">Add Item</button>`
    
    }

    static newItemForm(){
        return `
            <ul id="items">

            </ul>
        
            <h3>Add Item</h3>
                <form id="item-form">
                <label for="item-name">Name:</label>
                <input type="text" name="name" id="item-name"><br><br>
                <label for="department_id">Department:</label>
                <select name="department" id="department_id" required>
                    <option value="">Select a Department</option>
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

    static newItemEventListener(){
        let newItemButton = document.querySelector("#new-item")
        newItemButton.addEventListener("click", () => {
            event.preventDefault()

            event.target.parentNode.insertAdjacentHTML('beforeend',this.newItemForm())
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
        container.innerHTML +=
            `<div id= "${this.id}">
                <li>
                    <span class="name">Item Name: ${this.name}</span><br>
                    <span class="name">On Hand: ${this.on_hand}</span><br>
                    <span class="name">Par: ${this.par}</span><br>
                    <span class="order">To Order: ${this.par - this.on_hand}</span>
                </li>
                <br>
              `
    }
    
};