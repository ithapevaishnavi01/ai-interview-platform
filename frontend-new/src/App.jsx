import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  const companies = [
    { name: "Google", icon: "G", color: "google" },
    { name: "Amazon", icon: "A", color: "amazon" },
    { name: "Microsoft", icon: "M", color: "microsoft" },
    { name: "Infosys", icon: "I", color: "infosys" },
    { name: "TCS", icon: "T", color: "tcs" },
    { name: "Accenture", icon: "A", color: "accenture" },
  ];

  const features = [
    {
      icon: "🤖",
      title: "AI Mock Interviews",
      description: "Practice with an AI interviewer and get instant feedback.",
    },
    {
      icon: "🏢",
      title: "Company Preparation",
      description: "Prepare with company-wise interview questions.",
    },
    {
      icon: "💻",
      title: "DSA Practice",
      description: "Improve your problem-solving skills with curated questions.",
    },
    {
      icon: "📊",
      title: "Track Progress",
      description: "Monitor your preparation and become interview-ready.",
    },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo" onClick={() => setActivePage("home")}>
          <span className="logo-icon">⚡</span>
          Career<span>Forge</span>
          <small>AI</small>
        </div>

        <div className="nav-links">
          <button onClick={() => setActivePage("home")}>Home</button>
          <button onClick={() => setActivePage("companies")}>
            Companies
          </button>
          <button onClick={() => setActivePage("dsa")}>DSA Practice</button>
          <button onClick={() => setActivePage("interview")}>
            AI Interview
          </button>
        </div>

        <button className="login-btn">Login</button>
      </nav>

      {activePage === "home" && (
        <>
          <section className="hero">
            <div className="hero-content">
              <div className="badge">✨ AI-powered career preparation</div>

              <h1>
                Prepare smarter.
                <br />
                <span>Get hired faster.</span>
              </h1>

              <p>
                Your personal AI career companion for company-wise interview
                preparation, DSA practice, and realistic mock interviews.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() => setActivePage("interview")}
                >
                  Start AI Interview →
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => setActivePage("companies")}
                >
                  Explore Companies
                </button>
              </div>

              <div className="stats">
                <div>
                  <strong>10K+</strong>
                  <span>Questions</span>
                </div>

                <div>
                  <strong>50+</strong>
                  <span>Companies</span>
                </div>

                <div>
                  <strong>AI</strong>
                  <span>Powered</span>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <div className="ai-orb">🤖</div>
              <h3>AI Interviewer</h3>
              <p>Ready to help you become interview-ready.</p>

              <div className="progress-card">
                <span>Your preparation</span>
                <strong>72%</strong>
                <div className="progress-bar">
                  <div></div>
                </div>
              </div>

              <button
                className="card-btn"
                onClick={() => setActivePage("interview")}
              >
                Start Practice
              </button>
            </div>
          </section>

          <section className="section">
            <div className="section-heading">
              <span>Everything you need</span>
              <h2>One platform. Complete preparation.</h2>
            </div>

            <div className="features-grid">
              {features.map((feature) => (
                <div className="feature-card" key={feature.title}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <button onClick={() => setActivePage("interview")}>
                    Explore →
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="section companies-section">
            <div className="section-heading">
              <span>Prepare for your dream company</span>
              <h2>Company-wise preparation</h2>
            </div>

            <div className="companies-grid">
              {companies.map((company) => (
                <div
                  className="company-card"
                  key={company.name}
                  onClick={() => setActivePage("companies")}
                >
                  <div className={`company-icon ${company.color}`}>
                    {company.icon}
                  </div>
                  <h3>{company.name}</h3>
                  <p>Interview preparation</p>
                  <span>View questions →</span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {activePage === "companies" && (
        <section className="page-section">
          <div className="page-header">
            <span>COMPANY PREPARATION</span>
            <h1>Prepare for your dream company 🚀</h1>
            <p>Practice real interview topics and improve your confidence.</p>
          </div>

          <div className="companies-grid">
            {companies.map((company) => (
              <div className="company-card large" key={company.name}>
                <div className={`company-icon ${company.color}`}>
                  {company.icon}
                </div>
                <h3>{company.name}</h3>
                <p>Technical + HR interview preparation</p>
                <button className="primary-btn">Start Preparation →</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {activePage === "dsa" && (
        <section className="page-section">
          <div className="page-header">
            <span>DSA PRACTICE</span>
            <h1>Master Data Structures & Algorithms 💻</h1>
            <p>Practice problems and improve your problem-solving skills.</p>
          </div>

          <div className="dsa-grid">
            {["Arrays", "Strings", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"].map(
              (topic) => (
                <div className="dsa-card" key={topic}>
                  <h3>{topic}</h3>
                  <p>Practice curated questions</p>
                  <button className="secondary-btn">Practice →</button>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {activePage === "interview" && (
        <section className="page-section interview-page">
          <div className="ai-interview-card">
            <div className="ai-orb big">🤖</div>
            <span>AI MOCK INTERVIEW</span>
            <h1>Your AI interviewer is ready.</h1>
            <p>
              Practice a realistic interview and receive personalized feedback
              on your performance.
            </p>

            <select>
              <option>Select Company</option>
              <option>Google</option>
              <option>Amazon</option>
              <option>Microsoft</option>
              <option>Infosys</option>
            </select>

            <select>
              <option>Select Role</option>
              <option>Software Developer</option>
              <option>DevOps Engineer</option>
              <option>Cloud Engineer</option>
            </select>

            <button className="primary-btn">Start Interview 🚀</button>
          </div>
        </section>
      )}

      <footer>
        <div className="logo">
          ⚡ Career<span>Forge</span> <small>AI</small>
        </div>
        <p>Build your future. One question at a time.</p>
      </footer>
    </div>
  );
}

export default App;