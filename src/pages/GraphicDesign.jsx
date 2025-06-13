import { motion } from 'framer-motion';

const GraphicDesign = () => {
  const designResources = [
    {
      title: 'Brand Identity',
      description: `
        💡 Learn: The Futur, LogoCore, Envato Tuts+.
        🛠️ Tools: Figma, Looka, Adobe Illustrator.
        🧑‍🤝‍🧑 Communities: r/logodesign, Behance, Indie Hackers Design.
        🎯 Gigs: 99designs, Upwork branding, SP/Poly freelance Telegrams.
        📌 Scenario: A student is tasked with a full rebrand for a CCA. They use LogoCore's guide, present via Figma, and submit via Behance to build credibility.
      `,
      price: 'Top Picks & Free Tools',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500',
      icon: '🎨'
    },
    {
      title: 'Print Design',
      description: `
        💡 Learn: Canva Design School, Printful Tutorials.
        🛠️ Tools: Canva, Vecteezy, Adobe InDesign.
        🧑‍🤝‍🧑 Communities: r/printdesign, Moo Community.
        🎯 Gigs: Fiverr flyers, local SME poster designs, student noticeboard designs.
        📌 Scenario: A 20-year-old freelancer makes student event posters using Canva, prints samples, and uses feedback to refine layout for client printing.
      `,
      price: 'Templates + Free Assets',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500',
      icon: '📄'
    },
    {
      title: 'Digital Design',
      description: `
        💡 Learn: DesignCourse YouTube, Figma Crash Courses.
        🛠️ Tools: Adobe XD, Figma, LottieFiles for animations.
        🧑‍🤝‍🧑 Communities: Discord Design Buddies, Dribbble, r/web_design.
        🎯 Gigs: Instagram post design, banner packs, UI wireframes.
        📌 Scenario: A freelancer lands a social media banner gig. They use Figma for layout, LottieFiles for animation preview, and hand off assets via Google Drive.
      `,
      price: 'Remote Tools + Portfolio Tips',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500',
      icon: '💻'
    }
  ];

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
          Graphic Design Resource Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Explore tools, communities, and freelance opportunities for student designers.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {designResources.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl"
              >
                {service.icon}
              </motion.div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4 whitespace-pre-line text-sm">{service.description.trim()}</p>
              <div className="flex items-center justify-between">
                <p className="text-blue-600 font-semibold">{service.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Resources
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Your Design Career</h2>
        <p className="mb-6">Curated for student freelancers, designed to help you grow, earn, and create impact.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Exploring
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default GraphicDesign;
