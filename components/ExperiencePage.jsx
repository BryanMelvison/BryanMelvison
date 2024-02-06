'use client';
import { ActivitySquareIcon, Briefcase } from 'lucide-react'
import SegmentPage from './SegmentPage'
import Reveal from './reveal';

const Experience = [
    {
        company: 'HKU Innovation Wing',
        position: 'Part Time Research Assistant (Robotics)',
        date: 'Oct 2023 - Dec 2023',
        bulletPoints: "Developed computer vision algorithms in OpenCV to perform color detection, contour extraction, and 2D coordinate mapping of colored objects to enable robotic arm calibration for pick and place operations.Maintained and optimized existing code for an autonomous rover bot by refactoring and debugging to improve performance and precision",
    },
    {
        company: 'Kodifly Limited',
        position: 'AI Engineer Intern',
        date: 'Jun 2023 - Aug 2023',
        bulletPoints: "Developed a cutting-edge Web Visualizer to facilitate real-time hosting of live camera feeds, live point clouds from the LiDAR Sensor, on-demand SLAM, and alarm system detection using React js, three js, and ros.Built a robust backend infrastructure utilizing the ROS communication protocol, rosjs, and seamlessly integrated Livox SDK API for its detection capabilities on the Web Visualizer.Calculated and retrieved the IMU of the LiDAR within the LiDAR Simulation with perfect accuracy rate, enabled the creation of a realistic SLAM map of the simulated landslide, and moving cars.Successfully calibrated the live camera feeds result and overlay them on top of the point cloud feed based on theintrinsic and extrinsic parameters of the camera",
    },

]




const ExperiencePage = () => {
    return (
        <section className="xl:h-[820px] mb-20 xl:py-24 ">
            <div className="container mx-auto">
                <Reveal>
                    <div className="flex flex-col xl:flex-row  items-center  section-title mb-12 xl:mb-24 text-center mx-auto">
                        <Briefcase className="text-green-500"  size= {25}/>
                        <h2>My Experiences</h2>
                    </div>
                </Reveal>

                {Experience.map((item,index) =>{
                    return (
                        <Reveal>
                            <SegmentPage key={index} item ={item} />
                        </Reveal>

                    )
                })} 
            </div>
           
        </section>
    )
}

export default ExperiencePage;