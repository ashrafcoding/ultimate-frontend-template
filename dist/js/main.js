document.querySelector('.toggle-sidebar').onclick = function(){
    document.querySelector('.sidebar').classList.toggle('no-sidebar')
    document.querySelector('.content-area').classList.toggle('no-sidebar')
}
const myMap = new Map()
const mySet = new Set()