// Razorpay Payment Integration
let razorpayLoaded = false;
let razorpayLoading = false;

export const loadRazorpay = () => {
  return new Promise((resolve) => {
    // If already loaded, resolve immediately
    if (razorpayLoaded && window.Razorpay) {
      resolve(true);
      return;
    }

    // If already loading, wait for it
    if (razorpayLoading) {
      const checkInterval = setInterval(() => {
        if (razorpayLoaded && window.Razorpay) {
          clearInterval(checkInterval);
          resolve(true);
        }
      }, 100);
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existingScript) {
      if (window.Razorpay) {
        razorpayLoaded = true;
        resolve(true);
        return;
      }
      // Wait for existing script to load
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

    // Load the script
    razorpayLoading = true;
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
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

export const openRazorpay = async ({ total, orderData, onSuccess, onError }) => {
  try {
    const isLoaded = await loadRazorpay();

    if (!isLoaded) {
      const errorMsg = "Razorpay failed to load. Please check your internet connection and try again.";
      alert(errorMsg);
      if (onError) onError(new Error(errorMsg));
      return;
    }

    if (!window.Razorpay) {
      const errorMsg = "Razorpay SDK not available";
      alert(errorMsg);
      if (onError) onError(new Error(errorMsg));
      return;
    }

    const orderId = orderData?.orderId || `ORD-${Date.now()}`;

    const options = {
      key: "rzp_test_vv1FCZvuDRF6lQ", // Replace with your actual Razorpay key
      amount: Math.round(total * 100), // Convert ₹ to paise
      currency: "INR",
      name: "Graphura Furniture",
      description: `Order Payment - ${orderId}`,
      image: "./images/logo White.png", // Optional: Add your logo
      order_id: null, // Remove order_id for client-side integration
      handler: function (response) {
        console.log("Payment Success:", response);
        if (onSuccess) {
          onSuccess({
            ...response,
            orderId,
            orderData,
          });
        }
      },
      prefill: {
        name: orderData?.customerName || "",
        email: orderData?.customerEmail || "",
        contact: orderData?.customerPhone || "",
      },
      notes: {
        order_id: orderId,
        customer_name: orderData?.customerName || "",
      },
      theme: {
        color: "#C9A24D",
      },
      modal: {
        ondismiss: function () {
          console.log("Payment modal closed");
          if (onError) {
            onError(new Error("Payment cancelled by user"));
          }
        },
      },
    };

    // Validate amount
    if (options.amount <= 0) {
      const errorMsg = "Invalid payment amount";
      alert(errorMsg);
      if (onError) onError(new Error(errorMsg));
      return;
    }

    const razorpay = new window.Razorpay(options);

    // Add error handler
    razorpay.on("payment.failed", function (response) {
      console.error("Payment Failed:", response.error);
      const errorMsg = `Payment failed: ${response.error.description || "Unknown error"}`;
      alert(errorMsg);
      if (onError) {
        onError(new Error(response.error.description || "Payment failed"));
      }
    });

    // Open the payment modal
    razorpay.open();
  } catch (error) {
    console.error("Razorpay Error:", error);
    const errorMsg = error.message || "An error occurred while processing payment";
    alert(errorMsg);
    if (onError) {
      onError(error);
    }
  }
};
