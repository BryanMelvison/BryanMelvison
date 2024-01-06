import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
    return(
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="h2 max-w-xl text-center mb-8">
                        I welcome the opportunity to discuss future collaborations. If you're interested, please feel free to contact me.
                    </h2>
                </div>
            </div>
        </section>
    )
};

export default Cta;