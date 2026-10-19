import Badge from '../../../components/Badge';

export default function AboutSection() {
  return (
    <section className="container mx-auto p-4 my-17">
      <div className="grid lg:grid-cols-2">
        <div className="flex justify-center items-center">
          <img
            src="images/photo.png"
            className="rounded-2xl shadow-lg w-[288px] h-auto mb-13 lg:mb-0"
            alt="Foto"
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl text-[#101828] mb-4">
            Building the web, one line at a time.
          </h2>
          <p className="text-[#6A7282] mb-4">
            I'm Alex Carter, a full-stack software developer based in San
            Francisco, CA. I graduated from UC Berkeley with a B.S. in Computer
            Science in 2023 and have been building web products professionally
            ever since.
          </p>
          <p className="text-[#6A7282] mb-4">
            My stack spans React and TypeScript on the frontend, Node.js and
            Python on the backend, and PostgreSQL and MongoDB for data. I care
            deeply about performance, accessibility, and writing code that my
            future self won't hate.
          </p>
          <p className="text-[#6A7282] mb-7">
            When I'm not coding, you'll find me rock climbing at the local gym,
            experimenting with pour-over coffee, or reading science fiction. I'm
            actively looking for my next challenge.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge text="San Francisco, CA" />
            <Badge text="Open to Roles" />
            <Badge text="CS, UC Berkeley" />
          </div>
        </div>
      </div>
    </section>
  );
}
