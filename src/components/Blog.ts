import { Component, Vue } from 'vue-property-decorator';
import { Article } from '@/models/Article';

@Component
export default class BlogComponent extends Vue {

    private articles: any[] = [];

    private mounted(): void {
        this.articles = this.$store.state.articles.sort((a: Article, b: Article) => (Number(a.id) < Number(b.id)) ? 1 : -1);
    }

}
