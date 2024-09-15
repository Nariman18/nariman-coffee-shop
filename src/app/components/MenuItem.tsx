import Image from "next/image";

interface Props {
  imgSrc: string;
  name: string;
  description: string;
  price: number;
}

function MenuItem({ imgSrc, name, description, price }: Props) {
  return (
    <div className="flex items-center gap-4">
      {/* Image */}
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
        <Image
          src={imgSrc}
          alt="Menu Items"
          fill
          quality={100}
          className="object-contain"
        />
      </div>
      {/* Text */}

      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-between gap-4 items-baseline">
          {/* Name */}
          <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">
            {name}
          </p>
          {/* border */}
          <div className="flex-1 border-b border-dashed border-primary"></div>
          {/* Price*/}
          <p className="leading-none font-primary font-semibold text-[25px] text-primary">
            {price.toFixed(2)}
          </p>
          {/* description */}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MenuItem;
