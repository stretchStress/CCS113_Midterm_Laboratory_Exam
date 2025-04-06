import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "./layout";

const Academic = () => {
  const { department } = useParams(); // Extract the department parameter
  const colleges = [
    {
      id: "arts-and-sciences",
      name: "College of Arts and Sciences",
      description: "College of Arts and Sciences holds in the ideals of learning by doing, making connections, and creating a community of progress that promotes social awareness and involvement by introducing students to advanced academic pursuits in promoting globally competitive professionals in the field of Psychology and in the programs for liberal arts education in the future.",
      programs: ["Bachelor of Science in Psychology"],
      image: "/images/College of Arts and Sciences.png", // Add image path
    },
    {
      id: "business-accountancy",
      name: "College of Business, Accountancy and Administration",
      description: "Fostering excellence in business education, the College of Business, Accountancy, and Administration (CBAA) empowers its students with administrative competencies in the fields of business, accounting, and administration to enable them to contribute to national development.",
      programs: [
        "Bachelor of Science in Accountancy",
        "Bachelor of Science in Business Administration Major in Financial Management",
        "Bachelor of Science in Business Administration Major in Marketing Management",
      ],
      image: "/images/College of Business, Accountancy and Administration.png", // Add image path
    },
    {
      id: "computing-studies",
      name: "College of Computing Studies",
      description: "The College of Computing Studies (CCS) offers undergraduate programs in the fields of Computer Science, Information Systems, and Information Technology. It aims to produce value-driven and innovative computing professionals equipped with knowledge and skills needed in the IT industry, particularly with specializations in web computing, application development, service management, multimedia, mobile development, game development, data science, and artificial intelligence.",
      programs: [
        "Bachelor of Science in Information Technology",
        "Bachelor of Science in Computer Science",
      ],
      image: "/images/College of Computing Studies.png", // Add image path
    },
    {
      id: "education",
      name: "College of Education",
      description: "The College of Education aspires to be a leading institution in teacher education within the region, producing educators who are competent, compassionate, and committed to lifelong learning. Grounded in the values of integrity, service, and excellence, the College prepares future teachers equipped with 21st-century skills and a deep understanding of pedagogy, curriculum design, inclusive education, and educational leadership.",
      programs: [
        "Bachelor of Elementary Education",
        "Bachelor of Secondary Education",
      ],
      image: "/images/College of Education.jpg", // Add image path
    },
    {
      id: "engineering",
      name: "College of Engineering",
      description: "The College of Engineering (COE) envisions itself as a frontrunner of engineering education in the region, producing professionals in the fields of Computer Engineering, Electronics Engineering, and Industrial Engineering. With commitment to community development and nation-building, the College develops competitive and value-laden future engineers specializing in artificial intelligence, production engineering, software development, telecommunication, microelectronics, and power electronics.",
      programs: [
        "Bachelor of Science in Computer Engineering",
        "Bachelor of Science in Electronics Engineering",
        "Bachelor of Science in Industrial Engineering",
      ],
      image: "/images/College of Engineering.png", // Add image path
    },
    {
      id: "health-allied-sciences",
      name: "College of Health and Allied Sciences",
      description: "Equipping students with competence and commitment to preserve humanity as stewards of God’s creation, the College of Health and Allied Sciences (CHAS) aims to produce healthcare professionals in the fields of Nursing and Psychology who can provide effective and efficient health services compliant with global standards.",
      programs: ["Bachelor of Science in Nursing"],
      image: "/images/College of Health and Allied Sciences.png", // Add image path
    },
  ];

  const selectedCollege = colleges.find((college) => college.id === department);

  return (
    <Layout>
      <section className="py-5 text-center bg-light">
        <h1 className="display-4" style={{ color: "#008000", fontWeight: "bold" }}>Academics</h1>
        <p className="lead" style={{ fontSize: "1.2rem", color: "#555" }}>
          Explore our colleges and the programs they offer.
        </p>
      </section>
      <section className="py-5">
        <div className="container">
          {selectedCollege ? (
            <div>
              <div
                className="card shadow-lg"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  className="card-header d-flex align-items-center"
                  style={{
                    backgroundColor: "#008000",
                    color: "white",
                    padding: "1.5rem",
                  }}
                >
                  {selectedCollege.image && (
                    <img
                      src={selectedCollege.image}
                      alt={selectedCollege.name}
                      style={{
                        width: "90px",
                        height: "80px",
                        borderRadius: "50%",
                        marginRight: "1rem",
                      }}
                    />
                  )}
                  <h5 className="mb-0" style={{ fontSize: "1.5rem" }}>
                    {selectedCollege.name}
                  </h5>
                </div>
                <div
                  className="card-body"
                  style={{
                    padding: "2rem",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <p style={{ fontSize: "1.1rem", color: "#333" }}>
                    {selectedCollege.description}
                  </p>
                  <h6
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",
                      color: "#008000",
                    }}
                  >
                    Programs Offered:
                  </h6>
                  <ul
                    className="list-group"
                    style={{
                        fontWeight: "bold",
                        marginTop: "1rem",
                        borderRadius: "5px",
                        paddingLeft: "0",
                    }}
                    >
                    {selectedCollege.programs.map((program, idx) => (
                        <li
                        key={idx}
                        className="list-group-item"
                        style={{
                            display: "inline-block", // Make the border fit the text width
                            backgroundColor: "#ffffff",
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            marginBottom: "0.5rem",
                            marginRight: "0.5rem",
                            padding: "0.3rem 0.8rem", // Adjust padding for a tighter fit
                            transition: "all 0.3s ease",
                            width: "auto", // Ensure the width is only as wide as the content
                        }}
                        >
                        <Link
                            to="/admission"
                            style={{
                            textDecoration: "none",
                            color: "#008000",
                            fontSize: "1rem",
                            }}
                            onMouseOver={(e) => (e.target.style.color = "#005500")}
                            onMouseOut={(e) => (e.target.style.color = "#008000")}
                        >
                            {program}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
              </div>
            </div>
          ) : (
            <p
              className="text-center"
              style={{
                fontSize: "1.2rem",
                color: "#555",
                marginTop: "2rem",
              }}
            >
              Please select a valid college from the dropdown menu.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Academic;