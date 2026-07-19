import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: "🏠" },
    { id: "companies", name: "Company Questions", icon: "🏢" },
    { id: "dsa", name: "DSA Practice", icon: "💻" },
    { id: "interview", name: "AI Interview", icon: "🤖" },
    { id: "progress", name: "My Progress", icon: "📊" },
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <span>⚡</span>
          CareerForge AI
        </div>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={activePage === item.id ? "active" : ""}
              onClick={() => setActivePage(item.id)}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <p>🚀 Keep learning!</p>
          <small>Prepare today. Succeed tomorrow.</small>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h1>Good morning, Student 👋</h1>
            <p>Ready to improve your interview skills today?</p>
          </div>

          <div className="profile">
            <div className="avatar">V</div>
            <span>Student</span>
          </div>
        </header>

        {activePage === "dashboard" && (
          <section>
            <div className="hero-card">
              <div>
                <p className="eyebrow">YOUR CAREER JOURNEY</p>
                <h2>Prepare smarter.<br />Get hired faster.</h2>
                <p>
                  Practice company-specific questions, master DSA,
                  and experience realistic AI interviews.
                </p>
                <button
                  className="primary-btn"
                  onClick={() => setActivePage("interview")}
                >
                  Start AI Interview →
                </button>
              </div>

              <div className="hero-icon">🤖</div>
            </div>

            <h2 className="section-title">Your Progress</h2>

            <div className="stats-grid">
              <div className="stat-card">
                <span>💻</span>
                <h3>0</h3>
                <p>DSA Problems Solved</p>
              </div>

              <div className="stat-card">
                <span>🤖</span>
                <h3>0</h3>
                <p>AI Interviews</p>
              </div>

              <div className="stat-card">
                <span>🎯</span>
                <h3>0%</h3>
                <p>Average Score</p>
              </div>

              <div className="stat-card">
                <span>🔥</span>
                <h3>0</h3>
                <p>Day Streak</p>
              </div>
            </div>

            <h2 className="section-title">Quick Practice</h2>

            <div className="practice-grid">
              <div className="practice-card">
                <span className="large-icon">🏢</span>
                <h3>Company Questions</h3>
                <p>Practice real interview questions from top companies.</p>
                <button onClick={() => setActivePage("companies")}>
                  Explore Questions →
                </button>
              </div>

              <div className="practice-card">
                <span className="large-icon">💻</span>
                <h3>DSA Practice</h3>
                <p>Improve your problem-solving skills with DSA questions.</p>
                <button onClick={() => setActivePage("dsa")}>
                  Start Practicing →
                </button>
              </div>

              <div className="practice-card">
                <span className="large-icon">🤖</span>
                <h3>AI Mock Interview</h3>
                <p>Experience a personalized interview with AI.</p>
                <button onClick={() => setActivePage("interview")}>
                  Take Interview →
                </button>
              </div>
            </div>
          </section>
        )}

        {activePage === "companies" && (
          <section className="page">
            <h2>Company Interview Questions 🏢</h2>
            <p>Choose a company to start practicing.</p>

            <div className="company-grid">
              {["Google", "Amazon", "Microsoft", "TCS", "Infosys", "Accenture"].map(
                (company) => (
                  <div className="company-card" key={company}>
                    <h3>{company}</h3>
                    <p>Interview questions and preparation</p>
                    <button>View Questions →</button>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {activePage === "dsa" && (
          <section className="page">
            <h2>DSA Practice 💻</h2>
            <p>Master Data Structures and Algorithms.</p>

            <div className="topic-grid">
              {[
                "Arrays",
                "Strings",
                "Linked List",
                "Stack & Queue",
                "Trees",
                "Graphs",
                "Dynamic Programming",
              ].map((topic) => (
                <div className="topic-card" key={topic}>
                  <h3>{topic}</h3>
                  <p>0 problems solved</p>
                  <button>Practice →</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {activePage === "interview" && (
          <section className="page interview-page">
            <h2>AI Mock Interview 🤖</h2>
            <p>Your personal AI interviewer is ready.</p>

            <div className="interview-box">
              <h3>Start a personalized interview</h3>

              <select>
                <option>Select Company</option>
                <option>Google</option>
                <option>Amazon</option>
                <option>Microsoft</option>
              </select>

              <select>
                <option>Select Role</option>
                <option>Software Engineer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
              </select>

              <button className="primary-btn">
                Start Interview 🤖
              </button>
            </div>
          </section>
        )}

        {activePage === "progress" && (
          <section className="page">
            <h2>My Progress 📊</h2>
            <p>Track your interview preparation journey.</p>

            <div className="progress-box">
              <h3>Your progress will appear here</h3>
              <p>Complete DSA problems and AI interviews to see your analytics.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;