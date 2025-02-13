import { useEffect } from "react";

function ShopifyBuyButton() {
  useEffect(() => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function loadScript() {
      if (document.getElementById("shopify-buy-button-script")) return; // ✅ Prevent multiple script loads

      const script = document.createElement("script");
      script.id = "shopify-buy-button-script"; // ✅ Unique ID to prevent duplicate scripts
      script.async = true;
      script.src = scriptURL;
      document.body.appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      if (!window.ShopifyBuy) return;
      if (!window.ShopifyBuy.UI) return loadScript();

      const client = window.ShopifyBuy.buildClient({
        domain: "mrr4nw-jt.myshopify.com",
        storefrontAccessToken: "29d3629835f5ca017faf9d66a635127c",
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        const container = document.getElementById("product-component");

        if (container) {
          container.innerHTML = ""; // ✅ Remove previous buttons before adding a new one
        }

        ui.createComponent("product", {
          id: "7892059619402",
          node: container,
          moneyFormat: "Rs.%20%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                  },
                },
              },
              contents: {
                img: false,
                title: false,
                price: false,
              },
              text: {
                button: "Pre-Order",
              },
            },
            cart: {
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
            },
          },
        });
      });
    }

    loadScript();
  }, []);

  return <div id="product-component"></div>;
}

export default ShopifyBuyButton;
