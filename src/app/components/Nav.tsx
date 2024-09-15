import { motion } from "framer-motion";
import React from "react";
import NavList from "./NavList";

function Nav() {
  const heightAnimation = {
    initial: {
      height: "0",
    },
    open: {
      height: "85vh",
      transition: { duration: 0.8, ease: [0.75, 0, 0.23, 1] },
    },
    close: {
      height: "0",
      transition: { duration: 0.8, ease: [0.75, 0, 0.23, 1] },
    },
  };

  return (
    <motion.nav
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
      className="bg-primary overflow-hidden absolute z-[50] -top-full w-full"
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <NavList />
      </div>
    </motion.nav>
  );
}

export default Nav;
