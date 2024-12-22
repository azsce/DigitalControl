"use client";

import React, { useEffect, useState } from "react";
import Markdown from "@/component/Markdown";

const LectureIntroduction = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/lectures/1.intro.md")
      .then((res) => res.text())
      .then(setMarkdown);
  }, []);

  return (
    <Markdown markdown={markdown} />
  );
};

export default LectureIntroduction;
