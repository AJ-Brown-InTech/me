/*Projects and Skills*/

var cardData = [
    {title: "HTML5/CSS3", description: " I USE THESE TECHNOLOGIES TO BRING INNOVATION & STRUCTURE TO BROWSERS, SOME ANIMATIONS TOO"},
    {title: "JAVASCRIPT", description: " I USE THIS TECHNOLOGY TO CREATE ANIMATIONS AND EFFECTS BUT ALSO HANDLE ALL THAT DATA"},
    {title: "REACT.JS", description: " I USE THIS TO CREATE DYNAMIC APPLICATIONS"},
    {title: "NODE/EXPRESS.JS", description: " I USE THIS FRAMEWORK AND RUNTIME FOR WORKING WITH SERVERS AND HANDLING REQUEST"},
    {title: "GIT", description: " I USE THIS VERSION CONTROL FOR SOURCE CODE MANAGEMENT, GREAT PART IS IT'S BASH IS ALMOST IDENTICAL TO LINUX'S TERMINAL"},
    {title: "VISUAL STUDIO CODE", description: " THIS IS MY PREFERED INTEGRATED DEVELOPMENT ENVIROMENT"},
    {title: "LINUX/WINDOWS 10", description: " THESE ARE THE TWO OPERATING SYTEMS I USE, I'VE SETUP THESE ENVIROMENTS ON MY COMPUTERS"},
    {title: "MONGODB (ATLAS)", description: " I USE THIS NOSQL CLOUD DATABASE FOR DATABASE MANAGEMENT WHEN CONNECTING APP SERVERS"},
    {title: "HEROKU", description: " I USE THIS TO DEPLOY AND MANAGE WEB APPLICATIONS TECHNOLOGIES TO BRING INNOVATION & STRUCTURE TO BROWSERS"},
]

var projectData = [
    {title: "Weather API", description:" ", photo:"https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", link:"https://github.com/AJ-Brown-InTech/Weather-API"},
    {title: "Burger API Build", description:" ", photo:"https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", link:"https://github.com/AJ-Brown-InTech/Burger-API-Build"},
    {title: "Basic Node Server", description:" ", photo:"https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", link:"https://github.com/AJ-Brown-InTech/Node.js-Server"},
    {title: "API Book Project", description:" ", photo:"https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {title: "React Portfolio Project", description:" ", photo:"https://images.pexels.com/photos/3597326/pexels-photo-3597326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", link:"https://ajalanbrown.herokuapp.com/home"},
    {title: "Fashion Website (in-progress)", description:" ",photo: " https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", link:"https://github.com/AJ-Brown-InTech/Website"}
]
//Skill card build
function getHTMLForCards(cardData){
    return ` <div class="card each-skill" ; >
    <div class="card-body">
      <h5 class="card-title">${cardData.title}</h5>
      <p class="card-text">${cardData.description}.</p>
      
    </div>
  </div> `
}
//Project card build
function getHTMLforProjects(projectData){
  return ` <div class="card each-project" style="min-width: 25rem;">
  <img src="${projectData.photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-text">${projectData.title}</h5>
    <p class="card-text">${projectData.description}</p>
    <subcript><a href ="${projectData.link}">Learn More</a></subscript>
  </div>
</div> `
}

//Getting the Projects & Cards in our html where we want to place data.
const projects = document.querySelector('.projects')
const cards = document.querySelector('.cards')
//Passing data inherently building each card
const eachProjectCard = projectData.map( x => getHTMLforProjects(x)).join("")
const eachSkillCard = cardData.map(x=> getHTMLForCards(x)).join("")

//have html use/build data for each card
projects.innerHTML = (eachProjectCard)
cards.innerHTML = (eachSkillCard)

/*navbar animation and navigation effects */

//gettig the areas im working with
const navbarlinks = document.querySelectorAll( 'nav-item a')
const navbarMenu = document.querySelector('nav ul')
const navbarToggler = document.querySelector('.touch')

navbarToggler,addEventListener('click', navbarTogglerClick)

function navbarTogglerClick(){
  navbarToggler.classList.toggle("open-navbar-toggler")
  navbarMenu.classList.toggle("open")
}

navbarlinks.forEach(element => element.addEventListener('click', navbarlinksClick))

function navbarlinksClick (event) {

 smoothScroll(event)//call the smooth scroll func

  if(navbarMenu.classList.contains('open')) { //close the navbar when the screen is smaller
    navbarToggler.click()
  }
}

 function smoothScroll (event){
  event.preventDefault()
    const targetId =  event.currentTarget.getAttribute('href') === "#" ? "section id": event.currentTarget.getAttribute('href')
console.log(targetId)
   document.querySelector.targetId.scrollIntoView(
     {behavior: "smooth", 
     block: "start"
   })
  }
  
  function scrollAppearOne(){
    let introText =  document.querySelector('.one')
    let introPosition = introText.getBoundingClientRect().top
    let screenPosition = window.innerHeight / 2
   
    if(introPosition < screenPosition){
      introText.classList.add('view-appear')
    } 
   }
   window.addEventListener('scroll', scrollAppearOne)

function scrollAppearTwo(){
   let secondText = document.querySelector('.two')
   let myCurrentPosition = secondText.getBoundingClientRect().top
   let screenPosition = window.innerHeight/2

   if(myCurrentPosition < screenPosition){
    secondText.classList.add('view-appear')
  } 
}   
window.addEventListener('scroll', scrollAppearTwo)


function scrollAppearThree(){
  let thirdText = document.querySelector('.three')
  let myCurrentPosition = thirdText.getBoundingClientRect().top
  let screenPosition = window.innerHeight 

  if(myCurrentPosition < screenPosition){
   thirdText.classList.add('view-appear')
 } 
}
window.addEventListener('scroll', scrollAppearThree)

document.querySelector('.touch').style.opacity = "0"



