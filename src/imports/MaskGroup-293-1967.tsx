import imgImage5 from "figma:asset/9ac8347172b026af959d42786a41d5d5a429a366.png";
import { imgImage4 } from "./svg-0odmx";

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <div className="absolute h-[1088.39px] left-[-35.13px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[35.127px_-0.867px] mask-size-[1459px_1019px] top-[0.87px] w-[1599.27px]" data-name="image 4" style={{ maskImage: `url('${imgImage4}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}