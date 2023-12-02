
const links = document.querySelectorAll('a[href^="#"]');
 
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
     
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { 
	ChangeTheme(); 
});

function ChangeTheme()
{
    let lightTheme = "css/index.css";
    let darkTheme = "css/dark-theme.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };
  
  fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});


document.body.style.width = '100%';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.fontFamily = "'Nunito', sans-serif, 'Raleway', sans-serif, 'Revalia', cursive, 'Roboto', sans-serif";

// Устанавливаем стили для header
const header = document.querySelector('header');
header.style.height = '100%';
header.style.backgroundColor = '#EEEFF1';
header.style.paddingTop = '57px';
header.style.paddingBottom = '145px';

// Устанавливаем стили для .header
const headerClass = document.querySelector('.header');
headerClass.style.padding = '0.5% 0 0.5% 21%';
headerClass.style.display = 'flex';
headerClass.style.marginBottom = '160px';
headerClass.style.position = 'fixed';
headerClass.style.top = '0';
headerClass.style.width = '100%';
headerClass.style.backgroundColor = '#CDCDCD';
headerClass.style.zIndex = '10';

// Устанавливаем стили для .header + .parag
const parag = document.querySelector('.header + .parag');
parag.style.paddingTop = '100px';

// Устанавливаем стили для .logotip
const logotip = document.querySelector('.logotip');
logotip.style.fontFamily = "'Nunito', sans-serif, 'Raleway', sans-serif, 'Revalia', cursive";
logotip.style.color = '#34547A';
logotip.style.fontSize = '3em';
logotip.style.fontWeight = '400';
logotip.style.marginRight = '26.5%';
logotip.style.cursor = 'pointer';

// Устанавливаем стили для .ssilki li
const ssilkiListItems = document.querySelectorAll('.ssilki li');
ssilkiListItems.forEach(item => {
  item.style.marginLeft = '10%';
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
  item.style.justifyContent = 'center';
});
ssilkiListItems[0].style.marginLeft = '0';

// Устанавливаем стили для .ssilki li a
const ssilkiLinks = document.querySelectorAll('.ssilki li a');
ssilkiLinks.forEach(link => {
  link.style.fontWeight = '500';
  link.style.fontSize = '1em';
  link.style.color = '#000000';
  link.style.letterSpacing = '1px';
  link.style.whiteSpace = 'nowrap';
  link.style.lineHeight = '140%';
});
ssilkiLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#34547A';
    link.style.transition = 'all 0.5s';
  });
});

// Устанавливаем стили для .parag
const parag = document.querySelector('.parag');
parag.style.display = 'flex';
parag.style.flexDirection = 'row';
parag.style.alignItems = 'center';
parag.style.marginLeft = '26.5%';

// Устанавливаем стили для .parag picture
const paragPicture = document.querySelector('.parag picture');
paragPicture.style.marginRight = '11%';

// Устанавливаем стили для .headerparag h2
const headerParagH2 = document.querySelector('.headerparag h2');
headerParagH2.style.marginBottom = '60px';
headerParagH2.style.fontWeight = '500';
headerParagH2.style.fontSize = '3em';

// Устанавливаем стили для .headerparag p
const headerParagP = document.querySelector('.headerparag p');
headerParagP.style.marginBottom = '60px';
headerParagP.style.fontWeight = '400';
headerParagP.style.fontSize = '1em';
headerParagP.style.color = '#727272';
headerParagP.style.width = '60%';
headerParagP.style.minWidth = '170px';
headerParagP.style.lineHeight = '140%';
headerParagP.style.lineHeight = '26.25px';

// Устанавливаем стили для .headerparag a
const headerParagA = document.querySelector('.headerparag a');
headerParagA.style.fontWeight = '400';
headerParagA.style.whiteSpace = 'nowrap';
headerParagA.style.fontSize = '1em';
headerParagA.style.color = '#FFFFFF';
headerParagA.style.padding = '25px 41px 25px 41px';
headerParagA.style.backgroundColor = '#34547A';
headerParagA.style.letterSpacing = '1px';
headerParagA.style.display = 'block';
headerParagA.style.maxWidth = '225px';
headerParagA.style.minWidth = '210px';
headerParagA.style.width = '25.4%';
headerParagA.style.boxSizing = 'border-box';

