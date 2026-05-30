import { hero, lakes, canoeing, cabins, community, travel } from './images.js'

// Each guide route renders fully into static HTML. Sections are real prose
// (600+ words per page) — no placeholders, no lorem ipsum.
export const GUIDES = {
  'lake-travel-guides': {
    slug: 'lake-travel-guides',
    title: 'Lake Travel Guides',
    eyebrow: 'Plan the trip',
    image: travel.travelTrailMap,
    alt: 'A trail map and planning notes for a lake travel route',
    lead: 'Everything we have learned about planning relaxed, well-paced lake trips — from choosing a destination to packing the car to knowing when to simply stay home and let the wind blow itself out.',
    intro: [
      'A great lake trip is mostly decided before you ever leave the driveway. The paddlers who consistently come home glowing are not the strongest or the most daring — they are the ones who matched the day to their abilities, checked the forecast honestly, and built in plenty of margin for rest. These guides gather the planning habits that turn a hopeful outing into a reliably good one.',
      'We write for adults over fifty who want adventure without anxiety. That means we favor calm water over whitewater, scenery over speed, and unhurried half-days over exhausting expeditions. Wherever you paddle, the principles below will help you arrive prepared and leave with the kind of memory you want to repeat.',
    ],
    sections: [
      {
        heading: 'Choosing a destination that fits the day',
        body: [
          'Start with an honest look at the conditions and your own energy, then choose a lake to match. A sheltered bay ringed with trees stays calm long after open water turns choppy, which makes it the safest choice for a breezy forecast or a tentative first outing. Look for a destination with an easy launch, nearby parking, clean facilities, and a shoreline you can follow without ever crossing wide open water.',
          'State parks and well-known recreation areas are wonderful for beginners because they offer marked routes, rangers who know the conditions, and predictable amenities. As your confidence grows, you can branch out to quieter lakes, but the rule never changes: pick the destination that fits the day you actually have, not the day you wish you had.',
        ],
      },
      {
        heading: 'Reading the forecast like a paddler',
        body: [
          'Wind, not rain, is the number one factor in whether a paddle stays pleasant. Before any trip, check the wind speed and direction for your launch window and the hours after it. A light breeze under ten miles per hour is generally comfortable on a sheltered lake; sustained winds above fifteen will push a canoe around and tire you quickly. Pay attention to afternoon thunderstorm risk in summer, and remember that mornings are almost always calmer than afternoons.',
          'Build a personal "stay home" rule and honor it without debate: whitecaps, lightning in the forecast, or a body that simply feels off are all complete sentences. The lake will be there next week, and the discipline to skip a bad day is exactly what lets people keep paddling for decades.',
        ],
      },
      {
        heading: 'Timing, tides of light, and pace',
        body: [
          'The most beautiful and the safest hours on a lake are usually the same: early morning and the soft window before sunset, when the water lies flat and the light turns gold. Plan to launch early, keep your route within sight of shore, and turn back while you still have energy in reserve. A relaxed cruising pace of two to three miles per hour means a gentle half-day with rest stops covers plenty of ground.',
          'Above all, resist the urge to schedule a lake trip the way you once scheduled a workday. The whole point is unhurried time. Leave room to drift, to drink your coffee mid-paddle, to watch a heron work the shallows. The trip you remember is rarely the one where you covered the most miles.',
        ],
      },
    ],
  },

  'canoe-beginner-tips': {
    slug: 'canoe-beginner-tips',
    title: 'Canoe Beginner Tips',
    eyebrow: 'Start with confidence',
    image: canoeing.canoePaddle,
    alt: 'A paddle drawing cleanly through calm lake water',
    lead: 'A clear, friendly starting point for anyone picking up a paddle later in life — how to get in and out of the boat, the handful of strokes that matter, and the gentle habits that build real confidence.',
    intro: [
      'Canoeing is one of the most beginner-friendly outdoor activities there is, especially on calm water. The learning curve is short, the equipment is simple, and the pace is entirely yours to set. If you can walk to a dock and lower yourself into a seat, you can learn to paddle a canoe — and most people are surprised how quickly it starts to feel natural.',
      'These tips assume nothing. We will walk through getting into the boat safely, the four strokes that handle almost every situation, and the small, repeatable habits that turn a nervous first outing into a relaxed lifelong hobby.',
    ],
    sections: [
      {
        heading: 'Getting in and out without the wobble',
        body: [
          'Most beginner nerves come from entering and exiting the canoe, where the boat feels least stable. The trick is to keep your weight low and centered. Hold both gunwales (the top edges) with your hands, step into the very center of the boat rather than the seat, stay in a low crouch, and settle slowly. Three points of contact at all times keeps everything steady. A companion steadying the boat from the dock makes the whole process effortless.',
          'When you reach shore, reverse the process just as deliberately: hands on the gunwales, weight low and centered, one careful movement at a time. Never stand up in a canoe and never rush these moments. Calm, slow transitions are the single biggest difference between paddlers who feel secure and those who feel anxious.',
        ],
      },
      {
        heading: 'The four strokes that do almost everything',
        body: [
          'You need surprisingly few strokes to go anywhere on a calm lake. The forward stroke moves you ahead: plant the blade near your toes and pull it straight back to your hip, using a gentle rotation of your torso so your shoulders stay happy. The sweep stroke turns the boat with a wide arc out to the side. The draw stroke pulls the boat sideways toward your paddle, which is perfect for nudging up to a dock. And a soft reverse stroke slows you down or backs you up.',
          'Practice each one in a sheltered bay until it stops feeling like a maneuver and starts feeling like a habit. Good paddling is quiet and unhurried — long, soft strokes rather than splashy, effortful ones. If two of you are paddling together, you can steer beautifully with nothing more than these four, each person adjusting on their own side.',
        ],
      },
      {
        heading: 'Habits that build lasting confidence',
        body: [
          'Confidence on the water is not courage; it is repetition. Keep your first outings short — forty-five minutes to an hour along a familiar shoreline — and add time only as the boat starts to feel boring in the best possible way. Always wear your life jacket, always paddle with a companion at first, and always choose calm conditions while you are learning. Each easy, successful outing deposits a little trust in the bank.',
          'Be patient and kind with yourself. Everyone catches a crab (an awkward stroke that splashes), everyone drifts off course at first, and everyone improves faster than they expect. Within a handful of trips, the mechanics fade into the background and you are left with the part that matters: the water, the light, and the simple pleasure of moving quietly across a lake.',
        ],
      },
    ],
  },

  'scenic-waterways': {
    slug: 'scenic-waterways',
    title: 'Scenic Waterways',
    eyebrow: 'Where to wander',
    image: lakes.lakePines,
    alt: 'A scenic waterway lined with pines and still reflections',
    lead: 'A celebration of the calm, photogenic waterways that reward slow paddlers — sheltered bays, lily-lined channels, and quiet shorelines where the only traffic is a passing loon.',
    intro: [
      'Not every beautiful paddle requires a remote wilderness trip. Some of the most rewarding scenic waterways are gentle, accessible, and close to home — protected bays, slow winding channels, and quiet lake arms where the water stays glassy and the wildlife grows comfortable with a still canoe drifting by.',
      'This guide is about learning to see and seek out those places: what makes a waterway both safe and stunning, how to find them near you, and how to paddle them in a way that deepens the experience rather than rushing past it.',
    ],
    sections: [
      {
        heading: 'What makes a waterway both calm and beautiful',
        body: [
          'The most paddler-friendly scenic waterways share a few features. They are sheltered from prevailing wind by trees or terrain, so the surface stays calm and reflective. They have interesting, varied shorelines — a mix of forest, marsh, rock, and the occasional dock — that gives the eye something to follow. And they hold abundant, approachable wildlife, because calm, quiet water is exactly where herons fish, turtles sun, and loons raise their young.',
          'Channels and narrow lake arms are especially magical. The close shorelines block the wind, the water often mirrors the trees perfectly, and the sense of intimacy makes even a short paddle feel like a journey. These are the stretches where time slows down and a camera becomes hard to put away.',
        ],
      },
      {
        heading: 'Finding scenic water near you',
        body: [
          'Start with state and county park maps, which often mark canoe routes, launches, and points of interest. Satellite map views are surprisingly useful for spotting sheltered bays, marshy inlets, and quiet channels before you ever drive out. Local outfitters and park rangers are gold mines of knowledge about where the eagles nest, where the lilies bloom, and which arm of the lake stays calmest in an afternoon breeze.',
          'Keep a simple log of the places you love and the conditions that made them shine. Over a season or two you will build a personal map of go-to waterways for different moods and forecasts — a calm-morning favorite, a windy-day refuge, a peak-color autumn route. That growing collection of known, trusted places is one of the quiet joys of paddling the same region for years.',
        ],
      },
      {
        heading: 'Paddling scenery, not racing past it',
        body: [
          'A scenic waterway asks to be savored. Let the boat glide between strokes so your wake stays small and silent. Pause often, drift with the current, and let your eyes adjust to the slower rhythm of the natural world. The reward for stillness is access: animals relax, details emerge, and the reflections settle into perfect mirrors.',
          'Bring binoculars, a camera or phone, and a thermos, and treat the outing as an unhurried visit rather than a route to complete. The goal is not to say you paddled the whole channel — it is to belong to it for a couple of hours, to let a beautiful stretch of water become a place your heart returns to long after you have driven home.',
        ],
      },
    ],
  },

  'outdoor-retirement-life': {
    slug: 'outdoor-retirement-life',
    title: 'Outdoor Retirement Life',
    eyebrow: 'A life by the water',
    image: community.communitySeniors,
    alt: 'Older adults enjoying a relaxed day outdoors by the lake',
    lead: 'How to build a fuller, healthier, more connected retirement around the outdoors — with canoeing as the gentle, joyful centerpiece of an unhurried life.',
    intro: [
      'Retirement hands you something rare and precious: time that is genuinely your own. How you fill it shapes not only your days but your health, your mood, and your sense of purpose. For a growing number of our readers, the answer has been to build that life around the outdoors — and specifically around the calm, accessible joy of canoeing.',
      'This guide is less about technique and more about a way of living: the real benefits of regular outdoor time after retirement, how to make it a dependable rhythm rather than an occasional treat, and how to weave other people into it so the years ahead are rich with both nature and friendship.',
    ],
    sections: [
      {
        heading: 'What the outdoors gives back',
        body: [
          'Gentle, regular outdoor activity is one of the best investments you can make in later life. Paddling supports heart health, joint mobility, and core strength without the impact of running or heavy lifting. Time in natural settings lowers stress, eases anxiety, and improves sleep, while sunlight supports mood and healthy vitamin D levels. None of this requires intensity — it requires consistency, and consistency is exactly what a flexible retirement schedule makes possible.',
          'Just as important is the sense of purpose that comes from having a reason to get up, get out, and go somewhere. Days without structure can quietly blur together; a standing paddle date, a route to explore, or a wildlife season to follow gives shape and anticipation to the week. The outdoors does not just fill time — it gives that time meaning.',
        ],
      },
      {
        heading: 'Turning it into a rhythm, not a one-off',
        body: [
          'The benefits of outdoor life come from repetition, so the goal is to make stepping outside almost automatic. Lower the bar until it is hard to skip: a twenty-minute paddle counts, a walk to the dock with coffee counts, an hour on a bench watching the mist lift counts. Anchor the habit to something you already do and the same familiar stretch of water, so showing up requires almost no decision at all.',
          'Give yourself permission to do less on hard days and more on good ones. Some mornings you will paddle for an hour and feel a decade younger; others you will simply sit by the water, and that is a complete and worthy outing too. A peaceful outdoor routine is not a fitness program you can fail — it is a standing invitation to step outside and breathe.',
        ],
      },
      {
        heading: 'Weaving people into the years ahead',
        body: [
          'Loneliness is one of the quiet health risks of later life, and shared outdoor time is a gentle, powerful antidote. Paddling side by side asks nothing of you socially — you are simply pointed at the same horizon at the same easy pace — yet it builds the kind of steady companionship that sustains people for decades. A small group with a standing morning and a low bar to entry often becomes the highlight of everyone\'s week.',
          'You can start one with almost nothing: a calm lake, a regular time, and a single invitation. These groups end up looking after one another far beyond the water, with rides, meals, and check-in calls. The boats and the scenery are wonderful, but it is the friendship — unhurried, reliable, built one morning at a time — that turns an outdoor retirement into a genuinely good life.',
        ],
      },
    ],
  },

  'camping-and-cabins': {
    slug: 'camping-and-cabins',
    title: 'Camping & Cabins',
    eyebrow: 'Where to stay',
    image: cabins.cabinLakeside,
    alt: 'A welcoming lakeside cabin framed by pine trees',
    lead: 'How to turn a day on the water into a restful overnight escape — choosing comfortable lakeside cabins, easing into gentle camping, and shaping a few unhurried days around the lake.',
    intro: [
      'Staying overnight by the water transforms canoeing from an outing into an immersion. Instead of driving to a launch and racing the daylight, you wake where the lake already waits, paddle in the calm of early morning, and let the warm hours unfold on a dock or beside a fire. Whether you prefer the comfort of a cabin or the simple pleasure of a well-run campground, this guide helps you do it with ease.',
      'We lean toward comfort and gentleness here, because the goal is rest, not roughing it. A lakeside base camp should make slow mornings easy and remove the friction between you and the water.',
    ],
    sections: [
      {
        heading: 'Choosing a cabin that loves the lake',
        body: [
          'When booking a cabin, prioritize the shoreline above almost everything else. A gentle, private put-in you can launch from directly, a dock in good repair, and a location sheltered from prevailing wind mean your home bay stays calm and a paddle is never more than a few steps away. Check for shallow, swimmable water if you are bringing grandchildren, and easy ground-level access if stairs are a concern.',
          'Inside, simple is better than fancy. A well-equipped kitchen so cooking never becomes a chore, comfortable beds, a screened porch for buggy evenings, and a fire pit for the nights are the features people actually use. The cabin is a base camp for the lake, not the destination itself — choose the one that puts you closest to the water with the least fuss.',
        ],
      },
      {
        heading: 'Gentle camping for those who want it',
        body: [
          'Camping does not have to mean hardship. Many state parks and private campgrounds offer drive-up sites with level ground, clean restrooms, potable water, and a lake launch a short walk away — all the romance of sleeping outdoors with none of the strain. A quality sleeping pad, a warm bag rated below the expected low, and a simple shade canopy turn a campsite into a comfortable home for a few nights.',
          'Ease into it. Try a single night close to home before committing to a longer trip, keep your gear list short and your meals simple, and choose a campground with the amenities that matter to you. For many older adults, gentle car camping by a quiet lake hits a perfect balance — closer to nature than a cabin, far kinder than backcountry travel.',
        ],
      },
      {
        heading: 'Shaping a few unhurried days',
        body: [
          'A multi-day lake stay settles into a lovely natural rhythm. Arrive with an easy evening paddle to learn the bay. Spend your full days in the pattern that suits you — water in the cool mornings, shade and rest in the warm afternoons, fire and stars at night. Save a final slow morning for one last drift before the drive home. Resist the urge to over-schedule; the whole point of a lakeside escape is to do less, more deeply.',
          'If friends or family who do not paddle are joining, build in plenty for them too: swimming, dock-sitting, board games on the porch, and easy shore walks. The memories people carry home are rarely a single big outing — they are the sound of water against the dock at night, coffee on the porch at dawn, and the unhurried hours in between.',
        ],
      },
    ],
  },

  'senior-adventure-stories': {
    slug: 'senior-adventure-stories',
    title: 'Senior Adventure Stories',
    eyebrow: 'Real readers, real water',
    image: hero.heroPaddleCalm,
    alt: 'A peaceful moment paddling across a calm lake at golden hour',
    lead: 'True stories from readers who found adventure, healing, and friendship on the water in their later years — the heart of why this blog exists.',
    intro: [
      'Behind every guide we publish are the people who live it. These are real stories, shared by readers and lightly edited with their permission, about what canoeing and lake life have meant in the second half of their lives. They are the reason Golden Years Canoeing exists, and they are, by far, our most-loved writing.',
      'If a story here moves you, know that yours is welcome too. Many of these began as a single email with a few photographs and a paragraph about a memorable morning. Write to us, and you may see your own adventure here one day.',
    ],
    sections: [
      {
        heading: 'Margaret and the Saturday that changed everything',
        body: [
          'Margaret retired at sixty-three convinced the adventurous part of her life was behind her. A friend dragged her to a calm bay near Brainerd one Saturday morning, handed her a paddle, and told her to just try fifty yards. "I cried a little when we got back to the dock," she wrote, "not from fear but from joy — I had forgotten I was allowed to feel this alive." She and her husband have paddled nearly every Saturday since. It has become, in her words, the spine of their week, the thing the rest of life arranges itself around.',
          'Her story is the one we hear most often in different forms: someone who assumed the door had closed, who stepped through it anyway, and who discovered that calm water has no opinion about a person\'s age. It only asks that you arrive unhurried and willing.',
        ],
      },
      {
        heading: 'Frank, a quiet lake, and a goodbye',
        body: [
          'Frank wrote to us about scattering his late wife\'s ashes on a small, quiet lake the two of them had loved for forty years. He paddled out alone at dawn, to the bay where they had watched countless sunrises, and let the water carry her into the place that had held so much of their life together. "I thought it would break me," he told us. "Instead it felt like the lake was holding both of us one more time."',
          'He still paddles that lake. He says it is not sad anymore — it is sacred. We share his story, with his blessing, because it captures something the brochures never mention: that a beloved waterway can become a chapel, a memory, and a companion through grief. The lake keeps her close in a way nothing else does.',
        ],
      },
      {
        heading: 'Lorraine\'s little fleet of six',
        body: [
          'At seventy-four, Lorraine leads a loose group of six neighbors she calls "the fleet." It started with two of them and a borrowed canoe; now it is a standing Saturday ritual with coffee, shared route-planning from our scenic waterway guides, and a phone tree that springs into action whenever one of them has a hard week. "We came for the lake," she wrote, "and we stayed for each other."',
          'The fleet has paddled through knee replacements, a cancer scare, the loss of a spouse, and more birthdays than they will admit. The boats give them somewhere to go; the friendship gives them a reason to keep going. That, more than any single beautiful morning, is the adventure we most want to help our readers find.',
        ],
      },
    ],
  },
}

export const GUIDE_LIST = Object.values(GUIDES)
