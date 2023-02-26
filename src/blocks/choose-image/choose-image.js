function inputFile(input,elemPaste)
{
    let fileSource = input.target.files[0];
    let file = new FileReader();

    file.readAsDataURL(fileSource);
    file.onloadend = function(e){
        elemPaste.style.backgroundImage = `url(${file.result})`        
    }
    return fileSource.name
}



