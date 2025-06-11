// import { toast } from "react-toastify"; // TODO: Implement toast notifications
import useProducts from "../../Hooks/useProducts";
import useCart from "../../Hooks/useCart";

export default function Products() {
  const { products, isLoading, isError } = useProducts(); // Removed unused TopProducts

  const { handleAddToCart } = useCart();

  // console.log(products ? products[0] : "No products found");

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-400 text-sm">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-sm">
          ☆
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-sm">
          ★
        </span>
      );
    }

    return stars;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Error</h2>
            <p className="text-gray-600 mb-6">{"Something went wrong"}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Products
        </h1>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">Try refreshing the page</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product: any) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-200 group">
                  <img
                    src={product.imageCover}
                    alt={product.title.split(" ").splice(0, 2).join(" ")}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.category && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        {product.category.name}
                      </span>
                    )}
                    {product.priceAfterDiscount && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        SALE
                      </span>
                    )}
                  </div>

                  {/* Sold Count Badge */}
                  {product.sold > 0 && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                        {product.sold.toLocaleString()} sold
                      </span>
                    </div>
                  )}

                  {/* Stock Status */}
                  {product.quantity < 10 && product.quantity > 0 && (
                    <div className="absolute bottom-2 right-2">
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Only {product.quantity} left
                      </span>
                    </div>
                  )}
                  {product.quantity === 0 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-4 py-2 rounded font-semibold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Brand */}
                  {product.brand && (
                    <div className="mb-2">
                      <span className="text-xs text-gray-500 font-medium uppercase">
                        {product.brand.name}
                      </span>
                    </div>
                  )}

                  <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">
                    {product.title.split(" ").splice(0, 3).join(" ")}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description.length > 60
                      ? product.description.substring(0, 40) + "..."
                      : product.description}
                  </p>

                  {/* Rating with quantity */}
                  {product.ratingsAverage && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {renderStars(product.ratingsAverage)}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.ratingsAverage.toFixed(1)})
                      </span>
                      {product.ratingsQuantity && (
                        <span className="text-xs text-gray-400">
                          · {product.ratingsQuantity} reviews
                        </span>
                      )}
                    </div>
                  )}

                  {/* Price Section */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      {product.priceAfterDiscount ? (
                        <>
                          <span className="text-xl font-bold text-red-600">
                            ${product.priceAfterDiscount}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ${product.price}
                          </span>
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                            {Math.round(
                              ((product.price - product.priceAfterDiscount) /
                                product.price) *
                                100
                            )}
                            % OFF
                          </span>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-green-600">
                          ${product.price}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product._id)}
                    disabled={product.quantity === 0}
                    className={`w-full py-2 px-4 rounded transition-colors text-sm font-medium ${
                      product.quantity === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    {product.quantity === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
