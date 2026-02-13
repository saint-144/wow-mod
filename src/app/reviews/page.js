import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay for readability */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-[1px] -z-10" />

      {/* 🌟 Page Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14 tracking-tight">
          What Our Clients Say
        </h1>

        {reviews?.length === 0 && (
          <p className="text-center text-gray-300">
            No reviews yet.
          </p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews?.map((review) => (
            <div
              key={review.id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl transition hover:scale-[1.02] duration-300"
            >
              {/* ⭐ Stars (optional if you later add rating column) */}
              {review.rating && (
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < review.rating ? "⭐" : "☆"}
                    </span>
                  ))}
                </div>
              )}

              {/* 💬 Review Content */}
              <p className="text-sm leading-relaxed text-gray-100 mb-6">
                {review.content}
              </p>

              {/* 👤 Author Section */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center font-semibold">
                  {review.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="font-medium">{review.name}</p>
                  <p className="text-xs text-gray-300">
                    Verified Client
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
