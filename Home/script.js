const text = "Your Gateway to Affordable Books! ";
const h1 = document.getElementById("typewriter");
let index = 0;

function typewriterEffect() {
  if (index < text.length) {
    h1.innerHTML += text[index];
    index++;
    if (text[index] === " ") {
      h1.innerHTML += text[index]; // Add space
      index++;
    }
    setTimeout(typewriterEffect, 100); // Adjust the typing speed here (in milliseconds)
  } else {
    setTimeout(function () {
      h1.innerHTML = ""; // Clear the content of the h1 tag
      index = 0; // Reset the index
      typewriterEffect(); // Restart the typewriter effect
    }, 2000); // Adjust the delay before restarting (in milliseconds)
  }
}

typewriterEffect();

var semesterSelect = document.getElementById('semesterSelect');
var storedValue = localStorage.getItem('selectedSemester');

if (storedValue) {
  semesterSelect.value = storedValue;
}

semesterSelect.onchange = function() {
  var selectedValue = this.value;
  if (selectedValue !== "none") {
    localStorage.setItem('selectedSemester', selectedValue);
    window.location.href = selectedValue + '.html';
  }
};

// Reset the selected value when  page loads
window.onload = function() {
  localStorage.removeItem('selectedSemester');
  semesterSelect.value = "none";
};


burger=document.querySelector('.burger')
navbar=document.querySelector('.nav')
header=document.querySelector('.head')


burger.addEventListener('click',()=>{
  navbar.classList.toggle('nav1');
  header.classList.toggle('h-respo');
})



 
