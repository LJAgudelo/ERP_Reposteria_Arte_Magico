import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineInventory } from "react-icons/md";
import { TbCooker } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { MdPriceCheck } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

const Sidebar = () => {
  return (
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-56 lg:block bg-[var(--createdGreen)]">
        <div className="h-full px-2 py-3 overflow-hidden bg-[var(--createdGreen)]">
          <ul className="space-y-1 font-medium">
            <li>
              <Link to="/" className="flex items-center p-1  rounded-lg  ">
                <img src={logo} alt="Logo" className="w-45 rounded-sm" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)]">
                <MdOutlineInventory className="text-[var(--createdLetter)]" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
                               Entrada Mercancia
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)] "
              >
                <BsPersonWorkspace className="text-[var(--createdLetter)]" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
             
                  Empleados
                </span>
              </Link>
              </li>
              <li>
              <Link
                to="/"
                className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)] "
              >
                <MdPeopleAlt className="text-[var(--createdLetter)]" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
             
                  Mano de obra
                </span>
              </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)] "
                >
                  <MdOutlineInventory2 className="text-[var(--createdLetter)]" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
               
                    Saldos
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)] "
                >
                  <TbCooker className="text-[var(--createdLetter)]" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
               
                    Recetas
                  </span>
                </Link>
              </li>
          
            <li>
              <Link
                to="/"
                className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)] "
              >
                <GrMoney className="text-[var(--createdLetter)]" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
             
                  Costos indirectos{" "}
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 rounded-lg dark:text-black over:bg-green-700 "
              >
                <BsFillClipboardDataFill className="text-[var(--createdLetter)]" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
             
                  tablero
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)] "
              >
                <MdOutlineSell className="text-[var(--createdLetter)]" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
             
                  ventas
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)] "
              >
                <MdPriceCheck className="text-[var(--createdLetter)]" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
             
                  Cotización
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)] "
              >
                <MdLogout className="text-[var(--createdLetter)]" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
             
                  Salir
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
  );
};

export default Sidebar;
