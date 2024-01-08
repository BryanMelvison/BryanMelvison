import DevImg from "./DevImg";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {User2, MailIcon, PhoneCall, GraduationCap, Activity,UserIcon, Briefcase, CalendarDays} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Bryan Melvison',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+852 5136 7171',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'melvisonbryan@gmail.com',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Major in Computer Science, with a Minor in Finance',
    },
    {
        icon: <Activity size={20}/>,
        text: 'Football, Badminton, Movies, Games, Travelling',
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'The University of Hong Kong',
                qualification: 'Bachelor of Engineering (CompSc)',
                years: '2021 - 2025 (Expected)'
            },
            {
                university: 'McGill University',
                qualification: 'Bachelor of Science (Computer Science)',
                years: '2024 Winter Exchange Semester'
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Kodifly Limited',
                position: 'AI Engineer Intern',
                date: 'Jun 2023 - Aug 2023'
            },
            {
                company: 'HKU Innovation Wing',
                position: 'Part Time Research Assistant (Robotics)',
                date: 'Oct 2023 - Dec 2023'
            },
        ]
    },
]

const skillData = [
    {
        title: 'Programming Languages',
        data: [
            {
                name: 'Python, R, Java, C/C++, JavaScript, Shell script, Linux'
            },
        ]
    },
    {
        title: 'Back-end',
        data: [
            {
                name: 'Flask, Express.js, Node.js'
            },
        ]
    },
    {
        title: 'Front-end',
        data: [
            {
                name: 'HTML, CSS, Tailwind CSS, Three.js, React, Next.js, Streamlit'
            },
        ]
    },
    {
        title: 'Data Science & ML',
        data: [
            {
                name: 'Pandas, Numpy, Scikit-learn, Matplotlib, OpenCV, PyTorch, Tidyverse'
            },
        ]
    },
    {
        title: 'Databases',
        data: [
            {
                name: "MySQL, MongoDB"
            },
        ]
    },
    {
        title: 'Robotics',
        data: [
            {
                name:"ROS"
            },
        ]
    },
]

const extraData = [
    {
        title: 'extracurriculars',
        data: [
            {
                committee: 'HKU LapChee Running Club',
                date: 'Jan 2023 - Present | Co-Founder',
                activity: 'Ensured seamless execution of the operations of the running activities, and set up the foundation for the club for instance the running routes, and attendance tracking excel sheets.'
            },
            {
                committee: 'HKU Student Ambassador',
                date: 'Oct 2022 - Present | Member',
                activity: 'Represented HKU in a range of events (info day, 111th congregation), demonstrating professionalism and excellence in all endeavors.'
            },
            {
                committee: 'HKU LapChee College Ambassador',
                date: 'Sept 2022 - Present | Committee',
                activity: 'Coordinated and managed various events hosted in Lap-Chee College while also taking responsibility to created various content for the instagram page.'
            },
            {
                committee: 'Tzu Chi Foundation',
                date: 'Jan 2013 - Present | Volunteer',
                activity: 'I dedicated my time as a volunteer in a variety of charitable events, including teaching young children, providing care and support at an elderly care facility, and participating in house painting projects to improve living conditions for those in need.'
            },
        ]
    },
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }

    const titles= ['Programming Languages', 'Back-end', 'Front-end', 'Data Science & ML', 'Databases', 'Robotics']

    return(
        <section className="xl:h-[860px] mb-12 xl:mb-24 pb-12 xl:py-24 ">
            <div className = "container mx-auto ">
                <div className="flex flex-col xl:flex-row  items-center  section-title mb-8 mt-10 xl:mb-12 text-center mx-auto">
                    <UserIcon className="text-green-500"  size= {25}/>
                    <h2>About Me</h2>
                </div>
                <div className="flex">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="w-[505px] h-[505px] bg-no-repeat relative " imgSrc="/about/developer.jpg" />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[630px] xl:border dark:border-none ">
                                <TabsTrigger className= "w-[162px] xl:w-auto  " value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className= "w-[162px] xl:w-auto  " value="qualifications">Qualifications</TabsTrigger>
                                <TabsTrigger className= "w-[162px] xl:w-auto  " value="skills">Skills</TabsTrigger>
                                <TabsTrigger className= "w-[162px] xl:w-auto  " value="extracurriculars">Extracurriculars</TabsTrigger>
                            </TabsList>
                            {/* Tabs Content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* Personal */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left  ">
                                        <h3 className="h3 mb-4">Motivated Lifelong Learner</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0 ">Throughout my time in University, I've had the opportunity to equip myself with various fundamental knowledge revolving around Computer Science, such as Operating Systems, Database Management Systems, Algorithms, many more!</p>
                                        {/* icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) =>{
                                                return (
                                                    <div className="flex items-center gap-x-4 mx-auto xl:mx-8" key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary " >Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>English, Indonesian, Mandarin Chinese</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left ">My Journey</h3>
                                        <div className ="grid md:grid-cols-2 gap-y-8 ">
                                            {/* experiences */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary ">
                                                    <Briefcase size={28}/>
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'experience').data.map((item,index) => {
                                                        const {company, position , date} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2 "> 
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500 "> </div>
                                                                </div>
                                                                <div>  
                                                                    <div className="font-semibold text-xl leading-none mb-2">{company}</div>                                                                
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{position}</div>
                                                                    <div className="text-base font-medium">{date}</div>
                                                                </div>
                                                            </div>
                                                        ) 
                                                    })}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary ">
                                                    <GraduationCap size={28}/>
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'education').data.map((item,index) => {
                                                        const {university, qualification , years} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group " key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2 "> 
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500 "> </div>
                                                                </div>
                                                                <div>  
                                                                    <div className="font-semibold text-xl leading-none mb-2">{university}</div>                                                                
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        ) 
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Tech Stack</h3>
                                        <div className="mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4">
                                            {titles.map((title, index) => (
                                                <div className="mb-8" key={index}>
                                                    <h4 className="text-xl font-semibold mb-2 xl:text-left">{title}</h4>
                                                    <div className="border-b border-border mb-4"></div>
                                                    <div>
                                                    {getData(skillData, title).data.map((item, index) => {
                                                        const { name } = item;
                                                        return (
                                                        <div className="w-3/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                            <div className="font-medium">{name}</div>
                                                        </div>
                                                        );
                                                    })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="extracurriculars">
                                        <div className="flex flex-col gap-y-6">
                                                
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary ">
                                                    <CalendarDays size={28}/>
                                                    <h4 className="capitalize font-medium">
                                                        {getData(extraData, 'extracurriculars').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(extraData, 'extracurriculars').data.map((item,index) => {
                                                        const {committee, date , activity} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group " key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2 "> 
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] group-hover:w-[20px] group-hover:h-[20px] transition-all duration-500 "> </div>
                                                                </div>
                                                                <div>  
                                                                    <div className="font-semibold text-xl leading-none mb-2">{committee}</div>                                                                
                                                                    <div className="text-lg leading-none text-muted-foreground">{date}</div>
                                                                    <div className="text-base font-medium"><i>{activity}</i></div>
                                                                </div>
                                                            </div>
                                                        ) 
                                                    })}
                                                </div>
                                        </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;