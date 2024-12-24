import Engineers from '~/pages/engineers/engineers';
import type { Route } from './+types/engineers';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Redball Studio | Engineers" },
    { name: "description", content: "Meet the audio engineers and listen to samples of their work." },
  ];
}

export default function Page() {
  return <Engineers/>;
}
