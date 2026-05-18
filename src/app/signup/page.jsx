"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const image = formData.get("image");
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image,
      autoSignIn: false,
    });

    if (data) {
      toast.success(
        "Account created successfully! Please Sign In with your Email and Password.",
      );
      await authClient.signOut();
      redirect("/signin");
    }
    if (error) {
      toast.danger("Failed to create account. " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <section className="mx-auto w-full max-w-10/12 py-8 md:py-12 lg:py-14">
      <div className="relative overflow-hidden rounded-3xl border border-[#9ac5ee] bg-[#f8fbff]/90 shadow-xl shadow-[#1f5d9920]">
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-linear-to-br from-[#eff7ff] via-[#e4f2ff] to-[#d8ebff]" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative border-b border-[#c6def7] p-6 md:p-8 lg:border-b-0 lg:border-r lg:border-[#c6def7] lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0f3d66] md:text-sm">
              Join Spine Library
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#1f5d99] md:text-4xl lg:text-5xl">
              Create Your Account
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1a4f80] md:text-base">
              Build your profile to borrow books, manage your reading list, and
              get alerts for new arrivals that match your interests.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#b8d8f6] bg-[#ffffffb0] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1f5d99]">
                  Fast Access
                </p>
                <p className="mt-1 text-sm text-[#0f3d66]">
                  One-click borrowing dashboard
                </p>
              </div>
              <div className="rounded-2xl border border-[#b8d8f6] bg-[#ffffffb0] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1f5d99]">
                  Smart Alerts
                </p>
                <p className="mt-1 text-sm text-[#0f3d66]">
                  Get low stock & return reminders
                </p>
              </div>
              <div className="rounded-2xl border border-[#b8d8f6] bg-[#ffffffb0] px-4 py-3 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1f5d99]">
                  Member Perks
                </p>
                <p className="mt-1 text-sm text-[#0f3d66]">
                  Discover top picks, save favorites, and track your progress in
                  one place.
                </p>
              </div>
            </div>

            <p className="mt-7 text-sm text-[#1a4f80]">
              Build your member profile once and continue your library journey
              from any device.
            </p>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
              <Button
                type="button"
                onPress={handleGoogleSignIn}
                variant="bordered"
                className="h-11 w-full rounded-xl border-[#1f5d99] bg-[#ffffffd4] text-sm font-semibold text-[#0f3d66] hover:bg-[#edf5ff] md:h-12"
              >
                <FcGoogle className="h-5 w-5" />
                Continue with Google
              </Button>

              <div className="flex items-center gap-3 py-1">
                <div className="h-px w-full bg-[#b9d9f5]" />
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f5d99]">
                  or
                </span>
                <div className="h-px w-full bg-[#b9d9f5]" />
              </div>

              <TextField isRequired name="name" type="text">
                <Label className="text-[#0f3d66]">Name</Label>
                <Input
                  placeholder="Enter your full name"
                  className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff]"
                />
                <FieldError />
              </TextField>

              <TextField isRequired name="image" type="text">
                <Label className="text-[#0f3d66]">Image URL</Label>
                <Input
                  placeholder="https://example.com/profile.jpg"
                  className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff]"
                />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }

                  return null;
                }}
              >
                <Label className="text-[#0f3d66]">Email</Label>
                <Input
                  placeholder="you@example.com"
                  className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff]"
                />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }

                  return null;
                }}
              >
                <Label className="text-[#0f3d66]">Password</Label>
                <Input
                  placeholder="Create a secure password"
                  className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff]"
                />
                <Description className="text-[#1f5d99]">
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError />
              </TextField>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Button
                  type="submit"
                  className="h-11 w-full rounded-xl bg-[#1f5d99] text-sm font-bold text-[#eaf4ff] hover:bg-[#0f3d66] md:h-12"
                >
                  <Check />
                  Create Account
                </Button>
                <Button
                  type="reset"
                  variant="bordered"
                  className="h-11 w-full rounded-xl border-[#1f5d99] bg-transparent font-semibold text-[#1f5d99] hover:bg-[#93c5fd33] hover:text-[#0f3d66] md:h-12"
                >
                  Reset
                </Button>
              </div>

              <p className="pt-1 text-center text-sm text-[#1a4f80]">
                Already have a membership?{" "}
                <Link
                  href="/signin"
                  className="font-bold text-[#1f5d99] underline decoration-[#1f5d9940] underline-offset-4 transition hover:text-[#0f3d66]"
                >
                  Sign In
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
