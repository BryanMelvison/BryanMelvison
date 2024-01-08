import {GanttChartSquare ,Blocks, BellElectric, ComputerIcon, Bell} from 'lucide-react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'

const interestsData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Data Science & ML',
        description: 'I love exploring and uncovering hidden patterns to gain insights from vast amount of data to come to a decision/solution with a strong basis.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Generative AI',
        description: 'I love the changes that GPT models have brought about to innovations. Currently doing research on the topic to gain a much better understanding of the topic.'
    },
    {
        icon: <BellElectric size={72} strokeWidth={0.8} />,
        title: 'Backend',
        description: 'I enjoy implementing the backbone of applications, to ensure smooth data flow, efficient processing, and secured interactions.'
    },
]

const Interests = () => {
    return (
        <section className="mb-12 xl:mb-24">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row  items-center section-title mb-12 xl:mb-24 text-center mx-auto">
                <ComputerIcon className="text-green-500" size={25} />
                <h2 >My Interests</h2>
            </div>
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-12 xl:gap-y-24">
                {interestsData.map((item, index) => (
                    <Card className="mb-4 mt-10 transition duration-500 ease-in-out transform hover:scale-105 w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                        <CardHeader className="text-primary absolute -top-[60px]">
                            <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                                <div className="animate-float">{item.icon}</div>
                            </div>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardTitle className="mb-4 animate-pulse">{item.title}</CardTitle>
                            <CardDescription className="text-lg">{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
        // <section className="mb-12 xl:mb-24">
        //     <div className="container mx-auto">
        //         <div className="flex items-center  section-title mb-12 xl:mb-24 text-center mx-auto">
        //             <ComputerIcon fill={"green"} size= {25}/>
        //             <h2>My Interests</h2>
        //         </div>
        //         <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-12 xl:gap-y-24">
        //             {interestsData.map((item,index) => {
        //                 return <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
        //                     <CardHeader className="text-primary absolute -top-[60px] animate-pulse">
        //                         <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
        //                     </CardHeader>
        //                     <CardContent className="text-center" >
        //                         <CardTitle className="mb-4 animate-pulse animate-bounce ">{item.title}</CardTitle>
        //                         <CardDescription className="text-lg transition-transform hover:scale-125">{item.description}</CardDescription>
        //                     </CardContent>
        //                 </Card>
        //             })}
        //         </div>
        //     </div>
        // </section>
    )
}

export default Interests