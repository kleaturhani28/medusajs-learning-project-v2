export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">All Products</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} {process.env.NEXT_PUBLIC_STORE_NAME || "Store"}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
