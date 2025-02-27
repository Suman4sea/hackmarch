import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, Mail, Building } from 'lucide-react';

function App() {
  const rules = [
    "Teams must consist of 2-4 members",
    "Teams must bring their projects and a PPT for presentation",
    "Use of open source libraries and APIs is allowed",
    "Projects must be original work",
    "Teams must bring their own laptops and other necessary equipment",
    "Be respectful and collaborative with other participants"
  ];

  const timeline = [
    {
      time: "9:00 AM",
      title: "Registration & Welcome",
      description: "Welcome address and introduction to Hackathon",
    },
    {
      time: "10:30 AM",
      title: "Hackathon Begins",
      description: "Brainstorm and build your projects",
    },
    {
      time: "01:00 PM",
      title: "Lunch Break",
      description: "Networking and Lunch",
    },
    {
      time: "6:30 PM",
      title: "Project Submission",
      description: "Submit your projects for evaluation",
    },
    {
      time: "7:00 PM",
      title: "Awards Ceremony",
      description: "Winners announcement and closing remarks",
    },
    {
      time: "8:00 PM",
      title: "Hackathon Ends",
      description: "Thank you for participating in HackMarch 2025",
    },
  ];

  const sponsors = [
    { name: "TechCorp", tier: "Platinum" },
    { name: "DevInc", tier: "Gold" },
    { name: "CloudTech", tier: "Silver" },
    { name: "CodeLabs", tier: "Bronze" }
  ];

  const organizers = [
    { 
      name: "Suman Mandal", 
      role: "Event Director",
      image: "/src/assets/suman.jpg",
      link: "https://linkedin.com/in/suman-mandal-6856b2246"
    },
    { 
      name: "M Bhuvan", 
      role: "Technical Lead",
      image: "/src/assets/bhuvan.jpg",
      link: "https://linkedin.com/in/mbhuvan/"
    },
    { 
      name: "Shrilaxmi Heralagi", 
      role: "Operations Manager",
      image: "/src/assets/shrilaxmi.jpeg",
      link: "https://linkedin.com/in/shree016/"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute top-4 left-4 flex gap-4">
          <motion.img 
            src="/src/assets/logo1.png" 
            alt="Logo 1" 
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img 
            src="/src/assets/logo2.png" 
            alt="Logo 2" 
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="space-y-8 relative z-10">
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-purple-200/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            KLE Department of Computer Applications presents
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold neon-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, scale: [1, 1.05, 1] }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              HackMarch 2025
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-purple-200/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            8 Hours of Innovation and Creation
          </motion.p>
          <a href="https://forms.gle/ZzKG38nKvmyrSgMZ6" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:from-purple-700 hover:to-pink-700 mt-4"
            >
              Register Now
            </motion.button>
          </a>
        </div>
      </motion.section>

      {/* Rules Section */}
      <section className="py-20 px-8 bg-black relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text neon-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Rules
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {rules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 neon-box"
              >
                <p className="text-lg text-purple-100">{rule}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-8 bg-black/90 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text neon-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Event Details
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-purple-500/30 neon-box"
            >
              <Calendar className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2 text-purple-200">Date</h3>
              <p className="text-purple-100">March 22nd, 2025</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-purple-500/30 neon-box"
            >
              <Clock className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2 text-purple-200">Time</h3>
              <p className="text-purple-100">9:00 AM - 8:00 PM</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-purple-500/30 neon-box"
            >
              <MapPin className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2 text-purple-200">Venue</h3>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=1040,+28th+Cross+Road,+2nd+Block,+Rajajinagar,+Bengaluru,+Karnataka+560010" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-100 hover:underline"
              >
                KLESNC, Rajajinagar<br />
                1040, 28th Cross Road, 2nd Block, Rajajinagar, Bengaluru, Karnataka 560010
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-8 bg-black relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text neon-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Agenda
          </motion.h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="agenda-item"
              >
                <div className="w-32 font-mono text-purple-400 text-lg">{item.time}</div>
                <div className="flex-1 bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 neon-box">
                  <h3 className="text-purple-200 text-lg font-bold">{item.title}</h3>
                  <p className="text-purple-100 text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      {/* <section className="py-20 px-8 bg-black/90 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text neon-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sponsors
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 neon-box"
              >
                <h3 className="text-xl font-bold mb-2 text-purple-200">{sponsor.name}</h3>
                <p className="text-purple-400">{sponsor.tier}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Organizers Section */}
      <section className="py-20 px-8 bg-black relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text neon-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Organizers
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {organizers.map((organizer, index) => (
              <motion.a
                key={index}
                href={organizer.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 neon-box text-center"
              >
                <motion.div 
                  className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={organizer.image} 
                    alt={organizer.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-purple-200">{organizer.name}</h3>
                <p className="text-purple-400">{organizer.role}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-purple-200 py-12 px-8 border-t border-purple-500/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text neon-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-6 h-6 mb-2 text-purple-400" />
              <p>+91 7975084262 (suman)</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-6 h-6 mb-2 text-purple-400" />
              <p>hackmarchkle@gmail.com</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Building className="w-6 h-6 mb-2 text-purple-400" />
              <p>KLE Society's S Nijalingappa College</p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;