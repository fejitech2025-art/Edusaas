import chartImage from "../assets/image.png";
import {
  Users,
  BookOpen,
  Wallet,
  GraduationCap,
} from "lucide-react";

const schools = [
  "Greenfield Academy",
  "Kings College",
  "Calvary Center",
  "Oakridge Prep",
];

const features = [
  {
    icon: Users,
    title: "Student Management",
    text: "Handle admissions, profiles, attendance and records for every student in one place.",
  },
  {
    icon: BookOpen,
    title: "Academics",
    text: "Plan timetables, record scores and publish report cards without the paperwork.",
  },
  {
    icon: Wallet,
    title: "Finance & Fees",
    text: "Send invoices, track payments and see who still owes fees at a glance.",
  },
];

export default function Home() {
  return (
    <div id="top">

      <main>
        {/* Hero */}
        <section className="hero container">
          <h1>
            Run Your Entire School <br />
            <span>From One Platform</span>
          </h1>

          <p>
            Manage students, staff, timetables, fees, academics, communication
            and reports from a single intelligent platform designed to make
            school administration simple.
          </p>

          <div className="hero-buttons">
            <a href="#start" className="btn">
              Start Free Trial
            </a>

            <a href="#demo" className="btn outline">
              Book Demo
            </a>
          </div>

          <div className="hero-image">
            <img
              src={chartImage}
              alt="Edusaas school management dashboard"
            />
          </div>
        </section>

        {/* Trusted Schools */}
        <section className="trusted">
          <div className="container">
            <p>Trusted by thousands of schools across the country</p>

            <ul>
              {schools.map((name) => (
                <li key={name}>
                  <GraduationCap size={16} />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="features container" id="features">
          <h2>Everything you need to run your school</h2>

          <p className="sub">
            A complete education suite built to handle every part of school
            management.
          </p>

          <div className="cards">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="card" key={title}>
                <span className="card-icon">
                  <Icon size={18} />
                </span>

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
