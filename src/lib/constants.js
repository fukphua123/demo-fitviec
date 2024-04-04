
import { useState,useEffect } from "react";

export const EMPLOYERS = [
    {
        name: "Mcredit - Công ty Tài chính TNHH MB Shinsei",
        logo: "/company/logo-mcredit.webp",
        skillRequired: ["Java", "AWS", "Spring", "ReactJS", ".NET"],
        location: "Ha Noi",
        numOfJobs: 17,
    },
    {
        name: "NAB Innovation Centre Vietnam",
        logo: "/company/logo-nab.webp",
        skillRequired: ["NodeJS", "ReactJS", "Agile", "DevOps"],
        location: "Ho Chi Minh",
        numOfJobs: 13,
    },
    {
        name: "LG Electronics Development Vietnam (LGEDV)",
        logo: "/company/logo-lg.webp",
        skillRequired: ["OOP", "C++", "Embedded", "Android"],
        location: "Ha Noi - Da Nang - Others",
        numOfJobs: 7,
    },
    {
        name: "Giao Hàng Tiết Kiệm",
        logo: "/company/logo-ghtk.webp",
        skillRequired: ["PHP", "Java", "iOS", "Android", "Database"],
        location: "Ha Noi",
        numOfJobs: 3,
    },
];

export const ARTICLES = [
    {
        bigCover: true,
        image: "/article/itviec-it-salary-report-2023-2024.webp",
        title: "ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”",
        description:
            "Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...",
    },
    {
        bigCover: false,
        image: "/article/cong-ty-it-tot-nhat-vietnam-2024.webp",
        title: "Công bố 30 công ty IT tốt nhất Việt Nam 2024",
        description: "",
    },
    {
        bigCover: false,
        image: "/article/ui-vs-ux.webp",
        title: "UI vs UX: Sự khác biệt giữa thiết kế UI và thiết kế UX là gì?",
        description: "",
    },
    {
        bigCover: false,
        image: "/article/ung-dung-blockchain-blog.webp",
        title: "7 ứng dụng Blockchain thực tiễn trong đa dạng lĩnh vực",
        description: "",
    },
];

export const JOBS = [
    {
        "id": 1,
        "title": "Software Engineer",
        "company": {
            "name": "ABC Tech",
            "type": "IT Product",
            "size": "500-1000 employees"
        },
        "working_model": "Remote",
        "location": "Remote",
        "level": "Mid/Senior",
        "skills": [
            "Node.js",
            "React"
        ],
        "salary": "$80,000 - $100,000",
        "description": "Developing web applications using Node.js and React",
        "country": "USA",
        "working_days": "Monday to Friday",
        "overtime_policy": "No OT",
        "posted_day": "2024-04-03",
        "expired_day": "2024-05-03"
    },
    {
        "id": 2,
        "title": "Data Scientist",
        "company": {
            "name": "XYZ Analytics",
            "type": "IT Product",
            "size": "100-500 employees"
        },
        "working_model": "At Office",
        "location": "New York",
        "level": "Senior",
        "skills": [
            "Machine Learning",
            "Python",
            "Statistics"
        ],
        "salary": "$90,000 - $120,000",
        "description": "Analyzing large datasets using machine learning algorithms",
        "country": "USA",
        "working_days": "Monday to Friday",
        "overtime_policy": "No OT",
        "posted_day": "2024-04-01",
        "expired_day": "2024-04-30"
    },
    {
        "id": 3,
        "title": "Graphic Designer",
        "company": {
            "name": "Design Studio",
            "type": "Non IT",
            "size": "50-100 employees"
        },
        "working_model": "At Office",
        "location": "Los Angeles",
        "level": "Junior/Mid",
        "skills": [
            "Adobe Photoshop",
            "Illustrator",
            "UI/UX Design"
        ],
        "salary": "$60,000 - $80,000",
        "description": "Creating visual concepts using graphic design software",
        "country": "USA",
        "working_days": "Monday to Friday",
        "overtime_policy": "No OT",
        "posted_day": "2024-03-25",
        "expired_day": "2024-04-20"
    },
    {
        "id": 4,
        "title": "Marketing Manager",
        "company": {
            "name": "ABC Marketing",
            "type": "Non IT",
            "size": "1000+ employees"
        },
        "working_model": "Hybrid",
        "location": "Chicago",
        "level": "Senior",
        "skills": [
            "Marketing Strategy",
            "Campaign Management",
            "Digital Marketing"
        ],
        "salary": "$70,000 - $90,000",
        "description": "Developing marketing strategies and campaigns",
        "country": "USA",
        "working_days": "Monday to Friday",
        "overtime_policy": "No OT",
        "posted_day": "2024-04-02",
        "expired_day": "2024-04-25"
    },
    {
        "id": 5,
        "title": "Product Manager",
        "company": {
            "name": "XYZ Products",
            "type": "IT Product",
            "size": "100-500 employees"
        },
        "working_model": "At Office",
        "location": "San Francisco",
        "level": "Senior",
        "skills": [
            "Product Management",
            "Agile Methodology",
            "UI/UX Design"
        ],
        "salary": "$100,000 - $130,000",
        "description": "Overseeing the development and launch of new products",
        "country": "USA",
        "working_days": "Monday to Friday",
        "overtime_policy": "No OT",
        "posted_day": "2024-03-30",
        "expired_day": "2024-04-28"
    },
    {
        "id": 6,
        "title": "Software Engineer",
        "company": {
            "name": "ABC Tech",
            "type": "IT Product",
            "size": "500-1000 employees"
        },
        "working_model": "Remote",
        "location": "Remote",
        "level": "Mid/Senior",
        "skills": [
            "Node.js",
            "React"
        ],
        "salary": "$80,000 - $100,000",
        "description": "Developing web applications using Node.js and React",
        "country": "USA",
        "working_days": "Monday to Friday",
        "overtime_policy": "No OT",
        "posted_day": "2024-04-03",
        "expired_day": "2024-05-03"
    }
]