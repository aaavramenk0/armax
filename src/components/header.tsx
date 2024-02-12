import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { usePathname } from "next/navigation";

// import Image from "next/image";
// import logo from "../icons/logo.png"

export default function Header() {
    const pathname = usePathname();

    const menuItems = [
        { label: "Home", href: "#home" },
        { label: "About us", href: "#about" },
        { label: "Shed catalog", href: "#sheds" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact us", href: "#contact" }
    ]
    
    return (
        <Navbar isBordered position="sticky">
            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>
            <NavbarContent className="md:hidden" justify="center">
                <NavbarBrand>
                    {/* <Image src={logo} width={48} alt="Logo of the company"></Image> */}
                    <Link href="#home" color="foreground"><span className="font-bold text-[18px] pl-3">ArMax Renovation</span></Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-8" justify="center">
                <NavbarBrand>
                    {/* <Image src={logo} width={48} alt="Logo of the company"></Image> */}
                    <Link href="#home" color="foreground"><span className="font-bold text-xl pl-3">ArMax Renovation</span></Link>
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
                        <Link className="w-full" color="foreground" href={item.href} size="lg">{item.label}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
} 