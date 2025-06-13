import { motion } from 'framer-motion';

const Videography = () => {
  const videoResources = [
    {
      title: 'Event Videography',
      description: `
        🎥 Learn: Full Time Filmmaker, Parker Walbeck, YouTube "Wedding Film School".
        🧰 Tools: Gimbals (DJI Ronin SC), lapel mics, Sony A7C, ND filters.
        🎯 Gigs: Poly open house videos, wedding highlights, orientation recaps.
        🌐 Communities: r/videography, Facebook SG Videographers Club.
        📌 Scenario: A student uses CapCut Pro + phone gimbal to shoot a friend's proposal, posts it on TikTok, and lands 2 client gigs after going semi-viral.
      `,
      price: 'Free & Paid Resources',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500'
    },
    {
      title: 'Commercial Production',
      description: `
        📚 Learn: Skillshare video branding courses, Justin Odisho, Film Riot.
        🧰 Tools: Tripods, Zoom audio recorder, 3-point lighting kits, DaVinci Resolve.
        🎯 Gigs: SME promotional clips, local café menu reels, Shopee product ads.
        🌐 Platforms: Upwork, Fiverr, and Studiobinder for workflow planning.
        📌 Scenario: A poly student works with an F&B CCA, creates 1-minute promo videos for free, then sells $200 promo bundles to hawker brands.
      `,
      price: 'Templates & Client Brief Kits',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500'
    },
    {
      title: 'Music Videos',
      description: `
        🎬 Learn: Lyrical Lemonade breakdowns, ShotDeck inspiration, BTS on Vimeo.
        🧰 Tools: Colored LEDs, slow-motion mode, lens filters, editing to beat.
        🎯 Gigs: Indie band videos, poly music clubs, dance crews, TikTok trends.
        🌐 Platforms: YouTube Shorts, IG Reels, BandLab cross-collabs.
        📌 Scenario: A student teams with campus rappers, shoots stylized music reels on weekends, gains exposure on IG Reels, and builds a Spotify visualizer portfolio.
      `,
      price: 'Music Video Kits & Creator Tools',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500'
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
          Videography Resource Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Learn to shoot, edit, and freelance — one frame at a time.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {videoResources.map((resource, index) => (
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
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <span className="text-2xl">▶️</span>
                </motion.div>
              </div>
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
                  View Tools
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Create, Share, Collaborate</h2>
        <p className="mb-6">Start with your phone. Build with your skills. Share with the world.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Explore All Video Tools
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Videography;
