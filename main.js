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

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

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

studentsOnDom(students)
