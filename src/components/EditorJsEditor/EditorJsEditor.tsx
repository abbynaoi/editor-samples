import React, { useEffect, useRef } from "react";
import EditorJS from '@editorjs/editorjs';
// @ts-ignore
import Header from '@editorjs/header'; 
// @ts-ignore
import List from '@editorjs/list'; 

type Props = {
  defaultValue?: string
}

const QuillEditor = ({ defaultValue = '' }: Props) => {
  const editorJsRef = useRef<EditorJS>(); // Quill instanceを保存するための useRef
  const editorRef = useRef<HTMLDivElement>(null); // Quill JSONを保存するための useRef

  useEffect(() => {
    if (!editorRef.current) return;

    editorJsRef.current = new EditorJS({
      holder: editorRef.current,
      tools: {
        header: Header,
        list: List
      }
    })
    editorJsRef.current.isReady.then(() => {
      editorJsRef.current?.blocks.renderFromHTML(defaultValue)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveToQuill = () => {
    editorJsRef.current?.save().then((outputData) => {
      console.log('outputData', outputData)
    })
  }

  return (
    <div>
      <div ref={editorRef}></div>
      <button onClick={saveToQuill}>Output</button>
    </div>
  );
};

export default QuillEditor;
