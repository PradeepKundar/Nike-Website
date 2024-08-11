import { services } from "../Constants";
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex flex-1 justify-center flex-wrap gap-9 min-sm:flex-col ">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
