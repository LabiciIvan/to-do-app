const notesList = [
    {
        "id": 0,
        "name": "Grocery List",
        "category": "Personal",
        "comments": [
            {"id": 0, "text": "Don't forget to buy eggs.", "time": "July 21, 1983 01:15:00"},
            {"id": 1, "text": "Check for discounts on fruits.", "time": "July 21, 1983 01:15:00"},
            {"id": 2, "text": "Remember to buy milk.", "time": "July 21, 1983 01:15:00"}
        ]
    },
    {
        "id": 1,
        "name": "Meeting Notes",
        "category": "Work",
        "comments": [
            {"id": 0, "text": "Send the minutes to all participants.", "time": "July 21, 1983 01:15:00"},
            {"id": 1, "text": "Follow up on action items.", "time": "July 21, 1983 01:15:00"},
            {"id": 2, "text": "Book the room for next meeting.", "time": "July 21, 1983 01:15:00"}
        ]
    },
    {
        "id": 2,
        "name": "Book Recommendations",
        "category": "Leisure",
        "comments": [
            {"id": 0, "text": "Add latest sci-fi novels.", "time": "July 21, 1983 01:15:00"},
            {"id": 1, "text": "Check out new releases in non-fiction.", "time": "July 21, 1983 01:15:00"},
            {"id": 2, "text": "Don't forget classic literature.", "time": "July 21, 1983 01:15:00"}
        ]
    },
    {
        "id": 3,
        "name": "Workout Schedule",
        "category": "Personal",
        "comments": [
            {"id": 0, "text": "Increase cardio sessions.", "time": "July 21, 1983 01:15:00"},
            {"id": 1, "text": "Incorporate yoga for flexibility.", "time": "July 21, 1983 01:15:00"},
            {"id": 2, "text": "Rest days are important too.", "time": "July 21, 1983 01:15:00"}
        ]
    },
    {
        "id": 4,
        "name": "Project Plan",
        "category": "Work",
        "comments": [
            {"id": 0, "text": "Review the timeline with the team.", "time": "July 21, 1983 01:15:00"},
            {"id": 1, "text": "Update risk management strategies.", "time": "July 21, 1983 01:15:00"},
            {"id": 2, "text": "Ensure milestones are clearly defined.", "time": "July 21, 1983 01:15:00"}
        ]
    },
    {
        "id": 5,
        "name": "Travel Itinerary",
        "category": "Leisure",
        "comments": [
            {"id": 0, "text": "Double-check hotel bookings.", "time": "July 21, 1983 01:15:00"},
            {"id": 1, "text": "List must-see landmarks.", "time": "July 21, 1983 01:15:00"},
            {"id": 2, "text": "Keep emergency contacts handy.", "time": "July 21, 1983 01:15:00"}
        ]
    },
    {
        "id": 6,
        "name": "Gift Ideas",
        "category": "Personal",
        "comments": [
            {"id": 0, "text": "Consider handmade gifts for a personal touch.", "time": "July 21, 1983 01:15:00"},
            {"id": 1, "text": "Electronic gadgets are always a hit.", "time": "July 21, 1983 01:15:00"},
            {"id": 2, "text": "Remember to check for allergies if buying perfumes.", "time": "July 21, 1983 01:15:00"}
        ]
    },
    {
        "id": 7,
        "name": "Conference Agenda",
        "category": "Work",
        "comments": [
            {"id": 0, "text": "Finalize the list of speakers.", "time": "July 21, 1983 01:15:00"},
            {"id": 1, "text": "Arrange for networking sessions.", "time": "July 21, 1983 01:15:00"},
            {"id": 2, "text": "Check the audio-visual equipment in advance.", "time": "July 21, 1983 01:15:00"}
        ]
    },
    {
        "id": 8,
        "name": "Recipe Collection",
        "category": "Leisure",
        "comments": [
            {"id": 0, "text": "Try adding international cuisine.", "time": "July 21, 1983 01:15:00"},
            {"id": 1, "text": "Remember to note down any personal tweaks.", "time": "July 21, 1983 01:15:00"},
            {"id": 2, "text": "Organize recipes by meal time.", "time": "July 21, 1983 01:15:00"}
        ]
    },
    {
        "id": 9,
        "name": "Daily Journal",
        "category": "Personal",
        "comments": [
            {"id": 0, "text": "Reflect on what you're grateful for.", "time": "July 21, 1983 01:15:00"},
            {"id": 1, "text": "Write about your day, the good and the bad.", "time": "July 21, 1983 01:15:00"},
            {"id": 2, "text": "Plan tomorrow's top three priorities.", "time": "July 21, 1983 01:15:00"}
        ]
    }
]


export const getDummyData = () => {
    return notesList;
}