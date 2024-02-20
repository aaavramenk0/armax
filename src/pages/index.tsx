import { Accordion, AccordionItem, Button, Card, CardBody, Checkbox, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@nextui-org/react";
import NextImage from "next/image";
import about from "../images/about.png"
import small from "../images/shedCatalog/small1.png"
import medium from "../images/shedCatalog/medium.png"
import large from "../images/shedCatalog/large.png"
import xlarge from "../images/shedCatalog/xlarge.png"
import heroImage from "../images/heroSection/hero1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDollarSign, faHouseCircleCheck, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    
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
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
                {/* <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-primary-300"> */}
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-6xl">Welcome to the world of comfy and stylish sheds!</h1>
                        <p className="max-w-2xl mb-6 text-lg text-black lg:mb-8 md:text-xl lg:text-2xl">Don't overpay - Make the right decision by choosing us and get your shed ready to use with the lowest price</p> <p className="hidden">Shed should be ready to use</p>
                        
                        {/* <Button as={Link} onPress={onOpen} href="#" className="m-auto inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">Message us</Button> */}
                    </div>   
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <NextImage src={heroImage} alt="Shed image" className="rounded-xl"/>
                    </div>
                </div>
                <div className="flex overflow-x-hidden">
                    <div className="py-0 animate-marquee whitespace-nowrap">
                        <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done for only $1950</span>
                        <span className="text-xl mx-4 text-primary-700 font-semibold">SALE</span>
                        <span className="text-xl mx-4 text-primary-700 font-semibold">SALE</span>
                        <span className="text-xl mx-4 text-primary-700 font-semibold">SALE</span>
                        <span className="text-xl mx-4 text-primary-700 font-semibold">SALE</span>
                    </div>

                    <div className="animate-marquee2 whitespace-nowrap">
                        <span className="text-xl mx-4 text-primary-700 font-semibold">SALE</span>
                        <span className="text-xl mx-4 text-primary-700 font-semibold">SALE</span>
                        <span className="text-xl mx-4 text-primary-700 font-semibold">SALE</span>
                        <span className="text-xl mx-4 text-primary-700 font-semibold">SALE</span>
                        <span className="text-xl mx-4 text-primary-700 font-semibold">SALE</span>
                    </div>
                </div>
            </section>
            

            {/* SHED CATALOG section */}
            <section className="bg-white" id="sheds">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md  mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-gray-900">Our shed options are perfect solutions for those who value functionality</h2>
                        <p className="text-lg text-black sm:text-xl">They provide everything you need to store your belongings at an affordable price</p>
                    </div>
                    <div className="flex overflow-x-hidden my-5">
                        <div className="py-0 animate-marquee whitespace-nowrap">
                            <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done for only $1950</span>
                            <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done for only $1950</span>
                            <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done for only $1950</span>
                            <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done for only $1950</span>
                            <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done for only $1950</span>
                        </div>

                        <div className="animate-marquee2 whitespace-nowrap">
                            <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done from only $1850</span>
                            <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done for only $1950</span>
                            <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done for only $1950</span>
                            <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done for only $1950</span>
                            <span className="text-xl mx-4 text-primary-700 font-semibold">SALE | Get your shed done for only $1950</span>
                        </div>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                            <NextImage src={small} alt="Small shed" className="mb-4 rounded-lg"/>
                            <h3 className="text-2xl font-semibold">Compact Classic (6 ft x 8 ft)</h3>
                            <div className="flex justify-center items-baseline my-5">
                                <span className="mr-2 text-4xl font-semibold text-red-600">$1850</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Sturdy construction with weather-resistant materials.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Customizable shelving and storage options.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Elegant design that complements any backyard.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Ideal for small families and urban homes</span>
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-red-700 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xl px-3 py-2 text-center">Get started</a>
                        </div>
                        
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <NextImage src={medium} alt="Small shed" className="mb-4 rounded-lg"/>
                            <h3 className="text-2xl font-semibold">Urban Organizer (6 ft x 10 ft)</h3>
                            <div className="flex justify-center items-baseline my-5">
                                <span className="mr-2 text-5xl font-extrabold">$99</span>
                            </div>
                            
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Enhanced interior space for versatile storage.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Optional window for natural light and ventilation.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Robust construction with a focus on aesthetic appeal.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Ideal for growing families</span>
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                        </div>
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <NextImage src={large} alt="Small shed" className="mb-4 rounded-lg"/>
                            <h3 className="text-2xl font-semibold">Garden Haven (8 ft x 10 ft)</h3>
                            <div className="flex justify-center items-baseline my-5">
                                <span className="mr-2 text-5xl font-extrabold">$499</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Spacious interior, suitable for a wide range of uses.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                  
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Customizable layout to suit various hobbies and storage needs.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Durable and stylish design.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Ideal for anyone needing a large, versatile outdoor space</span>
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT section */}
            <section className="bg-white" id="about">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-lg mb-8 lg:mb-16">
                        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 xl:text-5xl">ArMax Renovation - Your Partner in Expanding Your Living Space</h2>
                        <p className="text-gray-500 sm:text-xl lg:text-2xl">Here at ArMax Renovation, we understand that your home is more than just a place to live; it's where life happens. That's why we're dedicated to creating extra space in your home with our beautifully designed and expertly crafted sheds. Our mission is to bring joy and functionality to your backyard, enhancing your living experience.</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center mx-auto items-center mb-4 w-20 h-20 rounded-full bg-primary-100">
                                <FontAwesomeIcon icon={faHouseCircleCheck} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Crafting Your Ideal Outdoor Spaces</h3>
                            <p className="text-gray-500">Our sheds are more than just structures; they are extensions of your home. We ensure that each shed is not only practical but also aesthetically pleasing, adding charm and character to your property. We believe in making spaces that are as beautiful as they are useful, spaces that bring joy to your everyday life.</p>
                        </div>
                        <div >
                            <div className="flex justify-center mx-auto items-center mb-4 w-20 h-20 rounded-full bg-primary-100">
                                <FontAwesomeIcon icon={faDollarSign} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Committed to Quality and Affordability</h3>
                            <p className="text-gray-500">Understanding the value of your hard-earned money, we provide comprehensive services that include not only the construction of your new shed but also ongoing maintenance and the flexibility of moving your shed within your backyard. This approach ensures that your investment continues to meet your needs over time, without extra hassle or expense.</p>
                        </div>
                        <div>
                            <div className="flex justify-center mx-auto items-center mb-4 w-20 h-20 rounded-full bg-primary-100">
                                <FontAwesomeIcon icon={faUsers} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Customer Service at Its Best</h3>
                            <p className="text-gray-500">At ArMax Renovation, exceptional customer service is not just a promise; it's our standard. We are committed to providing you with support whenever you need it, 24/7. Our team is always ready to assist, ensuring that your experience with us is as seamless and satisfying as the quality of our sheds.</p>
                        </div>
                        
                    </div>
                </div>
            </section>

            
            {/* FAQ section */}
            <section className="bg-white" id="faq">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl text-center tracking-tight font-extrabold text-gray-900">Frequently Asked Questions</h2>
                    <div className="grid pt-8 text-left border-t gap-4 border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <Accordion variant="bordered"> 
                            <AccordionItem key="1" aria-label="Accordion 1" title="How long does it take to build and install a shed?">
                                The timeline for building and installing a shed can vary depending on the complexity of the design and the level of customization. Typically, a shed can be built and installed within 4-6 weeks from the date of order.
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Do you provide warranties on your sheds?">
                                Absolutely. We stand by the quality of our work and offer a comprehensive warranty that covers material defects and workmanship. The length and terms of the warranty can be discussed during the consultation phase.
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Are your sheds weather-resistant?">
                                Yes, all of our sheds are constructed with high-quality materials that are chosen for their durability and resistance to weather. We also apply protective finishes to guard against the elements.
                            </AccordionItem>
                        </Accordion>
                        <Accordion variant="bordered">
                            <AccordionItem key="4" aria-label="Accordion 4" title="Do I need a permit to install a shed on my property?">
                                Permit requirements can vary depending on your location. We recommend checking with your local municipality. If a permit is needed, we can provide guidance and support to help you through the process.
                            </AccordionItem>  
                            <AccordionItem key="5" aria-label="Accordion 5" title="How do I maintain my shed?">
                                Maintenance requirements will depend on the materials used in your shed. We will provide you with maintenance instructions tailored to your specific shed, which may include regular cleaning, inspecting for damage, and reapplying protective finishes as needed.
                            </AccordionItem>  
                            <AccordionItem key="6" aria-label="Accordion 6" title="How can I get a quote for a shed?">
                                You can get a quote by contacting us directly through our website or by phone. We'll discuss your needs, preferences, and the specifics of your property to provide you with a detailed estimate.
                            </AccordionItem>  
                        </Accordion>

                    </div>
                </div>
                </section>


            {/* CONTACT section */}
            <section className="bg-white" id="contact">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
                    <form action="#" className="space-y-8">
                        <div>
                            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows={6} className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="block py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-primary-700 m-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
                    </form>
                </div>

                <div className="max-w-screen-lg mb-4  md:flex md:justify-around md:align-middle md:m-auto md:mb-6 text-center">
                    {socialLinks.map((link, index) => (
                        <div key={index}>
                            <a href={link.href}><FontAwesomeIcon icon={link.icon} className="fa-3x" /></a>
                            <a href={link.href}><h4 className="text-[20px] font-black">{link.heading}</h4></a>
                            <Link href={link.href} showAnchorIcon isBlock>{link.description}</Link>
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
                        <Button as={Link} color="primary" startContent={<FontAwesomeIcon icon={faComments} />} href="sms:+14044165745" className="text-lg font-bold text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300">Text us</Button>
                        <Button as={Link} color="danger" startContent={<FontAwesomeIcon icon={faEnvelope} />} href="mailto:armaxrenovation@gmail.com" className="text-lg font-bold text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300">Email us</Button>
                        <Button as={Link} color="success" startContent={<FontAwesomeIcon icon={faWhatsapp} />} href="https://wa.me/14044165745" className="text-lg font-bold text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300">WhatsApp</Button>        
                    </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>   
    )
}