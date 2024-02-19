import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NextImage from "next/image";
import logo from "../images/logo1.png"

// import Image from "next/image";
// import logo from "../icons/logo.png"

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setIsMenuOpen(true);
    }

    const menuItems = [
        { label: "Home", href: "#home" },
        { label: "Shed catalog", href: "#sheds" },
        { label: "About us", href: "#about" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact us", href: "#contact" }
    ]
    
    return (
        <Navbar isBordered position="sticky" onMenuOpenChange={setIsMenuOpen}>
            
            <NavbarContent className="md:hidden" justify="center">
                <NavbarBrand>
                    <NextImage src={logo} width={48} alt="Logo of the company" />
                    <Link href="#home" color="foreground"><span className="font-bold text-[26px] pl-3 xxs:text-[14px] xs:text-[26px]">Shed Construction</span></Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="md:hidden " justify="end">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-8" justify="center">
                <NavbarBrand>
                    <NextImage src={logo} width={48} alt="Logo of the company" />
                    <Link href="#home" color="foreground"><span className="font-bold text-xl pl-3">Shed Construction</span></Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-8" justify="end">
                {menuItems.map((item, index) => (
                    <NavbarItem isActive={pathname == `${item.href}` ? true : false} key={index}>
                        <Link color="foreground" href={item.href} className="text-[18px]">
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link className="w-full" onClick={handleMenuClose} color="foreground" href={item.href} size="lg">{item.label}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
} 