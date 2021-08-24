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
    {title: "API Book Project", description:" ", photo:"https://www.pexels.com/photo/books-in-black-wooden-book-shelf-159711/", link:"https://github.com/AJ-Brown-InTech/API-Book-Project"},
    {title: "React Portfolio Project", description:" ", photo:"https://images.pexels.com/photos/3597326/pexels-photo-3597326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", link:"https://ajalanbrown.herokuapp.com/home"},
    {title: "Fashion Website (in-progress)", description:" ",photo: " https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", link:"https://github.com/AJ-Brown-InTech/Website"}
    

]

function getHTMLForCards(cardData){
    return ` <div class="card" >
    <div class="card-body">
      <h5 class="card-title">${cardData.title}</h5>
      <p class="card-text">${cardData.description}.</p>
    </div>
  </div> `
}

function getHTMLforProjects(projectData){
  return `
  <div class="card" style="width: 18rem;">
  <img src="${projectData.photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-text">${projectData.title}</h5>
    <p class="card-text">${projectData.description}</p>
  </div>
</div>
`
}