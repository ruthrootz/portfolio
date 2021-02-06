import { Component, Vue } from "vue-property-decorator";

@Component
export default class Blog extends Vue {
  private test = 12345;

  private mounted(): void {
      // import articles
      // add v-for to HTML file
      // display title, date and text
      // add "read more" link to the bottom of each article
  }

}
