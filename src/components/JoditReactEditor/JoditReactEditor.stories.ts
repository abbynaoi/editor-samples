import type { Meta, StoryObj } from '@storybook/react';
import JoditReactEditor from './JoditReactEditor';
import { allHavingElementsHtml } from '../../mockdata/html';

const meta = {
  title: 'JoditReactEditor',
  component: JoditReactEditor,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof JoditReactEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  defaultValue: allHavingElementsHtml,
}
