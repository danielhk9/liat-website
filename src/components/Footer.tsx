export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© 2026 לחשוב בריא. כל הזכויות שמורות.</p>
        <div className="flex gap-3">
          <a
            href="https://wa.me/972000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="game-btn-sm-green"
          >
            WhatsApp
          </a>
          <a
            href="mailto:placeholder@email.com"
            className="game-btn-sm-white"
          >
            שלחי מייל
          </a>
        </div>
      </div>
    </footer>
  );
}
