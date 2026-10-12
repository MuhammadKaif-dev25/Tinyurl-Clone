export const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-lg text-gray-900 placeholder-gray-500 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/30";

const FormField = ({ id, label, icon, required, hint, children }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-3 flex items-center gap-3 text-xl font-bold text-gray-900">
        {icon}
        {label}
        {required && <span className="text-red-800">*</span>}
      </label>
      {children}
      {hint && <p className="mt-2 text-sm text-gray-600">{hint}</p>}
    </div>
  );
};

export default FormField;
