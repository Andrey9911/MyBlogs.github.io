

document.addEventListener('scroll', e => {
    // console.log(e);
    if(e.target.scrollingElement.scrollTop >= 350)
    {

        document.querySelector('.head').classList.add('head_pos-fix')
        document.querySelector('.arrow-top').classList.add("arrow-top_active")
    }
    else{
        document.querySelector('.head').classList.remove('head_pos-fix')
        document.querySelector('.arrow-top').classList.remove("arrow-top_active")
    }

    document.querySelectorAll('.visiable').forEach((el,i,arr) => {
        let navEl = document.querySelectorAll('li.nav__li>a');
        let topEl = el.getBoundingClientRect().top;
        let idEl = el.id;
        let href;
        for(a of navEl){
            href = a.href.match(/[^#]*$/)[0]
            if((topEl) < e.target.scrollingElement.clientHeight - 250 && (topEl * 1 != (-topEl))){
                if(idEl === href) {
                    a.classList.add('a_current-Nav-Block')
                }
                else a.classList.remove('a_current-Nav-Block')
            } 
        }
        
        if((topEl) < e.target.scrollingElement.clientHeight - 200)
        {

            if(el.classList.contains('my-scills'))
            {
                for(i of el.getElementsByClassName('progress-block__progress-scale'))
                {
                    i.classList.add('show');
                    
                }
            }
            el.classList.add('scrollShow');
            // console.log(topEl, e.target.scrollingElement.clientHeight + 100);
        } else {
        }
    })
})
