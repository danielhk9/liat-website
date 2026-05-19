import { BroccoliChar } from "@/components/FoodCharacters";

export const metadata = {
  title: "לחשוב בריא | בקרוב",
};

export default function Maintenance() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{
        background: "repeating-conic-gradient(#fff8ec 0% 25%, #fde8b4 0% 50%) 0 0 / 72px 72px",
      }}
    >
      <div
        className="bg-white/80 backdrop-blur rounded-3xl px-8 py-12 max-w-md w-full"
        style={{
          border: "3px solid #1a1a1a",
          boxShadow: "0 6px 0 rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex justify-center mb-6" style={{ animation: "floatChar 4s ease-in-out infinite" }}>
          <BroccoliChar size={100} />
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          לחשוב <span className="text-green-600">בריא</span>
        </h1>

        <p className="text-lg font-bold text-gray-700 mb-2">האתר עובר שיפוץ קטן 🛠️</p>
        <p className="text-gray-500 mb-8">חוזרים בקרוב עם משהו מגניב!</p>

        <a
          href="https://wa.me/972000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="game-btn-sm-green"
        >
          💬 צרו קשר ב-WhatsApp
        </a>
      </div>
    </div>
  );
}
