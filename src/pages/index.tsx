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
            <section className="bg-white" id="home">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl">Amazing sheds for your backyard</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xl lg:text-2xl">Transforming Your Backyard Dreams into Reality: Custom-Crafted Sheds Built with Precision and Care</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">Message us</a>
                    </div>   
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <NextImage src={heroImage} alt="Shed image"/>
                    </div>
                </div>
            </section>

            {/* ABOUT section */}
            <section className="bg-white" id="about">
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
            <section className="bg-white" id="sheds">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Discover the Perfect Shed for Your Space</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Find the Ideal Shed Solution to Match Your Lifestyle and Storage Needs</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">Compact Classic (6 ft x 8 ft)</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for smaller spaces</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$29</span>
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
                            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                        </div>
                        
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">Urban Organizer (6 ft x 10 ft)</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">A Blend of Space and Functionality</p>
                            <div className="flex justify-center items-baseline my-8">
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
                            <h3 className="mb-4 text-2xl font-semibold">Garden Haven (8 ft x 10 ft)</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Spacious and Versatile</p>
                            <div className="flex justify-center items-baseline my-8">
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
