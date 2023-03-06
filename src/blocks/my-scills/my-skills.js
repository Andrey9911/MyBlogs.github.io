// let Progressbar = require('progressbar.js')

// let progress = new Progressbar.Line('.progress-block__progress-scale')
let soft_scills = document.querySelector('.my-scills__soft-scills').children;

for(item of soft_scills)
{
    item.addEventListener('mouseenter', e => {
        let elem = e.currentTarget;
        elem.classList.add('Description__icon_show');
        elem.querySelector('.Description__icon').addEventListener('click', el => {
            if(elem.querySelector('.Description__text').classList.contains('Description__text_show'))
            {
                elem.querySelector('.Description__text').classList.remove('Description__text_show')
            }
            else elem.querySelector('.Description__text').classList.add('Description__text_show')
        })
    })
    item.addEventListener('mouseleave', e => {
        let elem = e.currentTarget;
        elem.classList.remove('Description__icon_show');
        elem.querySelector('.Description__text').classList.remove('Description__text_show')
    })
}
