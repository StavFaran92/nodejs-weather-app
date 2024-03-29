console.log('client side js loaded')

const featchLocationWeather = (location)=>{
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            return {error:data.error}
        }
        else{
            return {
                location: data.location,
                forecast: data.forecast
            }
        }
    })
})}

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageTwo = document.querySelector('#message-1')
const messageOne = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
            }
            else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})