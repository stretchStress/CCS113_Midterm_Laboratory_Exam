import React from "react";
import Layout from "./layout";

const EnrollmentProcedure = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h1 className="text-center text-primary fw-bold mb-4">Enrollment Procedure</h1>

        {/* Section for Senior High School and College Applicants */}
        <div className="card shadow-sm mb-5">
          <div className="card-body">
            <h2 className="text-primary fw-bold">For Senior High School and College Applicants</h2>
            <p className="text-muted">(New students and transferees)</p>
            <ol className="mb-4">
              <li>
                Register via{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeiiNo1_XRd9zEcEFs-e3O-Fqfq6gOtjfBo16z9c9SkVk5q7A/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  this link
                </a>.
              </li>
              <li>Download and print the application form. This will serve as your test permit.</li>
              <li>Bring the additional documents listed below on the date of examination:</li>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">
                  <strong>For Cabuyeños (any of the following):</strong>
                  <ul>
                    <li>Voter’s ID</li>
                    <li>Voter’s Certification</li>
                    <li>Voter’s acknowledgment receipt</li>
                    <li>Parent’s voter’s ID or voter’s certificate</li>
                  </ul>
                </li>
                <li className="list-group-item">
                  <strong>For Non-Cabuyeños:</strong> Certification of ranking (Top 10 in the class)
                </li>
              </ul>
              <li>An examination fee worth P100.00 will be collected by the proctor during the orientation.</li>
              <li>
                List of passers will be released through the Pamantasan ng Cabuyao’s Official Facebook Page.
              </li>
            </ol>
          </div>
        </div>

        {/* Section for Graduate School Applicants */}
        <div className="card shadow-sm mb-5">
          <div className="card-body">
            <h2 className="text-primary fw-bold">For Graduate School Applicants</h2>
            <ol className="mb-4">
              <li>Fill out the Graduate School Application Form from the Admissions Office.</li>
              <li>
                Present the filled-out application form and other requirements to the Dean of the Graduate
                School for interview and evaluation.
              </li>
              <li>
                After the interview, go to the Admissions Office for the scheduling of Admission Test.
              </li>
              <li>
                Once the admission test has been administered and evaluated, the applicant will be informed
                via SMS regarding the evaluation and details of the enrollment process.
              </li>
            </ol>
          </div>
        </div>

        {/* Additional Notes Section */}
        <div className="alert alert-info shadow-sm">
          <h5 className="fw-bold text-primary">Important Notes:</h5>
          <p>
            Please ensure that all required documents are complete before proceeding with the enrollment
            process. For further inquiries, contact the Admissions Office or visit the official website of
            Pamantasan ng Cabuyao.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default EnrollmentProcedure;