import { Link } from 'react-router';

export default function Information() {
  return (
    <section>
      <div className="p-6 bg-[#F9FAFB] border-[0.6px] border-[#F3F4F6] rounded-xl mb-6">
        <p className="font-semibold text-[#101828] mb-4">Office Information</p>
        <div className="flex items-start mb-4">
          <div className="w-9">📍</div>
          <div>
            <p className="font-medium text-sm text-[#364153]">Location</p>
            <p
              className="text-[#
            
            ] text-sm"
            >
              San Francisco, CA 94105
            </p>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="w-9">✉️</div>
          <div>
            <p className="font-medium text-sm text-[#364153]">Email</p>
            <Link
              to="mailto:alex.carter@email.com"
              className="text-theme text-sm"
            >
              alex.carter@email.com
            </Link>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="w-9">📞</div>
          <div>
            <p className="font-medium text-sm text-[#364153]">Phone</p>
            <p className="text-[#364153] text-sm">+1 (415) 555-0192</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-9">🕒</div>
          <div>
            <p className="font-medium text-sm text-[#364153]">Hours</p>
            <p className="text-[#364153] text-sm">Mon - Fri, 9 AM - 6 PM PST</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#F9FAFB] border-[0.6px] border-[#F3F4F6] rounded-xl mb-6">
        <p className="font-semibold text-[#101828] mb-4">Find Me Online</p>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium text-sm text-[#364153]">Github</p>
          <p className="text-xs text-[#99A1AF]">@alexcarter →</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium text-sm text-[#364153]">LinkedIn</p>
          <p className="text-xs text-[#99A1AF]">Alex Carter →</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium text-sm text-[#364153]">Twitter</p>
          <p className="text-xs text-[#99A1AF]">@alexcodes →</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium text-sm text-[#364153]">Dev.to</p>
          <p className="text-xs text-[#99A1AF]">@alexcarter →</p>
        </div>
      </div>

      <div className="p-8 bg-[#FFF7ED] border-[0.6px] border-[#F3F4F6] rounded-xl flex justify-center items-center flex-col">
        <img src="icons/location.png" alt="Location" />
        <p className="font-semibold text-theme text-sm mb-1">
          San Francisco, CA
        </p>
        <p className="text-[#FF5F22B2] text-xs mb-4">United States</p>
        <p className="text-xs text-[#FFB86A]">37.7749° N, 122.4194° W</p>
      </div>
    </section>
  );
}
