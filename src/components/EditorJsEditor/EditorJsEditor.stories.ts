import type { Meta, StoryObj } from '@storybook/react';
import EditorJsEditor from './EditorJsEditor';
import { allHavingElementsHtml } from '../../mockdata/html';

const meta = {
  title: 'EditorJsEditor',
  component: EditorJsEditor,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof EditorJsEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  defaultValue: allHavingElementsHtml,
}
