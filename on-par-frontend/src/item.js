class Item {
    constructor(name,on_hand,par){
        this.name = name;
        this.on_hand = on_hand;
        this.par = par;
    }

    static fetchItems(){
        fetch(`${baseURL}/items`)
            .then(resp => resp.json())
            .then(addItems)
    }

    static addItems(resp){
        resp.data.forEach(item => {
            this.addItemToDom(item)
        });
    }

    static addItemToDom(item){
        
    };
};