function inputFile(input,elemPaste,nameFile)
{
    let fileSource = input.target.files[0];
    let file = new FileReader();

    file.readAsDataURL(fileSource);
    file.onloadend = function(e){
        elemPaste.style.backgroundImage = `url(${file.result})`
        // console.log(file.result);
        return  file.result;
    }

}



