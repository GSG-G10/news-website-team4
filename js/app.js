
//for show btn scrool to top and event
const pop_up_to_top = document.querySelector('.pop_up_to_top')
window.addEventListener('scroll',()=>{
    pop_up_to_top.classList.toggle('active', window.scrollY >400)
})

pop_up_to_top.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
})

