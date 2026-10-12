const Tabs = ({ tabs, active, onChange }) => {
  return (
    <div className="flex">
      {tabs.map((tab, i) => {
        const isActive = active === tab.id;
        const corner = i === 0 ? "rounded-tl-xl" : i === tabs.length - 1 ? "rounded-tr-xl" : "";
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`flex flex-1 items-center justify-center gap-3 py-6 text-xl font-bold transition-colors ${corner} ${
              isActive ? "bg-[#f7f8fa] text-gray-900" : "bg-[#0d7894] text-white"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
