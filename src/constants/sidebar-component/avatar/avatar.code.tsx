import Image from "next/image";

interface IAvatarCode {
  circularAvatar: JSX.Element | string;
  roundAvatar: JSX.Element | string;
  bottomStateAvatar: JSX.Element | string;
  topStateAvatar: JSX.Element | string;
  avatarGroup: JSX.Element | string;
  textAvatar: JSX.Element | string;
}

export const AvatarPreviewCode: IAvatarCode = {
  circularAvatar: (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <img
        className="size-10 rounded-full object-cover object-center"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt=""
      />
      <img
        className="size-14 rounded-full object-cover object-center"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt=""
      />
      <img
        className="size-16 rounded-full object-cover object-center"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt=""
      />
    </div>
  ),

  roundAvatar: (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <img
        className="size-10 rounded-md object-cover object-center"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt=""
      />
      <img
        className="size-14 rounded-md object-cover object-center"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt=""
      />
      <img
        className="size-16 rounded-md object-cover object-center"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt=""
      />
    </div>
  ),
  bottomStateAvatar: (
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
  ),

  topStateAvatar: (
    <div className="flex flex-wrap items-end justify-center gap-6">
      <div className="relative size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
        <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full bg-green-400 ring ring-white dark:ring-black"></span>
      </div>
      <div className="relative size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-yellow-400 ring ring-white dark:ring-black"></span>
      </div>
      <div className="relative size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-400 ring ring-white dark:ring-black"></span>
      </div>
    </div>
  ),

  avatarGroup: (
    <div className="flex items-center justify-center -space-x-2">
      <div className="size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>
  ),

  textAvatar: (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
      </div>
      <div className=" text-black dark:text-white">
        <div className="text-base font-medium">Mohit Singh</div>
        <div className="text-xs font-medium opacity-60">mohit@gmail.com</div>
      </div>
    </div>
  ),
};

export const AvatarJsxCodeData: IAvatarCode = {
  circularAvatar: `<div className="flex flex-wrap items-center justify-center gap-6">
  <img
    className="size-10 rounded-full object-cover object-center"
    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    alt=""
   />
  <img
    className="size-14 rounded-full object-cover object-center"
    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    alt=""
   />
   <img
    className="size-16 rounded-full object-cover object-center"
    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    alt=""
   />
</div>`,

  roundAvatar: `<div className="flex flex-wrap items-center justify-center gap-6">
  <img
    className="size-10 rounded-md object-cover object-center"
    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    alt=""
   />
  <img
    className="size-14 rounded-md object-cover object-center"
    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    alt=""
   />
   <img
    className="size-16 rounded-md object-cover object-center"
    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    alt=""
   />
</div>`,

  bottomStateAvatar: `<div className="flex flex-wrap items-end justify-center gap-6">
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
    </div>`,

  topStateAvatar: `<div className="flex flex-wrap items-end justify-center gap-6">
      <div className="relative size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
        <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full bg-green-400 ring ring-white dark:ring-black"></span>
      </div>
      <div className="relative size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-yellow-400 ring ring-white dark:ring-black"></span>
      </div>
      <div className="relative size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-400 ring ring-white dark:ring-black"></span>
      </div>
    </div>`,

  avatarGroup: `<div className="flex items-center justify-center -space-x-2">
      <div className="size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>`,

  textAvatar: `<div className="flex flex-wrap items-center justify-center gap-3">
      <div className="size-16">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt=""
        />
      </div>
      <div className=" text-black dark:text-white">
        <div className="text-base font-medium">Mohit Singh</div>
        <div className="text-xs font-medium opacity-60">mohit@gmail.com</div>
      </div>
    </div>`,
};

export const AvatarHtmlCodeData: IAvatarCode = {
  circularAvatar: `<div class="flex flex-wrap items-center justify-center gap-6">
  <img class="size-10 rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
  <img class="size-14 rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
  <img class="size-16 rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
</div>
`,

  roundAvatar: `<div class="flex flex-wrap items-center justify-center gap-6">
  <img class="size-10 rounded-md object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
  <img class="size-14 rounded-md object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
  <img class="size-16 rounded-md object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
</div>
`,

  bottomStateAvatar: `<div class="flex flex-wrap items-end justify-center gap-6">
  <div class="relative size-16">
    <img class="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
    <span class="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-green-400 ring ring-white dark:ring-black"></span>
  </div>
  <div class="relative size-16">
    <img class="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
    <span class="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-yellow-400 ring ring-white dark:ring-black"></span>
  </div>
  <div class="relative size-16">
    <img class="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
    <span class="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-red-400 ring ring-white dark:ring-black"></span>
  </div>
</div>`,

  topStateAvatar: `<div class="flex flex-wrap items-end justify-center gap-6">
  <div class="relative size-16">
    <img class="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
    <span class="absolute top-0 right-0 h-3.5 w-3.5 rounded-full bg-green-400 ring ring-white dark:ring-black"></span>
  </div>
  <div class="relative size-16">
    <img class="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
    <span class="absolute top-0 right-0 h-4 w-4 rounded-full bg-yellow-400 ring ring-white dark:ring-black"></span>
  </div>
  <div class="relative size-16">
    <img class="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
    <span class="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-400 ring ring-white dark:ring-black"></span>
  </div>
</div>
`,

  avatarGroup: `<div class="flex items-center justify-center -space-x-2">
  <div class="size-16">
    <img class="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
  </div>
  <div class="size-16">
    <img class="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
  </div>
  <div class="size-16">
    <img class="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
  </div>
  <div class="size-16">
    <img class="h-full w-full rounded-full object-cover object-center ring-4 ring-white dark:ring-black" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
  </div>
</div>
`,

  textAvatar: `<div class="flex flex-wrap items-center justify-center gap-3">
  <div class="size-16">
    <img class="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" />
  </div>
  <div class="text-black dark:text-white">
    <div class="text-base font-medium">Mohit Singh</div>
    <div class="text-xs font-medium opacity-60">mohit@gmail.com</div>
  </div>
</div>
`,
};
