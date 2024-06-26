import { posts } from "#site/content";
import { PostItems } from "@/components/PostItems";
import { sortPostsByRecent } from "@/lib/utils";
async function BlogPage() {
  const sortedPosts = sortPostsByRecent(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold lg:text-5xl">Blog</h1>
          <p className="text-lg text-muted-foreground">
            My trash documentation all of things about web development
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { title, date, slug, description } = post;
            return (
              <li key={slug}>
                <PostItems
                  title={title}
                  date={date}
                  slug={slug}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet.</p>
      )}
    </div>
  );
}

export default BlogPage;
