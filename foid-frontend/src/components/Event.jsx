import React from 'react';
import { TbCalendarEvent } from "react-icons/tb";

const Event = () => {
    const eventData = [
        {
            id: 1,
            title: 'Maharana Pratap Jayanti',
            img: "./foid-assets/eventImg.jpg",
            date: '2025-05-09',
            description: 'This day is observed to honor the legendary Rajput warrior and the ruler of Mewar who is still remembered for his resistance against the Mughal rule',
            location: 'Virtual Event',
            link: 'https://www.youtube.com/@foidofficialyt',
        },
        {
            id: 2,
            title: 'World No Tobacco Day',
            img: "./foid-assets/eventImg.jpg",
            date: '2025-05-31',
            description: 'World No Tobacco Day is observed every year on May 31st. On this day, the World Health Organization (WHO) together with governments and NGOs, holds an international campaign to educate the public about the use of tobacco. ',
            location: 'Main Campus',
            link: 'https://www.youtube.com/@foidofficialyt',
        },
        {
            id: 3,
            title: 'World Environment Day',
            img: "./foid-assets/eventImg.jpg",
            date: '2025-06-05',
            description: 'World Environment Day is commemorated every year on June 5th. The purpose of this day is to raise awareness about the environment and how to protect our planet.',
            location: 'Conference Center',
            link: 'https://www.youtube.com/@foidofficialyt',
        }
    ];

    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric',
            weekday: 'short'
        };
        return date.toLocaleDateString('en-US', options);
    };

    // Extract day and month for badge
    const getDateBadge = (dateString) => {
        const date = new Date(dateString);
        return {
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'short' })
        };
    };

    return (
        <section className="event-section" aria-labelledby="events-heading">
            <div className="event-container">
                <h2 id="events-heading" className="section-heading">
                    
                    Upcoming Events
                </h2>
                
                <div className="event-grid">
                    {eventData.map((event) => {
                        const { day, month } = getDateBadge(event.date);
                        
                        return (
                            <article className="event-card" key={event.id}>
                                <div className="event-image-container">
                                    <img 
                                        src={event.img} 
                                        alt={event.title} 
                                        className="event-image"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://via.placeholder.com/400x300?text=Event+Image';
                                        }}
                                    />
                                    <div className="event-date-badge" aria-label={`Event date: ${formatDate(event.date)}`}>
                                        <span className="event-day">{day}</span>
                                        <span className="event-month">{month}</span>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <div className="event-header">
                                        <h3 className="event-title">{event.title}</h3>
                                        <time dateTime={event.date} className="event-full-date">
                                            {formatDate(event.date)}
                                        </time>
                                    </div>
                                    <p className="event-description">{event.description}</p>
                                    <div className="event-footer">
                                        <span className="event-location">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            {event.location}
                                        </span>
                                        
                                        <a href={event.link} className="event-link" aria-label={`Register for ${event.title}`}>
                                            Join Now
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Event;