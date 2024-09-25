const facultyData = [
    {
        name: "Dr. K. Velmurugan",
        designation: "Professor / Head",
        qualification: "ME,MBA,Ph.D.",
        specialization: "Software Engineering",
        profileLink:"https://a.storyblok.com/f/286279/x/56b0f2e0f5/hod-sir.pdf"
    },
    {
        name: "Dr. G. Nanthakumar",
        designation: "Professor",
        qualification: "ME,Ph.D.",
        specialization: "Mobile Computing",
        profileLink:"https://a.storyblok.com/f/286279/x/28a9867f8c/faculty-profilegn.pdf"
    },
    {
        name: "Dr. T. Vigneswari",
        designation: "Associate Professor",
        qualification: "B.E., M.Tech.,M.E., Ph.D.,",
        specialization: "Distributed Systems, Internet of Things",
        profileLink:"https://a.storyblok.com/f/286279/x/fc2c683d70/faculty-profilee-vg.pdf"
    },
    {
        name: "Mr. R.Arunachalam",
        designation: "Assistant professor",
        qualification: "M.E.",
        specialization: "Software Engineering",
        profileLink:"https://a.storyblok.com/f/286279/x/90f00e909c/arunachalam-sir.pdf"
    },
    {
        name: "Mr. P. Manikanda Prabu",
        designation: "Asst. Professor",
        qualification: "M.E.(Ph.D)",
        specialization: "Compiler Design",
        profileLink:"https://a.storyblok.com/f/286279/x/3e66f53609/manikandaprabu-profile.pdf"
    },
    {
        name: "Ms. K. Karthika",
        designation: "Asst. Professor",
        qualification: "M.E.",
        specialization: "Database Management Systems",
        profileLink:"https://a.storyblok.com/f/286279/x/81cd970da1/karthika-k-faculty-profile.pdf"
    },
    {
        name: "Mr. K. Pazhanivel	",
        designation: "Asst. Professorr",
        qualification: "M.E.",
        specialization: "SComputer Networkss",
        profileLink:"https://a.storyblok.com/f/286279/x/023448cbdf/k-pazhanivel-profile.pdf"
    },
    {
        name: "Mr. P. Dinesh",
        designation: "Asst. Professor",
        qualification: "M.E.",
        specialization: "Design and Analysis of Algorithms",
        profileLink:"https://a.storyblok.com/f/286279/x/9808f74ad9/dinesh-p-profile-1-19-7-2024.pdf"
    },
    {
        name: "Mrs. G. Kalaiselvi",
        designation: "Asst. Professor",
        qualification: "M.E.(Ph.D)",
        specialization: "Computer Architecture",
        profileLink:"https://a.storyblok.com/f/286279/x/5ad323e10b/faculty-profile_gk.pdf"
    },
    {
        name: "Mrs. P. Elakkiya",
        designation: "Asst. Professor",
        qualification: "M.E.",
        specialization: "Python Programming",
        profileLink:"https://a.storyblok.com/f/286279/x/30c47f2e8f/pe_faculty-profile.pdf"
    },
    {
        name: "Mrs. K. Nithiya",
        designation: "Asst. Professor	",
        qualification: "M.E.",
        specialization: "Python Programming",
        profileLink:"https://a.storyblok.com/f/286279/x/f733ba9ee2/nithya.pdf"
    },
    {
        name: "Mrs. J. B. Pradeepa",
        designation: "Asst. Professor",
        qualification: "M.Tech",
        specialization: "Java Programming",
        profileLink:"https://a.storyblok.com/f/286279/x/43c154d8b2/pradeepa-mam.pdf"
    },
    {
        name: "Mrs.K.Suganthi",
        designation: "Asst.Professor",
        qualification: "M.Tech.(Ph.D)",
        specialization: "Networks Security",
        profileLink:"https://a.storyblok.com/f/286279/x/b7b1398c7c/ks_faculty_profile-1.pdf"
    }
];
function displayFaculty() {
    const facultyList = document.getElementById('faculty-list');
    facultyData.forEach(faculty => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('faculty-member');
        memberDiv.innerHTML = `
            <h3>${faculty.name}</h3>
            <div class="member-details"><strong>Designation:</strong> ${faculty.designation}</div>
            <div class="member-details"><strong>Qualification:</strong> ${faculty.qualification}</div>
            <div class="member-details"><strong>Specialization:</strong> ${faculty.specialization}</div>
            <a class="button" href="${faculty.profileLink}">View Profile</a>
        `;
        facultyList.appendChild(memberDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayFaculty);
