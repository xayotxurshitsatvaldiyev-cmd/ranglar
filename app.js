const body = document.querySelector('body')
const quti = document.querySelector('.tugma')
const p = document.getElementById('p')
const qiymatlar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

function randomRanglar() {
    let boshYozuv = '#'

    for (let i = 0; i < 6; i++) {
        const belgi = Math.trunc(Math.random() * qiymatlar.length)
        boshYozuv += qiymatlar[belgi]
    }

    return boshYozuv
}

const setRanglar = () => {
    const color1 = randomRanglar()
    const color2 = randomRanglar()
    const daraja = Math.floor(Math.random() * 360)
    p.textContent = `${daraja}deg,    ${color1}, ${color2}`
    const bg = `linear-gradient(
        ${daraja}deg,
        ${color1},
        ${color2}
    )`
    body.style.background = bg
}


quti.addEventListener('click', setRanglar)
