const root = document.getElementById('root');


async function fetchProducts() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    if (response.ok) {
        const data = await response.json();
        data.forEach(product => {
            root.innerHTML += `
                <div class="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform">
            <div class="h-64 bg-gray-50 flex items-center justify-center p-6">
                <img class="h-full object-contain" src="${product.image}" alt="Product Image">
            </div>

            <div class="p-5">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-600 rounded-full uppercase">
                        ${product.category}
                    </span>
                    <div class="flex items-center text-yellow-400 text-sm">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    <span class="text-gray-600 ml-1">${product.rating.rate} (${product.rating.count})</span>
                    </div>
                </div>

                <h2 class="text-lg font-bold text-gray-800 truncate mb-2">
                    ${product.title}
                </h2>

                <p class="text-gray-500 text-sm line-clamp-2 mb-4">
                    ${product.description}
                </p>

                <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-gray-900">$${product.price}</span>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                      ទិញឥឡូវនេះ
                    </button>
                </div>
            </div>
        </div>
            `
        });
    } else {
        console.log("fail to fetch data");
    }
}

fetchProducts();