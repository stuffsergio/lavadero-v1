"use client";

export default function UpNavBar() {
  return (
    <div className="w-full h-[5dvh] py-2 bg-blue-500/80 text-white overflow-hidden relative">
      <div className="absolute whitespace-nowrap animate-marquee flex">
        <p className="mx-8">🌍 WORLDWIDE SHIPPING</p>
        <p className="mx-8">✨ EVERYDAY URBAN AESTHETICS</p>
        <p className="mx-8">🚀 FAST DELIVERY</p>
      </div>
      <div className="absolute whitespace-nowrap animate-marquee2 flex">
        <p className="mx-8">🌍 WORLDWIDE SHIPPING</p>
        <p className="mx-8">✨ EVERYDAY URBAN AESTHETICS</p>
        <p className="mx-8">🚀 FAST DELIVERY</p>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: scroll-left 20s linear infinite;
        }
        .animate-marquee2 {
          animation: scroll-left 20s linear infinite;
          animation-delay: 10s;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
