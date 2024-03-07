import { Accordion, AccordionItem, Button, Input, Link, Modal, ModalBody, ModalContent, ModalHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import NextImage from "next/image";
import small from "../images/shedCatalog/small1.png"
import medium from "../images/shedCatalog/medium1.png"
import large from "../images/shedCatalog/large1.png"
import heroImage from "../images/heroSection/hero1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDollarSign, faHouseCircleCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import Form from "@/components/Form";

export default function Home() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    
    const shedCatalog = [
        {
            size: "Compact Classic (6 ft x 8 ft)",
            image: small,
            price: "$1850"
        },
        {
            size: "Square Classic (8 ft x 8 ft)",
            image: medium,
            price: "$2150"
        },
        {
            size: "Large Classic (8 ft x 10 ft)",
            image: large,
            price: "$2490"
        }
    ]

    const socialLinks = [
        {
            href: "sms:+14044165745",
            icon: faComments,
            heading: "Text Us",
            description: "404 416 5745"
        },
        {
            href: "mailto:armaxrenovation@gmail.com",
            icon: faEnvelope,
            heading: "Email Us",
            description: "armaxrenovation@gmail.com"
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
            <section className="bg-white" id="home">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 xl:gap-0 lg:pt-16 lg:pb-5 lg:grid-cols-12 ">
                {/* <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-primary-300"> */}
                    <div className="mr-auto place-self-center lg:col-span-6 xl:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl text-heading font-semibold tracking-tight leading-none md:text-6xl">Welcome to the world of sheds!</h1>
                        <p className="max-w-2xl mb-6 text-lg text-subheading lg:mb-8 md:text-xl lg:text-2xl">Don't overpay - Make the right decision by choosing us and get your shed ready to use with the lowest price</p> <p className="hidden">Shed should be ready to use</p>
                        
                        <Button as={Link} onPress={onOpen} className="m-auto inline-flex items-center justify-center px-10 py-5 text-xl text-center font-semibold text-white rounded-lg bg-red-700 md:text-2xl md:px-10 md:py-8">Message us</Button>
                    </div>   
                    <div className="hidden lg:mt-0 lg:col-span-6 xl:col-span-5 lg:flex">
                        <NextImage src={heroImage} alt="Shed image" className="rounded-xl"/>
                    </div>
                </div>
            </section>
            

            {/* SHED CATALOG section */}
            <section className="bg-white" id="sheds">
                <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:py-8">
                    <div className="mx-auto max-w-screen-xl mb-8">
                        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-heading md:text-5xl lg:text-center">Shed Catalog</h2>
                        <p className="text-lg text-subheading sm:text-xl lg:text-2xl lg:text-center">Our sheds provide everything you need to store your belongings and are the perfect solution for those who value functionality</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {shedCatalog.map((shed, index) => (
                            <div key={index} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                                <NextImage src={shed.image} alt={`${shed.size} shed image`} className="mb-4 rounded-lg my-auto" />
                                <h3 className="text-2xl font-semibold">{shed.size}</h3>
                                <div className="flex justify-center items-baseline my-5">
                                    <span className="mr-2 text-4xl font-semibold text-red-600">{shed.price}</span>
                                </div>
                                <ul role="list" className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Weather-resistant materials</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Delivery & Setup included</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Custom color selection</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Free maintenance services</span>
                                    </li>
                                </ul>
                                <Button as={Link} onPress={onOpen} className="text-white bg-red-700 font-medium rounded-lg text-xl px-3 py-2 text-center mt-auto">Message us</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT section */}
            <section className="bg-white" id="about">
                <div className="pt-8 px-4 mx-auto max-w-screen-xl">
                    <div className="max-w-screen-lg mb-8">
                        <h2 className="mb-4 text-3xl tracking-tight font-semibold text-heading md:text-5xl">ArMax Renovation - We are building trust, not only sheds</h2>
                        <p className="text-subheading text-lg lg:text-2xl">Our mission is to inspire our customers by making your life more comfy and better. We always serve every customer in the unique way. We guarantee quality out products and provide complementary maintenance</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2  md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center mx-auto items-center mb-4 w-20 h-20 rounded-full bg-red-200">
                                <FontAwesomeIcon icon={faHouseCircleCheck} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-2xl font-semibold text-center">Personalized Attention for Every Customer</h3>
                            <p className="text-subheading text-lg">We understand that every customer has a unique story and specific requirements. Our team takes the time to listen to your needs, ensuring that each project reflects your personality and lifestyle</p>
                        </div>
                        <div >
                            <div className="flex justify-center mx-auto items-center mb-4 w-20 h-20 rounded-full bg-red-200">
                                <FontAwesomeIcon icon={faDollarSign} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-2xl font-semibold text-center">Committed to Quality and Affordability</h3>
                            <p className="text-subheading text-lg">Understanding the value of your hard-earned money, we provide comprehensive services that include not only the construction of your new shed but also ongoing maintenance and the flexibility of moving your shed within your backyard</p>
                        </div>
                        {/* <div>
                            <div className="flex justify-center mx-auto items-center mb-4 w-20 h-20 rounded-full bg-red-200">
                                <FontAwesomeIcon icon={faUsers} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-2xl font-semibold text-center">A Guarantee of Excellence: Our 3-Year Warranty</h3>
                            <p className="text-subdheading text-lg">We stand proudly behind our work. This commitment is exemplified by our 3-year warranty on all our products and services. It's not just a warranty - it's a promise of our dedication to excellence and your satisfaction</p>
                        </div> */}
                    </div>
                    <div className="mt-12" id="sizes">
                        <h2 className="mb-7 text-3xl font-semibold tracking-tight text-heading md:text-5xl lg:text-center">Shed Sizes</h2>
                        <Table isStriped aria-label="Shed sizes and price table">
                            <TableHeader>
                                <TableColumn className="text-md xl:text-xl bg-red-200 text-heading"> SIZE </TableColumn>
                                <TableColumn className="text-md xl:text-xl bg-red-200 text-heading"> PRICE </TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1"> 
                                    <TableCell className="text-md xl:text-xl">6ft x 8ft</TableCell>
                                    <TableCell className="text-md xl:text-xl">$1850</TableCell>
                                </TableRow>
                                <TableRow key="2"> 
                                    <TableCell className="text-md xl:text-xl">8ft x 8ft</TableCell>
                                    <TableCell className="text-md xl:text-xl">$2150</TableCell>
                                </TableRow>
                                <TableRow key="3"> 
                                    <TableCell className="text-md xl:text-xl">8ft x 10ft</TableCell>
                                    <TableCell className="text-md xl:text-xl">$2490</TableCell>
                                </TableRow>
                                <TableRow key="4"> 
                                    <TableCell className="text-md xl:text-xl">8ft x 12ft</TableCell>
                                    <TableCell className="text-md xl:text-xl">$2790</TableCell>
                                </TableRow>
                                <TableRow key="5"> 
                                    <TableCell className="text-md xl:text-xl">10ft x 10ft</TableCell>
                                    <TableCell className="text-md xl:text-xl">$2790</TableCell>
                                </TableRow>
                                <TableRow key="6"> 
                                    <TableCell className="text-md xl:text-xl">10ft x 14ft</TableCell>
                                    <TableCell className="text-md xl:text-xl">$3090</TableCell>
                                </TableRow>
                                <TableRow key="7"> 
                                    <TableCell className="text-md xl:text-xl">10ft x 16ft</TableCell>
                                    <TableCell className="text-md xl:text-xl">$3690</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div className="text-center py-10 px-5 my-10 border border-grey-200 shadow  rounded-lg">
                        <h2 className="mb-4 text-4xl tracking-tight font-semibold text-heading md:text-5xl">Get your <span className="text-red-700 font-small-caps">FREE</span> shed estimate today!</h2>
                        <p className="text-subheading text-lg sm:text-xl  lg:text-2xl">Experience quality and style with our durable sheds. Perfect for storage, work, or relaxation. Join our community of happy customers. Make the most of your backyard today!</p> 
                        <Link as={Button} onPress={onOpen} type="submit" color="danger" isBlock className="text-md text-white px-10 bg-red-700 font-medium rounded-lg md:text-2xl md:px-10 md:py-8 text-center m-auto mt-5">Message us</Link>
                    </div>
                </div>
            </section>

            
            {/* FAQ section */}
            <section className="bg-white" id="faq">
                <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                    <h2 className="mb-8 text-3xl text-center tracking-tight font-semibold text-heading md:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid pt-8 text-left border-t gap-4 border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <Accordion variant="bordered"> 
                            <AccordionItem key="1" aria-label="Accordion 1" title="How long does it take to build and install a shed?">
                                The timeline for building and installing a shed can vary depending on the complexity of the design and the level of customization. Typically, a shed can be built and installed within 1-3 days from the date of order.
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Do you provide warranties on your sheds?">
                                Absolutely. We stand by the quality of our work and offer a warranty that covers all the defects. The length of the warranty is 3 years.
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Are your sheds weather-resistant?">
                                Yes, all of our sheds are constructed with high-quality materials that are chosen for their durability and resistance to weather. We also apply protective finishes to guard against the elements.
                            </AccordionItem>
                        </Accordion>
                        <Accordion variant="bordered">
                            <AccordionItem key="4" aria-label="Accordion 4" title="Do I need a permit to install a shed on my property?">
                                Permits are not required to install a shed on your property. 
                            </AccordionItem>    
                            <AccordionItem key="5" aria-label="Accordion 5" title="How can I get a quote for a shed?">
                                You can get a quote by contacting us directly through our website or by phone. We'll discuss your needs, preferences, and the specifics of your property to provide you with a detailed estimate.
                            </AccordionItem>  
                            <AccordionItem key="6" aria-label="Accordion 6" title="What are the possible sizes and prices of the sheds that you can build?">
                                <Table removeWrapper aria-label="Shed sizes and price table">
                                    <TableHeader>
                                        <TableColumn className="text-md"> SIZE </TableColumn>
                                        <TableColumn className="text-md"> PRICE </TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow key="1"> 
                                            <TableCell className="text-md">6ft x 8ft</TableCell>
                                            <TableCell className="text-md">$1850</TableCell>
                                        </TableRow>
                                        <TableRow key="2"> 
                                            <TableCell className="text-md">8ft x 8ft</TableCell>
                                            <TableCell className="text-md">$2150</TableCell>
                                        </TableRow>
                                        <TableRow key="3"> 
                                            <TableCell className="text-md">8ft x 10ft</TableCell>
                                            <TableCell className="text-md">$2490</TableCell>
                                        </TableRow>
                                        <TableRow key="4"> 
                                            <TableCell className="text-md">8ft x 12ft</TableCell>
                                            <TableCell className="text-md">$2790</TableCell>
                                        </TableRow>
                                        <TableRow key="5"> 
                                            <TableCell className="text-md">10ft x 10ft</TableCell>
                                            <TableCell className="text-md">$2790</TableCell>
                                        </TableRow>
                                        <TableRow key="6"> 
                                            <TableCell className="text-md">10ft x 14ft</TableCell>
                                            <TableCell className="text-md">$3090</TableCell>
                                        </TableRow>
                                        <TableRow key="7"> 
                                            <TableCell className="text-md">10ft x 16ft</TableCell>
                                            <TableCell className="text-md">$3690</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
                </section>


            {/* CONTACT section */}
            <section className="bg-white" id="contact">
                {/* FORM div */}
                <Form />

                <div className="max-w-screen-lg mb-4 md:flex md:justify-around md:align-middle md:m-auto md:mb-6 text-center">
                    {socialLinks.map((link, index) => (
                        <div key={index}>
                            <a href={link.href} target="blank"><FontAwesomeIcon icon={link.icon} className="fa-4x" /></a>
                            <a href={link.href} target="blank"><h4 className="text-2xl font-semibold font-heading">{link.heading}</h4></a>
                            <Link href={link.href} target="blank" color="danger" className="mb-4 text-xl font-semibold text-red-600" isBlock showAnchorIcon>{link.description}</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal window */}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" className="pb-7" >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Send Message</ModalHeader>
                    <ModalBody>
                        <Button as={Link} color="primary" target="blank" startContent={<FontAwesomeIcon icon={faComments} />} href="sms:+14044165745" className="text-lg font-bold text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300">Text us</Button>
                        <Button as={Link} color="danger" target="blank" startContent={<FontAwesomeIcon icon={faEnvelope} />} href="mailto:armaxrenovation@gmail.com" className="text-lg font-bold text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300">Email us</Button>
                        <Button as={Link} color="success" target="blank" startContent={<FontAwesomeIcon icon={faWhatsapp} />} href="https://wa.me/14044165745" className="text-lg font-bold text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300">WhatsApp</Button>        
                    </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>   
    )
}