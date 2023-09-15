import type { Meta, StoryObj } from '@storybook/react';
import QuillEditor from './QuillEditor';
import { allHavingElementsHtml } from '../../mockdata/html';

// react-quill
const meta = {
  title: 'QuillEditor',
  component: QuillEditor,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof QuillEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  defaultValue: allHavingElementsHtml,
}
