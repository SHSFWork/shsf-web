"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@shsfwork/components/custom/3d-button";
import { Input } from "@shsfwork/components/shadcn/input";
import { ChevronRight, LoaderCircle } from "lucide-react";
import { cn } from "@shsfwork/lib/cn";
import Section from "@shsfwork/components/semantic-elements/section";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@shsfwork/components/shadcn/form";

const NewsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export function NewsletterSection() {
  const form = useForm<z.infer<typeof NewsletterSchema>>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof NewsletterSchema>) => {
    try {
      const result = await new Promise<{ success: boolean; error?: string }>(
        (resolve) => setTimeout(() => resolve({ success: true }), 2000) // Simulated success
      );

      if (!result.success) {
        form.setError("email", {
          type: "manual",
          message: result.error || "Subscription failed.",
        });
      } else {
        form.reset();
        console.log("Subscribed successfully:", data.email);
      }
    } catch (error) {
      form.setError("email", {
        type: "manual",
        message:
          error instanceof Error ? error.message : "Failed to subscribe.",
      });
    }
  };

  return (
    <Section id="newsletter" className="max-w-xl py-8 md:py-12m relative z-10">
      <h4 className="mb-6 text-xl/[1.1] font-extrabold tracking-tight text-foreground md:text-2xl/[1.1]">
        Subscribe for Digital Insights
      </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormLabel className="mb-2">Email</FormLabel>
          <div className="flex items-center flex-wrap gap-2 md:gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormControl>
                    <Input
                      id="subscribe-form"
                      placeholder="Your email"
                      type="email"
                      className="h-10"
                      {...field}
                      disabled={isLoading}
                      aria-label="Subscribe to the newsletter"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading}
              data-loading={isLoading}
            >
              <span
                className={cn(
                  "inline-flex items-center ",
                  isLoading && "text-transparent"
                )}
              >
                <ChevronRight aria-hidden="true" />
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <LoaderCircle
                    className="animate-spin"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
              )}
            </Button>
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">
              {form.formState.errors.email?.message}
              {form.formState.isSubmitSuccessful &&
                "You have successfully subscribed to our newsletter."}
            </p>
          </div>
        </form>
      </Form>
    </Section>
  );
}
