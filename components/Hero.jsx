'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import {Download, Send} from 'lucide-react';
import {RiBriefcase4Fill, RiTaskFill, RiSchoolFill, RiArrowDownSLine} from 'react-icons/ri';

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import Reveal from "./reveal";


const Hero = () => {
    return ( 
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-bottom bg-no-repeat bg-cover dark:bg-none">
            <div className="container mx-auto">
                <Reveal>
                    <div className= "flex justify-between gap-x-8"> 
                        {/* Text */}
                        <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left" >
                            <div className= "text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Third Year Computer Science Student</div>
                            <h1 className="h1 mb-4">Hello! My name is   
                                <span className="inline-block relative">
                                    Bryan Melvison
                                    <span className=" absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-1 origin-left transition-transform duration-1300"></span>
                                </span>
                            </h1>
                            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Passionate about the application of new and emerging technologies, follow along the journey in learning with an open mind.</p>

                            {/* Buttons */}
                            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                                {/* <Link href="/contact">
                                    <Button className="gap-x-2">
                                        Contact me<Send size = {18}/>
                                    </Button>
                                </Link> */}
                                <a href="/cv/resume.pdf" download="resume.pdf">
                                    <Button className="gap-x-2">
                                        Download CV<Download size = {18}/>
                                    </Button>
                                </a>
                            </div>
                            {/* Socials */}
                            <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconStyles="text-foreground text-[22px] hover:text-primary transition-all"/>
                        </div>
                        {/* Image */}
                        <div className="hidden xl:flex relative">
                            {/* Badges */}
                            {/* Badge 1 */}
                            <Badge containerStyles="absolute top-[24%] -left-[5rem]" icon={<RiBriefcase4Fill />} endCountNum={2} badgeText='Past Internship Experiences'/>
                            
                            {/* Badge 2 */}
                            <Badge containerStyles="absolute top-[80%] -left-[1rem]" icon={<RiSchoolFill />} endCountNum={3} endCountText=".44" badgeText='CGPA'/>
    
                            {/* Badge 3 */}
                            <Badge containerStyles="absolute top-[55%] -right-8" icon={<RiTaskFill />} endCountNum={7} endCountText="+" badgeText='Projects Completed'/>
    
                            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
                            </div>
                            <DevImg containerStyles='bg-hero_shape w-[462px] h-[462px] bg-no-repeat relative bg-bottom rounded-full' imgSrc="/hero/developer.png" />
                        </div>
                    </div>
                </Reveal>

                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero;

