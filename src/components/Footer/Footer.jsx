import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail, FiZap } from "react-icons/fi";

const Footer = () => {
  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Ideas", href: "/ideas" },
    { label: "Add Idea", href: "/add-idea" },
    { label: "My Interactions", href: "/my-interactions" },
  ];

  const accountLinks = [
    { label: "My Ideas", href: "/my-ideas" },
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
    { label: "Sign In", href: "/signin" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "/help" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
    { label: "GitHub", href: "https://github.com", icon: FaGithub },
  ];

  return (
    <footer className="border-t border-[#5e41de]/15 bg-white dark:border-[#5e41de]/20 dark:bg-zinc-950">
      <div className="mx-auto max-w-11/12 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5e41de] text-white shadow-md shadow-[#5e41de]/30">
                <FiZap size={18} />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-[#5e41de] dark:text-[#a78bfa]">
                IdeaVault
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              The platform where startup ideas come to life. Share, discover,
              and collaborate with innovators worldwide.
            </p>
            <div className="h-px w-10 rounded-full bg-[#5e41de]/30" />
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
                Follow Us
              </p>
              <div className="flex gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#5e41de]/20 bg-[#5e41de]/5 text-[#5e41de] transition-all duration-200 hover:bg-[#5e41de] hover:text-white hover:shadow-md hover:shadow-[#5e41de]/25 dark:border-[#5e41de]/30 dark:bg-[#5e41de]/10 dark:text-[#a78bfa] dark:hover:bg-[#5e41de] dark:hover:text-white"
                  >
                    <Icon size={13} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
                Explore
              </h3>
              <div className="h-0.5 w-8 rounded-full bg-[#5e41de]" />
            </div>
            <ul className="space-y-2.5">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-all hover:translate-x-1 hover:text-[#5e41de] dark:text-zinc-400 dark:hover:text-[#a78bfa]"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#5e41de]/40 transition-all group-hover:w-2 group-hover:bg-[#5e41de]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-4">
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
                Account
              </h3>
              <div className="h-0.5 w-8 rounded-full bg-[#5e41de]" />
            </div>
            <ul className="space-y-2.5">
              {accountLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-all hover:translate-x-1 hover:text-[#5e41de] dark:text-zinc-400 dark:hover:text-[#a78bfa]"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#5e41de]/40 transition-all group-hover:w-2 group-hover:bg-[#5e41de]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
                Support
              </h3>
              <div className="h-0.5 w-8 rounded-full bg-[#5e41de]" />
            </div>
            <ul className="space-y-2.5">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-all hover:translate-x-1 hover:text-[#5e41de] dark:text-zinc-400 dark:hover:text-[#a78bfa]"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#5e41de]/40 transition-all group-hover:w-2 group-hover:bg-[#5e41de]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@ideavault.io"
              className="group mt-1 flex items-center gap-2 rounded-lg border border-[#5e41de]/15 bg-[#5e41de]/5 px-3 py-2.5 transition-colors hover:border-[#5e41de]/30 hover:bg-[#5e41de]/10 dark:border-[#5e41de]/25 dark:bg-[#5e41de]/10"
            >
              <FiMail
                size={14}
                className="shrink-0 text-[#5e41de] dark:text-[#a78bfa]"
              />
              <span className="text-xs text-zinc-500 transition-colors group-hover:text-[#5e41de] dark:text-zinc-400 dark:group-hover:text-[#a78bfa]">
                hello@ideavault.io
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[#5e41de]/10 pt-6 dark:border-[#5e41de]/15">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#5e41de] dark:text-[#a78bfa]">
                IdeaVault
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
              {["Terms", "Privacy", "Cookies"].map((label, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && (
                    <span
                      className="h-3 w-px bg-zinc-200 dark:bg-zinc-700"
                      aria-hidden="true"
                    />
                  )}
                  <Link
                    href={`/${label.toLowerCase()}`}
                    className="px-1.5 transition-colors hover:text-[#5e41de] dark:hover:text-[#a78bfa]"
                  >
                    {label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
