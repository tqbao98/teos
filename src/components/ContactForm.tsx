import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Building2,
  Loader2,
  Mail,
  MessageSquare,
  User,
  type LucideIcon,
} from "lucide-react";
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
import posthog, { posthogEnabled } from "@/lib/posthog";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Please enter your company name"),
  note: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmitState = "idle" | "loading" | "success" | "error";

function FieldWithIcon({
  icon: Icon,
  align = "center",
  children,
}: {
  icon: LucideIcon;
  align?: "center" | "start";
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Icon
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-3 size-3.5 text-muted-foreground",
          align === "center" ? "top-1/2 -translate-y-1/2" : "top-2.5",
        )}
      />
      {children}
    </div>
  );
}

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

      if (posthogEnabled) {
        posthog.capture("demo_request_submitted");
      }
      setSubmitState("success");
      form.reset();
    } catch (error) {
      console.error(error);
      if (posthogEnabled) {
        posthog.capture("demo_request_submission_failed");
      }
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <p className="text-base font-medium text-foreground">
          {siteContent.contact.successMessage}
        </p>
        <Button
          className="mt-5 rounded-md"
          size="sm"
          variant="outline"
          onClick={() => setSubmitState("idle")}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4 p-5 sm:p-6">
            {!formspreeId ? (
              <p className="rounded-md bg-secondary px-3 py-2 text-sm text-muted-foreground">
                Formspree is not configured. Set{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  VITE_FORMSPREE_ID
                </code>{" "}
                in your environment to enable submissions.
              </p>
            ) : null}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FieldWithIcon icon={User}>
                    <FormControl>
                      <Input
                        placeholder="James Smith"
                        autoComplete="name"
                        className="bg-white pl-9"
                        {...field}
                      />
                    </FormControl>
                  </FieldWithIcon>
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
                  <FieldWithIcon icon={Mail}>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="james.smith@acme.com"
                        autoComplete="email"
                        className="bg-white pl-9"
                        {...field}
                      />
                    </FormControl>
                  </FieldWithIcon>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FieldWithIcon icon={Building2}>
                    <FormControl>
                      <Input
                        placeholder="Acme Manufacturing"
                        autoComplete="organization"
                        className="bg-white pl-9"
                        {...field}
                      />
                    </FormControl>
                  </FieldWithIcon>
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
                    Note{" "}
                    <span className="font-normal text-muted-foreground">
                      (optional)
                    </span>
                  </FormLabel>
                  <FieldWithIcon icon={MessageSquare} align="start">
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your plant, protocols, or use cases..."
                        className="bg-white pl-9"
                        {...field}
                      />
                    </FormControl>
                  </FieldWithIcon>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitState === "error" ? (
              <p className="text-sm font-medium text-destructive">
                {siteContent.contact.errorMessage}
              </p>
            ) : null}
          </div>

          <div className="flex items-center justify-end gap-2 border-t border-border bg-muted/40 px-5 py-3 sm:px-6">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="rounded-md bg-muted text-foreground hover:bg-muted/70"
              onClick={() => {
                if (posthogEnabled) {
                  posthog.capture("demo_request_discarded");
                }
                form.reset();
                setSubmitState("idle");
              }}
              disabled={submitState === "loading"}
            >
              Discard
            </Button>
            <Button
              type="submit"
              size="sm"
              className="rounded-md"
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
          </div>
        </form>
      </Form>
    </div>
  );
}
