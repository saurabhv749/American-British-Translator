const AtoBtest = [
  {
    text: `Mangoes are my favorite fruit.`,
    solution: `Mangoes are my <span class="highlight">favourite</span> fruit.`,
  },
  {
    text: `I ate yogurt for breakfast.`,
    solution: `I ate <span class="highlight">yoghurt</span> for breakfast.`,
  },
  {
    text: `We had a party at my friend's condo.`,
    solution: `We had a party at my friend's <span class="highlight">flat</span>.`,
  },
  {
    text: `Can you toss this in the trashcan for me?`,
    solution: `Can you toss this in the <span class="highlight">rubbish</span>can for me?`,
  },
  {
    text: `The parking lot was full.`,
    solution: `The <span class="highlight">car park</span> was full.`,
  },
  {
    text: `Like a high tech Rube Goldberg machine.`,
    solution: `Like a high tech <span class="highlight">Heath Robinson device</span>.`,
  },
  {
    text: `To play hooky means to skip class or work.`,
    solution: `To <span class="highlight">bunk off</span> means to skip class or work.`,
  },
  {
    text: `No Mr. Bond, I expect you to die.`,
    solution: `No <span class="highlight">Mr</span> Bond, I expect you to die.`,
  },
  {
    text: `Dr. Grosh will see you now.`,
    solution: `<span class="highlight">Dr</span> Grosh will see you now.`,
  },
  {
    text: `Lunch is at 12:15 today.`,
    solution: `Lunch is at <span class="highlight">12.15</span> today.`,
  },
]

const BtoAtest = [
  {
    text: `We watched the footie match for a while.`,
    solution: `We watched the <span class="highlight">soccer</span> match for a while.`,
  },
  {
    text: `Paracetamol takes up to an hour to work.`,
    solution: `<span class="highlight">Tylenol</span> takes up to an hour to work.`,
  },
  {
    text: `First, caramelise the onions.`,
    solution: `First, <span class="highlight">caramelize</span> the onions.`,
  },
  {
    text: `I spent the bank holiday at the funfair.`,
    solution: `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`,
  },
  {
    text: `I had a bicky then went to the chippy.`,
    solution: `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`,
  },
  {
    text: `I've just got bits and bobs in my bum bag.`,
    solution: `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`,
  },
  {
    text: `The car boot sale at Boxted Airfield was called off.`,
    solution: `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`,
  },
  {
    text: `Have you met Mrs Kalyani?`,
    solution: `Have you met <span class="highlight">Mrs.</span> Kalyani?`,
  },
  {
    text: `Prof Joyner of King's College, London.`,
    solution: `<span class="highlight">Prof.</span> Joyner of King's College, London.`,
  },
  {
    text: `Tea time is usually around 4 or 4.30.`,
    solution: `Tea time is usually around 4 or <span class="highlight">4:30</span>.`,
  },
]

const highlighted = [
  {
    text: `Mangoes are my favorite fruit.`,
    hl: `Mangoes are my <span class=\"highlight\">favourite</span> fruit.`,
  },
  {
    text: `I ate yogurt for breakfast.`,
    hl: `I ate <span class=\"highlight\">yoghurt</span> for breakfast.`,
  },
  {
    text: `We watched the footie match for a while.`,
    hl: `We watched the <span class=\"highlight\">soccer</span> match for a while.`,
  },
  {
    text: `Paracetamol takes up to an hour to work.`,
    hl: `<span class=\"highlight\">Tylenol</span> takes up to an hour to work.`,
  },
]

module.exports.collection = { AtoBtest, BtoAtest, highlighted }
