export type Hackathon = {
    name: string;
    event: string;
    organizer: string;
    venue: string;
    date: string;
    duration: string;
    team: string;
    representing: string;
    tagline: string;
    description: string;
};

export const hackathons: Hackathon[] = [
    {
        name: "HACKFUSION 2026 — INNONATION National Hackathon",
        event: "Flyover Education Presents",
        organizer: "IEEE Computer Society LU SB Chapter",
        venue: "Leading University",
        date: "2026",
        duration: "24 hours",
        team: "Team RyukAndTheApple",
        representing: "MBSTU",
        tagline: "24-hour national hackathon at Leading University.",
        description:
            "Participated in a 24-hour national hackathon organized by the IEEE Computer Society LU SB Chapter at Leading University, representing MBSTU as a member of Team RyukAndTheApple.",
    },
];

