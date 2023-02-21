let form = document.querySelector('.registr>form');
let id = 0;

// console.log(form.name);

form.sub.addEventListener('click', event =>{sendData(event)});
form.avatarka.addEventListener('change', (event)=>{
    var nameFile = inputFile(event,event.target.parentElement,nameFile);
    
    console.log(nameFile);
})


function sendData(e)
{
    e.preventDefault();

    if(checkValid())
    {
        let answer = checkPassword()
        console.log(answer);
        if(answer.istrue)
        {
            console.log(true);
            validData(answer.name,answer.fname,answer.password,answer.email);
        }
        
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
            item.classList.add('inp_invalid')
            item.placeholder = 'invalid value!';
        }
        else{
            item.classList.remove('inp_invalid')
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
            let valid_point = 0;
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

            for(item of parent.children)
            {
                if(item.classList.contains('rules-pass-check')) valid_point++;
            }
            
            if(valid_point == parent.children.length)
            {
                return {
                    istrue: true,
                    password: pass.value,
                    name: form.name.value,
                    email: form.email.value,
                    fname: form.fname.value
                };
            }
            else return false;
        }
    }
}
function validData(name,fname,nameFile,email,pass)
{
    id++;
    let user = new User(id,name,fname,nameFile,pass,email);
    console.log(user);
    
}

function User(id,name,fname,img,password,email)
{
    this.id = id
    this.name = name
    this.fname = fname
    this.img = img
    this.password = password
    this.email = email
}


