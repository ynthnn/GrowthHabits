import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import SocialTrade from './pages/SocialTrade';
import Education from './pages/Education';
import Tools from './pages/Tools';

function App() {
  const [activeTab, setActiveTab] = useState('About');

  // Simple custom routing to switch between tabs
  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Social Trade':
        return <SocialTrade />;
      case 'Education':
        return <Education />;
      case 'Tools':
        return <Tools />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content" style={{ paddingTop: '80px', minHeight: 'calc(100vh - 100px)' }}>
        {renderContent()}
      </main>
      
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Growth Habits. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
