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
                    container.innerHTML += `
                        <div id= "${item.id}">
                            <li>
                                <span class="name">${item.attributes.name}</span><br>
                                <span class="name">On Hand: ${item.attributes.on_hand}</span><br>
                                <span class="name">Par: ${item.attributes.par}</span>
                            </li>
                        `
                })
            })
    }


    static createNewItem(){

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
            <button type ="button" class="button">Add Item</button>`
    
    }


    
};