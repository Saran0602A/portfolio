import React from 'react';
import Trace from '../components/Trace.jsx';
import { motion } from 'framer-motion';

export default function Internships() {
  return (
    <Trace>
      {/* ✅ Add a relative wrapper to fix scroll warning */}
      <div className="relative">

        <motion.h2 
          className="text-heading mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Internships
        </motion.h2>

        <motion.div
          className="mb-16 space-y-6 p-4 rounded-xl bg-gradient-to-r from-[#1e3a8a1a] to-[#10b9811a] backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-purple-400">Embrizon Technologies</h3>
          <p className="subtext">
            During my internship at <strong>Embrizon Technologies</strong>, I was introduced to the field of <strong>Data Science</strong>. I worked on real-time datasets, applied various preprocessing techniques, and developed machine learning models for predictive analytics. I gained hands-on experience with libraries like <strong>Pandas, NumPy, Scikit-learn, and Matplotlib</strong>, and improved my understanding of model evaluation, feature engineering, and data visualization.
          </p>
          <p className="subtext">
            I also contributed to a mini project that aimed to predict customer churn based on behavioral data. This experience helped me strengthen my foundation in Python and ML workflows.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 p-4 rounded-xl bg-gradient-to-r from-[#0f172a1a] to-[#3b82f61a] backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-400">Linkerr</h3>
          <p className="subtext">
            At <strong>Linkerr</strong>, I worked as a Frontend Development Intern, where I learned and contributed to web projects using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Three.js</strong>. My primary focus was on building interactive user interfaces and visual experiences using <strong>React Three Fiber</strong> and integrating animations using <strong>Framer Motion</strong>.
          </p>
          <p className="subtext">
            I was also involved in creating responsive components, enhancing user interactions, and optimizing performance for smooth user experiences. This internship significantly boosted my confidence in frontend development and UI design.
          </p>
        </motion.div>

      </div>
    </Trace>
  );
}
