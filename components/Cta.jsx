"use client";
import { Button } from "./ui/button";
import Link from "next/link";


import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import {Textarea} from "@/components/ui/textarea";

const formSchema = z.object({
    first_name: z.string().min(1, {
        message: "Please include your first name.",
    }),
    last_name: z.string().min(1, {
        message: "Please include your last name.",
    }),
    body: z.string().min(1, {
        message: "Please include body."
    }),
    email: z.string().email({
        message: "Invalid email address.",
    })
})

const css = {
    Style: "transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-green-500",
};



const Cta = () => {
    // Defining my form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          first_name: "",
          last_name: "",
          body: "",
          email: "",
        },
    })

    const onSubmit = ((data) => {

    }) 

    return(
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="h2 max-w-xl text-center mb-8">
                        I welcome the opportunity to discuss future collaborations. If you're interested, please feel free to contact me.
                    </h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-lg">
                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                                <FormField
                                    control={form.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem className="mb-8">
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John" {...field} className={css.Style}/>
                                            </FormControl>
                                            <FormDescription >
                                                Your first name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="last_name"
                                    render={({ field }) => (
                                        <FormItem className="mb-8">
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Doe" {...field} className={css.Style}/>
                                            </FormControl>
                                            <FormDescription>
                                                Your last name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="mb-8">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="johndoe@example.com" {...field} className={css.Style} />
                                        </FormControl>
                                        <FormDescription>
                                            Your email address.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="body"
                                render={({ field }) => (
                                    <FormItem className="mb-8">
                                        <FormLabel>Body</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter your message here..." {...field} className={css.Style}/>
                                        </FormControl>
                                        <FormDescription>
                                            The body of your message.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="flex mx-auto mt-16 justify-center">Submit</Button>
                        </form>
                    </Form>
                </div>  
            </div>
        </section>
    )
};

export default Cta;

