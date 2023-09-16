import type { Meta, StoryObj } from '@storybook/react';
import ReactQuillEditor from './ReactQuillEditor';
import { allHavingElementsHtml } from '../../mockdata/html';

const meta = {
  title: 'ReactQuillEditor',
  component: ReactQuillEditor,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof ReactQuillEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  defaultValue: allHavingElementsHtml,
}
