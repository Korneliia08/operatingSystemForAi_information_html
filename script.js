create('#menuOpen_child_1', '#menuOpen_1')
create('#menuOpen_child_1_mobile', '#menuOpen_1_mobile')


function create(name1, name2) {
    let open = false;
    let menuOpen_child_1 = document.querySelector(name1)
    let menuOpen_1 = document.querySelector(name2)


    menuOpen_1.addEventListener("click", () => {
        if (open) {
            menuOpen_child_1.style.display = 'none'
            open = false
            menuOpen_1.classList.remove('open')
        } else {
            open = true
            menuOpen_child_1.style.display = ''
            menuOpen_1.classList.add('open')
        }
    })
}

let cards = document.querySelectorAll(".cards")
Array.from(cards).forEach(card => {
    card.style.display = 'none'
})
let card = document.querySelector('.card1')
card.style.display = 'flex'

function openCard(name) {

    docHamburger.classList.remove('is-active')
    mobileMenu.classList.remove('open')
    let cards = document.querySelectorAll(".cards")
    Array.from(cards).forEach(card => {
        card.style.display = 'none'
    })
    let card = document.querySelector(name)
    card.style.display = 'flex'
}

let docHamburger = document.querySelector("#docHamburger")
let mobileMenu = document.querySelector("#mobileMenu")
docHamburger.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (docHamburger.classList.contains("is-active")) {
        docHamburger.classList.remove('is-active')
        mobileMenu.classList.remove('open')
    } else {
        docHamburger.classList.add('is-active')
        mobileMenu.classList.add('open')
    }
}
