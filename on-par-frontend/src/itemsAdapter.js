class ItemsAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/items"
    }

    fetchItems(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json.data.forEach((item) => {
                this.sanitizeItem(item)
            })
        })
    }

    sanitizeItem(resp){
        let i = new Item({id: resp.id, ...resp.attributes})
        i.renderItems()
        i.attachToDom()
        i.newItemEventListener()
    }

    newItem(){

        const name = document.getElementById('item-name').value 
        const on_hand = document.getElementById('item-on-hand').value
        const par = document.getElementById('item-par').value

        let newObj = {
            name,
            on_hand,
            par
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
                let item = new Item(json.data.attributes)
                item.renderItems()
                item.attachToDom()
                let form = document.getElementById('item-form')
                form.hidden = true 
            })  
    }

    updateItem(itemId) {
        debugger 
        const name = document.getElementById(`update-price-${itemId}`).value 
        const onHand = document.getElementById(`update-on-hand-${itemId}`).value
        const par = document.getElementById(`update-par-${itemId}`).value

        let editObj = {
            name,
            onHand,
            par
        }


        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json" 
            },
            body: JSON.stringify(editObj)
        }

        fetch(this.baseUrl + `/${item}`, configObj)
            .then(resp => resp.json())
            .then(json => {
                let item = Item.all.find((i) => i.id === json.data.attributes.id)
                item.returnUpdatedItem(json.data.attributes)
            })
        
    }

    deleteItem(id){
            let configObj = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }
    
            fetch(`http://localhost:3000/items/${id}, configObj`)
            .then(res => res.json())
            .then(json => {
                
            })
    
    }
}