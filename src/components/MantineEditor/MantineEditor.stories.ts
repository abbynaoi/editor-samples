import type { Meta, StoryObj } from '@storybook/react';
import MantineEditor from './MantineEditor';
import { allHavingElementsHtml } from '../../mockdata/html';

const meta = {
  title: 'MantineEditor',
  component: MantineEditor,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof MantineEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  defaultValue: allHavingElementsHtml,
}
