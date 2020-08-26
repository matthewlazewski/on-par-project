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
        i.attachToDom()
    }
}