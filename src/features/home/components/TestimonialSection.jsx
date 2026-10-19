import Card from '../../../components/Card';

export default function TestimonialSection() {
  return (
    <div className="text-center container mx-auto py-20 p-4">
      <p className="font-semibold text-xs text-theme mb-3">TESTIMONIALS</p>
      <h2 className="font-bold text-4xl text-[#101828] mb-4">
        What Clients Say
      </h2>
      <p className="text-[#6A7282] mb-4">
        Feedback from people I've had the pleasure of working with.
      </p>
      <div className="w-12 h-1 bg-dark rounded-full mx-auto mb-10"></div>
      <div className="grid lg:grid-cols-3 gap-5 text-left">
        <Card variant="var2">
          <p className="italic text-sm text-[#4A5565] mb-5">
            “Alex delivered our e-commerce platform ahead of schedule. The code
            quality was outstanding and the UI exceeded our expectations.”
          </p>
          <div className="flex items-center gap-3">
            <img src="images/sarah.png" alt="Sarah" />
            <div>
              <p className="font-semibold text-[#101828]">Sarah Johnson</p>
              <p className="text-xs text-[#6A7282]">CEO, BrightShop Inc.</p>
            </div>
          </div>
        </Card>
        <Card variant="var2">
          <p className="italic text-sm text-[#4A5565] mb-5">
            “Working with Alex was a pleasure. They understood our requirements
            immediately and brought creative solutions to complex problems.”
          </p>
          <div className="flex items-center gap-3">
            <img src="images/michael.png" alt="Sarah" />
            <div>
              <p className="font-semibold text-[#101828]">Michael Chen</p>
              <p className="text-xs text-[#6A7282]">CTO, Velocity Labs</p>
            </div>
          </div>
        </Card>
        <Card variant="var2">
          <p className="italic text-sm text-[#4A5565] mb-5">
            “Alex transformed our outdated website into a modern, responsive
            platform. Traffic increased 40% within the first month of launch.”
          </p>
          <div className="flex items-center gap-3">
            <img src="images/sarah.png" alt="Sarah" />
            <div>
              <p className="font-semibold text-[#101828]">Emily Rodriguez</p>
              <p className="text-xs text-[#6A7282]">
                Marketing Director, Apex Digital
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
