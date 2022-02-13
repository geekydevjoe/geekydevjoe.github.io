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

const App = Vue.createApp({
    data() {
        return {
            shared: store.state,
            lastName: "",
            bannerToUse:"infoBanner",
            inputToUse:""
        }
    },
    prop: {
        
    },
    methods:{
        updateLastName(){
            store.setLastName(this.lastName);
        },
        changeBanner(){
            if (this.bannerToUse == "infoBanner"){
                this.bannerToUse = "warningBanner";
                this.inputToUse = "textarea";
            }
            else {
                this.bannerToUse = "infoBanner";
                this.inputToUse = "inputtext";
            }
        }
    },
    components: {
        "warningBanner": warningBanner,
        "infoBanner": infoBanner,
        "textarea": BaseTextArea,
        "inputtext": BaseInput
    },
    template: `
    <div>
        Hi there
        <base-input v-focus v-model="shared.address.firstName" aria-label="hide" label="First Name" type="text" />
        <base-input v-model="lastName" v-on:keyup.enter="updateLastName" label="Last Name" type="text" />
        <base-input v-model="shared.address.city" label="City" type="text" />
        <base-input v-model="shared.address.zip" label="Zip" type="number" />
        <alert-banner alertType="warning">I'm here</alert-banner>
        <alert-banner alertType="success">I'm here</alert-banner>
        
        <button v-on:click="changeBanner">joe</button>
        <component :is="bannerToUse">I'm in the middle</component>
        <component :is="inputToUse" v-model="shared.address.zip" label="Zip" type="number"></component>
    </div>
    `,
    mounted(){
        console.log("mounted");
    }
});

        
const App2 = Vue.createApp({
    data() {
        return {
            shared: store.state,
            showComponent: true,
            component: "warningBanne",
            componentSlot:""
        }
    },
    mounted(){
        console.log("App2 Mounted");
    },
    template: `
        <input v-model="component" /><input type="checkbox" v-model="showComponent" />
        <textarea v-model="componentSlot"></textarea>
        <component :is="component" v-if="showComponent">{{ componentSlot }}</component>
        <address-read-only :address="shared.address"></address-read-only>
        <alert-banner alertType="danger">I'm here</alert-banner>
        <alert-banner alertType="info">I'm here</alert-banner>
        <alert-banner alertType="info"><joe :items="shared.issues"></joe></alert-banner>
    `
});
const AddressReadOnly = {
    props: {
        address: null
    },
    template: `
    <div>Name: {{ address.firstName }} {{ address.lastName }}</div>
    `
}
