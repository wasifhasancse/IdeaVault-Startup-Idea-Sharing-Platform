"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiZap } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { RiLightbulbFlashFill } from "react-icons/ri";
import styled from "styled-components";

export default function SignIn() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    if (error) {
      toast.danger("Failed to sign in. " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <section className="mx-auto w-full max-w-10/12 py-8 md:py-12 lg:py-14">
      <div className="relative overflow-hidden rounded-3xl border border-[#5e41de]/20 bg-white/90 shadow-2xl shadow-[#5e41de]/15 dark:border-[#5e41de]/25 dark:bg-zinc-950/90 dark:shadow-[#5e41de]/20">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-[#5e41de]/5 to-[#a78bfa]/10 dark:from-zinc-950 dark:via-[#5e41de]/10 dark:to-[#a78bfa]/5" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#5e41de]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#a78bfa]/10 blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Panel */}
          <div className="relative border-b border-[#5e41de]/15 p-6 md:p-8 lg:border-b-0 lg:border-r lg:border-[#5e41de]/15 lg:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/10 px-4 py-1.5 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:text-[#a78bfa]">
              <RiLightbulbFlashFill className="animate-pulse" /> IdeaVault
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-50 md:text-4xl lg:text-5xl">
              Welcome Back,{" "}
              <span className="text-[#5e41de] dark:text-[#a78bfa]">
                Innovator
              </span>
            </h1>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 md:text-base">
              Sign in to discover, share, and validate startup ideas with
              thousands of innovators around the globe.
            </p>

            <div className="my-6 flex justify-center lg:my-8">
              <DotLottieReact
                src="https://lottie.host/e7516749-47b5-44f3-b3e2-a6de7b31b0a8/d4OktnL71s.lottie"
                loop
                autoplay
                style={{ width: "210px", height: "210px" }}
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#5e41de]/20 bg-[#5e41de]/5 px-4 py-3 shadow-sm shadow-[#5e41de]/10 dark:bg-[#5e41de]/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5e41de] dark:text-[#a78bfa]">
                  💡 My Ideas
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Manage and track your submitted startup concepts
                </p>
              </div>
              <div className="rounded-2xl border border-[#5e41de]/20 bg-[#5e41de]/5 px-4 py-3 shadow-sm shadow-[#5e41de]/10 dark:bg-[#5e41de]/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5e41de] dark:text-[#a78bfa]">
                  ⚡ Interactions
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Track votes, comments, and feedback on ideas
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
              New to IdeaVault?{" "}
              <Link
                href="/signup"
                className="font-bold text-[#5e41de] underline decoration-[#5e41de]/30 underline-offset-4 transition hover:text-[#4930b8] dark:text-[#a78bfa]"
              >
                Create an account
              </Link>
            </p>
          </div>

          {/* Right Panel */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5e41de]/10 shadow-sm shadow-[#5e41de]/20 dark:bg-[#5e41de]/20">
                <RiLightbulbFlashFill className="h-6 w-6 text-[#5e41de] dark:text-[#a78bfa]" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-50 md:text-3xl">
                  Sign in
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Enter your credentials to access your account
                </p>
              </div>
            </div>

            <StyledWrapper>
              <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
                <Button
                  type="button"
                  onPress={handleGoogleSignIn}
                  variant="bordered"
                  className="google-btn h-11 w-full rounded-xl border-[#5e41de]/25 bg-white/70 text-sm font-semibold text-zinc-700 hover:border-[#5e41de]/50 hover:bg-[#5e41de]/5 dark:bg-zinc-900/70 dark:text-zinc-200 md:h-12"
                >
                  <FcGoogle className="h-5 w-5" />
                  Continue with Google
                </Button>

                <div className="flex items-center gap-3">
                  <div className="h-px w-full bg-[#5e41de]/15" />
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    or
                  </span>
                  <div className="h-px w-full bg-[#5e41de]/15" />
                </div>

                <TextField
                  isRequired
                  name="email"
                  type="email"
                  className="w-full"
                  validate={(value) => {
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label className="mb-1.5 block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Email address
                  </Label>
                  <Input
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#5e41de]/20 bg-[#5e41de]/5 px-4 py-2.5 text-sm dark:border-[#5e41de]/25 dark:bg-[#5e41de]/10"
                  />
                  <FieldError className="mt-1 text-xs text-red-500" />
                </TextField>

                <TextField
                  isRequired
                  name="password"
                  type="password"
                  className="w-full"
                >
                  <Label className="mb-1.5 block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Password
                  </Label>
                  <Input
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-[#5e41de]/20 bg-[#5e41de]/5 px-4 py-2.5 text-sm dark:border-[#5e41de]/25 dark:bg-[#5e41de]/10"
                  />
                  <FieldError className="mt-1 text-xs text-red-500" />
                </TextField>

                <button
                  type="button"
                  className="-mt-2 self-start text-xs font-semibold text-[#5e41de] underline-offset-4 transition hover:underline hover:text-[#4930b8] dark:text-[#a78bfa]"
                >
                  Forgot Password?
                </button>

                <button type="submit" className="submit-btn">
                  <IoMdLogIn className="submit-icon" />
                  <span className="submit-label">Sign In to IdeaVault</span>
                </button>

                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                  New to IdeaVault?{" "}
                  <Link
                    href="/signup"
                    className="font-bold text-[#5e41de] underline decoration-[#5e41de]/30 underline-offset-4 transition hover:text-[#4930b8] dark:text-[#a78bfa]"
                  >
                    Create account
                  </Link>
                </p>
              </Form>
            </StyledWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

const StyledWrapper = styled.div`
  width: 100%;

  input[type="email"]:focus,
  input[type="password"]:focus,
  input[type="text"]:focus {
    outline: none !important;
    border-color: #5e41de !important;
    background: rgba(94, 65, 222, 0.07) !important;
    box-shadow:
      0 0 0 3px rgba(94, 65, 222, 0.14),
      0 2px 14px rgba(94, 65, 222, 0.1) !important;
  }

  input::placeholder {
    color: rgba(94, 65, 222, 0.3);
  }

  .google-btn {
    position: relative;
    overflow: hidden;
  }

  .google-btn::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -75%;
    width: 45%;
    height: 200%;
    background: rgba(94, 65, 222, 0.06);
    transform: skewX(-15deg);
    transition: left 0.5s ease;
  }

  .google-btn:hover::after {
    left: 125%;
  }

  .submit-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 46px;
    border: none;
    border-radius: 12px;
    background: #5e41de;
    color: white;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.04em;
    cursor: pointer;
    overflow: visible;
    box-shadow: 0 4px 18px rgba(94, 65, 222, 0.35);
    transition:
      background 0.2s ease,
      box-shadow 0.2s ease;
  }

  .submit-btn:hover {
    background: #4930b8;
    box-shadow: 0 8px 24px rgba(94, 65, 222, 0.45);
    animation: rotate624 0.7s ease-in-out both;
  }

  .submit-btn:active {
    box-shadow: 0 3px 10px rgba(94, 65, 222, 0.3);
  }

  .submit-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .submit-label {
    display: inline-block;
    transition: margin-left 0.5s ease;
  }

  .submit-btn:hover .submit-icon {
    opacity: 1;
  }

  .submit-btn:hover .submit-label {
    margin-left: 10px;
    animation: storm1261 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }

  @keyframes rotate624 {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }

  @keyframes storm1261 {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }
`;
