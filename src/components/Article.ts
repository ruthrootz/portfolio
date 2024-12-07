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
        // TODO: get file that matches id
        fetch(`../store/posts/${id}.html`)
            .then(response => response.text())
            .then(html => {
                this.postHtml = html;
            });
        this.postHtml = "";
    }

}

