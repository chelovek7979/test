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

const modal = document.querySelector('[data-js-modal]')
const modalTitle = document.querySelector('[data-js-modal-title]')
const modalTrueAnswer = document.querySelector('[data-js-true]')
const modalmark = document.querySelector('[data-js-mark]')

const progress = document.querySelector('[data-js-progress]')

const allBtn = document.querySelectorAll('#btnAllDisable')



const closeModal = document.querySelector('[data-js-closeModal]')


const counter = document.querySelector('[data-js-counter]')

/* Количесвто секундн до конца попытки */
let numberInTimer = 120




/* правильные ответы */
const arrayTrueAnswer = [1,1,1,['Вариант 2','Вариант 4'],'картошка']

/* счетчик завершенных вопросов */
let answered = 0

let timer

/* счетчик правильных ответов */
count  = 0

function checkEnd(resolve){
    if(answered === 5){
        resolve(count)
    }
}


let promise = new Promise((resolve,reject) => {


/* Обработчик на первый вопрос */
btn_1.addEventListener('click',()=>{

    InputAnswer1 = answer_1.value.trim()

    if(InputAnswer1 == ''){
        alert('Заполниет поля ввода')
        return
    }
    if(answer_1.value == arrayTrueAnswer[0]){
        value_1.textContent = 'Ответ верный'
        value_1.style = 'background-color: green'
        count++ 
   
    }
    else{
        value_1.textContent = 'Ответ неверный'
        value_1.style = 'background-color: red'
  
    }
    value_1.classList.add('active')
    btn_1.disabled = true
    answered++;
    checkEnd(resolve)
})

/* Обработчик на второй вопрос */
btn_2.addEventListener('click',()=>{

    if(answer_2.value == arrayTrueAnswer[1]){
        value_2.textContent = 'Ответ верный'
        value_2.style = 'background-color: green'
        count++       
    }
    else{
        value_2.textContent = 'Ответ неверный'
        value_2.style = 'background-color: red'
    }
    btn_2.disabled = true  
    value_2.classList.add('active')
    answered++
    checkEnd(resolve);
    

})

/* Обработчик на третий вопрос */
button3.addEventListener('click', () => {
	for (let radio of radios) {
		if (radio.checked) {
			if(radio.value == arrayTrueAnswer[2]){
                value_3.textContent = 'Ответ верный'
                value_3.style = 'background-color: green'
                count++ 
            }
            else{
            value_3.textContent = 'Ответ неверный'
            value_3.style = 'background-color: red'
            }

            button3.disabled = true
            value_3.classList.add('active')
            answered++
            checkEnd(resolve);
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
        count++
    } 
    else {
        value_4.textContent = 'Ответ неверный'
        value_4.style = 'background-color: red'
    }
  button4.disabled = true
  value_4.classList.add('active')
  answered++
  checkEnd(resolve)

})


/* Обработчик на пятый вопрос */
button5.addEventListener('click',()=>{

    if(select.value === arrayTrueAnswer[4]){
        value_5.textContent = 'Ответ верный'
        value_5.style = 'background-color: green'
        count++ 
    }
    else{
        value_5.textContent = 'Ответ неверный'
        value_5.style = 'background-color: red'
   
    }
    value_5.classList.add('active')
    button5.disabled = true
    answered++
    checkEnd(resolve);
})


let progressWidtth = 0
 timer  = setInterval(()=>{
    if(numberInTimer == -1){
        clearInterval(timer)
        reject()
        return
    }
    const minutes = Math.floor(numberInTimer / 60)
    const seconds = numberInTimer % 60
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    
    progressWidtth += 0.83
    if(progressWidtth> 4){
        progress.style.borderRadius = '50px'
    }
    progress.style.width = progressWidtth + "%"
    
    numberInTimer--
    counter.textContent = formattedTime

},1000)


})


  



promise.then((result) => {
    clearInterval(timer)
  let grade
  if (result === 5) {
    grade = 'Отлично (5)'
    modalmark.style.color = 'green'
    modalmark.style["boxShadow"] = "0 0 5px #37d122ff"
  }
  else if (result === 4) {
    grade = 'Хорошо (4)'
    modalmark.style.color = 'yellow'
    modalmark.style["boxShadow"] = "0 0 5px #e6e92aff"
  }
  else if (result === 3) {
    grade = 'Удовлетворительно (3)'
    modalmark.style.color = 'orange'
    modalmark.style["boxShadow"] = "0 0 5px #ee7d14ff"
  }
  else {
    grade = 'Плохо (2)'
    modalmark.style.color = 'red' 
    modalmark.style["boxShadow"] = "0 0 5px #ff0000ff"

  }

  modalTrueAnswer.textContent = `Правильных ответов:${result}`
  modalmark.textContent = `Оценка: ${grade}`
  modalTitle.textContent = ' ✅ Тест завершён!'
  modal.style.scale = 1
  

},
(error) => {
    modal.style.scale = 1
    for(i = 0; i < allBtn.length; i++) {
        allBtn[i].disabled = true
    }
    modalmark.textContent = `Слишком долгая попытка`
    modalTitle.textContent = ' ⏰ Тест провален!'
    
    
    


});


  
 closeModal.addEventListener('click',()=>{
    modal.style.scale = '0' 
    })
 

function refreshPage(){
    window.location.reload();
} 
