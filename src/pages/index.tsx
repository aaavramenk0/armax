import { Button, Image } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <>
            <div className="block p-4 pb-0 overflow-hidden lg:flex sm:p-8 md:p-12 lg:p-20 lg:h-[80vh] " >
                <div className="text-center lg:text-left lg:max-w-[50%]">
                    <h1 className="font-bold leading-none text-[34px] sm:text-[48px] md:text-[64px] lg:text-[76px]">Affordable home repair services</h1>
                    <h3 className="text-[18px] leading-normal mt-6 mb-10">Sed aliquam dictumst quisque eget non nisl in rhoncus. In a ipsum ut aliquam ac felis consequat. In sit diam porta laoreet. Amet id magna diam diam in egestas. Nulla sagittis pharetra id tristique.</h3>
                    <Button color="warning" size="lg" radius="lg" className="font-bold text-[18px]" endContent={<FontAwesomeIcon icon={faArrowRight} />}> Get a quote </Button>
                </div>
                
                <div className="hidden lg:flex">
                    <Image className="mt-[-75px]" src="https://assets-global.website-files.com/649af44cc894b19720c0cd2c/64a463adc1490ba864ae8c42_construction-worker-home-image-handyman-x-webflow-template-p-800.png" />
                </div>
            </div>

            <div className="bg-amber-500">
                Home
            </div>
        </>    
    )
}
