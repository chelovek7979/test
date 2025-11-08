const answer_1 = document.querySelector('[dats-js-answer_1]')
const btn_1 = document.querySelector('[data-js-btn1]')
const value_1 = document.querySelector('[data-js-setValue_1]')

const answer_2 = document.querySelector('[dats-js-answer_2]')
const btn_2 = document.querySelector('[data-js-btn2]')
const value_2 = document.querySelector('[data-js-setValue_2]')

const radios = document.querySelectorAll('input[type="radio"]')
const button3 = document.querySelector('[data-js-btn3]')
const value_3 = document.querySelector('[data-js-setValue_3]')



const button4 = document.querySelector('[data-js-btn4]')
const value_4 = document.querySelector('[data-js-setValue_4]')


const button5 = document.querySelector('[data-js-btn5]')
const value_5 = document.querySelector('[data-js-setValue_5]')
const select = document.querySelector('[data-js-vegetables]')



/* правильные ответы */
const arrayTrueAnswer = [1,1,1,['Вариант 2','Вариант 4'],'картошка']


/* счетчик правильных ответов */
count  = 0


/* Обработчик на первый вопрос */
btn_1.addEventListener('click',()=>{

    InputAnswer1 = answer_1.value.trim()

    if(InputAnswer1 == ''){
        alert('Заполниет поля ввода')
    }
    else if(answer_1.value == arrayTrueAnswer[0]){
        value_1.textContent = 'Ответ верный'
        value_1.style = 'background-color: green'
        value_1.classList.toggle('active')
        count++ 
        btn_1.disabled = true
        
    }
    else{
        value_1.textContent = 'Ответ неверный'
        value_1.style = 'background-color: red'
        value_1.classList.toggle('active')
        btn_1.disabled = true
    }
})

/* Обработчик на второй вопрос */
btn_2.addEventListener('click',()=>{

    if(answer_2.value == arrayTrueAnswer[1]){
        value_2.textContent = 'Ответ верный'
        value_2.style = 'background-color: green'
        value_2.classList.toggle('active')
        count++   
        btn_2.disabled = true   
    }
    else{
        value_2.textContent = 'Ответ неверный'
        value_2.style = 'background-color: red'
        value_2.classList.toggle('active')
        btn_2.disabled = true 

    }
    

})

/* Обработчик на третий вопрос */
button3.addEventListener('click', () => {
	for (let radio of radios) {
		if (radio.checked) {
			if(radio.value == arrayTrueAnswer[2]){
                value_3.textContent = 'Ответ верный'
                value_3.style = 'background-color: green'
                value_3.classList.toggle('active')
                count++ 
                button3.disabled = true
                 
                }
            else{
            value_3.textContent = 'Ответ неверный'
            value_3.style = 'background-color: red'
            value_3.classList.toggle('active')

            button3.disabled = true
            }
            
		}
	}
    
});



/* Обработчик на четвертый вопрос */
button4.addEventListener('click',() =>{
    const chekBoxex = document.querySelectorAll('input[name="variant"]:checked')
    const selectedValues = Array.from(chekBoxex).map(cb => cb.value)

    if (selectedValues.length === 0) {
        alert('Заполниет поля ввода')
        return
    }
    
    const isCorrect = 
    selectedValues.length === arrayTrueAnswer[3].length &&
    selectedValues.every(val => arrayTrueAnswer[3].includes(val))

    if (isCorrect) {
        value_4.textContent = 'Ответ верный'
        value_4.style = 'background-color: green'
        value_4.classList.toggle('active')
        count++
        button4.disabled = true
  } else {
        value_4.textContent = 'Ответ неверный'
        value_4.style = 'background-color: red'
        value_4.classList.toggle('active')
        button4.disabled = true
    
  }
})


/* Обработчик на пятый вопрос */
button5.addEventListener('click',()=>{

    if(select.value === arrayTrueAnswer[4]){
        value_5.textContent = 'Ответ верный'
        value_5.style = 'background-color: green'
        value_5.classList.toggle('active')
        count++ 
        button5.disabled = true
    }
    else{
        value_5.textContent = 'Ответ неверный'
        value_5.style = 'background-color: red'
        value_5.classList.toggle('active')
        button5.disabled = true
        
    }
    
})





