const index =  document.getElementById("index");
const about =  document.getElementById("about");
const projects =  document.getElementById("projects");
const resume =  document.getElementById("resume");

const indexPath = "./index.html";
const aboutPath = "./index.html#about-content";
const projectsPath = "./projects.html";
const resumePath = "./docs/Erez\ Lev's\ CV.pdf";

index.addEventListener("click", () => {
    index.setAttribute("href", indexPath);
});

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

about.addEventListener("click", () => {
    about.setAttribute("href", aboutPath);
//     SmoothVerticalScrolling(document.getElementById("about-content"), 275, "center");
});

projects.addEventListener("click", () => {
    projects.setAttribute("href", projectsPath);
});

resume.addEventListener("click", () => {
    window.open(resumePath, '_blank');
    return false;
});
