import type { Meta, StoryObj } from '@storybook/react';
import TiptapEditor from './TiptapEditor';
import { allHavingElementsHtml } from '../../../mockdata/html';

// react-quill
const meta = {
  title: 'TiptapEditor',
  component: TiptapEditor,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof TiptapEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  defaultValue: allHavingElementsHtml,
}
