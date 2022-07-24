let button = document.querySelector('.button')

button.addEventListener('click', () =>{
    button.classList.add('active')

    setTimeout(()=>{
        button.classList.remove('active')
        document.querySelector('i').classList.replace("bx bx-cloud-download", "bx bx-check-circle")
        document.querySelector('.button-text').innerText = "Compleated"
    }, 6000)
})