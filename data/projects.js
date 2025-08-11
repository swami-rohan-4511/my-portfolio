// To add a new project:
// 1) Append a new object to the projects array with: title, summary, tech (array), links (optional)
// 2) No build step needed; refresh projects.html to see it.

const projects = [
  // Major Projects
  {
    category: 'major',
    title: "Shopping Cart Web Application",
    summary: "Full-stack Java app with Spring Boot + MVC, JSP, Hibernate and MySQL.",
    tech: ["Java", "Spring Boot", "Spring MVC", "JSP", "Hibernate", "MySQL"],
    links: [{ label: "GitHub", url: "https://github.com/swami-rohan-4511" }]
  },
  {
    category: 'major',
    title: "Job Portal Platform",
    summary: "Multi-role job portal with auth, applications, and admin dashboard.",
    tech: ["Java", "Spring Boot", "Spring Security", "Thymeleaf", "PostgreSQL"],
    links: [{ label: "GitHub", url: "https://github.com/swami-rohan-4511" }]
  },
  {
    category: 'major',
    title: "E-Learning LMS",
    summary: "Course creation, enrollments, quizzes, and progress tracking.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST"],
    links: [{ label: "GitHub", url: "https://github.com/swami-rohan-4511" }]
  },

  // Mini Projects
  { category: 'mini', title: "Notes REST API", summary: "CRUD API with JWT auth.", tech: ["Spring Boot", "JWT", "MongoDB"], links: [{ label: "GitHub", url: "https://github.com/swami-rohan-4511" }] },
  { category: 'mini', title: "URL Shortener", summary: "Generate short links and track clicks.", tech: ["Spring Boot", "Redis", "PostgreSQL"], links: [{ label: "GitHub", url: "https://github.com/swami-rohan-4511" }] },
  { category: 'mini', title: "Chat Server", summary: "WebSocket chat rooms.", tech: ["Java", "Spring Boot", "WebSocket"], links: [{ label: "GitHub", url: "https://github.com/swami-rohan-4511" }] },
  { category: 'mini', title: "Portfolio Website", summary: "Responsive personal site.", tech: ["HTML", "CSS", "JavaScript"], links: [{ label: "GitHub", url: "https://github.com/swami-rohan-4511" }] },
  { category: 'mini', title: "Todo MVC", summary: "Simple todo with filters and persistence.", tech: ["HTML", "CSS", "JavaScript"], links: [{ label: "GitHub", url: "https://github.com/swami-rohan-4511" }] },
  { category: 'mini', title: "Weather Dashboard", summary: "Fetch and display city weather.", tech: ["JavaScript", "REST", "OpenWeather"], links: [{ label: "GitHub", url: "https://github.com/swami-rohan-4511" }] },
];

function renderProjects(containerSelector, filter = 'all') {
  const grid = document.querySelector(containerSelector);
  if (!grid) return;
  grid.innerHTML = projects
    .filter(p => filter === 'all' ? true : p.category === filter)
    .map((p) => {
      const tech = p.tech.map((t) => `<span class="tags__chip">${t}</span>`).join("");
      const links = (p.links || [])
        .map((l) => `<a href="${l.url}" target="_blank" rel="noopener"><i class=\"fa-brands fa-github\"></i> ${l.label}</a>`)
        .join(" ");
      return `
        <article class="card">
          <h3>${p.title}</h3>
          <p class="muted">${p.summary}</p>
          <div class="tags">${tech}</div>
          ${links ? `<div class="links" style="margin-top:8px;">${links}</div>` : ""}
        </article>
      `;
    })
    .join("");
}

// Expose function globally for inline call in projects.html
window.renderProjects = renderProjects;


