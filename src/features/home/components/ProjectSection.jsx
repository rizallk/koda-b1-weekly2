import Badge from '../../../components/Badge';
import Button from '../../../components/Button';
import Card from '../../../components/Card';

export default function ProjectSection() {
  return (
    <div className="bg-[#F9FAFB] text-center py-20">
      <div className="container mx-auto p-4">
        <p className="font-semibold text-xs text-theme mb-3">MY WORK</p>
        <h2 className="font-bold text-4xl text-[#101828] mb-4">
          Featured Projects
        </h2>
        <p className="text-[#6A7282] mb-4">
          A selection of projects that showcase my skills across the full
          development stack.
        </p>
        <div className="w-12 h-1 bg-dark rounded-full mx-auto mb-10"></div>
        <div className="grid lg:grid-cols-3 gap-5 text-left mb-8">
          <Card img="images/shopease.png">
            <h3 className="font-semibold text-lg text-[#101828] mb-3">
              ShopEase
            </h3>
            <p className="text-sm text-[#6A7282] mb-4">
              A full-featured e-commerce platform with product catalog, cart
              management, and Stripe payment integration.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge text="React" />
              <Badge text="Node.js" />
              <Badge text="MongoDB" />
              <Badge text="Stripe" />
            </div>
          </Card>
          <Card img="images/taskflow.png">
            <h3 className="font-semibold text-lg text-[#101828] mb-3">
              TaskFlow
            </h3>
            <p className="text-sm text-[#6A7282] mb-4">
              A drag-and-drop task manager with real-time collaboration, team
              workspaces, and deadline tracking.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge text="React" />
              <Badge text="TypeScript" />
              <Badge text="Firebase" />
            </div>
          </Card>
          <Card img="images/chatspace.png">
            <h3 className="font-semibold text-lg text-[#101828] mb-3">
              ChatSpace
            </h3>
            <p className="text-sm text-[#6A7282] mb-4">
              Real-time messaging platform with channels, direct messages, file
              sharing, and emoji reactions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge text="React" />
              <Badge text="Socket.io" />
              <Badge text="Express" />
              <Badge text="MongoDB" />
            </div>
          </Card>
        </div>
        <Button>View All Projects</Button>
      </div>
    </div>
  );
}
