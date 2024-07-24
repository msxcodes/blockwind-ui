import React from "react";

export default function Test() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-6">
      <div className="relative size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
        <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full bg-green-400 ring ring-white dark:ring-black"></span>
      </div>
      <div className="relative size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
        <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-yellow-400 ring ring-white dark:ring-black"></span>
      </div>
      <div className="relative size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
        <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-red-400 ring ring-white dark:ring-black"></span>
      </div>
    </div>
  );
}
