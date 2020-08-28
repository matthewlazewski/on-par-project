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
        return new Item({id: resp.id, ...resp.attributes})
    }

    newItem(){

        const name = document.getElementById('item-name').value 
        const on_hand = document.getElementById('item-on-hand').value
        const department_id = document.getElementById('department_id').value
        const par = document.getElementById('item-par').value

        let newObj = {
            name,
            on_hand,
            department_id,
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
                let item = this.sanitizeItem(json.data)
                item.attachToDom()
                
                let form = document.getElementById('item-form')
                form.hidden = true 
            })  
    }

    updateItem(itemId) {
        const name = document.getElementById(`update-name-${itemId}`).value 
        const on_hand = document.getElementById(`update-on-hand-${itemId}`).value
        const par = document.getElementById(`update-par-${itemId}`).value

        let editObj = {
            name,
            on_hand,
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

        fetch(this.baseUrl + `/${itemId}`, configObj)
            .then(resp => resp.json())
            .then(json => {
                let item = Item.all.find((i) => i.id === json.data.id)
                item.returnUpdatedItem(json.data.attributes)
            })

        let form = document.getElementById(`update-form-${itemId}`)
        form.remove()
        
    }

    deleteItem(id){
            let configObj = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }
    
            fetch(`http://localhost:3000/items/${id}`, configObj)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                alert(json.message)
            })
    
    }
}