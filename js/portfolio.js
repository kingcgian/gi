// Portfolio Projects Data
const portfolioProjects = [
    {
        id: 1,
        title: "E-commerce Website",
        description: "A full-featured e-commerce platform built with React and Node.js",
        image: "images/projects/ecommerce.jpg",
        category: "web",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Fitness Tracking App",
        description: "Mobile app for tracking workouts and nutrition",
        image: "images/projects/fitness-app.jpg",
        category: "mobile",
        technologies: ["React Native", "Firebase", "Redux"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Banking Dashboard",
        description: "Modern UI/UX design for a banking application",
        image: "images/projects/banking-dashboard.jpg",
        category: "design",
        technologies: ["Figma", "Adobe XD", "Illustrator"],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Task Management System",
        description: "Project management tool with real-time collaboration",
        image: "images/projects/task-management.jpg",
        category: "web",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "Food Delivery App",
        description: "Mobile application for food ordering and delivery",
        image: "images/projects/food-delivery.jpg",
        category: "mobile",
        technologies: ["Flutter", "Firebase", "Google Maps API"],
        link: "#",
        github: "#"
    },
    {
        id: 6,
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media management",
        image: "images/projects/social-dashboard.jpg",
        category: "design",
        technologies: ["Figma", "Photoshop", "Illustrator"],
        link: "#",
        github: "#"
    }
];

// Function to create project card HTML
function createProjectCard(project) {
    return `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.link}" class="btn primary" target="_blank">View Live</a>
                        <a href="${project.github}" class="btn secondary" target="_blank">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Initialize portfolio
function initPortfolio() {
    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Load all projects initially
    projectsGrid.innerHTML = portfolioProjects
        .map(project => createProjectCard(project))
        .join('');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
}

// Filter projects based on category
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 0);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPortfolio); 