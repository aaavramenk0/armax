import { Button, Link, Input, Textarea} from "@nextui-org/react";
import { useState } from "react";

const initValues = {
    name: "",  
    email: "",
    phone: "",
    message: ""
}
const initState = {
    values: initValues,
    isLoading: false
}

const Form = () => {


    return (
        <div className="py-5 lg:py-8 px-4 mx-auto max-w-screen-lg">
                    <h2 className="mb-4 text-3xl tracking-tight font-semibold text-center text-heading md:text-5xl">Contact Us</h2>
                    <form className="space-y-8 text-center">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Your name</label>
                            <Input 
                                type="text" 
                                id="name" 
                                name="name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 text-md rounded-lg"
                                placeholder="First and last name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Your email</label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 text-md rounded-lg"
                                placeholder="name@example.com"
                                required
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Phone number</label>
                            <Input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                                placeholder="123 456 7890"
                                required
                                value={values.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Your message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                                placeholder="Let us know how we can help you..."
                                value={values.message}
                                onChange={handleChange}
                            />
                        </div>
                        <Button
                            as={Button}
                            onClick={onSubmit}
                            type="submit"
                            color="danger"
                            isLoading={isLoading}
                            className="text-white px-10 bg-red-700 font-medium rounded-lg text-xl text-center"
                        >
                            Message us
                        </Button>
                    </form>
                </div>
    )
}

export default Form;