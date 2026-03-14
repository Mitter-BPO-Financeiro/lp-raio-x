// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(
          () => e.target.classList.add("visible"),
          60 *
            (Array.from(document.querySelectorAll(".reveal")).indexOf(
              e.target,
            ) %
              4),
        );
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains("open");
  document.querySelectorAll(".faq__item").forEach((i) => {
    i.classList.remove("open");
    i.querySelector(".faq__a").style.maxHeight = "0";
  });
  if (!isOpen) {
    item.classList.add("open");
    item.querySelector(".faq__a").style.maxHeight = "400px";
  }
}

// WhatsApp redirect
function enviarWhatsApp() {
  const nome = document.getElementById("nome").value.trim();
  const whats = document.getElementById("whatsapp").value.trim();
  const empresa = document.getElementById("empresa").value.trim();
  const fat = document.getElementById("faturamento").value.trim();

  if (!nome || !whats) {
    alert("Por favor, preencha seu nome e WhatsApp para continuar.");
    return;
  }

  const numero = "551132805164";
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no Raio-X Financeiro Empresarial.\n\n` +
      `Nome: ${nome}\n` +
      `Empresa: ${empresa || "Não informado"}\n` +
      `Faturamento: ${fat || "Não informado"}\n\n` +
      `Gostaria de saber mais sobre o diagnóstico.`,
  );
  window.open(`https://wa.me/${numero}?text=${msg}`, "_blank");
}

// Phone mask
document.getElementById("whatsapp").addEventListener("input", function (e) {
  let v = e.target.value.replace(/\D/g, "");
  if (v.length <= 11) {
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
  }
  e.target.value = v;
});
