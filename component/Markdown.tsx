"use client";

import React from "react";
import { MDXProvider } from "@mdx-js/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import "github-markdown-css/github-markdown.css";


type MarkdownProps = {
    markdown: string;
}

const Markdown: React.FC<MarkdownProps> = ({ markdown }) => {

  return (
    <div className="markdown-body">
      <MDXProvider>
        <ReactMarkdown 
        remarkPlugins={[remarkGfm, remarkMath, remarkBreaks]} 
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        >
          {markdown}
        </ReactMarkdown>
      </MDXProvider>
    </div>
  );
};

export default Markdown;
