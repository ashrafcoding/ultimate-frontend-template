document.querySelector('.toggle-sidebar').onclick = function(){
    document.querySelector('.sidebar').classList.toggle('no-sidebar')
    document.querySelector('.content-area').classList.toggle('no-sidebar')
}

let submenu = document.querySelectorAll('.toggle-submenu')
let childLinks = document.querySelectorAll('.child-links')
for (let i = 0 ; i < submenu.length; i++){
    submenu[i].onclick = function(){
        submenu[i].classList.toggle('down')
        childLinks[i].classList.toggle('show')
    }

}
const myMap = new Map()
const mySet = new Set()