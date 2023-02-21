function errMessage(parent,message)
{
    let error_message = document.createElement('div');
        error_message.className = 'error-message';
        error_message.innerHTML = message;
        parent.append(error_message);
        setTimeout(()=>{error_message.classList.add('error-message_anim');},100)
        
        setTimeout(() =>{
            error_message.classList.remove('error-message_anim');
            error_message.remove()
        },1000);
}
