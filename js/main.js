// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Sample featured projects data
const featuredProjects = [
    {
        title: 'Project 1',
        description: 'A brief description of project 1',
        image: 'images/project1.jpg',
        tags: ['Web', 'JavaScript', 'React'],
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'A brief description of project 2',
        image: 'images/project2.jpg',
        tags: ['Mobile', 'React Native'],
        link: '#'
    },
    {
        title: 'Project 3',
        description: 'A brief description of project 3',
        image: 'images/project3.jpg',
        tags: ['UI/UX', 'Design'],
        link: '#'
    }
];

// Sample blog posts data
const latestPosts = [
    {
        title: 'Getting Started with Web Development',
        excerpt: 'Learn the basics of web development and start your journey...',
        date: '2024-03-01',
        image: 'images/blog1.jpg',
        link: 'blog-post.html?id=1'
    },
    {
        title: 'Modern JavaScript Features',
        excerpt: 'Explore the latest features in JavaScript and how to use them...',
        date: '2024-02-28',
        image: 'images/blog2.jpg',
        link: 'blog-post.html?id=2'
    },
    {
        title: 'Responsive Design Best Practices',
        excerpt: 'Tips and tricks for creating responsive web designs...',
        date: '2024-02-25',
        image: 'images/blog3.jpg',
        link: 'blog-post.html?id=3'
    }
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn primary">View Project</a>
        </div>
    `;
}

// Function to create blog post cards
function createBlogPostCard(post) {
    return `
        <div class="post-card">
            <img src="${post.image}" alt="${post.title}">
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="post-meta">
                    <span class="date">${new Date(post.date).toLocaleDateString()}</span>
                </div>
                
            </div>
        </div>
    `;
}

// Load featured projects
const projectGrid = document.querySelector('.project-grid');
if (projectGrid) {
    projectGrid.innerHTML = featuredProjects
        .map(project => createProjectCard(project))
        .join('');
}

// Load latest blog posts
const postGrid = document.querySelector('.post-grid');
if (postGrid) {
    postGrid.innerHTML = latestPosts
        .map(post => createBlogPostCard(post))
        .join('');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Get the latest blog posts for the home page
function displayLatestBlogPosts() {
    const postGridElement = document.querySelector('.post-grid');
    if (!postGridElement) return;

    // Check if blogPosts is defined (from blog.js)
    if (typeof blogPosts !== 'undefined') {
        // Get the 3 most recent posts
        const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
        
        let postsHTML = '';
        latestPosts.forEach(post => {
            postsHTML += `
                <div class="post-card">
                    <div class="post-image">
                        <img src="${post.image}" alt="${post.title}">
                        <div class="post-week">Week ${post.week.replace('week', '')}</div>
                    </div>
                    <div class="post-content">
                        <h3><a href="blog-posts/${post.id}.html">${post.title}</a></h3>
                        <div class="post-meta">
                            <span class="post-date">${formatDate(post.date)}</span>
                            <span class="read-time">${post.readTime} read</span>
                        </div>
                        <p class="post-excerpt">${post.excerpt.substring(0, 120)}...</p>
                    </div>
                </div>
            `;
        });
        
        postGridElement.innerHTML = postsHTML;
    } else {
        // Fallback if blog.js is not loaded
        postGridElement.innerHTML = `
            <div class="post-card">
                <div class="post-content">
                    <h3><a href="blog.html">Visit the blog to see the latest posts</a></h3>
                </div>
            </div>
        `;
    }
}

// Format date helper function (reusing from blog.js)
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Display featured blog post #3
function displayFeaturedBlogPost() {
    const featuredPostElement = document.getElementById('featured-post');
    if (!featuredPostElement || typeof blogPosts === 'undefined') return;
    
    // Find blog post #3
    const post = blogPosts.find(p => p.id === 3);
    
    if (post) {
        const postHTML = `
            <div class="featured-post">
                <div class="featured-post-image">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="featured-badge">Featured</div>
                </div>
                <div class="featured-post-content">
                    <h3><a href="blog-post-3.html">${post.title}</a></h3>
                    <div class="post-meta">
                        <span class="post-date">${formatDate(post.date)}</span>
                        <span class="read-time">${post.readTime} read</span>
                    </div>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        featuredPostElement.innerHTML = postHTML;
    }
}

// Initialize homepage
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            hamburger.classList.toggle('active');
        });
    }
    
    // Display featured post and latest blog posts if we're on the home page
    if (document.querySelector('.latest-posts')) {
        displayFeaturedBlogPost();
        displayLatestBlogPosts();
    }
});

// Function to display a single blog post by ID
function displaySingleBlogPost(postId) {
    const postContainerElement = document.getElementById('single-post-container');
    if (!postContainerElement || typeof blogPosts === 'undefined') return;
    
    // Find the blog post with the specified ID
    const post = blogPosts.find(p => p.id === postId);
    
    if (post) {
        const postHTML = `
            <article class="single-post">
                <div class="post-header">
                    <h1>${post.title}</h1>
                    <div class="post-meta">
                        <span class="post-date">${formatDate(post.date)}</span>
                        <span class="post-author">By ${post.author}</span>
                        <span class="read-time">${post.readTime} read</span>
                        <span class="post-week">Week ${post.week.replace('week', '')}</span>
                    </div>
                </div>
                <div class="post-featured-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="post-content-body">
                    <p>${post.content}</p>
                </div>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </article>
        `;
        
        postContainerElement.innerHTML = postHTML;
    } else {
        postContainerElement.innerHTML = '<p>Blog post not found</p>';
    }
}

// Display blog post #3 (Code Review Process)
function displayBlogPost3() {
    const postGridElement = document.querySelector('.post-grid');
    if (!postGridElement || typeof blogPosts === 'undefined') return;
    
    // Find blog post #3
    const post = blogPosts.find(p => p.id === 3);
    
    if (post) {
        const postHTML = `
            <div class="post-card featured-post">
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="post-week">Week ${post.week.replace('week', '')}</div>
                    <div class="featured-badge">Featured</div>
                </div>
                <div class="post-content">
                    <h3><a href="blog-posts/${post.id}.html">${post.title}</a></h3>
                    <div class="post-meta">
                        <span class="post-date">${formatDate(post.date)}</span>
                        <span class="read-time">${post.readTime} read</span>
                    </div>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        postGridElement.innerHTML = postHTML;
    }
} 