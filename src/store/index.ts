import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: [
            {
                id: "21",
                title: "wrapping my head around server-side vs. client-side",
                publishDate: "01/31/2025",
                previewText: "<p>what does the server do?</p><p>A server is (usually) a long-running process that sits on a machine somewhere and listens for incoming requests.</p><p>.....</p>",
                tags: ["webdev", "Vue", "SSR"]
            },
            {
                id: "20",
                title: "a basic Entity Framework Core API... except everything's generic",
                publishDate: "12/07/2024",
                previewText: "<p>So off I went to attempt to create the perfect generic EF Core API... But it's not about the destination. It's really about the metaprogramming patterns you learn along the way.</p><p>.....</p>",
                tags: ["C#", ".NET"]
            },
            {
                id: "19",
                title: "tips for reading The Book of the New Sun",
                publishDate: "06/17/2022",
                previewText: "<p>I was barely a few chapters into <a href=\"https://www.goodreads.com/book/show/1234311.The_Shadow_of_the_Torturer\" target=\"_blank\">The Shadow of the Torturer (Gene Wolfe, 1980)</a> when I knew I’d found a new favorite book and series. Now that I’ve finished the series, I can say my assumption was correct. But not for the reasons that other books are my favorites.</p><p>.....</p>",
                tags: ["review", "reading", "books", "the shadow of the torturer", "booktube", "Media Death Cult", "book of the new sun", "Gene Wolfe"],
            },
            {
                id: "18",
                title: "The Shadow of the Torturer - spoiler-free review",
                publishDate: "06/13/2022",
                previewText: "<p><a href=\"https://www.goodreads.com/book/show/1234311.The_Shadow_of_the_Torturer\" target=\"_blank\">The Shadow of the Torturer (Gene Wolfe, 1980)</a> succeeds in so many areas... The prose is beautiful, the characters are complex, the dry humor is subtle and entertaining. But where it truly shines is in world building.</p><p>.....</p>",
                tags: ["review", "reading", "books", "the shadow of the torturer", "booktube", "Media Death Cult"],
            },
            {
                id: "17",
                title: "Leviathan Wakes - spoiler-free book review",
                publishDate: "08/07/2021",
                previewText: "<p><a href=\"https://www.goodreads.com/book/show/8855321-leviathan-wakes\">Leviathan Wakes (James S.A. Corey, 2011)</a> is the closest a book has come to being a literal TV show. It's fast-paced and visual, and there are enough scary moments and funny moments and sad moments to keep me engaged. It's been years since I've read a book as quickly as I read Leviathan Wakes.</p><p>.....</p>",
                tags: ["review", "reading", "books", "The Expanse"],
            },
            {
                id: "16",
                title: "Absolution Gap (The Inhibitor Trilogy #3) - spoiler book review",
                publishDate: "07/08/2021",
                previewText: '<p>I have bad luck with third books in series. Lately, there haven\'t been many thirds (hehe, get the reference?) that I\'ve enjoyed. I thought <a href="https://www.goodreads.com/book/show/89184.Absolution_Gap" target="_blank">Absolution Gap (Alastair Reynolds, 2003)</a> would break that trend. I thought. Right up until the very end, I thought.</p><p>.....</p>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "15",
                title: "Revelation Space (The Inhibitor Trilogy #1) - spoiler-free book review",
                publishDate: "06/09/2021",
                previewText: '<p>The plot of <a href="https://www.goodreads.com/book/show/49015373-revelation-space" target="_blank">Revelation Space (Alastair Reynolds, 2000)</a> is like a jigsaw puzzle... with pieces missing. But it\'s worth going through the effort of putting the pieces together. Once you do that, you\'re in for a wild sci-fi ride, full of interesting concepts and a story of galactic proportions.</p><p>.....</p>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "14",
                title: "Project Hail Mary - spoiler-free book review",
                publishDate: "05/18/2021",
                previewText: '<p><a href="https://www.goodreads.com/book/show/54493401-project-hail-mary" target="_blank">Project Hail Mary (Andy Weir, 2021)</a> is amazing. Definitely in my top five sci-fi books of all time. The characters are realistic and interesting and hilarious. The plot is fascinating. The science is super well explained, and I think I learned more from this novel than from most of the science classes I’ve taken. The parts of the story where the characters have a specific problem to solve were engaging and made me feel like I was involved in the process. You should read this book if you have even a little bit of interest in science.</p><p>.....</p>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "13",
                title: "Chess Story - book review",
                publishDate: "04/26/2021",
                previewText: '<p>I don’t know if I could spoil <a href="https://www.goodreads.com/book/show/59151.Chess_Story" target="_blank">Chess Story (Stefan Zweig, 1942)</a> even if I tried. The book isn’t so much a story as an exploration of madness and a couple of the ways that madness manifests itself.</p><p>.....</p>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "12",
                title: "The Lathe of Heaven - spoiler-free review",
                publishDate: "04/02/2021",
                previewText: '<p><a href="https://www.goodreads.com/book/show/59924.The_Lathe_of_Heaven" target=“_blank”>The Lathe of Heaven</a> by Ursula K. Le Guin is a story about a man, George Orr, whose dreams come true—not his aspirations but the dreams he dreams while sleeping. The problem is, he can’t control his dreams.</p><p>.....</p>',
                tags: ["review", "reading", "books"],
            },
            //{
                //id: "11",
                //title: "Do Androids Dream of Electric Sheep? - review - Better With Books podcast",
                //publishDate: "03/22/2021",
                //previewText: '<p><a href="https://betterwithbooks.transistor.fm/32" target="_blank">Better With Books episode #32</a>: a review and discussion of PKD\'s Do Androids Dream of Electric Sheep?</p>',
                //tags: ["review", "reading", "books"],
            //},
            {
                id: "10",
                title: "The Man In the High Castle - review",
                publishDate: "03/10/2021",
                previewText: '<p><a href="https://www.goodreads.com/book/show/216363.The_Man_in_the_High_Castle" target="_blank">The Man in the High Castle</a> is the most "normal" PKD book I\'ve read so far. It\'s an alternate history where Japan and German won WWII and they\'ve split up the US, Japan getting the west and Germany getting the east. There\'s a strip of land in between that is still the US, but at no point was any sort of official government mentioned, so the "US" is more like no-man\'s land at this point. The societal structure of the former Western US is drastically different. The Japanese are the ruling class, white people are the second-rate labor class, and black people have been relegated to a slave class. It\'s a horrifying picture, but at the same time the characters in the story are so entrenched in their world that they don\'t have the perspective that the reader has. For them, it\'s all normal, and that made the reading experience interesting because I was horrified at the same time that I was in the head of someone who was usually totally unperturbed.</p><p>.....</p>',
                tags: ["books", "review", "reading"],
            },
            {
                id: "9",
                title: "Ubik - spoiler-free review",
                publishDate: "03/10/2021",
                previewText: '<p>Even if it isn\'t always obvious, Philip K. Dick\'s books tend to be very theme-oriented, rather than character or plot driven, at least the few I\'ve read. The theme can be hidden under layers and layers of words, and it might take digging to get to it, but for me personally, getting to the theme is the ultimate goal of reading a PKD novel. The characters might be flat, the plot might be simplistic or boring or nearly nonexistent (yes, you, The Man in the High Castle), but once I latch onto a theme or idea that makes me think, I\'m happy. Making the reader think is the point of sci-fi for me.</p><p>And <a href="https://www.goodreads.com/book/show/22590.Ubik" target="_blank">Ubik</a> is an awesome sci-fi book.</p><p>.....</p>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "8",
                title: "Bobiverse books 1-3 - spoiler-free review",
                publishDate: "03/06/2021",
                previewText: '<p><a href=“https://www.goodreads.com/series/192752-bobiverse” target=“_blank”>Bobiverse</a> is a series about a guy (named Bob) who, before dying in a car accident, gets his brain backed up digitally in case sometime in the future someone could revive him as an AI. Well, it turns out someone could, and now Bob is a virtual person, living on a spaceship, and he can go anywhere he wants to, he is immortal, and given enough time he can command his drones to build pretty much anything. Bob can even make clones of himself, each slightly different from the others, to help him with his adventure. The series is light-hearted, easy-to-read, fun sci-fi. Modern sci-fi at its best.</p><p>.....</p>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "7",
                title: "I, Robot - spoiler-free review",
                publishDate: "03/01/2021",
                previewText: '<p><a href=“https://www.goodreads.com/book/show/17470669-i-robot” target=“_blank”>I, Robot</a> is a collection of short stories by Issac Assimov that were originally published between 1940 and 1950, when Assimov was 20-30 years old. For the time they were written in and considering what a young writer Assimov was at the time, it’s a truly amazing piece of fiction. But I’m not telling you to read a book just because it was good for some certain place or time. I want to tell you whether I, Robot is worth reading <i>today</i>.<p>.....</p>',
                tags: ["books", "review", "reading"],
            },
            {
                id: "6",
                title: "Solaris - spoiler review",
                publishDate: "02/08/21",
                previewText: '<p><a href="https://www.goodreads.com/book/show/95558.Solaris" target="_blank">Solaris</a> is a sci-fi novel about what happens when humans meet an alien. Cliche, right? It’s been done a million times, right? Wrong. It hasn’t been done quite how Stanislaw Lem does it in Solaris. This isn’t a story about humans meeting aliens that are more primitive than they are. Neither is it a story about humans meeting an advanced and warring species bent on destroying Earth. This is a story about what happens when humans meet something they can’t at all explain or understand—but this thing understands humans, or at least seems to.</p><p>.....</>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "5",
                title: "Ender's Game - spoiler-free review",
                publishDate: "02/08/2021",
                previewText:
                    '<p><a href="https://www.goodreads.com/book/show/375802.Ender_s_Game" target="_blank">Ender’s Game </a>is so many people’s absolute favorite book, and for good reason. It’s well-written, well-paced and has something for every age of reader. As a kind you might gravitate to the action and the cool zero-gravity games. As a teen you might relate more to Ender’s struggles with his family and with growing up and having new responsibilities thrust on him. And as an adult you’re probably going to find the psychological and ethical angles of the book most fascinating.</p><p>.....</>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "4",
                title: "The Left Hand of Darkness - spoiler review",
                publishDate: "02/02/2021",
                previewText:
                    "<p>I didn’t like The Left Hand of Darkness. I wish I did. I badly wanted to. But when I compare the fascinating sci-fi concepts and the cool setting (pun intended) to the plot, the plot doesn’t live up to the potential. I expected Le Guin to blow me away with a riveting story, but instead I got political intrigue and a dull and lengthy escape across a glacier.</p><p>.....</p>",
                tags: ["review", "reading", "books"],
            },
            {
                id: "3",
                publishDate: "12/26/2020",
                title:
                    "Why There Will Always Be War - Slaughterhouse-Five by Kurt Vonnegut",
                previewText:
                    '<p><a href="https://www.goodreads.com/book/show/4981.Slaughterhouse_Five" target="_blank">This book</a> is a book that shows how absurd everything is. It starts with Billy Pilgrim, the main character. Billy is clearly not mentally stable. His narration is unreliable. His perspective of war is not to be trusted, is not rational. We’re seeing the war through his traumatized and confused point of view. But isn’t that the point? There is no rational perspective on war. It’s all absurd. War is human absurdism at its most extreme.</p><p>.....</p>',
                tags: ["books", "review", "reading"],
            },
            {
                id: "2",
                publishDate: "12/20/2020",
                title:
                    "All Systems Red (Murderbot Diaries #1) - spoiler-free review",
                previewText:
                    '<p>One line review: Murderbot is an antisocial, depressed security robot who hates its job and wants nothing more than to watch TV shows, but unfortunately it is contractually obliged to save its humans.</p><p><a href="https://www.goodreads.com/book/show/32758901-all-systems-red" target="_blank">All Systems Red</a> is funny, interesting and fun to read the whole way through. It’s a story about a security robot named Murderbot who hacked its own operating system and is now a free agent. It doesn’t tell anyone this and instead uses its newfound privileges to download thousands of hours of TV shows.</p><p>.....</p>',
                tags: ["books", "review", "reading"],
            },
            {
                id: "1",
                publishDate: "12/19/2020",
                title:
                    "House of Suns by Alastair Reynolds - spoiler-free review",
                previewText:
                    '<p>If you want a one-line review, here it is: House of Suns is&nbsp;like <a href="https://www.goodreads.com/book/show/32109569-we-are-legion-we-are-bob?ac=1&amp;from_search=true&amp;qid=REHVxNAVdr&amp;rank=1" target="_blank">We Are Legion (We Are Bob)</a>... just way more exciting.</p><p><a href="https://www.goodreads.com/book/show/1126719.House_of_Suns?ac=1&amp;from_search=true&amp;qid=KaPPL6RUz7&amp;rank=1" target="_blank">House of Suns</a> is technically a hard sci-fi space opera. Technically. But that generic description doesn’t do this galactic murder mystery justice.</p><p>.....</p>',
                tags: ["books", "review", "reading"],
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
