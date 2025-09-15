import * as z from "zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";

import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queries";
import { SignupValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";
import { Eye, EyeOff, User, AtSign, Mail, Lock } from "lucide-react";
import { useState } from "react";

const SignupForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateUserAccount();
  const { mutateAsync: signInAccount, isPending: isSigningInUser } = useSignInAccount();

  const handleSignup = async (user: z.infer<typeof SignupValidation>) => {
    try {
      const newUser = await createUserAccount(user);

      if (!newUser) {
        toast({ title: "Sign up failed. Please try again." });
        return;
      }

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if (!session) {
        toast({ title: "Something went wrong. Please log in to your new account" });
        navigate("/sign-in");
        return;
      }

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();
        navigate("/");
      } else {
        toast({ title: "Login failed. Please try again." });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col p-4">
        <div className="flex items-center justify-center gap-3">
          <img src="/assets/images/logo-up.svg" alt="logo" width={35} height={35} />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 h3-bold md:h2-bold">
            SnapBliss
          </p>

        </div>

        <h2 className="h3-bold md:h2-bold pt-2 sm:pt-6 text-center">
          {language === 'en' ? 'Create a new account' : 'Créer un nouveau compte'}
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-1 text-center">
          {language === 'en' ? 'To use snapBliss, please enter your details 🤗' : 'Pour utiliser SnapBliss, veuillez entrer vos informations 🤗'}
        </p>

        <form onSubmit={form.handleSubmit(handleSignup)} className="flex flex-col gap-4 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">{language === 'en' ? 'Name' : 'Nom'}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" size={20} />
                    <Input type="text" className="shad-input pl-10" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">{language === 'en' ? 'Username' : 'Nom d\'utilisateur'}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" size={20} />
                    <Input type="text" className="shad-input pl-10" {...field} />
                  </div>
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
                <FormLabel className="shad-form_label">{language === 'en' ? 'Email' : 'Email'}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" size={20} />
                    <Input type="text" className="shad-input pl-10" {...field} />
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
                <FormLabel className="shad-form_label">{language === 'en' ? 'Password' : 'Mot de passe'}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" size={20} />
                    <Input type={showPassword ? "text" : "password"} className="shad-input pl-10 pr-10" {...field} />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff className="text-purple-500" size={20} /> : <Eye className="text-purple-500" size={20} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="shad-button_primary mt-4">
            {isCreatingAccount || isSigningInUser || isUserLoading ? (
              <div className="flex-center gap-2">
                <Loader /> {language === 'en' ? 'Loading...' : 'Chargement...'}
              </div>
            ) : (
              language === 'en' ? 'Sign Up' : 'S\'inscrire'
            )}
          </Button>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex items-center gap-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'fr')}
                className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-3 back rounded-md mr-5"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <p className="text-small-regular text-light-2 text-center">
              {language === 'en' ? "Already have an account?" : "Vous avez déjà un compte ?"}
              <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">
                {language === 'en' ? 'Log in' : 'Se connecter'}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
