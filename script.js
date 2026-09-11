// Student Directory

// Array containing 20 student objects
const students = [
    {
        name: "Ada Johnson",
        course: "Frontend Development",
        level: "Beginner",
        location: "Lagos",
        shortBio: "I am learning how to build beautiful and responsive websites."
    },

    {
        name: "David Smith",
        course: "Frontend Development",
        level: "Beginner",
        location: "Abuja",
        shortBio: "I enjoy learning and building with code."
    },

    {
        name: "Grace Williams",
        course: "Frontend Development",
        level: "Intermediate",
        location: "Port Harcourt",
        shortBio: "I love creating user-friendly websites and exploring new technologies."
    },

    {
        name: "Daniel Okafor",
        course: "Frontend Development",
        level: "Beginner",
        location: "Enugu",
        shortBio: "I am passionate about technology and excited to start my coding journey."
    },

    {
        name: "Sarah Adams",
        course: "Frontend Development",
        level: "Intermediate",
        location: "Ibadan",
        shortBio: "I enjoy solving problems and turning ideas into websites."
    },

    {
        name: "Michael Brown",
        course: "Frontend Development",
        level: "Beginner",
        location: "Kaduna",
        shortBio: "I am learning HTML, CSS, and JavaScript to become a frontend developer."
    },

    {
        name: "Esther James",
        course: "Frontend Development",
        level: "Beginner",
        location: "Benin City",
        shortBio: "I love technology and hope to build useful digital products."
    },

    {
        name: "John Peter",
        course: "Frontend Development",
        level: "Intermediate",
        location: "Abuja",
        shortBio: "I enjoy writing code and improving my problem-solving skills."
    },

    {
        name: "Blessing Eze",
        course: "Frontend Development",
        level: "Beginner",
        location: "Owerri",
        shortBio: "I am excited to learn how websites work and how to create them."
    },

    {
        name: "Samuel David",
        course: "Frontend Development",
        level: "Intermediate",
        location: "Lagos",
        shortBio: "I want to become a professional frontend developer and build amazing websites."
    },

    {
        name: "Jennifer Clark",
        course: "Frontend Development",
        level: "Beginner",
        location: "Calabar",
        shortBio: "I am passionate about learning technology and developing new skills."
    },

    {
        name: "Emmanuel Obi",
        course: "Frontend Development",
        level: "Beginner",
        location: "Awka",
        shortBio: "I enjoy learning JavaScript and discovering what I can create with code."
    },

    {
        name: "Mercy Williams",
        course: "Frontend Development",
        level: "Intermediate",
        location: "Uyo",
        shortBio: "I love designing websites that are simple, attractive, and easy to use."
    },

    {
        name: "Victor James",
        course: "Frontend Development",
        level: "Beginner",
        location: "Jos",
        shortBio: "I am building my foundation in web development one project at a time."
    },

    {
        name: "Peace Daniel",
        course: "Frontend Development",
        level: "Beginner",
        location: "Abeokuta",
        shortBio: "I am excited about technology and want to build solutions that help people."
    },

    {
        name: "Anthony George",
        course: "Frontend Development",
        level: "Intermediate",
        location: "Warri",
        shortBio: "I enjoy creating interactive webpages and learning new programming concepts."
    },

    {
        name: "Favour Okoro",
        course: "Frontend Development",
        level: "Beginner",
        location: "Asaba",
        shortBio: "I am learning frontend development to create websites and digital experiences."
    },

    {
        name: "Ruth Anderson",
        course: "Frontend Development",
        level: "Intermediate",
        location: "Lagos",
        shortBio: "I enjoy combining creativity and technology to build useful websites."
    },

    {
        name: "Ibrahim Musa",
        course: "Frontend Development",
        level: "Beginner",
        location: "Kano",
        shortBio: "I am developing my coding skills and looking forward to becoming a developer."
    },

    {
        name: "Chiamaka Nwosu",
        course: "Frontend Development",
        level: "Intermediate",
        location: "Abuja",
        shortBio: "I enjoy learning JavaScript and building projects that solve real problems."
    }
];


// Print the number of students to the console
console.log("Number of students:", students.length);


// Access object properties
console.log("First student's name:", students[0].name);
console.log("First student's course:", students[0].course);
console.log("First student's level:", students[0].level);


// Select the student list section from HTML
const studentList = document.getElementById("student-list");


// Loop through the students array
students.forEach(function(student) {

    // Create a student card
    const studentCard = document.createElement("div");

    studentCard.classList.add("student-card");

    // Add student information to the card
    studentCard.innerHTML = `
        <h3>${student.name}</h3>

        <p><strong>Course:</strong> ${student.course}</p>

        <p><strong>Level:</strong> ${student.level}</p>

        <p><strong>Location:</strong> ${student.location}</p>

        <p class="bio">${student.shortBio}</p>
    `;

    // Add the student card to the webpage
    studentList.appendChild(studentCard);
});