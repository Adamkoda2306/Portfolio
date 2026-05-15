import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
 

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECIPIENT_EMAIL     = import.meta.env.VITE_EMAILJS_RECIPENT_EMAIL_ID;
 
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
 
  const validateForm = () => {
    const newErrors = {};
 
    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }
 
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
 
    if (!formData?.subject?.trim()) {
      newErrors.subject = 'Subject is required';
    }
 
    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }
 
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };
 
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
 
  const handleSubmit = async (e) => {
    e?.preventDefault();
    setSubmitError('');
 
    if (!validateForm()) return;
 
    setIsSubmitting(true);
 
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          subject:      formData.subject,
          message:      formData.message,
          to_email:     RECIPIENT_EMAIL,        // used if your template has {{to_email}}
          reply_to:     formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );
 
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
 
      setTimeout(() => setSubmitSuccess(false), 5000);
 
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError(
        'Failed to send the message. Please try again or contact me directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };
 
  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitError('');
  };
 
  return (
    <div className="bg-card rounded-lg border border-border p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
          <Icon name="Send" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground font-mono-heading">
            Send Message
          </h2>
          <p className="text-sm text-muted-foreground font-mono-code">
            Fill out the form below to get in touch
          </p>
        </div>
      </div>
 
      {/* Success banner */}
      {submitSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-start gap-3">
          <Icon name="CheckCircle" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-success font-medium font-mono-cta">Message sent successfully!</p>
            <p className="text-sm text-success/80 mt-1">
              I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}
 
      {/* Error banner */}
      {submitError && (
        <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg flex items-start gap-3">
          <Icon name="AlertCircle" size={20} color="var(--color-error)" className="flex-shrink-0 mt-0.5" />
          <p className="text-error text-sm">{submitError}</p>
        </div>
      )}
 
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={formData?.name}
            onChange={(e) => handleChange('name', e?.target?.value)}
            error={errors?.name}
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="john.doe@example.com"
            value={formData?.email}
            onChange={(e) => handleChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />
        </div>
 
        <Input
          label="Subject"
          type="text"
          placeholder="Brief description of your inquiry"
          value={formData?.subject}
          onChange={(e) => handleChange('subject', e?.target?.value)}
          error={errors?.subject}
          required
        />
 
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            className="w-full min-h-[150px] px-4 py-3 bg-muted border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-y font-mono-code text-sm"
            placeholder="Provide details about your inquiry..."
            value={formData?.message}
            onChange={(e) => handleChange('message', e?.target?.value)}
            required
          />
          {errors?.message && (
            <p className="mt-1 text-sm text-error flex items-center gap-1">
              <Icon name="AlertCircle" size={14} />
              {errors?.message}
            </p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">Minimum 20 characters</p>
        </div>
 
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="flex-1"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Reset Form
          </Button>
        </div>
      </form>
    </div>
  );
};
 
export default ContactForm;