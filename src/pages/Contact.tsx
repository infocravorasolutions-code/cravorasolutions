import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Calendar, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { mailService } from '../services/mailService';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    project: '',
    budget: '',
    timeline: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name || !formData.project) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Assuming mailService can handle a more complex object if needed, 
      // or we just send the email for now. Here we pass the email to match existing usage.
      await mailService.sendInquiry(formData.email);
      setStatus('success');
      setFormData({ name: '', company: '', email: '', project: '', budget: '', timeline: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <>
      <SEO 
        title="Contact Cravora Solutions — Free Discovery Call" 
        description="Talk to our team about your software project. We reply within 4 hours. Free 60-minute discovery call, no commitment required." 
      />
      
      <div className="w-full pt-20 pb-20 bg-[#fafafa]">
        
        {/* HERO */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8" style={{ color: '#111' }}>
              Let's talk about your{' '}
              <span style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                project.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-6">
              No forms that disappear into a void. No waiting a week for a reply.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Tell us what you're building and we'll come back to you within 4 hours — with honest thoughts, not a sales pitch.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* LEFT COLUMN: Contact Options & Trust Signals */}
              <div>
                <h2 className="text-2xl font-bold mb-8" style={{ color: '#111' }}>
                  Contact Options
                </h2>
                
                <div className="space-y-6 mb-12">
                  <a href="https://calendly.com/info-cravorasolutions/30min" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 transition-all hover:shadow-md group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f5f0fd]">
                      <Calendar className="w-6 h-6 text-[#853ae8]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#853ae8] transition-colors">Book a discovery call</div>
                      <div className="text-sm text-gray-500">Pick a time that works for you</div>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/918200347067" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 transition-all hover:shadow-md group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f5f0fd]">
                      <Phone className="w-6 h-6 text-[#853ae8]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#853ae8] transition-colors">Chat on WhatsApp</div>
                      <div className="text-sm text-gray-500">Fastest way to reach us for quick questions</div>
                    </div>
                  </a>
                  
                  <a href="mailto:info@cravorasolutions.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 transition-all hover:shadow-md group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f5f0fd]">
                      <Mail className="w-6 h-6 text-[#853ae8]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#853ae8] transition-colors">Email us</div>
                      <div className="text-sm text-gray-500">info@cravorasolutions.com</div>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/company/109135330/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 transition-all hover:shadow-md group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f5f0fd]">
                      <Linkedin className="w-6 h-6 text-[#853ae8]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#853ae8] transition-colors">LinkedIn</div>
                      <div className="text-sm text-gray-500">linkedin.com/company/cravora-solutions</div>
                    </div>
                  </a>
                </div>

                <div className="bg-[#f5f0fd] p-8 rounded-3xl border border-[#e4d4f8]">
                  <h3 className="text-lg font-bold mb-4" style={{ color: '#111' }}>
                    Why work with us?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#853ae8] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">We reply within 4 hours on business days</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#853ae8] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">NDA signed before any detailed discussion</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#853ae8] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Free 60-minute discovery call, no commitment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#853ae8] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Trusted by clients in 12+ countries</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Form */}
              <div>
                <div className="bg-white p-8 sm:p-10 rounded-3xl" style={{ border: '1.5px solid #f0e8fc', boxShadow: '0 4px 30px rgba(0,0,0,0.04)' }}>
                  <h2 className="text-2xl font-bold mb-8" style={{ color: '#111' }}>
                    Tell us about your project
                  </h2>

                  {status === 'success' ? (
                    <div className="p-8 rounded-2xl flex flex-col items-center gap-4 text-center bg-[#f0fdf4] border border-[#bbf7d0]">
                      <CheckCircle2 className="w-16 h-16 text-green-500" />
                      <h3 className="text-2xl font-bold text-green-800">Message Received!</h3>
                      <p className="text-green-700">
                        Thanks for reaching out. A real person from our team will review your project and reply within 4 hours to schedule your free discovery call.
                      </p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="mt-4 px-6 py-2 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Your Name *</label>
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#853ae8]/50 focus:border-[#853ae8] transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#853ae8]/50 focus:border-[#853ae8] transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Company / Project Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#853ae8]/50 focus:border-[#853ae8] transition-all"
                          placeholder="Acme Inc."
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">What are you building? *</label>
                        <textarea
                          required
                          name="project"
                          value={formData.project}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#853ae8]/50 focus:border-[#853ae8] transition-all resize-none"
                          placeholder="Tell us a bit about your idea, problem, or requirements..."
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Rough budget range</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#853ae8]/50 focus:border-[#853ae8] transition-all appearance-none"
                          >
                            <option value="">Select a range</option>
                            <option value="Under $10K">Under $10K</option>
                            <option value="$10K–$30K">$10K–$30K</option>
                            <option value="$30K–$80K">$30K–$80K</option>
                            <option value="$80K+">$80K+</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">How soon do you want to start?</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#853ae8]/50 focus:border-[#853ae8] transition-all appearance-none"
                          >
                            <option value="">Select a timeline</option>
                            <option value="Immediately">Immediately</option>
                            <option value="In 1-2 months">In 1-2 months</option>
                            <option value="Just exploring">Just exploring</option>
                          </select>
                        </div>
                      </div>

                      {status === 'error' && (
                        <div className="p-3 rounded-xl bg-red-50 text-red-600 flex items-center gap-2 text-sm">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                        style={{
                          background: 'linear-gradient(135deg, #853ae8, #722dcc)',
                          boxShadow: '0 4px 20px rgba(133,58,232,0.3)',
                        }}
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section specifically for Contact */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#111' }}>
                Common questions about reaching out
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #e5e7eb' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#111' }}>What happens after I submit the form?</h3>
                <p className="text-gray-600 leading-relaxed">
                  You'll get an email confirmation immediately. A real person from our team will reply within 4 hours to schedule your free discovery call.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #e5e7eb' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#111' }}>Is the discovery call really free?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes. No credit card, no commitment. It's a conversation to understand your project. We'll tell you honestly whether we're the right fit.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
