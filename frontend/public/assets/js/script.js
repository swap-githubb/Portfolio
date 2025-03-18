document.addEventListener('DOMContentLoaded', () => {
    // Projects data
    const projects = [
        {
            title: 'Patient Booking system',
            description: 'Developed an application where patients as well as doctors can register and login in their respective portals. Doctors can update their city, state and date time slots availability whenever they want. Doctors can see their upcoming appointments. Patients can search for doctors according to city, state, speciality and name, and book any available slot for that doctor. After booking the might also cancel the appointment. Also implemented notification via mail feature on booking as well as cancellation of appointment. Designed interactive UI using React and Node, Express for handling server requests. MongoDB is used for storing data.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
            image: 'assets/images/projects/patient-booking.png',
            deployed: 'https://patient-booking-system-1.onrender.com/'
        },
        {
            title: 'AI powered clinical support system',
            description: 'Developed an application where patients (speaking functionality) can do a conversation with AI chatbot behaving as a doctor where they tell about their problems and then it asks follow-up questions and patient needs to answer that. After analyzing all the question and answers using pre-trained models (can use fine tuned models for medical purposes), it will give SOAP notes and Differential diagnosis. The conversation transcript is also provided to the patient (using on-time speech to text conversion). Designed interactive UI using React and FastAPI for handling server requests.',
            tech: ['React.js', 'FastAPI', 'Python'],
            image: 'assets/images/projects/ai-powered-clinical-support-system.png',
            deployed: 'https://fdocpa.onrender.com/'
        },
        {
            title: 'Your Cook Application',
            description: 'Developed a personalized recipe recommendation platform that suggests meals based on users dietary preferences, available ingredients, and cuisine type. Implemented user authentication, secure data storage, and dynamic filtering for enhanced user experience. Designed an interactive UI using HTML, JS and CSS, with Node and Express handling server requests. Integrated MongoDB for efficient data storage and retrieval, ensuring scalability.',
            tech: ['Node.js', 'MongoDB', 'Express.js', 'HTML', 'CSS', 'JavaScript'],
            image: 'assets/images/projects/your-cook.jpg'
        },
        {
            title: 'Coke Review Application',
            description: ' Engineered a real-time voting and review platform for different Coca-Cola flavors, allowing users to rate and submit feedback.Developed a scalable back-end system using Node and MySQL, ensuring efficient data management.Designed an intuitive user interface with responsive design using HTML, CSS, and JavaScript.Optimized database queries for faster data retrieval, reducing response time by 30%.',
            tech: ['Node.js', 'Express.js', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
            image: 'assets/images/projects/coke-review.jpg'
        },
        {
            title: 'Web Annotator',
            description: ' Developed a Chrome extension for webpage annotation, allowing users to highlight text, add notes, and save annotations.Ensured persistent storage of notes even after closing and reopening the browser using Chrome local storage API.Enabled PDF export functionality, allowing users to download their annotated content.Improved user efficiency by reducing manual note-taking effort by 50%.',
            tech: ['JavaScript', 'HTML', 'CSS'],
            image: 'assets/images/projects/web-annotator.jpg'
        },
        {
            title: 'Brain Tumor Detection and Classification',
            description: 'Built a deep learning model for brain tumor detection and classification using MRI image datasets.Achieved 75% accuracy by optimizing a Convolutional Neural Network CNN architecture with data augmentation.Implemented preprocessing techniques such as normalization, and segmentation for improved accuracy.Evaluated model performance with a confusion matrix and classification report.',
            tech: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas'],
            image: 'assets/images/projects/brain-tumor.jpg'
        }

    ];

    // Populate projects
    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project-card animate-fade';
    
        // Split the description at each full stop, trim spaces, filter out any empty items, and wrap each sentence in an <li> element.
        const descriptionList = project.description
            .split('.')
            .map(sentence => sentence.trim())
            .filter(sentence => sentence.length > 0)
            .map(sentence => `<li><i>${sentence}.</i></li>`)
            .join('');
    
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <ul class="project-description">
                    ${descriptionList}
                </ul>
                <div class="tech-stack">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                ${
                    project.deployed
                        ? `<div class="project-deployed" style="margin-top: 15px;">
                                <a href="${project.deployed}" 
                                   target="_blank" 
                                   rel="noopener noreferrer" 
                                   style="text-decoration: none; 
                                          color: #fff; 
                                          background-color:rgb(128, 182, 218); 
                                          padding: 4px 6px; 
                                          border-radius: 4px;
                                          display: inline-block;">
                                   View Deployed Application
                                </a>
                           </div>`
                        : ''
                }
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
    

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade').forEach(el => observer.observe(el));

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});