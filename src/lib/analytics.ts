type OrderClick = { provider: string; mode?: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function push(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}

export const analytics = {
  orderClick: (p: OrderClick) => push({ event: "order_click", ...p }),
  reservationClick: () => push({ event: "reservation_click" }),
  functionEnquirySubmit: () => push({ event: "function_enquiry_submit" }),
  contactSubmit: () => push({ event: "contact_submit" }),
  phoneClick: () => push({ event: "phone_click" }),
  emailClick: () => push({ event: "email_click" }),
};
