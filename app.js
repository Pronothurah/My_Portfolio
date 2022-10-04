
// Calling all sections & buttons

const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition(){
    // button click for active class

    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ' ');
            this.className += 'active-btn';
        } )
    }

    // Sections active class

    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;

        if(id){
            // Remove selected from other buttons
            secBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //Hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })

}


pageTransition();