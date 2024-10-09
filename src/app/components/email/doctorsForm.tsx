"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReCaptcha } from "next-recaptcha-v3";
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
  speciality: z.string().min(1, {
    message: "Veuillez renseigner votre spécialité",
  }),
  message: z.string().min(1, {
    message: "Veuillez renseigner un message",
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function DoctorsForm() {
  const { executeRecaptcha } = useReCaptcha();
  const { toast } = useToast();
  const t = useTranslations("Contact");

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      speciality: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    const { firstname, lastname, email, phone, speciality, message } = data;
    const token = await executeRecaptcha("form_submit");

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "docteur",
        firstname,
        lastname,
        email,
        phone,
        speciality,
        message,
        token: token,
      }),
    });

    const responseJson = await response.json();
    if (responseJson.id) {
      toast({
        title: t("toast.title"),
        description: t("toast.description"),
      });
    }
    if (responseJson.error) {
      toast({
        title: t("toast.error_title"),
        description: t("toast.error_description"),
      });
    }
  }

  return (
    <div className="space-y-12">
      <div>
        <h2 className="h2 text-white">{t("form.h2Doc")}</h2>
        <h3 className="h3 mt-2 lg:mt-4">{t("form.h3")}</h3>
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
          {/* speciality */}
          <FormField
            control={form.control}
            name="speciality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.speciality")}</FormLabel>
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
