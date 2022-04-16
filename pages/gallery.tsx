import Image from "next/image";
import { useState } from "react";
import img1 from "../public/images/1.jpg";
import img2 from "../public/images/2.jpg";
import img3 from "../public/images/3.png";
import img6 from "../public/images/6.jpg";
import img7 from "../public/images/7.png";
import img8 from "../public/images/8.jpg";
import img9 from "../public/images/9.jpg";
import img10 from "../public/images/10.jpg";
import img11 from "../public/images/11.jpg";
import img12 from "../public/images/12.jpg";
import img13 from "../public/images/13.jpg";
import img14 from "../public/images/14.jpg";
import img15 from "../public/images/15.jpg";
import img16 from "../public/images/16.jpg";
import img18 from "../public/images/18.jpg";
import img19 from "../public/images/19.jpg";
import img20 from "../public/images/20.jpg";
import img1_uc from "../public/images/1_uncompressed.jpg";
import img2_uc from "../public/images/2_uncompressed.jpg";
import img3_uc from "../public/images/3_uncompressed.png";
import img6_uc from "../public/images/6_uncompressed.jpg";
import img7_uc from "../public/images/7_uncompressed.png";
import img8_uc from "../public/images/8_uncompressed.jpg";
import img9_uc from "../public/images/9_uncompressed.jpg";
import img10_uc from "../public/images/10_uncompressed.jpg";
import img11_uc from "../public/images/11_uncompressed.jpg";
import img12_uc from "../public/images/12_uncompressed.jpg";
import img13_uc from "../public/images/13_uncompressed.jpg";
import img14_uc from "../public/images/14_uncompressed.jpg";
import img15_uc from "../public/images/15_uncompressed.jpg";
import img16_uc from "../public/images/16_uncompressed.jpg";
import img18_uc from "../public/images/18_uncompressed.jpg";
import img19_uc from "../public/images/19_uncompressed.jpg";
import img20_uc from "../public/images/20_uncompressed.jpg";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Gallery() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <BlurImage key="img1" image={img1} />
        <BlurImage key="img2" image={img2} />
        <BlurImage key="img3" image={img3} />
        <BlurImage key="img6" image={img6} />
        <BlurImage key="img7" image={img7} />
        <BlurImage key="img8" image={img8} />
        <BlurImage key="img9" image={img9} />
        <BlurImage key="img10" image={img10} />
        <BlurImage key="img11" image={img11} />
        <BlurImage key="img12" image={img12} />
        <BlurImage key="img13" image={img13} />
        <BlurImage key="img14" image={img14} />
        <BlurImage key="img15" image={img15} />
        <BlurImage key="img16" image={img16} />
        <BlurImage key="img18" image={img18} />
        <BlurImage key="img19" image={img19} />
        <BlurImage key="img20" image={img20} />
        <BlurImage key="img1_uc" image={img1_uc} />
        <BlurImage key="img2_uc" image={img2_uc} />
        <BlurImage key="img3_uc" image={img3_uc} />
        <BlurImage key="img6_uc" image={img6_uc} />
        <BlurImage key="img7_uc" image={img7_uc} />
        <BlurImage key="img8_uc" image={img8_uc} />
        <BlurImage key="img9_uc" image={img9_uc} />
        <BlurImage key="img10_uc" image={img10_uc} />
        <BlurImage key="img11_uc" image={img11_uc} />
        <BlurImage key="img12_uc" image={img12_uc} />
        <BlurImage key="img13_uc" image={img13_uc} />
        <BlurImage key="img14_uc" image={img14_uc} />
        <BlurImage key="img15_uc" image={img15_uc} />
        <BlurImage key="img16_uc" image={img16_uc} />
        <BlurImage key="img18_uc" image={img18_uc} />
        <BlurImage key="img19_uc" image={img19_uc} />
        <BlurImage key="img20_uc" image={img20_uc} />
      </div>
    </div>
  );
}

function BlurImage({ image }: { image: string | StaticImageData }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt=""
        src={image}
        layout="fill"
        objectFit="cover"
        className={cn(
          "duration-700 ease-in-out group-hover:opacity-75",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
