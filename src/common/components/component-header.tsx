import React from "react";

export default function ComponentHeader() {
  return (
    <div className="flex flex-col gap-1 border-b pb-12 border-neutral-800">
      <h2 className="text-4xl font-bold">Avatar</h2>
      <p className="text-lg opacity-60 font-medium">
        Cards provide a flexible and extensible content container with multiple
        variants and options.
      </p>
    </div>
  );
}
