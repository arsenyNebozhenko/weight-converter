"use strict";function e(){var e=n.value,t=l.value||0,r=[];"lbs"===e?(l.placeholder="Enter pounds...",r=[{title:"Kilograms",value:.453592551437*t},{title:"Stone",value:.0714286*t}]):"kg"===e?(l.placeholder="Enter kilograms...",r=[{title:"Pounds",value:2.20462*t},{title:"Stone",value:.157473*t}]):"st"===e&&(l.placeholder="Enter stone...",r=[{title:"Pounds",value:14*t},{title:"Kilograms",value:6.35029*t}]),o(r)}var t=document.querySelector("#form"),n=document.querySelector("#option"),l=document.querySelector("#input"),r=document.querySelectorAll("#cards .card"),o=function(l){Array.from(r).forEach(function(e,t){var r=e.querySelector(".card-title"),n=e.querySelector(".card-text");r.textContent=l[t].title+":",n.textContent=l[t].value})};t.addEventListener("submit",function(e){return e.preventDefault()}),l.addEventListener("input",e),n.addEventListener("change",e),e();