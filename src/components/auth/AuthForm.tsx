import { useForm } from "react-hook-form";
import { PrimaryButton } from "../buttons";
import { Input } from "../Input/Input";
import { Toaster } from "sonner";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/authContext";
import useLogin from "../../hooks/auth/useLogin";

interface FormValues {
  email: string;
  password: string;
}


export function AuthForm() {

  const { login } = useContext(AuthContext);

  const { login: loginContext } = useLogin("/login", login)

  const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<FormValues>({
    mode: 'onChange'
  })

  const handleFormSubmit = async (data: FormValues) => {
    // Lamo a mi hook que maneja la petición y hace el set del token
    await loginContext(data)
  };

  return (
    <>
      <Toaster
        duration={3500}
        position="top-right"
      />
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-4 justify-center items-center lg:items-end xl:items-center w-full md:w-[55rem] mr-0 lg:mr-2 xl:mr-0"
      >
        <div className="w-[90%] sm:w-1/2">
          <h1 className="border-s-8 h-[2.5rem] border-[#FF6752] text-start flex items-center gap-3">
            <span className="uppercase ms-6 text-2xl font-bold">
              WELCOME
            </span>
          </h1>
        </div>
        <Input
          name="email"
          placeholder="EMAIL"
          type="email"
          errors={errors}
          register={register}
          maxLength={100}
          required={true}
          pattern={{
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Ingrese un mail válido'
          }}
        />
        <Input
          name="password"
          placeholder="PASSWORD"
          type="password"
          errors={errors}
          register={register}
          minLength={8}
          required={true}
        />

        <div className="w-[90%] sm:w-1/2 mb-3">
          <p className="text-[#A4AFB7] text-end cursor-pointer">Forgot your password?</p>
        </div>

        <PrimaryButton
          text={isSubmitting ? "Loading" : "SIGN IN"}
          type="submit"
          disabled={!isValid || isSubmitting}
        />
        <div>
          <p className="text-gray-400">DON’T HAVE AN ACCOUNT? <span className="text-[#015F91] cursor-pointer">REGISTER</span></p>
        </div>
      </form>
    </>
  )
}
