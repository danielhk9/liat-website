export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-extrabold text-green-600 mb-4">צרו קשר</h1>
      <p className="text-gray-600 text-lg mb-12">
        יש לכם שאלות? רוצים לשמוע עוד על הסדנאות? אשמח לשמוע מכם!
      </p>

      <div className="flex flex-col gap-5">
        <a
          href="https://wa.me/972000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="game-btn-primary flex items-center justify-center gap-3"
        >
          <span>💬</span>
          שלחו הודעה ב-WhatsApp
        </a>

        <a
          href="mailto:placeholder@email.com"
          className="game-btn-secondary flex items-center justify-center gap-3"
        >
          <span>✉️</span>
          שלחו מייל
        </a>
      </div>

      <p className="text-gray-400 text-sm mt-12">
        בדרך כלל עונים תוך 24 שעות
      </p>
    </div>
  );
}
