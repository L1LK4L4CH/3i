const fs = require('fs');

const dataPath = './data/students.json';

let students = [];

function loadStudentsFromFile() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    students = JSON.parse(data);
  } catch (error) {
    console.error('Chyba při čtení dat:', error.message);
  }
}

function saveStudentsToFile() {
  try {
    const data = JSON.stringify(students, null, 2);
    fs.writeFileSync(dataPath, data, 'utf-8');
  } catch (error) {
    console.error('Chyba při zápisu dat:', error.message);
  }
}

function displayStudents() {
  const studentTable = document.getElementById('studentTable');
  studentTable.innerHTML = '';

  if (students.length === 0) {
    studentTable.innerHTML = '<p>Žádní studenti k zobrazení.</p>';
    return;
  }

  const table = document.createElement('table');
  const headerRow = table.insertRow(0);

  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Jméno';
  headerRow.appendChild(nameHeader);

  const ageHeader = document.createElement('th');
  ageHeader.textContent = 'Věk';
  headerRow.appendChild(ageHeader);

  students.forEach((student, index) => {
    const row = table.insertRow(index + 1);

    const nameCell = row.insertCell(0);
    nameCell.textContent = student.name;

    const ageCell = row.insertCell(1);
    ageCell.textContent = student.age;
  });

  studentTable.appendChild(table);
}

function clearInputs() {
  document.getElementById('nameInput').value = '';
  document.getElementById('ageInput').value = '';
}

function addStudent() {
  const nameInput = document.getElementById('nameInput');
  const ageInput = document.getElementById('ageInput');

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  if (name && !isNaN(age) && age > 0) {
    const student = { name, age };
    students.push(student);
    saveStudentsToFile();  // Uložení dat po přidání studenta
    displayStudents();
    clearInputs();
  } else {
    alert('Prosím, vyplňte platné údaje.');
  }
}

// Přidání následujícího řádku pro zavedení dat z souboru při načítání stránky
document.addEventListener('DOMContentLoaded', () => {
  loadStudentsFromFile();
  displayStudents();
});