import { useField } from "formik";

const Input = ({ id, type = "text", label, ...props }) => {
  const [field, { touched, error }] = useField(id);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        {label && (
          <label className="font-bold mb-2" htmlFor={id}>
            {label}
          </label>
        )}
        {touched && error && (
          <small className="font-bold text-tomato text-right">{error}</small>
        )}
      </div>
      <input
        className="p-4 border border-grey rounded-md invalid:border-2 invalid:border-tomato focus:invalid:outline-none focus:invalid:ring-2 focus:invalid:ring-tomato focus:invalid:ring-opacity-50"
        id={id}
        type={type}
        name={id}
        {...props}
        {...field}
      />
    </div>
  );
};

export default Input;
