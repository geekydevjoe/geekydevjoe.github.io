const warningBanner = {
    template:`
        <div class="alert alert-warning">
            <strong>{{ label_ }}</strong> <slot>Middle Content</slot>.
        </div>
    `,
    props:{
        label: {
            default: "Warning!",
            type: String
        }
    },
    data(){
        return {
            label_: this.label
        }
    },
    watch:{
        label:function(newValue){
            this.label_ = newValue;
        }
    }

}

const infoBanner = {
    template:`
        <div class="alert alert-info">
            <strong>Info</strong> <slot>Middle Content</slot>.
        </div>
    `
}
const dangerBanner = {
    template:`
        <div class="alert alert-danger">
            <strong>Info</strong> <slot></slot>
        </div>
    `
}