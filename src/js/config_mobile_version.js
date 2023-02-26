
if(document.body.clientWidth < 900)
{
    configNavBlock();
    configProfilBlock();

}
if(document.body.clientWidth < 450)
{
    document.querySelector('.head-title').textContent = 'AC'
}
function configNavBlock()
{
    let mobil_icon_list =  `<svg xmlns="http://www.w3.org/2000/svg" style="z-index:0;" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>`
    let div = document.createElement('div')
    div.innerHTML = mobil_icon_list;
    document.querySelector('.head').append(div)
    div.className = 'head__list list-open-nav'

    let mobil_nav = document.querySelector('.head-nav').cloneNode(true);
    mobil_nav.classList.add('nav_version_mobile');
    document.querySelector('.head-nav').remove();
    document.body.append(mobil_nav)


    let block_ico = document.querySelector('.list-open-nav');
    let content = document.querySelector('.nav_version_mobile');

    
        block_ico.addEventListener('click', e => {
            content.classList.add('list-open-nav_isActive')})
        
            
        
    document.addEventListener('click', e => {
        let target = e.target;
        console.log(target.parentElement);
        if(target.parentElement != block_ico && target != content) content.classList.remove('list-open-nav_isActive')
    })
        
}
function configProfilBlock()
{

    document.querySelector('.profile').classList.add('profile_version_mobile')
    document.querySelector('.profile-img').classList.remove('size-sm')
    for(p of document.querySelectorAll('.head__profile p'))
    {
        let clone_p = p.cloneNode(true);
        document.querySelector('.profile-option .profile-option__items').append(clone_p)
        
        p.remove();
    }
}