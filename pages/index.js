import RootLayout from "@/components/Layout/RootLayer";
import Image from "next/image";

import sample from "../public/sample-image.jpg";

export default function HomePage() {
  return (
    <>
      <RootLayout>
        {/* <NavBar/>   */}
        <main className="w-full h-full">
          <div className="w-64 h-64  border">
            <Image
              alt="sample-image"
              src={sample}
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={10}
              placeholder="blur"
            />
          </div>
        </main>
      </RootLayout>
    </>
  );
}
