interface IAlertCode {
  defaultAlert: any;
  infoAlert: any;
  successAlert: any;
  dangerAlert: any;
  warningAlert: any;
  borderedAlert: any;
  buttonAlert: any;
}

export const alertPreviewCodeData: IAlertCode = {
  defaultAlert: (
    <div
      className="mt-3 flex items-center font-medium text-sm rounded-lg p-4 bg-gray-300 text-gray-800"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-3 h-5 w-5 flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <span>
        Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.
      </span>
      <button className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  ),

  infoAlert: (
    <div
      className="mt-3 flex items-center font-medium text-sm rounded-lg p-4 bg-blue-200 text-blue-800"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-3 h-5 w-5 flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <span>
        Info Alert! Lorem ipsum dolor sit amet. Internos reprehenderit
        perspiciatis.
      </span>
      <button className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  ),

  successAlert: (
    <div
      className="mt-3 flex items-center font-medium text-sm rounded-lg p-4 bg-green-200 text-green-800"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-3 h-5 w-5 flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <span>
        Success Alert! Lorem ipsum dolor sit amet. Internos reprehenderit
        perspiciatis.
      </span>
      <button className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  ),

  dangerAlert: (
    <div
      className="mt-3 flex items-center font-medium text-sm rounded-lg p-4 bg-red-200 text-red-800"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-3 h-5 w-5 flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <span>
        Success Alert! Lorem ipsum dolor sit amet. Internos reprehenderit
        perspiciatis.
      </span>
      <button className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  ),

  warningAlert: (
    <div
      className="mt-3 flex items-center font-medium text-sm rounded-lg p-4 bg-yellow-200 text-yellow-800"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-3 h-5 w-5 flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <span>
        Success Alert! Lorem ipsum dolor sit amet. Internos reprehenderit
        perspiciatis.
      </span>
      <button className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  ),

  borderedAlert: (
    <div className="space-y-5">
      {/* Success Alert  */}
      <div
        className="bg-teal-100 border-l-4 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
        role="alert"
        aria-labelledby="hs-bordered-success-style-label"
      >
        <div className="flex">
          <div className="shrink-0">
            <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
          </div>
          <div className="ms-3 text-gray-800 dark:text-white">
            <h3 id="hs-bordered-success-style-label" className="font-semibold ">
              Order Confirmed.
            </h3>
            <p className="text-sm opacity-70">Your order has been confirmed.</p>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      <div
        className="bg-red-100 border-l-4 rounded-lg border-red-500 p-4 dark:bg-red-800/30"
        role="alert"
        aria-labelledby="hs-bordered-red-style-label"
      >
        <div className="flex">
          <div className="shrink-0">
            <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </span>
          </div>
          <div className="ms-3 text-gray-800 dark:text-white">
            <h3 id="hs-bordered-red-style-label" className="font-semibold ">
              Error!
            </h3>
            <p className="text-sm opacity-70">
              Your purchase has been declined.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  buttonAlert: (
    <div
      className="mt-2 flex items-center justify-between font-medium text-sm rounded-lg p-3 bg-gray-300 text-gray-800"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-3 h-5 w-5 flex-shrink-0"
        >
          <path
            fillRule="evenodd"
            d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
        <span>We use cookies for no reason!</span>
      </div>
      <div className="space-x-2">
        <button className="px-2 py-1.5 rounded-lg hover:bg-gray-400 hover:bg-opacity-30 active:scale-95 transition-all duration-300">
          Deny
        </button>
        <button className="bg-gray-800 text-white px-3 py-1.5 rounded-lg active:scale-95 hover:bg-gray-700 transition-all duration-300">
          Accept
        </button>
      </div>
    </div>
  ),
};

export const alertHtmlCodeData: IAlertCode = {
  defaultAlert: `<div className="mt-2 mx-2 flex items-center font-medium text-sm rounded-lg p-4 bg-gray-300 text-gray-800" role="alert" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 h-5 w-5 flex-shrink-0" >
    <path fillRule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
  </svg>
  <span>Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.</span>
  <button className="ml-auto">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  </button>
</div>`,

  infoAlert: `<div className="mt-2 mx-2 flex items-center font-medium text-sm rounded-lg p-4 bg-blue-200 text-blue-800" role="alert" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 h-5 w-5 flex-shrink-0" >
    <path fillRule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
  </svg>
  <span>Info Alert! Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.</span>
  <button className="ml-auto">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  </button>
</div>`,

  successAlert: `<div className="mt-2 mx-2 flex items-center font-medium text-sm rounded-lg p-4 bg-green-200 text-green-800" role="alert" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 h-5 w-5 flex-shrink-0" >
    <path fillRule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
  </svg>
  <span>Success Alert! Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.</span>
  <button className="ml-auto">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  </button>
</div>`,

  dangerAlert: `<div className="mt-2 mx-2 flex items-center font-medium text-sm rounded-lg p-4 bg-red-200 text-red-800" role="alert" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 h-5 w-5 flex-shrink-0" >
    <path fillRule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
  </svg>
  <span>Success Alert! Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.</span>
  <button className="ml-auto">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  </button>
</div>`,
  warningAlert: `<div className="mt-2 mx-2 flex items-center font-medium text-sm rounded-lg p-4 bg-yellow-200 text-yellow-800" role="alert" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 h-5 w-5 flex-shrink-0" >
    <path fillRule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
  </svg>
  <span>Success Alert! Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.</span>
  <button className="ml-auto">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  </button>
</div>`,

  borderedAlert: `<div class="space-y-5">
  <!-- Success Alert  -->
  <div class="rounded-lg border-l-4 border-teal-500 bg-teal-100 p-4 dark:bg-teal-800/30" role="alert" aria-labelledby="hs-bordered-success-style-label">
    <div class="flex">
      <div class="shrink-0">
        <span class="inline-flex size-8 items-center justify-center rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
          <svg class="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </span>
      </div>
      <div class="ms-3 text-gray-800 dark:text-white">
        <h3 id="hs-bordered-success-style-label" class="font-semibold">Order Confirmed.</h3>
        <p class="text-sm opacity-70">Your order has been confirmed.</p>
      </div>
    </div>
  </div>

  <!-- Error Alert  -->
  <div class="rounded-lg border-l-4 border-red-500 bg-red-100 p-4 dark:bg-red-800/30" role="alert" aria-labelledby="hs-bordered-red-style-label">
    <div class="flex">
      <div class="shrink-0">
        <span class="inline-flex size-8 items-center justify-center rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
          <svg class="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </span>
      </div>
      <div class="ms-3 text-gray-800 dark:text-white">
        <h3 id="hs-bordered-red-style-label" class="font-semibold">Error!</h3>
        <p class="text-sm opacity-70">Your purchase has been declined.</p>
      </div>
    </div>
  </div>
</div>
`,
  buttonAlert: `<div class="mx-2 mt-2 flex items-center justify-between rounded-lg bg-gray-300 p-3 text-sm font-medium text-gray-800" role="alert">
  <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-3 h-5 w-5 flex-shrink-0">
      <path fillRule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
    <span>We use cookies for no reason!</span>
  </div>
  <div class="space-x-2">
    <button class="rounded-lg px-2 py-1.5 transition-all duration-300 hover:bg-gray-400 hover:bg-opacity-30 active:scale-95">Deny</button>
    <button class="rounded-lg bg-gray-800 px-3 py-1.5 text-white transition-all duration-300 hover:bg-gray-700 active:scale-95">Accept</button>
  </div>
</div>
`,
};

// ------X----- JSX CODES ---------X-----

export const alertJsxCodeData: IAlertCode = {
  defaultAlert: `<div className="mt-2 mx-2 flex items-center font-medium text-sm rounded-lg p-4 bg-gray-300 text-gray-800" role="alert" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="mr-3 h-5 w-5 flex-shrink-0" 
  >
    <path
      fillRule="evenodd"
      d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
  <span>Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.</span>
  <button className="ml-auto">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
  </button>
</div>`,

  infoAlert: `<div className="mt-2 mx-2 flex items-center font-medium text-sm rounded-lg p-4 bg-blue-200 text-blue-800" role="alert" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="mr-3 h-5 w-5 flex-shrink-0" 
  >
    <path
      fillRule="evenodd"
      d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
  <span>Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.</span>
  <button className="ml-auto">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
  </button>
</div>`,

  successAlert: `<div className="mt-2 mx-2 flex items-center font-medium text-sm rounded-lg p-4 bg-green-200 text-green-800" role="alert" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="mr-3 h-5 w-5 flex-shrink-0" 
  >
    <path
      fillRule="evenodd"
      d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
  <span>Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.</span>
  <button className="ml-auto">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
  </button>
</div>`,

  dangerAlert: `<div className="mt-2 mx-2 flex items-center font-medium text-sm rounded-lg p-4 bg-red-200 text-red-800" role="alert" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="mr-3 h-5 w-5 flex-shrink-0" 
  >
    <path
      fillRule="evenodd"
      d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
  <span>Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.</span>
  <button className="ml-auto">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
  </button>
</div>`,

  warningAlert: `<div className="mt-2 mx-2 flex items-center font-medium text-sm rounded-lg p-4 bg-yellow-200 text-yellow-800" role="alert" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="mr-3 h-5 w-5 flex-shrink-0" 
  >
    <path
      fillRule="evenodd"
      d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
  <span>Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis.</span>
  <button className="ml-auto">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
  </button>
</div>`,

  borderedAlert: `<div className="space-y-5">
      {/* Success Alert  */}
      <div
        className="bg-teal-100 border-l-4 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
        role="alert"
        aria-labelledby="hs-bordered-success-style-label"
      >
        <div className="flex">
          <div className="shrink-0">
            <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
          </div>
          <div className="ms-3 text-gray-800 dark:text-white">
            <h3 id="hs-bordered-success-style-label" className="font-semibold ">
              Order Confirmed.
            </h3>
            <p className="text-sm opacity-70">Your order has been confirmed.</p>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      <div
        className="bg-red-100 border-l-4 rounded-lg border-red-500 p-4 dark:bg-red-800/30"
        role="alert"
        aria-labelledby="hs-bordered-red-style-label"
      >
        <div className="flex">
          <div className="shrink-0">
            <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </span>
          </div>
          <div className="ms-3 text-gray-800 dark:text-white">
            <h3 id="hs-bordered-red-style-label" className="font-semibold ">
              Error!
            </h3>
            <p className="text-sm opacity-70">
              Your purchase has been declined.
            </p>
          </div>
        </div>
      </div>
    </div>`,

  buttonAlert: `   <div className="mt-2 mx-2 flex items-center justify-between font-medium text-sm rounded-lg p-3 bg-gray-300 text-gray-800"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-3 h-5 w-5 flex-shrink-0"
        >
          <path
            fillRule="evenodd"
            d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
        <span>We use cookies for no reason!</span>
      </div>
      <div className="space-x-2">
        <button className="px-2 py-1.5 rounded-lg hover:bg-gray-400 hover:bg-opacity-30 active:scale-95 transition-all duration-300">
          Deny
        </button>
        <button className="bg-gray-800 text-white px-3 py-1.5 rounded-lg active:scale-95 hover:bg-gray-700 transition-all duration-300">
          Accept
        </button>
      </div>
    </div>`,
};
