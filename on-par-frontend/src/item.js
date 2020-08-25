class Item {
    constructor(name,on_hand,par){
        this.name = name;
        this.on_hand = on_hand;
        this.par = par;
    }

    static fetchItems(){
        fetch(`${BACKEND_URL}/items`)
            .then(resp => resp.json())
            .then((response) => {
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

    
};