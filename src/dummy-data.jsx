const testCategory = {
  id: 4,
  icon: <div className='custom-icon' style={{ backgroundColor: '#6495ED' }}>D</div>,
  content: 'Development Tasks',
  sections: [
    {
      id: 0,
      name: 'To Do',
      color: '#32CD32',
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
              replies: [
                {
                  id: 1,
                  content: 'The design has been imported into the project. I’ll start integrating the API endpoints.',
                  timestamp: '1/11/2025, 10:30:00 AM',
                  postedBy: { id: 20, name: 'Sophia' }
                },
                {
                  id: 2,
                  content: 'Let me know if you need any updates on the API specs.',
                  timestamp: '1/11/2025, 10:45:00 AM',
                  postedBy: { id: 21, name: 'Liam' }
                }
              ]
            }
          ],
          assignee: []
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
              replies: [
                {
                  id: 3,
                  content: 'Yes, they’re shared in the project channel.',
                  timestamp: '1/11/2025, 1:15:00 PM',
                  postedBy: { id: 22, name: 'Ethan' }
                },
                {
                  id: 4,
                  content: 'I’ll handle configuring the deployment scripts.',
                  timestamp: '1/11/2025, 1:25:00 PM',
                  postedBy: { id: 23, name: 'Isabella' }
                }
              ]
            }
          ],
          assignee: []
        }
      ]
    },
    {
      id: 1,
      name: 'Pending',
      color: '#FFA500',
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
              replies: [
                {
                  id: 5,
                  content: 'Followed up with their support team this morning.',
                  timestamp: '1/11/2025, 9:00:00 AM',
                  postedBy: { id: 24, name: 'Mason' }
                },
                {
                  id: 6,
                  content: 'Received an update—they’re verifying our account details.',
                  timestamp: '1/11/2025, 11:00:00 AM',
                  postedBy: { id: 25, name: 'Ava' }
                }
              ]
            }
          ],
          assignee: []
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
              replies: [
                {
                  id: 7,
                  content: 'Good workaround for now. Let’s monitor for the stable release.',
                  timestamp: '1/11/2025, 8:30:00 AM',
                  postedBy: { id: 26, name: 'Noah' }
                }
              ]
            }
          ],
          assignee: []
        }
      ]
    },
    {
      id: 2,
      name: 'Done',
      color: '#1E90FF',
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
              replies: [
                {
                  id: 8,
                  content: 'The page speed score improved significantly!',
                  timestamp: '1/9/2025, 3:30:00 PM',
                  postedBy: { id: 27, name: 'Sophia' }
                },
                {
                  id: 9,
                  content: 'Great job! Let’s apply the same optimization to other pages.',
                  timestamp: '1/9/2025, 4:00:00 PM',
                  postedBy: { id: 28, name: 'Emily' }
                }
              ]
            }
          ],
          assignee: []
        }
      ]
    }
  ]
};

export { testCategory };
