import Link from 'next/link'
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white w-full">
      <div className="p-4 border-b">
        <div>
          <div>
            <span>
                <Image src={"/images/signature.png"} height={64} width={128} alt={"signature"} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
