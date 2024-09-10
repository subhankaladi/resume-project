var _a, _b;
(_a = document.getElementById("photo")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", function (event) {
    var _a;
    var fileInput = event.target;
    var file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var previewImg = document.getElementById("profile-photo-preview");
            previewImg.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Set the preview image source
        };
        reader.readAsDataURL(file); // Convert the uploaded file to a base64 string
    }
});
(_b = document.getElementById("resume-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (event) {
    event.preventDefault();
    // Retrieving values from the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("Phone").value;
    var experience = document.getElementById("experience-text").value;
    var education = document.getElementById("education-text").value;
    var skill1 = document.getElementById("skill1").value;
    var skill2 = document.getElementById("skill2").value;
    var skill3 = document.getElementById("skill3").value;
    // Get the uploaded photo from the preview
    var profilePhotoSrc = document.getElementById("profile-photo-preview").src;
    // Generate resume output in the same layout as the form
    var resumeOutput = "\n        <div class=\"photo-section\">\n            <img src=\"".concat(profilePhotoSrc, "\" alt=\"Profile Photo\" class=\"profile-photo\">\n        </div>\n        <fieldset id=\"personal\">\n            <legend id=\"pi\">Personal-Information</legend>\n            <label>Name: </label><input type=\"text\" value=\"").concat(name, "\" readonly><br>\n            <label>Email: </label><input type=\"email\" value=\"").concat(email, "\" readonly><br>\n            <label>Phone: </label><input type=\"tel\" value=\"").concat(phone, "\" readonly><br>\n        </fieldset>\n        <fieldset id=\"experience\">\n            <legend id=\"pi\">Experience</legend>\n            <textarea readonly rows=\"5\">").concat(experience, "</textarea>\n        </fieldset>\n        <fieldset id=\"education\">\n            <legend id=\"pi\">Education</legend>\n            <textarea readonly rows=\"5\">").concat(education, "</textarea>\n        </fieldset>\n        <fieldset id=\"skills\">\n            <legend id=\"pi\">Skills</legend>\n            <ul>\n                <li><input type=\"text\" value=\"").concat(skill1, "\" readonly></li>\n                <li><input type=\"text\" value=\"").concat(skill2, "\" readonly></li>\n                <li><input type=\"text\" value=\"").concat(skill3, "\" readonly></li>\n            </ul>\n        </fieldset>\n    ");
    // Displaying the resume in the generated format
    var outputDiv = document.getElementById("resume-output");
    if (outputDiv) {
        outputDiv.innerHTML = resumeOutput;
    }
});
