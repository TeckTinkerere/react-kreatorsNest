import { motion } from 'framer-motion';

const Caricature = () => {
  const caricatureResources = [
    {
      title: 'Digital Caricature Drawing',
      description: `
        ✏️ Learn: Domestika "Digital Caricature Basics", YouTube - Cartooning Club How to Draw.
        🧰 Tools: Procreate, iPad + Apple Pencil, Medibang Paint, Clip Studio Paint.
        🎯 Gigs: IG caricature commissions, Fiverr birthday avatars, LinkedIn profile cartoons.
        🌐 Communities: r/ArtistLounge, ArtStation, DeviantArt.
        📌 Scenario: A poly student posts caricatures of teachers as a fun CCA thing. Gets 12 paid requests in a week through DMs.
      `,
      price: 'Free & Paid Resources',
      image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500'
    },
    {
      title: 'Live Caricature Sketching',
      description: `
        🧠 Learn: Skillshare - Live Drawing 101, Urban Sketchers techniques, TikTok tutorials.
        🧰 Tools: Pencil + Copic markers, portable easel, small stool, A4 sketch pad.
        🎯 Gigs: School open houses, corporate team-bonding, art flea markets.
        🌐 Tips: Accept PayNow/GrabPay, print QR sticker, bring waterproof sleeves.
        📌 Scenario: A student artist draws fast sketches at SP events, offering "Free for a smile". Builds a portfolio, starts charging $10 per sketch.
      `,
      price: 'On-site Gear & Tips',
      image: 'https://images.unsplash.com/photo-1600357216511-861c4d2836b4?w=500'
    },
    {
      title: 'Character Branding & Merch',
      description: `
        ✨ Learn: Canva for Merch, Etsy shop setup, Branding with Caricatures (YouTube).
        🧰 Tools: Illustrator, Photoshop, Canva, Redbubble, Shopee Print-on-Demand.
        🎯 Gigs: Personal stickers, cartoon merch, Telegram emotes, IG branding icons.
        🌐 Platforms: Etsy, Shopee, Redbubble, Ko-fi shops.
        📌 Scenario: A youth turns their caricature style into stickers of SG food mascots. Viral reel leads to $300 in orders in 2 weeks.
      `,
      price: 'Start Your Online Store',
      image: 'https://images.unsplash.com/photo-1624001376572-30e0b773ae2e?w=500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
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
          Caricature Resource Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Turn your sketching skills into fun and profitable gigs.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {caricatureResources.map((resource, index) => (
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
                  Explore Kits
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Draw Faces. Make Money.</h2>
        <p className="mb-6">Your art can entertain, inspire, and earn — start now with the right tools.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          View All Caricature Resources
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Caricature;
