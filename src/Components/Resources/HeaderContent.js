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
            subText: "Get a know a bit about me! I love to learn and have all kinds of projects I'm working on.",
            pageContent: [
                {
                    id: 0,
                    textHeader: "Who I am",
                    textBody: "I'm Nate Richardson, and I'm passionate about learning and creating \n\nBy day, I work in IT support. In the evenings, I work to become the best developer I can be."
                },
                {
                    id: 1,
                    textHeader: "Why I want to develop",
                    textBody: "As someone with a great deal of passion around creativity, I love that programming allows me to take nearly any idea I have and make it a reality. \n\nIn addition to what it allows me to accomplish, I enjoy the process as a whole. I love problem solving, so of course I love to code."
                },
                {
                    id: 2,
                    textHeader: "What I know",
                    textBody: "My primary focus has been web development. Although I have also started building native VR apps for android devices. \n\nFeel free to click over to the Technologies page and get a feel for the technologies I have a experience with.",
                    buttonTo: '/tech',
                    buttonText: 'Technologies'
                },
                {
                    id: 3,
                    textHeader: "Where I'm headed",
                    textBody: "In the future, I hope to begin working in earnest on VR and AR applications.  \n\nI believe that AR tech is going to revolutionanize our society in unimaginable ways. I want to be as close to the forefront of that revolution as possible."
                }
            ]
        }},
        {home: {
            id: 2,
            headerTitle: "Hey, I'm Nate.",
            subText: 'Web designer and developer from St. Louis, MO. I create custom websites to help companies to succeed online.',
            buttonText: "My Projects",
            buttonLinkPath: "/projects",
            imgSrc: "https://i.imgur.com/C855ZpV.jpg"
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
                    textBody: "Most of my web development has used React libraries. I find its lack of bias towards project structure allows me to explore many different approaches and solutions to various problems."
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