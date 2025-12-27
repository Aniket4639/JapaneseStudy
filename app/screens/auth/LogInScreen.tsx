"use client";
import React, { useState } from "react";

const LogInScreen = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div className="flex flex-col items-center gap-6">
      <text className="flex w-[400px] text-black text-2xl md:text-3xl text-center justify-center px-8">{`Welcome to\n Study!`}</text>
      <div className="flex w-[300px] flex-col items-center gap-2">
        <input
          id="login"
          type="text"
          value={userName}
          onChange={handleUserNameChange}
          placeholder="Login Id"
          className="flex w-full border border-gray-300 p-2 rounded-md text-black"
        />
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          className="flex w-full border border-gray-300 p-2 rounded-md text-black"
        />
      </div>
      <button
        disabled={!userName || !password}
        className="flex p-2 rounded-md w-[300px] justify-center bg-blue-600 text-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </div>
  );
};

export default LogInScreen;
