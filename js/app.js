
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


// update time and date

let hour =new Date().getHours()
let minut =new Date().getMinutes()
let format = hour >=12 ? 'PM':'AM'

let month =new Date().getMonth() +1
let today =new Date().getDate()
let year =new Date().getFullYear()

document.querySelector('.time_is').innerHTML = `${hour}:${minut} ${format}`
document.querySelector('.date_today').innerHTML = `${today}/${month}/${year}`