class Item {
    static newItemRow  = document.createElement("div")
    static itemRow = document.createElement("div")

    constructor(name,on_hand,par, department_id){
        this.name = name;
        this.on_hand = on_hand;
        this.par = par;
        this.department_id = department_id
    }

    static fetchItems(){
        fetch(`${BACKEND_URL}/items`)
            .then(resp => resp.json())
            .then((response) => {
                this.renderItems()
                response.data.forEach(item => {
                    let newItem = new Item(item)
                    this.itemRow.innerHTML += newItem.itemPage()
                })
            })
    }


    static createNewItem(){
        let newItem = event.target 
        let newItemRow = document.querySelector("#new-item-row")

        let formData = {
            name: form[0].value,
            department_id: form[1].value,
            on_hand: form[2].value,
            par: form[3].value
        }

        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(`${BACKEND_URL}/items`, configObj)
            .then(resp => resp.json())
            .then(item => {
                form.parentNode.removeChild(form)

                let itemRow = document.querySelector("#item-rows")

                let newItem = new Item(item)
                itemRow.innerHTML += newItem.itemPage()
            })
    }

    static renderItems(){
        this.newItemRow.id = "new-item-row"
        this.newItemRow.class = "row"
        this.newItemRow.innerHTML = ""

        this.itemRow.class = "item-rows"
        this.itemRow.innerHTML = ""

        container.appendChild(this.newItemRow)
        container.appendChild(this.itemRow)

        this.newItemRow.innerHTML = `
            <button type ="button" class="button" id="new-item">Add Item</button>`
        this.newItemEventListener()
    
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

    itemPage(){
        debugger
        return `
        <div id= "${this.id}">
            <li>
                <span class="name">Item Name: ${this.name.attributes.name}</span><br>
                <span class="name">On Hand: ${this.name.attributes.on_hand}</span><br>
                <span class="name">Par: ${this.name.attributes.par}</span>
            </li>
        `
    }
    
};