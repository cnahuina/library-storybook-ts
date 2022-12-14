import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, Props } from '../src/Button'
import { action } from '@storybook/addon-actions'

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick : {action: 'clicked'},
        children : {
            defaultValue: 'Default Text'
        }
    }
}

const Template: Story<Props> = (args) => <Button {...args} />;

export default meta;

export const Default = Template.bind({})
export const Secondary = Template.bind({})


Secondary.args = {
    variant: 'secondary',
    children: 'Button Secondary',
    onClick: action('secondary clicked')
}

