const index =  document.getElementById("index");
const about =  document.getElementById("about");
const aboutContent = document.getElementById("about-content");
const projects =  document.getElementById("projects");
const resume =  document.getElementById("resume");
let currentPage = index;

const indexPath = "./index.html";
const aboutPath = "#about-content";
const projectsPath = "#projects-content";
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

function setLinkAndHighlight(aElement, path) {
    currentPage.removeAttribute("class");
    aElement.setAttribute("href", path);
    aElement.setAttribute("class", "active");
    currentPage = aElement;
}

index.addEventListener("click", () => {
    setLinkAndHighlight(index, indexPath);
});

about.addEventListener("click", () => {
    setLinkAndHighlight(about, aboutPath);
});

projects.addEventListener("click", () => {
    setLinkAndHighlight(projects, projectsPath);
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

