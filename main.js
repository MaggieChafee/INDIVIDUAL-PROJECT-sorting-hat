students = [
  {
    id: 1,
    name: "Ron Weasley",
    house: "Gryffindor" 
  }, 
  {
    id: 2,
    name: "Neville Longbottom",
    house: "Hufflepuff" 
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
      <button id="expel--${student.id}" type="button" class="btn btn-danger">EXPEL!</button>
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
      <p class="card-text">Sadly, <strong>${expelled.name}</strong> joined Voldy. Boo.</p>
    </div>
  </div>`
  } 
  renderToDom("#expelledContainer", expelledString)
}
// calling the expelledOnDom function using the expelled students array - need to move this to starting app function once completed

expelledOnDom(expelledStudents);

// filter students by house

const filterContainer = document.querySelector("#filterBtns")

const studentsByHouse =  (house) => {
  const filteredStudents = students.filter((student) => student.house === house)
  studentsOnDom(filteredStudents);
}

filterContainer.addEventListener('click', (e) => {
  switch (e.target.id) {
    case "gryffindor":
      studentsByHouse("Gryffindor");
    break;
    case "hufflepuff":
      studentsByHouse("Hufflepuff");
    break;
    case "ravenclaw":
      studentsByHouse("Ravenclaw");
    break;
    case "slytherin":
      studentsByHouse("Slytherin");
    break;
    default: studentsOnDom(students);
  }
})

// this block of code makes the code appear after clicking "Begin your journey"

const showFormBtn = document.querySelector("#showFormBtn")

const showForm = (e) => {
  let sortString = ""
  sortString += `
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">First and Last Name</label>
  <textarea class="form-control" id="student-name" rows="1" required></textarea>
  </div>
  <button id="formSubmit" type="submit" class="btn btn-primary">Get sorted!</button>`,
  renderToDom("#form-container", sortString)
}

showFormBtn.addEventListener("click", (e) => {
  showForm()
});

// this portion of code submits the form and renders a card on dom for new student
const submitForm = document.querySelector("form")

const houseSort = () => {
 const houseGen = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Hufflepuff"
] 
  return houseGen[Math.floor(Math.random() * 4)]
};

const studentSort = (e) => {
  e.preventDefault();
  
  const newStudent = {
    id: students.length +1,
    name: document.querySelector("#student-name").value,
    house: houseSort()
  }

  students.push(newStudent);
  studentsOnDom(students);
  submitForm.reset() 
};

submitForm.addEventListener("submit", studentSort);

// Expel Button Functionality 

const studentsContainer = document.querySelector("#studentsContainer")

studentsContainer.addEventListener("click", (e) => {
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--")
    const index = students.findIndex(student => student.id === Number(id));
    students.splice(index,1);
    expelledStudents.push(students[index]);
  }
  studentsOnDom(students);
  expelledOnDom(expelledStudents);
})
