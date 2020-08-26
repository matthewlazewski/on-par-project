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
    }

    createItem(event){
        event.preventDefault()

        const name = document.getElementById('item-price').value 
        const onHand = document.getElementById('item-on-hand').value
        const par = document.getElementById('item-par').value

        let newObj = {
            name,
            onHand,
            par
        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json" 
            },
            body: JSON.stringify()
        }

        fetch(this.baseUrl, configObj)
            .then(resp => resp.json())
            .then(json => {
                let item = new Item(json.data.attributes)
                item.attachToDom()
            })
            
    }
}