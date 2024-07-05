// animate the loader
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".loader");
    loader.style.opacity = 1;
    setTimeout(function() {
        loader.style.opacity = 0;
        loader.style.display = "none";
    }, 2000);
});

// fetch data from Python API
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
        const aboutSection = document.querySelector("#about");
        const projectsSection = document.querySelector("#projects");
        const contactSection = document.querySelector("#contact");

        aboutSection.innerHTML = `
            <h2>${data.about.title}</h2>
            <p>${data.about.content}</p>
        `;

        projectsSection.innerHTML = `
            <h2>${data.projects.title}</h2>
            <ul>
                ${data.projects.items.map(item => `
                    <li>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </li>
                `).join("")}
            </ul>
        `;

        contactSection.innerHTML = `
            <h2>${data.contact.title}</h2>
            <p>${data.contact.content}</p>
        `;
    });
