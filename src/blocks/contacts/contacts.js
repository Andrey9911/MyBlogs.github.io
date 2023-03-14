let text_data;

for(item of document.querySelectorAll('.contacts__content>.icon__message'))
{
    item.addEventListener('click', el => {
        text_data = el.currentTarget.dataset.textData;
        let div = document.createElement('div');
        div.className = 'hint data-text';
        div.innerHTML = '<p>copied</p>'
        el.currentTarget.append(div);
        selectText(div);//выделим и скопируем текст
        setTimeout(()=>{
            div.classList.add('hint_show');
        },10)
        setTimeout(() => {
            div.remove();
        }, 1000)
    })
}

function selectText(el)
{
    console.log(el);
    let sel = new Range();
    sel.setStart(el,0);
    sel.setEnd(el,1)

    window.getSelection().removeAllRanges()
    window.getSelection().addRange(sel);
    document.execCommand('copy');
    window.getSelection().empty();
    
}