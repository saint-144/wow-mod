import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function Dashboard() {
  const isAdmin = cookies().get("admin");

  if (!isAdmin) {
    redirect("/admin/login");
  }

  const { data: reviews } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false });

  async function addReview(formData) {
    "use server";
    const name = formData.get("name");
    const content = formData.get("content");
    await supabase.from("reviews").insert([{ name, content }]);
    redirect("/dashboard");
  }

  async function deleteReview(formData) {
    "use server";
    const id = formData.get("id");
    await supabase.from("reviews").delete().eq("id", id);
    redirect("/dashboard");
  }

  async function editReview(formData) {
    "use server";
    const id = formData.get("id");
    const content = formData.get("content");
    await supabase.from("reviews").update({ content }).eq("id", id);
    redirect("/dashboard");
  }

  async function logout() {
    "use server";
    cookies().delete("admin");
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 p-6 md:p-12">
      
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <h1 className="text-4xl font-bold text-red-600 tracking-tight">
            Admin Dashboard
          </h1>

          <form action={logout}>
            <button className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-xl shadow-md">
              Logout
            </button>
          </form>
        </div>

        {/* Add Review Card */}
        <div className="bg-white/70 backdrop-blur-md border border-red-100 shadow-xl rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-red-600 mb-6">
            Add Review
          </h2>

          <form action={addReview} className="space-y-4">
            <input
              name="name"
              placeholder="Reviewer name"
              className="w-full border border-red-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 outline-none rounded-lg p-3 transition text-black placeholder-gray-500 bg-white"
              required
            />

            <textarea
              name="content"
              placeholder="Review content"
              className="w-full border border-red-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 outline-none rounded-lg p-3 transition text-black placeholder-gray-500 bg-white"

              rows={4}
              required
            />

            <button className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-2 rounded-xl shadow-md">
              Add Review
            </button>
          </form>
        </div>

        {/* Manage Reviews */}
        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-6">
            All Reviews
          </h2>

          <div className="space-y-6">
            {reviews?.map((review) => (
              <div
                key={review.id}
                className="bg-white/70 backdrop-blur-md border border-red-100 shadow-lg rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg mb-4 text-gray-800">
                  {review.name}
                </h3>

                <form action={editReview} className="space-y-3">
                  <input type="hidden" name="id" value={review.id} />

                  <textarea
                    name="content"
                    defaultValue={review.content}
                    className="w-full border border-red-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 outline-none rounded-lg p-3 transition text-black placeholder-gray-500 bg-white"
                    rows={3}
                  />

                  <div className="flex gap-3 flex-wrap">
                    <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg shadow">
                      Update
                    </button>
                  </div>
                </form>

                <form action={deleteReview} className="mt-4">
                  <input type="hidden" name="id" value={review.id} />
                  <button className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg shadow">
                    Delete
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
