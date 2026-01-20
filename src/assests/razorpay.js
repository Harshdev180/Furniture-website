// ================================
// Razorpay Payment Integration
// Max Limit: ₹10,00,000 (10 Lakh)
// ================================

let razorpayLoaded = false;
let razorpayLoading = false;

/**
 * Dynamically load Razorpay SDK
 */
export const loadRazorpay = () => {
  return new Promise((resolve) => {
    // Already loaded
    if (razorpayLoaded && window.Razorpay) {
      resolve(true);
      return;
    }

    // Already loading → wait
    if (razorpayLoading) {
      const interval = setInterval(() => {
        if (razorpayLoaded && window.Razorpay) {
          clearInterval(interval);
          resolve(true);
        }
      }, 100);
      return;
    }

    // Check existing script
    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]',
    );

    if (existingScript) {
      existingScript.onload = () => {
        razorpayLoaded = true;
        razorpayLoading = false;
        resolve(true);
      };
      existingScript.onerror = () => {
        razorpayLoading = false;
        resolve(false);
      };
      return;
    }

    // Load SDK
    razorpayLoading = true;
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      razorpayLoaded = true;
      razorpayLoading = false;
      resolve(true);
    };

    script.onerror = () => {
      razorpayLoading = false;
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

/**
 * Open Razorpay Checkout
 */
export const openRazorpay = async ({
  total, // Amount in ₹
  orderData, // Customer + Order info
  onSuccess,
  onError,
}) => {
  try {
    const loaded = await loadRazorpay();

    if (!loaded || !window.Razorpay) {
      const msg = "Razorpay SDK failed to load. Check internet connection.";
      alert(msg);
      onError?.(new Error(msg));
      return;
    }

    // ======================
    // Amount validation
    // ======================
    const MIN_AMOUNT_PAISE = 100; // ₹1.00
    const MAX_AMOUNT_PAISE = 20000000; // ₹20,00,000 (20 Lakh)

    const originalAmountPaise = Math.round(Number(total) * 100);

    const amountPaise = Math.max(
      MIN_AMOUNT_PAISE,
      Math.min(originalAmountPaise, MAX_AMOUNT_PAISE),
    );

    if (amountPaise <= 0) {
      const msg = "Invalid payment amount";
      alert(msg);
      onError?.(new Error(msg));
      return;
    }

    const orderId = orderData?.orderId || `ORD-${Date.now()}`;

    // Optional warning for high amount
    if (amountPaise > 50000000) {
      console.warn("High amount detected. Net Banking recommended.");
    }

    // ======================
    // Razorpay Options
    // ======================
    const options = {
      key: "rzp_test_vv1FCZvuDRF6lQ", // 🔴 Replace with LIVE key in production
      amount: amountPaise,
      currency: "INR",
      name: "Graphura Furniture",
      description: `Order Payment - ${orderId}`,
      image: "/images/favicon.jpeg",
      order_id: null, // Client-side flow

      handler: function (response) {
        console.log("Payment Success:", response);
        onSuccess?.({
          ...response,
          orderId,
          orderData,
          amount: amountPaise,
        });
      },

      prefill: {
        name: orderData?.customerName || "",
        email: orderData?.customerEmail || "",
        contact: orderData?.customerPhone || "",
      },

      notes: {
        order_id: orderId,
        customer_name: orderData?.customerName || "",
        original_amount_paise: originalAmountPaise,
      },

      theme: {
        color: "#C9A24D",
      },

      modal: {
        ondismiss: function () {
          const msg = "Payment cancelled by user";
          console.log(msg);
          onError?.(new Error(msg));
        },
      },
    };

    // ======================
    // Open Checkout
    // ======================
    const razorpay = new window.Razorpay(options);

    razorpay.on("payment.failed", function (response) {
      console.error("Payment Failed:", response.error);
      const msg = response.error?.description || "Payment failed. Try again.";
      alert(msg);
      onError?.(new Error(msg));
    });

    razorpay.open();
  } catch (err) {
    console.error("Razorpay Error:", err);
    const msg = err.message || "Something went wrong during payment";
    alert(msg);
    onError?.(err);
  }
};
