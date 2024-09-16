document.getElementById("jobForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const company = document.getElementById("company").value;
  const description = document.getElementById("description").value;
  const resultDiv = document.getElementById("result");

  const companyError = document.getElementById("companyError");
  const descriptionError = document.getElementById("descriptionError");

  //clear previous error messages
  companyError.textContent = "";
  descriptionError.textContent = "";

  let isValid = true;

  if (company.trim() === "") {
    companyError.textContent = "Company is required";
    isValid = false;
  }

  if (description.trim() === "") {
    descriptionError.textContent = "Description is required";
    isValid = false;
  }

  if (!isValid) return;

  const result = verifyJobPosting({ company, description });
  resultDiv.textContent = result;
});

function verifyJobPosting(jobPosting) {
  if (!verifyCompany(jobPosting.company)) {
    return "Company not verified. Be cautious.";
  }

  if (verifyJobDescription(jobPosting.description)) {
    return "Job description contains suspicious phrases.";
  }

  return "Job posting seems legitimate!";
}

function verifyCompany(companyName) {
  const trustedCompanies = ["Google", "Microsoft", "Amazon"];
  return trustedCompanies.includes(companyName);
}

function verifyJobDescription(description) {
  const suspiciousPhrases = [
    "work from home",
    "quick money",
    "no experience required",
  ];
  return suspiciousPhrases.some((phrase) => description.includes(phrase));
}
