const Button = ({ onClick, type = "button", to, ...props }) => {
  return (
    <button
      className="w-full p-4 text-white font-bold bg-darkSlateGrey rounded-md hover:bg-charcoalGrey"
      onClick={onClick}
      type={type}
      {...props}
    />
  );
};

export default Button;
