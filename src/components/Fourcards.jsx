

const Fourcard = () => {
  const stats = [
    { title: 'Pry 1 Highest', value: '70%', description: 'Overall attendance rate' },
    { title: '', value: '96', description: 'Total number of staff' },
    { title: '', value: '90', description: 'Active Staff' },
    { title: '', value: '6', description: 'Staff on Leave' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 w-[320px] h-[310px] text-gray-900">
      {stats.map((stat, index) => (
        <div key={index} className="px-4 pt-8 pb-4 border rounded shadow-sm text-center">
          <h2 className="text-[10px] text-gray-400">{stat.title}</h2>
          <p className="text-xl font-bold mb-4">{stat.value}</p>
          <p className="text-[9px] font-bold">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Fourcard;
