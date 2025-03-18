// Sample blog posts data with week assignments
const blogPosts = [
    // Week 1 Posts
    {
        id: 1,
        title: "Setting Up Development Environment",
        excerpt: "First day experience setting up my workstation and getting familiar with the development tools.",
        content: "Detailed content about setting up the development environment...",
        image: "images/blog/feb 13.png",
        week: "week1",
        author: "Your Name",
        date: "2024-01-01",
        tags: ["Setup", "Development", "Tools"],
        readTime: "5 min"
    },
    {
        id: 2,
        title: "Version Control Best Practices",
        excerpt: "Learning and implementing Git workflows in a team environment.",
        content: "Detailed content about Git workflows...",
        image: "images/blog/feb 13.png",
        week: "week1",
        author: "Your Name",
        date: "2024-01-02",
        tags: ["Git", "Version Control", "Collaboration"],
        readTime: "7 min"
    },
    {
        id: 3,
        title: "Frontend Development Basics",
        excerpt: "I worked with Vue.js for frontend development in the FranchiseList project during my internship. I used Vue to build dynamic and interactive user interfaces, ensuring the application was both responsive and user-friendly. The framework's incremental approach allowed me to integrate it seamlessly into the project, enabling smooth navigation and real-time data updates. The reactive data binding system was particularly useful, as it kept the UI in sync with any changes to the data. Vues component-based architecture helped me organize the project efficiently, making it scalable and maintainable as the project grew.",
        content: "Detailed content about code review process...",
        image: "images/blog/Feb 12.png",
        week: "week1",
        author: "Your Name",
        date: "2024-01-03",
        tags: ["Code Review", "Best Practices", "Collaboration"],
        readTime: "6 min"
    },
    {
        id: 4,
        title: "Documentation Standards",
        excerpt: "Learning about the importance of documentation and team standards.",
        content: "Detailed content about documentation standards...",
        image: "images/Feb11.png",
        week: "week1",
        author: "Your Name",
        date: "2024-01-04",
        tags: ["Documentation", "Standards", "Best Practices"],
        readTime: "8 min"
    },
    {
        id: 5,
        title: "Team Communication Tools",
        excerpt: "Getting familiar with various communication and collaboration tools used by the team.",
        content: "Detailed content about communication tools...",
        image: "images/blog/feb 11.png",
        week: "week1",
        author: "Your Name",
        date: "2024-01-05",
        tags: ["Communication", "Tools", "Collaboration"],
        readTime: "5 min"
    },

    // Week 2 Posts
    {
        id: 6,
        title: "First Project Assignment",
        excerpt: "Starting my first project and understanding the requirements.",
        content: "Detailed content about first project...",
        image: "images/blog/feb 11.png",
        week: "week2",
        author: "Your Name",
        date: "2024-01-08",
        tags: ["Project", "Requirements", "Planning"],
        readTime: "7 min"
    },
    {
        id: 7,
        title: "Database Design Challenges",
        excerpt: "Tackling database design challenges in the project.",
        content: "Detailed content about database design...",
        image: "images/blog/feb 11.png",
        week: "week2",
        author: "Your Name",
        date: "2024-01-09",
        tags: ["Database", "Design", "Architecture"],
        readTime: "9 min"
    },
    {
        id: 8,
        title: "API Integration Work",
        excerpt: "Working on integrating third-party APIs into the project.",
        content: "Detailed content about API integration...",
        image: "images/blog/feb 11.png",
        week: "week2",
        author: "Your Name",
        date: "2024-01-10",
        tags: ["API", "Integration", "Development"],
        readTime: "8 min"
    },
    {
        id: 9,
        title: "Testing Strategies",
        excerpt: "Learning about different testing approaches and implementing them.",
        content: "Detailed content about testing strategies...",
        image: "images/blog/feb 11.png",
        week: "week2",
        author: "Your Name",
        date: "2024-01-11",
        tags: ["Testing", "QA", "Development"],
        readTime: "6 min"
    },
    {
        id: 10,
        title: "Performance Optimization",
        excerpt: "Identifying and fixing performance bottlenecks in the application.",
        content: "Detailed content about performance optimization...",
        image: "images/blog/feb 11.png",
        week: "week2",
        author: "Your Name",
        date: "2024-01-12",
        tags: ["Performance", "Optimization", "Development"],
        readTime: "7 min"
    },
    
    // Week 3 Posts
    {
        id: 11,
        title: "Implementing Authentication System",
        excerpt: "Building a secure user authentication system for the application.",
        content: "Detailed content about authentication implementation...",
        image: "images/blog/feb 11.png",
        week: "week3",
        author: "Your Name",
        date: "2024-01-15",
        tags: ["Security", "Authentication", "Development"],
        readTime: "9 min"
    },
    {
        id: 12,
        title: "UX Research and Design",
        excerpt: "Collaborating with the design team on user experience improvements.",
        content: "Detailed content about UX research and design...",
        image: "images/blog/feb 11.png",
        week: "week3",
        author: "Your Name",
        date: "2024-01-16",
        tags: ["UX", "Design", "Research"],
        readTime: "8 min"
    },
    
    // Week 4 Posts
    {
        id: 13,
        title: "Preparing for Production Deployment",
        excerpt: "Getting the application ready for the first production release.",
        content: "Detailed content about production deployment preparation...",
        image: "images/blog/feb 11.png",
        week: "week4",
        author: "Your Name",
        date: "2024-01-22",
        tags: ["Deployment", "Production", "DevOps"],
        readTime: "10 min"
    },
    {
        id: 14,
        title: "Internship Reflection and Learnings",
        excerpt: "Reflecting on my internship journey and key takeaways.",
        content: "Detailed content about internship reflections...",
        image: "images/blog/feb 11.png",
        week: "week4",
        author: "Your Name",
        date: "2024-01-26",
        tags: ["Reflection", "Learning", "Career"],
        readTime: "12 min"
    },
    
    // Week 5 Posts
    {
        id: 15,
        title: "Advanced Framework Features",
        excerpt: "Exploring advanced features of the framework we're using in our project.",
        content: "Detailed content about framework features...",
        image: "images/blog/feb 11.png",
        week: "week5",
        author: "Your Name",
        date: "2024-01-29",
        tags: ["Framework", "Development", "Advanced"],
        readTime: "8 min"
    },
    {
        id: 16,
        title: "Code Optimization Techniques",
        excerpt: "Learning about advanced techniques for optimizing code performance.",
        content: "Detailed content about code optimization...",
        image: "images/blog/feb 11.png",
        week: "week5",
        author: "Your Name",
        date: "2024-01-31",
        tags: ["Optimization", "Performance", "Development"],
        readTime: "9 min"
    }

    /* 
    // Week 6 Posts - Uncomment when needed
    {
        id: 17,
        title: "Containerization with Docker",
        excerpt: "Learning how to containerize our application using Docker.",
        content: "Detailed content about Docker containerization...",
        image: "images/blog/docker.jpg",
        week: "week6",
        author: "Your Name",
        date: "2024-02-05",
        tags: ["Docker", "Containerization", "DevOps"],
        readTime: "8 min"
    },
    {
        id: 18,
        title: "Continuous Integration Pipeline",
        excerpt: "Setting up a CI pipeline for automated testing and deployment.",
        content: "Detailed content about CI pipeline...",
        image: "images/blog/ci-pipeline.jpg",
        week: "week6",
        author: "Your Name",
        date: "2024-02-07",
        tags: ["CI/CD", "Automation", "DevOps"],
        readTime: "10 min"
    },

    // Week 7 Posts - Uncomment when needed
    {
        id: 19,
        title: "Microservices Architecture",
        excerpt: "Understanding the principles of microservices architecture.",
        content: "Detailed content about microservices...",
        image: "images/blog/microservices.jpg",
        week: "week7",
        author: "Your Name",
        date: "2024-02-12",
        tags: ["Microservices", "Architecture", "Design"],
        readTime: "11 min"
    },
    {
        id: 20,
        title: "API Design Best Practices",
        excerpt: "Learning best practices for designing robust and scalable APIs.",
        content: "Detailed content about API design...",
        image: "images/blog/api-design.jpg",
        week: "week7",
        author: "Your Name",
        date: "2024-02-14",
        tags: ["API", "Design", "Best Practices"],
        readTime: "9 min"
    },

    // Week 8 Posts - Uncomment when needed
    {
        id: 21,
        title: "Data Visualization Techniques",
        excerpt: "Exploring different ways to visualize data in our application.",
        content: "Detailed content about data visualization...",
        image: "images/blog/data-viz.jpg",
        week: "week8",
        author: "Your Name",
        date: "2024-02-19",
        tags: ["Data Visualization", "UI", "UX"],
        readTime: "8 min"
    },
    {
        id: 22,
        title: "Implementing Real-time Features",
        excerpt: "Adding real-time functionality using WebSockets.",
        content: "Detailed content about real-time features...",
        image: "images/blog/realtime.jpg",
        week: "week8",
        author: "Your Name",
        date: "2024-02-21",
        tags: ["WebSockets", "Real-time", "Development"],
        readTime: "10 min"
    },

    // Week 9 Posts - Uncomment when needed
    {
        id: 23,
        title: "Security Audit and Improvements",
        excerpt: "Conducting a security audit and implementing improvements.",
        content: "Detailed content about security audit...",
        image: "images/blog/security.jpg",
        week: "week9",
        author: "Your Name",
        date: "2024-02-26",
        tags: ["Security", "Audit", "Best Practices"],
        readTime: "12 min"
    },
    {
        id: 24,
        title: "Accessibility Compliance",
        excerpt: "Ensuring our application meets accessibility standards.",
        content: "Detailed content about accessibility...",
        image: "images/blog/accessibility.jpg",
        week: "week9",
        author: "Your Name",
        date: "2024-02-28",
        tags: ["Accessibility", "Compliance", "UX"],
        readTime: "9 min"
    },

    // Week 10 Posts - Uncomment when needed
    {
        id: 25,
        title: "Project Handover Process",
        excerpt: "Preparing documentation and processes for project handover.",
        content: "Detailed content about project handover...",
        image: "images/blog/handover.jpg",
        week: "week10",
        author: "Your Name",
        date: "2024-03-04",
        tags: ["Documentation", "Handover", "Process"],
        readTime: "11 min"
    },
    {
        id: 26,
        title: "Final Internship Presentation",
        excerpt: "Preparing and delivering the final presentation of my internship work.",
        content: "Detailed content about final presentation...",
        image: "images/blog/presentation.jpg",
        week: "week10",
        author: "Your Name",
        date: "2024-03-08",
        tags: ["Presentation", "Communication", "Reflection"],
        readTime: "10 min"
    }
    */
];

