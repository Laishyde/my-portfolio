function changeImage(){
    let displayImage = document.getElementById('image1')
    if (displayImage.src.match('./assets/astronauta.gif')){
        displayImage.src = './assets/azume.png'
    }else{
        displayImage.src = './assets/astronauta.gif'

    }
}