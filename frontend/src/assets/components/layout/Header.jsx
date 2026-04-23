import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[var(--createdPastel)] p-5">
        <div className="flex items-center justify-center mb-5">
          <h2 className="cookie-regular text-4xl text-[var(--createdGreen)] tracking-wide font-bold">
            Repostería Arte Magico
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
