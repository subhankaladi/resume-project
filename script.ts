document.getElementById("photo")?.addEventListener("change", function(event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewImg = document.getElementById("profile-photo-preview") as HTMLImageElement;
            previewImg.src = e.target?.result as string; // Set the preview image source
        };
        reader.readAsDataURL(file); // Convert the uploaded file to a base64 string
    }
});

document.getElementById("resume-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieving values from the form fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("Phone") as HTMLInputElement).value;
    const experience = (document.getElementById("experience-text") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education-text") as HTMLTextAreaElement).value;
    const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
    const skill2 = (document.getElementById("skill2") as HTMLInputElement).value;
    const skill3 = (document.getElementById("skill3") as HTMLInputElement).value;

    // Get the uploaded photo from the preview
    const profilePhotoSrc = (document.getElementById("profile-photo-preview") as HTMLImageElement).src;

    // Generate resume output in the same layout as the form
    const resumeOutput = `
        <div class="photo-section">
            <img src="${profilePhotoSrc}" alt="Profile Photo" class="profile-photo">
        </div>
        <fieldset id="personal">
            <legend id="pi">Personal-Information</legend>
            <label>Name: </label><input type="text" value="${name}" readonly><br>
            <label>Email: </label><input type="email" value="${email}" readonly><br>
            <label>Phone: </label><input type="tel" value="${phone}" readonly><br>
        </fieldset>
        <fieldset id="experience">
            <legend id="pi">Experience</legend>
            <textarea readonly rows="5">${experience}</textarea>
        </fieldset>
        <fieldset id="education">
            <legend id="pi">Education</legend>
            <textarea readonly rows="5">${education}</textarea>
        </fieldset>
        <fieldset id="skills">
            <legend id="pi">Skills</legend>
            <ul>
                <li><input type="text" value="${skill1}" readonly></li>
                <li><input type="text" value="${skill2}" readonly></li>
                <li><input type="text" value="${skill3}" readonly></li>
            </ul>
        </fieldset>
    `;

    // Displaying the resume in the generated format
    const outputDiv = document.getElementById("resume-output");
    if (outputDiv) {
        outputDiv.innerHTML = resumeOutput;
    }
});
