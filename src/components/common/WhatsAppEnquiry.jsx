import { useState } from "react";
import { MessageCircle, Send, ShieldCheck } from "lucide-react";
import { company } from "../../data/company";
import { services } from "../../data/services";
import { trackEnquiry } from "../../utils/trackEnquiry";

function WhatsAppEnquiry({ defaultService = "", compact = false }) {
  const [values, setValues] = useState({ name: "", phone: "", customerType: "Individual", service: defaultService, tyreType: "", quantity: "", vehicleDetails: "", location: "", message: "" });
  const [error, setError] = useState("");
  const update = (event) => { setValues((old) => ({ ...old, [event.target.name]: event.target.value })); setError(""); };
  const submit = (event) => {
    event.preventDefault();
    if (!values.name.trim() || !values.phone.trim() || !values.service) { setError("Please enter your name, phone number and select a service."); return; }
    const serviceLabel = services.find((item) => item.id === values.service)?.title || values.service;
    const lines = [
      "Hello Akhtar Tyre Retreading Works, I would like to enquire.", "",
      `Name: ${values.name.trim()}`, `Phone: ${values.phone.trim()}`,
      `Customer type: ${values.customerType}`, `Service: ${serviceLabel}`,
      values.tyreType.trim() && `Tyre type/size: ${values.tyreType.trim()}`,
      values.quantity.trim() && `Quantity: ${values.quantity.trim()}`,
      values.vehicleDetails.trim() && `Vehicle/fleet details: ${values.vehicleDetails.trim()}`,
      values.location.trim() && `Location: ${values.location.trim()}`,
      values.message.trim() && `Additional details: ${values.message.trim()}`
    ].filter(Boolean);
    const url = `https://wa.me/918830938317?text=${encodeURIComponent(lines.join("\n"))}`;
    trackEnquiry("whatsapp_enquiry_open", { service: serviceLabel, customerType: values.customerType });
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return <form className={`enquiry-form ${compact ? "enquiry-form-compact" : ""}`} onSubmit={submit}>
    <div className="enquiry-form-heading"><span className="section-eyebrow">WHATSAPP ENQUIRY</span><h2>{compact ? "Tell us what you need" : "Tell us about your tyre requirement"}</h2><p>Fill in the details. WhatsApp will open with a message you can review and send.</p></div>
    <div className="enquiry-form-grid">
      <label>Your name <span aria-hidden="true">*</span><input name="name" value={values.name} onChange={update} autoComplete="name" required maxLength={100} /></label>
      <label>Phone number <span aria-hidden="true">*</span><input name="phone" type="tel" value={values.phone} onChange={update} autoComplete="tel" required maxLength={30} /></label>
      <label>Customer type<select name="customerType" value={values.customerType} onChange={update}><option>Individual</option><option>Business</option><option>Fleet operator</option><option>Dealer / workshop</option></select></label>
      <label>Service required <span aria-hidden="true">*</span><select name="service" value={values.service} onChange={update} required><option value="">Select a service</option>{services.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}</select></label>
      <label>Tyre type or size<input name="tyreType" value={values.tyreType} onChange={update} placeholder="e.g. truck tyre, size if known" maxLength={120} /></label>
      <label>Quantity<input name="quantity" value={values.quantity} onChange={update} placeholder="Number of tyres, if known" maxLength={60} /></label>
      <label>Vehicle or fleet details<input name="vehicleDetails" value={values.vehicleDetails} onChange={update} placeholder="Vehicle type or fleet size" maxLength={160} /></label>
      <label>Your location<input name="location" value={values.location} onChange={update} placeholder="Town / area" maxLength={120} /></label>
      <label className="enquiry-form-full">Additional requirements<textarea name="message" value={values.message} onChange={update} rows={4} placeholder="Describe the tyre condition or what you need help with." maxLength={1000} /></label>
    </div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button button-primary enquiry-submit" type="submit"><MessageCircle size={18} /> Prepare WhatsApp message <Send size={16} /></button>
    <p className="enquiry-privacy"><ShieldCheck size={16} /> Your details are placed in a message for you to review. This website does not send it automatically.</p>
  </form>;
}
export default WhatsAppEnquiry;
