// Updated script.js with MODAL + SKILL ICONS + STREAMLIT links

// ICON MAP FOR SKILLS
const skillIcons = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Power BI": "https://cdn-icons-png.flaticon.com/512/906/906310.png",
  Streamlit: "https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.png",
  TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  Keras: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  OpenCV: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_no_text.png",
  "Data Visualization": "https://cdn-icons-png.flaticon.com/512/1828/1828673.png",
  "Machine Learning": "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
  "Deep Learning": "https://cdn-icons-png.flaticon.com/512/746/746488.png"
};

// PROJECTS LIST
const projects = [
  {
    title: "CAR PLATE BLURRER",
    image: "images/car_plate.png",
    date: "October 2025",
    description: "Real-time Streamlit web app using OpenCV...",
    repoUrl: "https://github.com/211301002-gif/Car-Plate-Blurring-",
    liveUrl: "https://car-plate-blurrer-ajeebba.streamlit.app/",
    tags: ["Streamlit", "OpenCV", "Privacy", "Python"]
  },

  {
    title: "STOCK MARKET FORECASTING",
    image: "images/stock.png",
    date: "October 2025",
    description: "LSTM model for stock prediction...",
    repoUrl: "https://github.com/211301002-gif/stock-market-",
    liveUrl: "https://stock-market-prediction-ajeebba-yasmin.streamlit.app/",
    tags: ["LSTM", "TensorFlow", "Time Series", "Streamlit"]
  },

  {
    title: "SPAM DETECTION NLP APP",
    image: "images/spam.png",
    date: "2025",
    description: "NLP spam classifier using Naive Bayes...",
    repoUrl: "https://github.com/211301002-gif/spam-detector",
    liveUrl: "https://spam-detector-ajeebba-yasmin.streamlit.app/",
    tags: ["NLP", "Naive Bayes", "Streamlit"]
  }
];

// Utility
function el(tag, className, inner = "") {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (inner) e.innerHTML = inner;
  return e;
}

// Render Projects
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  projects.forEach((p, index) => {
    const card = el("article", "card project-card");

    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.description.substring(0, 120)}...</p>
      <button class="btn primary project-open" data-id="${index}">View Details</button>
    `;

    grid.appendChild(card);
  });
}

// Render Skills
function renderSkills() {
  const wrap = document.getElementById("skills-list");
  wrap.innerHTML = "";

  skills.forEach(s => {
    const chip = el("span", "chip");
    const img = document.createElement("img");
    img.src = skillIcons[s] || "https://cdn-icons-png.flaticon.com/512/545/545666.png";
    chip.appendChild(img);
    chip.innerHTML += s;
    wrap.appendChild(chip);
  });
}

// MODAL LOGIC
function setupModal() {
  const modal = document.getElementById("project-modal");
  const modalClose = document.querySelector(".modal-close");

  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("project-open")) {
      const id = e.target.dataset.id;
      openModal(id);
    }
  });

  modalClose.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
}

function openModal(id) {
  const p = projects[id];

  document.getElementById("modal-img").src = p.image;
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-desc").textContent = p.description;

  const tagWrap = document.getElementById("modal-tags");
  tagWrap.innerHTML = "";
  p.tags.forEach(t => {
    const tag = el("span", "tag", t);
    tagWrap.appendChild(tag);
  });

  // GitHub
  const gh = document.getElementById("modal-github");
  if (p.repoUrl) gh.href = p.repoUrl;

  // Streamlit
  const live = document.getElementById("modal-streamlit");
  if (p.liveUrl) live.href = p.liveUrl;

  document.getElementById("project-modal").classList.remove("hidden");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  setupModal();

  // Year
  document.getElementById("year").textContent = new Date().getFullYear();
});
