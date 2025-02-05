'use client';
import {RiLinkedinFill,RiInstagramFill, RiGithubFill, RiPhoneFill, RiMailFill} from 'react-icons/ri'

import Link from 'next/link';

const icons = [
    {
        path: 'https://hk.linkedin.com/in/bryan-melvison-bbaa2220a',
        name: <RiLinkedinFill />,
    },
    {
        path: 'https://www.instagram.com/bryan_melvison',
        name: <RiInstagramFill />,
    },
    {
        path: 'https://www.github.com/BryanMelvison',
        name: <RiGithubFill />,
    },
    {
        path: 'tel:+85254685482',
        name: <RiPhoneFill />,
    },
    {
        path: 'mailto:melvisonbryan@gmail.com',
        name: <RiMailFill />,
    },



]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials;