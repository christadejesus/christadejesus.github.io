const itData = [
    { "name": "Cybersecurity Enhancement", "url": "", "img": "itProject1.png" },
    { "name": "Laptop Password Recovery", "url": "", "img": "itProject2.png" },
    { "name": "Laptop Screen Replacement", "url": "", "img": "itProject3.png" },
];

function createCaseCards(containerId, data) {
    const container = document.getElementById(containerId);

    data.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <div class="project-overlay">
                <a href="${project.url}" target="_blank">
                    <h3>${project.name}</h3>
                </a>
            </div>
            <img src="./assets/${project.img}" class="project-img"/>
        `;
        container.appendChild(card);
    });
}

createCaseCards("it", itData);