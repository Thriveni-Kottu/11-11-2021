function btnChange(){
    let image = document.getElementById('image');
    let changeImage = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.png'];
    let random = Math.floor(Math.random() * 5);
    image.src = changeImage[random];
}
