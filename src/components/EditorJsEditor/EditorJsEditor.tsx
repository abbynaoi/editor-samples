import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Table from "@editorjs/table";
// @ts-ignore
import Embed from "@editorjs/embed";
// @ts-ignore
import RawTool from "@editorjs/raw";
// @ts-ignore
import Paragraph from "@editorjs/paragraph";
// @ts-ignore
import Image from "@editorjs/image";
// @ts-ignore
import TextVariantTune from "@editorjs/text-variant-tune";

type Props = {
  defaultValue?: string;
};

const QuillEditor = ({ defaultValue = "" }: Props) => {
  const editorJsRef = useRef<EditorJS>(); // Quill instanceを保存するための useRef
  const editorRef = useRef<HTMLDivElement>(null); // Quill JSONを保存するための useRef

  useEffect(() => {
    if (!editorRef.current) return;

    editorJsRef.current = new EditorJS({
      holder: editorRef.current,
      tools: {
        embed: Embed,
        header: Header,
        list: List,
        table: Table,
        raw: RawTool,
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        image: {
          class: Image,
          config: {
            uploader: {
              uploadByFile(file: File) {
                return new Promise((resolve, reject) => {
                  const reader = new FileReader();
                  reader.onload = () => {
                    const base64 = reader.result;
                    resolve({ success: 1, file: { url: base64 } });
                  };
                  reader.onerror = (error) => reject(error);
                  reader.readAsDataURL(file);
                });
              },
              uploadByUrl(url: string) {
                return fetch(url)
                  .then((res) => res.blob())
                  .then((blob) => {
                    return new Promise((resolve, reject) => {
                      const reader = new FileReader();
                      reader.onload = () => {
                        const base64 = reader.result;
                        resolve({ success: 1, file: { url: base64 } });
                      };
                      reader.onerror = (error) => reject(error);
                      reader.readAsDataURL(blob);
                    });
                  });
              },
            },
          },
        },
        textVariant: TextVariantTune,
      },
      /**
       * Apply to all the blocks
       */
      tunes: ["textVariant"],
    });
    editorJsRef.current.isReady.then(() => {
      editorJsRef.current?.blocks.renderFromHTML(defaultValue);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveToQuill = () => {
    editorJsRef.current?.save().then((outputData) => {
      console.log("outputData", outputData);
    });
  };

  return (
    <div>
      <div ref={editorRef}></div>
      <button onClick={saveToQuill}>Output</button>
    </div>
  );
};

export default QuillEditor;
