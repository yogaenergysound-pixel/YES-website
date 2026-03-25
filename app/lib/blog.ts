export type SectionType =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'pullquote'; text: string }
  | { type: 'hr' }

export interface BlogPost {
  slug: string
  title: string
  category: string
  categoryColor: 'rose' | 'sage' | 'gold'
  readTime: number
  date: string
  excerpt: string
  heroImage?: string
  sections: SectionType[]
}

export const POSTS: BlogPost[] = [
  {
    slug: 'neuroscience-of-sound-baths',
    title: 'Can Frequencies Really Heal? The Neuroscience of Sound Baths',
    category: 'The Science of Healing',
    categoryColor: 'rose',
    readTime: 7,
    date: 'March 2026',
    heroImage: '/blog/neuroscience_blog_hero.jpg',
    excerpt:
      'Your brain is running in Beta right now — high-alert, analytical, always on. Here is what happens when you let sound change that, and why the science behind it is more compelling than you might expect.',
    sections: [
      {
        type: 'p',
        text: 'The concept of "sound healing" often sounds more like ancient mysticism than modern medicine. For those who have never experienced a sound bath, it is easy to dismiss it as ambient music dressed in spiritual language. But when you examine the actual physics of vibration and the neuroscience of brainwave entrainment, a different picture emerges — one grounded in measurable, reproducible physiological change.',
      },
      {
        type: 'h2',
        text: 'The Brain You Walk In With',
      },
      {
        type: 'p',
        text: 'Most of us spend our waking hours in what neuroscientists call Beta wave states — electrical oscillations in the brain cycling between 13 and 30 Hz. Beta is the frequency of active thinking, problem-solving, and alertness. It is necessary, even essential, for navigating a demanding day. But a perpetual Beta state, which is the default for many high-performing professionals in North Dallas and Frisco, is the neurological signature of chronic stress and burnout.',
      },
      {
        type: 'p',
        text: 'The body was never designed to stay in high-alert mode indefinitely. When it does, the downstream effects are well-documented: elevated cortisol, disrupted sleep, suppressed immune function, and the persistent feeling that you are running on empty no matter how many hours you log.',
      },
      {
        type: 'h2',
        text: 'The Physics of Entrainment',
      },
      {
        type: 'p',
        text: 'Sound baths work through a process called sympathetic resonance — or more specifically, neural entrainment. When a practitioner plays a Tibetan singing bowl or a crystal alchemy bowl, the instrument produces a sustained, consistent frequency. Because the human body is composed of approximately 70% water — a near-perfect medium for sound conduction — these vibrations travel through tissue at the cellular level, not just through the ears.',
      },
      {
        type: 'pullquote',
        text: 'The brain does not simply hear the sound. It synchronises with it — a process as involuntary and precise as a clock resetting itself.',
      },
      {
        type: 'p',
        text: 'Research into binaural beats and acoustic entrainment shows that when the brain is exposed to consistent external frequencies, it will gradually synchronise its own electrical activity to match. A sound bath using instruments tuned to frequencies between 4 and 12 Hz creates the acoustic conditions for the brain to shift from Beta into Alpha (8–12 Hz) — the frequency of wakeful relaxation — and eventually into Theta (4–8 Hz), a deeply meditative state associated with emotional processing, creativity, and cellular repair.',
      },
      {
        type: 'h2',
        text: 'What Happens in the Theta State',
      },
      {
        type: 'p',
        text: 'The Theta state is where the most significant physiological shifts occur. In this brainwave range, the body\'s parasympathetic nervous system takes precedence. The "fight-or-flight" response is deactivated. Heart rate and blood pressure lower. The brain begins releasing oxytocin and nitric oxide — chemicals critical for cardiovascular health, emotional bonding, and tissue repair.',
      },
      {
        type: 'p',
        text: 'Theta is also the state associated with hypnagogic imagery: the vivid, dream-like sensations that many sound bath participants describe as a "floating" feeling or heightened visual awareness with closed eyes. This is not hallucination — it is the brain operating in a mode most adults have not accessed since early childhood or the moments just before sleep.',
      },
      {
        type: 'h2',
        text: 'Why Conventional Music Does Not Achieve the Same Result',
      },
      {
        type: 'p',
        text: 'A natural question: can you achieve the same result with a relaxing playlist? The answer, for most people, is no — and the reason is instructive. Conventional music, even calming ambient music, contains complex melodic and harmonic information that keeps the brain\'s analytical functions engaged. The mind tracks melody, anticipates harmonic resolution, and responds emotionally to lyrics or rhythm. These are all Beta wave activities.',
      },
      {
        type: 'p',
        text: 'Sound baths use sustained, non-melodic tones — the overtone-rich resonance of crystal bowls, gongs, and chimes. There is no melody to follow, no rhythm to anticipate. The brain has nothing to analyse. This is precisely what allows the analytical functions to quiet and the deeper wave states to emerge. For the high-performing professionals of North Dallas, this represents a rare and efficient path to the benefits of deep meditation — without years of dedicated practice.',
      },
      {
        type: 'h2',
        text: 'What the Research Shows',
      },
      {
        type: 'p',
        text: 'Peer-reviewed studies on sound meditation have documented significant reductions in tension, anxiety, and depressed mood after a single session. A 2016 study published in the Journal of Evidence-Based Complementary and Alternative Medicine found that participants who attended a sound meditation session reported markedly lower levels of tension-anxiety, depression, anger-hostility, fatigue-inertia, and confusion compared to those who sat quietly in the same space without the sound stimulus.',
      },
      {
        type: 'p',
        text: 'Separate research has shown that Tibetan singing bowl meditation can lower systolic blood pressure and heart rate, with effects comparable to slow-breathing exercises used in clinical relaxation therapy. These are not anecdotal reports — they are measurable physiological outcomes.',
      },
      {
        type: 'h2',
        text: 'A Note on Safety',
      },
      {
        type: 'p',
        text: 'Sound healing is a safe, non-invasive modality for the vast majority of people. However, there are specific contraindications to be aware of: those with sound-induced epilepsy should avoid immersive gong baths; individuals with pacemakers should notify their practitioner so instrument placement can be adjusted; and those in the first or third trimester of pregnancy are encouraged to sit further from the instruments and consult their physician beforehand. Sound sessions should always be understood as complementary to, not a replacement for, conventional medical care.',
      },
      {
        type: 'pullquote',
        text: 'This isn\'t just relaxing music. It is a targeted, evidence-informed intervention for your nervous system.',
      },
      {
        type: 'p',
        text: 'If you are curious to experience the shift firsthand, we invite you to join Megan and the YES team in Frisco for an upcoming sound bath. No experience, no preparation, and no special beliefs are required — only the willingness to lie down and listen.',
      },
    ],
  },

  {
    slug: 'energy-work-for-skeptics',
    title: 'Energy Work for the Skeptic: A Grounded Guide to the Biofield',
    category: 'The Science of Healing',
    categoryColor: 'rose',
    readTime: 6,
    date: 'February 2026',
    heroImage: '/blog/energy_work_for_skeptic.jpg',
    excerpt:
      'The words "energy work" make a lot of analytically-minded people immediately switch off. Here is what happens when you look at it through the lens of physics, neuroscience, and the NIH\'s own research definitions.',
    sections: [
      {
        type: 'p',
        text: 'There is a version of this article that begins with chakras and auras. This is not that version. If you have arrived here as someone who finds the vocabulary of energy healing alienating — too mystical, too unverifiable, too far outside the framework of how you understand the body — then you are exactly the person this article is written for.',
      },
      {
        type: 'p',
        text: 'The goal is not to convince you of anything metaphysical. It is simply to translate a practice that is often described in esoteric terms into the language of measurable biology. You can decide what to make of it from there.',
      },
      {
        type: 'h2',
        text: 'The Body as an Electromagnetic System',
      },
      {
        type: 'p',
        text: 'Here is a place to start: every organ in the human body generates a measurable electromagnetic field. This is not alternative theory — it is the basis of some of the most routine diagnostic tools in Western medicine. The electrocardiogram (ECG) measures the electromagnetic field produced by the heart. The electroencephalogram (EEG) measures the field produced by the brain. The heart\'s electromagnetic field, in fact, extends several feet outside the body and can be detected with sensitive instrumentation.',
      },
      {
        type: 'p',
        text: 'When biofield practitioners talk about "energy" in and around the body, they are — in their most scientifically-grounded interpretation — referencing these measurable bio-electromagnetic fields. The question that legitimate research is currently exploring is not whether these fields exist (they demonstrably do), but whether they can be influenced externally in ways that produce therapeutic benefit.',
      },
      {
        type: 'h2',
        text: 'How the NIH Defines Biofield Therapy',
      },
      {
        type: 'p',
        text: 'The National Institutes of Health (NIH) classifies biofield therapies — including Reiki, Therapeutic Touch, and related practices — under the umbrella of "energy medicine" within its National Center for Complementary and Integrative Health (NCCIH). The NIH defines these as practices in which "the practitioner works with biofields, or the subtle energy fields that allegedly surround and permeate the human body."',
      },
      {
        type: 'pullquote',
        text: 'The NIH is not endorsing the mystical interpretation. It is acknowledging that these fields exist and that their therapeutic application warrants serious scientific inquiry.',
      },
      {
        type: 'p',
        text: 'Multiple controlled studies have investigated Reiki specifically. A 2017 systematic review in the Journal of Evidence-Based Complementary and Alternative Medicine examined twelve randomised trials and found consistent evidence that Reiki reduces anxiety and pain more effectively than sham Reiki or control conditions. A 2018 study published in Alternative Therapies in Health and Medicine found that Reiki significantly improved wellbeing, sleep quality, and mood in healthy adults. These are not large-scale pharmaceutical trials, but they are rigorous enough to suggest an effect that warrants further investigation.',
      },
      {
        type: 'h2',
        text: 'The "Kink in the Garden Hose" Model',
      },
      {
        type: 'p',
        text: 'Energy work practitioners often use the metaphor of a kink in a garden hose to describe what a "blockage" is: emotional stress, stored physical tension, or unprocessed experience that interrupts the body\'s natural flow. In neurobiological terms, this maps reasonably well onto the concept of chronic activation of the sympathetic nervous system — the body stuck in fight-or-flight mode long after the original stressor has passed.',
      },
      {
        type: 'p',
        text: 'Unresolved stress does not simply evaporate. It is held in the body — in heightened muscle tension, in the posture and breathing patterns the nervous system adopts as its new "normal," in the hormonal and neurological patterns that become habitual. The body-oriented therapies, of which Reiki is one, work at the interface of this physical holding and the nervous system response that maintains it.',
      },
      {
        type: 'h2',
        text: 'What to Expect in a Session',
      },
      {
        type: 'p',
        text: 'A Reiki session with Megan at our Frisco studio typically lasts 60 minutes. You remain fully clothed on a massage table. She uses light touch — or in some cases, no-touch — techniques, moving through a series of hand positions over different areas of the body. There is no manipulation, no pressure, and nothing invasive.',
      },
      {
        type: 'p',
        text: 'What people report experiencing varies considerably. Some feel warmth or tingling in specific areas. Some fall into a state between waking and sleep — the Theta brainwave state described in our article on sound baths. Some experience emotional releases, often subtle, occasionally more pronounced. Some feel nothing in particular during the session and then notice, over the following 24 to 48 hours, that something has shifted: a long-standing tension is quieter, sleep is deeper, a previously looping thought pattern has lost some of its grip.',
      },
      {
        type: 'ul',
        items: [
          'Reduction in anxiety and stress response',
          'Improved sleep quality, often reported as the most significant early benefit',
          'Decreased chronic pain and muscle tension',
          'Greater emotional clarity and reduced mental fog',
          'A general sense of restored equilibrium',
        ],
      },
      {
        type: 'h2',
        text: 'The Most Honest Thing We Can Tell You',
      },
      {
        type: 'p',
        text: 'Energy work should be positioned as what it is: a complementary modality that works alongside conventional medicine, not as a replacement for it. We do not claim that a session will cure a diagnosed condition. We do not make medical claims, and you should be cautious of any practitioner who does.',
      },
      {
        type: 'p',
        text: 'What we can say, based on both the existing research and Megan\'s decade of practice, is this: the body holds more than the mind consciously knows. And sometimes the most effective intervention is not another intellectual framework but a period of quiet, supported presence in which the body\'s own intelligence can do what it has always been trying to do.',
      },
      {
        type: 'p',
        text: 'If that sounds even remotely worth exploring, we invite you to book a session at our Frisco studio. Skepticism is welcome. You do not need to believe anything before you arrive.',
      },
    ],
  },

  {
    slug: 'first-sound-bath-guide',
    title: 'Your First Sound Bath: Everything You Need to Know',
    category: "Beginner's Sanctuary",
    categoryColor: 'sage',
    readTime: 5,
    date: 'January 2026',
    heroImage: '/blog/first_sound_bath.jpg',
    excerpt:
      'Walking into your first sound bath can feel mysterious. The reality is beautifully simple. Here is a complete guide to what to expect, how to prepare, and why so many people describe it as the best night of sleep they have had in years.',
    sections: [
      {
        type: 'p',
        text: 'Let us address the most common question first: no, there is no water involved. Despite the name, a sound bath has nothing to do with bathing in the traditional sense. The "bath" is entirely acoustic — you are immersed in sound the way you might be immersed in warm water, surrounded on all sides, the sensation travelling through you rather than simply reaching your ears.',
      },
      {
        type: 'p',
        text: 'Think of it as an energetic deep-tissue massage in which you remain completely passive. There is no movement required, no breathwork, no meditation technique to master. The only instruction is to lie down and allow.',
      },
      {
        type: 'h2',
        text: 'Before You Arrive',
      },
      {
        type: 'h3',
        text: 'What to Wear',
      },
      {
        type: 'p',
        text: 'Comfort is the only consideration. Loose-fitting clothing — leggings, sweats, a soft long-sleeve — is ideal. One thing that surprises first-timers: your body temperature tends to drop during deep relaxation. Even on a warm day, bring warm socks, and consider a light layer you can pull over yourself during the session.',
      },
      {
        type: 'h3',
        text: 'What to Bring',
      },
      {
        type: 'p',
        text: 'Our Frisco studio provides yoga mats and blankets for all sessions. If you have sensory preferences, you are welcome to bring your own pillow, an eye mask (many participants find this enhances the experience significantly), or a favourite blanket. Leave your phone in your bag or on silent — the vibration of a notification mid-session is genuinely disruptive to the acoustic environment.',
      },
      {
        type: 'h3',
        text: 'What to Eat (and Not Eat)',
      },
      {
        type: 'p',
        text: 'Avoid a heavy meal in the two hours before a session. A sound bath in a deeply relaxed state is not the same experience as a sound bath on a full stomach. Light eating beforehand is fine. Arriving well-hydrated is helpful, as the body does a form of somatic processing during the session and hydration supports this.',
      },
      {
        type: 'h2',
        text: 'During the Session',
      },
      {
        type: 'p',
        text: 'You will lie in Savasana — the yoga posture sometimes called "corpse pose," which simply means lying flat on your back with your arms slightly away from your sides and your palms facing upward. This is the position of complete surrender, and it is the best posture for receiving the full-body vibration of the instruments.',
      },
      {
        type: 'p',
        text: 'As the session begins, you will hear Megan begin to play. Drawing on over a decade of practice, she works with crystal alchemy singing bowls — hand-crafted from pure quartz crystal and tuned to specific frequencies — alongside gongs, chimes, and occasionally the human voice. The sound will seem to come from everywhere at once.',
      },
      {
        type: 'pullquote',
        text: 'Many first-timers report that they did not fall asleep, but could not have told you exactly where they were. That threshold between waking and dreaming is precisely where the healing happens.',
      },
      {
        type: 'p',
        text: 'Common physical sensations during a sound bath include: warmth or tingling in the hands, feet, or chest; a sensation of the body becoming heavy or, conversely, of floating; gentle waves of emotion; and a gradual quieting of the internal monologue. Some participants fall into a light sleep. Others maintain a dreamy, deeply restful awareness throughout. Both are completely normal, and neither is more "correct" than the other.',
      },
      {
        type: 'h2',
        text: 'After the Session',
      },
      {
        type: 'p',
        text: 'Allow yourself a few minutes at the end before you stand. The transition from Theta back to full waking consciousness takes a little time, and it is worth giving your nervous system the space to make that journey without rushing. We always build this integration time into our sessions.',
      },
      {
        type: 'p',
        text: 'Drink water. Eat something nourishing if it has been a few hours. Avoid intense stimulation — scrolling, loud environments, high-stress conversations — in the first hour after a session if you can. The nervous system is in an open, receptive state, and what you expose it to in that window matters.',
      },
      {
        type: 'h3',
        text: 'The 48-Hour Effect',
      },
      {
        type: 'p',
        text: 'Many clients report that the full effects of a sound bath are not felt until the following day, or even the day after that. Deep sleep the night of a session is extremely common — often described as the most restorative sleep a person has had in months. A sustained sense of emotional lightness, mental clarity, and physical ease frequently follows.',
      },
      {
        type: 'p',
        text: 'This delayed and extended integration is one of the most interesting aspects of the modality. Unlike a massage, which tends to feel best immediately afterward, a sound bath often deepens in its effect over time. The body continues to process and integrate the experience long after you have left the studio.',
      },
      {
        type: 'h2',
        text: 'A Note on Contraindications',
      },
      {
        type: 'ul',
        items: [
          'Epilepsy (particularly sound-induced): please consult your physician and notify our team before attending',
          'Pacemakers: the vibrations of gongs and large bowls can interfere; please let us know so we can adjust instrument placement',
          'Pregnancy (first and third trimesters): sitting further from the larger instruments is recommended; consult your doctor',
          'Recent surgery or acute inflammatory conditions: the deep relaxation response is generally beneficial, but notify your practitioner so adjustments can be made',
        ],
      },
      {
        type: 'p',
        text: 'For the vast majority of people, a sound bath is a deeply safe and deeply nourishing experience. If you have specific health concerns, we are always available to discuss them before you book.',
      },
      {
        type: 'p',
        text: 'We look forward to welcoming you into the space. The bowls are ready. All you have to do is arrive.',
      },
    ],
  },

  {
    slug: 'yoga-burnout-frisco',
    title: 'The Burnout Pandemic: Why Frisco Professionals Are Turning to Yoga',
    category: 'Mind & Movement',
    categoryColor: 'gold',
    readTime: 8,
    date: 'December 2025',
    excerpt:
      'In the high-stakes corridors of North Dallas and Frisco, a silent health crisis is deepening. More coffee, harder gym sessions, and digital detoxes are not fixing it — because they are targeting the wrong system.',
    heroImage: '/blog/burnout_pandemic.jpg',
    sections: [
      {
        type: 'p',
        text: 'The North Texas professional landscape is one of the most economically dynamic in the country. The Frisco and North Dallas corridor has become home to a disproportionate concentration of corporate headquarters, high-growth startups, and demanding white-collar industries. The people who thrive here tend to be driven, ambitious, and accustomed to optimising every available system for better output.',
      },
      {
        type: 'p',
        text: 'And yet, the same high-performers who bring relentless discipline to their work are increasingly arriving at wellness centres in a state of profound depletion. Not ordinary tiredness — the kind of fatigue that sleep does not fix. The kind that grinds down week after week until one morning you realise that the drive that defined you has gone quiet somewhere deep inside.',
      },
      {
        type: 'h2',
        text: 'Burnout Is Not a Mindset Problem',
      },
      {
        type: 'p',
        text: 'The cultural narrative around burnout often frames it as a motivation deficit — a problem of attitude, discipline, or work-life balance choices. This framing is both unhelpful and scientifically inaccurate. Burnout, as defined by the World Health Organization and increasingly studied in clinical neuroscience, is a physiological breakdown of the body\'s stress-response system.',
      },
      {
        type: 'p',
        text: 'The Hypothalamic-Pituitary-Adrenal (HPA) axis — the body\'s primary stress management infrastructure — is designed for intermittent activation. When a threat appears, it mobilises. When the threat passes, it recovers. But the "always-on" professional environment of a demanding career, combined with the ambient demands of modern life, keeps the HPA axis perpetually elevated. Cortisol levels that were designed to spike and fall instead plateau. The nervous system, unable to find its way to genuine rest, begins to degrade.',
      },
      {
        type: 'pullquote',
        text: 'You cannot think your way out of burnout any more than you can think your way out of a sprained ankle. The recovery happens in the body, not the mind.',
      },
      {
        type: 'h2',
        text: 'Why the Usual Solutions Do Not Work',
      },
      {
        type: 'p',
        text: 'This physiological reality explains why so many of the standard remedies for burnout provide only temporary relief. A vacation helps — until you return. An intense exercise regimen may improve mood through endorphin release, but high-intensity training is itself a stressor on the HPA axis and can, in cases of advanced burnout, exacerbate the problem. Digital detoxes remove a symptom (overstimulation) without addressing the underlying dysregulation.',
      },
      {
        type: 'p',
        text: 'What genuinely addresses the root is nervous system regulation — the process of actively training the body back into its parasympathetic "rest and digest" state. And this is where yoga, in its most physiologically-informed application, enters the picture.',
      },
      {
        type: 'h2',
        text: 'Yoga as a Nervous System Technology',
      },
      {
        type: 'p',
        text: 'In its truest form, yoga is not primarily a flexibility practice or a fitness modality. It is a system of moving meditation designed to train the nervous system\'s capacity to remain steady under pressure. The mechanism is specific: by placing the body in a challenging posture — one that creates a mild stress signal — and then practising slow, regulated breathing while holding that posture, you are essentially conducting a controlled experiment in stress response regulation.',
      },
      {
        type: 'p',
        text: 'The body learns, through repetition, that stress signals do not require a full fight-or-flight response. The nervous system\'s "threat threshold" gradually rises. What would previously have triggered a cascade of anxiety — a difficult email, a high-stakes meeting, an unexpected delay — begins to register as manageable. This is not a metaphorical outcome. It is a measurable neurological adaptation.',
      },
      {
        type: 'h2',
        text: 'Why Yin and Restorative Yoga Are Particularly Effective for Burnout',
      },
      {
        type: 'p',
        text: 'For individuals already in a state of HPA axis overactivation, the most therapeutically appropriate yoga practices are not the vigorous ones. While a strong Vinyasa class has genuine benefits for healthy individuals, asking a depleted nervous system to sustain intense physical effort is a bit like asking a concussion patient to go for a run to heal faster.',
      },
      {
        type: 'p',
        text: 'Yin yoga and restorative yoga work on a different tissue and a different system. Yin involves long, passive holds — typically three to five minutes — in poses that target the connective tissues and fascia. This is significant because fascia is now understood to be one of the primary sites where the body stores the physical residue of chronic emotional stress. Slow, sustained loading of these tissues, combined with the downregulation of the nervous system that comes from stillness and slow breathing, creates conditions for genuine somatic release.',
      },
      {
        type: 'ul',
        items: [
          'Downregulates the sympathetic nervous system more effectively than aerobic exercise for burnout recovery',
          'Targets connective tissue and fascia where chronic stress is physically stored',
          'Trains the body\'s capacity for stillness — a skill that transfers directly to daily resilience',
          'Improves sleep quality, particularly the deep restorative sleep that burnout disrupts',
          'Reduces baseline cortisol levels with consistent practice over 6–8 weeks',
        ],
      },
      {
        type: 'h2',
        text: 'The Corporate Wellness Dimension',
      },
      {
        type: 'p',
        text: 'The cost of burnout to organisations is substantial and increasingly quantified. The American Institute of Stress estimates that workplace stress costs the US economy over $300 billion annually in absenteeism, diminished productivity, and healthcare costs. For employers in the Frisco corridor managing talent in competitive industries, employee burnout is not just a wellness concern — it is a business performance issue.',
      },
      {
        type: 'p',
        text: 'Under Megan\'s guidance, we partner with Frisco-area companies to provide on-site yoga and meditation sessions tailored to the specific demands of professional environments. A 30-minute midday restorative session, offered twice weekly, has been shown in workplace wellness research to significantly improve afternoon cognitive performance, reduce reported stress levels, and decrease sick days taken over a 12-week period.',
      },
      {
        type: 'p',
        text: 'The logistics are straightforward. The ROI, for organisations willing to measure it, is compelling. And the experience for employees — many of whom have never practised yoga before — is almost universally one of surprise: surprise at how effective something so quiet and simple can be at restoring something they did not fully realise they had lost.',
      },
      {
        type: 'h2',
        text: 'Where to Begin',
      },
      {
        type: 'p',
        text: 'If you are in Frisco and recognise yourself in any part of this article, the most important thing we can tell you is this: start gently. A 60-minute Yin class, once a week, is sufficient to begin the process of nervous system recalibration. You do not need to already be flexible. You do not need any prior yoga experience. You do not need to arrive with an open mind about anything spiritual — the physiology works regardless of your beliefs.',
      },
      {
        type: 'p',
        text: 'The only requirement is showing up. The body, given even a small window of genuine rest, tends to know exactly what to do with it.',
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}
