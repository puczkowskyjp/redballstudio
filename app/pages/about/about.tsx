import dano from "/dano.jpeg";

export default function Index() {
  return (
    <div className="p-8">
        <img
          src={dano}
          alt="Redball Logo"
          className="h-45 w-auto rounded-full ring-2"
        />
      <p className="pt-4">Hi we redball we record sounds and stuff...farts.</p>
    </div>
  );
}
