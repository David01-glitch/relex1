import { blog as blogImages } from './images.js'

// 12 original article previews. `body` paragraphs already render into the HTML
// source and are revealed inline with a CSS accordion (no navigation, no modals).
export const ARTICLES = [
  {
    id: 'first-paddle-after-sixty',
    title: 'Your First Paddle After Sixty: A Gentle Beginning',
    category: 'Beginner Tips',
    author: 'Eleanor Whitfield',
    readingTime: '6 min read',
    image: blogImages[0],
    alt: 'A calm lake at sunrise with a single canoe near the shore',
    excerpt:
      'There is no wrong age to dip a paddle into still water for the first time. Here is how to make your first outing calm, safe, and quietly unforgettable.',
    body: [
      'The hardest part of canoeing is rarely the paddling — it is the moment before, when a small voice asks whether you are too old, too out of practice, or too unsure to begin. We have heard that voice from thousands of readers, and we can tell you plainly: a calm lake on a fair morning does not care how old you are. It only asks that you arrive unhurried and willing to learn.',
      'Begin by choosing your conditions rather than testing them. Pick a sheltered bay on a windless morning, a stable rental canoe with a wide flat bottom, and a companion who will keep the pace conversational. Sit low, keep three points of contact as you settle in, and let the boat tell you how it likes to balance. Your first goal is simply to glide fifty yards along the shoreline and back — nothing more.',
      'When you return to the dock, you will likely feel two things at once: relief that it was easier than you feared, and a small, surprising hunger to go a little farther next time. That is exactly how a lifelong habit begins. Keep your outings short for the first few weeks, celebrate every small milestone, and let the lake become familiar. Confidence on the water is not bravery — it is repetition, and repetition is something every one of us can afford.',
    ],
  },
  {
    id: 'best-canoes-older-adults',
    title: 'Best Canoes for Older Adults: Stability Over Speed',
    category: 'Gear',
    author: 'Thomas Reardon',
    readingTime: '8 min read',
    image: blogImages[1],
    alt: 'A wide recreational canoe resting on calm water',
    excerpt:
      'Forget racing hulls and featherweight thrill boats. The right canoe for your golden years is the one that feels boring in the best possible way.',
    body: [
      'When manufacturers market canoes, they love to talk about speed, tracking, and lightweight materials. For a paddler in their later years, the single most important quality is something far less glamorous: initial stability — how steady the boat feels the instant you sit in it. A wide, flat-bottomed recreational canoe between fourteen and sixteen feet long, with a beam of at least thirty-five inches, will feel reassuringly planted, and that feeling is what keeps the experience joyful rather than nervous.',
      'Material matters too, but mostly for how you handle the boat on land. Lightweight composite hulls are a pleasure to lift onto a roof rack, yet they cost more and dent easily. A tough polyethylene or three-layer plastic hull is heavier but forgiving, affordable, and happy to bump a dock or a rock without complaint. If lifting is a concern, consider a boat you can keep at a cabin or store on a simple cart rather than one you carry far.',
      'Before buying anything, rent two or three different models across a season. Notice which one lets you relax your shoulders, which one you stop thinking about after five minutes, and which one your paddling partner finds easy to enter and exit. The best canoe for older adults is not the fastest or the lightest — it is the one that disappears beneath you so completely that all you notice is the water and the morning light.',
    ],
  },
  {
    id: 'relaxing-minnesota-lakes',
    title: 'Relaxing Lake Destinations in Minnesota for Quiet Paddlers',
    category: 'Destinations',
    author: 'Eleanor Whitfield',
    readingTime: '9 min read',
    image: blogImages[2],
    alt: 'A forested Minnesota lake shoreline reflected in still water',
    excerpt:
      'Minnesota has more than ten thousand reasons to launch a canoe. These calm, accessible lakes reward unhurried paddlers with stillness and birdsong.',
    body: [
      'Minnesota is famous for the rugged grandeur of the Boundary Waters, but the quiet truth is that some of the most restful paddling in the state happens on smaller, gentler lakes within an easy drive of the Twin Cities. These are waters where the loudest sound is a loon calling across the bay and the biggest decision is whether to drift a little longer before turning home.',
      'We look for three things in a relaxing destination: protected shorelines that block the wind, an easy launch with parking and a gentle put-in, and enough natural beauty to make a slow morning feel like an event. Lakes ringed with pine and birch, dotted with the occasional dock and cabin, give you both shelter and scenery. A nearby state park often means clean facilities, marked routes, and a ranger who can tell you where the eagles are nesting this year.',
      'Plan your visit for early morning or the soft hours before sunset, when the water lies flat and the light turns gold. Bring binoculars for the herons and a thermos for the chill. And remember that the goal of a relaxing lake destination is not to conquer it but to belong to it for a few hours — to let a familiar bay become a place your heart returns to long after you have driven home.',
    ],
  },
  {
    id: 'plan-safe-canoe-adventure',
    title: 'How to Plan a Safe Canoe Adventure',
    category: 'Safety',
    author: 'Captain Ruth Salonen',
    readingTime: '7 min read',
    image: blogImages[3],
    alt: 'A cozy cabin beside a calm lake under soft morning light',
    excerpt:
      'A little planning turns an outing into a memory instead of a misadventure. This is the simple, repeatable routine we use before every trip.',
    body: [
      'Safety on the water is not about fear — it is about a handful of small habits that quietly remove most of the things that can go wrong. The first habit is checking the forecast the night before and again in the morning, paying special attention to wind speed and afternoon storms. Calm water can turn choppy quickly, and wind is the single biggest factor in whether a paddle stays pleasant.',
      'Next, tell someone your plan: where you are launching, which direction you intend to paddle, and when you expect to be back. Wear a properly fitted life jacket the entire time, not just when conditions look rough — most water incidents happen suddenly and close to shore. Carry a whistle, a charged phone in a dry bag, water, and a light layer for warmth. Keep your route within sight of the shoreline and turn back while you still have energy in reserve.',
      'Finally, build a personal rule for when to stay home, and honor it without negotiation. Whitecaps on the lake, a thunderstorm in the forecast, or simply a day when your body feels off are all good reasons to enjoy the water from a bench instead of a boat. The paddlers who keep doing this for decades are not the boldest ones — they are the ones who treat caution as part of the pleasure, not a limit on it.',
    ],
  },
  {
    id: 'benefits-outdoor-after-retirement',
    title: 'Benefits of Outdoor Activities After Retirement',
    category: 'Wellbeing',
    author: 'Dr. Helen Marsh',
    readingTime: '6 min read',
    image: blogImages[4],
    alt: 'Friends gathered around an evening campfire near the water',
    excerpt:
      'Time outdoors does quiet, powerful work on an aging body and mind. Here is what canoeing and lake life give back, season after season.',
    body: [
      'Retirement opens a door that working life kept closed: long, unstructured mornings that can be spent however you choose. Spending even a few of those mornings outdoors, on or beside the water, pays dividends that researchers keep confirming. Gentle, rhythmic activity like paddling supports cardiovascular health and joint mobility without the impact of running or heavy lifting, and the core and upper-body engagement helps preserve the strength and balance that matter most as we age.',
      'The mental benefits run just as deep. Natural settings lower stress hormones, ease the low hum of anxiety, and improve sleep — and the focused calm of guiding a boat across still water has a meditative quality that many readers describe as the most peaceful hour of their week. Sunlight supports mood and healthy vitamin D levels, and the simple act of having a reason to get up, get out, and go somewhere gives shape and purpose to days that can otherwise blur together.',
      'Perhaps most important is connection. Outdoor hobbies pull us toward other people — a paddling partner, a small club, a neighbor who wants to try. Loneliness is one of the quiet health risks of later life, and a shared morning on the lake is a gentle, joyful antidote. You do not need to train for anything or prove anything. You only need to show up at the water, and let the rest take care of itself.',
    ],
  },
  {
    id: 'beginner-canoeing-techniques',
    title: 'Beginner Canoeing Techniques That Actually Stick',
    category: 'Beginner Tips',
    author: 'Captain Ruth Salonen',
    readingTime: '8 min read',
    image: blogImages[5],
    alt: 'Close view of a canoe paddle drawing through calm water',
    excerpt:
      'Three or four simple strokes are all you need for a lifetime of happy paddling. Master these and the boat will go wherever you ask.',
    body: [
      'Canoeing looks complicated from the dock and feels simple once you are moving. The forward stroke is your bread and butter: reach forward, plant the blade fully in the water near your toes, and pull it straight back to your hip using your torso, not just your arms. Rotating your trunk does the heavy work and saves your shoulders, which is exactly what you want for long, comfortable outings.',
      'To turn without spinning in circles, learn the sweep stroke — a wide arc from the bow out to the side and back to the stern — and the simple draw stroke, where you plant the blade out to the side and pull the boat toward it. Paired paddlers can steer beautifully with nothing more than these, one person adjusting on each side. When you want to slow down or hold position, a gentle reverse stroke or a stationary brace flattens the blade against the water and steadies everything.',
      'Practice these in a calm bay until they feel automatic, because the goal is to stop thinking about technique entirely. Good paddling is quiet, unhurried, and almost lazy-looking from shore. If you find yourself splashing, gripping hard, or fighting the boat, slow down and let the strokes get longer and softer. The water rewards patience far more than effort.',
    ],
  },
  {
    id: 'packing-essentials-scenic-trips',
    title: 'Packing Essentials for Scenic Lake Trips',
    category: 'Gear',
    author: 'Thomas Reardon',
    readingTime: '5 min read',
    image: blogImages[6],
    alt: 'A wooden dock at morning with gear ready for a paddle',
    excerpt:
      'Pack light, pack smart, and never leave the dock without these. A short, sensible list keeps a calm day from turning complicated.',
    body: [
      'A good packing list for a relaxed lake outing fits in a single small dry bag and a water bottle holder. Start with the non-negotiables: a properly fitted life jacket, a whistle, sun protection in the form of a wide-brim hat, polarized sunglasses, and reef-safe sunscreen, plus plenty of drinking water. Dehydration sneaks up faster on the water than on land because the breeze hides how warm you are.',
      'Next come the comfort and contingency items: a light rain shell, a warm layer even in summer, quick-drying clothes, closed-toe water shoes, a small snack, and a dry bag for your phone, keys, and identification. A compact first-aid kit, a paper map of the lake, and a spare paddle stowed in the boat round out a sensible kit without weighing you down.',
      'Finally, think about what you want to remember rather than just what you need to survive. A pair of binoculars turns a quiet bay into a wildlife show, a small camera or phone captures the morning light, and a thermos of coffee or tea makes a mid-paddle drift feel like a small ceremony. The best-packed canoe carries exactly enough — nothing that worries you, and a few things that delight you.',
    ],
  },
  {
    id: 'cabin-getaway-planning',
    title: 'Cabin Getaway Planning Guide for Lake Lovers',
    category: 'Cabins',
    author: 'Marie Lundquist',
    readingTime: '7 min read',
    image: blogImages[7],
    alt: 'A rustic lakeside cabin surrounded by pine trees',
    excerpt:
      'A lakeside cabin is the perfect base camp for slow mornings on the water. Here is how to choose one and shape an unhurried few days around it.',
    body: [
      'A cabin getaway is canoeing\'s natural companion. Instead of driving to a launch and racing the day, you wake where the water already waits, paddle in the calm of early morning, and spend the warm hours reading on a dock or napping in the shade. When you choose a cabin, prioritize a gentle, private shoreline you can launch from directly, a dock in good repair, and a location sheltered from the prevailing wind so your home bay stays calm.',
      'Think about the rhythm you want before you book. A four-day stay tends to settle into a lovely pattern: arrival and a short evening paddle, two full unhurried days, and a final slow morning before the drive home. Bring or rent a stable canoe, stock simple meals so cooking never becomes a chore, and resist the urge to over-schedule. The whole point of a lake cabin is to do less, more deeply.',
      'If you are traveling with grandchildren or friends who do not paddle, choose a cabin with shallow, swimmable water and easy shore access so everyone has a way to enjoy the lake. Evenings around a fire pit, board games on a screened porch, and the sound of water against the dock at night are the memories people carry home — far more than any single big outing. Plan for ease, and the magic takes care of itself.',
    ],
  },
  {
    id: 'communities-connect-seniors',
    title: 'How Outdoor Communities Connect Seniors',
    category: 'Community',
    author: 'Marie Lundquist',
    readingTime: '6 min read',
    image: blogImages[8],
    alt: 'A small group of older adults enjoying time together by the lake',
    excerpt:
      'The lake gives us something to do; the people give us a reason to keep coming back. How small paddling groups become lasting friendships.',
    body: [
      'One of the quiet surprises of taking up canoeing later in life is how naturally it brings people together. A paddling group does not require small talk or forced socializing — you are all simply pointed at the same horizon, moving at the same gentle pace, sharing the same morning. That side-by-side companionship, free of pressure, is exactly the kind of connection that becomes harder to find after careers end and families scatter.',
      'Small outdoor communities tend to form around a shared launch, a weekly time, and a low bar to entry. Maybe it starts with two neighbors and a borrowed canoe, then a third joins, then someone brings coffee, and before long there is a Saturday-morning ritual that everyone protects. These groups look after one another in ways that reach far beyond the water — a ride to an appointment, a meal after surgery, a check-in call on a hard day.',
      'If you do not have a group yet, you can start one with almost nothing: pick a calm lake, a regular morning, and invite one person. Post a note at a community center or library, or write to us and we may help connect you with readers nearby. The boats and the scenery are wonderful, but it is the steady, unhurried friendship that keeps people paddling well into their eighties and beyond.',
    ],
  },
  {
    id: 'wildlife-photography-lake',
    title: 'Wildlife Photography During Lake Adventures',
    category: 'Photography',
    author: 'Dr. Helen Marsh',
    readingTime: '7 min read',
    image: blogImages[9],
    alt: 'A loon swimming on a quiet northern lake',
    excerpt:
      'A canoe is the quietest wildlife blind ever invented. With patience and a few gentle habits, your camera will fill with herons, loons, and gold.',
    body: [
      'There is no better wildlife hide than a canoe drifting silently along a quiet shoreline at dawn. Animals that would flee a noisy boat or a person on foot will often tolerate a still, slow-moving paddler, which means a calm lake morning can put you within easy view of herons, loons, turtles sunning on logs, eagles overhead, and deer coming down to drink. The key is to become part of the landscape rather than an intruder in it.',
      'Move slowly and let the boat glide between strokes so your wake stays small and silent. Approach at an angle rather than head-on, keep a respectful distance, and never chase an animal for a better frame — a relaxed creature behaving naturally always makes a better photograph than a startled one fleeing. Early morning and the last hour before sunset give you both the best light and the most active wildlife, so plan your outings around those golden windows.',
      'You do not need expensive equipment to begin. A modern phone camera captures sweeping lake scenes beautifully, and an inexpensive pair of binoculars extends your eyes for the shy birds across the bay. If you catch the bug, a lightweight camera with a modest zoom is the natural next step. Above all, let photography deepen your attention rather than distract from it — the goal is to see the lake more fully, and to carry a little of its peace home with you.',
    ],
  },
  {
    id: 'peaceful-outdoor-routine',
    title: 'Building a Peaceful Outdoor Routine',
    category: 'Wellbeing',
    author: 'Dr. Helen Marsh',
    readingTime: '6 min read',
    image: blogImages[10],
    alt: 'Autumn colors reflected in a calm lake at golden hour',
    excerpt:
      'The magic is not in any single trip — it is in the rhythm. How to weave gentle outdoor time into ordinary weeks so it actually lasts.',
    body: [
      'Big adventures are wonderful, but it is the small, repeated ones that quietly reshape a life. A peaceful outdoor routine begins with lowering the bar until it is almost impossible to skip: a twenty-minute paddle, a walk to the dock with coffee, a morning spent simply sitting by the water. When the entry point is easy, you show up on the ordinary days — and the ordinary days are where the benefits accumulate.',
      'Anchor the routine to something you already do. Pair your paddle with your morning coffee, or with a standing Saturday meet-up, or with the same stretch of shoreline you can practically navigate with your eyes closed. Familiarity is not boredom; it is the foundation of a habit. The more automatic the decision becomes, the less you rely on motivation, which is fickle, and the more you rely on rhythm, which is dependable.',
      'Finally, give yourself full permission to do less on the hard days and more on the good ones. Some mornings you will paddle for an hour and feel ten years younger; other mornings you will sit on a bench and watch the mist lift, and that counts every bit as much. A peaceful outdoor routine is not a fitness program with rules to fail — it is a standing invitation to step outside, breathe, and let the water do its slow, reliable work on your spirit.',
    ],
  },
  {
    id: 'autumn-lake-paddling',
    title: 'Autumn on the Water: Cool Air and Golden Shorelines',
    category: 'Destinations',
    author: 'Eleanor Whitfield',
    readingTime: '5 min read',
    image: blogImages[11],
    alt: 'A tent and canoe at a quiet lakeside camp in autumn',
    excerpt:
      'Many paddlers say fall is the finest season of all — fewer crowds, crisp air, and shorelines lit up in red and gold. Here is how to enjoy it safely.',
    body: [
      'When summer fades, a lot of boats get put away too early. That is a quiet shame, because autumn delivers some of the most beautiful paddling of the entire year. The crowds thin, the bugs vanish, the air turns crisp and clear, and the shorelines blaze with color that doubles itself in the still water. For many of our readers, a calm October morning on a glassy lake is the season they look forward to most.',
      'Cooler weather does ask for a little more respect, though. Water temperatures drop faster than air temperatures, so dress for the water in quick-drying layers and bring a warm change of clothes in a dry bag in case you get wet. Daylight grows shorter, so launch earlier and plan a generous margin to be off the water well before dusk. Keep your outings closer to shore as the season advances, and always check the wind before you go.',
      'Reward yourself for the extra care with the season\'s small pleasures: a thermos of something hot, a slow drift beneath a canopy of color, the clean smell of fallen leaves, and the deep quiet of a lake that has the whole bay to itself. Autumn paddling is canoeing at its most contemplative — and for unhurried adventurers, that is precisely the point.',
    ],
  },
]
