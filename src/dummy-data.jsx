import johnImage from './assets/john.jpg';
import trevorImage from './assets/trevor.jpeg';
import aliceImage from './assets/alice.jpeg';
import annieImage from './assets/annie.jpg';
import joshImage from './assets/josh.jpg';
import deniseImage from './assets/denise.jpg';

const john = {
  id: 0,
  name: 'John',
  image: johnImage,
  role: "Developer",
  age: 28,
  sex: "Male",
  hobby: "Rock climbing",
  techStack: ["JavaScript", "React", "Node.js"],
  description: "An adventurous coder who loves solving puzzles both in code and on the cliffs.",
  perks: ["Flexible hours", "Conference passes", "Mentorship opportunities"],
  country: "Canada",
  favoriteFood: "Poutine",
  mail: {
    compose: [],
    inbox: [
      {
        id: 1,
        time: "2025-01-19T10:30:00",
        sender: { id: 101, name: "John Doe" },
        title: "Greetings friend",
        message: `Greetings, friend!\n We are excited to present you with an exclusive opportunity.\n Our team has been on the lookout for talented individuals like you.\n This special offer is tailored to match your unique skills and potential.\n Imagine working on innovative projects that inspire creativity.\n You will collaborate with professionals who are as passionate as you are.\n With flexible working hours, your time will be valued like never before.\n Competitive compensation is just the beginning of the rewards we offer.\n You’ll have access to state-of-the-art tools and resources.\n Your professional growth is important to us, and we invest in it heavily.\n Training programs and mentorship opportunities await you.\n This role also includes exciting challenges to push your limits.\n You’ll have a chance to leave a mark in a rapidly growing industry.\n Imagine contributing to impactful projects that shape the future.\n We prioritize work-life balance to ensure your overall well-being.\n Our diverse and inclusive culture welcomes everyone with open arms.\n This is your chance to unlock new possibilities in your career.\n Don’t let this opportunity slip through your fingers.\n Reach out to us now to discuss the next steps.\n We can’t wait to see what you bring to the table!\n`,
      },
      {
        id: 2,
        time: "2025-01-18T15:45:00",
        sender: { id: 102, name: "Jane Smith" },
        title: "Kind reminder",
        message: `Kind Reminder,\n We are excited to inform you about our upcoming free training session on Web Security and Phishing.\n This training is designed to help you stay safe online and protect your sensitive information.\n Phishing attacks have become more sophisticated, targeting individuals and organizations alike.\n Our session will guide you on how to identify phishing attempts and avoid falling victim to scams.\n You will also learn best practices for creating strong passwords and securing your accounts.\n The training includes real-world scenarios to help you spot potential threats effectively.\n We’ll also cover tips for recognizing suspicious links and emails.\n Whether you are a beginner or tech-savvy, this training is tailored for everyone.\n The session will be conducted online, making it accessible from anywhere.\n Participants will receive a certificate of completion at the end of the session.\n Remember, enhancing your web security skills is a crucial step in today’s digital age.\n Don’t miss this opportunity to learn and protect yourself from cyber threats.\n The training is completely free, but spots are limited, so act fast.\n Reserve your place today by clicking on the registration link provided.\n Feel free to share this opportunity with your colleagues and friends.\n We look forward to seeing you at the training session.\n Stay safe and secure online.\n Best regards,\n The Web Security Team\n`,
      },
    ],
    sent: [],
    deleted: [
      {
        id: 3,
        time: "2025-01-15T09:00:00",
        sender: { id: 103, name: "Mike Johnson" },
        title: "Files by end of the day?",
        message: `Subject: Request for Files by End of the Day\n Dear [Recipient's Name],\n I hope this email finds you well.\n I am writing to kindly request the files related to [specific project or task] to be sent by the end of the day.\n These files are crucial for [reason or purpose, e.g., "reviewing the next steps" or "meeting the project deadline"].\n If there are any issues or delays, please let me know so we can plan accordingly.\n Your prompt assistance with this would be greatly appreciated.\n Thank you for your cooperation, and please don’t hesitate to reach out if you need any further clarification.\n Looking forward to your reply.\n`,
      },
    ],
    spams: [
      {
        id: 4,
        time: "2025-01-14T08:20:00",
        sender: { id: 104, name: "Spammer Inc." },
        title: "You've won a $1,000 gift card!",
        message: `Subject: You've Won a $1,000 Gift Card! Click Here to Claim\n Congratulations!\n We are thrilled to reward you for your outstanding hard work and dedication.\n Your efforts have not gone unnoticed, and we want to show our appreciation.\n As a token of gratitude, we are excited to present you with a $1,000 gift card.\n This gift card can be used for purchases of your choice, providing you the ultimate freedom to indulge.\n Whether you want to treat yourself or invest in something special, the choice is yours.\n Claiming your gift card is quick and easy.\n Simply click on the link below to start the process:\n [Claim Your Gift Card Now]\n Please note that this reward is exclusively for you and must be claimed by [insert deadline here].\n If you encounter any issues during the claiming process, feel free to reach out to our support team.\n We want to thank you once again for your exceptional contributions.\n Your commitment makes a difference, and we couldn’t be prouder to have you on the team.\n Enjoy your reward—it’s well-deserved!\n Warm regards,\n [Your Company Name]\n [Support Contact Information]\n`,
      },
    ],
    drafts: [
      {
        id: 5,
        time: "2025-01-13T14:10:00",
        sender: { id: 2, name: "Trevor" },
        title: "Drafting a message to our client about the project...",
        message: `Subject: Update on Your Project\n Dear [Client's Name],\n We hope this email finds you well.\n We wanted to provide you with an update regarding your project, [Project Name].\n Our team has been making excellent progress, and we are pleased to share the latest details.\n Currently, we are on track with the timeline outlined during our initial discussions.\n The development phase is progressing smoothly, with key milestones being achieved as planned.\n We have successfully completed [specific task or milestone, e.g., "the initial design phase"].\n Our next focus will be [next steps, e.g., "implementing the core functionalities and conducting quality assurance testing"].\n We are dedicated to ensuring that every aspect of the project aligns with your vision and expectations.\n If there are any changes or additions you'd like to make, now is a great time to let us know.\n We value your feedback and collaboration, as it plays a crucial role in the project’s success.\n Please feel free to reach out if you would like to schedule a meeting to discuss the progress further.\n Additionally, we will provide you with another update on [specific date] to keep you informed every step of the way.\n Thank you for entrusting us with this opportunity to work together.\n We are committed to delivering a high-quality solution that exceeds your expectations.\n Looking forward to your thoughts.\n Warm regards,\n [Your Full Name]\n [Your Job Title]\n [Your Company Name]\n [Contact Information]\n`,
      },
    ],
  }
}

