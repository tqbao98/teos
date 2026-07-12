import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteContent } from "@/data/content";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Please enter your company name"),
  note: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      note: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (!formspreeId) {
      console.warn("VITE_FORMSPREE_ID is not configured. Form payload:", values);
      setSubmitState("error");
      return;
    }

    setSubmitState("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          company: values.company,
          note: values.note ?? "",
          _subject: "Teos demo request",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitState("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
        <p className="text-lg font-medium text-foreground">
          {siteContent.contact.successMessage}
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setSubmitState("idle")}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      {!formspreeId ? (
        <p className="mb-4 rounded-xl bg-secondary px-4 py-3 text-sm text-muted-foreground">
          Formspree is not configured. Set{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
            VITE_FORMSPREE_ID
          </code>{" "}
          in your environment to enable submissions.
        </p>
      ) : null}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Smith" autoComplete="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jane@company.com"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Manufacturing"
                    autoComplete="organization"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Note <span className="font-normal text-muted-foreground">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your plant, protocols, or use cases..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitState === "error" ? (
            <p className="text-sm font-medium text-destructive">
              {siteContent.contact.errorMessage}
            </p>
          ) : null}

          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={submitState === "loading"}
          >
            {submitState === "loading" ? (
              <>
                <Loader2 className="animate-spin" />
                Sending...
              </>
            ) : (
              siteContent.contact.submitLabel
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
