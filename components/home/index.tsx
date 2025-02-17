import styles from "@/components/ui/css-reusable/gradient.module.css"
import Particles from "./particles"
import { BackgroundWrapper, INDEX_HomeWrapper } from "./styles/index-wrapper"

export const INDEX_Home = () => {
  return (
    <BackgroundWrapper>
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
            <span data-content='Technologies'>Technologies:</span> HTML, CSS, Styled-Components, Emotion, Tailwind, JavaScript, TypeScript,
            React, Nextjs, Redux, Zustand, Tanstack Query, Nodejs, Express, SQL, Vitest, React-Testing-Library, Playwright, Git And Github
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
                    href='https://blogtoshare.vercel.app/All'
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
                    href='https://agreducamlaportada.com'
                    target='_blank'>
                    Agreeducam Website
                  </a>
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  <a
                    href='https://state-managers.vercel.app/'
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
                    href='https://github.com/JuanPastenCastillo/node'
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
                    href='https://pomodoro-react-hazel.vercel.app/'
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
                    href='https://calculator-react-nine.vercel.app/'
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
                    href='https://markdown-live-previewer-two.vercel.app/'
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
                    href='https://random-quote-chi.vercel.app/'
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
            <a href='mailto:juanpastencastillo@gmail.com'>email</a>
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
      <Particles
        particleColors={["#91d1e6", "#ff9486"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
    </BackgroundWrapper>
  )
}
