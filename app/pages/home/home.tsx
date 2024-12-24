import underConstruction from "/under-construction.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col pt-8 justify-center items-center">
      <h2 className="text-lg">Our site and studio are under construction!</h2>
      <section className="p-4 flex flex-col gap-y-4 items-center">
        <p>
          Welcome to Redball Recording Studio, a premier music recording studio nestled in the heart of Frenchtown, Montana. Surrounded by stunning landscapes, our studio offers an inspiring and tranquil environment, perfect for artists seeking to create and record their music in a setting like no other.
          <br />
          With state-of-the-art equipment and a team of passionate, experienced professionals, we provide a wide range of services—from recording and mixing to production and mastering. Whether you're a solo artist, a band, or a producer, our goal is to bring your vision to life, blending the beauty of the surroundings with the art of sound.

          At Redball Recording Studio, we believe that music is an expression of the soul, and our mission is to help you capture that essence. Come create, innovate, and experience the magic of Montana through the music we help bring to the world.
        </p>
        <div className="pt-4">
          <img
            src={underConstruction}
            alt="Image of studio building under construction"
            className="h-96 w-auto rounded-lg" />
        </div>
      </section>
    </div>
  );
}
