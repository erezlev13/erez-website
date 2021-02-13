const index =  document.getElementById("index");
const about =  document.getElementById("about");
const aboutContent = document.getElementById("about-content");
const projects =  document.getElementById("projects");
const resume =  document.getElementById("resume");
let currentPage = index;

const indexPath = "./index.html";
const aboutPath = "./index.html#about-content";
const projectsPath = "./projects.html";
const resumePath = "./docs/Erez\ Lev's\ CV.pdf";


function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}

function setLink(aElement, path) {
    aElement.setAttribute("href", path);
}

index.addEventListener("click", () => {
    setLink(index, indexPath);
});

about.addEventListener("click", () => {
    setLink(about, aboutPath);
});

projects.addEventListener("click", () => {
    setLink(projects, projectsPath);
});

resume.addEventListener("click", () => {
    window.open(resumePath, '_blank');
    return false;
});

// function includeAbout() {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET", 'about.html', false);
//     xmlhttp.send();
//     return xmlhttp.responseText;
// }

// aboutContent.innerHTML = includeAbout();