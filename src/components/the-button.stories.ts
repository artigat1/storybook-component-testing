import TheButton from '@/components/the-button.vue'
import {
  expect,
  fn,
  userEvent,
  waitFor,
  within
} from '@storybook/test'
import type {
  Meta,
  StoryObj
} from '@storybook/vue3'

const meta = {
  title: 'Components/Button',
  component: TheButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof TheButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isPrimary: true,
  },
  render: (args) => ({
    components: { TheButton },
    setup() {
      return { args }
    },
    template: '<the-button v-bind="args">Click me!</the-button>',
  }),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn
    // how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
}

export const Secondary: Story = {
  args: {
    isSecondary: true,
  },
  render: (args) => ({
    components: { TheButton },
    setup() {
      return { args }
    },
    template: '<the-button v-bind="args" data-test="the-button">Click me!</the-button>',
  }),
}

export const Danger: Story = {
  args: {
    isDanger: true,
  },
  render: (args) => ({
    components: { TheButton },
    setup() {
      return { args }
    },
    template: '<the-button v-bind="args">Click me!</the-button>',
  }),
}

export const Text: Story = {
  args: {
    isText: true,
    isBorderless: true,
  },
  render: (args) => ({
    components: { TheButton },
    setup() {
      return { args }
    },
    template: '<the-button v-bind="args">Click me!</the-button>',
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    isPrimary: true,
  },
  render: (args) => ({
    components: { TheButton },
    setup() {
      return { args }
    },
    template: '<the-button v-bind="args">Click me!</the-button>',
  }),
}

export const Loading: Story = {
  args: {
    isPrimary: true,
    isLoading: true,
  },
  render: (args) => ({
    components: { TheButton },
    setup() {
      return { args }
    },
    template: '<the-button v-bind="args">Click me!</the-button>',
  }),
}
