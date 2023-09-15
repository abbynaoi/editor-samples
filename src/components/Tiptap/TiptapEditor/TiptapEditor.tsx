import { allHavingElementsHtml } from '../../../mockdata/html'
import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import TableCell from '@tiptap/extension-table-cell'
import { TiptapMenuBar } from '../TiptapMenubar/TiptapMenubar'

// define your extension array
const extensions = [
  StarterKit,
  Table.configure({ resizable: true }),
  TableHeader,
  TableRow,
  TableCell,
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