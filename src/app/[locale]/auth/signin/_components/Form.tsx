"use client";

import FormFields from "@/app/[locale]/_components/form-fields/form-fields";
import { Pages, Routes } from "@/components/constants/enum";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { toast } from "@/hooks/use-toast";
import useFormFields from "@/hooks/useFormFields";
import { IFormField } from "../../../../../Types/app";
import { Translations } from "../../../../../Types/translations";
import { signIn } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";

function Form({ translations }: { translations: Translations }) {
  const router = useRouter();
  const { locale } = useParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { getFormFields } = useFormFields({
    slug: Pages.LOGIN,
    translations,
  });
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res?.error) {
        const validationError = JSON.parse(res?.error).validationError;
        setError(validationError);
        const responseError = JSON.parse(res?.error).responseError;
        if (responseError) {
          toast({
            title: responseError,
            className: "text-destructive",
          });
        }
      }
      if (res?.ok) {
        toast({
          title: translations.messages.loginSuccessful,
          className: "text-green-400",
        });
        router.replace(`/${locale}/${Routes.PROFILE}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      {getFormFields().map((field: IFormField) => (
        <div key={field.name} className="mb-3">
          <FormFields {...field} error={error} />
        </div>
      ))}
      
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? <Loader /> : translations.auth.login.submit}
      </Button>
      <Button className="bg-secondary text-base !text-black w-full mt-4" onClick={() => signIn("google")}> 
        
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <path fill="#fbc02d" d="M43.611,20.083h-1.7H24v8h11.374c-1.765,4.978-6.476,8.582-11.874,8.582c-7.183,0-13-5.817-13-13 s5.817-13,13-13c3.06,0,5.858,1.065,8.104,2.846l6.002-6.001C32.421,4.863,28.375,3,24,3c-11.046,0-20,8.954-20,20s8.954,20,20,20 c10.991,0,19.866-8.928,19.997-19.857L43.611,20.083z" />
  <path fill="#e53935" d="M6.306,11.72l6.58,4.83C15.167,13.708,19.317,11.5,24,11.5c3.06,0,5.858,1.065,8.104,2.846l6.002-6.001 C32.421,4.863,28.375,3,24,3C16.472,3,9.923,6.922,6.306,11.72z" />
  <path fill="#4caf50" d="M24,44c4.306,0,8.265-1.432,11.445-3.866l-5.384-5.011c-1.758,1.233-3.947,1.977-6.061,1.977 c-5.452,0-10.081-3.504-11.761-8.388l-6.446,4.966C8.807,39.61,15.964,44,24,44z" />
  <path fill="#1565c0" d="M43.611,20.083h-1.7H24v8h11.374c-1.155,3.258-3.686,6.037-6.981,7.494c0.014-0.007,0.028-0.015,0.042-0.022 c0.019,0.007,0.038,0.015,0.057,0.022c2.273,0.93,4.786,1.39,7.13,1.39c5.047,0,9.639-1.689,13.242-4.527 C47.037,29.389,44.764,24.786,43.611,20.083z" />
</svg>Sign in with Google</Button>
      <Button  className="bg-secondary text-base !text-black w-full mt-4" onClick={() => signIn("facebook")}> 
<svg width="800px"
 height="800px"
 viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"/>
  <path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"/>
  </svg>Sign in with Facebook</Button>
    </form>
  );
}

export default Form;