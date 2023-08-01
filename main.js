students = [
  {
    id: 1,
    name: "Ron Weasley",
    house: "Gryffindor" 
  }, 
  {
    id: 2,
    name: "Neville Longbottom",
    house: "Gryffindor" 
  }, 
  {
    id: 3,
    name: "Luna Lovegood",
    house: "Ravenclaw" 
  }, 
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin" 
  }, 
]

expelledStudents = [
  {
    id: 1,
    name: "Hermione Granger",
    house: "Gryffindor" 
  }, 
  {
    id: 2,
    name: "Sid Vicious",
    house: "Gryffindor" 
  }, 
  {
    id: 3,
    name: "Dean Thomas",
    house: "Gryffindor" 
  }, 
  {
    id: 4,
    name: "Cho Chang",
    house: "Ravenclaw" 
  }, 
]

// renderToDom - allows us render content dynamically by targeting certain areas of the DOM based on the html id
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// studentsOnDom - renders an array of objects to the dom, this one built to target the students array
const studentsOnDom = (array) => {
  let studentString = "";
  for (const student of array) {
    studentString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger">EXPEL!</button>
    </div>
  </div>`
  } 
  renderToDom("#studentsContainer", studentString)
}

//calling the studentsOnDom function using the students array - need to move this to starting app function once completed
studentsOnDom(students)

// expelledOnDom - renders an array of objects to the dom by dynamically rendering the information to the bootstrap card
const expelledOnDom = (array) => {
  let expelledString = "";
  for (const expelled of array) {
    expelledString += `<div class="card" style="width: 18rem;">
    <img src="https://media.comicbook.com/2016/08/wizard-world-hp-death-eaters-194218.jpg" class="card-img-top" alt="Harry Potter Death Eaters wandering through Hogsmeade in the Dark">
    <div class="card-body">
      <p class="card-text">Sadly, <strong>${expelled.name}</strong> joined Voldemort's Army of Death Eaters.</p>
    </div>
  </div>`
  } 
  renderToDom("#expelledContainer", expelledString)
}

//calling the expelledOnDom function using the expelled students array - need to move this to starting app function once completed
expelledOnDom(expelledStudents);
