const form = document.querySelector
const nine = document.querySelector(".nine");  
const output = document.querySelector(".output");
const container = document.querySelector(".container");
const cospan = document.querySelector(".cospan");
const one = document.querySelector(".one");
const six = document.querySelector(".six");
const main = document.querySelector(".main");
const header1 = document.querySelector(".header1");
// const header2= document.querySelector(".header2");
// const header3 = document.querySelector(".header3");
// const header6 = document.querySelector(".header6");
// const header5 = document.querySelector(".header5");
// const three= document.querySelector(".three");
// const third = document.getElementById(".third");
// const header4 = document.querySelector(".header4")
// const note = document.querySelector(".note");
// const ten = document.querySelector(".ten");


nine.addEventListener('click', (e) => {
    e.preventDefault()
     if(main.value === ""){
        header6.style.display = "block" ;
    }else{
        cospan.style.display = 'block';
        container.style.display = 'none';
    }

    // if(six.value === ""){
    //     header2.style.display = "block" ;
    // }else{
    //     cospan.style.display = 'block';
    //     container.style.display = 'none';
    // }
    
    // // if(main.value === ""){
    //     .style.display = "block" ;
    // }else{
    //     cospan.style.display = 'block';
    //     container.style.display = 'none';
    // }
    //  if(third.value === ""){
    //   header4.style.display = "block" ;
    // }else{
    //     cospan.style.display = 'block';
    //     container.style.display = 'none';
    // }
    

    
    // if (ten.value === "" || !ten.checked) {
    //     error.style.display = "block";
    // } else {
    //     cospan.style.display = 'block';
    //     container.style.display = 'none';
    // }


    
});








  
