export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="flex justify-center space-x-6">
          <a href="/" className="hover:text-red-500">Home</a>
          <a href="/about" className="hover:text-red-500">About Us</a>
          <a href="/services" className="hover:text-red-500">Products</a>
          <a href="/contact" className="hover:text-red-500">Contact Us</a>
        </div>
        <p className="text-gray-400 mt-6">&copy; 2025 WOW Modular. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
