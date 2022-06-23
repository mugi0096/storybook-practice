import Button from './Button.vue'

export default {
  title: 'Button',
  component: Button,

  argTypes: {
    elevation: {
      control: {
        type: 'number'
      }
    },
    buttonText: {
      control: {
        type: 'text'
      }
    },
    color: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'error']
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<Button v-bind="$props" /> `
})

export const Primary = Template.bind({})

Primary.args = {
  elevation: 10,
  buttonText: 'test',
  color: 'primary'
}