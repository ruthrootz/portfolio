import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Article extends Vue {
    @Prop()
    private id = 0;
    @Prop()
    private publishDate = '';
    @Prop()
    private title = '';
    @Prop()
    private text = '';
    @Prop()
    private tags: Tag[] = [];

    
}
