import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      createdAt: new Date(),
      title: "Frogo",
      description: "Description of Frogo",
      views: 10,
      img: "https://media.istockphoto.com/id/175397603/photo/frog.jpg?s=612x612&w=0&k=20&c=EMXlwg5SicJllr7gnSFUUjzwCGa1ciLjYD1bk8NvO2E=",
      category: "Frogs",
      id: 1,
      author: {
        id: 1,
        name: "Froggy Bimbins",
      }
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-xl">
          Submit Ideas, Vote on Pitches, And Get noticed In Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => <StartupCard key={post?.id} post={post}/>)
          ) : (
            <div className="no-results">No Results Found</div>
          )}
        </ul>
      </section>
    </>
  );
}
