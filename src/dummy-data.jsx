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

export {
  testCategory,
  john,
  alice,
  trevor,
  annie,
  josh,
  denise
};
