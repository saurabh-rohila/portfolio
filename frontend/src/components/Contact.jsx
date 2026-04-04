import React, { useState } from 'react';
import { MessageCircle, Instagram, MapPin, Clock, Send, Loader2, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: '',
    event_date: '',
    servings: '',
    flavour: '',
    design: '',
    delivery_area: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error('Please fill in your name and phone number.');
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post(`${API_URL}/api/enquiry`, formData);
      toast.success('Enquiry submitted! We\'ll get back to you shortly.');
      setIsSubmitted(true);
      setFormData({
        name: '', phone: '', occasion: '', event_date: '',
        servings: '', flavour: '', design: '', delivery_area: '', message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      toast.error('Something went wrong. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E1CAFF] focus:border-transparent transition-all';

  return (
    <section id="contact" data-testid="contact-section" className="py-5 md:py-7 bg-gradient-to-br from-[#2B243F] to-[#7662B2] text-white">
      <div className="container-custom px-3 md:px-6">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Order Custom Cakes & Desserts
          </h2>
          <p className="text-sm text-white/90 max-w-2xl mx-auto">
            Fill in your details below or reach out directly - we'll make it perfect!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {/* Left - Quick Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
              <h3 className="text-base font-bold mb-3">Get in Touch</h3>
              <div className="space-y-2">
                <a
                  href="https://wa.me/919266987600?text=Hi!%20I%27d%20like%20to%20place%20an%20order%20from%20Gooey%20Mooey%20%F0%9F%8E%82"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp-link"
                  className="flex items-center space-x-2.5 p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-[#25D366] p-2 rounded-full group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Chat on WhatsApp</p>
                    <p className="text-xs text-white/70">+91 92669 87600</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/gooeymooey.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-instagram-link"
                  className="flex items-center space-x-2.5 p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-[#FF859F] to-[#FFB8CB] p-2 rounded-full group-hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Follow on Instagram</p>
                    <p className="text-xs text-white/70">@gooeymooey.in</p>
                  </div>
                </a>
                <div className="flex items-center space-x-2.5 p-2.5 bg-white/10 rounded-lg">
                  <div className="bg-[#FF859F] p-2 rounded-full">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Location</p>
                    <p className="text-xs text-white/70">Serving from Gurugram</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2.5 p-2.5 bg-white/10 rounded-lg">
                  <div className="bg-[#C0C2FD] p-2 rounded-full">
                    <Clock className="w-4 h-4 text-[#2B243F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Response Time</p>
                    <p className="text-xs text-white/70">Average reply under 5 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Enquiry Form (3 cols) */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              data-testid="enquiry-form"
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 space-y-3"
            >
              <h3 className="text-base font-bold mb-1">Quick Enquiry</h3>

              {/* Name + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  data-testid="enquiry-name-input"
                  className={inputClass}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  data-testid="enquiry-phone-input"
                  className={inputClass}
                  required
                />
              </div>

              {/* Occasion + Date row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  name="occasion"
                  placeholder="Occasion (e.g. Birthday)"
                  value={formData.occasion}
                  onChange={handleChange}
                  data-testid="enquiry-occasion-input"
                  className={inputClass}
                />
                <input
                  type="date"
                  name="event_date"
                  placeholder="Event Date"
                  value={formData.event_date}
                  onChange={handleChange}
                  data-testid="enquiry-date-input"
                  className={inputClass}
                />
              </div>

              {/* Servings + Flavour row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  name="servings"
                  placeholder="Servings (e.g. 10-15)"
                  value={formData.servings}
                  onChange={handleChange}
                  data-testid="enquiry-servings-input"
                  className={inputClass}
                />
                <input
                  type="text"
                  name="flavour"
                  placeholder="Preferred Flavour"
                  value={formData.flavour}
                  onChange={handleChange}
                  data-testid="enquiry-flavour-input"
                  className={inputClass}
                />
              </div>

              {/* Design + Delivery row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  name="design"
                  placeholder="Design / Theme"
                  value={formData.design}
                  onChange={handleChange}
                  data-testid="enquiry-design-input"
                  className={inputClass}
                />
                <input
                  type="text"
                  name="delivery_area"
                  placeholder="Delivery Area"
                  value={formData.delivery_area}
                  onChange={handleChange}
                  data-testid="enquiry-delivery-input"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Any additional details..."
                value={formData.message}
                onChange={handleChange}
                rows={2}
                data-testid="enquiry-message-input"
                className={inputClass + ' resize-none'}
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                data-testid="enquiry-submit-button"
                className="w-full bg-[#FF859F] hover:bg-[#e6768d] text-white py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Submitted!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-white/60">
                Or message us directly on{' '}
                <a
                  href="https://wa.me/919266987600?text=Hi!%20I%27d%20like%20to%20place%20an%20order%20from%20Gooey%20Mooey%20%F0%9F%8E%82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#25D366] hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