const trevor = {
  id: 2,
  name: 'Trevor',
  image: trevorImage,
  role: "QA",
  age: 29,
  sex: "Male",
  hobby: "Photography",
  techStack: ["Selenium", "Cypress", "JIRA"],
  description: "Detail-oriented and a perfectionist, Trevor ensures no bug escapes his lens.",
  perks: ["Flexible hours", "Remote work", "Training programs"],
  country: "Australia",
  favoriteFood: "Vegemite on toast",
  mail: {
    compose: [],
    inbox: [],
    sent: [],
    deleted: [ ],
    spams: [ ],
    drafts: [
      {
        id: 5,
        time: "2025-01-13T14:10:00",
        sender: { id: 2, name: "Trevor" },
        title: "Draft 2.",
        message: `Simple draft tests`,
      },
      {
        id: 6,
        time: "2025-01-13T14:10:00",
        sender: { id: 2, name: "Trevor" },
        title: "Draft 1",
        message: `Simple draft tests`,
      },
    ],
  }
}

const alice = {
  id: 1,
  name: 'Alice',
  image: aliceImage,
  role: "QA",
  age: 25,
  sex: "Female",
  hobby: "Yoga",
  techStack: ["Postman", "JMeter", "TestRail"],
  description: "A calm and focused QA who finds balance in both work and life.",
  perks: ["Mental health days", "Wellness programs", "Extra vacation days"],
  country: "India",
  favoriteFood: "Paneer tikka",
}

