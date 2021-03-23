import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: [
            {
                id: "11",
                title: "Do Androids Dream of Electric Sheep? - spoiler-free review",
                publishDate: "03/22/2021",
                previewText: '',
                text: '',
                tags: ["review", "reading", "books"],
            },
            {
                id: "10",
                title: "The Man In the High Castle - review",
                publishDate: "03/10/2021",
                previewText: '<p><a href="https://www.goodreads.com/book/show/216363.The_Man_in_the_High_Castle" target="_blank">The Man in the High Castle</a> is the most "normal" PKD book I\'ve read so far. It\'s an alternate history where Japan and German won WWII and they\'ve split up the US, Japan getting the west and Germany getting the east. There\'s a strip of land in between that is still the US, but at no point was any sort of official government mentioned, so the "US" is more like no-man\'s land at this point. The societal structure of the former Western US is drastically different. The Japanese are the ruling class, white people are the second-rate labor class, and black people have been relegated to a slave class. It\'s a horrifying picture, but at the same time the characters in the story are so entrenched in their world that they don\'t have the perspective that the reader has. For them, it\'s all normal, and that made the reading experience interesting because I was horrified at the same time that I was in the head of someone who was usually totally unperturbed.</p><p>.....</p>',
                text: '<p><a href="https://www.goodreads.com/book/show/216363.The_Man_in_the_High_Castle" target="_blank">The Man in the High Castle</a> is the most "normal" PKD book I\'ve read so far. It\'s an alternate history where Japan and German won WWII and they\'ve split up the US, Japan getting the west and Germany getting the east. There\'s a strip of land in between that is still the US, but at no point was any sort of official government mentioned, so the "US" is more like no-man\'s land at this point. The societal structure of the former Western US is drastically different. The Japanese are the ruling class, white people are the second-rate labor class, and black people have been relegated to a slave class. It\'s a horrifying picture, but at the same time the characters in the story are so entrenched in their world that they don\'t have the perspective that the reader has. For them, it\'s all normal, and that made the reading experience interesting because I was horrified at the same time that I was in the head of someone who was usually totally unperturbed.</p><p>I enjoyed this book. Most definitely. But I\'m not sure why. Is there a plot? Kind of. A little bit. Not really. The story follows several different people: an American antiques dealer, a Japanese government official, a Swiss businessman from Germany, an undercover Jewish metal worker, the Jew\'s ex-wife who is living in Colorado... Some of their story-lines intersect, some don\'t. Some of the story-lines end up being relevant to the end of the book, but some don\'t. Are the characters interesting? For sure. They\'re each very different and have a different view of their world, and by following them I slowly got a picture of what this alternate history world was like. It was like a puzzle, to put together the different bits of information into an omniscient whole.</p><p>In short, the world building is great, the characters are interesting, and it was fun to figure out how the plot lines were related and to figure out the social dynamics of the world. And now on to my complaints/rant. Be ye warned, if you read on, you\'ll get spoilers...</p><p>Okay. That ending? Cool as heck. Mind-blowing. I\'ll be thinking about it for a long time. Essentially, the Oracle claims that the alternate reality in the Grasshopper book is true, which could mean so many different things. Is the world a simulation? The Oracle is the AI controlling the simulation, and the world of the Grasshopper is the "real" world? My theory is the jewelry, the jewelry that Paul said had "wu", is similar to the Oracle in that it\'s a power that lies between the yin and the yang, on the line of the natural course of the world. The yin is the world of the book, the dark side, and the yang is the Grasshopper side. Somehow the world got split into two, and the Oracle is left bridging the gap. Because the jewelry had this wu, it allowed Tagomi to glimpse the other side, the other world. But obviously, I have no idea what I\'m talking about, and my head is still spinning from finishing the book last night.</p><p>One complaint: I loved the mystery we\'re left with at the very end of the book, but it annoys me to no end that it turns out all of the rest of the story, all the intersecting plot lines, all of that means nothing?? The entire point of the book was to drop this bomb on us at the very very end? So essentially, the entire book could be shortened to a few pages of world-building and then the ending twist?? Obviously, I get that that would make for a horrible story, but I feel kind of cheated that most of the book seems pointless once the Oracle tells us that the Grasshopper is true. But I guess that might be a point PKD is making. The twist ending in all our lives is death, when the world vanishes and ceases to have meaning.</p>',
                tags: ["books", "review", "reading"],
            },
            {
                id: "9",
                title: "Ubik - spoiler-free review",
                publishDate: "03/10/2021",
                previewText: '<p>Even if it isn\'t always obvious, Philip K. Dick\'s books tend to be very theme-oriented, rather than character or plot driven, at least the few I\'ve read. The theme can be hidden under layers and layers of words, and it might take digging to get to it, but for me personally, getting to the theme is the ultimate goal of reading a PKD novel. The characters might be flat, the plot might be simplistic or boring or nearly nonexistent (yes, you, The Man in the High Castle), but once I latch onto a theme or idea that makes me think, I\'m happy. Making the reader think is the point of sci-fi for me.</p><p>And <a href="https://www.goodreads.com/book/show/22590.Ubik" target="_blank">Ubik</a> is an awesome sci-fi book.</p><p>.....</p>',
                text: '<p>Even if it isn\'t always obvious, Philip K. Dick\'s books tend to be very theme-oriented, rather than character or plot driven, at least the few I\'ve read. The theme can be hidden under layers and layers of words, and it might take digging to get to it, but for me personally, getting to the theme is the ultimate goal of reading a PKD novel. The characters might be flat, the plot might be simplistic or boring or nearly nonexistent (yes, you, The Man in the High Castle), but once I latch onto a theme or idea that makes me think, I\'m happy. Making the reader think is the point of sci-fi for me.</p><p>And <a href="https://www.goodreads.com/book/show/22590.Ubik" target="_blank">Ubik</a> is an awesome sci-fi book. There are many diverse characters, but they\'re not very three-dimensional. There\'s a plot that\'s surprisingly easy to follow, but it\'s not very interesting to me. The world is well developed, but I abhorred the multitudes of outfit descriptions. (I really didn\'t like having to read about another person\'s ridiculous, "futuristic" outfit. But I guess it helped to make the world more memorable?) But the redeeming feature of this story is the theme, the idea of entropy. Human life is a constant battle against entropy. We build our lives out of messy, raw materials. We do our best to cure ourselves from sickness and aging. We fight against our base, animal natures in order to build as civilized a society as we can manage. This story takes the idea of fighting entropy and time to the next level.</p><p>The world of Ubik is a future in which nearly every appliance only works if you put money into it (toasters, showers and even front doors) and where humans have evolved various psychic and anti-psychic abilities. There are two rival organizations, one organization that hires psychics and one that hires anti-psychics, and people hire these organizations to essentially protect themselves from these powers (mind-reading, future-telling, etc.). I\'m not going to go into the plot other than to say that it kept me hooked the whole time. It was interesting and easy to follow. I kept comparing it to Neuromancer while reading. Ubik has a similarly fast-paced plot, but it\'s actually intelligible, unlike Neuromancer.</p><p>I loved Do Androids Dream of Electric Sheep? for the world-building and atmosphere. The feeling of gloom and dirt and despair is palpable thanks to the visual nature of the writing. Ubik is far less emotive, but it\'s way more fun. If you\'re not going to read much PKD, then I at least think you should read these two very different but very worth-it short sci-fi novels, DADOES and Ubik.</p>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "8",
                title: "Bobiverse books 1-3 - spoiler-free review",
                publishDate: "03/06/2021",
                previewText: '<p><a href=“https://www.goodreads.com/series/192752-bobiverse” target=“_blank”>Bobiverse</a> is a series about a guy (named Bob) who, before dying in a car accident, gets his brain backed up digitally in case sometime in the future someone could revive him as an AI. Well, it turns out someone could, and now Bob is a virtual person, living on a spaceship, and he can go anywhere he wants to, he is immortal, and given enough time he can command his drones to build pretty much anything. Bob can even make clones of himself, each slightly different from the others, to help him with his adventure. The series is light-hearted, easy-to-read, fun sci-fi. Modern sci-fi at its best.</p><p>.....</p>',
                text: '<p><a href=“https://www.goodreads.com/series/192752-bobiverse” target=“_blank”>Bobiverse</a> is a series about a guy (named Bob) who, before dying in a car accident, gets his brain backed up digitally in case sometime in the future someone could revive him as an AI. Well, it turns out someone could, and now Bob is a virtual person, living on a spaceship, and he can go anywhere he wants to, he is immortal, and given enough time he can command his drones to build pretty much anything. Bob can even make clones of himself, each slightly different from the others, to help him with his adventure. The series is light-hearted, easy-to-read, fun sci-fi. Modern sci-fi at its best.</p><p>I had very different experiences with each of the Bobiverse books, and I’m sure if I read them again I’d have different experiences again. So the rest of this post is mostly about how the time and place and mindset while reading a book can radically change how enjoyable it is.</p><p>I listened to the first book, We Are Legion (We Are Bob), as an audiobook during a road trip with my best friends one summer. I did most of the driving, so while the others took naps, I listened to Bob’s story. I have great memories from that time, but I do remember trying to rush to the end of the book. I think I got a bit bored by the end, and I was also on vacation and was probably trying to get it done before going to the arcade or buying fudge or something. I liked the book, but I think I like it even more looking back and recalling it.</p><p>Book two I picked up because... I don’t remember why. It certainly wasn’t because I’d loved the first all that much, and I ended up liking the second much less. I read this one on Kindle, and I remember barely any of the story. All I remember is that I couldn’t wait to get to the end of the book. I was bored and frustrated that I couldn’t keep the Bobs’ names and storylines straight in my head.</p><p>I took a long break between the second and third books, but eventually I started to miss the casual, low-stakes (I mean, they’re literally immortal) vibe of the books. Somehow, Bobiverse had crept up on me and become my sci-fi comfort reading. I kept thinking about the stories and concepts until I was compelled to pick up the third book. I ended up loving this one the most. (It also has the coolest cover, imo.) Sure, the stories and names were sometimes hard to keep track of, and it’s hard to get emotionally involved when the characters live forever and can pretty much make and do anything at anytime because they live in a virtual world and command millions of drones in the physical world, but book three finally felt like the book where things got real. Real people got involved in the Bobs’ lives, there was a full-on war, the Bobs could interact with the real world by inhabiting realistic-looking androids... The Bobiverse was finally worth my time and total attention. I can’t wait to get into the fourth book.</p>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "7",
                title: "I, Robot - spoiler-free review",
                publishDate: "03/01/2021",
                previewText: '<p><a href=“https://www.goodreads.com/book/show/17470669-i-robot” target=“_blank”>I, Robot</a> is a collection of short stories by Issac Assimov that were originally published between 1940 and 1950, when Assimov was 20-30 years old. For the time they were written in and considering what a young writer Assimov was at the time, it’s a truly amazing piece of fiction. But I’m not telling you to read a book just because it was good for some certain place or time. I want to tell you whether I, Robot is worth reading <i>today</i>.<p>.....</p>',
                text: '<p><a href=“https://www.goodreads.com/book/show/17470669-i-robot” target=“_blank”>I, Robot</a> is a collection of short stories by Issac Assimov that were originally published between 1940 and 1950, when Assimov was 20-30 years old. For the time they were written in and considering what a young writer Assimov was at the time, it’s a truly amazing piece of fiction. But I’m not telling you to read a book just because it was good for some certain place or time. I want to tell you whether I, Robot is worth reading <i>today</i>. So here’s my attempt:</p><p>Are the stories interesting? Yes. Do they link together in a satisfying way? Absolutely. Does the escalation of the robots\' sophistication in each story keep the momentum going through to the end of the book? Definitely. Did the world-building hold up over the 71 years since it was published? Nope. No. Not at all.</p><p>The dialogue is archaic and instantly put in my mind images of guys in slacks and old-fashion ties and women in knee-length dresses with their hair up. (Audio recordings on TAPE?!) The robots are described in a way that I can only call clunky, like how a child might draw a robot. Now, I\'m not for one second blaming Assimov for any of this. How could he have imagined how 2021 would actually look? And in a way, the 50s vibe almost adds to the stories. The 50s in America with robots in it is actually kind of cool. Whether Assimov meant to or not, he did build a world for his readers, a world that never existed and never will but a world that is well-realized nonetheless. If you can get past imaging old cars and old-fashioned glasses and clunky spacesuits then you\'re in for a fascinating and brilliant collection of stories. In my opinion, the clunkiness of the world-building is far outweighed by the brilliance of the stories.</p><p>Some people think Assimov wrote the robot series as an exploration of how to make robots possible and what they would do for us if/when they became sufficiently advanced. But I disagree. Assimov paints a grim picture of a world where technology never does what we expect it to. His famous “three laws of robotics” don’t protect humanity, and he wasn’t trying to prove that they would. Instead, he was showing us that maybe humans can’t write a set of laws that would distill their technological creations down to a predictable set of actions. We can’t trust ourselves to plug each and every loophole, and we can’t even trust that everyone will even want to plug the loopholes. (Imagine a robot army that doesn’t have to abide by the rule “don’t harm humans”. Some people would certainly consider that valuable.)</p><p>Technology, despite what we might think, is not in our control. We can’t control what gets invented or how the inventions are used. We can’t control who uses what and to what end. And as technology continues beyond the reach of our minds to fully understand, we’re starting to lose our ability to predict what it will do.</p>',
                tags: ["books", "review", "reading"],
            },
            {
                id: "6",
                title: "Solaris - spoiler review",
                publishDate: "02/08/21",
                previewText: '<p><a href="https://www.goodreads.com/book/show/95558.Solaris" target="_blank">Solaris</a> is a sci-fi novel about what happens when humans meet an alien. Cliche, right? It’s been done a million times, right? Wrong. It hasn’t been done quite how Stanislaw Lem does it in Solaris. This isn’t a story about humans meeting aliens that are more primitive than they are. Neither is it a story about humans meeting an advanced and warring species bent on destroying Earth. This is a story about what happens when humans meet something they can’t at all explain or understand—but this thing understands humans, or at least seems to.</p><p>.....</>',
                text: '<p><a href="https://www.goodreads.com/book/show/95558.Solaris" target="_blank">Solaris</a> is a sci-fi novel about what happens when humans meet an alien. Cliche, right? It’s been done a million times, right? Wrong. It hasn’t been done quite how Stanislaw Lem does it in Solaris. This isn’t a story about humans meeting aliens that are more primitive than they are. Neither is it a story about humans meeting an advanced and warring species bent on destroying Earth. This is a story about what happens when humans meet something they can’t at all explain or understand—but this thing understands humans, or at least seems to. The alien on the planet Solaris is a giant, goopy, dark-colored ocean the covers the planet. Yes, an ocean. The ocean replicates the objects that researches lower into it. It create strange structures that grow and collapse and seem to look like man-made cities but can’t possibly because how could the planet know what Earth’s cities look like? And for the scientists aboard the research station hovering above Solaris’s ocean, it creates replicas of things that it finds in the deepest, darkest, most-hidden parts of their minds.</span></p><p>In the book it’s explained that these repressed memories are the most complete and clear because of where they’re stored and how rarely they\'re corrupted by recollection. Solaris isn’t trying to horrify the scientists by reincarnating the people they hurt the most or the people who hurt them the most or the things that represent their greatest fears or regrets. Solaris is simply trying to communicate, and in doing so it acts like a mirror. It reflects back the worst of a person, for good or ill. Books are mirrors too. We get to see different sides of things, stories or other people. We get to see other times or other parts of ourselves, the parts we’re scared to look at. That’s what I found most interesting about Solaris, how it showed what happens to people when they face the worst of themselves. The main character drove his wife to suicide, and when Solaris replicated her for him, he inadvertently drove her to destroy herself again. That’s dark. And fascinating. But Solaris didn’t know what it was doing. It simply took out of Kelvin his most secret thoughts and memories, the things that most scarred him, and used those brain waves to communicate with him.</p><p>This isn’t a happy book, nor is it a perfect one. The psychological aspect of the book was the most interesting, but by the end I was getting tired of the frequent info-dumps about the scientific literature on Solaris. It just didn’t feel relevant to the story. That said, the book was short enough that I could forgive the info-dumps and enjoy the rest of it, especially the first half.</p>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "5",
                title: "Ender's Game - spoiler-free review",
                publishDate: "02/08/2021",
                previewText:
                    '<p><a href="https://www.goodreads.com/book/show/375802.Ender_s_Game" target="_blank">Ender’s Game </a>is so many people’s absolute favorite book, and for good reason. It’s well-written, well-paced and has something for every age of reader. As a kind you might gravitate to the action and the cool zero-gravity games. As a teen you might relate more to Ender’s struggles with his family and with growing up and having new responsibilities thrust on him. And as an adult you’re probably going to find the psychological and ethical angles of the book most fascinating.</p><p>.....</>',
                text:
                    '<p><a href="https://www.goodreads.com/book/show/375802.Ender_s_Game" target="_blank">Ender’s Game </a>is so many people’s absolute favorite book, and for good reason. It’s well-written, well-paced and has something for every age of reader. As a kind you might gravitate to the action and the cool zero-gravity games. As a teen you might relate more to Ender’s struggles with his family and with growing up and having new responsibilities thrust on him. And as an adult you’re probably going to find the psychological and ethical angles of the book most fascinating. This is why Ender’s Game is one of the very few books the I’ve reread.</p><p>Ender’s Game follows Ender, a little boy from Earth who gets sent to a Battle School, a school in space where kids barely study regular subjects and instead devote their time to a sport that’s played in a giant, zero-gravity room. Two armies of children armed with laser guns battle each other for points, prestige and the skills necessary to move on to Command School where they’re trained to command fleets of space ships, all in preparation for the next alien invasion. Earth was almost destroyed the first time the aliens came, and the humans don’t want to see that disaster happen again.</p><p>Ender’s Game is a very digestible sci-fi novel, even if you’re not a fan of the genre. It has action, memorable characters, heart-warming relationships and a main character who is frighteningly, fascinatingly brilliant. I love reading stories from the perspective of someone way smarter than me, and I’m always impressed by the authors who can pull off smart characters.</p>',
                tags: ["review", "reading", "books"],
            },
            {
                id: "4",
                title: "The Left Hand of Darkness - spoiler review",
                publishDate: "02/02/2021",
                previewText:
                    "<p>I didn’t like The Left Hand of Darkness. I wish I did. I badly wanted to. But when I compare the fascinating sci-fi concepts and the cool setting (pun intended) to the plot, the plot doesn’t live up to the potential. I expected Le Guin to blow me away with a riveting story, but instead I got political intrigue and a dull and lengthy escape across a glacier.</p><p>.....</p>",
                text:
                    "<p>I didn’t like The Left Hand of Darkness. I wish I did. I badly wanted to. But when I compare the fascinating sci-fi concepts and the cool setting (pun intended) to the plot, the plot doesn’t live up to the potential. I expected Le Guin to blow me away with a riveting story, but instead I got political intrigue and a dull and lengthy escape across a glacier.</p><p>Here’s the premise: In the far future there is a collection of planets that form an alliance called The Hundred Worlds. A man names Genly travels from one of these worlds to a cold, ice-covered planet named Winter that isn’t part of the alliance. His job is to convince the inhabitants of Winter to join The Hundred Worlds, but the inhabitants are very skeptical and old fashioned. They’ve never had a visitor come from space before, and they don’t even really believe that Genly came from space at all… except that Genly, unlike everyone else on Winter, is male, a person who always displays the physical characteristics of a man. This blows the Winter peoples’ minds because on Winter there are no genders. Everyone is ambisexual, and once a month each person enters a period called “kemmer” in which they begin to take on the characteristics of one or the other gender and become sexually active. This period only lasts a few days, and then the person is back to being neither female nor male.</p><p>Cool, right? Interesting premise, unique and ripe for a fascinating story. But instead I could tell you the entire story without ever bringing up the fact that Winter’s inhabitants are androgynous. It has pretty much no bearing on the story, and that’s disappointing, because it makes the whole ambisexual thing seem like nothing but the cherry on top of the milkshake, except the cherry is very small and probably not even edible. The one thing I did find interesting while reading LHoD is that I kept catching myself imaging the characters all as men (because Genly does that), so I’d keep trying to imagine everyone as ambisexual. It was interesting to me how difficult that was for me. Other than that, I wasn’t interested in the content of the plot whatsoever.</p><p>Let me know what you thought of LHoD! I know tons of people love it, and I’d especially love to read comments from the Love It side.</p>",
                tags: ["review", "reading", "books"],
            },
            {
                id: "3",
                publishDate: "12/26/2020",
                title:
                    "Why There Will Always Be War - Slaughterhouse-Five by Kurt Vonnegut",
                previewText:
                    '<p><a href="https://www.goodreads.com/book/show/4981.Slaughterhouse_Five" target="_blank">This book</a> is a book that shows how absurd everything is. It starts with Billy Pilgrim, the main character. Billy is clearly not mentally stable. His narration is unreliable. His perspective of war is not to be trusted, is not rational. We’re seeing the war through his traumatized and confused point of view. But isn’t that the point? There is no rational perspective on war. It’s all absurd. War is human absurdism at its most extreme.</p><p>.....</p>',
                text:
                    '<p><a href="https://www.goodreads.com/book/show/4981.Slaughterhouse_Five" target="_blank">This book</a> is a book that shows how absurd everything is. It starts with Billy Pilgrim, the main character. Billy is clearly not mentally stable. His narration is unreliable. His perspective of war is not to be trusted, is not rational. We’re seeing the war through his traumatized and confused point of view. But isn’t that the point? There is no rational perspective on war. It’s all absurd. War is human absurdism at its most extreme. It swallows up so many people, all at once. It takes away innocence and joy and life itself.</p><p>And yet... it’s unavoidable, and anyone who thinks otherwise is being unrealistic. We’re supposed to accept the things we can’t change, and war is one of those things. The two ends of the spectrum in Slaughterhouse-Five are: war is absurd and evil and, on the other end, free will doesn’t exist. War, in other words, is unavoidable no matter how many people agree that killing other people should be avoided. The story explores both those ends in a dizzying traversal back and forth across the life of a fictional man named Billy Pilgrim. The non-linear structure of the story is a representation of the extremes of the spectrum. There is no middle ground. There is no solution.</p><p>Maybe Billy never actually time travels. Maybe all his flash backs and flash forwards are actually episodes of PTSD. PTSD is a form of time travel. How does one process horrors that always existed (i.e. they were unavoidable) and always will (i.e. the memories are there, the event happened and always will have)? The way Billy processed was by inventing the Tralfamadorians to explain why he couldn\'t escape his past. No, he wasn’t in psychological turmoil. He was just unstuck in time. I’m sadly sure there are lots of people who suffer enough that they, too, would rather believe in aliens than in the horrors of their past, the horrors that exist in their minds and always will.</p>',
                tags: ["books", "review", "reading"],
            },
            {
                id: "2",
                publishDate: "12/20/2020",
                title:
                    "All Systems Red (Murderbot Diaries #1) - spoiler-free review",
                previewText:
                    '<p>One line review: Murderbot is an antisocial, depressed security robot who hates its job and wants nothing more than to watch TV shows, but unfortunately it is contractually obliged to save its humans.</p><p><a href="https://www.goodreads.com/book/show/32758901-all-systems-red" target="_blank">All Systems Red</a> is funny, interesting and fun to read the whole way through. It’s a story about a security robot named Murderbot who hacked its own operating system and is now a free agent. It doesn’t tell anyone this and instead uses its newfound privileges to download thousands of hours of TV shows.</p><p>.....</p>',
                text:
                    '<p>One line review: Murderbot is an antisocial, depressed security robot who hates its job and wants nothing more than to watch TV shows, but unfortunately it is contractually obliged to save its humans.</p><p><a href="https://www.goodreads.com/book/show/32758901-all-systems-red" target="_blank">All Systems Red</a> is funny, interesting and fun to read the whole way through. It’s a story about a security robot named Murderbot who hacked its own operating system and is now a free agent. It doesn’t tell anyone this and instead uses its newfound privileges to download thousands of hours of TV shows. It is rented out to a team of researchers who are exploring a new planet, and it pretty quickly turns out that the team is in danger. Unfortunately for Murderbot that means it has to stop watching TV shows and save its humans.</p><p>The story itself is pretty bland, especially if you’re expecting an intricately plotted space opera, but that doesn’t detract much from the enjoyment because the point of the story is to get us invested in the plight of this robot who has freedom and now has to figure out what to do with that freedom. The world building is pretty sparse, aside from some good descriptions of the planet. This too makes sense. After all, Murderbot doesn’t care about what the place looks like, and we’re seeing and hearing everything from its perspective. Same goes for the humans in the story. Murderbot didn’t care much whether they lived or died for at least the beginning of the book, so why would it try to make you care very much or even be able to tell the characters apart?</p><p>The sentence fragments and otherwise informal writing style took me a while to get used to, but it fits Murderbot’s character so I can just assume the style was intentional. This book is a funny and unique sci-fi novella from a robot’s perspective. There’s nothing not to like. I’m super excited to get into the rest of the series.</p><p>Four stars.</p>',
                tags: ["books", "review", "reading"],
            },
            {
                id: "1",
                publishDate: "12/19/2020",
                title:
                    "House of Suns by Alastair Reynolds - spoiler-free review",
                previewText:
                    '<p>If you want a one-line review, here it is: House of Suns is&nbsp;like <a href="https://www.goodreads.com/book/show/32109569-we-are-legion-we-are-bob?ac=1&amp;from_search=true&amp;qid=REHVxNAVdr&amp;rank=1" target="_blank">We Are Legion (We Are Bob)</a>... just way more exciting.</p><p><a href="https://www.goodreads.com/book/show/1126719.House_of_Suns?ac=1&amp;from_search=true&amp;qid=KaPPL6RUz7&amp;rank=1" target="_blank">House of Suns</a> is technically a hard sci-fi space opera. Technically. But that generic description doesn’t do this galactic murder mystery justice.</p><p>.....</p>',
                text:
                    '<p>If you want a one-line review, here it is: House of Suns is&nbsp;like <a href="https://www.goodreads.com/book/show/32109569-we-are-legion-we-are-bob?ac=1&amp;from_search=true&amp;qid=REHVxNAVdr&amp;rank=1" target="_blank">We Are Legion (We Are Bob)</a>... just way more exciting.</p><p><a href="https://www.goodreads.com/book/show/1126719.House_of_Suns?ac=1&amp;from_search=true&amp;qid=KaPPL6RUz7&amp;rank=1" target="_blank">House of Suns</a> is technically a hard sci-fi space opera. Technically. But that generic description doesn’t do this galactic murder mystery justice. Let’s start with the premise. Six million years before the story’s main plot, Abigail Gentian created 1000 clones (aka, “shatterlings”) of herself and sent them out across the galaxy. Every once in a while (say, a couple hundred thousand years) the shatterlings reunite and exchange memories from their adventures in space. But at the latest reunion, the Gentian Line is ambushed. Most of the shatterlings are killed. And that’s where House of Suns begins. The book follows two plot lines, one about the shatterlings and how they search out answers and revenge and one about Abigail Gentian and her story up until she cloned herself.</p><p>Alastair Reynolds did an awesome job balancing action, interesting characters and a mysterious plot with truly fascinating science. The idea of a drug that you can squirt into your eyes that will then slow down your perception of time, allowing you to experience a few seconds while thousands of years pass in the universe, keeping you alive and sane while you travel across thousands of light years? That’s just dope. There’s a lot of dope science in this book. While reading I felt my perception of space and time shift to match the galactic scale that the shatterlings experience. For them it’s nothing to be put into stasis for a few thousand years while they travel or to receive messages about events years after they’ve occurred. Reynold’s brilliance is how well he gets his readers to enter this world of scales we have absolutely no experience with.</p><p>There are sentient robots in this book, robots who have a fascinatingly different philosophy than humans do. Multiple times in HOS a robot has pointed out that revenge is “that most pointlessly biological of imperatives”. There is no point in revenge because it doesn’t change what happened or fix anything or make anyone feel much better. If robots aren’t your thing, there are also wormholes and a being called The Spirit of the Air, something that used to be a person before he translated each of his neurons into a computer. Then he remade himself so that he was leagues beyond what any computer—let alone person—could keep up with. (How lonely!) After that he made himself transcend physical limitations by splitting himself into independent neurons that powered themselves on the very vacuum of space.</p><p>The story sets up lots of questions: What happened to Andromeda? Who betrayed the Line? Why were they betrayed? And why the heck does that robot have a single human arm? I was immediately invested in the story and couldn’t wait to find answers. The questions kept me reading through the slightly boring portions, and there was plenty of action to balance out the boring. I think a good judge of whether I enjoyed a book is if the answers I had at the outset of the story were answered in a satisfying, surprising way. The answers in House of Suns didn’t disappoint.</p><p>Five stars.</p>',
                tags: ["books", "review", "reading"],
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
