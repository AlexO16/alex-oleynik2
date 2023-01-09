import { BsGithub, BsLinkedin, } from 'react-icons/bs';
import { MdEmail, } from 'react-icons/md';
import { SiJavascript, SiHtml5, SiCss3, SiMysql, SiMongodb, SiInsomnia, SiExpress, SiNodemon, } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';

let alexInfo = {
    "links": [
        {
            "platformName": "GitHub",
            "url": "https://github.com/AlexO16",
            "icon": <BsGithub className="h-100 w-100" />
        },
        {
            "platformName": "Linkedin",
            "url": "https://www.linkedin.com/in/alex-oleynik-3164a4259/",
            "icon": <BsLinkedin className="h-100 w-100" />
        },
        {
            "platformName": "Email",
            "url": "mailto:alexoleynik74@gmail.com",
            "icon": < MdEmail className="h-100 w-100" />
        }
    ],

    "languages": [
        {
            "skill": "JavaScript ES6+",
            "icon": <SiJavascript className="h-100 w-100"/>
        },
        {
            "skill": "HTML5",
            "icon": < SiHtml5 className="h-100 w-100"/>
        },
        {
            "skill": "CSS3",
            "icon": <SiCss3 className="h-100 w-100" />
        },
    ],

    "applications": [
        {
            "skill": "GitHub",
            "icon": <BsGithub className="h-100 w-100" />
        },
        {
            "skill": "MongoDB",
            "icon": < SiMongodb className="h-100 w-100" />
        },
        {
            "skill": "MySQL",
            "icon": < SiMysql className="h-100 w-100" />
        },
        {
            "skill": "Insomnia",
            "icon": < SiInsomnia className="h-100 w-100" />
        },
    ],

    "packages": [
        {
            "skill": "Express",
            "icon": < SiExpress className="h-100 w-100" />
        },
        {
            "skill": "Nodemon",
            "icon": < SiNodemon className="h-100 w-100" />
        },
        {
            "skill": "React",
            "icon": < FaReact className="h-100 w-100" />
        },
        {
            "skill": "NodeJS",
            "icon": < FaNodeJs className="h-100 w-100" />
        },
    ],

    "projects": [
        {
            "id": "1",
            "project": "Weather Dashboard",
            "projectURL": "https://alexo16.github.io/weather-dashboard/",
            "githubURL": "https://github.com/AlexO16/weather-dashboard",
            "projectImg": "weather.png",
            "description": "An app to check the current weather of a searched city and get a 5 day forcast."
        },
        {
            "id": "2",
            "project": "README Generator",
            "projectURL": "https://drive.google.com/file/d/1DBjkYwSOfOFIimpPxRlL1WsaLBlfWRem/view",
            "githubURL": "https://github.com/AlexO16/readme-generator",
            "projectImg": "readmeGen.png",
            "description": "Professional README generator."
        },
        {
            "id": "3",
            "project": "Work Day Scheduler",
            "projectURL": "https://alexo16.github.io/work-day-scheduler/",
            "githubURL": "https://github.com/AlexO16/work-day-scheduler",
            "projectImg": "dayPlanner.png",
            "description": "A daily work day planner."
        },
        {
            "id": "4",
            "project": "Note Taker",
            "projectURL": "https://note-taker-production-45e1.up.railway.app/",
            "githubURL": "https://github.com/AlexO16/note-taker",
            "projectImg": "noteTaker.png",
            "description": "A note taking app. Write, save and delete notes."
        },
        {
            "id": "5",
            "project": "Team Profile Generator",
            "projectURL": "https://drive.google.com/file/d/1MfvIQnh-KRnF9Hdkka1d07svWUAp_med/view",
            "githubURL": "https://github.com/AlexO16/team-profile-generator",
            "projectImg": "employee.png",
            "description": "Generate a dynamic webpage that displays an employee's basic info."
        },
        {
            "id": "6",
            "project": "Employee Tracker",
            "projectURL": "https://drive.google.com/file/d/1gUA3u_o3u8i4UQRwhDpfwDmYLmalf4uc/view",
            "githubURL": "https://github.com/AlexO16/employee-tracker",
            "projectImg": "tracker.png",
            "description": " View and manage employee, department and role information."
        },
    ],
};

export default alexInfo