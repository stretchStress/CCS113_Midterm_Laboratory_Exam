import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../component/layout';

const AdmissionPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h1 className="mb-4 text-center text-primary fw-bold">Admission Requirements</h1>

            <div className="card shadow-sm mb-5">
              <div className="card-body">
                <h4 className="text-primary">College First Year</h4>
                <p>
                  Applicant shall accomplish the Application Form (<strong>PNC:SDAS-FO-34</strong>). Application fee is covered by Republic Act 10931, known as the <em>Universal Access to Quality Tertiary Education Act</em>.
                </p>

                <h5 className="mt-4">Admission Requirements:</h5>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item">Original Copy of Form 138 (High School Card)</li>
                  <li className="list-group-item">Original Copy of Form 137-A (Permanent Record)</li>
                  <li className="list-group-item">Original Copy of Certificate of Good Moral Character signed by the HS principal/Guidance Counselor</li>
                  <li className="list-group-item">Original Copy of PSA Birth Certificate</li>
                  <li className="list-group-item">For Female married applicant, submit original of PSA authenticated Marriage Contract</li>
                  <li className="list-group-item">Voter’s ID or COMELEC Voter’s Certificate</li>
                  <li className="list-group-item">Two pieces 2×2 colored pictures with white background and nametag</li>
                </ul>

                <p className="text-danger">
                  <strong>Note:</strong> In cases where grades are not yet available, a notarized Affidavit of Undertaking (<strong>PNC:SDAS-FO-35</strong>) shall be submitted by the student prior to enrolment. Admission or transfer credentials shall be submitted within the semester. Otherwise, enrolment in the succeeding term will not be permitted.
                </p>
              </div>
            </div>

            <div className="card shadow-sm mb-5">
              <div className="card-body">
                <h5 className="text-primary">Additional Requirements for Board Programs</h5>
                <p>
                  Applicant shall meet the specific requirements for board programs such as <strong>Accountancy, Education, Engineering, Nursing, and Psychology</strong>.
                </p>
              </div>
            </div>

            <div className="card shadow-sm mb-5">
              <div className="card-body">
                <h5 className="text-primary">Engineering Program Requirements</h5>
                <div className="border p-3">
                  <h6 className="mt-4">New First Year</h6>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item"><strong>STEM Graduate:</strong>
                      <ul>
                        <li>Take Test administered by the Guidance & Counseling Department</li>
                        <li>90% GWA with no grades lower than 85% in all courses</li>
                      </ul>
                    </li>
                    <li className="list-group-item"><strong>Non-STEM Graduate:</strong>
                      <ul>
                        <li>Take Test administered by the Guidance & Counseling Department</li>
                        <li>95% GWA with no grades lower than 85% in all courses</li>
                      </ul>
                    </li>
                  </ul>

                  <h6 className="mt-4">Transferees (From any program)</h6>
                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item">Take Test administered by the Guidance & Counseling Department</li>
                    <li className="list-group-item">95% GWA with no grades lower than 85% in all courses</li>
                    <li className="list-group-item">Qualifying Exam – passed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card shadow-sm mb-5">
              <div className="card-body">
                <h5 className="text-primary">Graduate School</h5>
                <p>
                  Applicant shall accomplish the application form (<strong>PNC:SDAS-FO-34</strong>).
                </p>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item">Original Copy of Official Transcript of Records (Original)</li>
                  <li className="list-group-item">Two (2) letters of recommendation; one from the employer and the other from a professor or a respectable member of the community. If the applicant is not working at the time of the application, two letters from the former professors will suffice.</li>
                  <li className="list-group-item">Two pieces 2×2 colored pictures with white background and nametag</li>
                  <li className="list-group-item">Original Copy of PSA Birth Certificate</li>
                  <li className="list-group-item">For Female married applicant, submit original of PSA authenticated Marriage Contract</li>
                  <li className="list-group-item">For transferees, applicants must submit Certificate of Eligibility to Transfer or Transfer Credentials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdmissionPage;
