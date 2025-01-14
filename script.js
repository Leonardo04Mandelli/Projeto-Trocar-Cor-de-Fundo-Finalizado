function trocarCor(color){
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = color
}

function corAleatoria(){
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function corPersonalizada(){
    const valueColor = document.querySelector(".value_color").value

    trocarCor(valueColor)
}

function imagemArquivo(fileImg){
    const readerImg = new FileReader()
    
    readerImg.readAsDataURL(fileImg)

    readerImg.onload = function(evento){
        const urlImg = evento.target.result

        document.body.style.backgroundImage = `url('${urlImg}')`
    }
}