import { motion } from 'framer-motion';

export default function Div() {
  const skills = [
    {
      title: 'Frontend',
      content: 'HTML, CSS, JavaScript, React.js, Tailwind CSS, Framer Motion',
    },
    {
      title: 'Data Science / AI',
      content: 'Python, Pandas, NumPy, Matplotlib, Scikit-learn',
    },
    {
      title: 'Tools',
      content: 'VS Code, GitHub, Postman, Figma',
    },
    {
      title: 'Strengths',
      content: 'Quick Learner · Curious · Creative Problem Solver · Self-driven',
    },
  ];

  return (
    <div className="w-full h-auto p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-2xl shadow-xl text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl md:text-3xl font-bold mb-8 tracking-wide underline underline-offset-4 decoration-pink-500"
      >
        Skills & Tools
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 backdrop-blur-md p-5 rounded-xl hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold text-pink-400 mb-2">{item.title}</h3>
            <p className="text-sm leading-relaxed text-gray-200">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
