const albums = [
    {name: "Album 1", price: 12.99, inCart:false},
    {name: "Album 2", price: 14.99, inCart:false},
    {name: "Album 3", price: 9.99, inCart:false},
    {name: "Album 4", price: 19.99, inCart:false}
]




function defineImg() {
    for (const album of albums) {
        if ("Album 1" === album['name']) {
            const album1 = document.querySelector('#Album-1')
            album1.setAttribute("src", "./Images/Album1.png")
            
        } 
        else if("Album 2" === album['name']) {
            const album2 = document.querySelector('#Album-2')
            album2.setAttribute("src", "./Images/Album2.png")
        }
        else if("Album 3" === album['name']) {
            const album3 = document.querySelector('#Album-3')
            album3.setAttribute("src", "./Images/Album3.png")
        }
        else ("Album 4" === album['name']) ;{
            const album4 = document.querySelector('#Album-4')
            album4.setAttribute("src", "./Images/Album4.png")
        }
    }
    
}

defineImg()

const shop = document.querySelector('.shot-items')
shop.addEventListener('click', function image() {
    
},false)


