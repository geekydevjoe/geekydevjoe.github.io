//import { defineComponent } from 'https://unpkg.com/petite-vue?module'

export default {
    name: 'BaseInput',
    props: {
        modelValue: {
            type: [String, Number]
        },
        label: {
            type: String,
            default: ''
        },
    },
    template:`
        <label>{{ label }}</label>
        <input v-bind="$attrs" 
            :placeholder="label"
            class="field"
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
        />
    `
}