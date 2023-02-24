import Image from "next/image";

const Footer = () => {
  return (
    <footer className="sticky top-0 z-10 bg-white w-full">
      <div className="p-4 border-b space-y-4">
        <div className="flex justify-center">
          <span>
            <Image
              src={"/images/signature.png"}
              height={64}
              width={128}
              alt={"signature"}
            />
          </span>
        </div>
        <div className="text-center">
            <p className="text-xs">© 2023 by Atharva Malji. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
