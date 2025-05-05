import React, { useState } from 'react';
// import './Mainevent.css';

const EventsPage = () => {
  // State for selected events
  const [selectedUpcomingEvent, setSelectedUpcomingEvent] = useState(null);
  const [selectedPastEvent, setSelectedPastEvent] = useState(null);

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Diwali Celebration",
      date: "November 12, 2023",
      time: "6:00 PM - 10:00 PM",
      location: "Berlin Community Hall",
      description: "Join us for our annual Diwali celebration with cultural performances, traditional food, and fireworks display.",
      image: "https://images.unsplash.com/photo-1603653962929-dc8b6537a9a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Career Networking Workshop",
      date: "December 5, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Online Event",
      description: "Professional development workshop for Indian professionals in Germany. Learn networking strategies and career growth tips.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Newcomers Orientation",
      date: "January 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Munich Cultural Center",
      description: "Essential information session for Indians newly arrived in Germany. Learn about visas, housing, and cultural integration.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  // Past events data
  const pastEvents = [
    {
      id: 1,
      title: "Holi Festival",
      date: "March 10, 2023",
      description: "Colorful celebration of Holi with traditional music, dance, and colors at the Frankfurt City Park.",
      images: [
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      video: "https://www.youtube.com/embed/example1",
      details: "Our annual Holi celebration brought together over 500 members of the Indian community in Frankfurt. The event featured live music performances, traditional dance shows, and of course, the throwing of colorful powders. We also had food stalls serving authentic Indian snacks and drinks."
    },
    {
      id: 2,
      title: "Republic Day Celebration",
      date: "January 26, 2023",
      description: "Commemoration of India's Republic Day with flag hoisting and cultural program.",
      images: [
        "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      video: "https://www.youtube.com/embed/example2",
      details: "The Republic Day celebration was held at the Indian Embassy in Berlin. The event included flag hoisting ceremony, cultural performances by children from the community, and speeches by dignitaries. Over 300 community members attended the event."
    },
    {
      id: 3,
      title: "Ganesh Chaturthi",
      date: "August 31, 2022",
      description: "Traditional celebration of Lord Ganesha's birthday with puja and cultural activities.",
      images: [
        "https://images.unsplash.com/photo-1566552881560-0be862a7c1e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1566552881560-0be862a7c1e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      video: "https://www.youtube.com/embed/example3",
      details: "The Ganesh Chaturthi celebration featured a traditional puja ceremony followed by cultural performances. The idol was immersed in a local water body after 5 days of celebrations. Special modak sweets were distributed to all attendees."
    },
    {
      id: 4,
      title: "German Language Workshop",
      date: "June 15, 2022",
      description: "Free German language workshop for Indian community members.",
      images: [
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      video: null,
      details: "This workshop was designed to help community members improve their German language skills for daily life and professional settings. The session covered basic grammar, common phrases, and cultural tips for better integration."
    },
    {
      id: 5,
      title: "Yoga Day Celebration",
      date: "June 21, 2022",
      description: "International Yoga Day event with mass yoga session.",
      images: [
        "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      video: "https://www.youtube.com/embed/example5",
      details: "Over 200 participants joined our Yoga Day celebration in Munich's Olympic Park. The event featured different yoga styles and was led by certified instructors. The session concluded with meditation and healthy snacks."
    },
    {
      id: 6,
      title: "Indian Independence Day",
      date: "August 15, 2022",
      description: "Celebration of India's Independence Day with cultural performances.",
      images: [
        "https://images.unsplash.com/photo-1587161953880-8a2b0c07d0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      video: "https://www.youtube.com/embed/example6",
      details: "The Independence Day celebration featured flag hoisting, patriotic songs, and cultural performances representing different regions of India. The event was attended by over 400 community members and German guests."
    }
  ];

  // Handle event selection
  const handleUpcomingEventClick = (event) => {
    setSelectedUpcomingEvent(event);
    setSelectedPastEvent(null);
  };

  const handlePastEventClick = (event) => {
    setSelectedPastEvent(event);
    setSelectedUpcomingEvent(null);
  };

  return (
    <div className="events-container">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="hero-content">
          <h1>Events by Friend of Indian Diaspora</h1>
          <p className="hero-subtitle">Celebrating our culture, connecting our community in Germany</p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events-section">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <div className="section-divider"></div>
          <p>Join us for these exciting upcoming events in our community</p>
        </div>
        
        <div className="events-grid">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}></div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-time-location">{event.time} • {event.location}</p>
                <p className="event-description">{event.description}</p>
                <button 
                  className="event-details-btn"
                  onClick={() => handleUpcomingEventClick(event)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Upcoming Event Details */}
        {selectedUpcomingEvent && (
          <div className="event-details">
            <div className="details-header">
              <h3>{selectedUpcomingEvent.title}</h3>
              <button 
                className="close-btn"
                onClick={() => setSelectedUpcomingEvent(null)}
              >
                ×
              </button>
            </div>
            <div className="details-content">
              <div className="details-image" style={{ backgroundImage: `url(${selectedUpcomingEvent.image})` }}></div>
              <div className="details-text">
                <p><strong>Date:</strong> {selectedUpcomingEvent.date}</p>
                <p><strong>Time:</strong> {selectedUpcomingEvent.time}</p>
                <p><strong>Location:</strong> {selectedUpcomingEvent.location}</p>
                <p><strong>Description:</strong> {selectedUpcomingEvent.description}</p>
                <button className="register-btn">Register Now</button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Past Events Section */}
      <section className="past-events-section">
        <div className="section-header">
          <h2>Our Celebrations</h2>
          <div className="section-divider"></div>
          <p>Relive the memorable events we've organized for our community</p>
        </div>
        
        <div className="events-grid">
          {pastEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image" style={{ backgroundImage: `url(${event.images[0]})` }}></div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-description">{event.description}</p>
                <button 
                  className="event-details-btn"
                  onClick={() => handlePastEventClick(event)}
                >
                  View Memories
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Past Event Details */}
        {selectedPastEvent && (
          <div className="event-details past-event-details">
            <div className="details-header">
              <h3>{selectedPastEvent.title} - {selectedPastEvent.date}</h3>
              <button 
                className="close-btn"
                onClick={() => setSelectedPastEvent(null)}
              >
                ×
              </button>
            </div>
            <div className="details-content">
              <div className="media-section">
                {selectedPastEvent.video && (
                  <div className="video-container">
                    <iframe 
                      src={selectedPastEvent.video}
                      title={selectedPastEvent.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <div className="image-gallery">
                  {selectedPastEvent.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="gallery-image"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="details-text">
                <h4>Event Details</h4>
                <p>{selectedPastEvent.details}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="events-cta">
        <h2>Have an Event Idea?</h2>
        <p>We're always looking for new ways to bring our community together. Share your event ideas with us!</p>
        <button className="cta-button">Suggest an Event</button>
      </section>
    </div>
  );
};

export default EventsPage;