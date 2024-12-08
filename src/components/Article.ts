import { Component, Vue } from 'vue-property-decorator';
import { Article } from '@/models/Article';

@Component
export default class ArticleComponent extends Vue {

    private article: Article = new Article('', '', new Date(), '', []);
    private postHtml: string = "";

    private mounted(): void {
        const id: string = this.$route.params.id;
        this.article = this.$store.state.articles.find(
            (a: Article) => a.id === id
        );
        this.postHtml = require(`../store/posts/${id}.html`).default;
    }

}

