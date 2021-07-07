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


// slider header start

let card_slider = document.querySelectorAll('.card_slider')
let point_slid = document.querySelectorAll('.point_slid')
let slider_content = document.querySelector('.slider_content')
let points_slid = document.querySelector('.points_slid')

point_slid.forEach(point=>{
    point.addEventListener('click',()=>{
        let pointNum = point.getAttribute('data-point')
        points_slid.querySelector('.active').classList.remove('active')
        point.classList.add('active')
        slider_content.querySelector('.active').classList.remove('active')
        card_slider[pointNum].classList.add('active')
    })

})


// auto move slider
let i = 0
setInterval(autoSlid , 2000)
function autoSlid(){
    points_slid.querySelector('.active').classList.remove('active')
    point_slid[i].classList.add('active')
    slider_content.querySelector('.active').classList.remove('active')
    card_slider[i].classList.add('active')
    i++
    i = i == 3 ? i = 0 : i++
}


// start api weather
let apiKey = 'e9a4142cb53731c431ed55d9124755ef'
let weather = document.querySelector('.weather')
getWeaterData()
function getWeaterData(){
    navigator.geolocation.getCurrentPosition(suc=>{
        let  {latitude, longitude} = suc.coords
        let week = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun',]

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely&appid=${apiKey}`)
        .then(res=>{
            return res.json()
        }).then(data=>{
            for (let i = 0; i < week.length; i++) {
                weather.innerHTML += `
                <div class="card_day_weather">

                    <div class="statusAll">
                        <div class="title_day">
                            <span>${week[i]}</span>
                        </div>
                        <div class="img_sky">
                            <img src="http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png" alt="">
                        </div>
                    </div>

                    <div class="te_day">
                        <span>Day: ${data.daily[i].temp.day}°</span>
                    </div>
                    <div class="te_night">
                        <span>Night: ${data.daily[i].temp.night}°</span>
                    </div>
                </div>
                
                `
            }
            
        })
    })

}
