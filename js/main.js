
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