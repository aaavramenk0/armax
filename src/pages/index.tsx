import { Button, Card, CardBody, Input, Link, Textarea } from "@nextui-org/react";
import NextImage from "next/image";
import about from "../images/about.png"
import small from "../images/shedCatalog/small.png"
import medium from "../images/shedCatalog/medium.png"
import large from "../images/shedCatalog/large.png"
import xlarge from "../images/shedCatalog/xlarge.png"
import heroImage from "../images/heroSection/hero1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDollarSign, faHouseCircleCheck, faUsers } from "@fortawesome/free-solid-svg-icons";

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
            <section className="bg-white">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl">Amazing sheds for your backyard</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Transforming Your Backyard Dreams into Reality: Custom-Crafted Sheds Built with Precision and Care</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">Message us</a>
                    </div>   
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <NextImage src={heroImage} alt="Shed image"/>
                    </div>
                </div>
            </section>

            {/* ABOUT section */}
            {/* <div className="flex flex-row justify-around align-middle p-8 pt-12" id="about">
                <div className="max-w-[45%] ">
                    <h3 className="text-center font-black text-[45px] mb-8">About Us</h3>
                    <p className="text-[24px] font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto suscipit corporis itaque ex quod expedita corrupti cumque fugit voluptatibus voluptatum similique, debitis pariatur ea odit! Sed natus vitae veritatis est. <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quasi hic voluptas ipsum illum expedita dolores rem quibusdam esse dicta ea reprehenderit sint est ipsam eligendi architecto alias, animi assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas architecto facilis consequuntur nobis sed rem dolores non adipisci incidunt placeat, minus velit soluta accusamus numquam, magni mollitia alias ea?</p>
                </div>
                <div className="max-w-[45%]">
                    <NextImage src={about} alt="Picture for About Us section" width={600} height={600}/>
                </div>
            </div> */}
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-lg mb-8 lg:mb-16">
                        <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900">ArMax Renovation - Your Partner in Expanding Your Living Space</h2>
                        <p className="text-gray-500 sm:text-2xl">Here at ArMax Renovation, we understand that your home is more than just a place to live; it's where life happens. That's why we're dedicated to creating extra space in your home with our beautifully designed and expertly crafted sheds. Our mission is to bring joy and functionality to your backyard, enhancing your living experience.</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-20 lg:w-20">
                                <FontAwesomeIcon icon={faHouseCircleCheck} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Crafting Your Ideal Outdoor Spaces</h3>
                            <p className="text-gray-500">Our sheds are more than just structures; they are extensions of your home. We ensure that each shed is not only practical but also aesthetically pleasing, adding charm and character to your property. We believe in making spaces that are as beautiful as they are useful, spaces that bring joy to your everyday life.</p>
                        </div>
                        <div >
                            <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-20 lg:w-20">
                                <FontAwesomeIcon icon={faDollarSign} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Committed to Quality and Affordability</h3>
                            <p className="text-gray-500">Understanding the value of your hard-earned money, we provide comprehensive services that include not only the construction of your new shed but also ongoing maintenance and the flexibility of moving your shed within your backyard. This approach ensures that your investment continues to meet your needs over time, without extra hassle or expense.</p>
                        </div>
                        <div>
                            <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-20 lg:w-20">
                                <FontAwesomeIcon icon={faUsers} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Customer Service at Its Best</h3>
                            <p className="text-gray-500">At ArMax Renovation, exceptional customer service is not just a promise; it's our standard. We are committed to providing you with support whenever you need it, 24/7. Our team is always ready to assist, ensuring that your experience with us is as seamless and satisfying as the quality of our sheds.</p>
                        </div>
                        
                    </div>
                </div>
            </section>


            {/* SHED CATALOG section */}
            <div className="p-8 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center align-middle" id="sheds">
                {shedCatalog.map((shed, index) => (
                    <Card className="border-none"  key={index}>
                        <NextImage className="object-cover" src={shed.image} width={5000} height={5000} alt="Card Image" />
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
