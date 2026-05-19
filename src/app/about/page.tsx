export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-green-600 mb-8">אודות ליאת</h1>

      {/* Placeholder image */}
      <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center mb-10">
        <span className="text-gray-400 text-sm">תמונה של ליאת</span>
      </div>

      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <p>
          שלום! אני ליאת, מומחית לתזונה בריאה ומנחת סדנאות לילדים ולמשפחות.
          הדרך שלי לתזונה נכונה התחילה מתוך אהבה לאוכל ומאמונה שאפשר לאכול טעים ובריא בו זמנית.
        </p>
        <p>
          אני מאמינה שהדרך הטובה ביותר ללמד ילדים לאכול בריא היא לעשות אותם שותפים — לגעת, להריח, לבשל ולהתנסות.
          כשילד מכין בעצמו, הוא גם אוכל בשמחה.
        </p>
        <p>
          הסדנאות שלי מיועדות לילדים, למשפחות ולמבוגרים שרוצים לשנות את הגישה שלהם לתזונה ולחיות חיים בריאים יותר.
        </p>
        <p className="font-semibold text-green-700">כי לחשוב בריא — זה המפתח לחיות בריא.</p>
      </div>
    </div>
  );
}
