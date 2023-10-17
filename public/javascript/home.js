console.log('home.js')

const cards = document.querySelectorAll('.card')

cards.forEach(card => {

    card.addEventListener('click', async () => {

        const title = card.querySelector('h3').innerText
        console.log('clicked', title)

        const url = `http://localhost:3000/blog-content?q=${title}`
        window.open(url, '_blank')
    })
})

async function setPara() {

}
