import { Component, OnInit } from '@angular/core';
import { ResourceCategory } from '../interfaces/resource-category';

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  readonly categories: ResourceCategory[] = [
    {
      id: 1,
      name: "Communities",
      resources: [
        {
          photo: "communities/umwics.png",
          title: "UM WICS",
          link: "https://umwics.vercel.app/",
          description: "UM WICS (Women in Computer Science) are a group of University of Manitoba students who support women in technology."
        },
        {
          photo: "communities/devclub.jpg",
          title: ".devClub",
          link: "https://umsu.ca/student-clubs-associations/student-clubs/devclub/",
          description: ".devClub’s goal is to provide students of the University of Manitoba an opportunity to gain some coding experience with various engines, software, and consoles."
        },
        {
          photo: "communities/umcp.jpg",
          title: "University of Manitoba Competitive Programming (UMCP)",
          link: "https://umsu.ca/student-clubs-associations/student-clubs/university-of-manitoba-competitve-programming-umcp/",
          description: "UMCP’s goal is to help students at the University of Manitoba develop competitive programming teams and provide opportunities for them to train, collaborate and compete."
        },
        {
          photo: "communities/ummc.jpg",
          title: "University of Manitoba Minecraft Club (UMMC)",
          link: "https://umsu.ca/student-clubs-associations/student-clubs/university-of-manitoba-minecraft-club-ummc/",
          description: "UMMC exists to bring together students interested in the sandbox video game Minecraft, to organize community building events and provide a forum for community engagement."
        },
        {
          title: "UM Commons - Student Communities",
          link: "https://umanitoba.ca/current-students/first-year/um-commons/student-communities",
          description: "See more communities here at University of Manitoba via the University's website."
        },
        {
          title: "UMSU - Student Clubs",
          link: "https://umsu.ca/student-clubs-associations/student-clubs/",
          description: "See more student clubs here at University of Manitoba via UMSU's website."
        },
      ]
    },
    {
      id: 2,
      name: "Learning CS",
      resources: [
        {
          title: "W3Schools",
          link: "https://www.w3schools.com/",
          description: "W3Schools provides free tutorials and exercises for most programming languages used on the web."
        },
        {
          title: "Khan Academy",
          link: "https://www.khanacademy.org/",
          description: "Khan Academy offers free educational videos and exercises in a broad range of fields."
        },
        {
          title: "MDN Web Docs' Learn Web Development",
          link: "https://developer.mozilla.org/en-US/docs/Learn",
          description: "Mozilla's documentation repository offers a structured beginner's guide to learning web development."
        },
        {
          title: "Teach Yourself Computer Science",
          link: "https://teachyourselfcs.com/",
          description: "This website offers suggestions for how to self-learn various topics within computer science."
        },
        {
          title: "r/learnprogramming's FAQ",
          link: "https://www.reddit.com/r/learnprogramming/wiki/faq",
          description: "This subreddit's FAQ has answers to common questions that students in CS are bound to have."
        },
        {
          title: "freeCodeCamp",
          link: "https://www.freecodecamp.org/",
          description: "freeCodeCamp provides free videos, articles, and projects to work through to learn to code."
        },
        {
          title: "The Odin Project",
          link: "https://www.theodinproject.com/",
          description: "The Odin Project is a free open source computer science curriculum which offers projects to gain experience from."
        },
        {
          title: "Flexbox Froggy",
          link: "https://flexboxfroggy.com/",
          description: "Flexbox Froggy is a straightforward free game where you can learn the essentials of using CSS flex box."
        },
      ]
    },
    {
      id: 3,
      name: "U of M Resources",
      resources: [
        {
          title: "U of M JUMP Portal",
          link: "https://jump.portal.umanitoba.ca/",
          description: "Contains links to UM Webmail, Aurora, UM Achieve (a degree auditing tool), and various other student resources, as well as info on required books for your current and upcoming classes."
        },
        {
          title: "U of M Important Dates",
          link: "https://umanitoba.ca/registrar/important-dates-deadlines",
          description: "See important deadlines, holidays, and other dates that are relevant to University of Manitoba students."
        },
        {
          title: "Student Counseling Center",
          link: "https://umanitoba.ca/student-supports/counselling-resources-students",
          description: "The Student Counselling Centre (SCC) offers students a variety of counselling support including workshops, groups and individual counselling."
        },
        {
          title: "U of M Science Academic Advisors",
          link: "https://sci.umanitoba.ca/students/undergraduate-students/academic-advisors/",
          description: "Get advice from the University of Manitoba’s Science Academic Advisors on your program plan, graduation, and more."
        },
        {
          title: "U of M Computer Science Courses",
          link: "https://sci.umanitoba.ca/cs/courses-2/",
          description: "See a list of all of the Computer Science courses taught at the University of Manitoba and the semesters they are taught in."
        },
        {
          title: "U of M Computer Science Undergraduate Requirements",
          link: "https://sci.umanitoba.ca/cs/undergraduate-programs/",
          description: "This page contains a list of all the requirements (e.g., courses, credit hours) for the honours, major, minor, and joint programs."
        },
        {
          title: "U of M Libraries",
          link: "https://umanitoba.ca/libraries/",
          description: "Use the University of Manitoba Libraries search functionality to access peer-reviewed articles, books, and more."
        },
        {
          title: "U of M’s Citing and Writing Information",
          link: "https://libguides.lib.umanitoba.ca/citingandwriting",
          description: "This page contains links on how to cite and reference books, articles, etc. in multiple formats like APA or Chicago."
        },
        {
          title: "U of M's Expectations for Individual Work in Computer Science",
          link: "https://sci.umanitoba.ca/cs/expectations/",
          description: "The Department of Computer Science provides this page to guide students on what they expect and what constitutes academic misconduct."
        },
        {
          title: "Nimbus Tutoring",
          link: "https://nimbuslearning.com/get-the-app/",
          description: "The SSA provides a peer tutoring service through the Nimbus Tutoring platform."
        },
        {
          title: "U of M Career Services’ Resume Workbook ",
          link: "https://umanitoba.ca/student/careerservices/media/Resume.pdf",
          description: "Get useful advice on how to craft the perfect resume."
        },
        {
          title: "U of M Career Services’ Cover Letter Workbook ",
          link: "https://umanitoba.ca/student/careerservices/media/CoverLetter.pdf",
          description: "Learn how to structure and write a cover letter."
        },
        {
          title: "UM Bookstore",
          link: "https://umanitoba.ca/campus/bookstore/shoponline.html",
          description: "The University’s online bookstore to purchase course textbooks."
        }
      ]
    },
    {
      id: 4,
      name: "Student Perks",
      resources: [
        {
          title: "GitHub Student Developer Pack",
          link: "https://education.github.com/pack",
          description: "Sign up for the Student Developer Pack to get access to a ton of free and discounted software and services useful to students."
        },
        {
          title: "JetBrains Educational License",
          link: "https://www.jetbrains.com/community/education/#students",
          description: "Get free educational access to JetBrains applications like IntelliJ IDEA, CLion, PyCharm, etc."
        },
        {
          title: "Office 365 for Students",
          link: "https://umanitoba.ca/ist/email/2397.html",
          description: "Get free access to all of the MS Office applications and 1TB of OneDrive cloud storage."
        },
        {
          title: "Figma",
          link: "https://www.figma.com/education/",
          description: "Verify your student status to get the Education plan, and get all the paid features of Figma, a UI/UX design application."
        },
        {
          title: "Namecheap",
          link: "https://nc.me/",
          description: "Get a free domain name through Namecheap’s free student bundle."
        },
        {
          title: "Unity Student Plan",
          link: "https://store.unity.com/academic/unity-student",
          description: "Sign up and get access to free assets, cloud services, and collaboration tools for Unity."
        },
        {
          title: "Autodesk Educational Access",
          link: "https://www.autodesk.com/education/edu-software/overview",
          description: "Sign up for free educational access to Autodesk applications like Maya, AutoCAD, 3ds Max, and more."
        },
        {
          title: "Unidays",
          link: "https://www.myunidays.com/CA/en-CA",
          description: "Register for free student discounts to many online stores."
        },
        {
          title: "Adobe Creative Cloud for Education",
          link: "https://www.adobe.com/ca/creativecloud/buy/students.html",
          description: "Students save 60% on Creative Cloud, Adobe’s software subscription that includes Photoshop, Illustrator, Acrobat Pro, Premiere Pro, etc."
        },
        {
          title: "SPC Card",
          link: "https://www.spccard.ca/",
          description: "Register and purchase an SPC Card membership to get discounts and promo codes for various online and in-person stores."
        },
        {
          title: "Spotify",
          link: "https://www.spotify.com/ca-en/student/",
          description: "Get half off on Spotify’s monthly fees with their student plan."
        },
        {
          title: "Amazon Prime Student",
          link: "https://www.amazon.ca/gp/student/signup",
          description: "Get half-off on Amazon Prime as a student."
        }
      ]
    },
    // { id: 5, name: "FAQ" } // TODO: Compile FAQ to put here
  ];

  currentCategory: ResourceCategory = this.categories[0];

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(category: ResourceCategory) {
    this.currentCategory = category;
    console.log(this.currentCategory)
  }
}
