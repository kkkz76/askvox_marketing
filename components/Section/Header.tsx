"use client";
import Link from "next/link";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";

interface NavLinkProps {
  title: string;
}

const NavLink = ({ title }: NavLinkProps) => (
  <LinkScroll to={""}>{title}</LinkScroll>
);

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <Link className="lg:hidden flex-1 cursor-pointer z-2" href={"/"}>
          <Image
            src={"/images/xora.svg"}
            alt="xora_logo"
            width={115}
            height={55}
          />
        </Link>
        <div className="w-full border-2 border-amber-400">
          <nav>
            <ul className="flex max-lg:block max-lg:px-12">
              <li className="nav-li">
                <NavLink title="features" />
                <div className="dot" />
                <NavLink title="Pricing" />
              </li>
              <li className="nav-logo">
                <LinkScroll to="">
                  <Image
                    src={"/images/xora.svg"}
                    alt="xora_logo"
                    width={160}
                    height={55}
                  />
                </LinkScroll>
              </li>
              <li className="nav-li">
                <NavLink title="faq" />
                <div className="dot" />
                <NavLink title="download" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
