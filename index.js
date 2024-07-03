const day = document.querySelector('.day')

const now = new Date()

const hours = now.getHours()

const min = now.getMinutes()
const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday']

const today = now.getDay()

const time = dayOfWeek[today]

day.innerText = `${hours}:${min}  ${time}`

console.log(time)
