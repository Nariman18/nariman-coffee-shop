import { motion } from "framer-motion";
import Link from "next/link";

function NavList() {
  const links = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/",
      name: "Explore",
    },
    {
      href: "/",
      name: "About",
    },
    {
      href: "/",
      name: "Menu",
    },
    {
      href: "/",
      name: "Contact",
    },
  ];

  const letterAnim = {
    initial: { y: "100%", opacity: 0 },
    enter: (i: [number, number]) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.6, 0, 0.2, 1], delay: i[0] },
    }),
    exit: (i: [number, number]) => ({
      y: "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: [0.6, 0, 0.2, 1], delay: i[1] },
    }),
  };

  //Getting each letter and returning them in a new array
  const getLetter = (name: string) => {
    const letters: JSX.Element[] = [];
    name.split("").forEach((letter, index) => {
      letters.push(
        <motion.span
          variants={letterAnim}
          initial="initial"
          animate="enter"
          exit="exit"
          custom={[index * 0.05, (name.length - index) * 0.05]} // Delay of each letter's enter and exit
          key={index}
        >
          {letter}
        </motion.span>
      );
    });
    return letters;
  };

  return (
    <ul className="flex flex-col gap-8 font-primary md:text-4xl sm:text-xl text-3xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => (
        <motion.li key={index} className="">
          <Link
            href={link.href}
            className="flex overflow-hidden hover:text-white transition-all"
          >
            {getLetter(link.name)}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default NavList;
