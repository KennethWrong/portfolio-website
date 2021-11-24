const content = [
    {
        index:1,
        title: 'Merck QR Code Label Scanner',
        date_from: '23/08/2021',
        date_to: 'Current',
        link_to: 'https://github.com/KennethWrong/Merck-label-dashboard',
        content: `
        Solved a labelling issue within Merck facilities by creating a web application that has an inhouse qr-code generator and qr-code scanning function for vile and sample lookup.
        Designed a platform for scientists to batch upload .csv files containing legacy sample data and parse it and store into S3 and pipeline files through databricks for data visualization.
        Integrated AWS Redshift as rds for project and AWS S3 bucket for data redundancy for Merck vile csv files.`
    },
    {
        index:2,
        title: 'ZenSocial',
        date_from: '28/10/2021',
        date_to: 'Current',
        link_to: 'https://github.com/KennethWrong/ZenSocial',
        content: `A project for my Software Engineering Tools class where we had to create a reddit clone. My teammate and I worked on it and it is still in progress,
        so far we have used React, daisyUI and Tailwind CSS on the front-end and Flask on the backend. We hope to migrate our local SQLite3 database onto a online RDS.`
    },
    {
        index:3,
        title: 'KChat',
        date_from: '28/7/2021',
        date_to: '19/8/2021',
        link_to:'https://github.com/KennethWrong/KennethsChatRoom',
        content: `A Capstone project I did after completing the full-stack open 2021 Bootcamp. It is a real-time chat application, implemented using Socket.io. The front-end
        was build with React, Bootstrap and SASS, and the backend was build with node.js and MongoDB.  `
    },
    {
        index:4,
        title: 'GROW',
        date_from: '03/10/2021',
        link_to:'https://grow.oatscenter.org/',
        date_to: 'Current',
        content: `This is the web application that I am currently working on as a part-time software developer in Purdue Agriculture. It is a web application for farmers to monitor
        their crops, get information on crop yield, crop quality etc...`
    },
    {
        index:5,
        title: 'EVE/ Alco Holdings Limited',
        date_from: '14/06/2021',
        date_to: '21/07/2021',
        link_to:'',
        content: `This is a website that I made during my web developer Internship in Alco Holdings, Hong Kong. I made websites for the company to display their newest product. An electric car.
        Unfortuantely, the project has been disbanded and the website has been taken down. `
    }
]

export const array = content;