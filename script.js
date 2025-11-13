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
const gallery = document.querySelector('[data-js-gallery]')
const modal = document.querySelector('[data-js-modal]')
const modalTitle = document.querySelector('[data-js-modal-title]')
const modalTrueAnswer = document.querySelector('[data-js-true]')
const modalmark = document.querySelector('[data-js-mark]')
const moreAttempt = document.querySelector('[data-js-more-attempt]')
const progress = document.querySelector('[data-js-progress]')
const allBtn = document.querySelectorAll('#btnAllDisable')
const closeModal = document.querySelector('[data-js-closeModal]')
const counter = document.querySelector('[data-js-counter]')
const attemptElement = document.querySelector('[data-js-attempt]')
	/* правильные ответы */
const arrayTrueAnswer = [8, 32, 1, ['anjumania', 'run','press'], 'garchina']
	/* Количесвто секундн до конца попытки */
let numberInTimer = 120
	/* счетчик завершенных вопросов */
let answered = 0
let timer
	/* счетчик правильных ответов */
count = 0
let attempt = 3
	/* Добавление фото к результату теста */
const cat = document.createElement('img')
cat.alt = 'cat';
cat.style.width = '200px';
cat.style.height = '200px';
cat.style.borderRadius = '10px';
/* поверка количества решенных вопросов */
function checkEnd(resolve) {
	if(answered === 5) {
		resolve(count)
	}
}

function resetTest() {
	// Очистка значений
	answered = 0;
	count = 0;
	numberInTimer = 120;
	clearInterval(timer);
	// Очистка полей ввода
	answer_1.value = '';
	answer_2.value = '';
	document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false)
	radios.forEach(r => r.checked = false);
	select.value = '';
	// Сброс текста и цвета ответов
	[value_1, value_2, value_3, value_4, value_5].forEach(v => {
		v.textContent = '';
		v.classList.remove('active');
		v.style = '';
	});
	// Включаем все кнопки снова
	[btn_1, btn_2, button3, button4, button5].forEach(b => b.disabled = false);
	allBtn.forEach(b => b.disabled = false);
	// Скрываем модальное окно и картинку
	modal.style.scale = 0;
	gallery.innerHTML = '';
}

