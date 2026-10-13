(async () => {
  "use strict";
  const $ = s => document.querySelector(s);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = matchMedia('(hover: none)').matches;
  const store = {
    get(k, d) {
      try {
        const v = localStorage.getItem('jw3_' + k);
        return v === null ? d : JSON.parse(v);
      } catch (e) {
        return d;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem('jw3_' + k, JSON.stringify(v));
      } catch (e) {}
    }
  };

  function boot() {}

  /* ============ content ============ */
  const LINKS = {
    resume: 'Janya_Walia_Resume.pdf',
    github: 'https://github.com/Janya282',
    linkedin: 'https://www.linkedin.com/in/janya-walia/',
    behance: 'https://www.behance.net/janyawalia565',
    email: 'janyawalia282@gmail.com',
    lspsLive: 'https://laurierstempublishingsociety.github.io/'
  };
  const L = (label, href, primary) => ({
    label,
    href,
    primary
  });
  const CONTENT = {
    books: {
      kicker: 'bookcase · skills',
      title: 'What I build with',
      body: `<h3>Languages</h3><ul class="chips"><li>Python</li><li>Java</li><li>C#</li><li>JavaScript</li><li>SQL</li><li>HTML</li><li>CSS</li></ul><h3>Tools</h3><ul class="chips"><li>VS Code</li><li>Eclipse</li><li>Git</li><li>Linux / Ubuntu</li><li>React</li><li>PyTorch</li><li>Figma</li><li>Canva</li><li>Blender</li></ul><h3>Competencies</h3><ul class="chips"><li>Full-stack web dev</li><li>NLP</li><li>UX design</li><li>Responsive design</li><li>Data visualization</li></ul><h3>Favourite courses</h3>
    <div class="row"><span class="r-t">Data Visualization</span><span class="r-d">A+</span><span class="r-s">Charts, dashboards and interactive visuals for non-technical audiences.</span></div>
    <div class="row"><span class="r-t">Software Engineering</span><span class="r-d">A+</span><span class="r-s">Agile, design patterns, full project lifecycle.</span></div>
    <div class="row"><span class="r-t">Artificial Intelligence</span><span class="r-d">A</span><span class="r-s">Problem solving, automated reasoning, pattern recognition.</span></div>
    <div class="row"><span class="r-t">Computer Networks</span><span class="r-d">A−</span><span class="r-s">Protocols, TCP/IP, sockets, client–server architecture.</span></div>`
    },
    certificate: {
      kicker: 'frame above the nightstand · education',
      title: 'Wilfrid Laurier University',
      meta: 'Waterloo, ON · 2023 – 2027 (expected)',
      body: `<div class="row"><span class="r-t">Honours BSc Computer Science</span><span class="r-d">2023 – 2027</span></div><div class="row"><span class="r-t">Minor in UX Design</span><span class="r-d">in progress</span></div><div class="row"><span class="r-t">Undergraduate Certificate in Generative AI</span><span class="r-d">in progress</span></div><p style="margin-top:14px">Highlights: A+ in Data Visualization and Software Engineering, A in Artificial Intelligence, A− in Computer Networks.</p>`,
      links: [L('Open résumé (PDF)', LINKS.resume, true)]
    },
    corkboard: {
      kicker: 'corkboard · experience',
      title: 'Where I’ve worked',
      body: `<div class="row"><span class="r-t">VP of Web Development</span><span class="r-d">Sep 2025 – now</span><span class="r-s">Laurier STEM Publishing Society. I lead the design, development and maintenance of the club's website, and set component standards that cut build time.</span></div><div class="row"><span class="r-t">Academic Tutor, CP104</span><span class="r-d">Sep 2025 – Apr 2026</span><span class="r-s">Wilfrid Laurier University. Made sure first-year students understood intro programming, adjusting explanations to each skill level.</span></div><div class="row"><span class="r-t">Tutor</span><span class="r-d">Mar – Aug 2025</span><span class="r-s">A to Z Tutoring. Coding, math and English support for kids, with personalized learning plans.</span></div><div class="row"><span class="r-t">Camp Counselor</span><span class="r-d">Jun – Aug 2023</span><span class="r-s">CreateUCamps. Enforced camp rules, prepped activity materials and helped the recreation team develop new activities.</span></div>`,
      links: [L('Full résumé (PDF)', LINKS.resume, true)]
    },
    phone: {
      kicker: 'rotary phone · contact',
      title: 'Say hello',
      meta: 'Based in Waterloo, ON',
      body: `<p>I'm open to internships, collaborations and projects that are functional, helpful and eye-catching.</p><div class="copy-line"><code>${LINKS.email}</code><button data-copy="${LINKS.email}">Copy</button></div>`,
      links: [L('LinkedIn', LINKS.linkedin, true), L('GitHub', LINKS.github), L('Behance', LINKS.behance)]
    }
  };
  CONTENT.contact = CONTENT.phone;
  CONTENT.resume = {
    kicker: 'résumé',
    title: 'Janya Walia',
    meta: 'Waterloo, ON · Honours BSc Computer Science, 2027 (expected)',
    body: `<h3>Education</h3><div class="row"><span class="r-t">Wilfrid Laurier University</span><span class="r-d">2023 – 2027</span><span class="r-s">Honours BSc Computer Science · Minor in UX Design · Undergraduate Certificate in Generative AI</span></div>
  <h3>Experience</h3><div class="row"><span class="r-t">VP of Web Development, LSPS</span><span class="r-d">Sep 2025 – now</span></div><div class="row"><span class="r-t">Academic Tutor, Wilfrid Laurier University</span><span class="r-d">Sep 2025 – Apr 2026</span></div><div class="row"><span class="r-t">Tutor, A to Z Tutoring</span><span class="r-d">Mar – Aug 2025</span></div><div class="row"><span class="r-t">Camp Counselor, CreateUCamps</span><span class="r-d">Jun – Aug 2023</span></div>
  <h3>Projects</h3><div class="row"><span class="r-t">LSTM Headline Generation</span><span class="r-d">2026</span></div><div class="row"><span class="r-t">Car Rental System</span><span class="r-d">2026</span></div><div class="row"><span class="r-t">LSPS Website</span><span class="r-d">2025 – now</span></div>
  <h3>Skills</h3><p>Python, Java, C#, JavaScript, SQL, HTML, CSS · React, PyTorch, Git, Linux · Figma, Blender, Canva</p>`,
    links: [L('Open full résumé (PDF)', LINKS.resume, true), L('LinkedIn', LINKS.linkedin)]
  };

  let toastT;

  function toast(html) {
    const t = $('#toast');
    t.innerHTML = html;
    t.classList.add('on');
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove('on'), 2800);
  }

  /* ============ the website on the monitor ============ */
  const appEl = $('#app'),
    site = $('#site'),
    siteInner = $('#site-inner');
  let ready = false,
    threeFailed = false,
    busy = false,
    pendingRoom = false,
    previewVisible = false;
  const previewCanvas = $('#w-preview');

  // a little attention-heatmap image for the LSTM project (it has no screenshot)
  const attnURL = (() => {
    const c = document.createElement('canvas');
    c.width = 800;
    c.height = 600;
    const g = c.getContext('2d');
    g.fillStyle = '#ECE6FF';
    g.fillRect(0, 0, 800, 600);
    const cols = 14,
      rows = 9,
      x0 = 150,
      y0 = 120,
      cw = 42,
      ch = 42;
    for (let r = 0; r < rows; r++)
      for (let k = 0; k < cols; k++) {
        const d = Math.abs(k - (r * 1.45 + 1)),
          v = Math.max(.06, Math.exp(-d * d / 2.2) + (((r * 7 + k * 13) % 9) / 60));
        g.fillStyle = `rgba(238,95,158,${Math.min(1, v).toFixed(3)})`;
        g.beginPath();
        g.roundRect ? g.roundRect(x0 + k * cw, y0 + r * ch, cw - 5, ch - 5, 8) : g.rect(x0 + k * cw, y0 + r * ch, cw - 5, ch - 5);
        g.fill();
      }
    g.fillStyle = '#6F52EC';
    g.font = '700 22px "Space Mono", monospace';
    g.fillText('attention(article → headline)', 150, 82);
    g.font = '400 16px "Space Mono", monospace';
    g.fillStyle = '#6F6467';
    ['<s>', 'students', 'win', 'stem', 'prize', 'for', 'new', 'zine', '</s>'].forEach((w, i) => {
      g.textAlign = 'right';
      g.fillText(w, 136, y0 + i * ch + 26);
    });
    g.textAlign = 'left';
    g.fillText('77.8M params · beam search', 150, 540);
    return c.toDataURL('image/png');
  })();
  const pad = n => String(n).padStart(2, '0');
  const CATNAME = {
    web: 'Web dev',
    ux: 'UX/UI',
    ai: 'AI / ML',
    be: 'Back-end',
    '3d': '3D & games'
  };
  const PROJ = [{
    title: 'LSPS Website',
    result: 'The site is live and is now the club’s home online. Because it’s built on shared components, the team can add new pages quickly and keep everything consistent.',
    cats: ['web', 'ux'],
    cat: 'Web dev',
    when: 'Sep 2025 – now',
    img: 'img/lsps.webp',
    img2: 'img/lsps2.webp',
    url: 'laurierstempublishingsociety.github.io',
    ac: '#FFB3D3',
    acd: '#EE5F9E',
    pk: '#FFE3EF',
    giant: 'PUBLISH',
    short: 'The official site for the Laurier STEM Publishing Society.',
    tagline: 'A home for student led STEM writing, designed and hand coded by me.',
    tags: ['Figma', 'HTML/CSS', 'JavaScript', 'Responsive'],
    role: 'Design & development',
    type: 'Club website',
    stack: 'Figma, HTML/CSS, JavaScript',
    overview: 'As the club’s VP of Web Development, I designed and built the official website for the Laurier STEM Publishing Society. Instead of a simple static page, it’s a custom, responsive platform that hosts and showcases what the club is about, and I still keep it updated and running as the club grows.',
    keys: ['Responsive', 'Community', 'Hand-coded'],
    goal: 'Give the club a home online that feels like the club: welcoming, clear about its mission, and easy for any student to get involved from.',
    task: 'Design it in Figma, build it by hand in HTML, CSS and JavaScript, and keep it easy for the team to maintain as things change.',
    steps: [
      ['Understand', 'Worked out what the site has to do: explain the mission, introduce the team, show events and get people involved.'],
      ['Design', 'Laid out the Home, Our Team, Events and Contact pages in Figma before writing any code.'],
      ['Build', 'Learnt and coded every page in HTML, CSS and JavaScript, responsive from phone to desktop.'],
      ['Standardize', 'Set shared component standards so the team builds new pages faster and keeps them consistent.']
    ],
    sys: {
      n: 'Visual language',
      colors: ['#6C63D9', '#CDD0EA', '#DCE7EC', '#FFFFFF', '#1E2230'],
      note: 'Colours pulled straight from the live site: violet from our logo,blues and plenty of white so the writing stays the hero.'
    },
    did: ['Designed the site in Figma, then built it by hand', 'Made every page responsive, for any screen', 'Set component standards that cut the team’s page build time', 'Maintain it and ship updates with the publishing and design teams'],
    links: [
      ['Visit the live site', LINKS.lspsLive]
    ]
  }, {
    title: 'Car Rental System',
    cats: ['web', 'ux', 'be'],
    cat: 'Web dev',
    when: '2026',
    img: 'img/cars.webp',
    img2: 'img/cars2.webp',
    url: 'car rental · dashboard',
    ac: '#B9A7FF',
    acd: '#6F52EC',
    pk: '#ECE6FF',
    giant: 'BOOK',
    short: 'Full stack rental site: browse, compare and book cars on live data.',
    tagline: 'Browse, compare and book a car in Ontario without a single trip to the counter.',
    tags: ['JavaScript', 'MySQL', 'Google OAuth', 'Render', 'Scrum'],
    role: 'Full-stack developer · team of 5',
    type: 'CP317 Software Engineering · final project',
    stack: 'HTML/CSS, JavaScript, MySQL, Render, GitHub Pages, Google OAuth 2.0, EmailJS, Figma',
    overview: 'Our CP317 final project: a full stack vehicle rental website for Ontario. Renters browse and book cars with no physical visit, sign in with Google, save favourites, compare cars and earn loyalty points. Admins get a dashboard to manage the whole fleet, users and revenue. It runs in the browser with nothing to install.',
    keys: ['Full-stack', 'Google OAuth', 'Admin dashboard'],
    goal: 'Renting a car is slow and inflexible, and most rental sites are hard to navigate: people struggle to compare options, see what’s available and manage bookings. We wanted it simple for students, travellers, drivers and staff.',
    task: 'As a team of five working in sprints, design the flows in Figma, then build a live front end, backend and shared database, with real accounts, bookings and an admin side.',
    steps: [
      ['Plan', 'Split the work into sprints as a team of five, Scrum style.'],
      ['Wireframe', 'Sketched lo-fi wireframes in Figma: browse, filters, car details, bookings and profile.'],
      ['Build', 'Front end on GitHub Pages, a Render backend for the requests Pages can’t handle, and a MySQL database.'],
      ['Test', 'Ran 68 test cases (all 68 passed) and seeded the database with 100 cars.']
    ],
    sys: {
      n: 'How it works',
      flow: [
        ['Website', 'GitHub Pages · HTML/CSS/JS'],
        ['Render backend', 'handles what Pages can’t'],
        ['MySQL database', 'shared storage (freedb.tech)'],
        ['Google OAuth 2.0', 'sign-in, no passwords stored']
      ],
      note: 'The database is the shared storage: anything other users need to see, like a car marked unavailable because someone else booked it, lives there. Google handles login, so the system never sees anyone’s password.',
      lists: [
        ['For renters', ['Browse and book instantly, no visit needed', 'Google Sign-In', 'Flexible pickup and drop-off across Ontario', 'Location-aware browsing finds the nearest car', 'Favourites, side-by-side comparison and dark mode', 'Loyalty points, booking history and a live chat widget', 'Reviews from verified renters']],
        ['For admins', ['Full CRUD over cars and users', 'Monthly revenue and most-booked vehicle reports', 'PDF export', 'Role-based access, kept separate on the server']]
      ]
    },
    gallery: [
      ['img/cars_wf_home.webp', 'Home: search by where, pick-up and drop-off', 'contain'],
      ['img/cars_wf_browse.webp', 'Browse: filters beside the car grid', 'contain'],
      ['img/cars_wf_detail.webp', 'Car details: photos, map, dates and total price', 'contain'],
      ['img/cars_wf_booking.webp', 'Booking summary with dates, location and charges', 'contain'],
      ['img/cars_wf_profile.webp', 'Profile and account settings', 'contain']
    ],
    galleryTitle: 'Lo-fi wireframes in Figma',
    stats: [
      ['68/68', 'test cases passed'],
      ['100', 'cars seeded in the database'],
      ['5', 'people, built in sprints']
    ],
    result: 'A live, full stack rental site with booking and cancellation, Google sign-in, favourites, comparison, dark mode, loyalty points and live chat, plus an admin dashboard with full CRUD, PDF export and monthly revenue. The hardest part was keeping real-time data in sync between the front end, the Render backend and the MySQL database across several people and sprints.',
    did: ['Privacy: user data protected with role based access', 'Security: Google OAuth 2.0, no passwords stored', 'Fairness: only verified renters can leave reviews', 'Accessibility: works in any browser, on any device'],
    didTitle: 'Built responsibly',
    links: [
      ['Lo-fi wireframes in Figma', 'https://www.figma.com/design/2ppNaxNtDBTweBEovTginW/CP317?node-id=0-1&t=tLay0FCMKBiWk7eD-1'],
      ['Code on GitHub', 'https://github.com/CP317-GROUP8/client-side']
    ]
  }, {
    title: 'LORIS Redesign',
    cats: ['ux'],
    cat: 'UX/UI',
    when: 'Winter 2025',
    img: 'img/loris.webp',
    noBand: true,
    url: 'UX115 · Redesigning LORIS',
    pos: 'center',
    ac: '#B9A7FF',
    acd: '#6F52EC',
    pk: '#ECE6FF',
    giant: 'SIMPLIFY',
    short: 'UX research and a redesign proposal for Laurier’s registration system.',
    tagline: 'Making Laurier’s registration system easier for every student and professor.',
    tags: ['UX research', 'Usability testing', 'Figma', 'Canva'],
    role: 'UX researcher · group of 5',
    type: 'UX research & proposal (UX115)',
    stack: 'Figma, Canva, Zoom, Google Docs, Excel',
    overview: 'LORIS is Laurier’s Online Registration and Information System, where students register for courses, check tuition and financial aid, update their details and apply for awards. People found it outdated, cluttered and confusing, so our group of five dug into why and proposed a redesign.',
    keys: ['Heuristic evaluation', 'Usability testing', 'Journey mapping'],
    goal: 'Redesign LORIS with simpler navigation, a modern look and a better experience, so students and faculty can finish tasks with minimal frustration.',
    task: 'Find the common problems people hit in LORIS, figure out which features matter most, and turn that into clear, testable recommendations.',
    steps: [
      ['Evaluate', 'Ran a heuristic evaluation and ranked each issue by severity, from an overwhelming homepage to inconsistent buttons.'],
      ['Compare', 'Ran SWOT analyses on Quest and the Fanshawe portal to see what better systems do differently.'],
      ['Listen & map', 'Interviewed users for their pain points and mapped a professor’s journey to submit final grades.'],
      ['Test', 'Usability tests with students and a professor, remote over Zoom and in person, using think aloud.']
    ],
    sys: {
      n: 'What we found',
      findings: [
        ['Redundant navigation', 'Simple tasks took clicks through multiple pages.'],
        ['Unclear error messages', 'People didn’t know why a registration action failed.'],
        ['Outdated design', 'A text heavy interface with little visual hierarchy.'],
        ['Missing features', 'People asked for a GPA calculator, a better schedule view and advising tools.']
      ],
      meters: [
        ['Register for a course', 30.5],
        ['Access tuition payment', 34.5],
        ['View course schedule', 37.25],
        ['Change program / minor', 37.25],
        ['View financial aid', 58.25]
      ],
      note: 'Average seconds per task across our student testers. Financial aid took the longest, and two of three students had a lot of difficulty with it. For our professor, submitting grades took 3 minutes and finding the lecture schedule took 5.'
    },
    gallery: [
      ['img/loris_heur.webp', 'Heuristic evaluation, ranked by severity'],
      ['img/loris_journey.webp', 'Journey map: a professor submitting final grades'],
      ['img/loris_metrics.webp', 'Task completion metrics from usability testing'],
      ['img/loris_tabs.webp', 'Recommendation: simpler, clearer tab labels'],
      ['img/loris_home.webp', 'Recommendation: a customizable homepage'],
      ['img/loris_swot.webp', 'Competitive analysis: SWOT on Quest']
    ],
    stats: [
      ['11', 'tasks tested'],
      ['4', 'key pain points'],
      ['3', 'core redesign ideas']
    ],
    result: 'Our proposal streamlines course registration, tuition payments and academic records: clearer tab labels, dropdown menus that group related tasks, a customizable homepage, consistent buttons and no broken links. Fewer steps, less guessing.',
    did: ['Ran a heuristic evaluation and ranked issues by severity', 'Compared LORIS with Quest and the Fanshawe portal (SWOT)', 'Mapped a professor’s journey submitting final grades', 'Ran usability tests with students and a professor', 'Proposed clearer labels, dropdown menus and a customizable homepage'],
    links: [
      ['See the full deck on Behance', 'https://www.behance.net/gallery/229924915/Redesign-of-LORIS']
    ]
  }, {
    title: 'Alani Landing Page',
    cats: ['ux'],
    cat: 'UX/UI',
    when: 'Summer 2024',
    img: 'img/alani_strawberry.webp',
    img2: 'img/figma.webp',
    url: 'Alani · home',
    pos: 'center',
    ac: '#FFB3D3',
    acd: '#EE5F9E',
    pk: '#FFE3EF',
    giant: 'JUICY',
    short: 'A flavour switching landing page concept for an energy drink, in Figma.',
    tagline: 'Pick a can, and the whole page turns into that flavour.',
    tags: ['Figma', 'UI design', 'Landing page'],
    role: 'UI designer',
    type: 'Landing page concept',
    stack: 'Figma',
    overview: 'A landing page concept for Alani energy drinks, designed in Figma. The hero is a flavour carousel: choose a can from the row and the whole hero changes with it, from the colours and background to the splash around the can. Strawberry gets fruit and flowers, Blueberry an inky burst, Hawaiian a beach and coconuts, Peach a soft cloud of fruit.',
    keys: ['Flavour carousel', 'Colour per flavour', 'Bold product shots'],
    sys: {
      n: 'Try the prototype',
      proto: 'https://embed.figma.com/proto/vtuKwefaebrir5EnbHsn5F/Alani?node-id=0-1&embed-host=share&hide-ui=1&scaling=contain',
      protoLink: 'https://www.figma.com/proto/vtuKwefaebrir5EnbHsn5F/Alani?node-id=0-1&t=Pbhs9EBctw6YDISQ-1',
      colors: ['#FF9173', '#070834', '#88D7D1', '#47BDE5', '#FFBF69'],
      note: 'Click the cans in the prototype to switch flavours. Each flavour brings its own colour world, pulled straight from the screens, while the layout, the can row and the “Try Our New Juicy Flavours” headline stay put so it still feels like one brand.'
    },
    links: [
      ['Open the prototype', 'https://www.figma.com/proto/vtuKwefaebrir5EnbHsn5F/Alani?node-id=0-1&t=Pbhs9EBctw6YDISQ-1'],
      ['Open the Figma file', 'https://www.figma.com/design/vtuKwefaebrir5EnbHsn5F/Alani?node-id=0-1&t=MIbaTt301J4Phr34-1']
    ]
  }, {
    title: 'LSTM Headline Generation',
    result: 'A 77.8M-parameter model that turns full news articles into short, readable headlines, with attention and beam search doing the heavy lifting.',
    cats: ['ai'],
    cat: 'AI / ML',
    when: '2026',
    img: attnURL,
    url: 'attention weights · article → headline',
    pos: 'center',
    ac: '#FFE49A',
    acd: '#D39A12',
    pk: '#FFF1C9',
    giant: 'ATTEND',
    short: 'An encoder–decoder that reads an article and writes its headline.',
    tagline: 'An article goes in. A headline comes out.',
    tags: ['Python', 'PyTorch', 'Hugging Face', 'NLP'],
    role: 'Model design & training',
    type: 'NLP · deep learning',
    stack: 'Python, PyTorch, Hugging Face',
    overview: 'I built a sequence-to-sequence model in PyTorch that reads a news article and writes a headline for it. Attention lets the decoder look back at the right words, and beam search keeps the headlines reading as whole phrases instead of word-by-word guesses.',
    keys: ['Seq2seq', 'Attention', 'Beam search'],
    goal: 'Teach a model to squeeze a whole news article into one short, fluent headline.',
    task: 'Build and train an encoder–decoder LSTM, add Bahdanau attention and beam search, and train it on Gigaword article–headline pairs.',
    steps: [
      ['Data', 'Prepared 50K+ article–headline pairs from the Gigaword dataset for training.'],
      ['Encode', 'An LSTM encoder reads the article and turns it into hidden states.'],
      ['Attend', 'Bahdanau attention lets the decoder focus on the most relevant words at each step.'],
      ['Decode', 'The decoder writes the headline, with beam search picking the most fluent result.']
    ],
    sys: {
      n: 'How it works',
      flow: [
        ['Article', 'tokens in'],
        ['Encoder LSTM', 'reads the article'],
        ['Attention', 'Bahdanau'],
        ['Decoder LSTM', 'word by word'],
        ['Beam search', 'best phrasing'],
        ['Headline', 'out it comes']
      ],
      note: 'The heatmap on the cover shows the idea: each headline word “looks back” at the article words that matter most for it.'
    },
    stats: [
      ['77.8M', 'parameters'],
      ['50K+', 'Gigaword pairs'],
      ['Bahdanau', 'attention']
    ],
    did: ['Built a 77.8M-parameter encoder–decoder LSTM in PyTorch', 'Implemented Bahdanau attention', 'Added beam search decoding for more fluent headlines', 'Trained on 50K+ Gigaword article–headline pairs'],
    links: [
      ['GitHub Code', 'https://github.com/Janya282/LSTM-Headline-Generation']
    ]
  }, {
    title: 'Bulletin Board Server',
    result: 'A shared board that stays in sync while many clients post, pin and clear at the same time, with every request and reply visible in the log.',
    cats: ['be'],
    cat: 'Back-end',
    when: 'Feb-Mar 2026',
    img: 'img/server.webp',
    img2: 'img/server2.webp',
    url: 'BulletinClient · connected',
    ac: '#9FE3C1',
    acd: '#2E9E6A',
    pk: '#DDF3E8',
    giant: 'CONNECT',
    short: 'Many clients, one server, everyone posting notes at once.',
    tagline: 'Many clients. One board. Everyone posting at the same time.',
    tags: ['Java', 'Stream sockets', 'Concurrency'],
    role: 'Developer',
    type: 'Client–server app',
    stack: 'Java, stream sockets, VS Code, Git',
    overview: 'A client server application built on Java stream sockets. It simulates a networked bulletin board where many clients post, read and pin notes on one central server at the same time.',
    keys: ['Sockets', 'Concurrency', 'Protocol'],
    goal: 'Simulate a shared bulletin board over a network, where lots of people can post and read at once without stepping on each other.',
    task: 'Build a central server on Java stream sockets, a simple text protocol, and a client to post, get, pin, unpin, shake and clear.',
    steps: [
      ['Protocol', 'Designed plain text commands like POST, GET, PIN and UNPIN, plus SHAKE and CLEAR for the board.'],
      ['Server', 'A ServerSocket accepts each client and hands it its own handler thread.'],
      ['Client', 'Built the client with sections to connect, post, get notes, pin and run board actions.'],
      ['Test', 'Ran many clients at once and watched the live server log to check every reply.']
    ],
    sys: {
      n: 'How it talks',
      flow: [
        ['Clients', 'many at once'],
        ['Stream sockets', 'TCP connection'],
        ['Server', 'one thread per client'],
        ['Shared board', 'notes & pins']
      ],
      log: true,
      note: 'Commands from the client and the server’s replies, as they show up in the app’s log.'
    },
    did: ['Built the central server on Java stream sockets', 'Handled many concurrent clients, one thread each', 'Built the client to post, get, pin and unpin notes', 'Added shake and clear board actions, with a live server log'],
    links: [
      ['GitHub Code', 'https://github.com/Janya282/bulletinboard']
    ]
  }, {
    title: 'Space Invaders',
    result: 'A playable remake where every sprite and animation is my own, built from the game loop up.',
    cats: ['3d'],
    cat: '3D & games',
    when: '2023',
    img: 'img/space.webp',
    url: 'Processing · game window',
    ac: '#B9A7FF',
    acd: '#6F52EC',
    pk: '#ECE6FF',
    giant: 'PIXELS',
    short: 'A remake with every sprite hand drawn pixel by pixel.',
    tagline: 'An arcade classic, redrawn one pixel at a time.',
    tags: ['Java', 'Processing', 'Pixel art'],
    role: 'Developer & pixel artist',
    type: 'Game',
    stack: 'Java, Processing',
    overview: 'I rebuilt the arcade classic in Java using Processing. Every sprite is drawn by hand, pixel by pixel, and animated frame by frame.',
    keys: ['Pixel art', 'Game loop', 'Animation'],
    goal: 'Recreate a classic arcade game from scratch to learn how games really tick.',
    task: 'Draw every sprite by hand, animate them, and write the game loop, movement and collisions in Java with Processing.',
    steps: [
      ['Draw', 'Drew every alien, ship and projectile on a pixel grid.'],
      ['Animate', 'Animated sprites frame by frame, including the marching rows.'],
      ['Loop', 'Wrote the game loop and movement in Processing.'],
      ['Collide', 'Added hit detection between shots, ships and aliens.']
    ],
    did: ['Drew every alien, ship and projectile as pixel art', 'Animated the sprites and the marching rows', 'Wrote the game loop, movement and collisions'],
    links: []
  }, {
    title: 'Mythical Sword',
    cats: ['3d'],
    cat: '3D & games',
    when: 'Summer 2024',
    img: 'img/swordpic.webp',
    video: 'img/sword.mp4',
    url: 'Blender · render',
    pos: 'center 30%',
    ac: '#9FE8E0',
    acd: '#1E9C90',
    pk: '#E3F4F1',
    giant: 'RENDER',
    short: 'A glowing rune sword, modelled, lit and animated in Blender.',
    tagline: 'A sword in a cave, its runes glowing in the light.',
    tags: ['Blender', 'Modelling', 'Lighting', 'Rendering'],
    role: '3D artist',
    type: '3D modelling · personal project',
    stack: 'Blender',
    overview: 'A mythical sword I modelled in Blender',
    keys: ['Modelling', 'Lighting', 'Animation'],
    sys: {
      n: 'Visual language',
      colors: ['#0C0B0A', '#4B3A2C', '#917E65', '#E4CCB4', '#3FE0D0'],
      note: 'Pulled from the render.'
    },
    links: [
      ['More on Behance', LINKS.behance]
    ]
  }, ];
  PROJ.forEach((p, i) => p.i = i);
  // "I'm here for…" picker: brings the matching projects to the top and dims the rest
  const LENSES = [
    ['all', 'A bit of everything', [0, 1, 2, 3, 4, 5, 6, 7]],
    ['ux', 'UX design', [2, 3, 1, 0]],
    ['fe', 'Front-end', [1, 0]],
    ['be', 'Back-end', [1, 5]],
    ['ai', 'AI / ML', [4]],
    ['3d', '3D & games', [7, 6]]
  ];
  const rowHTML = p => `<li class="w-row" data-i="${p.i}" style="--pk:${p.pk}"><button data-proj="${p.i}" aria-label="${p.title}: open case study"><span class="w-rn">${pad(p.i + 1)}</span><span class="w-rthumb"><img src="${p.img}" alt="" loading="lazy" style="--pos:${p.pos || 'top center'}"></span><span class="w-rt"><b>${p.title}</b><span>${p.short}</span></span><span class="w-rtags">${p.cats.map(c => `<i>${CATNAME[c]}</i>`).join('')}</span><span class="w-rgo" aria-hidden="true">→</span></button></li>`;
  $('#w-work').innerHTML = `<div class="w-work-head"><div><p class="w-cat-k">// selected work</p><h2>Projects<sup>(${pad(PROJ.length)})</sup></h2></div>
  </div>
  <div class="w-lens"><p class="w-lens-q">I’ve worked on<span aria-hidden="true">…</span></p><div class="w-lens-opts" role="group" aria-label="Show projects by area">${LENSES.map(([k, t, ids], n) => `<button data-lens="${k}" aria-pressed="${n === 0}">${t}${k === 'all' ? '' : `<small>${ids.length}</small>`}</button>`).join('')}</div></div>
  <div class="w-index"><ul class="w-list" id="w-list">${PROJ.map(rowHTML).join('')}</ul>
  <div class="w-peek"><button class="w-peek-btn" id="w-peek" data-proj="0" tabindex="-1" aria-hidden="true"><span class="w-peek-frame" id="w-peek-frame" style="display:block">${PROJ.map(p => `<img src="${p.img}" alt="" style="--pos:${p.pos || 'top center'}">`).join('')}</span><span class="w-peek-cap"><span class="w-peek-txt"><b id="w-peek-t"></b><span id="w-peek-m"></span></span><span class="w-peek-go">Case study →</span></span></button></div></div>
  <p class="w-hint">${isTouch ? 'tap a project to open its case study' : 'hover a project to preview it · click for the full case study'}</p>`;
  const listEl = $('#w-list'),
    peekBtn = $('#w-peek'),
    peekFrame = $('#w-peek-frame');
  let peekI = -1;

  function peek(i) {
    if (i === peekI) return;
    peekI = i;
    const p = PROJ[i];
    listEl.querySelectorAll('.w-row').forEach(r => r.classList.toggle('on', +r.dataset.i === i));
    [...peekFrame.children].forEach((im, k) => im.classList.toggle('on', k === i));
    peekFrame.style.setProperty('--pk', p.pk);
    peekBtn.dataset.proj = i;
    $('#w-peek-t').textContent = p.title;
    $('#w-peek-m').textContent = `${p.role} · ${p.type}`;
  }

  const rowEls = [...listEl.querySelectorAll('.w-row')];

  function setLens(k) {
    const [, , ids] = LENSES.find(l => l[0] === k);
    document.querySelectorAll('#w-work [data-lens]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lens === k));
    rowEls.forEach(r => r.hidden = true);
    ids.forEach((i, n) => {
      const r = rowEls[i];
      listEl.appendChild(r);
      r.hidden = false;
      r.classList.remove('anim');
      void r.offsetWidth;
      r.style.animationDelay = (n * 45) + 'ms';
      r.classList.add('anim');
    });
    peekI = -1;
    peek(ids[0]);
  }
  listEl.addEventListener('pointerover', e => {
    const r = e.target.closest('.w-row');
    if (r) peek(+r.dataset.i);
  });
  listEl.addEventListener('focusin', e => {
    const r = e.target.closest('.w-row');
    if (r) peek(+r.dataset.i);
  });
  peek(0);

  // project case study
  const sheet = $('#w-sheet'),
    wsCard = $('#ws-card'),
    wsScroll = $('#ws-scroll');
  let sheetIdx = -1;
  const lum = h => {
    const n = parseInt(h.slice(1), 16);
    return (.299 * (n >> 16) + .587 * (n >> 8 & 255) + .114 * (n & 255)) / 255;
  };
  const browser = (src, label, pos, alt) => `<div class="cs-browser"><div class="cs-bar"><i></i><i></i><i></i><span>${label}</span></div><img src="${src}" alt="${alt}" style="--pos:${pos || 'top center'}"></div>`;
  const ROCKET = ['.....x.....', '....xxx....', '....xox....', '...xxxxx...', '...xxxxx...', '..xxxxxxx..', '.xx.xxx.xx.', 'xx..xxx..xx', 'x...x.x...x', '....y.y....', '...y...y...'];

  function sysHTML(p) {
    const s = p.sys;
    let h = '';
    if (s.proto) h += `<div class="cs-proto cs-rv"><div class="cs-bar"><i></i><i></i><i></i><span>Figma prototype · click the cans</span><a href="${s.protoLink}" target="_blank" rel="noopener">Full screen ↗</a></div><div class="cs-proto-frame"><img src="${p.img}" alt="" aria-hidden="true"><iframe src="${s.proto}" title="${p.title} interactive Figma prototype" loading="lazy" allowfullscreen></iframe></div></div><p class="cs-sub">Palette from the screens</p>`;
    if (s.findings) h += `<ol class="cs-find">${s.findings.map(([t, d], k) => `<li class="cs-rv" style="transition-delay:${k*70}ms"><b>${pad(k + 1)}</b><div><h4>${t}</h4><p>${d}</p></div></li>`).join('')}</ol>`;
    if (s.meters) {
      const mx = Math.max(...s.meters.map(m => m[1]));
      h += `<p class="cs-sub">Average time per task (students)</p><div class="cs-meters cs-rv">${s.meters.map(([t, v]) => `<div class="cs-meter"><span>${t}</span><i><span style="width:${(v/mx*100).toFixed(1)}%"></span></i><b>${v}s</b></div>`).join('')}</div>`;
    }
    if (s.flow) h += `<ol class="cs-flow cs-rv">${s.flow.map(([t, d]) => `<li><b>${t}</b><span>${d}</span></li>`).join('')}</ol>`;
    if (s.log) h += `<div class="cs-term cs-rv"><span class="c"># start the server</span>
$ java Server &lt;port&gt; &lt;board_width&gt; &lt;board_height&gt; &lt;note_width&gt; &lt;note_height&gt; &lt;colours…&gt;
<span class="r">Server running on port 4554</span>
<span class="c"># each client that connects gets its own ProtocolHandler thread</span>
<span class="s">Sent:</span> POST 10 10 white HELLO
<span class="r">Received: OK NOTE_POSTED</span>
<span class="s">Sent:</span> POST 20 15 red bye
<span class="r">Received: OK NOTE_POSTED</span></div>`;
    const pal = s.colors ? `<div class="cs-pal cs-rv">${s.colors.map(c => `<div style="background:${c}; color:${lum(c) > .6 ? '#231C1F' : '#fff'}"><span>${c}</span></div>`).join('')}</div>` : '';
    if (s.pixels) h += `<div class="cs-split"><div class="cs-px cs-rv" aria-label="A pixel-art rocket drawn on an 11 by 11 grid" role="img">${ROCKET.join('').split('').map((ch, n) => `<i class="${ch === '.' ? '' : ch}" style="--n:${n}"></i>`).join('')}</div><div>${pal}<p class="cs-note">${s.note}</p></div></div>`;
    else h += (s.flow && pal ? '<p class="cs-sub">Palette from the screens</p>' : '') + pal + `<p class="cs-note">${s.note}</p>`;
    if (s.lists) h += `<div class="cs-lists">${s.lists.map(([t, items]) => `<article class="cs-rv"><h4>${t}</h4><ul>${items.map(x => `<li>${x}</li>`).join('')}</ul></article>`).join('')}</div>`;
    h += `<p class="cs-sub">Built with</p><ul class="cs-stack">${p.stack.split(', ').map(t => `<li>${t}</li>`).join('')}</ul>`;
    return h;
  }

  function fillProject(i) {
    const p = PROJ[i],
      next = PROJ[(i + 1) % PROJ.length],
      N = PROJ.length;
    ['ac', 'acd', 'pk'].forEach(k => wsCard.style.setProperty('--' + k, p[k]));
    $('#ws-count').textContent = `${pad(i + 1)} / ${pad(N)}`;
    let n = 0;
    const H = t => `<header class="cs-h"><span>${pad(++n)}</span><h3>${t}</h3></header>`;
    const vid = cls => `<video class="${cls}" src="${p.video}" poster="${p.img}" muted autoplay loop playsinline style="--pos:${p.pos || 'center'}"></video>`;
    const coverMock = p.video ? `<div class="cs-browser"><div class="cs-bar"><i></i><i></i><i></i><span>${p.url}</span></div>${vid('')}</div>` : browser(p.img, p.url, p.pos, p.title);
    const shots = [p.img, p.img2].filter(Boolean);
    const links = p.links.length ? `<div class="cs-links">${p.links.map(([t, h], k) => `<a class="w-btn${k ? ' ghost' : ''}" href="${h}" target="_blank" rel="noopener">${t} ↗</a>`).join('')}</div>` : '';
    const band = p.noBand ? '' : p.video ? `<div class="cs-band"><div class="cs-vid cs-rv">${vid('')}</div></div>` :
      `<div class="cs-band"><div class="cs-shots${shots.length < 2 ? ' one' : ''}">${shots.map((s, k) => `<div class="cs-rv" style="transition-delay:${k*120}ms">${browser(s, p.url, p.pos, `${p.title}${k ? ', another view' : ''}`)}</div>`).join('')}</div></div>`;
    const gal = p.gallery ? `<div class="cs-body"><section class="cs-sec"><p class="cs-sub" style="margin-top:0">${p.galleryTitle || 'From the research deck'}</p><div class="cs-gal${p.gallery.length < 2 ? ' one' : ''}">${p.gallery.map(([src, cap, fit], k) => `<figure class="cs-rv" style="transition-delay:${(k % 2)*90}ms"><img src="${src}" alt="${cap}" loading="lazy"${fit ? ' class="contain"' : ''}><figcaption>${cap}</figcaption></figure>`).join('')}</div></section></div>` : '';
    let body = `<section class="cs-sec">${H('About the project')}
      <div class="cs-about"><p class="cs-lede cs-rv">${p.overview}</p><ul class="cs-keys cs-rv">${p.keys.map(k => `<li>${k}</li>`).join('')}</ul></div>
      <dl class="cs-meta cs-rv"><div><dt>Role</dt><dd>${p.role}</dd></div><div><dt>When</dt><dd>${p.when}</dd></div><div><dt>Type</dt><dd>${p.type}</dd></div><div><dt>Stack</dt><dd>${p.stack}</dd></div></dl>${p.result ? '' : links}</section>`;
    if (p.goal) body += `<section class="cs-sec">${H('Goal &amp; task')}<div class="cs-gt"><article class="cs-rv"><h4>the goal</h4><p>${p.goal}</p></article><article class="cs-rv"><h4>my task</h4><p>${p.task}</p></article></div></section>`;
    if (p.steps) body += `<section class="cs-sec">${H('Process')}<ol class="cs-steps">${p.steps.map(([t, d], k) => `<li class="cs-rv" style="transition-delay:${k*70}ms"><b>${pad(k + 1)}</b><h4>${t}</h4><p>${d}</p></li>`).join('')}</ol></section>`;
    if (p.sys) body += `<section class="cs-sec">${H(p.sys.n)}${sysHTML(p)}</section>`;
    const result = p.result ? `<div class="cs-body"><section class="cs-sec">${H('The result')}
    ${p.stats ? `<div class="cs-stats cs-rv">${p.stats.map(([b, t]) => `<div><b>${b}</b><span>${t}</span></div>`).join('')}</div>` : ''}
    <div class="cs-res"><p class="cs-lede cs-rv">${p.result}</p><div class="cs-rv">${p.didTitle ? `<p class="cs-sub" style="margin-top:0">${p.didTitle}</p>` : ''}<ul>${p.did.map(d => `<li>${d}</li>`).join('')}</ul>${p.next ? `<p class="cs-sub">With more time</p><ul>${p.next.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}${links}</div></div></section></div>` : '';
    wsScroll.innerHTML = `
  <section class="cs-cover">
    <p class="cs-giant" aria-hidden="true">${p.giant}</p>
    <div class="cs-cover-in"><p class="cs-kick">${p.cats.map(c => CATNAME[c]).join(' · ')} — ${pad(i + 1)}/${pad(N)}</p><h2 id="cs-title">${p.title}</h2><p class="cs-tagline">${p.tagline}</p><ul class="cs-chips">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul></div>
    <div class="cs-mockwrap">${coverMock}</div>
  </section>
  <div class="cs-body">${body}</div>
  ${band}${gal}${result}
  <button class="cs-next" data-goproj="${next.i}" style="--ac:${next.ac}"><small>Next project · ${pad(next.i + 1)}/${pad(N)}</small><b>${next.title}</b><em>Read the case study →</em><img src="${next.img}" alt="" style="--pos:${next.pos || 'top center'}"></button>
  <section class="cs-cta"><p>// have an idea?</p><h3>Let’s work <em>together</em></h3><div><a class="w-btn" href="mailto:${LINKS.email}">Email me ↗</a><button class="w-btn ghost" data-close>← Back to all work</button></div></section>`;
    wsScroll.scrollTop = 0;
    const rvs = wsScroll.querySelectorAll('.cs-rv');
    if (csIO) rvs.forEach(el => csIO.observe(el));
    else rvs.forEach(el => el.classList.add('in'));
  }
  const csIO = ('IntersectionObserver' in window && !reduced) ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      csIO.unobserve(e.target);
    }
  }), {
    root: wsScroll,
    threshold: .1
  }) : null;

  function openProject(i) {
    i = (i + PROJ.length) % PROJ.length;
    if (!sheet.hidden && sheetIdx !== -1) {
      wsCard.classList.add('swap');
      setTimeout(() => {
        fillProject(i);
        sheetIdx = i;
        requestAnimationFrame(() => wsCard.classList.remove('swap'));
      }, 280);
      return;
    }
    sheetIdx = i;
    fillProject(i);
    sheet.hidden = false;
    wsScroll.scrollTop = 0;
    requestAnimationFrame(() => requestAnimationFrame(() => sheet.classList.add('on')));
    setTimeout(() => sheet.querySelector('.ws-pill button').focus({
      preventScroll: true
    }), 300);
  }

  function closeProject() {
    if (sheet.hidden) return;
    sheet.classList.remove('on');
    const back = sheetIdx;
    sheetIdx = -1;
    setTimeout(() => {
      if (!sheet.classList.contains('on')) sheet.hidden = true;
    }, reduced ? 10 : 820);
    const row = listEl.querySelector(`.w-row[data-i="${back}"] button`);
    if (row && !row.closest('[hidden]')) row.focus({
      preventScroll: true
    });
  }
  sheet.addEventListener('click', e => {
    if (e.target.closest('[data-close]')) {
      closeProject();
      return;
    }
    const st = e.target.closest('[data-step]');
    if (st) {
      openProject(sheetIdx + +st.dataset.step);
      return;
    }
    const fv = e.target.closest('[data-flav]');
    if (fv) {
      const box = fv.closest('.cs-flav'),
        k = +fv.dataset.flav;
      box.querySelectorAll('[data-flav]').forEach(b => b.setAttribute('aria-pressed', +b.dataset.flav === k));
      box.querySelectorAll('.cs-flav-stage img').forEach((im, j) => im.classList.toggle('on', j === k));
      return;
    }
    const n = e.target.closest('[data-goproj]');
    if (n) {
      openProject(+n.dataset.goproj);
      return;
    }
    const cp = e.target.closest('[data-copy]');
    if (cp) copyText(cp.dataset.copy, cp);
  });
  window.addEventListener('keydown', e => {
    if (sheet.hidden) return;
    if (e.key === 'Escape') closeProject();
    else if (e.key === 'ArrowRight' && !e.target.closest('input,textarea')) openProject(sheetIdx + 1);
    else if (e.key === 'ArrowLeft' && !e.target.closest('input,textarea')) openProject(sheetIdx - 1);
  });

  // statement, built word by word so it can fill in as you scroll
  const STATEMENT = "Computer Science student at Laurier. I work across {research|p1}, {design|p2} and {development|p3}.";
  $('#w-big').innerHTML = STATEMENT.split(' ').map(w => {
    const m = w.match(/^\{(.+)\|(p\d)\}(.*)$/);
    return m ? `<span style="white-space:nowrap"><span class="w-wd w-pill ${m[2]}">${m[1]}</span><span class="w-wd">${m[3]}</span></span>` : `<span class="w-wd">${w}</span>`;
  }).join(' ') + '<span class="w-caret" aria-hidden="true"></span>';
  const words = [...document.querySelectorAll('#w-big .w-wd')].filter(w => w.textContent);

  // tool tickers
  const TOOLS1 = ['Python', 'Java', 'C#', 'JavaScript', 'SQL', 'HTML', 'CSS', 'React'],
    TOOLS2 = ['PyTorch', 'Figma', 'Blender', 'Git', 'Linux', 'Canva', 'Axure', 'VS Code'];
  const tick = arr => {
    const one = arr.map(t => `<span>${t}</span><i>✦</i>`).join('');
    return one + one + one + one;
  };
  $('#w-tk1').innerHTML = tick(TOOLS1);
  $('#w-tk2').innerHTML = tick(TOOLS2);

  // hero reel: cycles through project screenshots between "Janya" and "Walia"
  const reel = $('#w-reel'),
    REEL = ['img/lsps.webp', 'img/cars.webp', 'img/alani_strawberry.webp', 'img/swordpic.webp', 'img/loris.webp'];
  reel.innerHTML = REEL.map((s, i) => `<img src="${s}" alt=""${i === 0 ? ' class="on"' : ''}>`).join('');
  let reelI = 0;
  if (!reduced) setInterval(() => {
    const ims = reel.children;
    ims[reelI].classList.remove('on');
    reelI = (reelI + 1) % ims.length;
    ims[reelI].classList.add('on');
  }, 2300);

  // scroll-driven effects
  const bigEl = $('#w-big'),
    darkEl = $('#w-experience'),
    l1 = darkEl.querySelector('.l1'),
    l2 = darkEl.querySelector('.l2'),
    heroEl = $('#w-top'),
    tlEl = $('#w-tl');
  const clamp01 = v => Math.max(0, Math.min(1, v));
  let fxPending = false;

  function scrollFx() {
    fxPending = false;
    const vh = siteInner.clientHeight,
      vw = siteInner.clientWidth;
    heroEl.style.setProperty('--sy', (-siteInner.scrollTop * .25).toFixed(1) + 'px');
    if (reduced) {
      words.forEach(w => w.classList.add('on'));
      tlEl.style.setProperty('--fill', '100%');
      return;
    }
    const r = bigEl.getBoundingClientRect();
    const p = clamp01((vh * .82 - r.top) / (r.height + vh * .3));
    const n = Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
    const rd = darkEl.getBoundingClientRect(),
      q2 = clamp01((vh * 1.05 - rd.top) / (vh * 1.1));
    l1.style.transform = `translateX(${((1 - q2)*-18).toFixed(2)}%)`;
    l2.style.transform = `translateX(${((1 - q2)*18).toFixed(2)}%)`;
    const rt = tlEl.getBoundingClientRect();
    tlEl.style.setProperty('--fill', (clamp01((vh * .62 - rt.top) / (rt.height - 40)) * 100).toFixed(1) + '%');
  }
  siteInner.addEventListener('scroll', () => {
    if (!fxPending) {
      fxPending = true;
      requestAnimationFrame(scrollFx);
    }
  }, {
    passive: true
  });
  window.addEventListener('resize', () => requestAnimationFrame(scrollFx));
  scrollFx();
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }), {
      root: siteInner,
      threshold: .12
    });
    document.querySelectorAll('#site .rv').forEach(el => io.observe(el));
  } else document.querySelectorAll('#site .rv').forEach(el => el.classList.add('in'));
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => es.forEach(e => {
      previewVisible = e.isIntersecting;
    }), {
      root: siteInner,
      threshold: 0
    }).observe($('.w-portal'));
  }
  heroEl.addEventListener('pointermove', e => {
    const b = heroEl.getBoundingClientRect();
    heroEl.style.setProperty('--mx', ((e.clientX - b.left) / b.width - .5).toFixed(3));
    heroEl.style.setProperty('--my', ((e.clientY - b.top) / b.height - .5).toFixed(3));
  });
  let heroBurst = null;
  // hero: the languages and tools I use pop out behind the cursor as stickers
  (() => {
    const box = $('#w-trail'),
      hint = $('#w-trail-hint');
    if (!box) return;
    const TOOLS = [
      ['Python', 'py', 'lang'],
      ['Figma', '✦', 'design'],
      ['JavaScript', 'js', 'lang'],
      ['PyTorch', 'ai', 'ai'],
      ['React', '&lt;&gt;', 'tool'],
      ['Java', '{ }', 'lang'],
      ['Blender', '3d', 'design'],
      ['SQL', 'db', 'lang'],
      ['Git', 'git', 'tool'],
      ['HTML', '&lt;/&gt;', 'lang'],
      ['Hugging Face', 'nlp', 'ai'],
      ['CSS', '{ }', 'lang'],
      ['Linux', '$_', 'tool'],
      ['C#', '#', 'lang'],
      ['Canva', '✦', 'design'],
      ['VS Code', '>_', 'tool'],
      ['Spline', '3d', 'design'],
      ['Processing', 'pde', 'tool'],
      ['Axure', '✦', 'design']
    ];
    let k = 0,
      live = 0,
      acc = 0,
      lx = null,
      ly = null,
      lastMove = 1e12,
      onScreen = true,
      hinted = false;
    if (isTouch) hint.lastChild.textContent = 'tap anywhere: these are my tools';

    function pop(x, y, dx = 0, dy = 0, life = 1700) {
      if (live > 24) return;
      const [name, ic, type] = TOOLS[k++ % TOOLS.length];
      const el = document.createElement('span');
      el.className = `w-tg t-${type}${k % 3 === 0 ? ' sq' : ''}`;
      el.innerHTML = `<i>${ic}</i>${name}`;
      box.appendChild(el);
      live++;
      const r = (Math.random() * 2 - 1) * 13,
        r2 = r + (Math.random() * 2 - 1) * 10,
        n = Math.hypot(dx, dy) || 1,
        fx = dx / n * 26,
        fy = dy / n * 26 + 34;
      const at = (tx, ty, rot, sc) => `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) translate(-50%, -50%) rotate(${rot.toFixed(1)}deg) scale(${sc})`;
      const a = el.animate([{
        transform: at(x, y, r - 12, 0),
        opacity: 1
      }, {
        transform: at(x + fx * .2, y + fy * .1 - 6, r + 3, 1.14),
        opacity: 1,
        offset: .14
      }, {
        transform: at(x + fx * .3, y + fy * .15, r, 1),
        opacity: 1,
        offset: .24
      }, {
        transform: at(x + fx * .8, y + fy * .6, r2, .96),
        opacity: 1,
        offset: .78
      }, {
        transform: at(x + fx, y + fy, r2, .5),
        opacity: 0
      }], {
        duration: life,
        easing: 'cubic-bezier(.25,.8,.3,1)'
      });
      a.onfinish = () => {
        el.remove();
        live--;
      };
    }
    heroBurst = (x, y) => {
      lastMove = performance.now();
      for (let i = 0; i < 6; i++) {
        const an = -Math.PI * (.1 + .8 * i / 5);
        setTimeout(() => pop(x + Math.cos(an) * 30, y + Math.sin(an) * 20, Math.cos(an), Math.sin(an) - .4, 2000), i * 55);
      }
    };

    function hideHint() {
      if (!hinted) {
        hinted = true;
        setTimeout(() => hint.classList.add('gone'), 1400);
      }
    }
    if (reduced) {
      // no motion: a few stickers resting where they landed
      const spots = [
        [.06, .17, -8],
        [.28, .11, 6],
        [.5, .19, -5],
        [.7, .1, 9],
        [.86, .2, -6],
        [.4, .07, 4]
      ];
      spots.forEach(([fx, fy, r]) => {
        const [name, ic, type] = TOOLS[k++ % TOOLS.length];
        const el = document.createElement('span');
        el.className = `w-tg t-${type}`;
        el.innerHTML = `<i>${ic}</i>${name}`;
        el.style.cssText = `left:${fx*100}%; top:${fy*100}%; transform:rotate(${r}deg)`;
        box.appendChild(el);
      });
      hint.hidden = true;
      return;
    }
    heroEl.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      const b = heroEl.getBoundingClientRect(),
        s = b.width / heroEl.offsetWidth || 1,
        x = (e.clientX - b.left) / s,
        y = (e.clientY - b.top) / s;
      if (lx !== null) {
        const dx = x - lx,
          dy = y - ly;
        acc += Math.hypot(dx, dy);
        if (acc > 95) {
          acc = 0;
          pop(x, y, dx, dy);
          hideHint();
        }
      }
      lx = x;
      ly = y;
      lastMove = performance.now();
    });
    heroEl.addEventListener('pointerleave', () => {
      lx = ly = null;
    });
    heroEl.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' || e.target.closest('button, a')) return;
      const b = heroEl.getBoundingClientRect(),
        s = b.width / heroEl.offsetWidth || 1,
        x = (e.clientX - b.left) / s,
        y = (e.clientY - b.top) / s;
      for (let i = 0; i < 4; i++) {
        const a = i / 4 * 6.283 + Math.random();
        setTimeout(() => pop(x + Math.cos(a) * 30, y + Math.sin(a) * 24, Math.cos(a), Math.sin(a), 1900), i * 70);
      }
      lastMove = performance.now();
      hideHint();
    });
    // when nobody's moving the mouse, a ghost cursor keeps the trail going
    let gt = Math.random() * 10,
      glx = null,
      gly = null;
    setInterval(() => {
      if (!onScreen || document.hidden || performance.now() - lastMove < 2600) {
        glx = null;
        return;
      }
      const W = heroEl.offsetWidth,
        H = heroEl.offsetHeight;
      gt += .42;
      const x = W * (.5 + .4 * Math.sin(gt * .33)),
        y = H * (.3 + .17 * Math.sin(gt * .51 + 1));
      pop(x, y, glx === null ? 1 : x - glx, gly === null ? 0 : y - gly, 1900);
      glx = x;
      gly = y;
    }, 420);
    if ('IntersectionObserver' in window) new IntersectionObserver(es => {
      onScreen = es[0].isIntersecting;
    }, {
      root: siteInner
    }).observe(heroEl);
  })();
  // landing intro: the nav, every letter of my name, the project card and the buttons fall in and bounce into place
  (() => {
    const siteEl = $('#site'),
      nameEl = $('.w-name');
    nameEl.querySelectorAll('.w-line > span').forEach(s => {
      s.innerHTML = [...s.textContent].map(c => `<span class="w-ch">${c}</span>`).join('');
    });
    const show = () => siteEl.classList.remove('intro');
    if (reduced) {
      show();
      return;
    }
    const safety = setTimeout(show, 4500);
    const rnd = (a, b) => a + Math.random() * (b - a);

    function drop(el, delay, o = {}) {
      const H = o.h || (el.getBoundingClientRect().bottom + 80),
        rot = o.rot || 0,
        bounce = o.bounce ?? Math.min(46, H * .07),
        sq = o.squash ?? .14,
        base = o.baseRot || 0;
      return el.animate([{
        translate: `0 ${-H}px`,
        rotate: `${base + rot}deg`,
        scale: '1 1',
        easing: 'cubic-bezier(.55,0,.95,.5)'
      }, {
        translate: '0 0',
        rotate: `${base + rot*.2}deg`,
        scale: `${1 + sq} ${1 - sq}`,
        offset: .52,
        easing: 'cubic-bezier(.15,.7,.35,1)'
      }, {
        translate: `0 ${-bounce}px`,
        rotate: `${base - rot*.08}deg`,
        scale: '.97 1.04',
        offset: .72,
        easing: 'cubic-bezier(.6,0,.9,.5)'
      }, {
        translate: '0 0',
        rotate: `${base}deg`,
        scale: `${1 + sq*.35} ${1 - sq*.35}`,
        offset: .86,
        easing: 'ease-out'
      }, {
        translate: '0 0',
        rotate: `${base}deg`,
        scale: '1 1'
      }], {
        duration: o.dur || 980,
        delay,
        fill: 'backwards'
      });
    }

    function run() {
      clearTimeout(safety);
      show();
      const hint = $('#w-trail-hint');
      if (hint) hint.style.opacity = 0;
      // nav pieces drop first, softly
      [...document.querySelectorAll('.w-nav > *')].forEach((el, i) => drop(el, i * 90, {
        h: 140,
        bounce: 10,
        squash: .06,
        dur: 800
      }));
      // then the letters of my name, one by one, each with its own spin
      const chars = [...nameEl.querySelectorAll('.w-ch')];
      chars.forEach((c, i) => drop(c, 260 + i * 70 + rnd(0, 40), {
        rot: rnd(-28, 28),
        dur: rnd(900, 1080)
      }));
      const lettersDone = 260 + chars.length * 70;
      // role line and the bottom row
      drop($('.w-role'), lettersDone - 220, {
        bounce: 14,
        squash: .06,
        dur: 950
      });
      [...document.querySelectorAll('.w-hero-row > *')].forEach((el, i) => drop(el, lettersDone + 120 + i * 120, {
        bounce: 18,
        squash: .08,
        dur: 950
      }));
      // the project card lands last, with a thud that shakes the name
      const reelEl = $('#w-reel'),
        tReel = lettersDone + 260;
      drop(reelEl, tReel, {
        rot: 22,
        baseRot: -5,
        bounce: 34,
        squash: .2,
        dur: 1150
      });
      setTimeout(() => {
        nameEl.animate([{
          translate: '0 0'
        }, {
          translate: '0 7px'
        }, {
          translate: '0 -3px'
        }, {
          translate: '0 1px'
        }, {
          translate: '0 0'
        }], {
          duration: 420,
          easing: 'ease-out'
        });
        const b = reelEl.getBoundingClientRect(),
          hb = heroEl.getBoundingClientRect(),
          s = hb.width / heroEl.offsetWidth || 1;
        if (heroBurst) heroBurst((b.left + b.width / 2 - hb.left) / s, (b.top - hb.top) / s);
      }, tReel + 1150 * .52);
      setTimeout(() => {
        const h = $('#w-trail-hint');
        if (h) {
          h.style.opacity = '';
        }
        if (h) h.animate([{
          opacity: 0,
          translate: '0 -10px'
        }, {
          opacity: 1,
          translate: '0 0'
        }], {
          duration: 600,
          fill: 'backwards'
        });
      }, tReel + 900);
    }
    Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 1400))]).then(() => requestAnimationFrame(run));
  })();

  siteInner.addEventListener('click', e => {
    const r = e.target.closest('[data-room]');
    if (r) {
      e.preventDefault();
      exitSite();
      return;
    }
    const pj = e.target.closest('[data-proj]');
    if (pj) {
      openProject(+pj.dataset.proj);
      return;
    }
    const ln = e.target.closest('[data-lens]');
    if (ln) {
      setLens(ln.dataset.lens);
      return;
    }
    const sc = e.target.closest('[data-scroll]');
    if (sc) {
      const el = sc.dataset.scroll === 'top' ? null : $('#w-' + sc.dataset.scroll);
      siteInner.scrollTo({
        top: el ? el.offsetTop - 20 : 0,
        behavior: reduced ? 'auto' : 'smooth'
      });
      return;
    }
    const cp = e.target.closest('[data-copy]');
    if (cp) copyText(cp.dataset.copy, cp);
  });
  const lerp = (a, b, t) => a + (b - a) * t;

  function setBox(l, t, w, h, r, op) {
    const W = window.innerWidth,
      Hh = window.innerHeight;
    Object.assign(site.style, {
      left: l + 'px',
      top: t + 'px',
      width: w + 'px',
      height: h + 'px',
      borderRadius: r + 'px',
      opacity: op
    });
    Object.assign(siteInner.style, {
      width: W + 'px',
      height: Hh + 'px',
      transform: `scale(${w/W})`
    });
  }

  function fullBox() {
    site.removeAttribute('style');
    siteInner.removeAttribute('style');
    site.classList.remove('framed');
  }

  if (!window.THREE) {
    threeFailed = true;
    return;
  }
  try {
    await Promise.race([
      Promise.all(['36px VT323', '600 30px Fredoka', '700 30px Fredoka', '600 16px "IBM Plex Mono"', '500 16px "IBM Plex Mono"', '700 40px "Bricolage Grotesque"', '600 40px "Bricolage Grotesque"', '600 14px "Instrument Sans"', '400 12px "Space Mono"'].map(f => document.fonts.load(f))),
      new Promise(r => setTimeout(r, 2600))
    ]);
  } catch (e) {}

  /* ============ sound ============ */
  let soundOn = store.get('sound', true),
    actx = null;

  function ac() {
    if (!actx) {
      try {
        actx = new(window.AudioContext || window.webkitAudioContext)();
      } catch (e) {}
    }
    if (actx && actx.state === 'suspended') actx.resume();
    return actx;
  }

  function tone(f, d = .12, type = 'sine', v = .05, slide = 0, delay = 0) {
    if (!soundOn) return;
    const a = ac();
    if (!a) return;
    const t = a.currentTime + delay,
      o = a.createOscillator(),
      g = a.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, f + slide), t + d);
    g.gain.setValueAtTime(.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + .012);
    g.gain.exponentialRampToValueAtTime(.0001, t + d);
    o.connect(g).connect(a.destination);
    o.start(t);
    o.stop(t + d + .03);
  }

  function noise(d = .5, f0 = 400, f1 = 2400, v = .04) {
    if (!soundOn) return;
    const a = ac();
    if (!a) return;
    const len = Math.floor(a.sampleRate * d),
      b = a.createBuffer(1, len, a.sampleRate),
      ch = b.getChannelData(0);
    for (let i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
    const s = a.createBufferSource(),
      bp = a.createBiquadFilter(),
      g = a.createGain(),
      t = a.currentTime;
    s.buffer = b;
    bp.type = 'bandpass';
    bp.Q.value = 1.4;
    bp.frequency.setValueAtTime(f0, t);
    bp.frequency.exponentialRampToValueAtTime(f1, t + d);
    g.gain.setValueAtTime(.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + d * .4);
    g.gain.exponentialRampToValueAtTime(.0001, t + d);
    s.connect(bp).connect(g).connect(a.destination);
    s.start(t);
    s.stop(t + d);
  }
  const sfx = {
    click() {
      tone(620, .07, 'triangle', .045);
      tone(930, .06, 'sine', .022, 0, .03);
    },
    hover() {
      tone(1400, .03, 'sine', .007);
    },
    whoosh() {
      noise(.7, 300, 2400, .045);
    },
    beep() {
      tone(880, .09, 'square', .022);
      tone(1320, .1, 'square', .022, 0, .11);
      tone(990, .12, 'square', .022, 0, .23);
    },
    vroom() {
      tone(70, 1.2, 'sawtooth', .026, 170);
      tone(140, 1.2, 'triangle', .018, 250);
    },
    ring() {
      for (let i = 0; i < 8; i++) tone(1250, .05, 'square', .018, 0, i * .065);
    },
    chime() {
      tone(1047, .28, 'sine', .035);
      tone(1568, .4, 'sine', .03, 0, .12);
    },
    print() {
      for (let i = 0; i < 10; i++) tone(180 + Math.random() * 60, .03, 'square', .016, 0, i * .07);
    },
    purr() {
      for (let i = 0; i < 10; i++) tone(48 + Math.random() * 8, .11, 'sawtooth', .026, 0, i * .12);
    },
    pop() {
      tone(520, .09, 'sine', .045, 500);
    },
    woof() {
      tone(330, .1, 'sawtooth', .035, -140);
      tone(300, .13, 'sawtooth', .03, -150, .16);
      noise(.12, 700, 300, .02);
    }
  };

  function syncSound() {
    const b = $('#sound-btn');
    b.classList.toggle('off', !soundOn);
    b.setAttribute('aria-label', soundOn ? 'Turn sound off' : 'Turn sound on');
    b.title = soundOn ? 'Sound on' : 'Sound off';
  }
  syncSound();

  /* ============ three setup ============ */
  const V3 = THREE.Vector3;
  const canvas = $('#scene');
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .95;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, .05, 120);
  const clock = new THREE.Clock();
  const col = h => new THREE.Color(h).convertSRGBToLinear();
  const C = {
    wall: 0xead6c0,
    beige: 0xe2ccb2,
    sand: 0xd4b896,
    cream: 0xf5eadc,
    creamDeep: 0xe9d8c4,
    blush: 0xf2cdd2,
    pink: 0xe8a3af,
    rose: 0xcf7c8c,
    roseDeep: 0xa95c6c,
    honey: 0xcf9a66,
    woodLight: 0xdfba8f,
    woodMid: 0xb98457,
    woodDeep: 0x8a5d40,
    brass: 0xd4a54c,
    leaf: 0x7aa383,
    leaf2: 0x97bf9a,
    leaf3: 0x648f6f,
    ink: 0x4a3530,
    paper: 0xfdf8f2,
    kraft: 0xd8b68c,
    plum: 0x4f3a44,
    red: 0xd45a6e
  };

  function M(hex, o = {}) {
    const m = new THREE.MeshPhysicalMaterial({
      color: col(hex),
      roughness: o.r ?? .65,
      metalness: o.m ?? 0,
      clearcoat: o.cc ?? 0,
      clearcoatRoughness: o.ccr ?? .3
    });
    m.envMapIntensity = o.env ?? .8;
    if (o.map) m.map = o.map;
    if (o.em !== undefined) {
      m.emissive = col(o.em);
      m.emissiveIntensity = o.ei ?? 1;
    }
    if (o.opacity !== undefined) {
      m.transparent = true;
      m.opacity = o.opacity;
      m.depthWrite = !!o.dw;
    }
    if (o.side) m.side = o.side;
    return m;
  }
  const soft = (h, o = {}) => M(h, Object.assign({
    r: .7,
    cc: .08,
    ccr: .5,
    env: .7
  }, o));
  const fabric = (h, o = {}) => M(h, Object.assign({
    r: .92,
    env: .5
  }, o));
  const gloss = (h, o = {}) => M(h, Object.assign({
    r: .35,
    cc: .8,
    ccr: .12,
    env: .95
  }, o));
  const metal = (h, o = {}) => M(h, Object.assign({
    r: .3,
    m: .85,
    env: 1.2
  }, o));
  const basic = (map, o = {}) => new THREE.MeshBasicMaterial(Object.assign({
    map,
    toneMapped: false
  }, o));

  const gcache = {};

  function RB(w, h, d, r = .05, s = 4) {
    const key = [w, h, d, r, s].join('_');
    if (gcache[key]) return gcache[key];
    const r0 = Math.min(r, w / 2.02, h / 2.02, d / 2.02),
      eps = .00001,
      rr = r0 - eps;
    const sh = new THREE.Shape();
    sh.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
    sh.absarc(eps, h - rr * 2, eps, Math.PI, Math.PI / 2, true);
    sh.absarc(w - rr * 2, h - rr * 2, eps, Math.PI / 2, 0, true);
    sh.absarc(w - rr * 2, eps, eps, 0, -Math.PI / 2, true);
    const g = new THREE.ExtrudeGeometry(sh, {
      depth: Math.max(.0001, d - r0 * 2),
      bevelEnabled: true,
      bevelSegments: s * 2,
      steps: 1,
      bevelSize: rr,
      bevelThickness: r0,
      curveSegments: s
    });
    g.center();
    gcache[key] = g;
    return g;
  }
  const Box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
  const Cyl = (rt, rb, h, seg = 28) => new THREE.CylinderGeometry(rt, rb, h, seg);
  const Sph = (r, ws = 24, hs = 16) => new THREE.SphereGeometry(r, ws, hs);

  function mesh(geo, mat, x = 0, y = 0, z = 0, parent = scene) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  }

  function group(x = 0, y = 0, z = 0, parent = scene) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    parent.add(g);
    return g;
  }

  function rod(a, b, r, mat, parent) {
    const d = new V3().subVectors(b, a),
      len = d.length();
    const m = mesh(Cyl(r, r, len, 12), mat, 0, 0, 0, parent);
    m.position.copy(a).addScaledVector(d, .5);
    m.quaternion.setFromUnitVectors(new V3(0, 1, 0), d.normalize());
    return m;
  }

  function ctex(w, h, draw, repeat) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const g = c.getContext('2d');
    draw(g, w, h);
    const t = new THREE.CanvasTexture(c);
    t.encoding = THREE.sRGBEncoding;
    t.anisotropy = 4;
    if (repeat) {
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(repeat[0], repeat[1]);
    }
    t.userData = {
      canvas: c,
      ctx: g
    };
    return t;
  }

  function roundRect(g, x, y, w, h, r) {
    g.beginPath();
    g.moveTo(x + r, y);
    g.arcTo(x + w, y, x + w, y + h, r);
    g.arcTo(x + w, y + h, x, y + h, r);
    g.arcTo(x, y + h, x, y, r);
    g.arcTo(x, y, x + w, y, r);
    g.closePath();
  }
  const noShadow = m => {
    m.traverse(o => o.userData.noShadow = true);
    return m;
  };

  (function () {
    const es = new THREE.Scene();
    es.add(new THREE.Mesh(new THREE.BoxGeometry(30, 30, 30), new THREE.MeshBasicMaterial({
      color: col(0x8f7470),
      side: THREE.BackSide
    })));
    const lamp = (c, w, h, p) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({
        color: c,
        side: THREE.DoubleSide
      }));
      m.position.copy(p);
      m.lookAt(0, 0, 0);
      es.add(m);
    };
    lamp(new THREE.Color(2.3, 2.1, 1.95), 14, 7, new V3(0, 13, 4));
    lamp(new THREE.Color(2.0, 1.65, 1.55), 8, 9, new V3(12, 4, 8));
    lamp(new THREE.Color(1.7, 1.4, 1.5), 7, 6, new V3(-8, 5, 12));
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(es, .05).texture;
  })();

  const hemi = new THREE.HemisphereLight(col(0xffeedd), col(0xc99a74), .55);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(col(0xffd9b0), .95);
  key.position.set(5.5, 9, 7);
  key.target.position.set(-.4, .6, -.6);
  scene.add(key, key.target);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, {
    left: -5.5,
    right: 5.5,
    top: 5.5,
    bottom: -5.5,
    near: 2,
    far: 28
  });
  key.shadow.bias = -.0004;
  key.shadow.normalBias = .03;
  const fill = new THREE.DirectionalLight(col(0xffe2e6), .18);
  fill.position.set(-4, 6, 8);
  scene.add(fill);

  /* ============ room shell (6 × 6) ============ */
  boot(.2, 'laying the floorboards');
  const H = 4.2;
  const floorTex = ctex(512, 512, (g, w, h) => {
    const rows = 10,
      rh = h / rows;
    for (let i = 0; i < rows; i++) {
      const shift = (i % 3) * w * .23;
      for (let k = -1; k < 3; k++) {
        const x = k * w * .55 + shift;
        g.fillStyle = `hsl(${27 + Math.random()*5}, ${44 + Math.random()*8}%, ${69 + Math.random()*6}%)`;
        g.fillRect(x, i * rh, w * .55, rh);
        g.fillStyle = 'rgba(140,90,60,.32)';
        g.fillRect(x, i * rh, 2, rh);
        g.strokeStyle = 'rgba(160,104,70,.10)';
        g.lineWidth = 1.2;
        for (let s = 0; s < 4; s++) {
          g.beginPath();
          const yy = i * rh + 5 + Math.random() * (rh - 10);
          g.moveTo(x, yy);
          g.bezierCurveTo(x + w * .2, yy + 2, x + w * .35, yy - 2, x + w * .55, yy + 1);
          g.stroke();
        }
      }
      g.fillStyle = 'rgba(130,84,56,.38)';
      g.fillRect(0, i * rh, w, 2);
    }
  }, [1.4, 1.4]);
  const floorSide = soft(C.woodMid);
  mesh(Box(6, .3, 6), [floorSide, floorSide, M(0xffffff, {
    map: floorTex,
    r: .55,
    cc: .25,
    ccr: .4,
    env: .6
  }), floorSide, floorSide, floorSide], 0, -.15, 0);
  mesh(RB(6.45, .28, 6.45, .1), soft(C.cream), .08, -.41, .08);
  mesh(RB(6.8, .16, 6.8, .07), soft(C.beige), .15, -.61, .15);

  const wallTex = ctex(256, 256, (g, w, h) => {
    g.fillStyle = '#ead6c0';
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) {
      g.fillStyle = Math.random() < .5 ? 'rgba(255,255,255,.16)' : 'rgba(190,150,120,.07)';
      g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
  }, [3, 2]);
  const wallMat = M(0xffffff, {
    map: wallTex,
    r: .95,
    env: .45
  });
  mesh(Box(6.3, H, .3), wallMat, -.15, H / 2, -3.15);
  mesh(Box(.3, H, 6), wallMat, -3.15, H / 2, 0);
  const beadTex = ctex(256, 64, (g, w, h) => {
    g.fillStyle = '#efcdd1';
    g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 26) {
      g.fillStyle = 'rgba(160,90,100,.2)';
      g.fillRect(x, 0, 3, h);
      g.fillStyle = 'rgba(255,255,255,.5)';
      g.fillRect(x + 3, 0, 2, h);
    }
  }, [6, 1]);
  const wain = M(0xffffff, {
    map: beadTex,
    r: .75,
    env: .55
  });
  mesh(Box(6, 1.15, .05), wain, 0, .575, -2.975);
  mesh(Box(.05, 1.15, 6), wain, -2.975, .575, 0);
  const railM = soft(C.cream);
  mesh(RB(6, .09, .12, .04), railM, 0, 1.17, -2.95);
  mesh(RB(.12, .09, 6, .04), railM, -2.95, 1.17, 0);
  mesh(RB(6, .16, .08, .03), railM, 0, .08, -2.96);
  mesh(RB(.08, .16, 6, .03), railM, -2.96, .08, 0);
  const capM = soft(C.pink, {
      cc: .12
    }),
    lipM = soft(C.rose);
  mesh(RB(6.95, .32, .86, .12), capM, -.05, H + .16, -3.12);
  mesh(RB(.86, .32, 6.95, .12), capM, -3.12, H + .16, -.05);
  mesh(RB(6.6, .14, .5, .05), lipM, -.1, H - .05, -3.0);
  mesh(RB(.5, .14, 6.6, .05), lipM, -3.0, H - .05, -.1);
  mesh(RB(.38, H, .38, .08), soft(C.cream), 3.0, H / 2, -3.15);
  mesh(RB(.38, H, .38, .08), soft(C.cream), -3.15, H / 2, 3.0);

  const aoTex = ctex(128, 128, (g, w, h) => {
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(80,45,35,.7)');
    gr.addColorStop(.55, 'rgba(80,45,35,.32)');
    gr.addColorStop(1, 'rgba(80,45,35,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
  });

  function ao(x, z, w, d, op = .5, ry = 0) {
    const m = mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({
      map: aoTex,
      transparent: true,
      depthWrite: false,
      opacity: op,
      polygonOffset: true,
      polygonOffsetFactor: -2
    }), x, .004, z);
    m.rotation.set(-Math.PI / 2, 0, ry);
    m.renderOrder = 1;
    return m;
  }

  /* ============ interactive registry ============ */
  const interactives = [],
    byId = {};
  const HOVER = col(0xffe6ea);

  function register(g, id, label, opts = {}) {
    const it = Object.assign({
      id,
      group: g,
      label,
      mats: [],
      hover: 0,
      spring: 1,
      vel: 0,
      pop: 1,
      baseScale: g.scale.clone()
    }, opts);
    g.traverse(o => {
      if (o.isMesh && o.material && !Array.isArray(o.material) && !o.material.isMeshBasicMaterial && !o.userData.noHover) {
        o.material = o.material.clone();
        it.mats.push({
          m: o.material,
          em: o.material.emissive.clone(),
          ei: o.material.emissiveIntensity
        });
      }
      o.userData.it = it;
    });
    interactives.push(it);
    byId[id] = it;
    return it;
  }

  /* ============ plants ============ */
  const leafMats = [soft(C.leaf), soft(C.leaf2), soft(C.leaf3)];
  const stemMat = soft(0x5f8a6c);
  const leafGeo = Sph(.07, 12, 8);
  const vines = [];

  function vine(x, y, z, segs, parent = scene) {
    const root = group(x, y, z, parent);
    let p = root;
    const chain = [];
    for (let i = 0; i < segs; i++) {
      const seg = group(0, i ? -.1 : 0, 0, p);
      mesh(Cyl(.007, .007, .105, 5), stemMat, 0, -.05, 0, seg);
      const side = i % 2 ? 1 : -1;
      const lf = mesh(leafGeo, leafMats[i % 3], side * .045, -.065, .02, seg);
      lf.scale.set(.85, 1, .3);
      lf.rotation.set(.25, side * .5, side * .75);
      if (i % 3 === 2) {
        const l2 = mesh(leafGeo, leafMats[(i + 1) % 3], -side * .05, -.03, -.01, seg);
        l2.scale.set(.7, .85, .28);
        l2.rotation.set(-.2, -side * .4, -side * .9);
      }
      chain.push(seg);
      p = seg;
    }
    noShadow(root);
    vines.push({
      root,
      chain,
      ph: Math.random() * 6
    });
    return root;
  }

  function potPlant(x, y, z, r, potMat, parent = scene) {
    const g = group(x, y, z, parent);
    mesh(Cyl(r, r * .8, r * 1.5, 24), potMat, 0, r * .75, 0, g);
    mesh(Cyl(r * 1.05, r * 1.05, r * .22, 24), potMat, 0, r * 1.45, 0, g);
    mesh(Cyl(r * .9, r * .9, .02, 18), soft(0x5a4030), 0, r * 1.52, 0, g);
    const lg = group(0, r * 1.55, 0, g);
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2;
      const lf = mesh(leafGeo, leafMats[i % 3], Math.cos(a) * r * .45, .03, Math.sin(a) * r * .45, lg);
      lf.scale.set(1.1, .4, .8);
      lf.rotation.y = -a;
      lf.rotation.z = .35;
    }
    noShadow(lg);
    return g;
  }

  /* ============ back wall: desk, shelves, bookcase ============ */
  boot(.35, 'building the desk');
  const desk = group(.3, 0, -2.47);
  mesh(RB(2.75, .16, 1.05, .07), soft(C.cream), 0, 1.3, 0, desk);
  mesh(RB(.14, 1.22, 1.0, .06), soft(C.cream), -1.28, .61, 0, desk);
  mesh(RB(.66, 1.22, 1.0, .08), soft(C.cream), 1.03, .61, 0, desk);
  for (let i = 0; i < 3; i++) {
    mesh(RB(.56, .32, .06, .04), soft(C.blush), 1.03, .23 + i * .38, .5, desk);
    mesh(RB(.18, .04, .04, .02), metal(C.brass), 1.03, .3 + i * .38, .54, desk);
  }
  ao(.3, -2.47, 3.3, 1.5);

  const hutch = group(.3, 0, -2.79);
  [2.5, 3.2].forEach(y => mesh(RB(2.62, .1, .42, .045), soft(C.cream), 0, y, 0, hutch));
  [-1.27, 1.27].forEach(x => mesh(RB(.1, .82, .42, .04), soft(C.cream), x, 2.84, 0, hutch));
  mesh(RB(.08, .62, .4, .035), soft(C.cream), .25, 2.85, 0, hutch);
  [
    [C.pink, .32],
    [C.sand, .36],
    [C.cream, .3],
    [C.rose, .34]
  ].forEach(([c, h], i) => mesh(RB(.07, h, .26, .015), soft(c), -1.12 + i * .085, 2.55 + h / 2, 0, hutch));
  const photoTex = ctex(120, 150, (g, w, h) => {
    g.fillStyle = '#fdf8f2';
    g.fillRect(0, 0, w, h);
    const gr = g.createLinearGradient(0, 10, 0, 110);
    gr.addColorStop(0, '#f6c5cd');
    gr.addColorStop(1, '#e9cdb0');
    g.fillStyle = gr;
    g.fillRect(10, 10, 100, 100);
    g.fillStyle = '#fdf8f2';
    g.beginPath();
    g.arc(60, 78, 22, Math.PI, 0);
    g.fill();
    g.fillStyle = '#4a3530';
    g.font = '600 18px Fredoka, sans-serif';
    g.textAlign = 'center';
    g.fillText('hi :)', 60, 136);
  });
  const photo = group(.02, 2.55, .02, hutch);
  photo.rotation.y = .2;
  mesh(RB(.2, .26, .03, .015), soft(C.honey), 0, .13, 0, photo);
  mesh(new THREE.PlaneGeometry(.17, .22), basic(photoTex, {
    toneMapped: true
  }), 0, .13, .017, photo);
  const clockTex = ctex(160, 70, () => {});

  function drawClock() {
    const g = clockTex.userData.ctx;
    g.fillStyle = '#2e2128';
    g.fillRect(0, 0, 160, 70);
    const d = new Date();
    const s = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
    g.fillStyle = '#ffd6dc';
    g.font = '46px VT323, monospace';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(s, 80, 38);
    clockTex.needsUpdate = true;
  }
  drawClock();
  const dclock = group(.68, 2.55, .02, hutch);
  mesh(RB(.32, .16, .12, .05), soft(C.cream), 0, .08, 0, dclock);
  mesh(new THREE.PlaneGeometry(.26, .11), basic(clockTex), 0, .085, .061, dclock);
  mesh(Cyl(.06, .05, .16, 18), soft(C.blush), 1.02, 2.63, 0, hutch);
  mesh(RB(.32, .24, .3, .04), soft(C.kraft), -.95, 3.37, 0, hutch);
  mesh(RB(.34, .05, .32, .02), soft(C.blush), -.95, 3.5, 0, hutch);
  mesh(RB(.26, .19, .28, .04), soft(C.cream), -.6, 3.345, 0, hutch);
  mesh(RB(.28, .045, .3, .02), soft(C.pink), -.6, 3.46, 0, hutch);
  const flames = [];
  [
    [-.15, .16],
    [-.04, .11],
    [.07, .2]
  ].forEach(([x, h]) => {
    mesh(Cyl(.035, .035, h, 18), soft(C.paper), x, 3.25 + h / 2, .03, hutch);
    const f = mesh(new THREE.ConeGeometry(.014, .045, 8), M(0xffffff, {
      em: 0xffb347,
      ei: 2.4
    }), x, 3.25 + h + .028, .03, hutch);
    f.userData.noHover = true;
    noShadow(f);
    flames.push(f);
  });
  mesh(Cyl(.08, .06, .2, 18), soft(C.pink), .55, 3.35, 0, hutch);
  potPlant(1.05, 3.25, .02, .09, soft(C.cream), hutch);
  vine(1.12, 3.42, .2, 10, hutch);

  // plush bunny on the shelf
  function plushBunny(x, y, z, s, parent = scene, c1 = C.blush) {
    const g = group(x, y, z, parent);
    g.scale.setScalar(s);
    const fur = fabric(c1),
      inner = fabric(C.pink);
    const body = mesh(Sph(.11, 20, 14), fur, 0, .1, 0, g);
    body.scale.set(1, 1.05, .9);
    const head = group(0, .27, .01, g);
    mesh(Sph(.1, 20, 14), fur, 0, 0, 0, head);
    [-1, 1].forEach(k => {
      const e = mesh(Sph(.035, 12, 10), fur, k * .045, .15, 0, head);
      e.scale.set(1, 2.6, .7);
      e.rotation.z = -k * .18;
      const ei = mesh(Sph(.02, 10, 8), inner, k * .047, .15, .018, head);
      ei.scale.set(1, 2.6, .5);
      ei.rotation.z = -k * .18;
      mesh(Sph(.012, 8, 6), soft(C.ink), k * .038, .012, .092, head);
      const b = mesh(new THREE.CircleGeometry(.017, 12), inner, k * .06, -.02, .085, head);
      b.rotation.y = k * .5;
      const f = mesh(Sph(.04, 12, 10), fur, k * .06, .02, .06, g);
      f.scale.set(1, .7, 1.2);
      const a = mesh(Sph(.035, 12, 10), fur, k * .1, .14, .03, g);
      a.scale.set(.8, 1.3, .8);
    });
    mesh(Sph(.01, 8, 6), soft(C.rose), 0, -.012, .1, head);
    return g;
  }

  // monitor: thin white display that shows the website
  const mon = group(.1, 1.38, -2.66);
  const monTex = ctex(768, 480, () => {});
  mesh(RB(.44, .03, .26, .012), soft(C.cream), 0, .015, .02, mon);
  mesh(RB(.07, .5, .05, .02), soft(C.cream), 0, .27, -.04, mon);
  mesh(RB(.42, .3, .08, .04), soft(C.cream), 0, .7, -.065, mon);
  mesh(RB(1.06, .68, .05, .03), gloss(C.cream, {
    cc: .6,
    r: .35
  }), 0, .7, 0, mon);
  mesh(new THREE.PlaneGeometry(1.0, .63), soft(0x231C1F), 0, .705, .026, mon);
  const screenMesh = mesh(new THREE.PlaneGeometry(.96, .6), basic(monTex), 0, .705, .028, mon);
  screenMesh.userData.noHover = true;
  const monLed = mesh(Sph(.008), gloss(C.red, {
    em: C.red,
    ei: 2
  }), .47, .375, .028, mon);
  // desk mat, pastel keyboard, mouse
  mesh(RB(1.5, .012, .44, .006), fabric(C.blush), .2, 1.386, -2.12);
  const kb = group(.02, 1.39, -2.13);
  mesh(RB(.86, .05, .28, .03), soft(C.cream), 0, .025, 0, kb);
  const keyGeo = RB(.055, .035, .05, .012, 2);
  const keysIM = new THREE.InstancedMesh(keyGeo, soft(C.paper), 39),
    keysIM2 = new THREE.InstancedMesh(keyGeo, soft(C.pink), 6);
  const dm = new THREE.Object3D();
  let ki = 0,
    kj = 0;
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 13; c++) {
      dm.position.set(-.37 + c * .062, .062, -.07 + r * .068);
      dm.updateMatrix();
      if ((r === 0 && c === 0) || (r === 1 && c === 12) || (r === 2 && (c === 0 || c === 12)) || (r === 0 && c === 12) || (r === 2 && c === 6)) keysIM2.setMatrixAt(kj++, dm.matrix);
      else keysIM.setMatrixAt(ki++, dm.matrix);
    }
  keysIM.count = ki;
  keysIM2.count = kj;
  kb.add(keysIM, keysIM2);
  const mouse3 = group(.62, 1.39, -2.1);
  mesh(RB(.1, .045, .16, .045), soft(C.cream), 0, .022, 0, mouse3);
  mesh(Box(.012, .01, .04), soft(C.pink), 0, .045, -.04, mouse3);
  register(mon, 'monitor', 'My website · step back in');

  // cat-ear headphones on a stand
  const hp = group(-.74, 1.38, -2.55);
  hp.rotation.y = .45;
  mesh(Cyl(.09, .1, .03, 24), soft(C.cream), 0, .015, 0, hp);
  mesh(Cyl(.012, .012, .42, 10), metal(C.brass), 0, .22, 0, hp);
  mesh(RB(.17, .03, .05, .015), soft(C.cream), 0, .44, 0, hp);
  mesh(new THREE.TorusGeometry(.13, .022, 10, 28, Math.PI), soft(C.pink), 0, .33, 0, hp);
  [-1, 1].forEach(k => {
    const cup = mesh(Cyl(.07, .07, .055, 24), gloss(C.pink), k * .135, .27, 0, hp);
    cup.rotation.z = Math.PI / 2;
    const pad = mesh(Cyl(.058, .058, .03, 20), fabric(C.paper), k * .1, .27, 0, hp);
    pad.rotation.z = Math.PI / 2;
    const ear = mesh(new THREE.ConeGeometry(.04, .07, 4), gloss(C.pink), k * .09, .45, 0, hp);
    ear.rotation.z = -k * .5;
    const ein = mesh(new THREE.ConeGeometry(.022, .04, 4), soft(C.paper), k * .093, .448, .012, hp);
    ein.rotation.z = -k * .5;
  });
  potPlant(-1.0, 1.38, -2.2, .06, soft(C.blush));

  // gaming PC with a glass front and pastel RGB
  const pc = group(1.34, 1.38, -2.62);
  const caseM = gloss(C.cream, {
      cc: .5,
      r: .35
    }),
    darkM = soft(0xf4eef1);
  mesh(RB(.4, .05, .56, .02), caseM, 0, .025, 0, pc);
  mesh(RB(.4, .04, .56, .02), caseM, 0, .79, 0, pc);
  mesh(Box(.4, .76, .02), caseM, 0, .41, -.27, pc);
  mesh(Box(.02, .76, .56), caseM, -.19, .41, 0, pc);
  mesh(Box(.025, .76, .025), caseM, .19, .41, .27, pc);
  mesh(Box(.36, .72, .01), darkM, 0, .41, -.255, pc);
  mesh(Box(.01, .72, .52), darkM, -.175, .41, 0, pc);
  [
    [-.16, -.24],
    [.16, -.24],
    [-.16, .24],
    [.16, .24]
  ].forEach(([x, z]) => mesh(Cyl(.02, .025, .03, 10), soft(C.pink), x, -.012, z, pc));
  mesh(Cyl(.018, .018, .01, 16), soft(C.pink), .12, .815, .18, pc);
  const rgbMats = [];
  const rgbMat = () => {
    const m = M(0xffffff, {
      em: 0xff8fb8,
      ei: 2.2,
      r: .4
    });
    rgbMats.push(m);
    return m;
  };
  const fans = [];
  [.17, .41, .65].forEach(y => {
    const f = group(.07, y, -.235, pc);
    mesh(new THREE.TorusGeometry(.075, .013, 10, 32), rgbMat(), 0, 0, 0, f);
    mesh(Cyl(.022, .022, .012, 16), soft(C.cream), 0, 0, .005, f).rotation.x = Math.PI / 2;
    const blades = group(0, 0, .004, f);
    for (let b = 0; b < 6; b++) {
      const bl = mesh(Box(.022, .06, .004), soft(0xf1e6ee, {
        opacity: .85,
        dw: true
      }), 0, .036, 0, group(0, 0, 0, blades));
      bl.parent.rotation.z = b * Math.PI / 3;
      bl.rotation.y = .5;
    }
    fans.push(blades);
  });
  const gpu = group(-.07, .3, -.06, pc);
  mesh(Box(.2, .06, .34), soft(C.paper), 0, 0, 0, gpu);
  mesh(Box(.205, .008, .345), rgbMat(), 0, .034, 0, gpu);
  [-.08, .08].forEach(z => {
    const gf = mesh(Cyl(.045, .045, .006, 20), soft(0xd9cfd6), 0, -.032, z, gpu);
  });
  [-.13, -.11].forEach(x => {
    mesh(Box(.012, .14, .1), soft(C.paper), x, .56, -.16, pc);
    mesh(Box(.014, .02, .1), rgbMat(), x, .64, -.16, pc);
  });
  mesh(Cyl(.045, .045, .04, 20), soft(C.paper), -.06, .58, -.22, pc).rotation.x = Math.PI / 2;
  mesh(new THREE.TorusGeometry(.04, .006, 8, 24), rgbMat(), -.06, .58, -.198, pc);
  const glassM = M(0xffffff, {
    opacity: .13,
    r: .04,
    cc: 1,
    ccr: .02,
    env: 1.5
  });
  mesh(Box(.37, .72, .008), glassM, 0, .41, .274, pc);
  mesh(Box(.008, .72, .53), glassM, .194, .41, 0, pc);
  const pcLight = new THREE.PointLight(col(0xff8fb8), .5, 1.6, 2);
  pcLight.position.set(0, .4, 0);
  pc.add(pcLight);
  register(pc, 'pc', 'My PC · click to change the RGB', {
    view: {
      t: [1.34, 1.8, -2.55],
      d: [.15, .2, 1],
      dist: 1.5
    }
  });
  const mug = group(.92, 1.39, -2.0);
  mesh(Cyl(.065, .058, .14, 24), gloss(C.pink), 0, .07, 0, mug);
  mesh(new THREE.TorusGeometry(.04, .013, 10, 20), gloss(C.pink), .072, .075, 0, mug);
  const cof = mesh(new THREE.CircleGeometry(.058, 24), soft(0x5a3626), 0, .135, 0, mug);
  cof.rotation.x = -Math.PI / 2;
  register(mug, 'mug', 'Coffee mug');

  const chair = group(.35, 0, -1.42);
  chair.rotation.y = Math.PI;
  for (let i = 0; i < 5; i++) {
    const a = i * Math.PI * 2 / 5;
    const leg = mesh(RB(.36, .06, .08, .03), soft(C.cream), Math.cos(a) * .17, .09, Math.sin(a) * .17, chair);
    leg.rotation.y = -a;
    mesh(Sph(.045), soft(C.plum), Math.cos(a) * .34, .045, Math.sin(a) * .34, chair);
  }
  mesh(Cyl(.045, .05, .45), soft(C.cream), 0, .34, 0, chair);
  mesh(RB(.7, .2, .64, .1), fabric(C.blush), 0, .64, 0, chair);
  mesh(RB(.62, .06, .56, .03), fabric(C.pink), 0, .76, .02, chair);
  mesh(RB(.66, .74, .18, .09), fabric(C.blush), 0, 1.1, -.28, chair);
  mesh(RB(.06, .38, .06, .03), soft(C.cream), 0, .82, -.3, chair);
  ao(.35, -1.42, .9, .9, .4);

  boot(.48, 'shelving the books');
  const cab = group(2.37, 0, -2.62);
  const cabM = soft(C.cream);
  [-.53, .53].forEach(x => mesh(RB(.1, 3.1, .7, .04), cabM, x, 1.55, 0, cab));
  mesh(Box(1.0, 3.05, .04), soft(C.blush), 0, 1.55, -.32, cab);
  mesh(RB(1.22, .14, .78, .06), cabM, 0, 3.14, .01, cab);
  mesh(RB(1.12, .12, .7, .05), cabM, 0, .06, 0, cab);
  [.25, -.25].forEach(x => {
    mesh(RB(.48, 1.04, .06, .035), cabM, x * 1.03, .66, .33, cab);
    mesh(Sph(.03), metal(C.brass), x * .18, .7, .37, cab);
  });
  [1.2, 1.85, 2.5].forEach(y => mesh(RB(.98, .07, .62, .03), cabM, 0, y, 0, cab));
  ao(2.37, -2.62, 1.6, 1.2);
  mesh(RB(.34, .26, .36, .04), soft(C.kraft), .25, 1.37, 0, cab);
  mesh(RB(.36, .05, .38, .02), soft(C.pink), .25, 1.52, 0, cab);
  const cam = group(-.2, 2.535, .05, cab);
  mesh(RB(.26, .16, .13, .04), soft(C.cream), 0, .08, 0, cam);
  mesh(RB(.27, .05, .135, .02), soft(C.plum), 0, .12, 0, cam);
  const lens = mesh(Cyl(.05, .05, .06, 20), soft(C.plum), 0, .07, .08, cam);
  lens.rotation.x = Math.PI / 2;
  mesh(Cyl(.02, .02, .03, 12), gloss(C.rose), .08, .175, 0, cam);
  mesh(Cyl(.06, .045, .22, 20), soft(C.pink), .2, 2.645, 0, cab);
  mesh(Cyl(.035, .06, .1, 20), soft(C.cream), .32, 2.585, .05, cab);
  potPlant(.22, 3.21, .05, .12, soft(C.pink), cab);
  vine(.36, 3.36, .3, 8, cab);

  const books = group(1.95, 1.885, -2.6);
  const bookCols = [C.rose, C.sand, C.cream, C.pink, C.brass, C.leaf2, C.roseDeep, C.blush, C.beige];
  const bookMeshes = [];
  let bx = 0;
  bookCols.forEach((c, i) => {
    const w = .07 + (i * 37 % 5) * .01,
      h = .36 + (i * 53 % 7) * .025;
    const b = group(bx + w / 2, 0, 0, books);
    mesh(RB(w, h, .32, .015), soft(c), 0, h / 2, 0, b);
    mesh(Box(w + .004, .02, .324), metal(C.brass, {
      r: .45
    }), 0, h - .05, 0, b);
    if (i === 8) {
      b.rotation.z = -.3;
      b.position.x += .06;
    }
    bookMeshes.push(b);
    bx += w + .005;
  });
  register(books, 'books', 'Bookcase · skills', {
    view: {
      t: [2.37, 2.1, -2.6],
      d: [.05, .08, 1],
      dist: 1.7
    }
  });

  // candy jar on the bookcase
  const jar = group(2.13, 1.235, -2.55);
  mesh(Cyl(.1, .1, .22, 24), M(0xffffff, {
    opacity: .22,
    r: .05,
    cc: 1,
    env: 1.3
  }), 0, .11, 0, jar);
  mesh(Cyl(.106, .106, .04, 24), soft(C.pink), 0, .24, 0, jar);
  mesh(Sph(.02), soft(C.cream), 0, .27, 0, jar);
  for (let i = 0; i < 16; i++) {
    const a = i * 2.4,
      r = .02 + (i % 4) * .017;
    mesh(Sph(.024, 10, 8), soft([C.pink, C.rose, C.paper, C.blush][i % 4]), Math.cos(a) * r, .03 + Math.floor(i / 4) * .035, Math.sin(a) * r, jar);
  }

  /* ============ back wall left: corkboard + neon name ============ */
  boot(.6, 'hanging the frames');
  const cork = group(-2.05, 2.3, -2.965);
  mesh(RB(1.0, .74, .05, .03), soft(C.honey), 0, 0, 0, cork);
  const corkTex = ctex(400, 290, (g, w, h) => {
    g.fillStyle = '#d6aa80';
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2200; i++) {
      g.fillStyle = Math.random() < .5 ? 'rgba(130,86,50,.3)' : 'rgba(245,215,180,.35)';
      g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
  });
  mesh(new THREE.PlaneGeometry(.9, .64), soft(0xffffff, {
    map: corkTex
  }), 0, 0, .027, cork);
  const NOTES = [{
    c: '#fdf8f2',
    t: ['VP Web Dev', 'LSPS'],
    x: -.28,
    y: .12,
    r: -.08
  }, {
    c: '#f7dfe2',
    t: ['Tutor CP104', 'Laurier'],
    x: .02,
    y: .14,
    r: .06
  }, {
    c: '#f3c9cf',
    t: ['Tutor', 'A to Z'],
    x: .3,
    y: .1,
    r: -.05
  }, {
    c: '#f2dfb8',
    t: ['class of', '2027 ♡'],
    x: -.12,
    y: -.17,
    r: .05
  }, {
    c: '#fdf8f2',
    t: ['open to', 'internships'],
    x: .2,
    y: -.16,
    r: -.09
  }];
  const notes = NOTES.map((n, i) => {
    const tex = ctex(150, 150, (g, w, h) => {
      g.fillStyle = n.c;
      g.fillRect(0, 0, w, h);
      g.fillStyle = '#4a3530';
      g.font = '600 22px Fredoka, sans-serif';
      g.fillText(n.t[0], 12, 60);
      g.fillStyle = '#a95c6c';
      g.font = '500 17px "IBM Plex Mono", monospace';
      g.fillText(n.t[1], 12, 94);
    });
    const p = group(n.x, n.y, .035, cork);
    mesh(new THREE.PlaneGeometry(.2, .2), basic(tex, {
      toneMapped: true
    }), 0, -.08, 0, p).userData.noHover = true;
    mesh(Sph(.018), gloss([C.red, C.rose, C.brass][i % 3]), 0, 0, .015, p);
    p.rotation.z = n.r;
    p.userData.r0 = n.r;
    return p;
  });
  const yarnPts = [
    [-.28, .12],
    [.02, .14],
    [.3, .1],
    [.2, -.16],
    [-.12, -.17],
    [.02, .14]
  ].map(([x, y]) => new V3(x, y, .05));
  cork.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(yarnPts), new THREE.LineBasicMaterial({
    color: col(C.rose)
  })));
  register(cork, 'corkboard', 'Corkboard · experience', {
    view: {
      t: [-2.05, 2.3, -2.95],
      d: [.18, 0, 1],
      dist: 1.6
    }
  });
  const neonTex = ctex(512, 170, (g, w, h) => {
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.font = '600 108px Fredoka, sans-serif';
    g.shadowColor = '#ff6f8e';
    g.shadowBlur = 22;
    g.lineWidth = 9;
    g.strokeStyle = '#ff8fa6';
    g.strokeText('janya ♡', w / 2, h / 2 + 4);
    g.shadowBlur = 6;
    g.lineWidth = 4;
    g.strokeStyle = '#fff1f4';
    g.strokeText('janya ♡', w / 2, h / 2 + 4);
  });
  const neonMat = basic(neonTex, {
    transparent: true,
    depthWrite: false
  });
  const neon = mesh(new THREE.PlaneGeometry(1.15, .38), neonMat, -1.95, 3.32, -2.955);
  neon.userData.noShadow = true;
  const neonLight = new THREE.PointLight(col(0xff8fa8), 0, 2.6, 2);
  neonLight.position.set(-1.95, 3.25, -2.55);
  scene.add(neonLight);

  /* ============ left wall: window over the bed, frames, vanity ============ */
  const win = group(-2.97, 2.45, .45);
  win.rotation.y = Math.PI / 2;
  const skyNight = ctex(256, 220, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, '#251a2c');
    gr.addColorStop(.7, '#5a3d5c');
    gr.addColorStop(1, '#a77790');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#fff6df';
    g.beginPath();
    g.arc(186, 60, 20, 0, 7);
    g.fill();
    g.fillStyle = '#2d2034';
    g.beginPath();
    g.arc(178, 54, 18, 0, 7);
    g.fill();
    g.fillStyle = '#fff';
    for (let i = 0; i < 40; i++) g.fillRect(Math.random() * w, Math.random() * h * .6, 1.6, 1.6);
    g.fillStyle = '#33253a';
    g.beginPath();
    g.moveTo(0, h);
    [
      [0, 190],
      [40, 180],
      [40, 160],
      [70, 160],
      [70, 186],
      [120, 176],
      [120, 150],
      [150, 150],
      [150, 190],
      [200, 182],
      [200, 166],
      [230, 166],
      [230, 192],
      [256, 186],
      [256, h]
    ].forEach(([x, y]) => g.lineTo(x, y));
    g.fill();
    g.fillStyle = '#f7d98a';
    [
      [50, 168],
      [128, 160],
      [138, 172],
      [210, 176]
    ].forEach(([x, y]) => g.fillRect(x, y, 4, 5));
  });
  const skyDay = ctex(256, 220, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, '#b7d3ef');
    gr.addColorStop(.65, '#f1dfe6');
    gr.addColorStop(1, '#fbdcc6');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,.92)';
    [
      [60, 56, 24],
      [84, 48, 18],
      [102, 58, 16],
      [186, 96, 20],
      [204, 90, 14],
      [168, 100, 12]
    ].forEach(([x, y, r]) => {
      g.beginPath();
      g.arc(x, y, r, 0, 7);
      g.fill();
    });
    g.fillStyle = '#e6c9cf';
    g.beginPath();
    g.moveTo(0, h);
    [
      [0, 192],
      [40, 182],
      [40, 162],
      [70, 162],
      [70, 188],
      [120, 178],
      [120, 152],
      [150, 152],
      [150, 192],
      [200, 184],
      [200, 168],
      [230, 168],
      [230, 194],
      [256, 188],
      [256, h]
    ].forEach(([x, y]) => g.lineTo(x, y));
    g.fill();
  });
  const skyPlane = mesh(new THREE.PlaneGeometry(1.2, 1.0), basic(skyDay), 0, 0, .01, win);
  skyPlane.userData.noHover = true;
  const wf = soft(C.honey);
  mesh(RB(1.42, .1, .14, .04), wf, 0, .55, .06, win);
  mesh(RB(1.42, .1, .14, .04), wf, 0, -.55, .06, win);
  mesh(RB(.1, 1.2, .14, .04), wf, -.66, 0, .06, win);
  mesh(RB(.1, 1.2, .14, .04), wf, .66, 0, .06, win);
  mesh(Box(.045, 1.0, .06), soft(C.cream), 0, 0, .04, win);
  mesh(Box(1.24, .045, .06), soft(C.cream), 0, .02, .04, win);
  mesh(RB(1.6, .1, .3, .05), soft(C.honey), 0, -.62, .14, win);
  const curtainTex = ctex(64, 64, (g, w, h) => {
    g.fillStyle = '#fdf8f2';
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(214,120,138,.42)';
    g.fillRect(0, 0, 32, h);
    g.fillRect(0, 0, w, 32);
    g.fillStyle = 'rgba(214,120,138,.32)';
    g.fillRect(0, 0, 32, 32);
  }, [1, 4]);
  const curtainM = fabric(0xffffff, {
    map: curtainTex
  });
  for (let i = 0; i < 13; i++) mesh(Cyl(.055, .06, .5, 10), curtainM, -.6 + i * .1, .34, .16 + (i % 2) * .02, win);
  mesh(RB(1.32, .05, .06, .02), soft(C.cream), 0, .09, .17, win);
  rod(new V3(-.78, .62, .16), new V3(.78, .62, .16), .02, metal(C.brass), win);
  [-.8, .8].forEach(x => mesh(Sph(.035), metal(C.brass), x, .62, .16, win));
  potPlant(.45, -.57, .14, .07, soft(C.blush), win);
  mesh(Cyl(.04, .04, .1, 14), soft(C.paper), -.4, -.52, .14, win);

  const cert = group(-2.965, 2.5, -1.55);
  cert.rotation.y = Math.PI / 2;
  mesh(RB(.7, .55, .05, .03), soft(C.honey), 0, 0, 0, cert);
  const certTex = ctex(430, 330, (g, w, h) => {
    g.fillStyle = '#fdf8f2';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = '#cf7c8c';
    g.lineWidth = 3;
    g.strokeRect(14, 14, w - 28, h - 28);
    g.lineWidth = 1;
    g.strokeRect(22, 22, w - 44, h - 44);
    g.textAlign = 'center';
    g.fillStyle = '#4a3530';
    g.font = '600 15px "IBM Plex Mono", monospace';
    g.fillText('WILFRID LAURIER UNIVERSITY', w / 2, 66);
    g.font = '600 34px Fredoka, sans-serif';
    g.fillText('Computer Science', w / 2, 116);
    g.font = '500 16px "IBM Plex Mono", monospace';
    g.fillStyle = '#8a6c66';
    g.fillText('Bachelor of Science', w / 2, 150);
    g.fillText('Minor · UX Design', w / 2, 178);
    g.fillText('Certificate · Generative AI', w / 2, 202);
    g.fillStyle = '#a95c6c';
    g.font = '600 14px "IBM Plex Mono", monospace';
    g.fillText('IN PROGRESS · 2023 – 2027', w / 2, 246);
    g.fillStyle = '#d4a54c';
    g.beginPath();
    g.arc(w - 70, h - 62, 26, 0, 7);
    g.fill();
  });
  mesh(new THREE.PlaneGeometry(.6, .45), basic(certTex, {
    toneMapped: true
  }), 0, 0, .027, cert).userData.noHover = true;
  register(cert, 'certificate', 'Framed degree · education', {
    view: {
      t: [-2.95, 2.5, -1.55],
      d: [1, .02, .25],
      dist: 1.5
    }
  });

  function artTex(kind) {
    return ctex(120, 150, (g, w, h) => {
      g.fillStyle = '#fdf8f2';
      g.fillRect(0, 0, w, h);
      if (kind === 0) {
        g.fillStyle = '#f2cdd2';
        g.beginPath();
        g.arc(60, 95, 40, Math.PI, 0);
        g.fill();
        g.fillStyle = '#cf7c8c';
        g.beginPath();
        g.arc(60, 70, 14, 0, 7);
        g.fill();
      } else {
        g.fillStyle = '#4a3530';
        g.font = '600 26px Fredoka, sans-serif';
        g.textAlign = 'center';
        g.fillText('be', 60, 62);
        g.fillText('kind', 60, 92);
        g.fillStyle = '#cf7c8c';
        g.fillRect(40, 108, 40, 4);
      }
    });
  }
  [
    [3.12, -1.75, .26, .32, C.pink, 0],
    [3.12, -1.35, .24, .3, C.cream, 1]
  ].forEach(([y, z, w, h, c, k]) => {
    const f = group(-2.965, y, z);
    f.rotation.y = Math.PI / 2;
    mesh(RB(w, h, .035, .02), soft(c), 0, 0, 0, f);
    mesh(new THREE.PlaneGeometry(w - .06, h - .06), basic(artTex(k), {
      toneMapped: true
    }), 0, 0, .019, f);
  });

  // vanity with a light-up arched mirror and makeup
  const van = group(-2.68, 0, 2.05);
  const vanM = soft(C.cream);
  mesh(RB(.56, .07, 1.24, .03), vanM, 0, .84, 0, van);
  [-1, 1].forEach(s => {
    mesh(RB(.5, .8, .3, .04), vanM, 0, .4, s * .45, van);
    [0, 1].forEach(k => {
      mesh(RB(.03, .3, .25, .02), soft(C.blush), .25, .22 + k * .36, s * .45, van);
      mesh(Sph(.018), metal(C.brass), .27, .22 + k * .36, s * .45, van);
    });
  });
  mesh(RB(.48, .1, .58, .03), vanM, -.02, .75, 0, van);
  mesh(RB(.02, .05, .26, .01), soft(C.blush), .23, .75, 0, van);
  ao(-2.68, 2.05, 1.0, 1.6, .45);
  const archShape = (w, h, r) => {
    const s = new THREE.Shape();
    s.moveTo(-w / 2, 0);
    s.lineTo(-w / 2, h);
    s.absarc(0, h, r, Math.PI, 0, true);
    s.lineTo(w / 2, 0);
    s.closePath();
    return s;
  };
  const mirror = group(-.285, 1.03, 0, van);
  mirror.rotation.y = Math.PI / 2;
  const outer = archShape(.84, .58, .42),
    inner = archShape(.7, .58, .35);
  outer.holes.push(new THREE.Path(inner.getPoints(24)));
  mesh(new THREE.ExtrudeGeometry(outer, {
    depth: .035,
    bevelEnabled: true,
    bevelSize: .012,
    bevelThickness: .012,
    bevelSegments: 3,
    curveSegments: 24
  }), soft(C.blush), 0, 0, 0, mirror);
  mesh(new THREE.ShapeGeometry(inner, 24), M(0xf6eef0, {
    m: 1,
    r: .07,
    env: 1.7
  }), 0, 0, .02, mirror);
  const bulbMat = M(0xffffff, {
    em: 0xfff1d8,
    ei: .2,
    r: .3
  });
  const bulbPts = [];
  [.08, .3, .52].forEach(y => {
    bulbPts.push([-.385, y], [.385, y]);
  });
  for (let i = 0; i <= 4; i++) {
    const a = Math.PI - i * Math.PI / 4;
    bulbPts.push([Math.cos(a) * .385, .58 + Math.sin(a) * .385]);
  }
  bulbPts.forEach(([x, y]) => mesh(Sph(.03, 12, 10), bulbMat, x, y, .05, mirror).userData.noShadow = true);
  // makeup on the vanity top (vanity space: x along wall depth, z along the wall)
  const T = .875;
  const palette = group(.05, T, -.42, van);
  palette.rotation.y = .3;
  mesh(RB(.22, .02, .15, .01), gloss(C.pink), 0, .01, 0, palette);
  const lid = group(0, .02, -.075, palette);
  lid.rotation.x = -1.9;
  mesh(RB(.22, .012, .15, .008), gloss(C.pink), 0, 0, .075, lid);
  mesh(new THREE.PlaneGeometry(.19, .12), M(0xf6eef0, {
    m: 1,
    r: .1,
    env: 1.5
  }), 0, -.007, .075, lid).rotation.x = Math.PI / 2;
  ['#e8a3af', '#c96f80', '#d9a36e', '#f2cdd2', '#a95c6c', '#efd3c4'].forEach((c, i) => mesh(Cyl(.022, .022, .008, 16), soft(c), -.065 + (i % 3) * .065, .022, -.03 + Math.floor(i / 3) * .06, palette));
  [
    [.1, -.2, C.rose],
    [.15, -.16, C.red],
    [.08, -.12, C.pink]
  ].forEach(([x, z, c], i) => {
    const lp = group(x, T, z, van);
    lp.rotation.z = i === 2 ? 1.35 : 0;
    mesh(Cyl(.018, .018, .07, 14), metal(C.brass), 0, .035, 0, lp);
    const bullet = mesh(Cyl(.013, .015, .04, 14), soft(c, {
      r: .4
    }), 0, .09, 0, lp);
  });
  const perf = (x, z, s, tint) => {
    const p = group(x, T, z, van);
    p.scale.setScalar(s);
    mesh(RB(.12, .14, .07, .03), M(tint, {
      opacity: .5,
      r: .05,
      cc: 1,
      env: 1.4
    }), 0, .07, 0, p);
    mesh(RB(.09, .09, .045, .02), soft(tint, {
      r: .5
    }), 0, .055, 0, p);
    mesh(Cyl(.022, .022, .04, 14), metal(C.brass), 0, .16, 0, p);
    mesh(Sph(.028, 14, 10), gloss(C.pink), 0, .2, 0, p);
  };
  perf(-.12, .32, 1, 0xf6c8d2);
  perf(-.08, .46, .8, 0xf3ddc5);
  const cup = group(-.12, T, -.18, van);
  mesh(Cyl(.045, .04, .11, 20), gloss(C.cream), 0, .055, 0, cup);
  [
    [-.015, .2, C.pink],
    [.015, -.15, C.ink],
    [0, .05, C.brass]
  ].forEach(([x, r, c]) => {
    const b = group(x, .1, 0, cup);
    b.rotation.z = r;
    mesh(Cyl(.007, .007, .14, 8), soft(c), 0, .07, 0, b);
    const tuft = mesh(Sph(.016, 10, 8), fabric(C.sand), 0, .15, 0, b);
    tuft.scale.set(1, 1.6, 1);
  });
  const tray = group(.12, T, .2, van);
  const tr = mesh(Cyl(.09, .09, .012, 28), metal(C.brass), 0, .006, 0, tray);
  tr.scale.set(1, 1, .7);
  [
    [-.03, 0],
    [.03, .02]
  ].forEach(([x, z]) => {
    const rg = mesh(new THREE.TorusGeometry(.016, .004, 8, 18), metal(C.brass), x, .016, z, tray);
    rg.rotation.x = Math.PI / 2;
  });
  mesh(Sph(.012, 10, 8), gloss(C.pink), .0, .02, -.02, tray);
  const np = group(.12, T, .45, van);
  mesh(RB(.04, .04, .04, .012), M(0xe86b8a, {
    opacity: .7,
    r: .1,
    cc: 1
  }), 0, .02, 0, np);
  mesh(Cyl(.012, .012, .04, 12), soft(C.ink), 0, .06, 0, np);
  register(van, 'vanity', 'Vanity · click the mirror lights', {
    view: {
      t: [-2.75, 1.35, 2.05],
      d: [1, .25, .15],
      dist: 2.1
    }
  });
  let vanOn = false;
  // tufted vanity stool
  const vstool = group(-2.15, 0, 2.05);
  [
    [.12, .12],
    [-.12, .12],
    [.12, -.12],
    [-.12, -.12]
  ].forEach(([x, z]) => rod(new V3(x, 0, z), new V3(x * .7, .38, z * .7), .016, metal(C.brass), vstool));
  const cushion = mesh(Cyl(.21, .2, .14, 32), fabric(C.pink), 0, .44, 0, vstool);
  mesh(Sph(.21, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), fabric(C.pink), 0, .5, 0, vstool).scale.y = .3;
  mesh(Sph(.018), fabric(C.rose), 0, .565, 0, vstool);
  ao(-2.15, 2.05, .6, .6, .4);

  /* ============ bed (head against the window wall) ============ */
  boot(.72, 'fluffing the pillows');
  const bed = group(-1.62, 0, .45);
  bed.rotation.y = Math.PI / 2;
  const woodBed = soft(C.woodLight, {
    cc: .1
  });
  mesh(RB(1.55, .38, 2.62, .14), woodBed, 0, .3, 0, bed);
  [
    [-.66, -1.2],
    [.66, -1.2],
    [-.66, 1.2],
    [.66, 1.2]
  ].forEach(([x, z]) => mesh(Cyl(.06, .05, .14, 12), soft(C.woodMid), x, .07, z, bed));
  mesh(RB(1.66, 1.18, .24, .14), woodBed, 0, .73, -1.2, bed);
  [-.42, 0, .42].forEach(x => mesh(RB(.34, .7, .05, .05), soft(C.honey), x, .85, -1.07, bed));
  mesh(RB(1.66, .62, .2, .12), woodBed, 0, .44, 1.24, bed);
  mesh(RB(1.46, .34, 2.32, .16), fabric(C.cream), 0, .6, .02, bed);
  const plaidTex = ctex(128, 128, (g, w, h) => {
    g.fillStyle = '#f5e7da';
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(219,140,155,.5)';
    g.fillRect(0, 0, 48, h);
    g.fillRect(0, 0, w, 48);
    g.fillStyle = 'rgba(190,100,118,.3)';
    g.fillRect(0, 0, 48, 48);
    g.fillStyle = 'rgba(169,92,108,.65)';
    g.fillRect(84, 0, 4, h);
    g.fillRect(0, 84, w, 4);
    g.fillStyle = 'rgba(253,248,242,.85)';
    g.fillRect(20, 0, 3, h);
    g.fillRect(0, 20, w, 3);
  }, [2.2, 2.2]);
  const blanket = mesh(RB(1.54, 1.62, .1, .05), fabric(0xffffff, {
    map: plaidTex
  }), 0, .8, .4, bed);
  blanket.rotation.x = -Math.PI / 2;
  [-1, 1].forEach(sd => mesh(RB(.07, .34, 1.6, .03), fabric(C.pink), sd * .77, .64, .4, bed));
  mesh(RB(1.5, .13, .34, .065), fabric(C.blush), 0, .83, -.48, bed);
  [-.35, .35].forEach((x, i) => {
    const p = mesh(RB(.6, .24, .4, .12), fabric(C.paper), x, .95, -.88, bed);
    p.rotation.x = -.38;
    p.rotation.z = i ? -.05 : .05;
  });
  const cush = mesh(RB(.36, .2, .26, .1), fabric(C.pink), .05, .94, -.62, bed);
  cush.rotation.set(-.3, .3, .1);
  ao(-1.62, .45, 3.2, 2.0);

  // a cute puppy curled up on the bed
  const dog = group(-.88, .84, .18);
  dog.rotation.y = Math.PI / 4 + .2;
  const furD = fabric(0xFBF6F0, {
      r: .95
    }),
    furL = fabric(0xFFFFFF, {
      r: .95
    }),
    furDk = fabric(0xA36B44, {
      r: .95
    });
  const dogBody = mesh(Sph(.2, 24, 16), furD, 0, .11, -.05, dog);
  dogBody.scale.set(1, .62, 1.35);
  mesh(Sph(.12, 18, 12), furL, 0, .1, .1, dog).scale.set(1, .7, 1);
  [-1, 1].forEach(k => {
    const h = mesh(Sph(.1, 16, 12), furD, k * .13, .08, -.2, dog);
    h.scale.set(.8, .7, 1);
  });
  [-1, 1].forEach(k => {
    const p = mesh(Sph(.055, 14, 10), furL, k * .08, .03, .3, dog);
    p.scale.set(.9, .6, 1.5);
  });
  const dogHead = group(0, .25, .22, dog);
  mesh(Sph(.15, 24, 18), furD, 0, 0, 0, dogHead);
  const snout = mesh(Sph(.075, 18, 12), furL, 0, -.045, .115, dogHead);
  snout.scale.set(1.15, .8, .95);
  mesh(Sph(.026, 12, 10), gloss(0x3a2a2e), 0, -.015, .185, dogHead);
  const dogEyes = [-1, 1].map(k => {
    const e = mesh(Sph(.022, 12, 10), gloss(0x2a1d20), k * .062, .03, .123, dogHead);
    mesh(Sph(.007, 8, 6), M(0xffffff, {
      em: 0xffffff,
      ei: .6
    }), k * .062 + .007, .04, .142, dogHead);
    return e;
  });
  [-1, 1].forEach(k => {
    const b = mesh(new THREE.CircleGeometry(.022, 14), fabric(C.pink), k * .095, -.03, .112, dogHead);
    b.rotation.y = k * .6;
  });
  const dogEars = [-1, 1].map(k => {
    const ear = group(k * .11, .06, -.01, dogHead);
    const e = mesh(Sph(.072, 14, 10), furDk, 0, -.065, 0, ear);
    e.scale.set(.62, 1.35, .95);
    ear.rotation.z = k * .35;
    return ear;
  });
  const dogTongue = mesh(Sph(.022, 10, 8), soft(0xEF8FA2), 0, -.095, .15, dogHead);
  dogTongue.scale.set(1, .5, 1.3);
  dogTongue.visible = false;
  const collar = mesh(new THREE.TorusGeometry(.105, .016, 10, 28), gloss(C.pink), 0, .16, .13, dog);
  collar.rotation.x = Math.PI / 2 - .4;
  mesh(Cyl(.022, .022, .006, 16), metal(C.brass), 0, .1, .22, dog).rotation.x = Math.PI / 2 - .3;
  const dogTail = group(0, .16, -.3, dog);
  const tl = mesh(Sph(.06, 14, 10), furD, 0, .05, -.02, dogTail);
  tl.scale.set(.8, 1.4, .8);
  register(dog, 'dog', 'My puppy · give him a pat');
  let dogHappy = 0;

  // nightstand beside the bed head, mushroom lamp, phone
  const ns = group(-2.62, 0, -.82);
  mesh(RB(.62, .62, .6, .12), soft(C.honey), 0, .31, 0, ns);
  mesh(RB(.04, .2, .5, .04), soft(C.cream), .3, .38, 0, ns);
  mesh(Sph(.025), metal(C.brass), .33, .38, 0, ns);
  ao(-2.62, -.82, .9, .9);
  const lamp = group(-2.74, .62, -.95);
  mesh(Cyl(.09, .11, .04, 24), soft(C.cream), 0, .02, 0, lamp);
  mesh(Cyl(.035, .055, .2, 16), soft(C.cream), 0, .14, 0, lamp);
  const lampCap = mesh(new THREE.SphereGeometry(.17, 28, 16, 0, Math.PI * 2, 0, Math.PI / 2), M(C.pink, {
    em: 0xffc9a0,
    ei: .4,
    r: .6
  }), 0, .22, 0, lamp);
  lampCap.scale.y = .78;
  const lampUnder = mesh(new THREE.CircleGeometry(.168, 28), M(0xffffff, {
    em: 0xffd7a8,
    ei: 1.6
  }), 0, .222, 0, lamp);
  lampUnder.rotation.x = Math.PI / 2;
  [
    [.08, .08],
    [-.07, .1],
    [0, -.11]
  ].forEach(([x, z]) => mesh(Sph(.025), soft(C.cream), x, .33, z, lamp));
  const lampLight = new THREE.PointLight(col(0xffc58f), .3, 5.5, 1.4);
  lampLight.position.set(0, .3, .1);
  lamp.add(lampLight);
  register(lamp, 'lamp', 'Mushroom lamp');
  let lampOn = true;
  const phone = group(-2.5, .62, -.66);
  phone.rotation.y = 1.0;
  phone.scale.setScalar(.7);
  mesh(RB(.46, .12, .42, .06), gloss(C.pink), 0, .06, 0, phone);
  const dome = mesh(new THREE.SphereGeometry(.2, 28, 16, 0, Math.PI * 2, 0, Math.PI / 2), gloss(C.pink), 0, .1, 0, phone);
  dome.scale.set(1, .75, 1);
  const dialG = group(0, .2, .13, phone);
  dialG.rotation.x = -1.0;
  mesh(Cyl(.11, .11, .02, 28), soft(C.cream), 0, 0, 0, dialG);
  for (let i = 0; i < 10; i++) {
    const a = i / 10 * Math.PI * 1.6 + .6;
    mesh(Cyl(.014, .014, .025, 8), soft(C.plum), Math.cos(a) * .075, .005, Math.sin(a) * .075, dialG);
  }
  [-.15, .15].forEach(x => mesh(RB(.05, .08, .05, .02), soft(C.cream), x, .27, -.04, phone));
  const handset = group(0, .33, -.04, phone);
  const hb = mesh(Cyl(.035, .035, .42, 12), gloss(C.pink), 0, 0, 0, handset);
  hb.rotation.z = Math.PI / 2;
  [-.21, .21].forEach(x => mesh(Cyl(.075, .06, .08, 18), gloss(C.pink), x, -.03, 0, handset));
  register(phone, 'phone', 'Rotary phone · contact', {
    view: {
      t: [-2.5, .78, -.66],
      d: [.75, .55, .55],
      dist: 1.35
    }
  });

  // corner floor plant
  const plant = group(-2.5, 0, -2.5);
  const potTex = ctex(64, 64, (g, w, h) => {
    for (let y = 0; y < h; y += 16) {
      g.fillStyle = (y / 16) % 2 ? '#cf7c8c' : '#fdf8f2';
      g.fillRect(0, y, w, 16);
    }
  }, [1, 1]);
  mesh(Cyl(.25, .19, .44, 28), soft(0xffffff, {
    map: potTex
  }), 0, .22, 0, plant);
  mesh(Cyl(.26, .26, .05, 28), soft(C.cream), 0, .45, 0, plant);
  mesh(Cyl(.22, .22, .02, 20), soft(0x5a4030), 0, .47, 0, plant);
  const leaves = group(0, .46, 0, plant);
  const bigLeaf = Sph(.16, 16, 10);
  [
    [.4, .5, .62],
    [1.5, .7, .78],
    [2.4, .45, .55],
    [3.3, .65, .7],
    [4.3, .35, .6],
    [5.2, .55, .85],
    [.9, .2, .95],
    [3.9, .15, 1.0]
  ].forEach(([a, tilt, len], i) => {
    const st = group(0, 0, 0, leaves);
    st.rotation.y = a;
    const inner = group(0, 0, 0, st);
    inner.rotation.z = tilt;
    mesh(Cyl(.008, .012, len, 6), stemMat, 0, len / 2, 0, inner);
    const lf = mesh(bigLeaf, leafMats[i % 3], 0, len + .02, .02, inner);
    lf.scale.set(.75, 1.1, .22);
    lf.rotation.x = .5;
  });
  noShadow(leaves);
  ao(-2.5, -2.5, .8, .8);
  const bin = group(-1.32, 0, -2.66);
  mesh(Cyl(.15, .12, .32, 24), soft(C.blush), 0, .16, 0, bin);
  mesh(Cyl(.13, .13, .02, 20), soft(C.rose), 0, .31, 0, bin);
  mesh(Sph(.05, 10, 8), soft(C.paper), .03, .32, 0, bin);
  ao(-1.32, -2.66, .45, .45, .35);

  /* ============ open floor: rug, beanbag, ottoman + record player ============ */
  const RC = new V3(1.05, 0, .95);
  const rugTex = ctex(512, 512, (g, w, h) => {
    const cx = w / 2,
      cy = h / 2;
    [
      ['#efd3cf', 256],
      ['#fdf8f2', 236],
      ['#f2c6cd', 222],
      ['#f6e3dc', 196],
      ['#fdf8f2', 58]
    ].forEach(([c, r]) => {
      g.fillStyle = c;
      g.beginPath();
      g.arc(cx, cy, r, 0, 7);
      g.fill();
    });
    g.strokeStyle = '#cf7c8c';
    g.lineWidth = 3;
    g.setLineDash([8, 10]);
    g.beginPath();
    g.arc(cx, cy, 229, 0, 7);
    g.stroke();
  });
  const rug = mesh(Cyl(1.2, 1.2, .03, 64), fabric(0xffffff, {
    map: rugTex
  }), RC.x, .015, RC.z);
  ao(RC.x, RC.z, 2.7, 2.7, .25);
  const otto = group(1.45, 0, 1.1);
  otto.rotation.y = -.45;
  mesh(RB(.98, .46, .68, .14), fabric(C.beige), 0, .25, 0, otto);
  mesh(RB(1.04, .13, .74, .065), fabric(C.blush), 0, .52, 0, otto);
  [-.3, 0, .3].forEach(x => mesh(Sph(.025), fabric(C.rose), x, .585, .0, otto));
  ao(1.45, 1.1, 1.4, 1.1, .45, .45);
  const record = group(-.05, .585, 0, otto);
  record.scale.setScalar(.95);
  mesh(RB(.62, .17, .48, .06), gloss(C.rose), 0, .085, 0, record);
  mesh(RB(.56, .02, .42, .01), soft(C.paper), 0, .175, 0, record);
  const vinyl = group(-.05, .19, 0, record);
  mesh(Cyl(.175, .175, .02, 32), soft(C.plum), 0, 0, 0, vinyl);
  mesh(Cyl(.165, .165, .012, 32), gloss(0x1e1418), 0, .014, 0, vinyl);
  mesh(Cyl(.052, .052, .014, 20), soft(C.pink), 0, .016, 0, vinyl);
  mesh(Box(.02, .004, .05), soft(C.paper), .025, .024, 0, vinyl);
  const armPivot = group(.21, .19, -.16, record);
  mesh(Cyl(.026, .03, .05, 12), metal(C.brass), 0, .02, 0, armPivot);
  rod(new V3(0, .045, 0), new V3(-.19, .045, .15), .008, metal(0xd8d0d4), armPivot);
  mesh(Box(.04, .02, .05), soft(C.plum), -.19, .04, .16, armPivot);
  armPivot.rotation.y = .6;
  const lidHinge = group(0, .17, -.24, record);
  lidHinge.rotation.x = -1.72;
  mesh(RB(.62, .045, .48, .03), gloss(C.rose), 0, .02, .24, lidHinge);
  mesh(Box(.48, .006, .34), soft(C.blush), 0, -.004, .24, lidHinge);
  register(record, 'record', 'Record player · play some music');
  const sleeve = mesh(RB(.3, .3, .015, .01), soft(C.pink), .38, .76, -.1, otto);
  sleeve.rotation.set(-.12, 0, -.08);

  /* ============ lights ============ */
  const fairyMats = [0xffd77a, 0xffb8c4, 0xfff2d6].map(c => M(0xffffff, {
    em: c,
    ei: 1.2
  }));

  function stringLights(from, to, swoops, sag) {
    const pts = [],
      N = 54;
    for (let i = 0; i <= N; i++) {
      const u = i / N;
      const p = new V3().lerpVectors(from, to, u);
      p.y -= sag * Math.abs(Math.sin(u * Math.PI * swoops));
      pts.push(p);
      if (i % 3 === 1) {
        const b = mesh(Sph(.035, 10, 8), fairyMats[(i / 3 | 0) % 3], p.x, p.y - .04, p.z);
        b.userData.noShadow = true;
      }
    }
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({
      color: col(0x7a5c50)
    })));
  }
  stringLights(new V3(-2.93, 3.85, -2.8), new V3(-2.93, 3.85, 2.8), 3, .26);
  stringLights(new V3(-2.8, 3.88, -2.93), new V3(1.65, 3.88, -2.93), 2, .24);
  const ledMat = M(0xffffff, {
    em: 0xff9fb5,
    ei: .2
  });
  const led1 = mesh(Box(5.9, .03, .03), ledMat, -.05, H - .14, -2.74);
  led1.userData.noShadow = true;
  const led2 = mesh(Box(.03, .03, 5.9), ledMat, -2.74, H - .14, -.05);
  led2.userData.noShadow = true;
  const ledA = new THREE.PointLight(col(0xff8fae), 0, 4.5, 1.6);
  ledA.position.set(-.5, 3.7, -2.4);
  scene.add(ledA);
  const ledB = new THREE.PointLight(col(0xffa6c0), 0, 4.5, 1.6);
  ledB.position.set(-2.4, 3.7, .5);
  scene.add(ledB);
  const fairyLight = new THREE.PointLight(col(0xffc98a), 0, 5, 1.8);
  fairyLight.position.set(-2.3, 3.3, .3);
  scene.add(fairyLight);
  const monGlow = new THREE.PointLight(col(0xffc2d0), 0, 2.4, 2);
  monGlow.position.set(.1, 2.0, -1.9);
  scene.add(monGlow);
  const sun = new THREE.SpotLight(col(0xffc98f), 0, 7, .62, .9, 1.1);
  sun.position.set(-2.85, 2.6, .45);
  sun.target.position.set(-1.1, .4, .7);
  scene.add(sun, sun.target);

  scene.traverse(o => {
    if (o.isMesh) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      const isBasic = mats.some(m => m.isMeshBasicMaterial);
      o.castShadow = !isBasic && !mats.some(m => m.transparent) && !o.userData.noShadow;
      o.receiveShadow = !isBasic;
    }
  });
  scene.updateMatrixWorld(true);

  /* labels: always-visible pins over everything you can click */
  const visited = new Set(store.get('visited', []));
  const PINS = [
    ['monitor', 'My website'],
    ['pc', 'My PC'],
    ['books', 'Skills'],
    ['corkboard', 'Experience'],
    ['certificate', 'Education'],
    ['phone', 'Contact'],
    ['record', 'Music ♪'],
    ['dog', 'My puppy'],
    ['vanity', 'Vanity']
  ];
  const labelsEl = $('#labels');
  const pins = PINS.map(([id, text, fun]) => {
    const it = byId[id];
    const bb = new THREE.Box3().setFromObject(it.group);
    const c = bb.getCenter(new V3());
    const anchor = new V3(c.x, bb.max.y + .02, c.z);
    if (id === 'certificate') anchor.x += .1;
    if (id === 'corkboard') anchor.z += .1;
    if (id === 'vanity') {
      anchor.set(-2.7, 1.6, 2.05);
    }
    const el = document.createElement('button');
    el.className = 'pin' + (fun ? ' fun' : '') + (visited.has(id) ? ' seen' : '');
    el.innerHTML = `<span class="dot" aria-hidden="true"></span><span class="txt">${text}</span>`;
    el.setAttribute('aria-label', `${text}: ${it.label}`);
    el.addEventListener('click', e => {
      e.stopPropagation();
      ac();
      dismissHint();
      activate(id);
    });
    el.addEventListener('mouseenter', () => {
      lastHover = it;
    });
    el.addEventListener('mouseleave', () => {
      if (lastHover === it) lastHover = null;
    });
    labelsEl.appendChild(el);
    it.pin = el;
    return {
      el,
      anchor,
      it
    };
  });
  const pv = new V3();

  function placePins() {
    const show = mode === 'free' && !panelOpen && !welcomeOpen;
    labelsEl.classList.toggle('off', !show);
    if (!show) return;
    const W = window.innerWidth,
      Hh = window.innerHeight,
      list = [];
    for (const p of pins) {
      pv.copy(p.anchor).project(camera);
      if (pv.z > 1 || pv.x < -1.05 || pv.x > 1.05 || pv.y < -1.05 || pv.y > 1.05) {
        p.el.style.visibility = 'hidden';
        continue;
      }
      p.el.style.visibility = '';
      if (!p.w) {
        p.w = isTouch ? p.el.offsetWidth : 20;
        p.h = isTouch ? p.el.offsetHeight : 20;
      }
      list.push({
        p,
        x: (pv.x + 1) / 2 * W,
        y: (1 - pv.y) / 2 * Hh
      });
    }
    // nudge labels apart so neighbours never overlap
    list.sort((a, b) => a.y - b.y);
    for (let pass = 0; pass < 3; pass++) {
      for (let i = 0; i < list.length; i++)
        for (let j = 0; j < i; j++) {
          const a = list[i],
            b = list[j];
          if (Math.abs(a.x - b.x) < (a.p.w + b.p.w) / 2 + 4 && Math.abs(a.y - b.y) < a.p.h + 3) {
            b.y = a.y - a.p.h - 4;
          }
        }
    }
    for (const L of list) {
      const x = isTouch ? Math.min(Math.max(L.x, L.p.w / 2 + 6), W - L.p.w / 2 - 6) : L.x;
      L.p.el.style.transform = `translate3d(${(x - (isTouch ? L.p.w/2 : 9)).toFixed(1)}px, ${(L.y - L.p.h/2).toFixed(1)}px, 0)`;
      L.p.el.classList.toggle('hot', lastHover === L.p.it);
    }
  }
  window.addEventListener('resize', () => pins.forEach(p => {
    p.w = 0;
  }));

  function markVisited(id) {
    if (!byId[id] || visited.has(id)) return;
    visited.add(id);
    store.set('visited', [...visited]);
    if (byId[id].pin) byId[id].pin.classList.add('seen');
  }

  const sparkTex = ctex(64, 64, g => {
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 30);
    gr.addColorStop(0, 'rgba(255,246,230,1)');
    gr.addColorStop(.25, 'rgba(255,210,220,.55)');
    gr.addColorStop(1, 'rgba(255,210,220,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, 64, 64);
    g.fillStyle = '#fffaf2';
    g.beginPath();
    for (let i = 0; i < 8; i++) {
      const a2 = i * Math.PI / 4 - Math.PI / 2,
        r = i % 2 ? 4 : 20;
      g.lineTo(32 + Math.cos(a2) * r, 32 + Math.sin(a2) * r);
    }
    g.closePath();
    g.fill();
  });
  const heartTex = ctex(64, 64, g => {
    g.fillStyle = '#ff6f86';
    g.beginPath();
    g.moveTo(32, 54);
    g.bezierCurveTo(4, 34, 10, 8, 32, 22);
    g.bezierCurveTo(54, 8, 60, 34, 32, 54);
    g.fill();
  });
  const zTex = ctex(64, 64, g => {
    g.fillStyle = '#fbe7ea';
    g.font = '700 42px Fredoka, sans-serif';
    g.textAlign = 'center';
    g.fillText('z', 32, 46);
  });
  const puffTex = ctex(64, 64, g => {
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 30);
    gr.addColorStop(0, 'rgba(255,255,255,.75)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, 64, 64);
  });
  const noteTex = ctex(64, 64, g => {
    g.fillStyle = '#a95c6c';
    g.font = '700 50px Figtree, sans-serif';
    g.textAlign = 'center';
    g.fillText('♪', 32, 50);
  });
  const noteTex2 = ctex(64, 64, g => {
    g.fillStyle = '#e8a3af';
    g.font = '700 50px Figtree, sans-serif';
    g.textAlign = 'center';
    g.fillText('♫', 32, 50);
  });
  const fx = [];

  function spawn(tex, pos, opts = {}) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      toneMapped: false
    }));
    s.position.copy(pos);
    s.scale.setScalar(opts.size || .12);
    scene.add(s);
    fx.push({
      s,
      life: 0,
      dur: opts.dur || 1.6,
      vel: opts.vel || new V3(0, .35, 0),
      grow: opts.grow || 0,
      wob: opts.wob || 0,
      ph: Math.random() * 6
    });
  }

  /* ============ animated canvases ============ */
  function drawMonitor() {
    const g = monTex.userData.ctx,
      w = 768,
      h = 480;
    g.fillStyle = '#FAF5F0';
    g.fillRect(0, 0, w, h);
    const orb = (x, y, r, c1, c2) => {
      const gr = g.createRadialGradient(x - r * .3, y - r * .35, r * .05, x, y, r);
      gr.addColorStop(0, '#fff');
      gr.addColorStop(.3, c1);
      gr.addColorStop(1, c2);
      g.fillStyle = gr;
      g.beginPath();
      g.arc(x, y, r, 0, 7);
      g.fill();
    };
    orb(680, 40, 160, '#FFB3D2', '#F27DB0');
    orb(500, 150, 38, '#ECE6FF', '#8F76F5');
    g.textBaseline = 'alphabetic';
    g.fillStyle = '#EE5F9E';
    g.font = '600 14px "Bricolage Grotesque", sans-serif';
    g.fillText('Janya•Walia', 22, 32);
    roundRect(g, 270, 13, 228, 32, 16);
    g.fillStyle = '#fff';
    g.fill();
    g.fillStyle = '#231C1F';
    g.font = '600 12px "Instrument Sans", sans-serif';
    g.fillText('Work', 286, 34);
    g.fillText('Experience', 326, 34);
    roundRect(g, 402, 17, 24, 24, 7);
    g.fillStyle = '#6F52EC';
    g.fill();
    roundRect(g, 432, 17, 62, 24, 12);
    g.fillStyle = '#231C1F';
    g.fill();
    g.fillStyle = '#fff';
    g.fillText('3D Room', 441, 33);
    g.fillStyle = '#EE5F9E';
    g.font = '600 20px "Bricolage Grotesque", sans-serif';
    g.fillText('Creative Developer & UX Designer', 22, 104);
    g.font = '700 140px "Bricolage Grotesque", sans-serif';
    g.fillText('Janya', 14, 240);
    const nw = g.measureText('Janya').width;
    g.save();
    g.translate(26 + nw + 66, 196);
    g.rotate(-.09);
    roundRect(g, -62, -42, 124, 82, 14);
    g.fillStyle = '#FFD6E8';
    g.fill();
    g.restore();
    g.fillText('Walia', 26 + nw + 138, 240);
    g.fillStyle = '#6F6467';
    g.font = '400 11px "Space Mono", monospace';
    g.fillText('CS @ WILFRID LAURIER · WATERLOO, ON', 22, 460);
    monTex.needsUpdate = true;
  }

  /* ============ camera & controls ============ */
  const UP = new V3(0, 1, 0);
  const HOME = {
    target: new V3(-.1, 1.35, -.35),
    theta: .78,
    phi: 1.04,
    radius: 11.5
  };
  const orbit = {
    target: HOME.target.clone(),
    theta: HOME.theta,
    phi: HOME.phi,
    radius: HOME.radius
  };
  const want = {
    target: HOME.target.clone(),
    theta: HOME.theta,
    phi: HOME.phi,
    radius: HOME.radius
  };
  let RMIN = 4,
    RMAX = 19;
  const camLook = new V3();
  let mode = 'intro';
  const mouse = new THREE.Vector2(0, 0),
    mouseS = new THREE.Vector2(0, 0);
  const tanH = () => Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  const narrow = () => window.innerWidth < 720;

  function orbitPos(o, out = new V3()) {
    const sp = Math.sin(o.phi);
    return out.set(o.target.x + o.radius * sp * Math.sin(o.theta), o.target.y + o.radius * Math.cos(o.phi), o.target.z + o.radius * sp * Math.cos(o.theta));
  }

  function homeRadius() {
    const a = camera.aspect;
    return a >= 1.45 ? 11.5 : a >= 1.05 ? 13 : a >= .8 ? 15.5 : 20.5;
  }

  function clampTarget(v) {
    v.x = THREE.MathUtils.clamp(v.x, -2.6, 2.6);
    v.y = THREE.MathUtils.clamp(v.y, .3, 3.3);
    v.z = THREE.MathUtils.clamp(v.z, -2.6, 2.6);
    return v;
  }

  function resize() {
    const w = window.innerWidth,
      h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = camera.aspect < .8 ? 46 : camera.aspect < 1.1 ? 37 : 30;
    camera.updateProjectionMatrix();
    const hr = homeRadius();
    HOME.radius = hr;
    RMAX = hr + 7;
    RMIN = 3.6;
    if (mode === 'free') want.radius = Math.min(Math.max(want.radius, RMIN), RMAX);
  }
  window.addEventListener('resize', resize);
  resize();
  orbit.radius = want.radius = HOME.radius;

  const tweens = [];
  const ease = {
    io: p => p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2,
    out: p => 1 - Math.pow(1 - p, 3),
    back: p => {
      const c = 1.7;
      return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2);
    }
  };

  function tween(dur, fn, e = ease.io, done) {
    const tw = {
      t: 0,
      dur: Math.max(.001, dur),
      fn,
      e,
      done,
      dead: false
    };
    tweens.push(tw);
    return tw;
  }
  let camTw = null;

  function flyTo(pos, look, dur, done, arc = .3, step) {
    if (camTw) camTw.dead = true;
    const p0 = camera.position.clone(),
      l0 = camLook.clone();
    if (reduced) dur = Math.min(dur, .3);
    mode = 'tween';
    camTw = tween(dur, (e, _p) => {
      camera.position.lerpVectors(p0, pos, e);
      camera.position.y += Math.sin(e * Math.PI) * arc;
      camLook.lerpVectors(l0, look, e);
      camera.lookAt(camLook);
      step && step(e, _p);
    }, ease.io, () => {
      camTw = null;
      done && done();
    });
  }
  let focus = null;
  const titleEl = $('#title');

  function goHome(dur = 1.15) {
    focus = null;
    titleEl.classList.remove('dim');
    flyTo(orbitPos(orbit), orbit.target.clone(), dur, () => {
      mode = 'free';
    });
  }

  function focusOn(it) {
    const v = it.view;
    if (!v) return;
    const t = v.t ? new V3(...v.t) : it.group.getWorldPosition(new V3()).add(new V3(...v.auto));
    const dir = new V3(...v.d).normalize();
    const dist = v.dist * (narrow() ? 1.35 : 1) * (camera.fov > 34 ? .9 : 1);
    const pos = t.clone().addScaledVector(dir, dist);
    const fwd = t.clone().sub(pos).normalize(),
      right = new V3().crossVectors(fwd, UP).normalize(),
      up = new V3().crossVectors(right, fwd);
    if (narrow()) {
      const s = dist * tanH() * .42;
      pos.addScaledVector(up, -s);
      t.addScaledVector(up, -s);
    } else {
      const s = dist * tanH() * camera.aspect * .27;
      pos.addScaledVector(right, s);
      t.addScaledVector(right, s);
    }
    titleEl.classList.add('dim');
    flyTo(pos, t, 1.15, () => {
      mode = 'focus';
      focus = {
        pos,
        look: t
      };
    });
  }

  /* pointer: left-drag orbit, right-drag (or two fingers) pan, wheel/pinch zoom toward the cursor */
  const pointers = new Map();
  let downAt = null,
    dragged = false,
    panning = false,
    pinch0 = 0,
    mid0 = null,
    lastHover = null;
  const ray = new THREE.Raycaster(),
    ndc = new THREE.Vector2();
  ray.params.Points.threshold = .01;
  ray.params.Line.threshold = .01;
  const solid = [];
  scene.traverse(o => {
    if (o.isMesh && !(o.material && o.material.transparent && o.material.isMeshBasicMaterial)) solid.push(o);
  });

  function pointAt(x, y) {
    ndc.set(x / window.innerWidth * 2 - 1, -(y / window.innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const h = ray.intersectObjects(solid, false)[0];
    return h ? h.point : null;
  }

  function panBy(dx, dy) {
    const fwd = new V3().subVectors(orbit.target, camera.position).normalize();
    const right = new V3().crossVectors(fwd, UP).normalize(),
      up = new V3().crossVectors(right, fwd).normalize();
    const s = want.radius * tanH() * 2 / window.innerHeight;
    want.target.addScaledVector(right, -dx * s).addScaledVector(up, dy * s);
    clampTarget(want.target);
  }

  function zoomAt(factor, x, y) {
    const r0 = want.radius,
      r1 = THREE.MathUtils.clamp(r0 * factor, RMIN, RMAX);
    if (r1 < r0) {
      const p = pointAt(x, y);
      if (p) {
        want.target.lerp(p, Math.min(.9, (1 - r1 / r0) * 1.1));
        clampTarget(want.target);
      }
    } else if (r1 > r0) {
      want.target.lerp(HOME.target, Math.min(1, (r1 - r0) / Math.max(.01, RMAX - r0)));
    }
    want.radius = r1;
  }
  canvas.addEventListener('contextmenu', e => e.preventDefault());
  canvas.addEventListener('pointerdown', e => {
    ac();
    pointers.set(e.pointerId, {
      x: e.clientX,
      y: e.clientY
    });
    canvas.setPointerCapture(e.pointerId);
    if (pointers.size === 1) {
      panning = e.button === 2 || e.shiftKey;
      downAt = {
        x: e.clientX,
        y: e.clientY,
        lx: e.clientX,
        ly: e.clientY,
        th: want.theta,
        ph: want.phi
      };
      dragged = false;
    }
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinch0 = Math.hypot(a.x - b.x, a.y - b.y);
      mid0 = {
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2
      };
      dragged = true;
    }
  });
  canvas.addEventListener('pointermove', e => {
    mouse.set(e.clientX / window.innerWidth * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    if (pointers.has(e.pointerId)) pointers.set(e.pointerId, {
      x: e.clientX,
      y: e.clientY
    });
    if (pointers.size === 2 && mode === 'free') {
      const [a, b] = [...pointers.values()];
      const d = Math.max(20, Math.hypot(a.x - b.x, a.y - b.y)),
        mid = {
          x: (a.x + b.x) / 2,
          y: (a.y + b.y) / 2
        };
      if (pinch0) {
        zoomAt(pinch0 / d, mid.x, mid.y);
        pinch0 = d;
      }
      if (mid0) {
        panBy(mid.x - mid0.x, mid.y - mid0.y);
        mid0 = mid;
      }
      return;
    }
    if (downAt && pointers.size === 1) {
      const dx = e.clientX - downAt.x,
        dy = e.clientY - downAt.y;
      if (!dragged && Math.hypot(dx, dy) > 6) {
        dragged = true;
        canvas.classList.add(panning ? 'panning' : 'dragging');
        dismissHint();
      }
      if (dragged && mode === 'free') {
        if (panning) {
          panBy(e.clientX - downAt.lx, e.clientY - downAt.ly);
        } else {
          want.theta = THREE.MathUtils.clamp(downAt.th - dx * .005, .3, 1.27);
          want.phi = THREE.MathUtils.clamp(downAt.ph - dy * .004, .7, 1.4);
        }
      }
      downAt.lx = e.clientX;
      downAt.ly = e.clientY;
    }
    if (e.pointerType === 'mouse') hoverCheck(e.clientX, e.clientY);
  });

  function endPointer(e) {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) {
      pinch0 = 0;
      mid0 = null;
    }
    if (pointers.size === 0) {
      canvas.classList.remove('dragging', 'panning');
      if (downAt && !dragged && e.type === 'pointerup' && e.button !== 2) clickAt(e.clientX, e.clientY);
      downAt = null;
      panning = false;
    }
  }
  canvas.addEventListener('pointerup', endPointer);
  canvas.addEventListener('pointercancel', endPointer);
  canvas.addEventListener('pointerleave', () => setHover(null));
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    if (mode !== 'free') return;
    const f = 1 + Math.sign(e.deltaY) * Math.min(.16, Math.abs(e.deltaY) * .0016);
    zoomAt(f, e.clientX, e.clientY);
    dismissHint();
  }, {
    passive: false
  });
  canvas.addEventListener('dblclick', e => {
    if (mode !== 'free') return;
    zoomAt(.6, e.clientX, e.clientY);
  });

  function pick(x, y) {
    ndc.set(x / window.innerWidth * 2 - 1, -(y / window.innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(interactives.map(i => i.group), true);
    for (const h of hits)
      if (h.object.userData.it) return h.object.userData.it;
    return null;
  }
  const tip = $('#tooltip');

  function setHover(it, x, y) {
    if (it !== lastHover) {
      lastHover = it;
      if (it) {
        tip.textContent = it.label;
        tip.classList.add('on');
        canvas.classList.add('pointer');
        sfx.hover();
      } else {
        tip.classList.remove('on');
        canvas.classList.remove('pointer');
      }
    }
    if (it && x !== undefined) {
      const tx = Math.min(x + 16, window.innerWidth - tip.offsetWidth - 8);
      tip.style.transform = `translate(${tx}px, ${y + 18}px)`;
    }
  }

  function hoverCheck(x, y) {
    if (mode === 'site' || mode === 'intro' || dragged) {
      setHover(null);
      return;
    }
    setHover(pick(x, y), x, y);
  }

  function clickAt(x, y) {
    if (mode === 'site' || mode === 'intro') return;
    const it = pick(x, y);
    if (!it) {
      if (panelOpen) closePanel();
      return;
    }
    dismissHint();
    activate(it.id);
  }

  /* ============ interactions ============ */
  let panelOpen = null;

  function activate(id) {
    const it = byId[id];
    if (!it) return;
    it.vel -= 2.2;
    sfx.click();
    switch (id) {
      case 'monitor':
        enterSite();
        return;
      case 'lamp':
        toggleLamp();
        return;
      case 'dog':
        patDog();
        return;
      case 'mug':
        steam();
        return;
      case 'record':
        toggleRecord();
        return;
      case 'pc':
        nextRGB();
        return;
      case 'vanity':
        toggleVanity();
        return;
    }
    const delay = ({
      phone: .1
    } [id] || 0) * 1000;
    if (id === 'phone') liftPhone();
    if (id === 'books') pullBook();
    if (id === 'corkboard') {
      noteT = 1.5;
      sfx.whoosh();
    }
    if (id === 'certificate') it.swing = 1;
    markVisited(id);
    if (panelOpen && panelOpen !== id) hidePanel(true);
    setTimeout(() => {
      focusOn(it);
      setTimeout(() => openPanel(id), reduced ? 250 : 650);
    }, delay);
  }
  let phoneUp = 0;

  function liftPhone() {
    sfx.ring();
    tween(.5, e => {
      phoneUp = e;
    }, ease.back);
  }

  function pullBook() {
    const b = bookMeshes[3];
    tween(.45, e => {
      b.position.z = e * .12;
    }, ease.back);
  }
  let noteT = 0;

  function toggleLamp() {
    lampOn = !lampOn;
    const from = lampLight.intensity,
      to = lampOn ? env.lamp : 0,
      c0 = lampCap.material.emissiveIntensity,
      u0 = lampUnder.material.emissiveIntensity;
    tween(.3, e => {
      lampLight.intensity = from + (to - from) * e;
      lampCap.material.emissiveIntensity = lampOn ? c0 + (env.cap - c0) * e : c0 * (1 - e);
      lampUnder.material.emissiveIntensity = lampOn ? u0 + (1.6 - u0) * e : u0 * (1 - e);
    });
  }

  function patDog() {
    sfx.woof();
    dogHappy = 1.6;
    markVisited('dog');
    const p = dog.getWorldPosition(new V3());
    for (let i = 0; i < 5; i++) setTimeout(() => spawn(heartTex, p.clone().add(new V3((Math.random() - .5) * .2, .45, .1)), {
      size: .1 + Math.random() * .05,
      vel: new V3((Math.random() - .5) * .12, .42, .1),
      wob: .35
    }), i * 180);
    toast('♡ woof! he loves the attention');
  }
  const RGB = [
    ['rose', 335],
    ['lavender', 262],
    ['peach', 18],
    ['rainbow', -1]
  ];
  let rgbMode = 0;

  function nextRGB() {
    rgbMode = (rgbMode + 1) % RGB.length;
    markVisited('pc');
    tone(520, .08, 'triangle', .04);
    tone(780, .1, 'triangle', .035, 0, .08);
    tone(1040, .12, 'sine', .03, 0, .16);
    toast(`RGB mode: <b>${RGB[rgbMode][0]}</b>`);
  }

  function toggleVanity() {
    vanOn = !vanOn;
    markVisited('vanity');
    const from = bulbMat.emissiveIntensity,
      to = vanOn ? 2.4 : .2;
    tween(.35, e => {
      bulbMat.emissiveIntensity = from + (to - from) * e;
    });
    if (vanOn) {
      sfx.chime();
      const p = van.getWorldPosition(new V3()).add(new V3(-.1, 1.5, 0));
      for (let i = 0; i < 7; i++) setTimeout(() => spawn(sparkTex, p.clone().add(new V3(Math.random() * .2, (Math.random() - .5) * .6, (Math.random() - .5) * .7)), {
        size: .12,
        dur: 1.2,
        vel: new V3(.1, .15, 0),
        grow: -.05
      }), i * 90);
      toast('✨ mirror lights on');
    } else sfx.click();
  }

  function steam() {
    sfx.pop();
    const p = mug.getWorldPosition(new V3());
    for (let i = 0; i < 6; i++) setTimeout(() => spawn(puffTex, p.clone().add(new V3((Math.random() - .5) * .04, .22, 0)), {
      size: .08,
      dur: 1.8,
      vel: new V3((Math.random() - .5) * .05, .26, 0),
      grow: .14,
      wob: .12
    }), i * 140);
  }
  const tmpHSL = new THREE.Color();

  function updateRGB(t, dt) {
    const m = RGB[rgbMode];
    const h = m[1] < 0 ? (t * 70) % 360 : m[1];
    const breathe = m[1] < 0 ? 1 : .85 + Math.sin(t * 1.6) * .15;
    tmpHSL.setHSL(h / 360, .85, .62);
    rgbMats.forEach((mt, i) => {
      if (m[1] < 0) mt.emissive.setHSL(((h + i * 30) % 360) / 360, .85, .62);
      else mt.emissive.copy(tmpHSL);
      mt.emissiveIntensity = 2.4 * breathe;
    });
    pcLight.color.copy(tmpHSL);
    pcLight.intensity = .45 * breathe + env.ledL * .4;
    if (!reduced) fans.forEach((f, i) => {
      f.rotation.z -= dt * (7 + i * 1.3);
    });
  }

  function updateDog(t, dt) {
    dogHappy = Math.max(0, dogHappy - dt * .4);
    const h = Math.min(1, dogHappy * 1.4);
    dogBody.scale.y = .62 * (1 + (reduced ? 0 : Math.sin(t * 1.7) * .035));
    dogHead.rotation.x = -.28 * h + (reduced ? 0 : Math.sin(t * .7) * .03) * (1 - h);
    dogHead.position.y = .25 + h * .07;
    dogHead.rotation.z = reduced ? 0 : Math.sin(t * (h > 0 ? 4 : .6)) * (.05 + .12 * h);
    dogTail.rotation.z = reduced ? 0 : Math.sin(t * (3 + 20 * h)) * (.2 + .45 * h);
    dogEars.forEach((e, i) => {
      const k = i ? 1 : -1;
      e.rotation.z = k * (.35 - .25 * h) + (reduced ? 0 : Math.sin(t * 2 + i) * .03);
    });
    dogTongue.visible = h > .25;
    dogEyes.forEach(e => {
      e.scale.y = h > .1 ? 1 : (Math.sin(t * .9) > .97 ? .15 : 1);
    });
  }

  /* ============ panel ============ */
  const panel = $('#panel'),
    panelBody = $('#panel-body');

  function renderPanel(c) {
    return `<p class="kicker">~ ${c.kicker} ~</p><h2>${c.title}</h2>${c.meta ? `<p class="meta">${c.meta}</p>` : ''}${c.chips ? `<ul class="chips">${c.chips.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}<div class="prose">${c.body}</div>${c.links ? `<div class="links">${c.links.map(l => `<a class="btn ${l.primary ? 'primary' : ''}" href="${l.href}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('')}</div>` : ''}`;
  }
  let hideT;

  function openPanel(id) {
    const c = CONTENT[id];
    if (!c) return;
    clearTimeout(hideT);
    panelBody.innerHTML = renderPanel(c);
    panelBody.scrollTop = 0;
    panel.hidden = false;
    panelOpen = id;
    titleEl.classList.add('dim');
    requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.add('open')));
  }

  function hidePanel(instant) {
    panel.classList.remove('open');
    const was = panelOpen;
    panelOpen = null;
    clearTimeout(hideT);
    hideT = setTimeout(() => {
      if (!panelOpen) panel.hidden = true;
    }, instant ? 10 : 500);
    if (was === 'phone') tween(.4, e => {
      phoneUp = 1 - e;
    });
    if (was === 'books') tween(.4, e => {
      bookMeshes[3].position.z = .12 * (1 - e);
    });
    if (mode === 'free') titleEl.classList.remove('dim');
  }

  function closePanel() {
    const wasFocus = mode === 'focus' || mode === 'tween';
    hidePanel();
    if (wasFocus) goHome();
    else titleEl.classList.remove('dim');
  }
  $('#panel-close').addEventListener('click', closePanel);
  panel.addEventListener('click', e => {
    const go = e.target.closest('[data-goto]');
    if (go) {
      const id = go.dataset.goto;
      hidePanel(true);
      if (id === 'monitor') enterSite();
      else activate(id);
      return;
    }
    const cp = e.target.closest('[data-copy]');
    if (cp) copyText(cp.dataset.copy, cp);
  });

  function copyText(text, btn) {
    const ok = () => {
      btn.textContent = 'Copied';
      setTimeout(() => btn.textContent = 'Copy', 1500);
    };
    try {
      navigator.clipboard.writeText(text).then(ok, () => selectNear(btn));
    } catch (e) {
      selectNear(btn);
    }
  }

  function selectNear(btn) {
    const code = btn.parentElement.querySelector('code');
    if (!code) return;
    const r = document.createRange();
    r.selectNodeContents(code);
    const s = getSelection();
    s.removeAllRanges();
    s.addRange(r);
    btn.textContent = 'Selected';
  }
  document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => {
    ac();
    sfx.click();
    dismissHint();
    const id = b.dataset.open;
    if (mode === 'site' || busy) return;
    openDock(id);
  }));

  function openDock(id) {
    if (id === 'contact') {
      activate('phone');
      return;
    }
    if (panelOpen === id) {
      closePanel();
      return;
    }
    if (mode === 'focus') {
      hidePanel(true);
      goHome();
    }
    openPanel(id);
  }
  $('#reset-btn').addEventListener('click', () => {
    sfx.click();
    if (mode !== 'free' && mode !== 'focus') return;
    if (panelOpen) hidePanel();
    Object.assign(want, {
      theta: HOME.theta,
      phi: HOME.phi,
      radius: HOME.radius
    });
    want.target.copy(HOME.target);
    Object.assign(orbit, {
      theta: HOME.theta,
      phi: HOME.phi,
      radius: HOME.radius
    });
    orbit.target.copy(HOME.target);
    goHome(.9);
  });
  $('#site-btn').addEventListener('click', () => enterSite());

  /* ============ record player music (synthesized lo-fi) ============ */
  let musicOn = false,
    mus = null,
    vinylSpin = 0,
    noteAcc = 0;
  const midiF = m => 440 * Math.pow(2, (m - 69) / 12);

  function startMusic() {
    const a = ac();
    if (!a || mus) return;
    const out = a.createGain();
    out.gain.setValueAtTime(.0001, a.currentTime);
    out.gain.exponentialRampToValueAtTime(.6, a.currentTime + 1.4);
    const lp = a.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1700;
    lp.Q.value = .5;
    lp.connect(out);
    out.connect(a.destination);
    const len = a.sampleRate * 2,
      buf = a.createBuffer(1, len, a.sampleRate),
      chn = buf.getChannelData(0);
    for (let i = 0; i < len; i++) chn[i] = Math.random() < .0012 ? (Math.random() * 2 - 1) * .7 : (Math.random() * 2 - 1) * .01;
    const cr = a.createBufferSource();
    cr.buffer = buf;
    cr.loop = true;
    const cg = a.createGain();
    cg.gain.value = .5;
    cr.connect(cg).connect(lp);
    cr.start();
    const CH = [
        [53, 57, 60, 64],
        [52, 55, 59, 62],
        [50, 53, 57, 60],
        [48, 52, 55, 59]
      ],
      PENT = [72, 74, 76, 79, 81, 84, 79, 76];
    const beat = 60 / 72;
    let next = a.currentTime + .15,
      step = 0;

    function note(f, t, d, type, v, f2) {
      const o = a.createOscillator(),
        g = a.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f, t);
      if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d * .8);
      g.gain.setValueAtTime(.0001, t);
      g.gain.exponentialRampToValueAtTime(v, t + Math.min(.09, d * .25));
      g.gain.exponentialRampToValueAtTime(.0001, t + d);
      o.connect(g).connect(lp);
      o.start(t);
      o.stop(t + d + .05);
    }

    function sched() {
      while (next < a.currentTime + .35) {
        const bar = Math.floor(step / 8) % 4,
          s8 = step % 8,
          ch = CH[bar];
        if (s8 === 0) {
          ch.forEach((m, i) => note(midiF(m), next + i * .025, beat * 3.9, 'triangle', .03));
          note(midiF(ch[0] - 24), next, beat * 1.8, 'sine', .1);
        }
        if (s8 === 5) note(midiF(ch[0] - 24), next, beat * 1.2, 'sine', .07);
        if (s8 === 0 || s8 === 4) note(130, next, .22, 'sine', .14, 42);
        if (s8 === 2 || s8 === 6) note(2600, next, .03, 'square', .006);
        if (s8 !== 0 && Math.random() < .34) note(midiF(PENT[(step * 5 + bar * 3 + (Math.random() * 3 | 0)) % PENT.length]), next, beat * 1.1, 'sine', .04);
        next += beat / 2;
        step++;
      }
    }
    sched();
    const iv = setInterval(sched, 60);
    mus = {
      out,
      cr,
      iv
    };
  }

  function stopMusic() {
    if (!mus || !actx) {
      mus = null;
      return;
    }
    const {
      out,
      cr,
      iv
    } = mus, t = actx.currentTime;
    mus = null;
    clearInterval(iv);
    out.gain.cancelScheduledValues(t);
    out.gain.setValueAtTime(Math.max(.0001, out.gain.value), t);
    out.gain.exponentialRampToValueAtTime(.0001, t + .6);
    setTimeout(() => {
      try {
        cr.stop();
        out.disconnect();
      } catch (e) {}
    }, 800);
  }

  function toggleRecord(force) {
    musicOn = force !== undefined ? force : !musicOn;
    if (musicOn) {
      if (!soundOn) {
        soundOn = true;
        store.set('sound', true);
        syncSound();
      }
      startMusic();
      toast('♪ Now playing a little lo-fi loop. Click the record player again to stop.');
    } else stopMusic();
  }
  $('#sound-btn').addEventListener('click', () => {
    soundOn = !soundOn;
    store.set('sound', soundOn);
    syncSound();
    if (soundOn) sfx.click();
    else if (musicOn) toggleRecord(false);
  });

  /* ============ day & night ============ */
  const TIMES = {
    day: {
      hs: 0xffeedd,
      hg: 0xc99a74,
      hi: .55,
      kc: 0xffd9b0,
      ki: .95,
      fi: .18,
      exp: .93,
      lamp: .25,
      cap: .4,
      led: .15,
      ledL: 0,
      fairy: .45,
      fairyL: 0,
      neon: .75,
      neonL: 0,
      mon: .15,
      sun: 1.2
    },
    night: {
      hs: 0x8a6a86,
      hg: 0x3c2a30,
      hi: .3,
      kc: 0xb79ad0,
      ki: .2,
      fi: .08,
      exp: 1.2,
      lamp: 2.2,
      cap: 1.6,
      led: 2.2,
      ledL: .9,
      fairy: 1.6,
      fairyL: .6,
      neon: 1.25,
      neonL: .45,
      mon: .7,
      sun: 0
    }
  };
  const NUMK = Object.keys(TIMES.day).filter(k => !['hs', 'hg', 'kc'].includes(k));
  const env = Object.assign({}, TIMES.day);
  let isDay = store.get('day', true);

  function applyTime(instant) {
    const T = isDay ? TIMES.day : TIMES.night;
    document.documentElement.dataset.time = isDay ? 'day' : 'night';
    const b = $('#time-btn');
    b.textContent = isDay ? '☀' : '☾';
    b.setAttribute('aria-label', isDay ? 'Switch to night' : 'Switch to day');
    b.title = isDay ? 'Daytime' : 'Night';
    skyPlane.material.map = isDay ? skyDay : skyNight;
    skyPlane.material.needsUpdate = true;
    const f = {
        hs: hemi.color.clone(),
        hg: hemi.groundColor.clone(),
        kc: key.color.clone()
      },
      f0 = Object.assign({}, env);
    const ths = col(T.hs),
      thg = col(T.hg),
      tkc = col(T.kc);
    tween(instant ? .001 : .9, e => {
      NUMK.forEach(k => {
        env[k] = f0[k] + (T[k] - f0[k]) * e;
      });
      hemi.color.copy(f.hs).lerp(ths, e);
      hemi.groundColor.copy(f.hg).lerp(thg, e);
      key.color.copy(f.kc).lerp(tkc, e);
      hemi.intensity = env.hi;
      key.intensity = env.ki;
      fill.intensity = env.fi;
      renderer.toneMappingExposure = env.exp;
      if (lampOn) {
        lampLight.intensity = env.lamp;
        lampCap.material.emissiveIntensity = env.cap;
      }
      ledMat.emissiveIntensity = env.led;
      ledA.intensity = ledB.intensity = env.ledL;
      fairyLight.intensity = env.fairyL;
      neonMat.color.setScalar(env.neon);
      neonLight.intensity = env.neonL;
      monGlow.intensity = env.mon;
      sun.intensity = env.sun;
    });
  }
  $('#time-btn').addEventListener('click', () => {
    isDay = !isDay;
    store.set('day', isDay);
    applyTime(false);
    sfx.chime();
  });

  const decor = [desk, hutch, chair, cab, bed, ns, plant, bin, otto, rug, win].map(g => ({
    g,
    base: g.scale.clone(),
    pop: 1
  }));

  function popIn() {
    if (reduced) return;
    const order = [...decor, ...interactives];
    order.forEach(x => x.pop = .0001);
    order.forEach((x, i) => setTimeout(() => tween(.6, e => {
      x.pop = Math.max(.0001, e);
    }, ease.back), 300 + i * 50));
  }

  /* ============ moving between the website and the room ============ */
  const SCREEN_W = .96,
    SCREEN_H = .6;
  let chairSw = 0,
    welcomeOpen = false;
  const screenCenter = () => screenMesh.getWorldPosition(new V3());

  function screenPose() {
    const c = screenCenter(),
      th = tanH();
    const dist = Math.max((SCREEN_H / 2) / (th * .9), (SCREEN_W / 2) / (th * camera.aspect * .9));
    return {
      pos: new V3(c.x, c.y, c.z + dist),
      look: c
    };
  }

  function screenRect() {
    camera.updateMatrixWorld();
    const c = screenCenter(),
      hw = SCREEN_W / 2,
      hh = SCREEN_H / 2;
    const pts = [
      [-hw, -hh],
      [hw, -hh],
      [hw, hh],
      [-hw, hh]
    ].map(([x, y]) => new V3(c.x + x, c.y + y, c.z).project(camera));
    const xs = pts.map(p => (p.x + 1) / 2 * window.innerWidth),
      ys = pts.map(p => (1 - p.y) / 2 * window.innerHeight);
    const l = Math.min(...xs),
      t = Math.min(...ys);
    return {
      l,
      t,
      w: Math.max(...xs) - l,
      h: Math.max(...ys) - t
    };
  }

  function resetOrbit() {
    Object.assign(want, {
      theta: HOME.theta,
      phi: HOME.phi,
      radius: HOME.radius
    });
    want.target.copy(HOME.target);
    Object.assign(orbit, {
      theta: HOME.theta,
      phi: HOME.phi,
      radius: HOME.radius
    });
    orbit.target.copy(HOME.target);
  }
  // paint what's on screen right now onto the 3D monitor, so shrinking the page into it is seamless
  async function snapshotSite() {
    if (!window.html2canvas) return;
    const W = window.innerWidth,
      Hh = window.innerHeight,
      cw = 1024,
      ch = Math.round(cw * SCREEN_H / SCREEN_W);
    try {
      const shot = await Promise.race([
        window.html2canvas(siteInner, {
          backgroundColor: '#fbf4ec',
          scale: cw / W,
          logging: false,
          width: W,
          height: Hh,
          windowWidth: W,
          windowHeight: Hh
        }),
        new Promise(r => setTimeout(() => r(null), 1800))
      ]);
      if (!shot) return;
      const c = document.createElement('canvas');
      c.width = cw;
      c.height = ch;
      const g = c.getContext('2d');
      g.fillStyle = '#fbf4ec';
      g.fillRect(0, 0, cw, ch);
      g.drawImage(shot, 0, 0, cw, Hh * cw / W);
      try {
        g.getImageData(0, 0, 1, 1);
      } catch (e) {
        return;
      }
      monTex.image = c;
      monTex.needsUpdate = true;
    } catch (e) {}
  }
  async function exitSite() {
    if (threeFailed) {
      toast('The 3D room could not load here. Try refreshing the page.');
      return;
    }
    if (!ready) {
      toast('Setting up my room… one second');
      pendingRoom = true;
      return;
    }
    if (mode !== 'site' || busy) return;
    busy = true;
    ac();
    closeProject();
    await snapshotSite();
    mode = 'tween';
    sfx.whoosh();
    const p = screenPose();
    camera.position.copy(p.pos);
    camLook.copy(p.look);
    camera.lookAt(camLook);
    const r = screenRect(),
      W = window.innerWidth,
      Hh = window.innerHeight;
    site.classList.add('framed');
    tween(reduced ? .2 : .65, e => setBox(lerp(0, r.l, e), lerp(0, r.t, e), lerp(W, r.w, e), lerp(Hh, r.h, e), e * r.h * .05, 1), ease.io, () => {
      resetOrbit();
      tween(.8, e => {
        chairSw = 1 - e;
      }, ease.io);
      flyTo(orbitPos(orbit), orbit.target.clone(), reduced ? .3 : 2.1, () => {
        site.hidden = true;
        fullBox();
        mode = 'free';
        busy = false;
        appEl.dataset.view = 'room';
        showWelcome();
      }, .25, (e, prog) => {
        const rr = screenRect(),
          op = Math.max(0, 1 - prog / .32);
        setBox(rr.l, rr.t, rr.w, rr.h, rr.h * .05, op);
        if (op <= 0) site.style.visibility = 'hidden';
      });
    });
  }

  function enterSite() {
    if (mode === 'site' || busy || !ready) return;
    busy = true;
    if (musicOn) toggleRecord(false);
    if (panelOpen) hidePanel(true);
    hideWelcome();
    focus = null;
    appEl.dataset.view = 'site';
    setHover(null);
    markVisited('monitor');
    ac();
    sfx.whoosh();
    tween(.8, e => {
      chairSw = e;
    }, ease.io);
    const p = screenPose();
    flyTo(p.pos, p.look, reduced ? .3 : 1.6, () => {
      const r = screenRect(),
        W = window.innerWidth,
        Hh = window.innerHeight;
      site.hidden = false;
      site.classList.add('framed');
      setBox(r.l, r.t, r.w, r.h, r.h * .05, 0);
      tween(.28, e => setBox(r.l, r.t, r.w, r.h, r.h * .05, e), ease.out, () => {
        tween(reduced ? .2 : .65, e => setBox(lerp(r.l, 0, e), lerp(r.t, 0, e), lerp(r.w, W, e), lerp(r.h, Hh, e), (1 - e) * r.h * .05, 1), ease.io, () => {
          fullBox();
          mode = 'site';
          busy = false;
        });
      });
    }, .12);
  }
  const welcome = $('#welcome');
  if (isTouch) {
    $('#w-l1').textContent = 'Tap the pink dots';
  }

  function showWelcome() {
    welcome.hidden = false;
    welcomeOpen = true;
    requestAnimationFrame(() => requestAnimationFrame(() => welcome.classList.add('on')));
    setTimeout(() => $('#w-go').focus({
      preventScroll: true
    }), 400);
  }

  function hideWelcome() {
    if (!welcomeOpen) return;
    welcomeOpen = false;
    welcome.classList.remove('on');
    setTimeout(() => {
      if (!welcomeOpen) welcome.hidden = true;
    }, 450);
  }
  $('#w-go').addEventListener('click', () => {
    sfx.click();
    hideWelcome();
    hint.classList.remove('gone');
    hintGone = false;
    setTimeout(dismissHint, 12000);
  });
  $('#w-back').addEventListener('click', () => {
    sfx.click();
    enterSite();
  });
  welcome.addEventListener('click', e => {
    if (e.target === welcome) {
      hideWelcome();
    }
  });
  window.addEventListener('resize', () => {
    if (mode === 'site') fullBox();
  });
  setInterval(drawClock, 20000);
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mode !== 'site') {
      if (panelOpen) closePanel();
      else if (welcomeOpen) hideWelcome();
    }
  });

  const hint = $('#hint');
  let hintGone = true;
  if (isTouch) hint.textContent = 'Tap the pink dots to explore · drag to look around';

  function dismissHint() {
    if (hintGone) return;
    hintGone = true;
    hint.classList.add('gone');
  }

  /* ============ loop ============ */
  const tmpC = new THREE.Color();
  let monTick = 0,
    arcTick = 0;

  function frame() {
    const dt = Math.min(clock.getDelta(), .05),
      t = clock.elapsedTime;
    for (let i = tweens.length - 1; i >= 0; i--) {
      const tw = tweens[i];
      if (tw.dead) {
        tweens.splice(i, 1);
        continue;
      }
      tw.t += dt;
      const p = Math.min(1, tw.t / tw.dur);
      tw.fn(tw.e(p), p);
      if (p >= 1) {
        tweens.splice(i, 1);
        tw.done && tw.done();
      }
    }
    mouseS.lerp(mouse, Math.min(1, dt * 4));
    const k = 1 - Math.exp(-dt * 7);
    if (mode === 'free') {
      orbit.theta += (want.theta - orbit.theta) * k;
      orbit.phi += (want.phi - orbit.phi) * k;
      orbit.radius += (want.radius - orbit.radius) * k;
      orbit.target.lerp(want.target, k);
      orbitPos(orbit, camera.position);
      const par = reduced ? 0 : Math.min(1, orbit.radius / HOME.radius);
      camera.position.x += mouseS.x * .25 * par;
      camera.position.y += mouseS.y * .15 * par;
      camLook.copy(orbit.target);
      camera.lookAt(camLook);
    } else if (mode === 'focus' && focus) {
      camera.position.copy(focus.pos);
      if (!reduced) {
        camera.position.x += mouseS.x * .04;
        camera.position.y += mouseS.y * .03;
      }
      camLook.copy(focus.look);
      camera.lookAt(camLook);
    }
    if (mode === 'free') titleEl.classList.toggle('dim', orbit.radius < HOME.radius * .7 || !!panelOpen);

    for (const it of interactives) {
      const target = lastHover === it ? 1.05 : 1;
      it.vel += ((target - it.spring) * 160 - it.vel * 11) * dt;
      it.spring += it.vel * dt;
      const s = it.spring,
        side = 1 + (target - s) * .5;
      it.group.scale.set(it.baseScale.x * side * it.pop, it.baseScale.y * s * it.pop, it.baseScale.z * side * it.pop);
      it.hover += ((lastHover === it ? 1 : 0) - it.hover) * Math.min(1, dt * 10);
      if (it.hover > .001 || it._h) {
        it._h = it.hover > .001;
        for (const m of it.mats) {
          tmpC.copy(HOVER).multiplyScalar(.12 * it.hover / Math.max(.001, m.ei));
          m.m.emissive.copy(m.em).add(tmpC);
        }
      }
    }
    for (const d of decor) d.g.scale.copy(d.base).multiplyScalar(d.pop);

    if (!reduced) {
      vines.forEach(v => v.chain.forEach((sg, i) => {
        sg.rotation.z = Math.sin(t * 1.05 + v.ph + i * .45) * .045;
        sg.rotation.x = Math.sin(t * .7 + v.ph + i * .3) * .03;
      }));
      leaves.rotation.y = Math.sin(t * .45) * .03;
      fairyMats.forEach((m, i) => {
        m.emissiveIntensity = env.fairy * (1 + Math.sin(t * 1.7 + i * 2.1) * .35);
      });
      flames.forEach((f, i) => f.scale.set(1, .85 + Math.sin(t * 13 + i * 2) * .15 + Math.sin(t * 7.3 + i) * .08, 1));
    } else fairyMats.forEach(m => {
      m.emissiveIntensity = env.fairy;
    });
    monLed.material.emissiveIntensity = 1.4 + Math.sin(t * 2) * .8;
    updateDog(t, dt);
    updateRGB(t, dt);
    handset.position.y = .33 + phoneUp * .32;
    handset.rotation.z = phoneUp * .35 + (phoneUp > .05 ? Math.sin(t * 28) * .04 * phoneUp : 0);
    if (noteT > 0) {
      noteT = Math.max(0, noteT - dt);
      notes.forEach((n, i) => n.rotation.z = n.userData.r0 + Math.sin(t * 14 + i) * .22 * noteT);
    }
    const ci = byId.certificate;
    if (ci.swing) {
      ci.swing = Math.max(0, ci.swing - dt * .7);
      cert.rotation.x = Math.sin(t * 9) * .05 * ci.swing;
    }
    chair.position.z = -1.42 + chairSw * .45;
    chair.position.x = .35 + chairSw * .5;
    chair.rotation.y = Math.PI + chairSw * .8;
    vinylSpin += ((musicOn ? 3.4 : 0) - vinylSpin) * Math.min(1, dt * 2);
    vinyl.rotation.y -= vinylSpin * dt;
    armPivot.rotation.y += ((musicOn ? 0 : .6) - armPivot.rotation.y) * Math.min(1, dt * 3);
    if (musicOn && (noteAcc += dt) > .9) {
      noteAcc = 0;
      const wp = record.getWorldPosition(new V3());
      spawn(Math.random() < .5 ? noteTex : noteTex2, wp.add(new V3(.1, .4, .05)), {
        size: .13,
        dur: 2.2,
        vel: new V3(-.08, .38, .08),
        wob: .45
      });
    }
    if (mode === 'site' && previewVisible && ready) renderPreview(t);
    placePins();
    for (let i = fx.length - 1; i >= 0; i--) {
      const f = fx[i];
      f.life += dt;
      const p = f.life / f.dur;
      f.s.position.addScaledVector(f.vel, dt);
      if (f.wob) f.s.position.x += Math.sin(f.life * 6 + f.ph) * f.wob * dt;
      f.s.material.opacity = p < .2 ? p / .2 : 1 - (p - .2) / .8;
      if (f.grow) f.s.scale.addScalar(f.grow * dt);
      if (p >= 1) {
        scene.remove(f.s);
        f.s.material.dispose();
        fx.splice(i, 1);
      }
    }
    if (mode !== 'site') renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  // live preview of the room, drawn into the card on the website
  const previewCam = new THREE.PerspectiveCamera(28, 16 / 9, .1, 100);
  const pvSize = new THREE.Vector2();
  let previewLive = false;

  function renderPreview(t) {
    const pc2 = previewCanvas,
      r = pc2.getBoundingClientRect();
    if (r.width < 20 || r.height < 20) return;
    renderer.getSize(pvSize);
    const pw = Math.min(Math.round(r.width), pvSize.x),
      ph = Math.min(Math.round(r.height), pvSize.y),
      dpr = renderer.getPixelRatio();
    const cw = Math.round(pw * dpr),
      ch = Math.round(ph * dpr);
    if (pc2.width !== cw || pc2.height !== ch) {
      pc2.width = cw;
      pc2.height = ch;
    }
    previewCam.aspect = pw / ph;
    previewCam.fov = previewCam.aspect < 1.2 ? 40 : 28;
    previewCam.updateProjectionMatrix();
    const th = .78 + (reduced ? 0 : Math.sin(t * .22) * .38),
      R = previewCam.aspect < 1.2 ? 16 : 14.5,
      tgt = new V3(.1, 1.25, .05);
    previewCam.position.set(tgt.x + R * Math.sin(1.05) * Math.sin(th), tgt.y + R * Math.cos(1.05), tgt.z + R * Math.sin(1.05) * Math.cos(th));
    previewCam.lookAt(tgt);
    renderer.setScissorTest(true);
    renderer.setViewport(0, 0, pw, ph);
    renderer.setScissor(0, 0, pw, ph);
    renderer.render(scene, previewCam);
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, pvSize.x, pvSize.y);
    const g = pc2.getContext('2d');
    g.clearRect(0, 0, cw, ch);
    const src = renderer.domElement;
    g.drawImage(src, 0, src.height - ch, cw, ch, 0, 0, cw, ch);
    if (!previewLive) {
      previewLive = true;
      previewCanvas.parentElement.classList.add('live');
    }
  }

  function init() {
    drawMonitor();
    applyTime(true);
    resetOrbit();
    const p = screenPose();
    camera.position.copy(p.pos);
    camLook.copy(p.look);
    camera.lookAt(camLook);
    chairSw = 1;
    mode = 'site';
    appEl.dataset.view = 'site';
    try {
      renderer.compile(scene, camera);
      renderer.render(scene, camera);
    } catch (e) {}
    const h2c = document.createElement('script');
    h2c.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    h2c.async = true;
    document.head.appendChild(h2c);
    ready = true;
    requestAnimationFrame(frame);
    if (pendingRoom) setTimeout(exitSite, 200);
  }
  init();
})();
