"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

const FormSchema = z.object({
  firstname: z.string().min(1, { message: "Veuillez saisir votre prénom" }),
  lastname: z.string().min(1, { message: "Veuillez saisir votre nom" }),
  email: z
    .string()
    .min(1, { message: "Veuillez saisir un e-mail" })
    .email("L'e-mail saisi n'est pas valide"),
  phone: z.string().min(10, {
    message: "Veuillez renseigner votre numéro de téléphone",
  }),
  manufacturerName: z.string().min(1, {
    message: "Veuillez renseigner votre spécialité",
  }),
  message: z.string().min(1, {
    message: "Veuillez renseigner un message",
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function ManufacturersForm() {
  const { toast } = useToast();
  const t = useTranslations("Contact");

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      manufacturerName: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    const { firstname, lastname, email, phone, manufacturerName, message } =
      data;

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "industriel",
        firstname,
        lastname,
        email,
        phone,
        manufacturerName,
        message,
      }),
    });

    const responseJson = await response.json();
    if (responseJson) {
      toast({
        title: t("toast.title"),
        description: t("toast.description"),
      });
    }
  }

  return (
    <div className="space-y-12">
      <div>
        <h2 className="h2 text-white">{t("form.h2Manu")}</h2>
        <h3 className="h3 mt-2 lg:mt-4">{t("form.h3Manu")}</h3>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-white grid"
        >
          <div className="grid grid-cols-2 gap-4">
            {/* firstname */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("form.firstname")}</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* lastname */}
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("form.lastname")}</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.mail")}</FormLabel>
                <FormControl>
                  <Input type="mail" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.phone")}</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* manufacturerName */}
          <FormField
            control={form.control}
            name="manufacturerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.manufacturer")}</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.message")}</FormLabel>
                <FormControl>
                  <Textarea className="resize-none" {...field} rows={3} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-transparent text-orange uppercase text-lg m-auto mr-0"
          >
            {t("form.submit")} +
          </Button>
        </form>
      </Form>
    </div>
  );
}
