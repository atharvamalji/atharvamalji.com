import { FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCsharp,
  SiCplusplus,
  SiDjango,
  SiReact,
  SiLaravel,
  SiExpress,
  SiSelenium,
  SiAmazonaws,
  SiHeroku,
  SiPostgresql,
  SiMysql,
  SiDocker,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="flex justify-center py-24 p-4">
      <div className="md:w-[93rem] space-y-8">
        <div>
          <p className="text-5xl md:text-6xl font-[700]">My skills</p>
        </div>
        <div>
          <p className="md:text-xl">
            I&apos;ve spent last 4 years learning new technologies that I think
            would be the defacto standard of the future and I would love to
            share my knowledge and experstise to help you develop solutions for
            wide range of problems.
          </p>
        </div>
        <div className="grid grid-cols-2 text-sm md:text-xl gap-4">
          <div className="space-y-2 border border-amber-300">
            <p className="bg-amber-50 p-1 font-[700] border-b border-amber-300">
              Languages
            </p>
            <div className="p-1">
              <ul>
                <li className="flex items-center space-x-2">
                  <FaPython className="text-green-600" />
                  <span>Python</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaJava className="text-amber-600" />
                  <span>Java</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoLogoJavascript className="text-yellow-300" />
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiCsharp className="text-purple-600" />
                  <span>C#</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiCplusplus className="text-sky-600" />
                  <span>C++</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-2 border border-amber-300">
            <p className="bg-amber-50 p-1 font-[700] border-b border-amber-300">
              Frameworks
            </p>
            <div className="p-1">
              <ul>
                <li className="flex items-center space-x-2">
                  <SiDjango className="text-green-800" />
                  <span>Django</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiReact className="text-blue-500" />
                  <span>React</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiLaravel className="text-orange-600" />
                  <span>Laravel</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiExpress className="text-red-700" />
                  <span>Express</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiSelenium className="text-green-600" />
                  <span>Selenium</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-2 border border-amber-300">
            <p className="bg-amber-50 p-1 font-[700] border-b border-amber-300">
              Cloud
            </p>
            <div className="p-1">
              <ul>
                <li className="flex items-center space-x-2">
                  <SiAmazonaws className="text-amber-500" />
                  <span>AWS S3</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiAmazonaws className="text-amber-500" />
                  <span>AWS EC2</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiAmazonaws className="text-amber-500" />
                  <span>AWS EBS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiHeroku className="text-purple-700" />
                  <span>Heroku</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiDocker className="text-blue-600" />
                  <span>Docker</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-2 border border-amber-300">
            <p className="bg-amber-50 p-1 font-[700] border-b border-amber-300">
              Databases
            </p>
            <div className="p-1">
              <ul>
                <li className="flex items-center space-x-2">
                  <SiMysql className="text-orange-600" />
                  <span>MySQL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiPostgresql className="text-blue-600" />
                  <span>Postgres</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
