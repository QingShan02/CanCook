"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
const LoginAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "son@gmail.com",
            password: "12345678"
        }
    });
    const onSubmit = async (data) => {
        const result = await signIn("credentials", {
            username: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: "/admin",

        });
    }
    return (
        <div className="container">
            <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                <img className="mb-4 d-block mx-auto" src="/assert/img/logo.png" alt="" width={72} height={57} />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating mb-3">
                    <input type="email"  {...register("email", {
                        required: {
                            value: true,
                            message: "Không được bỏ trống !"
                        }
                    })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="text-danger mb-1">{errors.email?.message}</div>
                <div className="form-floating mb-3">
                    <input type="password"  {...register("password", {
                        required: {
                            value: true,
                            message: "Không được bỏ trống !"
                        }
                    })} className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="text-danger mb-1">{errors.password?.message}</div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit" >Sign in</button>
                <p className="mt-5 mb-3 text-muted">©2023</p>
            </form>
        </div>
    );
}
export default LoginAdmin;