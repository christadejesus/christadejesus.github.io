const developmentData = [
    { "name": "Project 1", "demoUrl": "", "codeUrl": "", "img": "itProject4.png" },
    { "name": "Project 2", "demoUrl": "", "codeUrl": "", "img": "itProject4.png" },
    { "name": "Project 3", "demoUrl": "", "codeUrl": "", "img": "itProject4.png" },
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