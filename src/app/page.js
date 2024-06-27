import Image from "next/image";
import MainPage from "../pages/main"

export default function Home() {
  return (
    <main className="dark flex min-h-screen flex-col items-center justify-between p-24">
      <MainPage/>
    </main>
  );
}
