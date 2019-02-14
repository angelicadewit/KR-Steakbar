// TODO rename file or merge into main    
const mql = window.matchMedia(`(max-width: 640px)`);

const h2s = document.querySelectorAll(`.main-content h2`)
const allElementsHidden = document.querySelectorAll(`.main-content li, h1`)


let removeBodyClasses = function() {
    document.body.classList.remove( `food` )
    document.body.classList.remove( `bureau` )
    document.body.classList.remove( `bar` )
    document.body.classList.remove( `table` )
    document.body.classList.remove( `location` )
    document.body.classList.remove( `hours` )
}

let closeOtherOpenLIs = function() {
    document.querySelectorAll(`.main-content li.open`).forEach(function(otherOpen) {
        otherOpen.classList.remove('preview')
        otherOpen.classList.remove('open')
    })
}


h2s.forEach(function(h2) {


    let small = {
        setup: function() {
            console.log(`small setup`)
            h2.addEventListener(`click`, small.onClick);
        },
        teardown: function() {
            console.log("small teardown")
            h2.removeEventListener(`click`, small.onClick);
        },
        onClick: function(e) { 
            removeBodyClasses();
            document.body.classList.add( this.getAttribute('data-body-class') )
            
            if (!h2.parentElement.classList.contains(`preview`)){ 
                closeOtherOpenLIs()
                h2.parentElement.classList.add(`preview`)
                h2.parentElement.classList.add(`open`)
                document.body.classList.add(`pad-footer`)

                // description.classList.add(`open`)
                console.log(`open`)
            }  else {
                h2.parentElement.classList.remove(`preview`)
                h2.parentElement.classList.remove(`open`)
                document.body.classList.remove(`pad-footer`)
                document.body.classList.remove( this.getAttribute('data-body-class') )
                console.log(`close`)
            }
        },
    }
    
    const closeSVGBtn = h2.parentElement.querySelector(`.close-svg`)

    let large = {
        setup: function() {
            console.log(`large setup`)
            h2.addEventListener('mouseover', large.mouseOver)
            h2.addEventListener('mouseout', large.mouseOut)
            h2.addEventListener('click', large.mouseClick)
            closeSVGBtn.addEventListener('click', large.mouseClick)
            
        },
        teardown: function() {
            console.log(`large teardown`)
            h2.removeEventListener('mouseover', large.mouseOver)
            h2.removeEventListener('mouseout', large.mouseOut)
            h2.removeEventListener('click', large.mouseClick)
            closeSVGBtn.removeEventListener('click', large.mouseClick)
        },

        mouseClick: function() { 
            if (!h2.parentElement.classList.contains(`open`)) {
                large.open.call(this)
            } else {
                large.close.call(this)
            }
        },

        open: function () {
            console.log('clicked to open')
            closeOtherOpenLIs()
            h2.parentElement.parentElement.classList.add(`a-child-is-open`) // the UL
            h2.parentElement.classList.add(`open`) // the LI
            h2.removeEventListener('mouseout', large.mouseOut)
            
            let closeSVGBtnPieces = closeSVGBtn.querySelectorAll("path, line")
            TweenMax.from(closeSVGBtnPieces, 0.7, {drawSVG: "50% 50%", delay:0.2});
        },

        close: function() {
            console.log('clicked to close')
            h2.parentElement.parentElement.classList.remove(`a-child-is-open`) // the UL
            h2.parentElement.classList.remove(`open`)
            h2.parentElement.classList.remove(`preview`)
            h2.addEventListener('mouseout', large.mouseOut)
            removeBodyClasses()
        },
        
        mouseOver: function(){
            console.log("hover")
            removeBodyClasses();
            document.body.classList.add( this.getAttribute('data-body-class') )
            this.parentElement.classList.add(`preview`)
        },
        
        mouseOut: function(){
            removeBodyClasses();
            this.parentElement.classList.remove(`preview`)
        },
    }

    mql.addListener(function(data) {
        if (data.matches) {
            console.log(`mql changed to small`)
            h2.parentElement.parentElement.classList.remove(`a-child-is-open`)
            h2.parentElement.classList.remove(`preview`)
            h2.parentElement.classList.remove(`open`)
            removeBodyClasses();
            large.teardown()
            small.setup()

        } else {
            console.log(`mql changed to large`)
            h2.parentElement.classList.remove(`preview`)
            h2.parentElement.classList.remove(`open`)
            removeBodyClasses();
            small.teardown()
            large.setup()
        }
    })

    if (mql.matches) {
        small.setup()

    } else {
        large.setup()
    }   
    
})
