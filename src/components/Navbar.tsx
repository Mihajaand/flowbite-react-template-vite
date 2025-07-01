import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
} from "flowbite-react";

import ztLogo from "../assets/logo/zebutech-logo.png";
export function NavbarComponent() {

  return (
    <div className="">
      <Navbar fluid >
        <NavbarBrand href="https://flowbite-react.com">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Logo CMS Zebutech
          </span>
          <img className="h-14 aspect-auto" src={ztLogo} alt="logo ZT" />
        </NavbarBrand>
        <div className="flex border-l-2 border-l-gray-400 p-2 md:order-2">
          <div className="flex flex-row gap-1 justify-center items-center">
            <Button className="cursor-pointer w-1 h-4 text-gray-500 dark:text-gray-900 dark:bg-gray-100 bg-white border-1 border-gray-400 hover:bg-gray-100! font-bold">EN</Button>
            <Button className="cursor-pointer w-1 h-4 text-gray-500 dark:text-gray-900 dark:bg-gray-100 bg-white border-1 border-gray-400 hover:bg-gray-100! font-bold">FR</Button>
            <DarkThemeToggle className="cursor-pointer " />
          </div>

          <NavbarToggle />
        </div>
        <NavbarCollapse className="min-h-6">
          <NavbarLink href="#" active className="hover:border-b-2 dark:hover:hover:border-b-white border-b-gray-400 duration-75">Home</NavbarLink>
          <NavbarLink href="#" className="hover:border-b-2 dark:hover:hover:border-b-white border-b-gray-400 duration-75 ">Group</NavbarLink>
          <NavbarLink href="#" className="hover:border-b-2 dark:hover:hover:border-b-white border-b-gray-400 duration-75">Brands</NavbarLink>
          <NavbarLink href="#" className="hover:border-b-2 dark:hover:hover:border-b-white border-b-gray-400 duration-75">Hotel Developement</NavbarLink>
          <NavbarLink href="#" className="hover:border-b-2 dark:hover:hover:border-b-white border-b-gray-400 duration-75">Careers</NavbarLink>
          <NavbarLink href="#" className="hover:border-b-2 dark:hover:hover:border-b-white border-b-gray-400 duration-75">Commitment</NavbarLink>
          <NavbarLink href="#" className="hover:border-b-2 dark:hover:hover:border-b-white border-b-gray-400 duration-75">Finance</NavbarLink>
          <NavbarLink href="#" className="hover:border-b-2 dark:hover:hover:border-b-white border-b-gray-400 duration-75">News & Media</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
