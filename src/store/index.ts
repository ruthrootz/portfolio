import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      articles: [
        {
            id : 1,
            title : "test 1",
            publishDate : "1-1-2000",
            text : '<p><a href="https://www.goodreads.com/book/show/95558.Solaris" target="_blank">Solaris</a> is a sci-fi novel about what happens when humans meet an alien. Cliche, right? It’s been done a million times, right? Wrong. It hasn’t been done quite how Stanislaw Lem does it in Solaris. This isn’t a story about humans meeting aliens that are more primitive than they are. Neither is it a story about humans meeting an advanced and warring species bent on destroying Earth. This is a story about what happens when humans meet something they can’t at all explain or understand—but this thing understands humans, or at least seems to. The alien on the planet Solaris is a giant, goopy, dark-colored ocean the covers the planet. Yes, an ocean. The ocean replicates the objects that researches lower into it. It create strange structures that grow and collapse and seem to look like man-made cities but can’t possibly because how could the planet know what Earth’s cities look like? And for the scientists aboard the research station hovering above Solaris’s ocean, it creates replicas of things that it finds in the deepest, darkest, most-hidden parts of their minds.</span></p><p class="p1" style="font-family: &quot;Helvetica Neue&quot;; font-size: 13px; font-stretch: normal; font-variant-east-asian: normal; font-variant-numeric: normal; line-height: normal; margin: 0px;">In the book it’s explained that these repressed memories are the most complete and clear because of where they’re stored and how rarely their corrupted by recollection. Solaris isn’t trying to horrify the scientists by reincarnating the people they hurt the most or the people who hurt them the most or the things that represent their greatest fears or regrets. Solaris is simply trying to communicate, and in doing so it acts like a mirror. It reflects back the worst of a person, for good or ill. Books are mirrors too. We get to see different sides of things, stories or other people. We get to see other times or other parts of ourselves, the parts we’re scared to look at. That’s what I found most interesting about Solaris, how it showed what happens to people when they face the worst of themselves. The main character drove his wife to suicide, and when Solaris replicated her for him, he inadvertently drove her to destroy herself again. That’s dark. And fascinating. But Solaris didn’t know what it was doing. It simply took out of Kelvin his most secret thoughts and memories, the things that most scarred him, and used those brain waves to communicate with him.</p><p class="p2" style="font-family: &quot;Helvetica Neue&quot;; font-size: 13px; font-stretch: normal; font-variant-east-asian: normal; font-variant-numeric: normal; line-height: normal; margin: 0px; min-height: 15px;"><br /></p><p class="p1" style="font-family: &quot;Helvetica Neue&quot;; font-size: 13px; font-stretch: normal; font-variant-east-asian: normal; font-variant-numeric: normal; line-height: normal; margin: 0px;">This isn’t a happy book, nor is it a perfect one. The psychological aspect of the book was the most interesting, but by the end I was getting tired of the frequent info-dumps about the scientific literature on Solaris. It just didn’t feel relevant to the story. That said, the book was short enough that I could forgive the info-dumps and enjoy the rest of it, especially the first half.</p>',
            tags : ["Reading", "Books"],
        },
        {
            id : 2,
            title : "test 2",
            publishDate : "1-1-2000",
            text : "testing, testing",
            tags : ["Running"],
        },
        {
            id : 3,
            title : "test 3",
            publishDate : "1-1-2000",
            text : "testing, testing",
            tags : ["Tech", "Productivity"],
        },
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
