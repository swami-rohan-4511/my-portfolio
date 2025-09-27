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
    links: [{ label: "GitHub", url: "https://github.com/swami-rohan-4511/Ecom" }]
  },
  { 
    category: 'mini', 
    title: "URL Shortener", 
    summary: "Generates short links and track clicks.", 
    tech: ["Spring Boot", "Redis", "PostgreSQL"], 
    links: [
      { label: "GitHub", url: "https://github.com/swami-rohan-4511/URL-Shortener" },
      { label: "Live Demo", url: "https://url-shortener-sgi6.onrender.com/" }
    ] 
  }
];

function renderProjects(containerSelector, filter = 'all') {
  const grid = document.querySelector(containerSelector);
  if (!grid) return;
  grid.innerHTML = projects
    .filter(p => filter === 'all' ? true : p.category === filter)
    .map((p) => {
      const tech = p.tech.map((t) => `<span class="tags__chip">${t}</span>`).join("");

      // updated links rendering
      const links = (p.links || [])
        .map((l) => {
          let icon = "";
          if (l.label.toLowerCase().includes("github")) {
            icon = `<i class="fa-brands fa-github"></i>`;
          } else {
            icon = `<i class="fa-solid fa-link"></i>`;
          }
          return `<a href="${l.url}" target="_blank" rel="noopener">${icon} ${l.label}</a>`;
        })
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
