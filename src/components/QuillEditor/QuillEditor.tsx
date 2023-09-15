import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

type Props = {
  defaultValue?: string
}

const QuillEditor = ({ defaultValue = '' }: Props) => {
  const quillRef = useRef<Quill>(); // Quill instanceを保存するための useRef
  const editorRef = useRef<HTMLDivElement>(null); // Quill JSONを保存するための useRef

  useEffect(() => {
    if (!editorRef.current) return;

    quillRef.current = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
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
      },
    });
    quillRef.current.clipboard.dangerouslyPasteHTML(defaultValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveToQuill = () => {
    const editorJson = quillRef.current?.getContents();
    console.log('quillRef.current?.getContents()', editorJson);
    console.log('HTML', editorRef.current?.innerHTML)
  };

  return (
    <div>
      <div ref={editorRef}></div>
      <button onClick={saveToQuill}>Output</button>
    </div>
  );
};

export default QuillEditor;