// Устанавливаем стили для hover эффекта .headerparag a
headerParagA.addEventListener('mouseover', () => {
  headerParagA.style.backgroundColor = '#4772A6';
});

// Устанавливаем стили для main
const main = document.querySelector('main');
main.style.height = '100%';

// Устанавливаем стили для .ab
const ab = document.querySelector('.ab');
ab.style.paddingTop = '119px';
ab.style.paddingBottom = '100px';
ab.style.display = 'flex';
ab.style.flexDirection = 'column';
ab.style.alignItems = 'center';
ab.style.textAlign = 'center';

// Устанавливаем стили для .ab h3
const abH3 = document.querySelector('.ab h3');
abH3.style.fontWeight = '500';
abH3.style.fontSize = '2em';
abH3.style.marginBottom = '50px';

// Устанавливаем стили для .ab p
const abP = document.querySelector('.ab p');
abP.style.width = '540px';
abP.style.textAlign = 'center';
abP.style.fontWeight = '400';
abP.style.fontSize = '1em';
abP.style.color = '#727272';
abP.style.lineHeight = '26.25px';
abP.style.whiteSpace = 'wrap';

// Устанавливаем стили для .vwrap
const vwrap = document.querySelector('.vwrap');
vwrap.style.width = '100%';
vwrap.style.backgroundColor = '#34547A';

// Устанавливаем стили для .val
const val = document.querySelector('.val');
val.style.display = 'flex';
val.style.justifyContent = 'center';
val.style.color = '#FFFFFF';
val.style.paddingTop = '100px';
val.style.paddingBottom = '100px';

// Устанавливаем стили для .val h4
const valH4 = document.querySelector('.val h4');
valH4.style.fontWeight = '500';
valH4.style.fontSize = '1.4em';
valH4.style.marginBottom = '7px';

// Устанавливаем стили для .val p
const valP = document.querySelector('.val p');
valP.style.fontWeight = '400';
valP.style.fontSize = '1em';

// Устанавливаем стили для .values
const values = document.querySelector('.values');
values.style.display = 'flex';
values.style.marginRight = '50px';
values.style.transition = 'all 0.4s';

// Устанавливаем стили для .values div
const valuesDiv = document.querySelector('.values div');
valuesDiv.style.marginLeft = '20px';

// Устанавливаем стили для hover эффекта .values
values.addEventListener('mouseover', () => {
  values.style.fontSize = '1.08em';
  values.style.cursor = 'pointer';
});

// Устанавливаем стили для .mskill
const mskill = document.querySelector('.mskill');
mskill.style.display = 'flex';
mskill.style.flexDirection = 'row';
mskill.style.alignItems = 'center';
mskill.style.paddingTop = '102px';
mskill.style.paddingBottom = '102px';
mskill.style.marginLeft = '20%';

// Устанавливаем стили для .mskill img
const mskillImg = document.querySelector('.mskill img');
mskillImg.style.width = '555px';
mskillImg.style.height = '450px';

// Находим элементы с классом .skillinfo и применяем стили
let skillinfo = document.querySelectorAll('.skillinfo');
skillinfo.forEach(element => {
    element.style.marginRight = '16.2%';
});

// Находим элементы с тегом h3 внутри .skillinfo и применяем стили
let skillinfo_h3 = document.querySelectorAll('.skillinfo h3');
skillinfo_h3.forEach(element => {
    element.style.fontWeight = '500';
    element.style.fontSize = '2em';
    element.style.marginBottom = '31px';
});

// Находим элементы с классом .sinfo и применяем стили
let sinfo = document.querySelectorAll('.sinfo');
sinfo.forEach(element => {
    element.style.fontWeight = '400';
    element.style.fontSize = '1em';
    element.style.color = '#727272';
    element.style.paddingTop = '29px';
    element.style.paddingBottom = '20px';
    element.style.borderBottom = '4px solid #34547A';
    element.style.width = '350px';
});

