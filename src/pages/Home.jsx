import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 md:p-8 max-w-7xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to KreatorNest
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Your creative freelancing hub with resources for photography, videography, and graphic design – built for freelancers from beginner to pro.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {/* Photography Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-4xl">📸</span>
          </div>
          <h2 className="text-xl font-semibold mb-4">Photography</h2>
          <p className="text-gray-600 text-sm">
            📚 <strong>Learn:</strong> <a href="https://digital-photography-school.com/" className="text-blue-500 underline">DPS tutorials</a>, YouTube channels like Mango Street.<br/>
            🛠️ <strong>Tools:</strong> Lightroom, Canva, Pixlr, Snapseed.<br/>
            🧑‍🤝‍🧑 <strong>Communities:</strong> Reddit r/photography, ViewBug, Unsplash Discord.<br/>
            🎯 <strong>Gigs:</strong> <a href="https://www.upwork.com" className="text-blue-500 underline">Upwork</a>, Freelancer, ShootProof.<br/>
            💡 <em>Scenario:</em> A student freelancer lands their first event shoot but struggles with lighting. Use free gear tutorials from YouTube & test edits with Snapseed before delivery.
          </p>
        </motion.div>

        {/* Videography Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-4xl">🎥</span>
          </div>
          <h2 className="text-xl font-semibold mb-4">Videography</h2>
          <p className="text-gray-600 text-sm">
            📚 <strong>Learn:</strong> Justin Odisho tutorials, Film Riot, Skillshare courses.<br/>
            🛠️ <strong>Tools:</strong> DaVinci Resolve, CapCut, InShot, OBS Studio.<br/>
            🧑‍🤝‍🧑 <strong>Communities:</strong> r/videography, Indie Filmmakers Network, Discord Film Creators Hub.<br/>
            🎯 <strong>Gigs:</strong> Fiverr, PeoplePerHour, YouTube shorts editing gigs on Facebook groups.<br/>
            💡 <em>Scenario:</em> A beginner takes on a TikTok promo video for a local cafe. Uses CapCut templates, tweaks pacing with feedback, and builds first testimonial.
          </p>
        </motion.div>

        {/* Graphic Design Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-4xl">🎨</span>
          </div>
          <h2 className="text-xl font-semibold mb-4">Graphic Design</h2>
          <p className="text-gray-600 text-sm">
            📚 <strong>Learn:</strong> Envato Tuts+, The Futur YouTube channel.<br/>
            🛠️ <strong>Tools:</strong> Canva, Figma, Adobe Express, GIMP.<br/>
            🧑‍🤝‍🧑 <strong>Communities:</strong> Dribbble, Behance, r/graphic_design.<br/>
            🎯 <strong>Gigs:</strong> 99designs, DesignCrowd, student freelance networks like Polywork.<br/>
            💡 <em>Scenario:</em> A 20-year-old poly student enters a logo contest on 99designs, loses but receives real feedback and improves portfolio with iterations.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Freelance Journey?</h2>
        <p className="mb-6">Get inspired, level up your craft, and land gigs. Join our community of creative freelancers today.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