const annie = {
  id: 3,
  name: 'Annie',
  image: annieImage,
  role: "Developer",
  age: 26,
  sex: "Female",
  hobby: "Painting",
  techStack: ["Python", "Django", "PostgreSQL"],
  description: "A creative spirit who paints during her free time and writes elegant code during work hours.",
  perks: ["Team collaboration", "Access to workshops", "Health benefits"],
  country: "Netherlands",
  favoriteFood: "Stroopwafel",
}

const josh = {
  id: 4,
  name: 'Josh',
  image: joshImage,
  role: "Developer",
  age: 32,
  sex: "Male",
  hobby: "Gaming",
  techStack: ["Java", "Spring Boot", "Kubernetes"],
  description: "A strategic thinker who applies his gaming skills to design scalable software systems.",
  perks: ["Stock options", "Gym membership", "Annual bonus"],
  country: "USA",
  favoriteFood: "Burgers",
}

const denise = {
  id: 5,
  name: 'Denise',
  image: deniseImage,
  role: "QA",
  age: 34,
  sex: "Female",
  hobby: "Reading mystery novels",
  techStack: ["Appium", "TestNG", "GitLab"],
  description: "An analytical mind who loves uncovering both bugs and thrilling plot twists.",
  perks: ["Conference passes", "Paid certifications", "Performance bonus"],
  country: "UK",
  favoriteFood: "Fish and chips",
}