// Находим элементы с классом .bord и применяем стили
let bord = document.querySelectorAll('.bord');
bord.forEach(element => {
    element.style.borderBottom = '4px solid #C4C4C4';
    element.style.width = '100px';
});

// Находим элементы с классом .skwrap и применяем стили
let skwrap = document.querySelectorAll('.skwrap');
skwrap.forEach(element => {
    element.style.display = 'flex';
    element.style.flexDirection = 'row';
});

// Находим элементы с классом .mwork и применяем стили
let mwork = document.querySelectorAll('.mwork');
mwork.forEach(element => {
    element.style.textAlign = 'center';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.alignItems = 'center';
    element.style.paddingTop = '100px';
    element.style.paddingBottom = '100px';
    element.style.backgroundColor = '#EEEFF1';
});

// Находим элементы с тегом h3 внутри .mwork и применяем стили
let mwork_h3 = document.querySelectorAll('.mwork h3');
mwork_h3.forEach(element => {
    element.style.fontWeight = '500';
    element.style.fontSize = '32px';
    element.style.marginBottom = '50px';
});

// Находим элементы с тегом p внутри .mwork и применяем стили
let mwork_p = document.querySelectorAll('.mwork p');
mwork_p.forEach(element => {
    element.style.fontWeight = '400';
    element.style.fontSize = '16px';
    element.style.lineHeight = '26.25px';
    element.style.maxWidth = '540px';
    element.style.whiteSpace = 'wrap';
    element.style.color = '#727272';
    element.style.marginBottom = '57px';
});

// Находим элементы с тегом iframe и применяем стили
let iframe = document.querySelectorAll('iframe');
iframe.forEach(element => {
    element.style.width = '58.5%';
    element.style.height = '600px';
});

// Находим элементы с классом .pictures и применяем стили
let pictures = document.querySelectorAll('.pictures');
pictures.forEach(element => {
    element.style.backgroundColor = '#34547A';
    element.style.backgroundRepeat = 'no-repeat, repeat';
    element.style.display = 'flex';
    element.style.flexWrap = 'wrap';
});

// pwrap class
const pwrapElements = document.querySelectorAll('.pwrap');
pwrapElements.forEach(element => {
  element.style.width = '25%';
  element.style.backgroundImage = 'url("../images/eye.png")';
  element.style.backgroundRepeat = 'no-repeat';
  element.style.backgroundPosition = 'center';
  element.style.height = '50%';
  element.style.marginBottom = '-4px';
});

// pwrap img class
const pwrapImgElements = document.querySelectorAll('.pwrap img');
pwrapImgElements.forEach(element => {
  element.style.width = '100%';
  element.style.height = '100%';
  element.style.margin = '0';
  element.style.padding = '0';
});

// pictures img:hover class
const picturesImgElements = document.querySelectorAll('.pictures img');
picturesImgElements.forEach(element => {
  element.addEventListener('mouseover', function() {
    element.style.cursor = 'pointer';
    element.style.opacity = '0.2';
    element.style.transition = 'all 1s';
  });
  element.addEventListener('mouseout', function() {
    element.style.opacity = '1';
  });
});

// comp class
const compElement = document.querySelector('.comp');
compElement.style.display = 'flex';
compElement.style.flexDirection = 'row';
compElement.style.justifyContent = 'center';
compElement.style.flexWrap = 'wrap';
compElement.style.paddingTop = '72px';
compElement.style.paddingBottom = '100px';
compElement.style.transition = 'all 0.3s';
compElement.style.textAlign = 'center';

// comp a class
const compAElements = document.querySelectorAll('.comp a');
compAElements.forEach(element => {
  element.style.marginLeft = '30px';
  element.style.width = '255px';
  element.style.height = '120px';
  element.style.transition = 'all 0.5s';
  element.addEventListener('mouseover', function() {
    element.style.width = '20%';
    element.style.height = '20%';
  });
  element.addEventListener('mouseout', function() {
    element.style.width = '255px';
    element.style.height = '120px';
  });
});

// form
const formElement = document.querySelector('form');
formElement.style.display = 'flex';
formElement.style.flexDirection = 'column';
formElement.style.alignItems = 'center';