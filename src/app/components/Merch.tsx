import { type CSSProperties, useEffect, useRef, useState } from "react";
import merchBackground from "../../../live_event_bg.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ViewportFixedBackground } from "@/app/components/ViewportFixedBackground";
import "./Merch.css";

type MerchProduct = {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  productUrl: string;
};

type MerchTrackStyle = CSSProperties & {
  "--mobile-center": string;
  "--desktop-center": string;
};

const products: MerchProduct[] = [
  {
    id: "175",
    title: "can't be blue - can't be blue (1st Full Album)",
    price: "$18.00",
    imageUrl: "https://en.goodduckshop.com/web/product/big/202606/7c4fc4fb30e7e661fd0bf6cb7d4bf39a.png",
    productUrl: "https://en.goodduckshop.com/product/cant-be-blue-cant-be-blue-1st-full-album/175/category/83/display/1/",
  },
  {
    id: "174",
    title: "can't be blue Pin Button Badge (Blue daisy ver.)",
    price: "$9.00",
    imageUrl: "https://en.goodduckshop.com/web/product/big/202606/bfd7f49e3053cdb38980afc9a141e6f6.png",
    productUrl: "https://en.goodduckshop.com/product/cant-be-blue-pin-button-badge-blue-daisy-ver/174/category/83/display/1/",
  },
  {
    id: "170",
    title: "can't be blue Summer Slogan",
    price: "$9.00",
    imageUrl: "https://en.goodduckshop.com/web/product/big/202606/ec04e491d510b98215928723bc939bbd.png",
    productUrl: "https://en.goodduckshop.com/product/cant-be-blue-summer-slogan/170/category/83/display/1/",
  },
  {
    id: "169",
    title: "can't be blue Guitar Pick Keyring",
    price: "$11.00",
    imageUrl: "https://en.goodduckshop.com/web/product/big/202605/d7f053990cbdeebe3d36f6d46561e75d.png",
    productUrl: "https://en.goodduckshop.com/product/cant-be-blue-guitar-pick-keyring/169/category/83/display/1/",
  },
  {
    id: "168",
    title: "can't be blue Logo T-Shirt",
    price: "$25.00",
    imageUrl: "https://en.goodduckshop.com/web/product/big/202605/c333e13e2eec646da864528bfd0c8ea5.png",
    productUrl: "https://en.goodduckshop.com/product/cant-be-blue-logo-t-shirt/168/category/83/display/1/",
  },
  {
    id: "167",
    title: "can't be blue 2nd EP Album : Prussian Blue",
    price: "$9.00",
    imageUrl: "https://en.goodduckshop.com/web/product/big/202605/19d260a1013cf2fec2e16dad98666b44.png",
    productUrl: "https://en.goodduckshop.com/product/cant-be-blue-2nd-ep-album-prussian-blue/167/category/83/display/1/",
  },
  {
    id: "172",
    title: "can't be blue Slogan Towel (Navy)",
    price: "$15.00",
    imageUrl: "https://en.goodduckshop.com/web/product/big/202605/72c5d0a89f19968001e75222c8025afd.png",
    productUrl: "https://en.goodduckshop.com/product/cant-be-blue-slogan-towel-navy/172/category/83/display/1/",
  },
  {
    id: "171",
    title: "can't be blue Slogan Towel (White)",
    price: "$15.00",
    imageUrl: "https://en.goodduckshop.com/web/product/big/202605/d9ec08febb4f7c24640fa9eaaee59a56.png",
    productUrl: "https://en.goodduckshop.com/product/cant-be-blue-slogan-towel-white/171/category/83/display/1/",
  },
];

