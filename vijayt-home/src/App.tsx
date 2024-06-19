import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

function App() {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <motion.div
        className={clsx(
          "bg-yellow-100 p-3 rounded-lg shadow",
          !completed &&
            "flex flex-col justify-center items-center shadow-none"
        )}
        animate={{
          scale: [1, 2, 2, 1, 1, 1],
          rotate: [0, 0, 180, 180, 0, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%", "0%"],
          width: [256, 256, 256, 256, 256, 550],
          height: [256, 256, 256, 256, 256, 400],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.1, 0.4, 0.7, 0.8, 1],
        }}
        onAnimationComplete={() => setCompleted(true)}
      >
        {!completed && <img width={100} height={100} src="/android-chrome-192x192.png" />}
        <motion.div
          className="text-4xl text-center text-red-600 mb-4"
          initial={{
            y: 150,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.3,
            delay: 2,
            ease: "easeInOut"
          }}
        >
          {completed && "Vijay T"}
        </motion.div>
        <motion.ul
          className={clsx("text-lg")}
          initial={{
            opacity: 0,
            display: "none",
          }}
          animate={{
            opacity: [0, 0, 1],
            display: ["none", "block", "block"],
          }}
          transition={{
            duration: 0.5,
            delay: 2.3,
            ease: "easeInOut",
            times: [0, 0.1, 1],
          }}
        >
          <li>Software engineer for 25 years</li>
          <li>Interests: React, TypeScript, Express, Flask</li>
          <li>Works in Cerebras. Previously, Dandi</li>
          <li>
            ReactJS and TypeScript work:
            <ul className="list-disc list-inside indent-4">
              <li>Custom dashboards & reports made using SVG</li>
              <li>Draw routes and heatmap in canvas</li>
              <li>Used WebGL based PixiJS</li>
              <li>Sankey charts using plain SVG</li>
              <li>Used Material UI, Radix UI, antd, Tailwind</li>
            </ul>
          </li>
          <li className="mt-4">Email vijay@vijayt.com for ReactJS work</li>
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default App;
