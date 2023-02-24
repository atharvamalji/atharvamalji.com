import Image from "next/image";

import { GrSend } from "react-icons/gr";

import { motion } from "framer-motion";

const transitionRocket = {
  delay: 0.6,
  y: {
    duration: 1,
    repeat: Infinity,
    ease: "linear",
  },
};

const LetsWorkTogether = () => {
  return (
    <section className="flex justify-center py-24 p-4 bg-amber-50">
      <div className="w-[93rem]">
        <div className="space-y-8">
          <div>
            <p className="text-5xl md:text-6xl font-[700]">
              <span>Let&apos;s work together </span>
              {/* <motion.span
                transition={transitionRocket}
                animate={{ y: [100, -100] }}
              >
                <span>
                  <Image
                    src={"/icons/rocket.png"}
                    width={64}
                    height={64}
                    alt={"rocket"}
                    className={"inline w-16"}
                  />
                </span>
                <div className="h-20 w-20 bg-black"></div>
              </motion.span> */}
              <motion.div
                animate={{ y: ["0%", "5%", "0%", "-7%", "0%"] }}
                transition={transitionRocket}
                className={"inline-block"}
              >
                <span>
                  <Image
                    src={"/icons/rocket.png"}
                    width={64}
                    height={64}
                    alt={"rocket"}
                    className={"w-10 md:w-16"}
                  />
                </span>
              </motion.div>
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <p className="space-x-2 md:text-xl">
                <span>
                  Get in touch with me and we can discuss about getting your
                  awesome ideas turned into websites that will help you get
                  recognition, credibility and more sales! We&apos;ll get your
                  business to the moon. That&apos;s a promise.
                </span>
              </p>
            </div>
            <div>
              <button className="space-x-2 flex items-center bg-amber-300 font-[700] p-4 md:text-2xl">
                <p>Get in touch</p>
                <span>
                  <GrSend />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsWorkTogether;
