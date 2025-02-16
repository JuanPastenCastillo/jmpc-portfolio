import styles from "@/components/ui/css-reusable/gradient.module.css"
import { INDEX_HomeWrapper } from "./styles/index-wrapper"

export const INDEX_Home = () => {
  return (
    <INDEX_HomeWrapper>
      <header>
        <span>Juan Pastén Castillo</span>
        <h1>
          <span
            className={styles.gradientText}
            data-content='Frontend Developer'>
            Frontend Developer
          </span>{" "}
          <span>
            <span>+2 YoE</span>
            <span className={styles.gradientText1} />
          </span>
        </h1>
      </header>

      <article>
        <p>
          <span data-content='Myself'>Myself:</span> Collaborative Team Player; Continuously Improving My Skills; Self Manager
        </p>
        <p>
          <span data-content='Education'>Education:</span> Self Taught Developer with a bachelor degree on Psychology
        </p>
        <p>
          <span data-content='Technologies'>Technologies:</span> HTML, CSS, Styled-Components, Tailwind, JavaScript, TypeScript, React,
          Nextjs, Redux, Zustand, Tanstack Query, Nodejs, Express, SQL, Vitest, React-Testing-Library, Playwright, Git And Github
        </p>
        <p>
          <span data-content='Hobbies'>Hobbies:</span> Physical and Breath Exercise, General Learning, Videogames and Drums
        </p>
      </article>

      <section>
        <h2 data-content='My work'>My work</h2>
        <ul>
          <li>
            <p>
              <span>
                <a
                  href='#'
                  target='_blank'>
                  Blog
                </a>
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                <a
                  href='#'
                  target='_blank'>
                  Agreeducam
                </a>
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                <a
                  href='#'
                  target='_blank'>
                  Global State Managers
                </a>
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                <a
                  href='#'
                  target='_blank'>
                  Nodejs and Expressjs Knowledge
                </a>
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                <a
                  href='#'
                  target='_blank'>
                  Pomodoro
                </a>
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                <a
                  href='#'
                  target='_blank'>
                  Calculator
                </a>
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                <a
                  href='#'
                  target='_blank'>
                  Markdown live previewer
                </a>
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                <a
                  href='#'
                  target='_blank'>
                  Random quote generator
                </a>
              </span>
            </p>
          </li>
          <li>
            <span>Previous portfolios</span>
            <ul>
              <li>
                <p>
                  <span>
                    <a
                      href='https://juanpastencastillo-portfolio.vercel.app/portfolio'
                      target='_blank'>
                      V2
                    </a>
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <a
                      href='https://juanpastencastillo.github.io/Personal-Portfolio/#myWorks'
                      target='_blank'>
                      V1
                    </a>
                  </span>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <footer>
        <span>
          <a href='#'>email</a>
        </span>
        <span>
          <a
            href='https://www.linkedin.com/in/juanpastencastillo/'
            target='_blank'>
            linkedin
          </a>
        </span>
      </footer>
    </INDEX_HomeWrapper>
  )
}
