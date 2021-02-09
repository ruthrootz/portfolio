import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Article extends Vue {
    @Prop()
    private id = '';

    private mounted(): void {
        this.id = this.$route.params.id;
    }
}
