import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/content.md') // Path to your file in the public directory
      .then((res) => res.text())
      .then(setMarkdown);
  }, []);

  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  );
};

export default App;
