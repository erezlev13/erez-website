const index =  document.getElementById("index");
const about =  document.getElementById("about");
const projects =  document.getElementById("projects");
const resume =  document.getElementById("resume");

const indexPath = "./index.html";
const aboutPath = "./index.html#about-content";
const projectsPath = "./projects.html";
const resumePath = "./docs/Erez\ Lev's\ CV.pdf"


index.addEventListener("click", () => {
    index.setAttribute("href", indexPath);
});

about.addEventListener("click", () => {
    about.setAttribute("href", aboutPath);
})

projects.addEventListener("click", () => {
    projects.setAttribute("href", projectsPath);
});

resume.addEventListener("click", () => {
    window.open(resumePath, '_blank');
    return false;
})