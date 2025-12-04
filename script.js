// script.js - renders projects and skills on the portfolio (safe checks + full skills from resume)

const projects = [
  {
    title: "CAR PLATE BLURRER",
    date: "October 2025",
    description: "Real-time Streamlit web app using OpenCV to detect and blur vehicle license plates in uploaded images. Uses Haar Cascade–based detection and Gaussian blur filters with adjustable parameters; supports live upload, preview and secure one-click download.",
    repoUrl: "https://github.com/211301002-gif/Car-Plate-Blurring-",
    stremlitUrl : "https://car-plate-blurrer-ajeebba.streamlit.app/",
    tags: ["Streamlit", "OpenCV", "Privacy", "Python"]
  },
  {
    title: "STOCK MARKET FORECASTING",
    date: "October 2025",
    description: "Time-series forecasting dashboard using LSTM neural networks to predict Indian stock prices. Includes data preprocessing (MinMaxScaler), interactive Streamlit visualizations, and a TensorFlow pipeline for automated data acquisition, training and inference.",
    repoUrl: "https://github.com/211301002-gif/stock-market-",
    stremlitUrl : "https://stock-market-prediction-ajeebba-yasmin.streamlit.app/",
    tags: ["LSTM", "TensorFlow", "Time Series", "Streamlit"]
  },
  {
    title: "SPAM DETECTION WEB APP USING NLP AND MACHINE LEARNING",
    date: "2025",
    description: "Streamlit web app to classify emails/messages as spam or legitimate. Implements Multinomial Naïve Bayes with CountVectorizer for preprocessing and provides real-time predictions with confidence scoring.",
    repoUrl: "https://github.com/211301002-gif/spam-detector",
    stremlitUrl : "https://spam-detector-ajeebba-yasmin.streamlit.app/",
    tags: ["NLP", "Naive Bayes", "Streamlit", "Python"]
  },
  {
    title: "EXPLORATORY DATA ANALYSIS AND REVENUE INSIGHTS ON APPLE APP STORE DATASET",
    date: "September 2025",
    description: "Data cleaning and preprocessing on Apple App Store dataset; EDA using Pandas, Matplotlib and Seaborn to analyze pricing, ratings and estimated revenue. Produced visualizations and actionable insights identifying top-earning apps and genres.",
    repoUrl: null,
    tags: ["Pandas", "EDA", "Visualization"]
  },
  {
    title: "ADVENTURE WORKS PROJECT USING POWER BI",
    date: "June 2025",
    description: "Performed data cleaning, transformations and data modelling (star/snowflake schemas) in Power BI. Created DAX measures and five interactive dashboards for product analysis, customer profiling, geographic mapping and executive reporting.",
    repoUrl: null,
    tags: ["Power BI", "DAX", "Data Modeling", "Dashboards"]
  },
  {
    title: "DEVELOPMENT OF PERSONALIZED DIETARY PLANS FOR AGING POPULATION",
    date: "November 2024",
    description: "Designed personalized nutrition plans targeting bone and cognitive health; built a meal-planning and tracking tool integrating nutrient optimization for calcium, vitamin D, omega-3 and antioxidants for elderly users and caregivers.",
    repoUrl: null,
    tags: ["Health", "Nutrition", "Product Design"]
  }
];

const skills = [
  // Skills pulled/expanded from your resume
  "Python",
  "Pandas",
  "NumPy",
  "scikit-learn",
  "TensorFlow",
  "Keras",
  "OpenCV",
  "SQL",
  "Power BI",
  "DAX",
  "Streamlit",
  "Data Visualization",
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "Tableau",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "LSTM",
  "Time Series Forecasting",
  "Regression",
  "Classification",
  "Multinomial Naive Bayes",
  "CountVectorizer",
  "ETL",
  "Data Cleaning",
  "Feature Engineering",
  "Model Deployment",
  "Model Monitoring",
  "Model Evaluation",
  "MinMaxScaler",
  "Cross Validation",
  "Hyperparameter Tuning",
  "Business Intelligence",
  "Data Storytelling",
  "Git",
  "Docker",
  "AWS (basic)",
  "Data Modeling",
  "Star Schema",
  "Snowflake Schema"
];

function el(tag, className, inner = "") {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (inner) e.innerHTML = inner;
  return e;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = ""; // clear existing

  projects.forEach(p => {
    const card = el("article", "card project-card");
    const header = el("div", "card-header");
    header.appendChild(el("h3", "project-title", p.title));
    header.appendChild(el("time", "project-date", p.date));
    card.appendChild(header);

    const desc = el("p", "project-desc", p.description);
    card.appendChild(desc);

    if (p.tags && p.tags.length) {
      const tagWrap = el("div", "tags");
      p.tags.forEach(t => tagWrap.appendChild(el("span", "tag", t)));
      card.appendChild(tagWrap);
    }

    const actions = el("div", "project-actions");
    if (p.repoUrl) {
      const a = el("a", "btn ghost", "View on GitHub");
      a.href = p.repoUrl;
      a.target = "_blank";
      a.rel = "noopener";
      actions.appendChild(a);
    } else {
      // keep consistent layout if no repo
      actions.appendChild(el("span", "muted", "Repo not available"));
    }
    card.appendChild(actions);
    grid.appendChild(card);
  });
}

function renderSkills() {
  const wrap = document.getElementById("skills-list");
  if (!wrap) return;
  wrap.innerHTML = ""; // clear existing
  skills.forEach(s => wrap.appendChild(el("span", "chip", s)));
}

function setYear() {
  const y = document.getElementById("year");
  if (!y) return;
  y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  setYear();

  // Basic theme toggle
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      btn.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
    });
  }
});
