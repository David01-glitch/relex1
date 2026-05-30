import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { SITE } from '../data/site.js'
import { cabins, community, hero } from '../data/images.js'
import { organizationLd, breadcrumbLd } from '../utils/jsonld.js'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="The founder story and mission behind Golden Years Canoeing — an independent lake adventure blog written for outdoor-minded adults over 50."
        path="/about"
        jsonLd={[organizationLd, breadcrumbLd([{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }])]}
      />

      <PageHero
        eyebrow="Our story"
        title="A blog built from a thousand quiet mornings on the water."
        lead="Golden Years Canoeing began with a simple conviction: that the best adventures of life are still ahead of us, and that calm water is one of the kindest places to find them."
        image={hero.heroPaddleCalm}
        alt="A peaceful paddle across a calm lake at golden hour"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-warm max-w-none">
            <h2>How it started</h2>
            <p>
              In the spring of {SITE.founded}, our founder Eleanor Whitfield retired
              from a long career as a public-school teacher in Minneapolis. The
              calendar that had governed her life for four decades suddenly opened
              wide, and like many new retirees, she felt the strange mix of freedom
              and unease that comes when the structure falls away. A neighbor invited
              her out in a borrowed canoe one foggy morning on a small lake north of
              the city, and something quietly shifted. By the time they returned to
              the dock, Eleanor had found the thread that would shape the next chapter
              of her life.
            </p>
            <p>
              She paddled nearly every week after that. She read everything she could
              find about technique, gear, and destinations — and was frustrated to
              discover that almost all of it was written for the young and the
              athletic, full of jargon and adrenaline, and silent on the questions
              that actually mattered to her: How do I get in and out of the boat
              safely? How far should I really go? What if my knees aren't what they
              were? She began keeping a journal of what she learned, and friends began
              asking for copies. The journal became a website, and the website became
              Golden Years Canoeing.
            </p>

            <h2>Our mission</h2>
            <p>
              Our mission is simple and unwavering: to help adults over 50 enjoy the
              calm, restorative adventure of canoeing and lake life with confidence,
              safety, and joy. We believe that adventure does not have an expiration
              date, that the outdoors is one of the best medicines available to an
              aging body and mind, and that the right information — warm, honest, and
              free of hype — can be the difference between watching from the dock and
              gliding across the water yourself.
            </p>
            <p>
              Everything we publish is written with you in mind. We favor calm water
              over whitewater, scenery over speed, and unhurried half-days over
              exhausting expeditions. We explain the things other guides skip. And we
              tell the truth, including when the truth is "stay home today and enjoy
              the lake from a bench." Trust matters more to us than clicks.
            </p>

            <h2>What we are — and what we are not</h2>
            <p>
              Golden Years Canoeing is an independent editorial blog. We are not a
              tour operator, a gear shop, or a booking service. We do not sell canoes
              or take reservations. When we mention an outfitter, a state park, or a
              piece of equipment, it is purely to help you plan your own adventure.
              Our writing is supported by our readers and by occasional, clearly
              marked recommendations — never by pressure, and never at the cost of our
              honesty.
            </p>
            <p>
              We are also a community. Some of our most-loved articles began as a
              reader's email with a few photographs and a paragraph about a memorable
              morning. If this blog has a soul, it lives in those stories — in
              Margaret's joyful first paddle at sixty-three, in Frank's quiet goodbye
              on a beloved lake, in Lorraine's little fleet of six neighbors who look
              after one another both on the water and off it.
            </p>

            <h2>Where we paddle</h2>
            <p>
              Our home waters are in Minnesota, the land of more than ten thousand
              lakes, and much of our destination writing starts there. But the
              techniques, safety habits, packing lists, and ideas for an outdoor
              retirement apply to calm waterways anywhere. Wherever you live, and
              whatever your starting point, there is a quiet bay with your name on it.
            </p>
          </div>

          <aside className="space-y-8">
            <div className="card overflow-hidden">
              <img src={community.communitySeniors} alt="Older adults enjoying a relaxed day by the lake" loading="lazy" width="1000" height="700" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl text-lake-900">Our promise to readers</h3>
                <ul className="prose-warm mt-3">
                  <li>Calm, honest writing — never hype.</li>
                  <li>Safety first, always.</li>
                  <li>Real business identity and contact details.</li>
                  <li>Original content you can trust.</li>
                </ul>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img src={cabins.cabinPorch} alt="A rustic cabin porch overlooking the lake" loading="lazy" width="1000" height="700" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl text-lake-900">Reach the team</h3>
                <address className="not-italic prose-warm mt-3">
                  <p>{SITE.address.full}</p>
                  <p>
                    <a className="link-underline" href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a><br />
                    <a className="link-underline break-all" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </p>
                </address>
                <Link to="/contact" className="btn-primary mt-4">Contact us</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl bg-forest-50 p-8 ring-1 ring-forest-100 sm:p-12">
          <SectionHeading eyebrow="The people behind the words" title="A small team of paddlers and writers" center />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Eleanor Whitfield', role: 'Founder & Editor', bio: 'Retired teacher, lifelong Minnesotan, and the voice behind our beginner guides and destination write-ups.' },
              { name: 'Captain Ruth Salonen', role: 'Safety & Technique', bio: 'Former waterfront director with decades of paddling instruction; she keeps our safety advice honest and clear.' },
              { name: 'Thomas Reardon', role: 'Gear & Logistics', bio: 'A patient tinkerer who has tested more recreational canoes than he can count, so you don\'t have to.' },
              { name: 'Dr. Helen Marsh', role: 'Wellbeing', bio: 'Retired physician writing on the genuine health benefits of gentle outdoor activity after retirement.' },
              { name: 'Marie Lundquist', role: 'Community & Cabins', bio: 'Our connector-in-chief, who gathers reader stories and plans the cozy cabin getaways we love.' },
              { name: 'You', role: 'Contributor', bio: 'Our best stories come from readers. Share yours, and you might see your morning on the water featured here.' },
            ].map((p) => (
              <div key={p.name} className="card p-6">
                <p className="font-display text-lg text-lake-900">{p.name}</p>
                <p className="text-sm font-semibold text-sunset-600">{p.role}</p>
                <p className="prose-warm mt-2 text-[0.95rem]">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
