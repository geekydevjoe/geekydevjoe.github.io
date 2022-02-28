const BaseInput = {
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

const store = {
    debug: true,

    state: Vue.reactive({
        address: {
                lastName: '',
                firstName: '',
                city: '',
                zip: ''
            },
            issues: ["Issue 3","Issue 4"],
    }),

    setLastName(newName){
        console.debug(`LastName from: ${this.state.address.lastName}`, newName);
        this.state.address.lastName = newName;
    }
}

const BaseTextArea = {
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
        <textarea v-bind="$attrs" 
            :placeholder="label"
            class="field"
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"></textarea>
    `
}

const warningBanner = {
    template:`
        <div class="alert" class="alert-warning">
            <strong>Warning!</strong> <slot>Middle Content</slot>.
        </div>
    `
}

const infoBanner = {
    template:`
        <div class="alert" class="alert-info">
            <strong>Info</strong> <slot>Middle Content</slot>.
        </div>
    `
}
const dangerBanner = {
    template:`
        <div class="alert" class="alert-danger">
            <strong>Info</strong> <slot></slot>.
        </div>
    `
}

const alertBanner = {
    props: {
        alertType: {
            type: String
        }
    },
    computed:{
        alertCss(){
            return `alert-${this.alertType}`;
        }
    },
    template:`
        <div class="alert" :class="alertCss">
            <strong>Warning!</strong> <slot>Middle Content</slot>.
        </div>
    `
}

const AddressReadOnly = {
    props: {
        address: null
    },
    template: `
    <div>Name: {{ address.firstName }} {{ address.lastName }}</div>
    `
}