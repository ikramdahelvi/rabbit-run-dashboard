const Card = ({
  children,
  className = "",
  padding = "p-6",
}) => {
  return (
    <div
      className={`
        bg-white
        rounded-[8px]
        border
        border-[#D9DEE5]
        shadow-sm
        overflow-hidden
        w-full
        ${padding}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;