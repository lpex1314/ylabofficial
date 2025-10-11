import React, { useState, useEffect } from 'react';
import { 
  FaBrain, 
  FaHeart, 
  FaRobot, 
  FaUsers, 
  FaLightbulb, 
  FaHandshake,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaMicroscope,
  FaChartLine,
  FaShieldAlt,
  FaComments,
  FaRocket,
  FaGraduationCap,
  FaBuilding,
  FaChalkboardTeacher
} from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'research', 'initiatives', 'join', 'network', 'founder', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'initiatives', label: 'Initiatives' },
    { id: 'join', label: 'Join Us' },
    { id: 'founder', label: 'Founder' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Y-Lab</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen gradient-bg flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8 flex justify-center items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <FaRobot className="text-4xl text-primary" />
              </div>
              <div className="text-4xl text-gray-400">×</div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <FaBrain className="text-4xl text-secondary" />
              </div>
              <div className="text-4xl text-gray-400">×</div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <FaHeart className="text-4xl text-accent" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Empowering youth to shape
              <br />
              <span className="gradient-text">the future of AI and Wellbeing</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Y-Lab is a student-led innovation lab at University College London exploring how artificial intelligence can enhance human health, emotion, and wellbeing.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => scrollToSection('join')}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Join the Community
              </button>
              <button
                onClick={() => scrollToSection('initiatives')}
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-primary"
              >
                Explore Our Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-secondary rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-secondary"
              >
                Partner with Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Y-Lab Forum 2025</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Capturing moments from our recent forum - bringing together minds passionate about AI and healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Photo 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="./pics/20250509forum/networking.JPG" 
                alt="Y-Lab Forum 2025 - Event Photo 1"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Networking Session</p>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="./pics/20250509forum/speech.JPG" 
                alt="Y-Lab Forum 2025 - Event Photo 2"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Opening Speech</p>
                </div>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="./pics/20250509forum/discussion.JPG" 
                alt="Y-Lab Forum 2025 - Event Photo 3"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Panel Discussion</p>
                </div>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="./pics/20250509forum/career.JPG" 
                alt="Y-Lab Forum 2025 - Event Photo 4"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Career Corner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600">
              Join us at our next event and be part of the conversation about AI and wellbeing
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                We connect students, researchers, and innovators to bridge the gap between AI technology and human wellbeing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <FaRocket className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To build a global youth network driving responsible, human-centered innovation in health and artificial intelligence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded at University College London, Y-Lab began as a student initiative to explore how technology can serve emotional and mental wellbeing.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 md:p-12 rounded-2xl">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Today, it has evolved into a <span className="font-semibold text-primary">cross-disciplinary platform</span> combining research, innovation, and social impact — uniting young minds who believe that <span className="font-semibold text-secondary">technology should serve humanity</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Research Themes Section */}
      <section id="research" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Research Themes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Y-Lab explores how artificial intelligence can support emotional health, behavioral understanding, and overall wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaComments className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emotion Recognition and AI Ethics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Exploring how AI can understand and respond to human emotions while maintaining ethical standards and privacy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaHeart className="text-2xl text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Companionship and Mental Health</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Investigating the role of AI companions in supporting mental health and addressing loneliness and anxiety.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-2xl text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Responsible Innovation in Digital Healthcare</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Developing ethical frameworks for implementing AI solutions in healthcare and digital health platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMicroscope className="text-2xl text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Human-AI Interaction and Empathy Design</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Designing AI systems that prioritize empathy, understanding, and meaningful human-AI collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives & Events Section */}
      <section id="initiatives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Initiatives & Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              We create opportunities for young innovators to experiment, discuss, and collaborate across disciplines.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Y-Lab Autumn Forum</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bringing together academics, entrepreneurs, and investors to discuss AI and wellbeing. A flagship event that fosters meaningful conversations about the future of technology and human health.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">AI4Health Forum @ UCL</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Exploring innovation and digital transformation in healthcare. A collaborative platform where students, researchers, and healthcare professionals share insights and shape the future of health technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaChalkboardTeacher className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Workshops & Mentorship</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hands-on sessions connecting students with researchers and industry mentors. Learn practical skills, gain insights from experts, and build meaningful connections in the AI and health innovation space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-2xl font-semibold gradient-text">
              Become part of Y-Lab — where ideas turn into action
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Students</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Join a community of changemakers at the intersection of AI, health, and innovation. Work on projects, research, and events that make a real difference.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaBuilding className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Partners</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Collaborate with us on research, pilot projects, and community programs that promote ethical and human-centered AI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaChalkboardTeacher className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mentors</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Guide the next generation of thinkers and doers who are passionate about technology and wellbeing.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Network & Supporters Section */}
      <section id="network" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Network & Supporters</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-12 rounded-2xl shadow-lg mb-8">
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <FaHandshake className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Supported by:</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  UCL Faculty of Population Health Sciences, leading academics, and international partners who share our vision for a healthier, smarter world.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Collaborations Include:</h3>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">Research Groups</span>
                <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">Startups</span>
                <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">Healthcare Professionals</span>
                <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">Student Societies</span>
                <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">UK & International Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section id="founder" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Founder's Note</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Hello! I'm <span className="font-semibold text-primary">James Hua</span>, currently a second-year undergraduate student in Population Health Sciences at University College London (UCL).
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                I have long been fascinated by the intersection of artificial intelligence and mental health — particularly how AI can help recognize and understand human emotions, thereby supporting mental wellbeing, promoting emotional companionship, and addressing real-world challenges such as loneliness and anxiety.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                To me, AI is not merely about algorithms or models; it is about <span className="font-semibold text-secondary">empathy, connection, and understanding</span>. I envision a future where AI becomes a true companion — a technology that not only thinks but also feels, helping humans live with greater emotional awareness and compassion.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                With this belief, during my first year at UCL, I co-founded Y-Lab together with <span className="font-semibold">Peixuan Li, Gege Huang, Yumei Cai, and Yang Zhang</span> — a student-led interdisciplinary platform focused on <span className="gradient-text font-semibold">AI × Health × Youth Innovation</span>.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  ✨ At Y-Lab, we believe that universities are not only places to gain knowledge but also <span className="font-semibold">launchpads for creativity, curiosity, and impact</span>. Our mission is to break disciplinary boundaries and empower young innovators to explore and implement solutions to real-world challenges through research, collaboration, and project incubation.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  ✨ Whether you come from technology, medicine, psychology, social sciences, design, business, or communication — if you're curious about the potential of AI, or passionate about improving wellbeing and public health — we warmly invite you to join Y-Lab, a space where young minds can <span className="font-semibold text-primary">think boldly</span>, <span className="font-semibold text-secondary">act collaboratively</span>, and <span className="font-semibold text-accent">care deeply</span>.
                </p>
              </div>

              <p className="text-xl text-gray-900 font-semibold text-center">
                😊 Let's spark inspiration, create change, and shape a future where technology truly serves humanity.
              </p>
              <p className="text-xl gradient-text font-bold text-center mt-4">
                Welcome to Y-Lab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Let's connect and explore how we can collaborate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700">University College London</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-2xl text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:huachenjie238@gmail.com" className="text-secondary hover:text-primary transition-colors">
                    huachenjie238@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Follow Us</h3>
              
              <a
                href="https://www.linkedin.com/company/ylab-healthtech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 mb-6 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaLinkedin className="text-2xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">LinkedIn</p>
                  <p className="text-sm text-gray-600">Y-Lab HealthTech</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/ylab_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <FaInstagram className="text-2xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-accent transition-colors">Instagram</p>
                  <p className="text-sm text-gray-600">@ylab_official</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Y</span>
              </div>
              <span className="font-bold text-xl">Y-Lab</span>
            </div>
            <p className="text-gray-400 mb-2">
              A student-led research and innovation initiative at University College London
            </p>
            <p className="text-gray-500 text-sm">
              © Y-Lab 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
