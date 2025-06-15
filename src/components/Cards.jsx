import { motion as Motion } from "motion/react";
const Cards = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <Motion.img
      className="absolute w-10 cursor-grab"
      src={image}
      style={style}
      drag
      whileHover={{ scale: 1.05 }}
      
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <Motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[7rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </Motion.div>
  );
};

export default Cards;

