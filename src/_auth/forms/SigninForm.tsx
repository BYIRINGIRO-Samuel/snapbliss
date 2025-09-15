import { useState } from "react";
import { Globe, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { SigninValidation } from "@/lib/validation";
import { useSignInAccount } from "@/lib/react-query/queries";
import { useUserContext } from "@/context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

const SigninForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const { mutateAsync: signInAccount, isPending } = useSignInAccount();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
    const session = await signInAccount(user);

    if (!session) {
      toast({ title: "Login failed. Please try again." });
      return;
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();
      navigate("/");
    } else {
      toast({ title: "Login failed. Please try again." });
      return;
    }
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const renderWelcomeText = () => {
    if (language === 'en') {
      return (
        <>
          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Log in to your account</h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            Welcome back! Please enter your details.
          </p>
        </>
      );
    } else if (language === 'fr') {
      return (
        <>
          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Connectez-vous à votre compte</h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            Bon retour! Veuillez entrer vos informations.
          </p>
        </>
      );
    }
  };

  const renderAccountText = () => {
    if (language === 'en') {
      return (
        <p className="text-small-regular text-light-2">
          Don&apos;t have an account?
          <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">
            Sign up
          </Link>
        </p>
      );
    } else if (language === 'fr') {
      return (
        <p className="text-small-regular text-light-2">
          Vous n&apos;avez pas de compte?
          <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">
            Inscrivez-vous
          </Link>
        </p>
      );
    }
  };

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <div className="flex items-center justify-center gap-3">
          <img src="/assets/images/logo-up.svg" alt="logo" width={35} height={35} />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 h3-bold md:h2-bold">
            SnapBliss
          </p>

        </div>

        {renderWelcomeText()}

        <form onSubmit={form.handleSubmit(handleSignin)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">
                  {language === 'en' ? 'Email' : 'Email'}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" size={20} />
                    <Input type="email" className="shad-input pl-10" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">
                  {language === 'en' ? 'Password' : 'Mot de passe'}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" size={20} />
                    <Input type={showPassword ? "text" : "password"} className="shad-input pl-10 pr-10" {...field} />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff size={20} className="text-purple-500" /> : <Eye size={20} className="text-purple-500" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="shad-button_primary">
            {isPending || isUserLoading ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ) : (
              language === 'en' ? 'Log in' : 'Se connecter'
            )}
          </Button>

          <div className="flex justify-between items-center mt-4">
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Globe size={24} className="text-purple-500 cursor-pointer" />
              {isDropdownOpen && (
                <div className="absolute top-6 left-0 bg-white shadow-lg p-2 rounded-md z-10">
                  <div
                    className="cursor-pointer text-purple-500 py-1"
                    onClick={() => handleLanguageChange('en')}
                  >
                    English
                  </div>
                  <div
                    className="cursor-pointer text-purple-500 py-1"
                    onClick={() => handleLanguageChange('fr')}
                  >
                    Français
                  </div>
                </div>
              )}
            </div>

            {renderAccountText()}
          </div>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
