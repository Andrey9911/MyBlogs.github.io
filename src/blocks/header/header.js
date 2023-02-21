let drop_block = document.querySelector('.profile-option');
let img_profile = document.querySelector('.profile-drop');

if(img_profile.querySelector('.profile-img').classList.contains('profile-img_isLogup'))
{
    img_profile.addEventListener('mouseenter', () => {
        drop_block.classList.add('profile-drop_isActive')})
    img_profile.addEventListener('mouseleave', () => {
        drop_block.classList.remove('profile-drop_isActive')})
}


