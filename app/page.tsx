import { Github, Linkedin } from 'lucide-react'



const projects = [
  {
    title: 'DeviceIQ',
    description: 'Helps mobile teams prioritize and orchestrate testing across real-world devices based on actual user behavior.',
    github: 'https://github.com/scott-mercer/deviceiq',
    tags: ['Python', 'TypeScript', 'Node.js', 'React'],
  },
  {
    title: 'MATRIX & Appium CI/CD',
    description: 'Plug Appium into your CI/CD workflow with a Matrix Security Assessment.',
    github: 'https://gitlab.com/matrix203008/appium-ci-example',
    tags: ['Python', 'Bash', 'Appium', 'CI/CD'],
  },
  {
    title: 'Sales Demo Helper App',
    description: 'Internal tool to prep demos fast with user presets.',
    github: 'https://github.com/scott-mercer',
    tags: ['TypeScript', 'Node.js', 'Corellium'],
  },
  {
    title: 'Personal Website & Portfolio',
    description: 'Website to display my work and skills.',
    github: 'https://github.com/scott-mercer/Personal-Website',
    tags: ['TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS'],
  }
]

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen px-6 py-24 max-w-6xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="space-y-6 text-center">
        <img
          src="/profile.png"
          alt="Scott Mercer"
          className="w-28 h-28 mx-auto rounded-full border border-gray-300"
        />

        <h1 className="text-5xl font-bold tracking-tight">Scott Mercer</h1>

        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          I’m a Sales Engineer focused on mobile security, developer tooling, and automation. I build solutions that simplify complex workflows — and I share the ones I’m proud of here.
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <a
            href="/Resume.pdf"
            target="_blank"
            className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            View Resume
          </a>
          <a
            href="mailto:sj.mercer00@gmail.com"
            className="px-5 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-6 text-gray-600 pt-4">
          <a
            href="https://github.com/scott-mercer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/sj-mercer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-black transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-4xl font-bold mb-12 tracking-tight">Selected Work</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-gray-200 p-6 bg-white hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-black mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-black hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-16 border-gray-200" />

      {/* Skills & Certifications Section */}
      <section aria-label="Skills and Certifications">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Skills & Certifications</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <div className="space-y-6 text-lg">
            <div>
              <h3 className="font-semibold text-base mb-1">Languages & Databases</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Python', 'Java', 'JavaScript', 'Shell', 'Bash', 'MySQL', 'Postgres'].map(skill => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-1">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['AWS', 'GCP', 'Azure', 'Jenkins', 'Azure DevOps', 'CircleCI', 'Git', 'REST APIs'].map(skill => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-1">Testing & Automation</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Appium', 'Selenium'].map(skill => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* <div>
              <h3 className="font-semibold text-base mb-1">Certifications</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  'AWS Certified Solutions Architect',
                  'Google Associate Cloud Engineer',
                  'Certified Scrum Master'
                ].map(cert => (
                  <span
                    key={cert}
                    className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
          <div className="space-y-6 text-lg">
            <div>
              <h3 className="font-semibold text-base mb-1">Analytics & Visualization</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Grafana', 'Power BI'].map(skill => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-1">Networking & Security</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['TCP/IP', 'IPv6', 'VPN', 'DNS', 'Routing', 'Firewalls', 'Burp Suite'].map(skill => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-1">Project & Process Management</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['SDLC', 'Jira', 'Agile', 'CRM'].map(skill => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}