let images=Array.from(document.querySelectorAll(".landig .images img"));
let palls=Array.from(document.querySelectorAll(".landig ul li"));
let next =document.getElementById("next");
let prev =document.getElementById("prev");
let active =1;
images[active].classList.add('active');
palls[active].classList.add('active');

active===0?prev.style.color="black" : prev.style.color="white";
active===2?next.style.color="black" : next.style.color="white";

next.onclick=()=>{
    if(active!=2)
    active++;
    active===2?next.style.color="black" : next.style.color="white";
    prev.style.color="white"
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
        palls[i].classList.remove("active");
    }
images[active].classList.add('active');
palls[active].classList.add('active');
};
prev.onclick=()=>{
    if(active!=0)
    active--;
    active===0?prev.style.color="black" : prev.style.color="white";
    next.style.color="white"
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
        palls[i].classList.remove("active");
    }
images[active].classList.add('active');
palls[active].classList.add('active');
};
//////////////////////////////////////////////////////////////
// portfolio //
let imgs =Array.from(document.querySelectorAll(".portfolio .images-container .box"));
let switcherLis =Array.from(document.querySelectorAll(".portfolio ul li"));
/*
nav.onclick=()=>{
    // show(box);
    // nav.forEach(x=>{
    //     x.classList.remove(`active`);
    // })
    // // boxes.forEach(e=>e.style.display="block")
    // box.classList.add(`active`);
    // boxes.forEach(e=>e.style.display="block");
    console.log(`done`)
};
// function show(x){
//     boxes.filter((e)=>{
//     // console.log(x.className);
//     // console.log( e.className);
//     //  console.log( e.className.split(" ")[1],x.className);
//      console.log( ===x.className);
//     e.className.split(" ")[1]===x.className?e.style.display="block":e.style.display="none";
//     console.log( e.className.split(" ")[0], x.className);
//     e.className.split(" ")[0]===x.className?e.style.display="block":``;

// });
// }
nav.forEach(box=>{
    box.onclick=(e)=>{
         console.log(document.querySelectorAll(`${this.dataset.cat}`));
        show(box);
        nav.forEach(x=>{
            x.classList.remove(`active`);
        })
        // boxes.forEach(e=>e.style.display="block")
        box.classList.add(`active`);
    

}});

*/
switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
  });
  
  // Remove Active Class From All Lis And Add To Current
  function removeActive() {
    switcherLis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  }
   
  // Manage Imgs
  function manageImgs() {
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll(`.${this.dataset.cat}`).forEach((el) => {
      el.style.display = "block";
    });
  }
//   js ex & tutorial -- mdn--