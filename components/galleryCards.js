const designData = [
    { "name": "Image Editing & Enhancement", "url": "", "img": "itProject4.png" },
    { "name": "Scalable Vector Graphics", "url": "", "img": "itProject4.png" },
    { "name": "Social Media Graphics", "url": "", "img": "itProject4.png" },
];

function createGalleryCards(containerId, data) {
    const container = document.getElementById(containerId);

    data.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <img src="./assets/${project.img}" class="project-img"/>
            <div class="project-card-label">
                <a href="${project.url}" target="_blank"><h3>${project.name}</h3></a>
            </div>
        `;
        container.appendChild(card);
    });
}

createGalleryCards("design", designData);
