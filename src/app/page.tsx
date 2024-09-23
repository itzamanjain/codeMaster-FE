
import { Landing } from "../components/Landing";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className="bg-[#020817]">
      <Landing />
    </main>
  );
}

export const dynamic = "force-dynamic"
