export const headerContent = {
    contentArray: [
        {projects: {
            id: 0,
            headerTitle: 'My Projects',
            subText: "I've been building and developing web based apps for nearly two years, below are some of my favorites"
        }},
        {about: {
            id: 1,
            headerTitle: 'About Me',
            subText: "Get a know a bit about me! I love to learn and have all kinds of projects I'm working on."
        }},
        {home: {
            id: 2,
            headerTitle: "Hey, I'm Nate.",
            subText: 'Web designer and developer from St. Louis, MO. I create custom websites to help companies to succeed online.',
            buttonText: "My Projects",
            buttonLinkPath: "/projects",
            imgSrc: "https://sebkay.com/assets/img/banner-home.jpg"
        }},
        {contact: {
            id: 3, 
            headerTitle: "Contact Me",
            subText: "Click the icon to view my profile on LinkedIn and message me. Or, feel free to reach out using the information listed below!",
            iconSrc: "https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_flat_white_93x21.png",
            iconSrcAlt: "https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png",
            buttonLinkPath: "/contact"
        }},
        {tech: {
            id: 4,
            headerTitle: "Technologies",
            subText: "Scroll down to check out the technologies that I frequently work with.",
            pageContent: [
                {
                    id: 0,
                    imgSrc: "https://reactjs.org/logo-og.png",
                    textHeader: "React",
                    textBody: "Most of my web development has used React libraries. I find its lack of bias towars project structure allows me to explore many different approaches and solutions to various problems."
                },
                {
                    id: 1,
                    imgSrc: "https://www.roadtovr.com/wp-content/uploads/2019/11/oculus-unity.jpg",
                    textHeader: "Unity",
                    textBody: "I've used Unity to begin pursuing my dream of creating VR and AR content. While still very much novice, I've been able to create, script and deploy simple applications to my Oculus Quest headset. Much more to come in the future."
                },
                {
                    id: 2,
                    imgSrc: "https://i.udemycdn.com/course/750x422/792484_cc98_3.jpg",
                    textHeader: "HTML and CSS",
                    textBody: "As web developer, I work extensively with HTML and CSS in every project. My usual approach to styling is to wrap the application in a CSS grid and and fill that grid with CSS flex containers. I've recently begun dabbling in CSS animations using Sass"
                },
                {
                    id: 3,
                    imgSrc: "https://www.pngkit.com/png/detail/80-803842_javascript-logo-computerprogrammieren-scripting-sprache-javascript-logo-vector.png",
                    textHeader: "JavaScript",
                    textBody: "A fundamental building block of web- this language receives more attention from me than most at this time. With web development being my most immediate goal, I spend a good deal of time learning about the ins and outs of this extremely versatile technology and keeping up to date on changes and updates."
                }

            ]
        }}
    ]
}
  

export default {
    headerContent
}