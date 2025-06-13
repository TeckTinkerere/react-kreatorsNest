import { motion } from 'framer-motion';

const Photography = () => {
  const photographyResources = [
    {
      title: 'Portrait Photography',
      description: `
        📚 Learn: YouTube channels like Jessica Kobeissi, SLR Lounge, and Skillshare classes.
        📸 Tools: Canon M50, Sony a6400, Reflectors, Lightroom presets.
        🌐 Communities: r/photography, Flickr Groups, Facebook Portrait Shooters SG.
        🎯 Gigs: Graduation shoots, LinkedIn headshots, Poly CCA portraits.
        📌 Scenario: A student offers $20 portrait shoots on campus to build a portfolio, edits in Lightroom Mobile, and builds an Instagram proof page.
      `,
      price: 'Starter Kits & Pose Guides',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500'
    },
    {
      title: 'Event Photography',
      description: `
        📚 Learn: Mango Street tutorials, CreativeLive workshops.
        📸 Gear: Zoom lenses (24-70mm), flash diffusers, backup SD cards.
        🌐 Communities: Event Photographers Asia FB group, Reddit Event Photography.
        🎯 Gigs: School open houses, music nights, private parties.
        📌 Scenario: A student joins a polytechnic event team, shoots school gigs for free, then charges for external community events.
      `,
      price: 'Event Checklists + Contracts',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500'
    },
    {
      title: 'Commercial Photography',
      description: `
        📚 Learn: Fstoppers, Karl Taylor Education.
        📸 Gear: Lightboxes, tripods, product backdrops, capture tether tools.
        🌐 Communities: r/ProductPhotography, BrandShooters Telegram SG.
        🎯 Gigs: Cafe menu shots, Shopee seller images, poly-based biz collabs.
        📌 Scenario: A freelancer uses home lightbox kits and charges local thrift shops $30 per product set to build skill + side income.
      `,
      price: 'Lighting Kits & Gig Sites',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500'
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
          Photography Resource Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Explore gear, guides, and freelance pathways in modern photography.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {photographyResources.map((resource, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={resource.image}
                alt={resource.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{resource.title}</h2>
              <p className="text-gray-600 mb-4 whitespace-pre-line text-sm">{resource.description.trim()}</p>
              <div className="flex items-center justify-between">
                <p className="text-blue-600 font-semibold">{resource.price}</p>
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Shoot, Edit, Earn</h2>
        <p className="mb-6">Perfect for young freelancers with a camera and ambition. Begin your photography journey here.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Explore All Tools
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Photography;
