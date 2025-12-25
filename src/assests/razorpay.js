export const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const openRazorpay = async ({ total }) => {
  const isLoaded = await loadRazorpay();

  if (!isLoaded) {
    alert("Razorpay failed to load");
    return;
  }

  const options = {
    key: "rzp_test_vv1FCZvuDRF6lQ",
    amount: Math.round(total * 100), // ₹ to paise
    currency: "INR",
    name: "Graphura",
    description: "Order Payment",
    handler: function (response) {
      console.log("Payment Success:", response);
      // send response to backend later
    },
    theme: {
      color: "#EA580C",
    },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};
