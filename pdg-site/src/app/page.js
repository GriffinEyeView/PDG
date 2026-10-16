export default function Home() {
  const technologies = [
    "Snowflake",
    "dbt",
    "SQL",
    "Python",
    "Java",
    "AWS",
  ];

  const projectTechnologies = ["Snowflake", "dbt", "SQL", "Python"];

  const accomplishments = [
    "Built a Snowflake cloud data warehouse for retail analytics.",
    "Created dbt staging transformations and a category-level sales fact table.",
    "Implemented data quality checks for uniqueness, null values, and revenue metrics.",
    "Passed all 7 dbt data tests.",
    "Generated dbt documentation to explore models and data lineage.",
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <header className="py-16 sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Data Engineering | Cloud | Analytics
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Derrick Griffin
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Data Engineer &amp; Technical Lead
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I build reliable data pipelines and cloud data platforms
            that transform raw data into trusted, actionable insights.
            My toolkit includes Snowflake, dbt, SQL, Python, Java,
            and AWS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore My Projects
            </a>

            <a
              href="https://github.com/GriffinEyeView"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Visit My GitHub
            </a>
          </div>
        </header>

        {/* Technology Stack */}
        <section className="border-t border-slate-800 py-10">
          <h2 className="mb-5 text-xl font-bold">Core Technologies</h2>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Selected Work
          </p>

          <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/60 sm:p-8">
            <div className="mb-5 flex flex-wrap gap-2">
              {projectTechnologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold sm:text-2xl">
              Retail Analytics Data Warehouse
            </h3>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              An end-to-end ELT project that loads retail order data into
              Snowflake, transforms it with dbt, and produces analytics-ready
              sales metrics by product category.
            </p>

            {/* Project Accomplishments */}
            <div className="mt-6">
              <h4 className="mb-3 font-semibold text-white">
                Key Accomplishments
              </h4>

              <ul className="space-y-3">
                {accomplishments.map((accomplishment) => (
                  <li
                    key={accomplishment}
                    className="flex gap-3 text-sm leading-6 text-slate-400"
                  >
                    <span
                      className="mt-1 text-cyan-400"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{accomplishment}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Quality Metric */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-3xl font-bold text-cyan-400">7/7</p>
                <p className="mt-1 text-sm text-slate-400">
                  Data tests passing
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-3xl font-bold text-cyan-400">2</p>
                <p className="mt-1 text-sm text-slate-400">
                  dbt transformation models
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-3xl font-bold text-cyan-400">10</p>
                <p className="mt-1 text-sm text-slate-400">
                  Sample retail order records
                </p>
              </div>
            </div>

            {/* Project Links */}
            <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-800 pt-6">
              <a
                href="https://github.com/GriffinEyeView/snowflake-dbt-retail-analytics"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Source on GitHub <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/GriffinEyeView/snowflake-dbt-retail-analytics/blob/main/README.md"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Read Project README <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </section>

        {/* About */}
        <section className="border-t border-slate-800 py-12">
          <h2 className="text-2xl font-bold">About Me</h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            I combine data engineering, software development, and
            technical leadership to design dependable data solutions.
            This portfolio showcases my engineering projects, data
            quality practices, and work with modern cloud platforms.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-8 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Derrick Griffin · Data Engineering Portfolio
          </p>
        </footer>
      </div>
    </main>
  );
}