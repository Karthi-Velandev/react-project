
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import AboutMe from './components/Aboutme/Aboutme';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <Profile 
          name="KARTHIKEYAN D"
          title="My REACT Profile Card"
          // Make sure '212224230115.png' is in your 'public' folder
          imageUrl="/212224230115.png" 
        />
        <AboutMe 
          heading="About Me"
          text="I am a passionate developer currently exploring the world of React. I enjoy building interactive and user-friendly web applications. My goal is to continuously learn and grow as a software engineer, creating solutions that are both functional and elegant."
        />
        <Contact/>
      </main>
      
      
      <Footer />
    </div>
  );
}

export default App;