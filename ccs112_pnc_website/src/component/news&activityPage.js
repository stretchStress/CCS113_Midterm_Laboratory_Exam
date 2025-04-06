import React from "react";
import "./NewsandActivities.css";
import Layout from "./layout";

const newsData = [
  {
    title: "PNC Comes with 2nd Place in Design Sprint Hackathon",
    date: "March 15, 2025",
    description: "PNC secured 2nd place in the Design Sprint Hackathon, showcasing innovation and teamwork across departments.",
    image: "/images/hackatonImage.jpg",
  },
  {
    title: "National IT Skills: Our Dangal Programmers in Action",
    date: "February 20, 2025",
    description: "Our Dangal programmers are competing against top-tier students from across the country at the National IT Skills Competition 2025. With their skills and determination, they are taking on challenging categories like programming, IT Quiz Bee, hip-hop dance, cosplay, and the ML tournament.",
    image: "/images/ITskills.jpg",
  },
  {
    title: "𝐇𝐀𝐏𝐏𝐄𝐍𝐈𝐍𝐆 𝐍𝐎𝐖 | 𝐂𝐂𝐒 𝐂𝐀𝐏𝐀𝐃𝐄: 𝐀 𝐑𝐄𝐓𝐑𝐎 𝐒𝐎𝐈𝐑𝐄́𝐄 𝐍𝐈𝐆𝐇𝐓 𝐄𝐕𝐄𝐍𝐓 𝐇𝐈𝐆𝐇𝐋𝐈𝐆𝐇𝐓𝐒 🪩",
    date: "February 20, 2025",
    description: "The excitement is in the air, and the retro vibes are in full swing! Our CCS family is coming together for a night of music, laughter, and unforgettable memories. Just look at these amazing moments—everyone dressed up and truly enjoying the night!",
    image: "/images/capadeImage.jpg",
  },
  {
    title: "Midterm Examination Schedule - 2nd Semester A.Y. 2024-2025",
    date: "March 25, 2025",
    description: "Dangal greetings, PnC community! Please be advised that the Midterm Examination for the 2nd semester of A.Y. 2024-2025 is scheduled for April 2-8, 2025. Kindly see the attached schedule for your reference. Please contact your department chair or college dean if you have any concerns or queries.",
    image: "/images/midtermImage.jpg",
  },
];

const NewsAndActivities = () => {
  return (
    <Layout>
        <div className="container py-5">
        <h1 className="text-center text-primary fw-bold mb-4">News & Activities</h1>
        <div className="row">
            {newsData.map((news, index) => (
            <div className="col-md-6 mb-4" key={index}>
                <div className="card shadow-sm h-100">
                <img src={news.image} className="card-img-top" alt={news.title} />
                <div className="card-body">
                    <h5 className="card-title text-success fw-bold">{news.title}</h5>
                    <small className="text-muted">{news.date}</small>
                    <p className="card-text mt-2">{news.description}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </Layout>
  );
};

export default NewsAndActivities;
