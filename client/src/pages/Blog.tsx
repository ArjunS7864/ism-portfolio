/*
 * Blog Page — ISM Digital Portfolio
 * Sections: Blog posts ordered newest to oldest with dates
 */
import { Calendar } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    date: "February 2, 2026",
    title: "Chapter 11: The Home Stretch to the Finale",
    excerpt: "Last week in ISM was unlike the week prior, one of our lighter weeks, due to a snowstorm; our school was practically cancelled for the whole week, simultaneously cancelling our ISM showcase that was supposed to be held at the Comerica Center. Though progress was halted and some highly anticipated events were canceled, our journey ISM never pauses. For the past week, we've been working towards our final product proposal, whether this be through completing research assessments, meeting with my mentor, or overall just brainstorming something helpful for my career field. It has been a rewarding process. To start off the week, I began by meeting with Professor Gilpin (my mentor) and introducing my final product proposal and catching her up on all the progress that's been made since I last met with her.",
    tags: ["Final Product", "Mentor Meeting"],
  },
  {
    id: 2,
    date: "January 26, 2026",
    title: "Chapter 10: The Grand Reveal: ISM IHS Showcase",
    excerpt: "This week in ISM has been the most eventful in comparison to our past few weeks, because this week at last all our work finally reached the point of presentation. Specifically, what I mean by this is that this last week we had our very first showcase event via the Independence High School library. But before this, we were prompted to finish our posterboards and work hard towards creating a 2-3 minute 'speech' that goes on to describe our work up to this point and covers the essential aspects of our board. Starting off, I began this homestretch by having a clear idea of my posterboard, as I feel like knowing exactly what I wanted on my board helped me a lot in gaining Ms. Naegle's approval quickly.",
    tags: ["Presentation", "Showcase"],
  },
  {
    id: 3,
    date: "January 12, 2026",
    title: "Chapter 9: The Pieces are Falling In Place",
    excerpt: "Over the last few weeks, ISM has been in a highly developmental phase, meaning that a lot of our time has been spent finishing up our original works and prepping our plans for our display boards, not to mention the finalization of our mentors. Specifically, for me, though, I've really enjoyed this time period for a number of reasons. First, over winter break, I was able to finalize who my mentor was going to be in Professor Leilani H Gilpin from UC Santa Cruz's AI and Engineering department. After having an insightful session with her and a successful interview, I felt as if asking her to be my mentor would be an optimal idea.",
    tags: ["Mentor", "Original Work"],
  },
  {
    id: 4,
    date: "December 8, 2025",
    title: "Chapter 8: The Building Blocks Along the Way",
    excerpt: "Over these past few weeks in ISM, I've been progressing at a great rate and have been working towards the completion of my original work project. Towards the beginning of this extensive period, I was able to speak with Mrs.Naegle and finalize my plan of how I should proceed with my original work. Specifically, we felt it was the best idea to speak with my mentor or a teacher if they'd be willing to let me design a plan for a specific assignment in their class for me to put my personal touch on, surrounding soft skill fostering, as that is what I've been researching.",
    tags: ["Original Work", "Planning"],
  },
  {
    id: 5,
    date: "November 17, 2025",
    title: "Chapter 7: The Process Begins",
    excerpt: "These past two weeks in ISM have been very insightful, yet rather calm in comparison to other time periods. To start off, this period began with me wrapping up my interviews. In these I met with two UNT professors, in which one was the head of the mechanical engineering department. In these conversations I learned a lot about my topic and was able to gain a clear structure of how I should proceed with my original work project. More so, I also finished up my third research assessment where I found a quality article targeting mechanical engineering geared curricula.",
    tags: ["Interviews", "Research"],
  },
  {
    id: 6,
    date: "November 3, 2025",
    title: "Chapter 6: Interviews and Interactions: A learning curve",
    excerpt: "Over the past week in ISM, I had the honor to interview Professor Leilani H Gilpin from the University of California, Santa Cruz, and gain an expert opinion on my potential original work. Specifically, I started off the week by interviewing her, asking questions with the hope of gaining insight into her career field, which is surrounded by teaching graduate and undergraduate students from the UC Santa Cruz campus about computer science and engineering. Upon having a phenomenal conversation, I presented a very raw idea about my original work, in which she gave me good feedback and inspired the idea to implement a potential mechanical engineering class/curriculum.",
    tags: ["Interview", "Mentor"],
  },
  {
    id: 7,
    date: "October 21, 2025",
    title: "Chapter 5: Life's newest venture: the foundation",
    excerpt: "This past week in ISM, I was given the opportunity to gain feedback on the specificity of my topic, alongside research, and reach out to professionals in my field. Specifically, I began the week by researching multiple online platforms to find potential suitors for mentorship. I looked across LinkedIn, where I found a few mechanical engineers that I could potentially contact for interviews, but most importantly, I leveraged my warm contacts. Doing research in the past independently, I was able to have a few of my past mentors be able to assist me in finding some contacts in my career field.",
    tags: ["Networking", "Research"],
  },
  {
    id: 8,
    date: "September 29, 2025",
    title: "Chapter 4: The Tree Bears Fruit!",
    excerpt: "Spanning from interviews with professionals to information sessions on how to be successful in ISM over this past week I was given the opportunity to attend the ISM symposium and if I were to describe the experience in one word it would be astounding. To start off the symposium we engaged in the networking session where we were prompted to find professionals and other students to have insightful conversations with. I was heavily successful in this event as being a sociable individual, at least in my eyes, I found it easy to talk with different people across different backgrounds and learn more about their careers.",
    tags: ["Symposium", "Networking"],
  },
  {
    id: 9,
    date: "September 22, 2025",
    title: "Chapter 3: All Roads Lead to the Symposium",
    excerpt: "Last week in ISM, I had the privilege of crafting unique questions for our upcoming symposium. Specifically, upon being given a set of questions to answer, I had to dive deep into my passions and desires to understand how it is I should answer these questions without making them seem far too generic. A specific question that stood out to me was the one that asked what advice I would give my past self. I found this question quite challenging because it required deep introspection, and I truly had to question most, if not all, steps that I had taken to reach where I am.",
    tags: ["Reflection", "Symposium"],
  },
  {
    id: 10,
    date: "September 15, 2025",
    title: "Chapter 2: A Deep Dive in the Lab",
    excerpt: "Over the past week in ISM, I was allowed to truly submerge myself into the intricacies of my field in order to narrow down my topic. To start off the week, I was really taken aback by all the different problems in the field of Mechanical Engineering. Though all of these issues are extremely vital to the field and detrimental to the work being done, for my purposes, I did not feel as if they were specific enough to capture my goals with this project. More so, one issue in particular I find to be quite intriguing is the issue of addressing faulty materials within the industry.",
    tags: ["Research", "Topic Development"],
  },
  {
    id: 11,
    date: "September 9, 2025",
    title: "Chapter 1: The Start of a New Beginning",
    excerpt: "This week in ISM, I entered a new realm of research and really dived deeper into the domain of professionalism. To elaborate on this, over the past week, I worked to build my ISM-oriented resume, which focused on short and concise explanations, while ensuring to keep the center focus point the same. Before having a greater understanding of a professional resume, my resume used to span the length of 3-4 pages, with each experience with a very detailed and lengthy description. Thus, a challenge I encountered was choosing out my top 2-3 most important activities and only describing them very briefly.",
    tags: ["Getting Started", "Resume"],
  },
];

