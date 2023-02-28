document.addEventListener('scroll', e => {
    console.log(e);
    if(e.target.scrollingElement.scrollTop >= 350)
    {
        
        document.querySelector('.head').classList.add('head_pos-fix')
    }
    else{
        document.querySelector('.head').classList.remove('head_pos-fix')
    }
    console.log(e.target.scrollingElement.scrollTop, document.querySelector('.my-bio').offsetTop, document.querySelector('.my-bio').getBoundingClientRect());
})
