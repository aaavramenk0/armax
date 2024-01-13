import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import logo from "../icons/logo.png"
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact us", href: "/contact" },
    ]
    
    return (
        <Navbar isBordered className="bg-amber-500">
            <NavbarContent justify="start">
                <NavbarMenuToggle className="lg:hidden" />
                <NavbarBrand> 
                    <Link href="/" color="foreground">
                        {/* <Image width={48} src={ logo } alt="ArMax Logo" /> */}
                        <p className="text-[20px] font-bold">ArMax Renovation LLC</p>
                    </Link> 
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-8" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem isActive={pathname == `${item.href}` ? true : false} key={index}>
                        <Link color="foreground" href={item.href} className="text-[20px]">
                            {item.label}
                        </Link>
                    </NavbarItem>   
                ))}
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify="end">
                <NavbarItem >
                    <Button className="text-[16px] font-bold" as={Link} color="primary" href="/contact" variant="solid">
                        Get a quote
                    </Button>
                </NavbarItem>
            </NavbarContent>
            
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem isActive={pathname == `${item.href}` ? true : false} key={index}>
                        <Link className="w-full" color="foreground" size="lg">{item.label}</Link>
                    </NavbarMenuItem>    
                ))}
            </NavbarMenu>
        </Navbar>
    );
} 