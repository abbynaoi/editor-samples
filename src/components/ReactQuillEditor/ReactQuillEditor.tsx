import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  defaultValue?: string;
}

export const ReactQuillEditor = ({ defaultValue = '' }: Props) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <ReactQuill
      value={value}
      onChange={setValue}
      modules={{
        toolbar: [
          [{ font: [] }, { size: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "super" }, { script: "sub" }],
          [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["direction", { align: [] }],
          ["link", "image", "video", "formula"],
          ["clean"],
        ],
      }}
    />
  );
};

export default ReactQuillEditor;
