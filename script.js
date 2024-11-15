function menu(){
   var x = document.getElementById("clickto")
   if(x.style.display === "none"){
    x.style.display = "block"
   }else{
    x.style.display = "none"
   }
}


// Blog Tab

// let  subHeader = document.querySelector('.subHeader');
// let li = document.querySelectorAll('li');

// li.forEach(el =>{
//    el.addEventListener("click", ()=>{
//       subHeader.querySelector('.active').classList.remove('active');

//       el.classList.add('active');
//    })
// })

// let  tabs = document.getElementsByClassName('tabs-content');
// let tabsItem = document.querySelectorAll('.tabs-item');

// tabsItem.forEach(el =>{
//    el.addEventListener("click", ()=>{
//       tabs.getElementsByClassName('.active').classList.remove('active');

//       el.classList.add('active');
//    })
// })


const tabs = document.querySelectorAll(".tab-btn")
const tabItem = document.querySelectorAll(".tabs-item");

tabs.forEach((tab, index)=>{
   tab.addEventListener('click', ()=>{
      tabs.forEach((tab)=>tab.classList.remove("active"))
      tab.classList.add("active");

      tabItem.forEach((content)=>{content.classList.remove("active")})
      tabItem[index].classList.add("active")
   })
})







