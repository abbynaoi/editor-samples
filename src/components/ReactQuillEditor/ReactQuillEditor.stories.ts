import type { Meta, StoryObj } from '@storybook/react';
import ReactQuillEditor from './ReactQuillEditor';

const meta = {
  title: 'ReactQuillEditor',
  component: ReactQuillEditor,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ReactQuillEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
