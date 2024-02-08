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
            <img src="./assets/${project.img}" class="project-img"/>
            <div class="project-card-label">
                <h3>${project.name}</h3>
                <p>
                    <a href="${project.demoUrl}" target="_blank">Demo <i class="ri-arrow-right-line"></i></a></br>
                    <a href="${project.codeUrl}" target="_blank">Code <i class="ri-arrow-right-line"></i></a>
                </p>
            </div>
        `;
        container.appendChild(card);
    });
}

createProjectCards("development", developmentData);