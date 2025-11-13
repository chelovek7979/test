const input = document.querySelector('[data-js-input]')



let countAccept = 0


input.addEventListener('input', () => {
    let promise = new Promise((resolve, reject) => {
        
        if(countAccept === 3){
            input.remove()
            alert('достигнуто максимальн количесво ошибок')
            return
        }



        else if (input.checked) {
            countAccept ++
            resolve(`флажок поставлен ${countAccept} раз`)
        } else {
            reject('флажок снят')
        }
    })

    promise
        .then((message) => console.log(message))
        .catch((message) => console.log(message))
})


