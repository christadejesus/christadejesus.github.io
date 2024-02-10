const developmentData = [
    { "name": "Project 1", "demoUrl": "", "codeUrl": "", "img": "itProject4.png" },
    { "name": "Project 2", "demoUrl": "", "codeUrl": "", "img": "itProject4.png" },
    { "name": "Project 3", "demoUrl": "", "codeUrl": "", "img": "itProject4.png" },
];

const itData = [
    { "name": "Cybersecurity Enhancement", "url": "", "img": "itProject1.png" },
    { "name": "Laptop Password Recovery", "url": "", "img": "itProject2.png" },
    { "name": "Laptop Screen Replacement", "url": "", "img": "itProject3.png" },
];

const designData = [
    { "name": "Image Editing & Enhancement", "url": "", "img": "itProject4.png" },
    { "name": "Scalable Vector Graphics (SVG)", "url": "", "img": "itProject4.png" },
    { "name": "Photography & Digital Art", "url": "", "img": "itProject4.png" },
];

function createProjectCards(containerId, data) {
    const container = document.getElementById(containerId);

    data.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <div class="project-overlay">
                <a href="${project.demoUrl}" target="_blank"><h3>${project.name}</h3></a>
            </div>
            <img src="./assets/${project.img}" class="project-img"/>
        `;
        container.appendChild(card);
    });
}

createProjectCards("development", developmentData);
createProjectCards("it", itData);
createProjectCards("design", designData);