import { Button, Link } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return [
        {
            value,
            onChange: (e) => setValue(e.target.value),
        }, () => setValue(initialValue)
    ];
}

const Form = () => {
    const form = useRef();
    const [isFieldFilled, setIsFieldFilled] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    // declaring inputs' values using 'useState' hook
    const [name, resetName] = useInput('');
    const [email, resetEmail] = useInput('');
    const [phone, resetPhone] = useInput('');
    const [message, resetMessage] = useInput('');

    const submit = (e) => { // function for getting users' inputs from the form and pass them to the backend
        e.preventDefault(); // prevent default reloading of the page after submitting form
        resetName(); resetEmail(); resetPhone(); resetMessage(); // set the value of the price field to false
        setIsFieldFilled(false); // set the value of the price field to false
        emailjs
            .sendForm('service_60d2ovq', 'template_1v08ovx', form.current, 'GbxJzzUvY9GYYpVkE4HCB')
            .then(
                (result) => { setIsSuccess(true) },
                (err) => { setIsError(true) }
            )
    }
    useEffect(() => {
        setTimeout(() => {
            setIsSuccess(false); 
            setIsError(false);
        }, 3000)
    }, [isSuccess, isError])
    
    const toggleButton = (event) => { // function to get the event(input) from calling the function  
        if (event.target.value.trim().length > 0) { // then if value inside the input is more then 0 ('trim' is to get rid of spaces after the text and before)
            setIsFieldFilled(true); // we set the value of 'isFieldFilled' to 'true'
        } else { // or if the value inside the input is less or equal to 0
            setIsFieldFilled(false); // we set the value of 'isFieldFilled' to 'false'
        }
    }

    return (
        <div className="py-5 lg:py-8 px-4 mx-auto max-w-screen-lg">
                    <h2 className="mb-4 text-3xl tracking-tight font-semibold text-center text-heading md:text-5xl">Contact Us</h2>
                    {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
                    <form ref={form} onSubmit={submit} className="space-y-8 text-center">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Your name</label>
                            <input type="text" {...name} id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 text-md rounded-lg" placeholder="First and last name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Your email</label>
                            <input type="email" {...email} id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 text-md rounded-lg" placeholder="name@example.com" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Phone number</label>
                            <input type="tel" {...phone} name="phone" id="phone" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="123 456 7890" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Your message</label>
                            <textarea id="message" {...message} name="message" rows={6} className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" placeholder="Let us know how we can help you..."></textarea>
                        </div>
                        <Link as={Button} type="submit" onClick={submit} color="danger" isBlock className=" text-white px-10 bg-red-700 font-medium rounded-lg text-xl text-center">Message us</Link>
                        <p className={`${isSuccess ? 'block' : 'hidden'}`}>Form was submitted successfully!</p>
                        <p className={`${isError ? 'block' : 'hidden'}`}>Form was not submitted. Please, try again later or contact us through our contact inforamtion!</p>
                    </form>
                </div>
    )
}

export default Form;