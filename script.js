let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == "https://ssl.pstatic.net/static/m/vlive/mobile/2018/04/24/iOS8_512X512.png"){
        myImage.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG45rYrhJnp4pOMo9_S5cJ4W2aP_BqZfDFDg&usqp=CAU');
    }
     else {
         myImage.setAttribute('src',"https://ssl.pstatic.net/static/m/vlive/mobile/2018/04/24/iOS8_512X512.png");
     }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('.change');


function setUser() {
    myHeading.innerHTML = '';
    let myName = prompt('Please enter your Name');
    if(!myName) {
        alert("Ya gotta enter a name, Pabo..");

        setUser();
    }
    else{
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'BTS LOVES YOU, ' + myName.toUpperCase() + ' !';
    }
    
}

if(!localStorage.getItem('name')) {
    myHeading.innerHTML = '';
    setUser();
}

else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "BTS LOVES YOU, " + storedName.toUpperCase() + ' !';
}

myButton.onclick = function() {
    
    setUser();
}