import Image from "next/image";

interface IAvatarCode {
  circularAvatar: JSX.Element | string;
  roundAvatar: JSX.Element | string;
  bottomStateAvatar: JSX.Element | string;
  topStateAvatar: JSX.Element | string;
}

export const AvatarPreviewCode: IAvatarCode = {
  circularAvatar: (
    <div className="flex justify-center items-center">
      <Image
        src={
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        }
        className="mt-2 rounded-full"
        alt="avatar"
        width={62}
        height={62}
      />
    </div>
  ),
  roundAvatar: (
    <div className="flex justify-center items-center">
      <Image
        src={
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        }
        className="mt-2 rounded-md"
        alt="avatar"
        width={62}
        height={62}
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
};

export const AvatarJsxCodeData: IAvatarCode = {
  circularAvatar: `<img className="inline-block size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="avatar"/>`,

  roundAvatar: `<img className="inline-block size-[62px] rounded-lg" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="avatar"/>`,

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

  topStateAvatar: ``,
};

export const AvatarHtmlCodeData: IAvatarCode = {
  circularAvatar: `<img class="inline-block size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="avatar">`,
  roundAvatar: `<img class="inline-block size-[62px] rounded-lg" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="avatar">`,
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

  topStateAvatar: ``,
};
