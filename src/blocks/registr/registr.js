let form = document.querySelector('.registr>form');

// console.log(form.name);

form.sub.addEventListener('click', event =>{sendData(event)});


function sendData(e)
{
    e.preventDefault();

    if(checkValid())
    {
        checkPassword()
    }
    
}
function checkValid()
{
    let error_point = 0;
    for(item of form)
    {
        if(item.name == 'sub') break;

        if(item.value == '')
        {
            error_point ++;
            item.classList.add('inp_valid')
            item.placeholder = 'invalid value!';
        }
        else{
            if(item.name == 'avatarka') inputFile(item)
            
            item.classList.remove('inp_valid')
            item.placeholder = '';
        }
    }
    if(error_point > 0) return false;
    else return true;
}
function checkPassword(){
    let pass = form.pass;
    if(pass.value != form.passR.value) errMessage(document.body,'пароли не совпадают')
    else{
        if(pass.value.length <= 6) errMessage(document.body,'пароли не должны быть меньше 6 символов')
        else
        {
            let parent = document.querySelector('.note ul');
            let reg_A = parent.querySelector('.note__rules-pass_A');
            let reg_a = parent.querySelector('.note__rules-pass_a');
            let reg_d = parent.querySelector('.note__rules-pass_d');
            let reg_s = parent.querySelector('.note__rules-pass_s');

            for(i of parent.children)
            {
                i.classList.remove('rules-pass-check');
                i.classList.remove('rules-pass-invalid');
            }

            if(/[A-Z]/.test(pass.value)) reg_A.classList.add('rules-pass-check')
            else reg_A.classList.add('rules-pass-invalid')

            if(/[a-z]/.test(pass.value)) reg_a.classList.add('rules-pass-check')
            else reg_a.classList.add('rules-pass-invalid')

            if(/[1-9]/.test(pass.value)) reg_d.classList.add('rules-pass-check')
            else reg_d.classList.add('rules-pass-invalid')

            if(/[$%^&*]/.test(pass.value)) reg_s.classList.add('rules-pass-check')
            else reg_s.classList.add('rules-pass-invalid')
        }
    }
}



function errMessage(parent,message)
{
    let error_message = document.createElement('div');
        error_message.className = 'error-message';
        error_message.innerHTML = message;
        parent.append(error_message);
        setTimeout(() =>{error_message.remove()},1000);
}
