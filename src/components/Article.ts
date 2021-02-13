import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
    @Prop()
    private id = '';

    private article = null;

    private mounted(): void {
        this.id = this.$route.params.id;
        this.article = this.$store.state.articles.find(
            (a: Article) => a.id === this.id
        );
    }

    private test(): void {
        console.log('I got Vim working swimmingly!');
    }
}
