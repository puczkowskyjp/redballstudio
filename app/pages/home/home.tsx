import underConstruction from "public/under-construction.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-lg">This Site and Studio are under construction!</h2>
      <section className="p-4 flex flex-col gap-y-4 items-center">
        <p>
          We have been working hard on the studio, and are excited to share the progress!
        </p>
        <div className="pt-4">
          <img
            src={underConstruction}
            alt="Image of studio building under construction"
            className="h-96 w-auto" />
        </div>
      </section>
    </div>
  );
}
