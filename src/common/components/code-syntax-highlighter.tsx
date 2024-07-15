"use client";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-funky.css";

const CodeHighlight = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={`py-2`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeHighlight;
