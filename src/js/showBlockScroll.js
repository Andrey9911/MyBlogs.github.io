

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
        let topEl = el.getBoundingClientRect().top;
        if((topEl) < e.target.scrollingElement.clientHeight - 200)
        {
            if(el.classList.contains('my-scills'))
            {
                for(i of el.getElementsByClassName('progress-block__progress-scale'))
                {
                    console.log(i.classList.add('show'));
                    
                }
            }
            el.classList.add('scrollShow');
            // console.log(topEl, e.target.scrollingElement.clientHeight + 100);
        } else {
        }
    })
})