export default function Blog() {
  return (
    <div className="pt-16">
      {/* ─── Page Header ─── */}
      <section className="py-20" style={{ background: "oklch(0.22 0.02 240)" }}>
        <div className="container">
          <p className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.75 0.08 75)" }}>
            Portfolio
          </p>
          <h1
            className="display-font font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "oklch(0.97 0.005 80)", lineHeight: 1.1 }}
          >
            Blog
          </h1>
          <div className="gold-line mb-4" />
          <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.65 0.01 80)" }}>
            Reflections, experiences, and discoveries from my ISM journey — newest to oldest.
          </p>
        </div>
      </section>

      {/* ─── Blog Posts ─── */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-10">
            {BLOG_POSTS.map((post, i) => (
              <article
                key={post.id}
                className="blog-card fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Date */}
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={13} style={{ color: "oklch(0.62 0.12 75)" }} />
                  <time
                    className="text-xs tracking-wide"
                    style={{ fontFamily: "var(--font-heading)", color: "oklch(0.62 0.12 75)", letterSpacing: "0.08em" }}
                  >
                    {post.date}
                  </time>
                </div>

                {/* Title */}
                <h2
                  className="display-font font-semibold text-2xl mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.02 240)" }}
                >
                  {post.title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full font-medium tracking-wide"
                      style={{
                        fontFamily: "var(--font-heading)",
                        background: "oklch(0.94 0.01 80)",
                        color: "oklch(0.42 0.015 240)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Excerpt */}
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.38 0.015 240)" }}
                >
                  {post.excerpt}
                </p>

                {/* Divider */}
                {i < BLOG_POSTS.length - 1 && (
                  <div className="mt-10" style={{ borderBottom: "1px solid oklch(0.88 0.01 80)" }} />
                )}
              </article>
            ))}
          </div>

          <div
            className="mt-12 p-6 rounded-sm border text-center"
            style={{ background: "oklch(0.994 0.004 85)", borderColor: "oklch(0.88 0.01 80)" }}
          >
            <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.52 0.015 240)" }}>
              Add new blog posts above as you progress through your ISM year. Keep them ordered newest to oldest and always include the date posted.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
