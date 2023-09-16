import type { Meta, StoryObj } from '@storybook/react';
import SlateEditor from './SlateEditor';
import { allHavingElementsHtml } from '../../mockdata/html';

const meta = {
  title: 'SlateEditor',
  component: SlateEditor,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof SlateEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  defaultValue: allHavingElementsHtml,
}
