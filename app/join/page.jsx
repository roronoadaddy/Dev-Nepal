"use client";
import { useState, useActionState, startTransition } from "react";
import Logo from "../../components/logo";
import { handleGithubLogin, handleGoogleLogin } from "./oauths";
import { signup } from "./signup";

const JoinPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [state, formAction] = useActionState(signup, { error: null });


const handleSubmit = (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);

  startTransition(() => {
    formAction(formData);
  });
};


  const getFieldClasses = (field) =>
    `w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-200 placeholder-[#1A1A1A]/30 focus:outline-none ${
      errors[field]
        ? "border-[#F5A623]/90 bg-[#FFFBF0] text-[#1A1A1A] focus:border-[#F5A623] focus:ring-[#F5A623]/20"
        : "border-[#1A1A1A]/15 bg-white text-[#1A1A1A] focus:border-[#1E88E5] focus:ring-[#1E88E5]/25"
    }`;

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Use a valid email like you@devnepal.com.";
    }

    if (!password) {
      newErrors.password = "Set a secure password.";
    } else if (password.length < 8) {
      newErrors.password = "Password should be at least 8 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords must match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  return (
    <div id="loginholder" className="min-h-screen overflow-hidden bg-[#FAFAF7] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center justify-center">
        <div className="w-full overflow-hidden rounded-4xl border border-[#1A1A1A]/10 bg-white/95 shadow-xl shadow-[#1E88E5]/10 lg:flex lg:min-h-160">
          <div className="flex flex-col justify-between bg-linear-to-br from-[#1E88E5]/10 via-white to-[#F5A623]/10 p-6 sm:p-8 lg:w-[42%] lg:p-10 xl:p-12">
            <div>
              <span className="inline-flex rounded-full border border-[#1E88E5]/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#1E88E5]">
                Join DevNepal
              </span>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#1A1A1A] sm:text-4xl">
                Create your account and build faster.
              </h1>
              <p className="mt-3 max-w-md text-sm leading-6 text-[#1A1A1A]/70 sm:text-base">
                Sign up in a few steps to connect with builders, discover opportunities, and stay in the loop.
              </p>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-[#1A1A1A]/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1E88E5]" />
                <span>Track your learning and community activity in one place.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#F5A623]" />
                <span>Stay updated on events, jobs, and local developer opportunities.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/40" />
                <span>Join a growing network of Nepal-based builders and founders.</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none">
              <div className="group mb-6 text-center sm:mb-8 lg:text-left">
                <a href="/" className="inline-flex items-center" aria-label="DevNepal home">
                  <Logo className="h-8 w-auto text-[#1A1A1A] sm:h-9" />
                </a>
                <p className="mt-2 text-sm font-light tracking-wide text-[#1A1A1A]/50">
                  Create your DevNepal account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {state?.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}

                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium tracking-wide text-[#1A1A1A]/70">
                      Full name
                    </label>
                    <input
                      required
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Aarav Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={getFieldClasses("name")}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-[#F5A623]">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium tracking-wide text-[#1A1A1A]/70">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@devnepal.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={getFieldClasses("email")}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-[#F5A623]">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <label htmlFor="password" className="mb-1.5 block text-sm font-medium tracking-wide text-[#1A1A1A]/70">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      required
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={getFieldClasses("password")}
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-[#F5A623]">{errors.password}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium tracking-wide text-[#1A1A1A]/70">
                      Confirm password
                    </label>
                    <input
                      id="confirmPassword"
                      required
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={getFieldClasses("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                      <p className="mt-2 text-sm text-[#F5A623]">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full cursor-pointer rounded-xl bg-[#1E88E5] py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#F5A623] hover:text-[#1A1A1A] hover:shadow-[0_0_30px_-8px_rgba(245,166,35,0.5)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:py-4"
                >
                  Create account
                </button>

                <div className="relative my-4 flex items-center">
                  <div className="grow border-t border-[#1A1A1A]/10"></div>
                  <span className="mx-4 text-xs font-medium uppercase tracking-wider text-[#1A1A1A]/35">or</span>
                  <div className="grow border-t border-[#1A1A1A]/10"></div>
                </div>

                <div className="space-y-3 sm:space-y-3.5 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0">
                  <button
                  onClick={handleGoogleLogin}
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-[#1A1A1A]/15 bg-white py-3.5 text-sm font-medium text-[#1A1A1A]/80 transition-all duration-200 hover:border-[#1A1A1A]/25 hover:bg-[#1A1A1A]/3"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Sign up with Google
                  </button>

                  <button
                  onClick={handleGithubLogin}
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-[#1A1A1A]/15 bg-white py-3.5 text-sm font-medium text-[#1A1A1A]/80 transition-all duration-200 hover:border-[#1A1A1A]/25 hover:bg-[#1A1A1A]/3"
                  >
                    <svg className="h-5 w-5 text-[#1A1A1A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.44-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
                    </svg>
                    Sign up with GitHub
                  </button>
                </div>
              </form>

              <p className="mt-5 text-center text-xs text-[#1A1A1A]/50 sm:mt-6 lg:text-left">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-[#1E88E5] transition hover:text-[#F5A623]">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
