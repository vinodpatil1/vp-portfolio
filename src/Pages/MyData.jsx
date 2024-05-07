

{/********Hero page data********/}

const heropageData = [
     {
        id : 0,
        subtitle : "Hello, i'm",
        name : "Vinod Patil",
        design : "Web Developer",
        content : "We denounce with righteous indignation dislike demoralized by the charms of pleasure",
        experience : [
            {
                id : 0,
                exptitle : "7+",
                exptext : "Years of experience",
            },
            {
                id : 1,
                exptitle : "20+",
                exptext : "Project Complete",
            },
            {
                id : 2,
                exptitle : "95%",
                exptext : "Client Satisfactions",
            }
        ],

     }
];


{/********About page data********/}

const aboutPageData = [
    {
        id : 0,
        subtitle : "About Me",
        professional : "Professional",
        problem : "Problem Solutions",
        digital : "For Digital Products",
        content : "7+ Years of experience in design and development of web, Usability analysis development of web.To pursue a career where I can use my skills and work in a challenging environment which will provide me opportunities for learning and growth.",
        language : ["Web Development","App Design ","E-Learning Development","Adobe Photoshop"],
        imgUrl : "images/vinodpatil_about.png",
        emailTag : "Email Us",
        phoneTag : "Make a Call",
        email : "vinod.patil377@gmail.com",
        phone : "+91 9112391531",
        experience : "Experience Developer"
    },
   
];


{/********Resume page data********/}

const resumeContent = [
    {
        id : 0,
        subtitle : "My Resume",
        title1 : "Real",
        title2 : "Problem Solutions",
        title3 : "Experience",
   
    },
];


const ResumeData = [
    {
        id : 0,
        year : "Feb 2024 to Till",
        design : "UI/UX Developer",
        companyname : "Self-Employed",
   
    },
    {
        id : 1,
        year : "Feb 2018 - May 2022",
        design : "Sr. Web Developer",
        companyname : "Aptara New Media Pvt Ltd",
   
    },

    {
        id : 2,
        year : "June 2022 - Feb 2024",
        design : "Web Developer",
        companyname : "Ayansis Solution Pvt Ltd",
   
    },
    {
        id : 3,
        year : "Feb 2015 - Jan 2018",
        design : "Sr, Web Designer",
        companyname : "Web Developers Pune",
   
    },

   

];


{/********Skills page data********/}

const skillPageData = [
    {
        id : 0,
        subtitle : "My Skills",
        title1 : "Let's Explore Popular ",
        title2 : "Skills & Experience",
        content : "Strong understanding of cross-browser compatibility, with a strong knowledge of all browsers.Ability to work independently within a team and follow through with priority tasks.Creative with requirements set forth by the other developers through the stages of design, development, QA, launch,and maintenance.",

        skillcard : [

                {
                    id : 0,
                    imgUrl : "images/figma.png",
                    title : "Figma",
                },
                {
                    id : 1,
                    imgUrl : "images/photoshop.png",
                    title : "Photoshop",
                },
                {
                    id : 3,
                    imgUrl : "images/wordpress.png",
                    title : "Wordpress",
                },
                {
                    id : 4,
                    imgUrl : "images/react.png",
                    title : "React",
                },
                {
                    id : 5,
                    imgUrl : "images/chkraUI.png",
                    title : "Chakra Ui",
                },
                {
                    id : 6,
                    imgUrl : "images/bootstrap.png",
                    title : "Bootstrap",
                },
                {
                    id : 7,
                    imgUrl : "images/html5.png",
                    title : "HTML5",
                },
                {
                    id : 8,
                    imgUrl : "images/css3.png",
                    title : "CSS3",
                },
                {
                    id : 9,
                    imgUrl : "images/javascript.png",
                    title : "Javascript",
                },
                {
                    id : 10,
                    imgUrl : "images/mui.png",
                    title : "Material Ui",
                },
                {
                    id : 11,
                    imgUrl : "images/jquery.png",
                    title : "Jquery",
                },
                {
                    id : 12,
                    imgUrl : "images/talwind.png",
                    title : "Talwind Css",
                },
                {
                    id : 13,
                    imgUrl : "images/reactbootstrap.png",
                    title : "React Bootstrap",
                },
                {
                    id : 14,
                    imgUrl : "images/responsiveDesign.png",
                    title : "Responsive Design",
                },
                {
                    id : 15,
                    imgUrl : "images/ts.png",
                    title : "TypeScript",
                },
                {
                    id : 16,
                    imgUrl : "images/framer-motion-animation.png",
                    title : "Framer Animation",
                },
                {
                    id : 17,
                    imgUrl : "images/github.png",
                    title : "Github",
                }
           ],
    }
];


{/******** Works page data********/}

const workPageData = [
    {
        id : 0,
        subtitle : "Latest Works",
        title1 : "Explore My Popular",
        title2 : "Projects",
   
        projects : [

                {
                    id : 0,
                    imgUrl : "images/app1.png",
                    subtitles : "App Design",
                    protitle : "Mobile Application Design",
                    content : "A prototype is a product built to test ideas and changes until it resembles the final product. I can mock-up every feature and interaction in your prototype as in your fully Design product, check if idea works, and verify the overall user-experience (UX) strategy.",
                    btnText : "Read More",
                   
                    
                },
                {
                    id : 1,
                    imgUrl : "images/web1.png",
                    subtitles : "Website Design",
                    protitle : "Website Markeup Design",
                    content : "I have create to psd file in figma and photoshop and convert to html css responsive web site with bootstrap. UI/UX developer with expert knowledge in coding standards, semantic markups, cross browser support, progressive enhancement, W3C Compliances and web accessibility. Good in performance tuning and site optimization techniques.",
                    btnText : "Read More",
                    
                },
         
           ],
    }
];

{/********Contact page data********/}

const contactPageData = [
    {
        id : 0,
        subtitle : "Get In Touch",
        professional : "Let's Talk Me",
        content : "I hereby declare that all above statements are true, complete and correct to the best of my knowledge and belief.",
        listItems : ["7+ Years Of Experience","Professional UI/UX Developer Web Developer ","Mobile Apps Design","Custom Design And Responsive Projects"]
    },
   
];

export default ResumeData;

export {aboutPageData,resumeContent,heropageData,skillPageData,workPageData,contactPageData};