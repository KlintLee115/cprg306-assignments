import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 gap-5">
      <h2>CPRG 306: Web Development 2 - Assignments</h2>
      <Link href={"/week-2"}>Week 2</Link>
      <Link href={"/week-3"}>Week 3</Link>
      <Link href={"/week-4"}>Week 4</Link>
      <Link href={"/week-5"}>Week 5</Link>
    </main>
  );
}
