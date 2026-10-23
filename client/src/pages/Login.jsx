import React from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Input } from '../components/ui/Input';
import { LockIcon, MailIcon, UserIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';



const Login = ({mode = "login"}) => {

    const isRegister = mode === "register";
    const navigate = useNavigate();

    const [form, setForm] = useState({name: "", email: "", password: ""});
    const [isLoading, setIsLoading] = useState(false);

    const updateField = (key, value) => setForm((prev) => ({...prev, [key]: value}));

    const handleSubmit = async (e) => {
        
    };

  return (
    <div className="min-h-screen text-zinc-900 flex flex-col md:flex-row">
        {/* left hero brand panel */}
        <div className="md:w-1/2 p-8 md:p-12 lg:p-16 bg-linear-to-br from-orange-50 via-zinc-100 to-red-50 border-b md:border-b-0 md:border-r border-zinc-200 flex flex-col justify-between relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('/pattern.svg')]"></div>
       <div className="relative z-10 flex items-center gap-3">
        <img src="/logo.svg" alt="logo" className="max-h-9"/>
        <span className="text-4xl font-medium uppercase text-zinc-900">Drivea</span>
       </div>
       
       <div className="relative z-10 my-12 space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-zinc-900 leading-tight">Secure, Simple & Reliable <br/> <span className="text-orange-600">Cloud Storage.</span></h2>
        <p className="text-sm md:text-base text-zinc-600 max-w-md leading-relaxed">Drivea is a secure and reliable cloud storage solution that allows you to store, share, and access your files from anywhere. </p>
       </div>

       <div className="relative z-10 text-sm text-zinc-500">
        @2026 Drivea. All rights reserved.
       </div>
        </div>
       

        {/* right auth from panel */}
      <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex items-centerjustify-center bg-white">
        <div className="w-full max-w-md spaqce-y-6 animate-fade-in">
            <div>
                <h3 className='text-2xl font-medium text-zinc-900'>{isRegister ? "Create Account" : "Welcome Back"}</h3>
                <p className="text-sm text-zinc-500 mt-1">{isRegister ? "Join us today and create your account." : "Please enter your credentials to access your account."}</p>
            </div>

            <from onSubmit={handleSubmit} className="space-y-4 ">
              {isRegister && (
                <Input
                  label="Full Name"
                  Icon={UserIcon}
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  required
                />
              )}
              <Input
                label="Email"
                type="email"
                Icon={MailIcon}
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                required
              />
              <Input
                label="Password"
                type="password"
                Icon={LockIcon}
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => updateField("password", e.target.value)}
                required
              />

              <Button type="submit" variant="primary" className="w-full py-3" isLoading={isLoading}>
              <span className="text-base font-medium">{isRegister ? "Sign Up" : "Login"}</span>
              </Button>
            </from>

            <div className="text-center pt-2">
                {isRegister ? (
                    <p className="text-xs text-zinc-500">
                        Already have an account? {" "}
                        <Link to="/login" className="text-orange-600 font-semibold hover:underline">
                            Login here
                        </Link>
                    </p>
                ) : (
                    <p className="text-xs text-zinc-500">
                        Don't have an account? {" "}
                        <Link to="/register" className="text-orange-600 font-semibold hover:underline">
                            Create Account
                        </Link>
                    </p>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login