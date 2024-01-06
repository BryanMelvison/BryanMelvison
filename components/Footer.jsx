import Socials from "./Socials";

const Footer = () => {
    return (
    <footer className ="bg-secondary py-12">
        <div className="container mx-auto">
            <div className="flex flex-col items-center justofy-between ">
                <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4" iconStyles="text-primary text-[20px] dark:text-white/70 "/>
                <div className="text-muted-foreground">
                    &copy; Bryan Melvison. :P
                </div>
            </div>
        </div>

    </footer>
    )
};

export default Footer;