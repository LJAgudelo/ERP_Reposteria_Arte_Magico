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
import { MdOutlineSupportAgent } from "react-icons/md";

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
              to="/proveedor"
              className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)]"
            >
              <MdOutlineSupportAgent className="text-[var(--createdLetter)]" />
              <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
                Proveedores
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/entrada"
              className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)]"
            >
              <MdOutlineInventory className="text-[var(--createdLetter)]" />
              <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
                Entrada Mercancia
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/empleados"
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
              to="/controlpersonal"
              className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)] "
            >
              <MdPeopleAlt className="text-[var(--createdLetter)]" />
              <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
                Control de personal
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/saldos"
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
              to="/egresos"
              className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdcoffe)] "
            >
              <GrMoney className="text-[var(--createdLetter)]" />
              <span className="flex-1 ms-3 whitespace-nowrap text-[var(--createdLetter)]">
                Egreseos
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/cotizacion"
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
              to="/recetas"
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
              to="/ventas"
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
              to="/tablero"
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
              to="/salir"
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
