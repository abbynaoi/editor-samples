import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const ReactQuillEditor = () => {
  const [value, setValue] = useState("");
  return <ReactQuill value={value} onChange={setValue} />;
};

export default ReactQuillEditor;
