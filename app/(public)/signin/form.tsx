"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from 'react';

export default function Form(){
    const router = useRouter();
    const [username, setUsername] =  useState<undefined | string>("");
    const [password, setPassword] = useState<undefined | string>("");

    async function handleSubmit(e: FormEvent){
        e.preventDefault();
        const res = await fetch("/api/login", {
            method: "post",
            body: JSON.stringify({username, password}),
        })
        if (res.ok) {
            router.push("/feed")
        } else {
            alert("login failed!")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg">
            <div className="text-center">
                <h3 className="font-semibold">Sign In</h3>
            </div>
            <div className="my-3">
                <hr />
            </div>
            <div>
                <div className="flex flex-col gap-2">
                    <label>Username</label>
                    <input
                        className="text-black p-3 border border-slate-700 rounded-lg"
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        id="username"
                        placeholder="Username"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label>Password</label>
                <input 
                    className="text-black p-3 border border-slate-700 rounded-lg"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    placeholder="Password"
                    required
                />
            </div>
            <button type="submit" className="mt-4 bg-slate-900 text-white p-3 rounded-lg">Sign In</button>
        </form>
    )
}