function wrapIndex(index: number, itemCount: number) {
  return (index + itemCount) % itemCount;
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className={`size-6 md:size-12 ${direction === "left" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 48 48">
      <path d="m19 12 12 12-12 12" stroke="currentColor" strokeLinecap="square" strokeWidth="2" />
    </svg>
  );
}

export function Merch() {
  const itemCount = products.length;
  const [activeVirtualIndex, setActiveVirtualIndex] = useState(itemCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const activeVirtualIndexRef = useRef(itemCount);
  const settleTimer = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const activeProduct = products[wrapIndex(activeVirtualIndex, itemCount)];
  const repeatedProducts = Array.from({ length: itemCount * 3 }, (_, virtualIndex) => ({
    product: products[virtualIndex % itemCount],
    virtualIndex,
  }));
  const trackStyle: MerchTrackStyle = {
    "--mobile-center": `${activeVirtualIndex * 266 + 150}px`,
    "--desktop-center": `${activeVirtualIndex * 424 + 300}px`,
  };

  const settleInfiniteTrack = () => {
    const currentIndex = activeVirtualIndexRef.current;
    let resetIndex = currentIndex;

    if (currentIndex < itemCount) resetIndex += itemCount;
    if (currentIndex >= itemCount * 2) resetIndex -= itemCount;

    if (resetIndex !== currentIndex) {
      setTransitionEnabled(false);
      activeVirtualIndexRef.current = resetIndex;
      setActiveVirtualIndex(resetIndex);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }

    setIsAnimating(false);
  };

  const queueTrackSettlement = () => {
    if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(settleInfiniteTrack, 700);
  };

  const move = (direction: number) => {
    if (isAnimating) return;
    const nextIndex = activeVirtualIndexRef.current + direction;
    activeVirtualIndexRef.current = nextIndex;
    setIsAnimating(true);
    setActiveVirtualIndex(nextIndex);
    queueTrackSettlement();
  };

  const moveTo = (virtualIndex: number) => {
    if (isAnimating || virtualIndex === activeVirtualIndexRef.current) return;
    activeVirtualIndexRef.current = virtualIndex;
    setIsAnimating(true);
    setActiveVirtualIndex(virtualIndex);
    queueTrackSettlement();
  };

  useEffect(() => {
    return () => {
      if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
    };
  }, []);

  return (
    <section
      id="merch"
      data-gnb-theme="dark"
      aria-labelledby="merch-title"
      className="relative z-10 flex w-full flex-col items-center gap-6 overflow-hidden bg-[#f7f7f7] px-4 py-24 text-black md:gap-[72px] md:px-6 md:py-[120px]"
    >
      <ViewportFixedBackground image={merchBackground} />

      <h2 id="merch-title" className="relative font-display text-[32px] font-normal uppercase leading-none text-[#b00020] md:text-[56px] md:leading-[0.8]">
        Merch
      </h2>

      <div
        className="relative flex w-full touch-pan-y flex-col items-center gap-4 outline-none md:gap-6"
        role="region"
        aria-roledescription="carousel"
        aria-label="Merch products"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(distance) >= 50) move(distance > 0 ? -1 : 1);
        }}
      >
        <div className="merch-track">
          <div
            className={`merch-strip ${transitionEnabled ? "" : "merch-strip--instant"}`}
            style={trackStyle}
            onTransitionEnd={(event) => {
              if (event.target === event.currentTarget && event.propertyName === "transform") {
                if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
                settleInfiniteTrack();
              }
            }}
          >
            {repeatedProducts.map(({ product, virtualIndex }) => {
              const distance = Math.abs(virtualIndex - activeVirtualIndex);
              const isActive = virtualIndex === activeVirtualIndex;
              const isNearViewport = distance <= 2;

              return (
                <a
                  key={`${Math.floor(virtualIndex / itemCount)}-${product.id}`}
                  href={product.productUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`merch-slide ${isActive ? "merch-slide--active" : ""}`}
                  onClick={(event) => {
                    if (isActive) return;
                    event.preventDefault();
                    moveTo(virtualIndex);
                  }}
                  tabIndex={isNearViewport ? 0 : -1}
                  aria-current={isActive ? "true" : undefined}
                  aria-hidden={!isNearViewport}
                  aria-label={isActive ? `View ${product.title}, ${product.price}` : `Show ${product.title}`}
                >
                  <ImageWithFallback
                    src={product.imageUrl}
                    alt={isActive ? product.title : ""}
                    className="size-full object-cover"
                    draggable={false}
                    loading={isNearViewport ? "eager" : "lazy"}
                    decoding="async"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex h-[34px] w-[300px] items-center justify-center gap-2 md:h-[72px] md:w-[600px]">
          <button
            type="button"
            className="shrink-0 transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b00020]"
            onClick={() => move(-1)}
            aria-label="Previous product"
          >
            <ArrowIcon direction="left" />
          </button>

          <p className="flex h-full min-w-0 flex-1 items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap text-center font-display text-2xl uppercase leading-none md:text-4xl" aria-live="polite">
            <span key={activeProduct.id} className="merch-title-text overflow-hidden text-ellipsis">
              {activeProduct.title}
            </span>
          </p>

          <button
            type="button"
            className="shrink-0 transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b00020]"
            onClick={() => move(1)}
            aria-label="Next product"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