const testCategory = {
  id: 4,
  owner: john,
  icon: <div className='custom-icon' style={{ backgroundColor: '#6495ED' }}>D</div>,
  content: 'Development Tasks',
  sharedWith: [],
  sections: [
    {
      id: 0,
      name: 'To Do',
      color: '#32CD32',
      createdBy: john,
      tickets: [
        {
          id: 1,
          belongsTo: 0,
          name: 'Implement user profile page',
          priority: 'high',
          description: 'Create a user profile page to display user details, activity logs, and settings. \n\n The design is ready, but the API integration is pending.',
          comments: [
            {
              id: 1,
              ticketID: 1,
              parentCommentID: null,
              timestamp: '1/11/2025, 10:15:00 AM',
              content: 'Ensure the page layout matches the design from Figma.',
              owner: john,
              replies: [
                {
                  id: 1,
                  content: 'The design has been imported into the project. I’ll start integrating the API endpoints.',
                  timestamp: '1/11/2025, 10:30:00 AM',
                  postedBy: trevor
                },
                {
                  id: 2,
                  content: 'Let me know if you need any updates on the API specs.',
                  timestamp: '1/11/2025, 10:45:00 AM',
                  postedBy: john
                }
              ]
            }
          ],
          assignee: [trevor, annie, josh]
        },
        {
          id: 2,
          belongsTo: 0,
          name: 'Set up error logging service',
          priority: 'urgent',
          description: 'Integrate Sentry for centralized error logging across the application. Ensure deployment scripts include the necessary environment variables.',
          comments: [
            {
              id: 2,
              ticketID: 2,
              parentCommentID: null,
              timestamp: '1/11/2025, 1:00:00 PM',
              content: 'Do we have credentials for Sentry yet?',
              owner: john,
              replies: [
                {
                  id: 3,
                  content: 'Yes, they’re shared in the project channel.',
                  timestamp: '1/11/2025, 1:15:00 PM',
                  postedBy: john
                },
                {
                  id: 4,
                  content: 'I’ll handle configuring the deployment scripts.',
                  timestamp: '1/11/2025, 1:25:00 PM',
                  postedBy: alice
                }
              ]
            }
          ],
          assignee: [alice]
        }
      ]
    },
    {
      id: 1,
      name: 'Pending',
      color: '#FFA500',
      createdBy: john,
      tickets: [
        {
          id: 3,
          belongsTo: 1,
          name: 'Integrate third-party payment gateway',
          priority: 'urgent',
          description: 'The integration is blocked by missing API credentials from the payment provider. Awaiting response from their support team.',
          comments: [
            {
              id: 3,
              ticketID: 3,
              parentCommentID: null,
              timestamp: '1/10/2025, 5:00:00 PM',
              content: 'Requested credentials via email yesterday.',
              owner: alice,
              replies: [
                {
                  id: 5,
                  content: 'Followed up with their support team this morning.',
                  timestamp: '1/11/2025, 9:00:00 AM',
                  postedBy: trevor
                },
                {
                  id: 6,
                  content: 'Received an update—they’re verifying our account details.',
                  timestamp: '1/11/2025, 11:00:00 AM',
                  postedBy: trevor
                }
              ]
            }
          ],
          assignee: [annie]
        },
        {
          id: 4,
          belongsTo: 1,
          name: 'Resolve dependency issue in build pipeline',
          priority: 'low',
          description: 'The latest build fails due to a breaking change in a third-party library.\n Wait for a stable release or consider pinning the version.',
          comments: [
            {
              id: 4,
              ticketID: 4,
              parentCommentID: null,
              timestamp: '1/10/2025, 4:00:00 PM',
              content: 'Pinned the library version to the last stable release.',
              owner: alice,
              replies: [
                {
                  id: 7,
                  content: 'Good workaround for now. Let’s monitor for the stable release.',
                  timestamp: '1/11/2025, 8:30:00 AM',
                  postedBy: john
                }
              ]
            }
          ],
          assignee: [john]
        }
      ]
    },
    {
      id: 2,
      name: 'Done',
      color: '#1E90FF',
      createdBy: john,
      tickets: [
        {
          id: 5,
          belongsTo: 2,
          name: 'Optimize image loading on the homepage',
          priority: 'high',
          description: 'Lazy-load images on the homepage to improve initial load performance. \n Compress images using WebP format.',
          comments: [
            {
              id: 5,
              ticketID: 5,
              parentCommentID: null,
              timestamp: '1/9/2025, 3:00:00 PM',
              content: 'Implemented lazy loading and switched to WebP format.',
              owner: trevor,
              replies: [
                {
                  id: 8,
                  content: 'The page speed score improved significantly!',
                  timestamp: '1/9/2025, 3:30:00 PM',
                  postedBy: alice
                },
                {
                  id: 9,
                  content: 'Great job! Let’s apply the same optimization to other pages.',
                  timestamp: '1/9/2025, 4:00:00 PM',
                  postedBy: trevor
                }
              ]
            }
          ],
          assignee: [alice, josh]
        }
      ]
    }
  ]
};

const inboxMessages = {
  compose: [],
  inbox: [
    {
      id: 1,
      time: "2025-01-19T10:30:00",
      sender: { id: 101, name: "John Doe" },
      message: "Hello! How are you doing today?",
    },
    {
      id: 2,
      time: "2025-01-18T15:45:00",
      sender: { id: 102, name: "Jane Smith" },
      message: "Don't forget our meeting tomorrow at 10 AM.",
    },
  ],
  sent: [],
  deleted: [
    {
      id: 3,
      time: "2025-01-15T09:00:00",
      sender: { id: 103, name: "Mike Johnson" },
      message: "Can you send me the files by end of the day?",
    },
  ],
  spams: [
    {
      id: 4,
      time: "2025-01-14T08:20:00",
      sender: { id: 104, name: "Spammer Inc." },
      message: "You've won a $1,000 gift card! Click here to claim.",
    },
  ],
  drafts: [
    {
      id: 5,
      time: "2025-01-13T14:10:00",
      sender: { id: 105, name: "Yourself" },
      message: "Drafting a message to our client about the project...",
    },
  ],
};


export {
  testCategory,
  john,
  alice,
  trevor,
  annie,
  josh,
  denise,
  inboxMessages
};
