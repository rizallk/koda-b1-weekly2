import Card from '../../../components/Card';

export default function Awards() {
  return (
    <div className="container mx-auto p-4 mt-11 mb-11">
      <h4 className="font-semibold text-xs text-theme mb-3">RECOGRITION</h4>
      <h2 className="font-bold text-3xl text-[#101828] mb-4">
        Awards & Honors
      </h2>
      <div className="w-12 h-1 bg-dark rounded-full mb-10"></div>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-[#101828] mb-3">
                Employee of the Month
              </p>
              <p className="font-semibold text-xs text-theme mb-3">
                TechCorp Inc.
              </p>
            </div>
            <div>
              <p className="font-medium text-xs text-[#99A1AF]">March 2024</p>
            </div>
          </div>
          <p className="text-sm text-[#6A7282]">
            Recognized for delivering the customer portal redesign ahead of
            schedule with zero post-launch bugs.
          </p>
        </Card>
        <Card>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-[#101828] mb-3">
                Best Overall Project
              </p>
              <p className="font-semibold text-xs text-theme mb-3">
                Bay Area CodeFest Hackathon
              </p>
            </div>
            <div>
              <p className="font-medium text-xs text-[#99A1AF]">
                November 2022
              </p>
            </div>
          </div>
          <p className="text-sm text-[#6A7282]">
            First place out of 48 teams for building a real-time food rescue
            coordination app in 24 hours.
          </p>
        </Card>
        <Card>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-[#101828] mb-3">Dean's List</p>
              <p className="font-semibold text-xs text-theme mb-3">
                UC Berkeley
              </p>
            </div>
            <div>
              <p className="font-medium text-xs text-[#99A1AF]">2021 & 2022</p>
            </div>
          </div>
          <p className="text-sm text-[#6A7282]">
            Achieved top academic standing in the College of Engineering for two
            consecutive academic years.
          </p>
        </Card>
        <Card>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-[#101828] mb-3">
                Outstanding Senior Project
              </p>
              <p className="font-semibold text-xs text-theme mb-3">
                CS Department, UC Berkeley
              </p>
            </div>
            <div>
              <p className="font-medium text-xs text-[#99A1AF]">May 2023</p>
            </div>
          </div>
          <p className="text-sm text-[#6A7282]">
            Capstone project — an AI-assisted code review tool — recognized as
            the top project in the graduating class.
          </p>
        </Card>
      </div>
    </div>
  );
}
