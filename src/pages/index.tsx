import { Button, Card, CardBody, Input, Link, Textarea } from "@nextui-org/react";
import NextImage from "next/image";
import about from "../images/about.png"
import small from "../images/shedCatalog/small.png"
import medium from "../images/shedCatalog/medium.png"
import large from "../images/shedCatalog/large.png"
import xlarge from "../images/shedCatalog/xlarge.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
            label: "First name"
        },
        {
            type: "text",
            placeholder: "Last name",
            label: "Last name"
        },
        {
            type: "email",
            placeholder: "Email",
            label: "Email"
        },
        {
            type: "tel",
            placeholder: "Phone",
            label: "Phone"
        }
    ]
    
    return (
        <div className="scroll-smooth">
            {/* HERO section */}
            <div className="bg-[url('../images/hero.png')] bg-cover bg-center h-[90vh] text-center flex flex-col" id="home">
        
            </div>

            {/* ABOUT section */}
            <div className="flex flex-row justify-around align-middle p-8" id="about">
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
                    <p className="italic text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
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
                <div className="col-span-1 grid grid-rows-3 gap-5 align-middle m-auto text-center">
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className="fa-3x" />
                        <h4 className="text-[20px] font-black">Email Us</h4>
                        <Link href="mailto:armaxrenovation@gmail.com" showAnchorIcon isBlock>armaxrenovation@gmail.com</Link>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComments} className="fa-3x" />
                        <h4 className="text-[20px] font-black">Text Us</h4>
                        <Link href="sms:+14044165745" showAnchorIcon isBlock>404 416 5745</Link>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>   
    )
}