function startAttempt() {
	let promise = new Promise((resolve, reject) => {
		if(attempt <= 0) {
			moreAttempt.disabled = true;
			alert('Попытки закончились!');
			attemptElement.textContent = `Число попыток: ${attempt }`
			return;
		}
		attemptElement.textContent = `Число попыток: ${attempt}`
		attempt--
		/* Обработчик на первый вопрос */
		btn_1.addEventListener('click', handleAnswer1, {
			once: true
		});

		function handleAnswer1() {
			const InputAnswer1 = answer_1.value.trim();
			if(InputAnswer1 === '') {
				alert('Заполните поле ввода');
				btn_1.addEventListener('click', handleAnswer1, {
					once: true
				});
				return; // выходим, не продолжаем
			}
			if(InputAnswer1 == arrayTrueAnswer[0]) {
				value_1.textContent = 'Ответ верный';
				value_1.style.backgroundColor = 'green';
				count++;
			} else {
				value_1.textContent = 'Ответ неверный';
				value_1.style.backgroundColor = 'red';
			}
			value_1.classList.add('active');
			btn_1.disabled = true;
			answered++;
			checkEnd(currentResolve); // если у тебя промис
		}
		// навешиваем обработчик при старте попытки
		btn_2.addEventListener('click', handleAnswer2, {
			once: true
		});

		function handleAnswer2() {
			const InputAnswer2 = answer_2.value.trim();
			if(InputAnswer2 === '') {
				alert('Заполните поле ввода');
				// Повторно навешиваем обработчик, чтобы пользователь мог снова ответить
				btn_2.addEventListener('click', handleAnswer2, {
					once: true
				});
				return; // Прерываем выполнение функции
			}
			if(InputAnswer2 == arrayTrueAnswer[1]) {
				value_2.textContent = 'Ответ верный';
				value_2.style.backgroundColor = 'green';
				count++;
			} else {
				value_2.textContent = 'Ответ неверный';
				value_2.style.backgroundColor = 'red';
			}
			btn_2.disabled = true;
			value_2.classList.add('active');
			answered++;
			checkEnd(currentResolve);
		}
		// навешиваем обработчик при старте попытки
		button3.addEventListener('click', handleAnswer3, {
			once: true
		});

		function handleAnswer3() {
			let checkedRadio = Array.from(radios).find(r => r.checked);
			if(!checkedRadio) {
				alert('Выберите вариант ответа');
				// Повторно навешиваем обработчик, чтобы пользователь мог выбрать
				button3.addEventListener('click', handleAnswer3, {
					once: true
				});
				return;
			}
			if(checkedRadio.value == arrayTrueAnswer[2]) {
				value_3.textContent = 'Ответ верный';
				value_3.style.backgroundColor = 'green';
				count++;
			} else {
				value_3.textContent = 'Ответ неверный';
				value_3.style.backgroundColor = 'red';
			}
			button3.disabled = true;
			value_3.classList.add('active');
			answered++;
			checkEnd(currentResolve); // замените на свой resolve
		}
		// навешиваем обработчик при старте попытки
		button4.addEventListener('click', handleAnswer4, {
			once: true
		});

		function handleAnswer4() {
			const checkboxes = document.querySelectorAll('input[name="variant"]:checked');
			const selectedValues = Array.from(checkboxes).map(cb => cb.value);
			if(selectedValues.length === 0) {
				alert('Заполните поля ввода');
				// 🔁 Заново навешиваем обработчик, чтобы пользователь мог повторить попытку
				button4.addEventListener('click', handleAnswer4, {
					once: true
				});
				return;
			}
			const isCorrect = selectedValues.length === arrayTrueAnswer[3].length && selectedValues.every(val => arrayTrueAnswer[3].includes(val));
			if(isCorrect) {
				value_4.textContent = 'Ответ верный';
				value_4.style.backgroundColor = 'green';
				count++;
			} else {
				value_4.textContent = 'Ответ неверный';
				value_4.style.backgroundColor = 'red';
			}
			button4.disabled = true;
			value_4.classList.add('active');
			answered++;
			checkEnd(currentResolve); // замените на свой resolve
		}
		/* Обработчик на пятый вопрос */
		button5.addEventListener('click', () => {
			if(select.value === arrayTrueAnswer[4]) {
				value_5.textContent = 'Ответ верный'
				value_5.style = 'background-color: green'
				count++
			} else {
				value_5.textContent = 'Ответ неверный'
				value_5.style = 'background-color: red'
			}
			value_5.classList.add('active')
			button5.disabled = true
			answered++
			checkEnd(resolve);
		}, {
			once: true
		})
		let progressWidtth = 0
		timer = setInterval(() => {
			if(numberInTimer == -1) {
				clearInterval(timer)
				reject()
				return
			}
			const minutes = Math.floor(numberInTimer / 60)
			const seconds = numberInTimer % 60
			const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
			progressWidtth += 0.83
			if(progressWidtth > 4) {
				progress.style.borderRadius = '50px'
			}
			progress.style.width = progressWidtth + "%"
			numberInTimer--
			counter.textContent = formattedTime
		}, 1000)
	})
	promise.then((result) => {
		clearInterval(timer)
		let grade
		if(result === 5) {
			grade = 'Отлично (5)'
			modalmark.style.color = 'green'
			modalmark.style["boxShadow"] = "0 0 5px #37d122ff"
			cat.src = './img/cat.webp'
		} else if(result === 4) {
			grade = 'Хорошо (4)'
			modalmark.style.color = 'yellow'
			modalmark.style["boxShadow"] = "0 0 5px #e6e92aff"
			cat.src = './img/cat.webp'
		} else if(result === 3) {
			grade = 'Удовлетворительно (3)'
			modalmark.style.color = 'orange'
			modalmark.style["boxShadow"] = "0 0 5px #ee7d14ff"
			cat.src = './img/sadCat.webp'
		} else {
			grade = 'Плохо (2)'
			modalmark.style.color = 'red'
			modalmark.style["boxShadow"] = "0 0 5px #ff0000ff"
			cat.src = './img/sadCat.webp'
		}
		modalTrueAnswer.textContent = `Правильных ответов:${result}`
		modalmark.textContent = `Оценка: ${grade}`
		modalTitle.textContent = ' ✅ Тест завершён!'
		modal.style.scale = 1
		gallery.appendChild(cat)
	}, (error) => {
		modal.style.scale = 1
		for(i = 0; i < allBtn.length; i++) {
			allBtn[i].disabled = true
		}
		modalmark.textContent = `Слишком долгая попытка`
		modalTitle.textContent = ' ⏰ Тест провален!'
	});
}
closeModal.addEventListener('click', () => {
	modal.style.scale = '0'
})
moreAttempt.addEventListener('click', () => {
	modal.style.scale = '0'
	resetTest()
	startAttempt()
})
window.addEventListener('DOMContentLoaded', () => {
	startAttempt();
});
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	});
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));