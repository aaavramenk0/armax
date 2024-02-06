import { Button, Card, CardBody, Input, Link, Textarea } from "@nextui-org/react";
import NextImage from "next/image";
import about from "../images/about.png"
import small from "../images/shedCatalog/small.png"
import medium from "../images/shedCatalog/medium.png"
import large from "../images/shedCatalog/large.png"
import xlarge from "../images/shedCatalog/xlarge.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    const shedCatalog = [
        {
            size: "Small",
            image: small,
            description: "Description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa nesciunt sed temporibus earum, voluptatum accusantium voluptatem",
            sizeDescription: "Up to 120 sq ft.",
            sizes: [
                "8ft x 10ft",
                "10ft x 10ft",
                "12ft x 10ft"
            ]
        },
        {
            size: "Medium",
            image: medium,
            description: "Description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa nesciunt sed temporibus earum, voluptatum accusantium voluptatem",
            sizeDescription: "120 - 250 sq ft.",
            sizes: [
                "10ft x 20ft",
                "12ft x 16ft",
                "12ft x 20ft"
            ]
        },
        {
            size: "Large",
            image: large,
            description: "Description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa nesciunt sed temporibus earum, voluptatum accusantium voluptatem",
            sizeDescription: "250 - 500 sq ft.",
            sizes: [
                "12ft x 24ft",
                "14ft x 20ft",
                "16ft x 20ft"
            ]
        },
        {
            size: "X-Large",
            image: xlarge,
            description: "Description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa nesciunt sed temporibus earum, voluptatum accusantium voluptatem",
            sizeDescription: "400+ sq ft.",
            sizes: [
                "16ft x 32ft",
                "16ft x 40ft",
                "16ft x 48ft"
            ]
        }
    ]

    const inputs = [
        {
            type: "text",
            placeholder: "First name",
            label: "First name",
            required: true
        },
        {
            type: "text",
            placeholder: "Last name",
            label: "Last name",
            required: true
        },
        {
            type: "email",
            placeholder: "Email",
            label: "Email",
            required: true
        },
        {
            type: "tel",
            placeholder: "Phone",
            label: "Phone",
            required: true
        }
    ]

    const socialLinks = [
        {
            href: "mailto:armaxrenovation@gmail.com",
            icon: faEnvelope,
            heading: "Email Us",
            description: "armaxrenovation@gmail.com"
        },
        {
            href: "sms:+14044165745",
            icon: faComments,
            heading: "Text Us",
            description: "404 416 5745"
        },
        {
            href: "https://wa.me/14044165745",
            icon: faWhatsapp,
            heading: "WhatsApp Us",
            description: "404 416 5745"
        }
    ]
    
    return (
        <div>
            {/* HERO section */}
            <div className="bg-[url('../images/hero.png')] bg-cover bg-center h-[90vh]" id="home">
                <div className="absolute top-[30vh] left-0 bg-black-rgba p-2 w-[45vw]">
                    <form action="submit" className="py-2 px-10">
                        <div className="flex flex-col">
                            <h2 className="text-white text-[50px] text-center font-[600] mb-5">Get your <span className="uppercase underline">free</span> estimate today!</h2>
                            <div className="flex justify-center gap-8 mb-5">
                                <Input
                                    type="text"
                                    name="firstName"
                                    size='lg'
                                    isRequired
                                    label="Full name"
                                    className="text-white"
                                    placeholder="Enter your first and last name"
                                />
                                <Input
                                    type="tel"
                                    name="phone"
                                    size='lg'
                                    isRequired
                                    label="Phone number"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <Textarea
                                label="Message"
                                placeholder="Enter your message"
                                className="mb-3"
                                size="lg"
                            />
                            <Button
                                type="submit"
                                className="m-auto"
                                color="primary"
                                variant="solid"
                                size="lg"
                            >
                                Get Free Estimate
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="text-right pt-[5vh] pr-[150px]">
                    <h1 className="z-10 text-black text-[60px] font-bold">Amazing sheds <br />for your backyard!</h1>
                    {/* <p className="z-10 text-white text-[24px] italic">New life for your space</p> */}
                </div>
            </div>

            {/* ABOUT section */}
            <div className="flex flex-row justify-around align-middle p-8 pt-12" id="about">
                <div className="max-w-[45%] ">
                    <h3 className="text-center font-black text-[45px] mb-8">About Us</h3>
                    <p className="text-[24px] font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto suscipit corporis itaque ex quod expedita corrupti cumque fugit voluptatibus voluptatum similique, debitis pariatur ea odit! Sed natus vitae veritatis est. <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quasi hic voluptas ipsum illum expedita dolores rem quibusdam esse dicta ea reprehenderit sint est ipsam eligendi architecto alias, animi assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas architecto facilis consequuntur nobis sed rem dolores non adipisci incidunt placeat, minus velit soluta accusamus numquam, magni mollitia alias ea?</p>
                </div>
                <div className="max-w-[45%]">
                    <NextImage src={about} alt="Picture for About Us section" width={600} height={600}/>
                </div>
            </div>
            
            {/* SHED CATALOG section */}
            <div className="p-8 grid grid-cols-4 gap-12 justify-items-center place-content-around" id="sheds">
                {shedCatalog.map((shed, index) => (
                    <Card className="border-none" key={index}>
                        <NextImage className="object-cover" src={shed.image} width={500} height={500} alt="Card Image" />
                        <CardBody>
                            <h6 className="font-bold">{shed.size}</h6>
                            <p className="italic">{shed.sizeDescription}</p>
                            <p className="my-3">{shed.description}</p>
                            <p>Popular {shed.size} sheds sizes</p>
                            <ul className="list-disc pl-8">
                                {shed.sizes.map((size, index) => (
                                    <li key={index}>{size}</li>
                                ))}
                            </ul>
                            <Button as={Link} color="primary" className="m-5">Buy This Shed</Button>
                        </CardBody>
                    </Card>  
                ))}
            </div>

            {/* CONTACT section */}
            <div className="grid grid-cols-4 gap-5" id="contact">
                <div className="col-span-3 text-center">
                    <h3 className="text-[35px]">Contact Us</h3>
                    <p className="italic text-[20px]">Leave your contact information and message here and we will reach you back within next 24 hours!</p>
                    <form action="submit" className="p-8 px-20">
                        <div className="grid grid-cols-2 gap-x-16 gap-5">
                            {inputs.map((input, index) => (
                                <Input
                                    key = { index }
                                    type = { input.type }
                                    placeholder = { input.placeholder }
                                    label = { input.label }
                                    labelPlacement="outside"
                                    variant="bordered"
                                    size="lg"
                                    isRequired={ input.required }
                                />  
                            ))}
                        </div>
                        <Textarea
                            variant="bordered"
                            placeholder="Write your message"
                            label="Message"
                            labelPlacement="outside"
                            className="text-left mt-5"
                            size="lg"
                        />
                        <Button as={Link} type="submit" className="mt-5" color="primary" variant="solid">Send message</Button>
                    </form>
                </div>
                <div className="col-span-1 grid grid-rows-3 gap-10 align-middle m-auto text-center">
                    {socialLinks.map((link, index) => (
                        <div key={index}>
                            <a href={link.href}><FontAwesomeIcon icon={link.icon} className="fa-3x" /></a>
                            <a href={link.href}><h4 className="text-[20px] font-black">{link.heading}</h4></a>
                            <Link href={link.href} showAnchorIcon isBlock>{link.description}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>   
    )
}
