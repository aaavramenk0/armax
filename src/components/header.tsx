import { Button, Link, LinkIcon, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import logo from "../icons/logo.png"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faMessage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact us", href: "/contact" },
    ]
    
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center pt-10 lg:py-10 lg:gap-44  bg-amber-500" >
                <div>
                    <p className="text-center text-[32px] sm:text-[48px] md:text-[60px] lg:text-[48px] font-black">ArMax Renovation LLC</p>
                </div>
                <div className="flex flex-col text-center">
                    <p className="font-bold text-[28px]">Text Only</p>
                    <Button as={Link} href="tel:+14044165745" startContent={ <FontAwesomeIcon icon={faMessage} />} variant="light" className="text-[24px] sm:text-[30px] mb-5">404-416-5745</Button>
                    <Button className="bg-black text-white font-bold text-[20px]" endContent={<FontAwesomeIcon icon={faArrowRight} />} radius="none"  > Get A Quote</Button>
                </div>
                <div className="scale-[2.5] my-5 lg:hidden">
                    <Button variant="light" onPress={() => setIsOpen(!isOpen)}>{ isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars}/> }</Button>
                </div>
            </div>
        </div>
    );
} 