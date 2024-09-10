import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [minDate, setMinDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    const today = new Date();
    setMinDate(today.toISOString().split('T')[0]);
  }, []);

  const services = [
    'Manicure', 
    'Pedicure', 
    'Massage', 
    'Nail Art', 
    'Nail Extensions',
    'Microblading'
  ];

  const toggleService = (service) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((s) => s !== service)
        : [...prevSelected, service]
    );
  };

  const generateTimeSlots = (start, end) => {
    const slots = [];
    let current = new Date();
    current.setHours(start, 0, 0, 0); // start at 8:00 AM

    while (current.getHours() < end) { // end at 6:00 PM
      const time = current.toTimeString().slice(0, 5);
      slots.push(time);
      current.setMinutes(current.getMinutes() + 60); // increment by 1 hour
    }
    return slots;
  };

  const fetchAvailableSlots = (date) => {
    setLoading(true);
    try {
      // This would be replaced with an actual API call to fetch available slots for the date.
      const slots = generateTimeSlots(8, 18); // From 8:00 AM to 6:00 PM
      setAvailableSlots(slots);
    } catch (error) {
      console.error('Error fetching available slots:', error);
      setError('Failed to fetch available slots. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    fetchAvailableSlots(selectedDate); // Fetch new slots when the date changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      setError('Please select at least one service.');
      setSuccessMessage('');
      return;
    }

    const selectedTime = e.target.time.value;
    const [hours, minutes] = selectedTime.split(':').map(Number);
    if (hours < 8 || (hours === 18 && minutes > 0) || hours >= 19) {
      setError('Please select a time between 8:00 AM and 6:00 PM.');
      setSuccessMessage('');
      return;
    }

    setError('');
    setLoading(true);

    const formData = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      services: selectedServices.join(', '),
      preferred_date: e.target.date.value,
      preferred_time: selectedTime,
      to_name: 'Service Provider',
    };

    const detailedMessage = `
      Name: ${formData.from_name}
      Email: ${formData.from_email}
      Subject: ${formData.subject}
      Selected Services: ${formData.services}
      Preferred Date: ${formData.preferred_date}
      Preferred Time: ${formData.preferred_time}
      
      Message:
      ${formData.message}
    `;

    formData.message = detailedMessage;

    try {
      const result = await emailjs.send(
        'service_ur6r8zc',
        'template_qhiejvw', 
        formData,
        'nUZanUbpUADl5qMA0'
      );

      if (result.text === 'OK') {
        setSuccessMessage('Booking request sent successfully! We will contact you soon to confirm.');
        setError('');
        e.target.reset();
        setSelectedServices([]);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send booking request. Please try again.');
      setSuccessMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <p>Home &gt; Book Appointment</p>
        <h1>Book Your Appointment</h1>
      </div>

      <div className='contact-content'>
        <div className='contact-form'>
          <h2>Book Your Appointment</h2>
          <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Your Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <input type='text' name='subject' placeholder='Subject' required />
            <textarea name='message' placeholder='Your Message' rows='5' required></textarea>

            <div className='services-section'>
              <h3>Select Services</h3>
              <div className='services-options'>
                {services.map((service) => (
                  <label key={service} className="service-checkbox">
                    <input
                      type="checkbox"
                      value={service}
                      checked={selectedServices.includes(service)}
                      onChange={() => toggleService(service)}
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div className='booking-time'>
              <h3>Preferred Appointment Time</h3>
              <input type='date' name='date' min={minDate} required onChange={handleDateChange} />
              <select name='time' required>
                <option value="">Select a time</option>
                {availableSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              <p className="time-note">Please select a time between 8:00 AM and 6:00 PM</p>
            </div>

            {error && <p className='error-message'>{error}</p>}
            {successMessage && <p className='success-message'>{successMessage}</p>}

            <button type='submit' disabled={loading}>
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>
          </form>
        </div>

        <div className='contact-info'>
          <h2>Contact Information</h2>
          <div className='contact-info-item'>
            <span className='contact-icon'>📍</span>
            <p>00100 Lyric house, Kimathi Street</p>
          </div>
          <div className='contact-info-item'>
            <span className='contact-icon'>📞</span>
            <p>+254 (701) 636-709</p>
          </div>
          <div className='contact-info-item'>
            <span className='contact-icon'>✉️</span>
            <p>beautylynkspa254@gmail.com</p>
          </div>
          <div className='contact-info-item'>
            <span className='contact-icon'>🕒</span>
            <p>Mon-Sat: 8:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
