import { Component, Vue } from 'vue-property-decorator';
import { Article } from '@/models/Article';

@Component
export default class BlogComponent extends Vue {

    private articles: any[] = [];

    private mounted(): void {
        this.articles = this.$store.state.articles.sort((a: Article, b: Article) => (Number(a.id) < Number(b.id)) ? 1 : -1);
        // TODO: for each post, look at id prop
        // get file from assets/posts that matches id
        // render html from file
    }

}
