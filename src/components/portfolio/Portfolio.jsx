import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Wearables",
    title: "Smart Wearable Devices",
    description:
      "End-to-end design and development of smart wearable technology for health and fitness monitoring.",
    link: "https://glidemtech.com/",
  },
  {
    id: 2,
    image: card2,
    category: "IoT Solutions",
    title: "Industrial IoT Gateway",
    description:
      "Robust IoT gateway solutions for industrial automation and remote monitoring.",
    link: "https://glidemtech.com/",
  },
  {
    id: 3,
    image: card3,
    category: "Healthcare",
    title: "Medical Diagnostic Device",
    description:
      "High-precision electronic design for medical diagnostic equipment.",
    link: "https://glidemtech.com/",
  },
  {
    id: 4,
    image: card4,
    category: "Automation",
    title: "Home Automation System",
    description:
      "Integrated home automation control panels with touch interfaces.",
    link: "https://glidemtech.com/",
  },
  {
    id: 5,
    image: card5,
    category: "Surveillance",
    title: "Security Camera System",
    description:
      "Advanced firmware for security and surveillance camera systems.",
    link: "https://glidemtech.com/",
  },
  {
    id: 6,
    image: card6,
    category: "Embedded",
    title: "Custom Controller Board",
    description:
      "Bespoke PCB design and firmware for industrial machinery control.",
    link: "https://glidemtech.com/",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of our recent work, showcasing our expertise in
            creating diverse embedded and software solutions.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://glidemtech.com/"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
