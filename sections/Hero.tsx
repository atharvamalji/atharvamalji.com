import Link from "next/link";
import Image from "next/image";

// icons
import {
  GrSend,
  GrGithub,
  GrTwitter,
  GrInstagram,
  GrLinkedin,
} from "react-icons/gr";
import { HiBriefcase } from "react-icons/hi";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="md:min-h-screen flex justify-center bg-hero-pattern bg-repeat bg-contain">
      <div className="flex items-center h-full md:w-[93rem] p-4 py-24">
        <div>
          <div className="space-y-8">
            <div>
              <p className="md:text-xl">WELCOME TO MY SITE</p>
            </div>
            <div className="space-y-2">
              <p className="flex items-end space-x-4 text-4xl md:text-5xl font-[700]">
                <span>Hi there, </span>
                <motion.div
                  animate={{
                    rotate: [15, -15, 15],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                  }}
                >
                  <span>
                    <Image
                      src="/icons/wave.png"
                      height="128"
                      width="128"
                      alt="wave"
                      className="w-10 md:w-14"
                    />
                  </span>
                </motion.div>
              </p>
              <p className="text-4xl md:text-6xl font-[700]">
                <span>
                  I&apos;m{" "}
                  <span className="text-[2.65rem] md:text-7xl drop-shadow-md">
                    Atharva Malji
                  </span>
                </span>
              </p>
              <p className="text-4xl md:text-6xl font-[700]">
                <span>
                  a,{" "}
                  <span className="text-4xl md:text-6xl">
                    Fullstack Developer
                  </span>
                </span>
              </p>
            </div>
            <div>
              <p className="max-w-[43rem] md:text-xl">
                I use my skills and expertise in software and web development to
                help people and businesses find solutions to their business and
                application needs. there&apos;s no problem that a software or
                website can&apos;t solve.
              </p>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li>
                  <Link href="https://github.com/atharvamalji">
                    <GrGithub className="text-2xl md:text-3xl" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/atharva-malji/">
                    <GrLinkedin className="text-2xl md:text-3xl" />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/atharva_malji">
                    <GrTwitter className="text-2xl md:text-3xl" />
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com/atharva_malji">
                    <GrInstagram className="text-2xl md:text-3xl" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex space-x-4 md:text-2xl">
              <button className="space-x-2 flex items-center bg-amber-300 font-[700] p-4">
                <p>Say hello</p>
                <span>
                  <GrSend />
                </span>
              </button>
              <button className="space-x-2 flex items-center text-amber-500 bg-white border border-amber-300 font-[700] p-4">
                <p>See my works</p>
                <span>
                  <HiBriefcase />
                </span>
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
