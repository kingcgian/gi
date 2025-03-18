# Modern Portfolio Website

A modern, responsive portfolio website template built with HTML, CSS, and JavaScript. Perfect for developers, designers, and creatives to showcase their work and skills.

## Features

- 📱 Fully responsive design
- 🎨 Modern and clean UI
- 🚀 Fast and optimized performance
- 📝 Blog section with dynamic content
- 💼 Portfolio showcase with filtering
- 📬 Contact form with validation
- 🌙 Smooth animations and transitions
- 🔍 SEO friendly

## Pages

1. **Home (index.html)**
   - Introduction section
   - Featured projects
   - Latest blog posts
   - Call-to-action buttons

2. **About (about.html)**
   - Detailed biography
   - Skills and expertise
   - Professional experience
   - Education background
   - Downloadable resume

3. **Portfolio (portfolio.html)**
   - Project grid with filtering
   - Project details
   - Live demo and source code links
   - Project categories

4. **Blog (blog.html)**
   - Blog post grid
   - Categories and tags
   - Search functionality
   - Popular posts sidebar

5. **Blog Post (blog-post.html)**
   - Article content
   - Author information
   - Related posts
   - Social sharing buttons
   - Table of contents

6. **Contact (contact.html)**
   - Contact form with validation
   - Social media links
   - Location and contact information

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Open the project in your favorite code editor.

4. Start a local development server (you can use Live Server in VS Code or any other server).

## Customization

### 1. Personal Information

Update your personal information in the following files:
- `index.html`: Update name, title, and introduction
- `about.html`: Update biography, skills, and experience
- `contact.html`: Update contact information and social media links

### 2. Portfolio Projects

1. Add your projects in `js/portfolio.js`:
   ```javascript
   const portfolioProjects = [
       {
           id: 1,
           title: "Your Project",
           description: "Project description",
           image: "path/to/image.jpg",
           category: "category",
           technologies: ["Tech1", "Tech2"],
           link: "project-url",
           github: "github-url"
       },
       // Add more projects...
   ];
   ```

2. Add project images to the `images/projects/` directory.

### 3. Blog Posts

1. Add your blog posts in `js/blog.js`:
   ```javascript
   const blogPosts = [
       {
           id: 1,
           title: "Your Blog Post",
           excerpt: "Post excerpt...",
           content: "Full content...",
           image: "path/to/image.jpg",
           category: "category",
           date: "2024-03-01",
           tags: ["Tag1", "Tag2"]
       },
       // Add more posts...
   ];
   ```

2. Add blog post images to the `images/blog/` directory.

### 4. Styling

1. Colors and variables can be modified in `css/style.css`:
   ```css
   :root {
       --primary-color: #2563eb;
       --secondary-color: #3b82f6;
       --text-color: #1f2937;
       /* Modify other variables... */
   }
   ```

2. Fonts can be changed by updating the font-family in the CSS file.

### 5. Contact Form

1. Replace the form submission code in `js/contact.js` with your own backend integration:
   ```javascript
   async function handleSubmit(e) {
       // Replace with your form handling logic
       // Example: Send to your server or email service
   }
   ```

## Deployment

1. Build and optimize your assets (optional):
   - Minify CSS and JavaScript files
   - Optimize images
   - Generate sitemap

2. Deploy to your preferred hosting platform:
   - GitHub Pages
   - Netlify
   - Vercel
   - Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Font Awesome for icons
- Google Fonts
- Unsplash for demo images

## Support

If you have any questions or need help with customization, please open an issue in the repository.

## Blog System Guide

This portfolio uses a static HTML blog system where each post is a separate HTML file. Here's how to add a new blog post:

### Adding a New Blog Post

1. **Create a new HTML file** in the `blog-posts` directory using the template: 
   - Copy `blog-post-template.html` to `blog-posts/your-new-post.html`
   - Use kebab-case for the filename (e.g., `implementing-cicd-pipeline.html`)

2. **Update the content**:
   - Change the title in the `<title>` tag and `<h1 class="post-title">` elements
   - Fill in the post metadata (category, date, read time)
   - Add your content to each section (Introduction, Challenges, Solutions, Outcome)
   - Update the tags in the `post-tags` section

3. **Add an image**:
   - Place a featured image in `images/blog/` folder (e.g., `cicd-pipeline.jpg`)
   - Recommended dimensions: 800px × 500px
   - Update image references in your HTML file

4. **Update the blog listing**:
   - Open `blog.html`
   - Add a new `<article class="blog-card">` element within the `.blog-grid` section
   - Set the appropriate `data-category` attribute
   - Update the image, title, date, read time, and excerpt
   - Link to your new blog post file

### Example Blog Card

```html
<article class="blog-card" data-category="devops">
    <div class="blog-card-image">
        <img src="images/blog/your-image.jpg" alt="Your Alt Text">
        <div class="blog-card-category">Category</div>
    </div>
    <div class="blog-card-content">
        <h3 class="blog-card-title">
            <a href="blog-posts/your-post-file.html">Your Blog Post Title</a>
        </h3>
        <div class="blog-card-meta">
            <span class="blog-date">Month Day, Year</span>
            <span class="blog-read-time">X min read</span>
        </div>
        <p class="blog-card-excerpt">A brief description of your blog post (around 20-25 words).</p>
        <a href="blog-posts/your-post-file.html" class="read-more">Read More</a>
    </div>
</article>
```

### Updating Related Posts

To create connections between related blog posts:

1. In each blog post, update the "Related Posts" section with links to other relevant posts
2. Example:
```html
<div class="related-post-item">
    <div class="related-post-image">
        <img src="../images/blog/related-post.jpg" alt="Related Post">
    </div>
    <div class="related-post-content">
        <h4><a href="another-blog-post.html">Related Post Title</a></h4>
        <div class="related-post-meta">
            <span class="post-date">Month Day, Year</span>
        </div>
    </div>
</div>
```

## Technologies Used

- HTML5
- CSS3 with CSS Variables for theming
- JavaScript (Vanilla)
- Responsive Design
- Google Fonts (Inter, Fira Code)
- Font Awesome Icons 