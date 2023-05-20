const worker = new Worker('worker.js')

const sumButton = document.querySelector('#sumButton')
const bgButton = document.querySelector('#bgButton')

sumButton.addEventListener('click', (e) => {
    worker.postMessage('hello worker')

})

worker.onmessage = (message) => {
    console.log(message)
    alert(`final sum is ${message.data}`)

}


bgButton.addEventListener('click', (e) => {
    if(document.body.style.background !== 'green' ) {
        document.body.style.background = 'green'
    } else {
        document.body.style.background = 'blue'
    }
})

