import { Link } from "react-router-dom";
import instagramLogo from "../assets/instagram.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  email: z.string({ message: "Unesite email" }),
  message: z.string({ message: "Unesite poruku" }).max(200, {
    message: "Poruka ne moze biti duza od 200 karaktera.",
  }),
});

export const Footer = ({ logo }: { logo: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // TODO: On submit send mail
    console.log(values);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="md:max-w-[1600px] mt-4 mx-auto py-10 flex flex-col gap-10 md:flex-row items-center justify-between">
      <div className="flex flex-row justify-between max-w-[600px] w-full">
        <div className="flex flex-col gap-6">
          <img
            onClick={scrollToTop}
            src={logo}
            alt="logo"
            className="w-[100px] md:w-[140px] cursor-pointer"
          />
          <div className="flex flex-row gap-2 text-white items-center cursor-pointer hover:scale-[1.02] transition-all">
            <img src={instagramLogo} className="w-8 h-8" alt="social-link" />
            <p>@instagram_ime</p>
          </div>
        </div>
        <div className="flex flex-col font-light text-white gap-4">
          <h1 className="text-4xl">Linkovi</h1>
          <div className="flex flex-col ">
            <div onClick={scrollToTop} className="cursor-pointer text-xl">
              <Button
                variant="link"
                className="font-light text-lg p-0 text-background"
              >
                Pocetna
              </Button>
            </div>
            <Link to="/trainings" className="cursor-pointer text-xl">
              <Button
                variant="link"
                className="font-light text-lg p-0 text-background"
              >
                Planovi
              </Button>
            </Link>
            <Link to="/o-meni">
              <Button
                variant="link"
                className="font-light text-lg p-0 text-background"
              >
                O meni
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[400px] w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="email"
                      placeholder="Email"
                      {...field}
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
                <FormItem>
                  <FormLabel className="text-white">Poruka</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Poruka..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="outline">
              Posalji
            </Button>
          </form>
        </Form>
      </div>
    </footer>
  );
};
