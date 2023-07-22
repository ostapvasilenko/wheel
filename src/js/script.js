
function openPage(event, pageName) {
  var i, tabContent, tabButton;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabButton = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }
  document.getElementById(pageName).style.display = "block";
  event.currentTarget.className += " active";
}

// За замовчуванням відкриємо першу сторінку
document.getElementById("page2").style.display = "block";
document.getElementsByClassName("tab-button")[0].className += " active";




//Зміна та додавання кольору для полів форми при нажатті 

function applyShadowAndColor(element) {
  element.style.boxShadow = '0px 0px 10px 0px rgba(0,171,77,0.8)';
  element.style.borderColor = '#000000'; // Змінюємо колір лінії на синій
}

function removeShadowAndColor(element) {
  element.style.boxShadow = 'none';
  element.style.borderColor = '#aedcbc'; // Повертаємо стандартний колір лінії
}

const formContainer = document.querySelector('.contacts__form');

formContainer.addEventListener('focusin', (event) => {
  const target = event.target;
  if (target.matches('input, textarea')) {
    applyShadowAndColor(target);
  }
});

formContainer.addEventListener('focusout', (event) => {
  const target = event.target;
  if (target.matches('input, textarea')) {
    removeShadowAndColor(target);
  }
});
