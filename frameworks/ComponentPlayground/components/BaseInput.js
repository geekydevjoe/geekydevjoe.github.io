const BaseInput =
 {
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
        <label class="form-label">{{ label }}</label>
        <input v-bind="$attrs" 
            :placeholder="label"
            class="form-control"
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
        />
    `
}