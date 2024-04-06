const notesList = [
    {
        "id": 0,
        "name": "Grocery List",
        "category": "Personal",
        "comments": [
            {"id": 0, "text": "Don't forget to buy eggs."},
            {"id": 1, "text": "Check for discounts on fruits."},
            {"id": 2, "text": "Remember to buy milk."}
        ]
    },
    {
        "id": 1,
        "name": "Meeting Notes",
        "category": "Work",
        "comments": [
            {"id": 0, "text": "Send the minutes to all participants."},
            {"id": 1, "text": "Follow up on action items."},
            {"id": 2, "text": "Book the room for next meeting."}
        ]
    },
    {
        "id": 2,
        "name": "Book Recommendations",
        "category": "Leisure",
        "comments": [
            {"id": 0, "text": "Add latest sci-fi novels."},
            {"id": 1, "text": "Check out new releases in non-fiction."},
            {"id": 2, "text": "Don't forget classic literature."}
        ]
    },
    {
        "id": 3,
        "name": "Workout Schedule",
        "category": "Personal",
        "comments": [
            {"id": 0, "text": "Increase cardio sessions."},
            {"id": 1, "text": "Incorporate yoga for flexibility."},
            {"id": 2, "text": "Rest days are important too."}
        ]
    },
    {
        "id": 4,
        "name": "Project Plan",
        "category": "Work",
        "comments": [
            {"id": 0, "text": "Review the timeline with the team."},
            {"id": 1, "text": "Update risk management strategies."},
            {"id": 2, "text": "Ensure milestones are clearly defined."}
        ]
    },
    {
        "id": 5,
        "name": "Travel Itinerary",
        "category": "Leisure",
        "comments": [
            {"id": 0, "text": "Double-check hotel bookings."},
            {"id": 1, "text": "List must-see landmarks."},
            {"id": 2, "text": "Keep emergency contacts handy."}
        ]
    },
    {
        "id": 6,
        "name": "Gift Ideas",
        "category": "Personal",
        "comments": [
            {"id": 0, "text": "Consider handmade gifts for a personal touch."},
            {"id": 1, "text": "Electronic gadgets are always a hit."},
            {"id": 2, "text": "Remember to check for allergies if buying perfumes."}
        ]
    },
    {
        "id": 7,
        "name": "Conference Agenda",
        "category": "Work",
        "comments": [
            {"id": 0, "text": "Finalize the list of speakers."},
            {"id": 1, "text": "Arrange for networking sessions."},
            {"id": 2, "text": "Check the audio-visual equipment in advance."}
        ]
    },
    {
        "id": 8,
        "name": "Recipe Collection",
        "category": "Leisure",
        "comments": [
            {"id": 0, "text": "Try adding international cuisine."},
            {"id": 1, "text": "Remember to note down any personal tweaks."},
            {"id": 2, "text": "Organize recipes by meal time."}
        ]
    },
    {
        "id": 9,
        "name": "Daily Journal",
        "category": "Personal",
        "comments": [
            {"id": 0, "text": "Reflect on what you're grateful for."},
            {"id": 1, "text": "Write about your day, the good and the bad."},
            {"id": 2, "text": "Plan tomorrow's top three priorities."}
        ]
    }
]


export const getDummyData = () => {
    return notesList;
}