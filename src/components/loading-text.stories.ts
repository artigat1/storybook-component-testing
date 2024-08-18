import LoadingText from '@/components/loading-text.vue'
import {
    expect,
    within
} from '@storybook/test'
import type {
    Meta,
    StoryObj
} from '@storybook/vue3'

const meta = {
    title: 'Components/Loading Text',
    component: LoadingText,
    tags: ['autodocs'],
} satisfies Meta<typeof LoadingText>

export default meta
type Story = StoryObj<typeof meta>

export const IsLoading: Story = {
    args: {
        text: 'I\'m loading now',
        isLoading: true,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn
        // how to setup logging in the Actions panel
        const loadingText = canvas.getByTestId('loading-text')

        // 👇 Assert DOM structure
        await expect(loadingText).toHaveTextContent('I\'m loading now');
    },
}
