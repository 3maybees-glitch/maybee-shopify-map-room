document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const id = Number(btn.dataset.add);
      try {
        await fetch("/cart/add.js", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, quantity: 1 }),
        });
        const cart = await fetch("/cart.js").then((r) => r.json());
        const badge = document.querySelector(".cart-count");
        if (badge) {
          badge.textContent = cart.item_count;
          badge.classList.add("show");
        }
        btn.textContent = "Added";
        setTimeout(() => { btn.textContent = "Add"; }, 1200);
      } catch (err) {
        window.location.href = `/cart/${id}:1`;
      }
    });
  });
});
