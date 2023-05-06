import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';

const meta = {
  title: 'Core-Components/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['normal', 'h1', 'h2', 'h3'] },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Manera 'normal' de hacer una story.
export const Basic: Story = {
  args: {
    label: 'Prueba 1',
    size: 'normal',
    allCaps: false,
  },
};

// Manera utilizando 'render', para los casos en que el componente implique
// más complejidad que meramente indicarle los props/args.
export const AllCaps: Story = {
  render: (args) => {
    return <MyLabel {...args} />;
  },
  args: {
    label: 'huha',
    size: 'h1',
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Prueba 1',
    size: 'normal',
    color: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Prueba 1',
    size: 'normal',
    color: 'tertiary',
  },
};

export const CustomFontColor: Story = {
  args: {
    label: 'Prueba "Custom font color"',
    size: 'h1',
    fontColor: '#5517ac',
  },
};
