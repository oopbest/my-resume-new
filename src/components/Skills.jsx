import { motion } from "framer-motion";
import { desc } from "framer-motion/client";
import { LiaToolsSolid } from "react-icons/lia";

function Services() {
  return (
    <div id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto p-4 text-left"
      >
        <h2 className="flex gap-2 items-center justify-center text-2xl font-bold mb-4">
          <LiaToolsSolid />
          Services
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {[
            {
              title: "Frontend Development",
              description:
                "I build responsive, high-performance web applications using the latest technologies and frameworks. I specialize in building user-friendly interfaces and optimizing performance for optimal user experience.",
              skills: [
                "✅ React.js, Next.js (12, 14, 15) for modern, interactive UIs",
                "✅ TypeScript & JavaScript (ES6+) for scalable and maintainable code",
                "✅ Tailwind CSS, Bootstrap, Chakra UI, DaisyUI for stunning and responsive designs",
                "✅ State Management with Redux, Redux Toolkit, Zustand, and useContext",
              ],
              icon: "🎨",
            },
            {
              title: "Backend Development",
              description:
                "I create secure and scalable backend systems using the latest technologies and frameworks. I specialize in building robust and efficient server-side logic and APIs for web applications.",
              skills: [
                "✅ Node.js, Express.js for server-side logic and APIs",
                "✅ Node.js & Express for RESTful APIs and server-side logic",
                "✅ PHP (Magento 1 & 2, Laravel) for e-commerce and enterprise solutions",
                "✅ Database Management: MySQL, PostgreSQL, MongoDB, Firebase",
              ],
              icon: "💻",
            },
            {
              title: "API Integration & Development",
              description:
                "I develop and integrate powerful APIs for web applications. I specialize in building secure and efficient APIs for web applications.",
              skills: [
                "✅ RESTful API design and implementation",
                "✅ Secure authentication with JWT, OAuth, bcryptjs, and NextAuth.js",
                "✅ Third-party API integrations",
              ],
              icon: "🔗",
            },
            {
              title: "CI/CD & Deployment",
              description:
                "I streamline the development lifecycle with CI/CD and deployment tools.",
              skills: [
                "✅ Git & GitFlow for version control",
                "✅ Docker & GitHub Actions for automated workflows",
                "✅ Vercel for seamless Next.js deployments",
              ],
              icon: "🚀",
            },
            {
              title: "AI-Powered Development",
              description:
                "Leveraging AI tools like GitHub Copilot and Codeium",
              skills: [
                "✅ GitHub Copilot & Codeium for enhanced productivity",
                "✅ AI-assisted debugging and code optimization",
              ],
              icon: "🤖",
            },
            {
              title: "Currently Exploring",
              description:
                "I am currently exploring the following technologies",
              skills: [
                "🔹 Flutter (Dart) & React Native for cross-platform mobile development",
                "🔹 Golang & NestJS for high-performance backend solutions",
              ],
              icon: "🌟",
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-base-100 p-8 rounded-2xl drop-shadow-xs"
            >
              <h3 className="text-lg font-bold mb-2">
                {category.title} {category.icon}
              </h3>
              <p className="mb-4">{category.description}</p>
              <ul>
                {category.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;
