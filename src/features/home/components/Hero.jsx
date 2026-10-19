import Button from '../../../components/Button';

export default function Hero() {
  return (
    <header className="container mx-auto">
      <div className="grid lg:grid-cols-2 mt-37 mb-8 p-4">
        <div className="flex justify-center items-start flex-col mb-20">
          <p className="text-theme font-semibold text-sm mb-5">
            AVAILABLE FOR HIRE
          </p>
          <h1 className="font-extrabold text-6xl text-[#101828] mb-3">
            Hi, I'm
          </h1>
          <h1 className="font-extrabold text-6xl text-dark mb-5">
            Alex Carter
          </h1>
          <h3 className="font-medium text-xl text-[#4A5565] mb-4">
            Full-Stack Software Developer
          </h3>
          <p className="text-[#6A7282] mb-5">
            I build fast, accessible, and beautifully designed web applications.
            With 3+ years of experience across the full stack, I turn complex
            problems into elegant digital products.
          </p>
          <div className="flex gap-4 mb-7">
            <Button className="font-semibold">View My Work</Button>
            <Button className="font-semibold" variant="outline">
              Contact Me
            </Button>
          </div>
          <div className="flex gap-6">
            <div>
              <h4 className="font-bold text-2xl text-[#101828]">20+</h4>
              <p className="text-sm text-[#6A7282]">Projects</p>
            </div>
            <div>
              <h4 className="font-bold text-2xl text-[#101828]">3+</h4>
              <p className="text-sm text-[#6A7282]">Years Exp.</p>
            </div>
            <div>
              <h4 className="font-bold text-2xl text-[#101828]">15+</h4>
              <p className="text-sm text-[#6A7282]">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:justify-end mb-20">
          <div className="relative w-80 h-80">
            <p className="text-[#364153] text-xs bg-white border-[0.6px] border-[#F3F4F6] rounded-xl py-2 px-3 shadow-lg w-fit absolute -top-3.5 -right-3.5">
              San Francisco, CA
            </p>
            <img
              src="images/photo.png"
              className="shadow-xl rounded-2xl"
              alt="Photo"
            />
            <p className="bg-theme text-white shadow-lg rounded-xl py-2 px-3 w-fit absolute -bottom-3.5 -left-3.5 font-semibold text-sm">
              Open to work
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
