const developmentData = [
    { "name": "Devittle", "demoUrl": "https://www.devittle.com", "img": "devittle_logo.png" },
    { "name": "Project 2", "demoUrl": "", "img": "itProject4.png" },
    { "name": "Project 3", "demoUrl": "", "img": "itProject4.png" },
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
            <a href="${project.demoUrl}" target="_blank" class="project-link">
                <img src="./assets/${project.img}" class="project-img"/>
            </a>
        `;
        container.appendChild(card);
    });
}

createProjectCards("development", developmentData);
createProjectCards("it", itData);
createProjectCards("design", designData);