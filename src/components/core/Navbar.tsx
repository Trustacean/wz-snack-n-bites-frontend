import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Main from "../../assets/Navbar/Main.png"
import CartIcon from "../../assets/Navbar/Cart.svg"

export default function Navbar() {
  return (
    <motion.div>
      <nav className={`w-full text-base font-nav text-xl bg-black/10 absolute z-10 h-16 px-12 z-30`}>
        <div className="h-full w-full flex gap-4">
          <div className={"basis-3/12 flex items-center justify-start"}>
            <Link to="/">
              <motion.img src={Main} className="h-12 mt-1 object-cover" />
            </Link>
          </div>
          <ul className="grow flex items-center mx-6">
            <NavButton text="Produk Kami" href="/menu" />
            <NavButton text="Kalender" href="/kalender" />
            <NavButton text="Tentang Kami" href="/tentang-kami" />
          </ul>
          <div className="basis-3/12 flex items-center justify-end gap-4">
            <Link to="/login">
              <div className="border-2 border-black rounded-lg">
                <motion.button className="px-4 py-1 font-semibold" whileHover={{ scale: 1.1 }}>
                  Masuk
                </motion.button>
              </div>
            </Link>
            <Link to="/keranjang">
              <motion.img src={CartIcon} className="h-8" whileHover={{ scale: 1.1 }} />
            </Link>
          </div>
        </div>
      </nav >
    </motion.div>
  )
}

type NavButtonProps = {
  text: string;
  href: string;
}

function NavButton(
  { text, href }: NavButtonProps
) {

  const textUnderlineVariant = {
    default: { width: "0%" },
    hover: { width: "100%" },
  }

  const textVariant = {
    default: { color: "#000000" },
    hover: { color: "#FFFFFF" },
  }

  return (
    <li className="grow flex justify-center mt-4">
      <Link to={href}>
        <motion.div className="lg:text-md flex items-end hover:items-start flex-col font-[900] tracking-[1.2px]" initial="default" whileHover="hover">
          <motion.p variants={textVariant}>
            {text}
          </motion.p>
          <motion.div className="h-1 bg-white" variants={textUnderlineVariant} />
        </motion.div>
      </Link>
    </li>
  )
}