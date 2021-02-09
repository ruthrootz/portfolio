import { Component, Vue } from "vue-property-decorator";

@Component
export default class Blog extends Vue {
    private articles: any[] = [];

    private mounted(): void {
        this.articles = this.$store.state.articles;
    }
}
