class ItemsAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/items"
    }

    fetchItems(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json.data.forEach((item) => {
                new Item(item.attributes) 
            })
        })
    }
}