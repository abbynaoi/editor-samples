import { allHavingElementsHtml } from '../../../mockdata/html'
import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TiptapMenuBar } from '../TiptapMenubar/TiptapMenubar'

// define your extension array
const extensions = [
  StarterKit,
]

const Tiptap = () => {
  return (
    <EditorProvider extensions={extensions} content={allHavingElementsHtml} slotBefore={<TiptapMenuBar />}>
      <FloatingMenu>This is the floating menu</FloatingMenu>
      <BubbleMenu>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  )
}

export default Tiptap