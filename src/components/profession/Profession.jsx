import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Product Engineering",
    description:
      "End-to-end services covering all aspects of product lifecycle starting from concept to market-ready product.",
  },
  {
    id: 2,
    title: "Embedded Hardware",
    description:
      "Identifying right components & architecture for hardware product design compliant to testing & certification.",
  },
  {
    id: 3,
    title: "Embedded Software",
    description:
      "Firmware design and software development services to support efficient next-gen hardware products.",
  },
  {
    id: 4,
    title: "Design Consultancy",
    description:
      "Providing cost-effective and scalable product design architecture solutions.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What We Do</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Glide is an innovative embedded software & hardware solutions provider with a seamless and process-oriented approach.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            We specialize in designing user-centric products in domains like Wearables, IoT, Healthcare, and Automation.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Get in Touch
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
