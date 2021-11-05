import Image from "next/image";
import Cover from "pages/projects/rsvp/ccscover.png";
import ResearchPlan from "pages/projects/rsvp/researchplan.png";
import ResMethods from "pages/projects/rsvp/resmethods.png";
import Attendance from "pages/projects/rsvp/attendance.png";
import NeedsStatements from "pages/projects/rsvp/needsstatements.png";
import CompetitorAnalysis from "pages/projects/rsvp/competitoranalysis.png";
import AtHome from "pages/projects/rsvp/athome.png";
import Promo from "pages/projects/rsvp/promo2.png";
import UsabilityTest from "pages/projects/rsvp/usabilitytest.png";
import Link from "next/link";

export default function IndexPage() {
  return (
    <main className="max-w-screen-lg mx-auto">
      <article className="casestudy">
        <section>
            <div className="title">
                <h1 className="">Fitness Class Reservation System During COVID-19</h1>
                <p>
                  As a <strong>UX Researcher at PYRAMID</strong>, I used <strong>generative methods</strong>, <strong>evaluative methods</strong> and <strong>usability testing</strong> to implement a 
                  new system adopted by 96% of classgoers.
                </p>
            </div>
            <figure>
                <Image src={Cover} alt="RSVP's interface on mobile and desktop" layout="intrinsic" objectFit="cover"  quality={100}></Image>
                <figcaption>Final Product</figcaption>
            </figure>
        </section>

        <section className="lg:grid lg:grid-cols-7 items-center gap-24">
            <div className="lg:col-span-3">
              <h1>
                Context
              </h1>
              <p>
                When fitness classes were capped at 50 percent due to COVID-19, PYRAMID offered reservations by:
              </p>
              <div className="indent">
                <ul>
                  <li>Phone</li>
                  <li>Walk-in</li>
                  <li>Messenger</li>
                  <li>Chatbot</li>
                </ul>
              </div>
              <p>
                <strong>Replacing these options with a unified system</strong> would be important as members became comfortable returning to class.
              </p>
            </div>
            <figure className="lg:col-span-4">
                <Image src={Attendance} alt="RSVP's interface on mobile and desktop" layout="intrinsic" objectFit="cover"  quality={100}></Image>
                <figcaption>Full classes would occur within one standard deviation of mean pre-pandemic class attendance.</figcaption>
            </figure>
        </section>

        <section className="lg:grid lg:grid-cols-7 items-center gap-24">
          <div className="lg:col-span-3">
            <h1>Research Plan</h1>
            <p>
              Following a modified version of <em>The UX Research Plan That Stakeholders Love</em> <cite>(Sharon, 2012)</cite>, I structured a research plan to:
            </p>
            <ol>
              <li>
                Determine the reservation system most important to members and staff.
              </li>
              <li>
                Ensure that the new system is usable.
              </li>
            </ol>
          </div>
          
          <figure className="lg:col-span-4">
            <Image src={ResearchPlan} alt="Class capacities" layout="intrinsic" objectFit="cover"  quality={100}></Image>
            <figcaption>
              Research plan in Notion covering background, methods, participants, and scripts (not displayed).
            </figcaption>
          </figure>
        </section>

        <section className="lg:grid lg:grid-cols-7 items-center gap-24">
          <div className="lg:col-span-3">
            <h1>User Flows</h1>
            <p>
              Each registration required <strong>synchronized effort between members and staff</strong>. 
              Front Desk role requires in-person interactionsthat could interfere with responding to reservations. 
            </p>
            <p>
              The high interaction cost of this synchronizing increased the likelihood of failure via an unsuccessful registration.
            </p>
            <aside>
              <dfn>Interaction Cost</dfn>
              <p>The cognitive and physcial effort required to complete a task <cite>(Budiu, 2013)</cite></p>
            </aside>
            </div>
          <figure className="lg:col-span-4">
            <iframe height="400" width="100%" src="https://miro.com/app/live-embed/o9J_lv-7zb4=/?moveToViewport=-2199,-2560,5840,4565" scrolling="no" allowFullScreen className="rounded-3xl border border-gray-300"></iframe>
            <figcaption>Interactive member flows created in Miro.</figcaption>
          </figure>
        </section>

        <section className="lg:grid lg:grid-cols-7 items-center gap-24">
        <div className="lg:col-span-3">

          <h1>
            Semi-Structured Member & Stakeholder Interviews
          </h1>
          <p>
            To determine needs and pain points, I interviewed representative samples of each cluster of system users. 
          </p>
          <ul>
            <li>Members</li>
            <li>Front Desk Staff</li>
            <li>Admin Staff</li>
          </ul>
          <p>
            I used these insights to create <strong>needs statements</strong> and an <strong>affinity diagram</strong> for evaluating prospective system.
          </p>
          </div>
          <figure className="lg:col-span-4">
            <iframe width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FrO1Ua0jmimdhtfYjIwSL9W%2FReservation-System-Needs%3Fnode-id%3D0%253A1" allowFullScreen className="rounded-3xl border border-gray-300"></iframe>
            <figcaption>Affinity Diagram of member, front desk staff, and admin staff needs, sorted by cluster.</figcaption>
          </figure>
        </section>

        <section className="lg:grid lg:grid-cols-7 items-center gap-24">
          <div className="lg:col-span-3">
            <h1>
              Usability Testing
            </h1>
            <p>When deciding between <strong>Calendly</strong> and <strong>Acuity</strong>, representative samples of classgoers and staff completed tasks while speaking aloud. Tasks were rotated to avoid order effects.</p>
            <p>Members preferred Calendly’s native feel and its showing class descriptions in its date-picker. They found Acuity’s scrolling to be burdensome.</p>
            <p>Staff complimented both interfaces.</p>
          </div>

          <figure className="lg:col-span-4">
            <Image src={UsabilityTest} alt="Calendly's Datepicker" layout="intrinsic" objectFit="cover"  quality={100}></Image>
            <figcaption>Datepicker that was favored in testing</figcaption>
          </figure>
        </section>

        <section className="lg:grid lg:grid-cols-7 items-center gap-24">
        <div className="lg:col-span-3">
          <h1>Implementation and Adoption</h1>
          <p>Noting member preferences, we selected <strong>Calendly</strong>. To build on its native feel, I styled the reservaiton widget to follow <em>Ochre</em>, {"PYRAMID's"} design system.</p>
          <p>We named the system RSVP to reflect the inclusive nature of fitness classes. I created marketing materials that emphasized its usability, and that doubled as tutorials.</p>
          <p>RSVP was used for 96 percent of class registrations within three weeks launch.</p>
          </div>
          <figure className="col-span-4">
            <Image src={Promo} alt="Class capacities" layout="responsive"   quality={100}></Image>
            <figcaption>Promotionional posters placed throughout PYRAMID.</figcaption>
          </figure>
        </section>

        <section className="lg:grid lg:grid-cols-7 items-center gap-24">
          <div className="lg:col-span-3">
            <h1>RSVP & PYRAMID (At Home)</h1>
            <p>When fitness clubs closed in December due to rising COVID-19 cases, we launched <strong>PYRAMID (At Home), a month-long premium service</strong> offering fitness classes, personalized training, and challenges from home.</p>
            <p>RSVP was crucial to {"(At Home)'s"} success, since members had an existing mental model of how registration worked.</p>
          </div>
          <figure className="col-span-4">
            <Image src={AtHome} alt="Calendly's Datepicker" layout="intrinsic" objectFit="cover"  quality={100}></Image>
            <figcaption>Promotional graphic for Group Fitness Classes (At Home), where members registered using RSVP.</figcaption>
          </figure>
        </section>

        <section>
          <h1>
            Reflection
          </h1>
          <p>
            I’m grateful to everyone who helped bring RSVP to life over a short period. Its success shows the importance of asynchronous, automated systems as a means of freeing up people’s time and increasing desired behaviors. Since its launch, RSVP has been adapted for other services at PYRAMID, and its future looks bright.
          </p>
        </section>

        <section>
          <h1>
            References
          </h1>
          <ol>
            <li>Budiu, R. (2013, August 31). Interaction cost: Definition. Nielsen Norman Group. Retrieved October 8, 2021, from <Link href="https://www.nngroup.com/articles/interaction-cost-definition/"><a className="text-red-800 underline">https://www.nngroup.com/articles/interaction-cost-definition/</a></Link>.</li>
            <li>Sharon, T. (2012, January 26). The UX research plan that stakeholders love. Smashing Magazine. Retrieved October 8, 2021, from <Link href="https://www.smashingmagazine.com/2012/01/ux-research-plan-stakeholders-love/"><a className="text-red-800 underline">https://www.smashingmagazine.com/2012/01/ux-research-plan-stakeholders-love/</a></Link>.</li>
          </ol>
        </section>
      </article>
    </main>
  );
}
