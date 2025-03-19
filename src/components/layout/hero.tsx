import { Button } from "@/components";

const Hero: React.FC = () => {
  return (
    <>
      <div className={"grid grid-cols-1 gap-2 z-10"}>
        <div className="font-extrabold animate-hero-fade-in-name text-4xl">{`Hi, I'm Tom Moreton`}</div>
        <div className="animate-hero-fade-in-job-title text-2xl">{`I'm a Full Stack Web Developer`}</div>
        <div className="animate-hero-fade-in-button delay-500 mt-5 grid place-items-center">
          <Button label={"Learn More"} />
        </div>
      </div>
    </>
  );
};

export default Hero;
