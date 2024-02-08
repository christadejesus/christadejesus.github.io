// PROJECT and CASE CARDS 
const featuredData = [
    { "name": "Project 1", "url": "", "img": "itProject4.png" },
    { "name": "Project 2", "url": "", "img": "itProject4.png" },
    { "name": "Project 3", "url": "", "img": "itProject4.png" },
];

const developmentData = [
    { "name": "Project 1", "url": "", "img": "itProject4.png" },
    { "name": "Project 2", "url": "", "img": "itProject4.png" },
    { "name": "Project 3", "url": "", "img": "itProject4.png" },
];
const designData = [
    { "name": "Project 1", "url": "", "img": "itProject4.png" },
    { "name": "Project 2", "url": "", "img": "itProject4.png" },
    { "name": "Project 3", "url": "", "img": "itProject4.png" },
];

const itData = [
    { "name": "Cybersecurity Enhancement", "url": "", "img": "itProject1.png" },
    { "name": "Laptop Password Recovery", "url": "", "img": "itProject2.png" },
    { "name": "Laptop Screen Replacement", "url": "", "img": "itProject3.png" },
];

function createProjectCards(containerId, data) {
    const container = document.getElementById(containerId);

    data.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <img src="./assets/${project.img}" class="project-img"/>
            <div class="project-card-label">
                <h3>${project.name}</h3>
                <p>
                    <a href="${project.url}" target="_blank">Demo <i class="ri-arrow-right-line"></i></a>
                </p>
            </div>
        `;
        container.appendChild(card);
    });
}

function createCaseCards(containerId, data) {
    const container = document.getElementById(containerId);

    data.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <img src="./assets/${project.img}" class="project-img"/>
            <div class="project-card-label">
                <h3>${project.name}</h3>
                <p>
                    <a href="${project.url}" target="_blank">Case Study <i class="ri-arrow-right-line"></i></a>
                </p>
            </div>
        `;
        container.appendChild(card);
    });
}

createProjectCards("featured", featuredData);
createProjectCards("development", developmentData);
createProjectCards("design", designData);
createCaseCards("it", itData);