export function trackEnquiry(action, details = {}) {
  if (typeof window === "undefined") return;
  const payload = { event_category: "enquiry", event_label: details.service || "general", customer_type: details.customerType || undefined, service: details.service || undefined, method: action };
  window.dispatchEvent(new CustomEvent("akhtar_enquiry", { detail: payload }));
  if (typeof window.gtag === "function") window.gtag("event", action, payload);
  if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: action, ...payload });
}
