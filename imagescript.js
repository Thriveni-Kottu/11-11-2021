function btnChange(){
    let image = document.getElementById('image');
    let changeImage = ['imgs/image1.jpg','imgs/image2.jpg','imgs/image3.jpg','imgs/image4.jpg','imgs/image5.png'];
    let random = Math.floor(Math.random() * 5);
    image.src = changeImage[random];
}
