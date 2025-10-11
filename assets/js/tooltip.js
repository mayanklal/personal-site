window.addEventListener("DOMContentLoaded", () => {
  const tooltips = {
    "Root": "About Me",
    "Computes": "Projects",
    "Reveries": "Essays",
    "Pixels": "Graphs",
    "Assemblies": "DIYs",
    "π": "Random Walks"
  };

  document.querySelectorAll(".navbar a").forEach(link => {
    const label = link.textContent.trim();
    if (tooltips[label]) {
      link.setAttribute("data-tooltip", tooltips[label]);
    }
  });
});