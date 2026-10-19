import Card from '../../../components/Card';

export default function Certifications() {
  return (
    <div className="container mx-auto p-4 mt-11 mb-11">
      <h4 className="font-semibold text-xs text-theme mb-3">CREDENTIALS</h4>
      <h2 className="font-bold text-3xl text-[#101828] mb-4">Certifications</h2>
      <div className="w-12 h-1 bg-dark rounded-full mb-10"></div>
      <div className="grid lg:grid-cols-3 gap-6">
        <Card>
          <div className="flex gap-4">
            <div className="bg-[#FFF3EE] text-theme font-bold text-xs py-5 px-3 h-fit rounded-xl">
              AWS
            </div>
            <div>
              <p className="font-semibold text-[#101828] text-sm mb-1">
                AWS Certified Developer – Associate
              </p>
              <p className="font-medium text-xs text-theme mb-1">
                Amazon Web Services
              </p>
              <p className="text-xs text-[#99A1AF]">
                Dec 2023 · Valid until Dec 2026
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex gap-4">
            <div className="bg-[#FFF3EE] text-theme font-bold text-xs py-5 px-3 h-fit rounded-xl">
              GCP
            </div>
            <div>
              <p className="font-semibold text-[#101828] text-sm mb-1">
                Google Professional Cloud Developer
              </p>
              <p className="font-medium text-xs text-theme mb-1">
                Google Cloud
              </p>
              <p className="text-xs text-[#99A1AF]">
                Oct 2023 · Valid until Oct 2025
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex gap-4">
            <div className="bg-[#FFF3EE] text-theme font-bold text-xs py-5 px-3 h-fit rounded-xl">
              MDB
            </div>
            <div>
              <p className="font-semibold text-[#101828] text-sm mb-1">
                MongoDB Certified Developer Associate
              </p>
              <p className="font-medium text-xs text-theme mb-1">
                MongoDB Inc.
              </p>
              <p className="text-xs text-[#99A1AF]">
                Mar 2022 · Valid until Mar 2024
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
