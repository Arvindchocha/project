import Marquee from "react-fast-marquee";

const clientNames = [
  "Aimtron",
  "Advino",
  "Invent India",
  "Prima Automation",
  "Samyak",
  "Teq Diligent",
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Our Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          We have had the pleasure of working with a diverse range of companies,
          delivering high-quality embedded solutions.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={50} className="mt-10">
        <div className="flex items-center gap-10 md:gap-20 pe-10 md:pe-20">
          {clientNames.map((name, index) => (
            <span
              key={index}
              className="text-2xl md:text-4xl font-bold text-gray-400 uppercase whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;
