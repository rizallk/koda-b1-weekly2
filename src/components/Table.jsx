// Table
function Table({ thead, tbody }) {
  return (
    <div className="overflow-x-auto rounded-2xl border-[0.6px] border-[#F3F4F6] shadow">
      <table className="w-full min-w-max">
        <thead>{thead}</thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
}

// Table Row
function Tr({ children, className = '' }) {
  return <tr className={`${className}`}>{children}</tr>;
}

// Table Head Cell
function Th({ children, className = '' }) {
  return (
    <th
      className={`py-4 px-5 bg-dark text-white text-left font-semibold text-sm ${className} `}
    >
      {children}
    </th>
  );
}

// Table Data (body) Cell
function Td({ children, className = '', ...rest }) {
  return (
    <td className={`py-4 px-5 text-sm ${className}`} {...rest}>
      {children}
    </td>
  );
}

export { Table, Tr, Th, Td };
