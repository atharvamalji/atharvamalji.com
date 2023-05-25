import Link from "next/link";
import Image from "next/image";

import { FiDownload } from "react-icons/fi";

const AboutMe = () => {
  return (
    <section className="py-16 p-4 bg-amber-50 flex justify-center">
      <div className="flex items-center h-full w-[93rem] max-w-[93rem]">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-8">
            <div>
              <p className="text-5xl md:text-6xl font-[700]">About me</p>
            </div>
            <div className="relative flex bg-gradient-to-r from-amber-400 via-amber-200 via-amber-100 to-amber-400 text-white p-4 py-8">
              <p className="absolute text-[#ffffff50] text-[8rem] -top-[1.75rem] font-[700]">
                2 <sup>+</sup>
              </p>
              <p className="text-3xl w-full text-center drop-shadow-sm text-amber-50">
                years of experience
              </p>
            </div>
            <div className="z-10">
              <p className="md:text-xl max-w-[43rem]">
                Having worked at a cloud service startup and spending extensive
                time in learning and practitsing modern frameworks, I am
                confident in saying that I have the necessary experience it
                takes to deliver in the current fast paced industry.
              </p>
            </div>
            {/* <div className="space-y-2">
              <p className="flex items-end space-x-4 text-6xl font-[700]">
                <span>Hi there, </span>
                <span>
                  <Image
                    src="/icons/wave.png"
                    height="128"
                    width="128"
                    alt="wave"
                    className="w-14"
                  />
                </span>
              </p>
              <p className="text-6xl font-[700]">
                <span>
                  I&apos;m <span className="text-7xl">Atharva Malji</span>
                </span>
              </p>
              <p className="text-6xl font-[700]">
                <span>a Fullstack Developer</span>
              </p>
            </div>
            <div>
              <p className="max-w-[43rem] text-xl">
                I use my skills and expertise in software and web development to
                help people and businesses find solutions to their business and
                application needs. there&apos;s no problem that a software or
                website can&apos;t solve.
              </p>
            </div>
            <div className="space-x-4">
              <button className="bg-amber-300 font-[700] text-2xl p-4">
                Say hello
              </button>
              <button className="text-amber-500 border border-amber-300 font-[700] text-2xl p-4">
                See my works
              </button>
            </div> */}
          </div>
          <div className="flex space-x-4 md:text-2xl">
            <Link
              href={
                "https://media.licdn.com/dms/document/media/C4D1FAQFpXC4WVHvciQ/feedshare-document-pdf-analyzed/0/1677350128615?e=1686182400&v=beta&t=w91T5t48B90FOSutsXfCS8l1s1LM-JwMzaxsU0HpJ1g"
              }
            >
              <button className="space-x-2 flex items-center bg-amber-300 font-[700] p-4">
                <p>Download my résumé</p>
                <span>
                  <FiDownload />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
