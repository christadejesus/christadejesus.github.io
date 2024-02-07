
const featuredData = [
    { "name": "Project 1", "url": "https://christadejesus.github.io", "img": "img.png" },
    { "name": "Project 2", "url": "https://christadejesus.github.io", "img": "img.png" },
    { "name": "Project 3", "url": "https://christadejesus.github.io", "img": "img.png" },
];

const developmentData = [
    { "name": "Project 1", "url": "https://christadejesus.github.io", "img": "img.png" },
    { "name": "Project 2", "url": "https://christadejesus.github.io", "img": "img.png" },
    { "name": "Project 3", "url": "https://christadejesus.github.io", "img": "img.png" },
];
const designData = [
    { "name": "Project 1", "url": "https://christadejesus.github.io", "img": "img.png" },
    { "name": "Project 2", "url": "https://christadejesus.github.io", "img": "img.png" },
    { "name": "Project 3", "url": "https://christadejesus.github.io", "img": "img.png" },
];

const itData = [
    { "name": "Cybersecurity Enhancement", "url": "https://christadejesus.github.io", "img": "img.png" },
    { "name": "Laptop Password Recovery", "url": "https://christadejesus.github.io", "img": "img.png" },
    { "name": "Laptop Screen Replacement", "url": "https://christadejesus.github.io", "img": "img.png" },
];

function createProjectCards(containerId, data) {
    const container = document.getElementById(containerId);

    data.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
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