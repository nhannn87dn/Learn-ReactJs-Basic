import type { Route } from "./+types/HomePage";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </main>
  )
}
