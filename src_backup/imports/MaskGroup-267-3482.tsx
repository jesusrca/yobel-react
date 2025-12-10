import imgImage5 from "figma:asset/9ac8347172b026af959d42786a41d5d5a429a366.png";
import { imgImage4 } from "./svg-w7fud";

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <div className="absolute h-[1090px] left-[-46px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[46px_0px] mask-size-[1451.62px_1019.04px] top-0 w-[1602px]" data-name="image 4" style={{ maskImage: `url('${imgImage4}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}