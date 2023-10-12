// element selection
const weight = document.querySelector('.weight')
const height = document.querySelector('.height')
const submitBtn = document.getElementById('submit')
const fields = document.querySelector('#fields')
const errorText = document.querySelector('span')
const bmi = document.querySelector('.bmians')
const bmiStatus =document.querySelector('.statusquo')

// adding eventlistener to a button
submitBtn.addEventListener('click', function(){
    // console.log(weight.value)
    // form validation
    if(weight.value ===''|| height.value ===''){
        // errorText.textContent is used to change a text in html or browser

        errorText.textContent = 'Please fill all fields'
        setTimeout(function(){
            errorText.textContent =''
        },5000)

    }else if(!Number(weight.value) || !Number(height.value)){
        errorText.textContent = 'Numbers are required'
        setTimeout(function(){
            errorText.textContent =''
        },5000)
    }else{
        const heightInMeters = height.value / 100
        const weightInNumber = Number(weight.value)
        console.log(heightInMeters)
        const bmiValue = ((weightInNumber/(heightInMeters * heightInMeters)) * 100) .toFixed(3)
        console.log(bmiValue)
        bmi.textContent = bmiValue

      
        if(Number(bmiValue) < 18.5){
            bmiStatus.textContent = "You are Under Weight"
        }else if(Number(bmiValue) >= 18.5 && Number(bmiValue) <= 24.9){
            bmiStatus.textContent = "You are Healthy Weight"
        }else if(Number(bmiValue) >= 25 && Number(bmiValue) <= 29.9){
            bmiStatus.textContent = "You are Over Weight"
        }else if(Number(bmiValue) >= 30){
            bmiStatus.textContent = "You are Obese"
        }
    }

    
})

// const heightInMeters = height / 10

// const bmiValue = ((weight / (heightInMeters*heightInMeters)) * 100).toFixed(2)




// setTimeout helps to set a time a particular text will appear before it disappear
// setInterval works contd every 5s

// setInterval(function(){
//     console.log('hello')
// },5000)