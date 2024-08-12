import { companyLogos } from "../../../constant/index";
import Image from "next/image";

const CompanyLogos = ({ className }: any) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50 text-2xl leading-normal">
        Powered by the best
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <Image 
            src={logo}
            width={134} 
            height={28} 
            alt={logo}
            loading="lazy"
             />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;