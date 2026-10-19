import Badge from '../../../components/Badge';
import { Table, Td, Th, Tr } from '../../../components/Table';
import { professionalExperience } from '../../../utils/professionalExperience';

export default function ProfessionalExperience() {
  return (
    <div className="container mx-auto p-4 mt-11 mb-11">
      <h4 className="font-semibold text-xs text-theme mb-3">WORK HISTORY</h4>
      <h2 className="font-bold text-3xl text-[#101828] mb-4">
        Professional Experience
      </h2>
      <div className="w-12 h-1 bg-dark rounded-full mb-10"></div>
      <Table
        thead={
          <Tr>
            <Th>Company</Th>
            <Th>Position</Th>
            <Th>Duration</Th>
            <Th>Location</Th>
            <Th>Type</Th>
          </Tr>
        }
        tbody={professionalExperience.map((v, i) => {
          return (
            <Tr key={i}>
              <Td className="font-medium text-[#101828]">{v.company}</Td>
              <Td className="text-[#4A5565]">{v.position}</Td>
              <Td className="text-[#6A7282]">{v.duration}</Td>
              <Td className="text-[#6A7282]">{v.location}</Td>
              <Td>
                <Badge variant="theme" text={v.type} />
              </Td>
            </Tr>
          );
        })}
      />
    </div>
  );
}
