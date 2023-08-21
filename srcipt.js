// Make the name with type writer Effect
var get_name = document.querySelector("#red")

var txt = get_name.innerHTML;
console.log(txt);
var index = 0;
var s = ""
const typewriter = ()=>{
    if(index < txt.length){
        s += txt.charAt(index)+"|";
        get_name.innerHTML = s;
        s = s.slice(0,-1);
        index++;
        if(index>=txt.length){
            s=""
            index =-1
        }
        setTimeout(typewriter, 400);
    }
}

typewriter();

var get_name1 = document.querySelector("#skil")
var txt1 = get_name1.innerHTML;
console.log(txt1);
var index1 = 0;
var s1 = ""
const typewriter1 = ()=>{
    if(index1 < txt1.length){
        s1 += txt1.charAt(index1)+"|";
        get_name1.innerHTML = s1;
        s1 = s1.slice(0,-1);
        index1++;
        if(index1>=txt1.length){
            s1=""
            index1 =-1
        }
        setTimeout(typewriter1, 300);
    }
}

typewriter1();

 



// Styling The Navabar Link By Javasrcipt

var get_nav = document.getElementsByClassName(".navbar-nav")
console.log(get_nav);

// Putting all display none until the site preloader is working
var get_all = document.getElementsByClassName("gif-effect")[0]
get_all.style.display = "none";


// preloader for the website
var preloader = document.getElementsByClassName("preloader")[0];
function myFunction() {
  preloader.style.display = "none";
  get_all.style.display = "block"
}

setInterval(myFunction, 3000);