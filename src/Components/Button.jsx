const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat  rounded-xl bg-coral-red text-lg leading-none border-coral-red  text-white  ">
      {label}
      {iconURL && (
        <img
          className="ml-2 rounded-full w-5 h-5 bg-orange-400"
          src={iconURL}
          alt="arrow r}ight icon"
        />
      )}
    </button>
  );
};

export default Button;
