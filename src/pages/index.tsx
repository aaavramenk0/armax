import { Button } from "@nextui-org/react";
import Image from "next/image";
import about from "../images/about.png"

export default function Home() {
    return (
        <>
            {/* HERO section */}
            <div className="bg-[url('../images/hero.png')] bg-cover bg-center h-[90vh] text-center flex flex-col">
        
            </div>

            {/* ABOUT section */}
            <div className="flex flex-row justify-around align-middle p-8">
                <div className="max-w-[45%] ">
                    <h3 className="text-center font-black text-[45px] mb-8">About Us</h3>
                    <p className="text-[24px] font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto suscipit corporis itaque ex quod expedita corrupti cumque fugit voluptatibus voluptatum similique, debitis pariatur ea odit! Sed natus vitae veritatis est. <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quasi hic voluptas ipsum illum expedita dolores rem quibusdam esse dicta ea reprehenderit sint est ipsam eligendi architecto alias, animi assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas architecto facilis consequuntur nobis sed rem dolores non adipisci incidunt placeat, minus velit soluta accusamus numquam, magni mollitia alias ea?</p>
                </div>
                <div className="max-w-[45%]">
                    <Image src={about} alt="Picture for About Us section" width={600} />
                </div>
            </div>
            
            {/* SHED CATALOG section */}
        </>   
    )
}
