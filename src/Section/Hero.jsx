import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { shoes, statistics } from "../Constants";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center  gap-10  min-h-screen  p-2 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl: padding-x pt-28">
        <p className="text-coral-red text-xl font-montserrat ">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10  ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Where sleek style meets top-notch comfort and cutting-edge innovation
          for your dynamic lifestyle.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin ">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-primary bg-contain bg-center">
        <img
          src={bigShoe1}
          alt="Shoe-Collection"
          className="object-contain relative z-10"
          width={610}
          height={500}
        />
        <div className="absolute origin-bottom-right flex justify-center items-center">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={() => {}}
                bigShoeImg=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
