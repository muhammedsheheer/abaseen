"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  first: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  last: z.string().min(2, { message: "Name must be at least 2 characters." }),
  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      first: "",
      phone: "",
      email: "",
      last: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      toast(
        (t) => (
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center">
              Your reservation request has been successfully submitted to the
              restaurant!
            </p>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                form.reset();
              }}
              className="rounded bg-primary px-4 py-2 text-white"
            >
              OK
            </button>
          </div>
        ),
        { duration: Infinity },
      );
    },
    onError: () => {
      toast.error(
        "There was an error submitting your message. Please try again later",
      );
    },
  });
  return (
    <section className="flex h-full w-full items-center justify-center bg-[#070d0f]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] px-0 pl-0 md:px-2 md:pt-8">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <div className="relative flex w-full flex-col items-center justify-center gap-7 px-4 md:px-0 lg:w-1/2">
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
            <div className="absolute right-0 top-0 flex h-full w-full justify-center overflow-hidden">
              {/* <Image
                        src='/images/home/hero.png'
                        alt="hero"
                        width={1093}
                        height={967}
                        className="min-h-full scale-x-[-1] object-cover"
                    /> */}

              <video
                className="min-h-full min-w-full object-cover"
                style={{ objectPosition: "center" }}
                src="/videos/contact/contact.mp4"
                autoPlay
                loop
                muted
                playsInline
                // poster="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/vu-lounge-frame.png"
              ></video>
            </div>
            <p className="z-20 font-inter text-4xl font-[200] uppercase text-primary md:text-7xl">
              Contact
              <br />
              with us
            </p>
            <div className="z-20 flex w-full flex-col items-start justify-center gap-4 bg-[#091113] px-9 py-6 md:w-[350px]">
              <p className="font-inter font-[200] uppercase text-primary">
                Our Email
              </p>
              <div className="flex items-center gap-2">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#172529] p-2">
                    <Mail className="text-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="mailto:orders@abaseen.uk">
                    <p className="border-b-[1px] border-b-primary text-xl text-primary">
                      orders@abaseen.uk
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#070d0f] pb-24 lg:w-1/2 lg:items-center lg:justify-start">
            <p className="w-4/5 px-4 text-start font-inter text-xl font-[200] uppercase text-primary md:px-0">
              Make a enquiry now
            </p>
            <div className="w-full px-3 lg:w-4/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <div className="flex w-full gap-4">
                        <FormField
                          control={form.control}
                          name="first"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormControl>
                                <Input
                                  placeholder="First Name"
                                  {...field}
                                  className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0b1316] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="last"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormControl>
                                <Input
                                  placeholder="Last Name"
                                  {...field}
                                  className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0b1316] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0b1316] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Email"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0b1316] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="h-24 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0b1316] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full pt-7">
                    <Button
                      className="w-full px-10 py-6"
                      disabled={bookTableMutation.isPending}
                      style={{
                        background:
                          "linear-gradient(97deg, #9D6E2C -13.33%, #A88142 1.07%, #CBB16A 9.43%, #F6ED9B 23.15%)",
                      }}
                    >
                      Enquiry now
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          {/* <div className="flex w-full items-center justify-center bg-[#0a1315] px-4 py-6">
            <div className="border-r-[1px] border-r-primary pr-2 md:pr-6">
              <Link
                href={
                  "https://www.tripadvisor.in/Restaurant_Review-g1791615-d19258647-Reviews-Vu_Lounge-Bushey_Hertfordshire_England.html"
                }
                target="_blank"
              >
                <Image
                  src="/images/tripadvisor.png"
                  width={272}
                  height={57}
                  alt="tripadvisor"
                />
              </Link>
            </div>
            <div className="pl-2 md:pl-6">
              <Image
                src="/images/design-my-night.png"
                width={220}
                height={56}
                alt="tripadvisor"
              />
            </div>
          </div> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.5804559388694!2d-2.1903720234063497!3d53.440209372316694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3c15b7ee68d%3A0xb65f11d5d1fe21f7!2sAbaseen!5e0!3m2!1sen!2sin!4v1748078851222!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[300px] w-full grayscale invert"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