// Variables for pagination
let postsPerPage = 6;
let currentPage = 1;

// Function to create a blog post card
function createBlogPostCard(post) {
    return `
        <article class="blog-card" data-week="${post.week}">
            <div class="blog-card-image">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-card-week">Week ${post.week.replace('week', '')}</div>
            </div>
            <div class="blog-card-content">
                <h3 class="blog-card-title">
                    <a href="blog-posts/${post.id}.html">${post.title}</a>
                </h3>
                <div class="blog-card-meta">
                    <span class="blog-date">${formatDate(post.date)}</span>
                    <span class="blog-read-time">${post.readTime} read</span>
                </div>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <div class="blog-card-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </article>
    `;
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to display posts with pagination
function displayPosts(posts) {
    const blogGrid = document.querySelector('.blog-grid');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (!blogGrid) return;
    
    // Calculate which posts to show based on pagination
    const startIndex = 0;
    const endIndex = Math.min(currentPage * postsPerPage, posts.length);
    const postsToShow = posts.slice(startIndex, endIndex);
    
    let postsHTML = '';
    postsToShow.forEach(post => {
        postsHTML += createBlogPostCard(post);
    });
    
    blogGrid.innerHTML = postsHTML;
    
    // Show or hide load more button
    if (loadMoreBtn) {
        if (endIndex >= posts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

// Function to filter posts by week
function filterPostsByWeek(week) {
    // Reset pagination
    currentPage = 1;
    
    let filteredPosts;
    if (week === 'all') {
        filteredPosts = blogPosts;
    } else {
        filteredPosts = blogPosts.filter(post => post.week === week);
    }
    
    displayPosts(filteredPosts);
    
    // Store current filter for search functionality
    window.currentFilter = week;
}

// Function to search posts
function searchPosts(query) {
    query = query.toLowerCase().trim();
    
    // If no query, show all posts or apply current filter
    if (!query) {
        filterPostsByWeek(window.currentFilter || 'all');
        return;
    }
    
    // Get posts based on current week filter
    let postsToSearch;
    if (window.currentFilter && window.currentFilter !== 'all') {
        postsToSearch = blogPosts.filter(post => post.week === window.currentFilter);
    } else {
        postsToSearch = blogPosts;
    }
    
    // Filter posts by search query
    const searchResults = postsToSearch.filter(post => {
        return (
            post.title.toLowerCase().includes(query) || 
            post.excerpt.toLowerCase().includes(query) || 
            post.content.toLowerCase().includes(query) || 
            post.tags.some(tag => tag.toLowerCase().includes(query))
        );
    });
    
    // Display search results
    displayPosts(searchResults);
    
    // Hide load more button for search results
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

// Initialize blog functionality
function initBlog() {
    // Set default filter
    window.currentFilter = 'all';
    
    // Add event listeners to week filters
    const weekFilters = document.querySelectorAll('.week-filter');
    weekFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            weekFilters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            this.classList.add('active');
            // Get selected week
            const selectedWeek = this.getAttribute('data-week');
            // Filter posts
            filterPostsByWeek(selectedWeek);
        });
    });
    
    // Add event listener to search
    const searchInput = document.getElementById('blog-search');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchInput && searchBtn) {
        // Search on button click
        searchBtn.addEventListener('click', function() {
            searchPosts(searchInput.value);
        });
        
        // Search on enter key
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                searchPosts(searchInput.value);
            }
        });
    }
    
    // Add event listener to load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            currentPage++;
            
            // Get posts based on current filter
            let postsToLoad;
            if (window.currentFilter && window.currentFilter !== 'all') {
                postsToLoad = blogPosts.filter(post => post.week === window.currentFilter);
            } else {
                postsToLoad = blogPosts;
            }
            
            displayPosts(postsToLoad);
        });
    }
    
    // Initial display of posts
    displayPosts(blogPosts);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initBlog);
