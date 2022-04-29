const prev = document.getElementById('prev')
const next = document.getElementById('next')
const slide = document.getElementsByClassName('slide')
const setting = document.querySelector('.setting-icon')
const autoBtn = document.getElementById('auto')
let autoSlide
const autoSlideTiming = 5000
let slideInterval



const prevSlide = () => {
    const current = document.querySelector('.current')

    current.classList.remove('current')

    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current')
    }else{
        slide[slide.length -1].classList.add('current')
    }
}

const nextSlide = () => {
    const current = document.querySelector('.current')

    current.classList.remove('current')

    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current')
    }else{
        slide[0].classList.add('current')
    }
}

setting.addEventListener('click', () => {
    if(document.getElementById('auto-slide').classList.contains('block')){
        document.getElementById('auto-slide').style.display = 'none'

        document.getElementById('auto-slide').classList.remove('block') 
    }else {
        document.getElementById('auto-slide').classList.add('block')

        document.getElementById('auto-slide').style.display = 'block'
    }
    
})

autoBtn.addEventListener('click', () => {
    autoSlide = autoBtn.checked
    //const slideAuto = autoBtn.checked

    slideWouldYa()
    //console.log(autoSlide)
})

next.addEventListener('click', () => {
    nextSlide()

    if(autoSlide) {
        clearInterval(slideInterval)
        slideInterval = setInterval(() => nextSlide(), autoSlideTiming)
    }
})

prev.addEventListener('click', () => {
    prevSlide()

    if(autoSlide) {
        clearInterval(slideInterval)
        slideInterval = setInterval(() => nextSlide(), autoSlideTiming)
    }
})

function slideWouldYa () {
    //let slideAuto = autoSlide
    if(autoSlide) {
        slideInterval = setInterval(() => nextSlide(), autoSlideTiming)
    }else {
        clearInterval(slideInterval)
    }
}