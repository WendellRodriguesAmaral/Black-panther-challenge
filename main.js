const menuBtn = document.querySelector("button.menuIcon img")
const menuOptions = document.querySelector("div.menuOptions")
const listOptions = document.querySelectorAll("ul li a")
const skills = [...document.querySelectorAll(".skill")]

/*icone de menu e menu*/

function changeIconMenu(){
    if(menuOptions.classList.contains("show")){
        menuBtn.src="./icon menu close.png"
    }else{
        menuBtn.src="./icon menu.png"
    }
}

menuBtn.addEventListener("click" , ()=>{
    menuOptions.classList.toggle("show")
    changeIconMenu()
})

for(option of listOptions){
    option.addEventListener("click" , ()=>{
        menuOptions.classList.remove("show")
        changeIconMenu()
    })
}

/*skills*/

for(skill of skills){     
    skill.addEventListener("click", (e)=>{ //passando o evento por padrão  
        e.target.parentNode.nextElementSibling.classList.toggle("visible")
        
        skills.map(skillTest => {
          if(skillTest !== e.currentTarget) {
            skillTest.lastElementChild.classList.remove('visible')
          }
        }) 
        console.log("clicado")
    })
}




