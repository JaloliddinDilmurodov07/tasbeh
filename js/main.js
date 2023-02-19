let elClick = document.querySelector('.click')
let elClear = document.querySelector('.clear')
let val = document.querySelector('.ekran')

elClick.addEventListener('click', function() {
    val.value = parseInt(val.value) + 1
    window.localStorage.setItem('soni',val.value)
    console.log(val.value);
})

elClear.addEventListener('click', function(){
    let val = document.querySelector('.ekran')
    let clearTasbeh = 0
    val.value = clearTasbeh
    console.log(clearTasbeh);
})