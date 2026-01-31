// tests/assignment1.spec.js
const { test, expect } = require('@playwright/test');

const TARGET_URL = 'https://www.swifttranslator.com/';

// -----------------------------------------------------------------------
// POSITIVE FUNCTIONAL TESTS
// -----------------------------------------------------------------------

test('Pos_Fun_004: Simple sentences', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama pansal yanavaa');
  await expect(page.getByText('මම පන්සල් යනවා')).toBeVisible();
});

test('Pos_Fun_005: Compound sentences', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('api saththu vaththa balala, gedhara yamu');
  await expect(page.getByText('අපි සත්තු වත්ත බලල, ගෙදර යමු')).toBeVisible();
});

test('Pos_Fun_006: Complex sentences', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('vaessa unaath adha yanna epayi');
  await expect(page.getByText('වැස්ස උනාත් අද යන්න එපයි')).toBeVisible();
});

test('Pos_Fun_007: Interrogative', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oyaa kavadhaadha mata salli dhenne?');
  await expect(page.getByText('ඔයා කවදාද මට සල්ලි දෙන්නෙ?')).toBeVisible();
});

test('Pos_Fun_008: Imperative (commands) forms', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('vahaama naegitinna');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('වහාම නැගිටින්න')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_009: Greetings', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('suBha raathriiyak');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('සුභ රාත්‍රීයක්')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_010: Requests', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mata liyakiyavili tika dhaen ganna puluvandha?');

  // 2. Output Check: Just look for the text on the page!
  await expect(
  page.getByText('මට ලියකියවිලි ටික දැන් ගන්න පුලුවන්ද?')
).toBeVisible({ timeout: 10000 });

});

test('Pos_Fun_011: Responses', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('hari mama dhennam');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('හරි මම දෙන්නම්')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_012: Polite phrasing', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oyaata puLuvannam karuNakarala mata yanna dhenna');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('ඔයාට පුළුවන්නම් කරුණකරල මට යන්න දෙන්න')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_013: Frequently used day-to-day expressions', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mata badagini');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('මට බඩගිනි')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_014: Multi-word expressions and frequent collocations', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('naevatha enna');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('නැවත එන්න')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_015: Missing spaces / joined words (stress test)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama kadeeta yanavaa');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('මම කඩේට යනවා')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_016: Repeated word expressions used for emphasis', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('podda podda');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('පොඩ්ඩ පොඩ්ඩ')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_017: Tense variations', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama heta park yanavaa');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('මම හෙට park යනවා')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_018: Negation patterns', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mata eeka epaa.');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('මට ඒක එපා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_019: Request forms with varying degrees of politeness', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('puLuvannam mata eeka dhenna');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('පුළුවන්නම් මට ඒක දෙන්න')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_020: Sentences containing places and common English words that should remain as they are', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('zoom meeting ekak thiyamu needha?');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('zoom meeting එකක් තියමු නේද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_021: English abbreviations and short forms', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mata NIC eka dhenna');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('මට NIC එක දෙන්න')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_022: Currency, time formats, dates, and units of measurement', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama 25/12/2025 Kandy gihin passe Colombo ennam. Api ehema plan karala thiyenavaa. ');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('මම 25/12/2025 Kandy ගිහින් පස්සෙ Colombo එන්නම්. අපි එහෙම plan කරල තියෙනවා. ')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_023: Currency, time formats, dates, and units of measurement', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('me potion eka ml 500 naehae, kg 1 thamaa.');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('මෙ potion එක ml 500 නැහැ, kg 1 තමා')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_024: Slang and colloquial phrasing', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('supiri machan');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('සුපිරි මචන්')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_025: Paragraph-style input', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama hamadhama office yanava udhe 7.00 ta bus ekata naginavaa .aith mama enne havasa 5 ta .avilla rata kaema kanavaa.');

  // Locate Sinhala output reliably
  const output = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  await expect(output).toContainText('මම හමදම office යනව');
  await expect(output).toContainText('7.00 ට bus එකට');
  await expect(output).toContainText('අවිල්ල රට කැම කනවා');
});



test('Pos_Fun_026: Inputs containing punctuation marks', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('ambo! mama Bhaya unaa');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('අම්බො! මම භය උනා')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_027: Complex condition sentence', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('man nisaa oya dhukin needha');

  const output = getSinhalaOutput(page);

  await expect(output).toContainText('නිසා');
  await expect(output).toContainText(/දුකින්.*නේද/);
});



test('Pos_Fun_028: Slang and colloquial phrasing', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('ado man uBAva adha dhaekkaa');

  // 2. Output Check: Just look for the text on the page!
  await expect(page.getByText('ado man උඹව අද දැක්කා')).toBeVisible({ timeout: 10000 });
});




// -----------------------------------------------------------------------
// NEGATIVE FUNCTIONAL TESTS
// -----------------------------------------------------------------------

test('Neg_Fun_001: Incorrect handling of brand names in mixed language', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('microsoft teams meeting ekata join unadha');
  // Brand names should remain as they are and not be transliterated
  await expect(page.getByText('මිcරොසොෆ්ට් teams meeting එකට join උනද')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_002: Medium input with technical terms and abbreviations causes partial transliteration errors', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama chatbox ekee msg ekak daannam ,ikmanata reply karanna');
  // Technical terms and abbreviations should be handled correctly

  await expect(page.getByText('මම චට්බොx එකේ ම්ස්ග් එකක් ඩාන්නම් ,ඉක්මනට reply කරන්න')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_003: Short question with app brand name leads to incorrect character mapping', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oyaa capcut use karala vidiyo edit kalaadha?');
  // Brand names should remain as they are

  await expect(page.getByText('ඔයා cඅපcඋට් use කරල විඩියො edit කලාද?')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_004: Short interrogative with AI tool name results in erroneous conversion', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oya chatAI use karanna dhannavadha');
  // AI tool names should remain as they are
  await expect(page.getByText('ඔය චටෛ use කරන්න දන්නවද')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_005: Typo in social media brand name triggers unwanted spelling correction and transliteration', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oya magee instargram post ekata like karadha');
  // Brand names with typos should still be handled appropriately
  await expect(page.getByText('ඔය මගේ ඉන්ස්ටර්ග්‍රම් post එකට like කරද')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_006: Short phrase with AI brand name causes garbled output', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oya chatgpt use kaladha?');
  // Brand names should remain as they are
  await expect(page.getByText('ඔය චට්ග්ප්ට් use කලද?')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_007: Long informal plan with multiple brand and slang terms leads to multiple transliteration failures', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Machan api heta Negombo beach ekata yamu da? Morning 9 ta pick up karala kelin beach ekee chill karamu, mama cooler ekak geniyanawa drinks walata . Passe kfc eken chicken bucket ekak order karamu, eka share karala balamu. Evening ta instagram story dhaala "best day ever" kiyala caption ekak daanna one. TikTok ekee dance challenge ekak hadamu da? ChatGPT use karala funny pickup linees , try karamu!');
  // Brand names and common English words should remain as they are
  await expect(page.getByText('මචන් අපි හෙට Negombo beach එකට යමු ඩ? Morning 9 ට pick up කරල කෙලින් beach එකේ chill කරමු, මම cooler එකක් ගෙනියනwඅ drinks wඅලට . Passe ක්ෆc එකෙන් chicken bucket එකක් order කරමු, එක share කරල බලමු. Evening ට ඉන්ස්ටග්‍රම් story දාල “best day ever” කියල caption එකක් ඩාන්න one. TikTok එකේ dance challenge එකක් හඩමු ඩ?  ඡට්ඟ්ඵ්ඨ් use කරල funny pickup ලිනේස් , try කරමු!')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_008: Short mixed English-Singlish phrase with common words causes unnecessary transliteration', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('it is very common issue bn');
  // Common English words should remain as they are
  await expect(page.getByText('it ඉස් very common issue බ්න් ')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_009: Long professional message with software and brand terms results in widespread character errors', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Good morning team, heta 10 AM valata scheduled karala thiyenava Zoom call ekak client ekka. Mama agenda eka prepare karala thiyenawa – please check karanna Outlook ekee shared folder ekee. Presentation slides PowerPoint eken hadala thiyenawa, eka review karala comments dhaanna. Last week report eka Excel format eke thiyenawa, figures update karala thiyenawa Rs. 1.2 million sales target eka exceed karala. Slack eke channel ekata pin karala thiyenawa for quick reference. Any changes one nam please immediately inform karanna. Thank you for cooperation.');
  // Software and brand terms should remain as they are
  await expect(page.getByText('Good morning team, හෙට 10 AM වලට scheduled කරල තියෙනව Zoom call එකක් client එක්ක. මම agenda එක prepare කරල තියෙනwඅ – please check කරන්න Outlook එකේ shared folder එකේ. Presentation slides ඵොwඑර්ඵොඉන්ට් එකෙන් හඩල තියෙනwඅ, එක review කරල comments දාන්න. Last week report එක Excel format එකේ තියෙනwඅ, figures update කරල තියෙනwඅ Rs. 1.2 million sales target එක exceed කරල. Slack එකේ channel එකට pin කරල තියෙනwඅ for quick reference. Any changes one නම් please immediately inform කරන්න. Thank you for cooperation.')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_010: Long casual conversation with food and app brands causes inconsistent transliteration', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Machan api heta Negombo beach ekata yamu da? Morning 9 ta pick up karala kelin beach ekee chill karamu, mama cooler ekak geniyanawa drinks walata . Passe kfc eken chicken bucket ekak order karamu, eka share karala balamu. Evening ta instagram story dhaala "best day ever" kiyala caption ekak daanna one. TikTok ekee dance challenge ekak hadamu da? ChatGPT use karala funny pickup linees , try karamu!');
  // Brand names should remain as they are
  await expect(page.getByText('මචන්ග් අපි අද night Pizza Hut එකෙන් large pizza එකක් order කරමු ඩ? මම cheese burst එකක් පෙන්නන්න හිත ගත්ත . ඔයල කොඉ location එකට එන්න පුලුwඅන්? මම home delivery කරන්න කියල හිතෙනwඅ but pickup කරොත් සස්ට. Whatsapp group එකේ poll එකක් දාල decide කරමු. After එක අපි ice cream කන්න බස්කින් Robbins එකට යනwඅඩ? Or මcඪොනල්ඩ්’ස් drive thru එක better ඩ?  Last time ඔයගේ story එකේ CඅපCඋට් edit එක ඩෙක්ක super උන්න, next time ඔයට video එකක් හඩන්න help කරන්න පුලුwඅන්. Reply කරපන් fast, hungry already! ')).toBeVisible({ timeout: 10000 });
});

// -----------------------------------------------------------------------
// UI TEST SCENARIO
// -----------------------------------------------------------------------


test('Pos_UI_029: Real-time Update Check', async ({ page }) => {
  await page.goto(TARGET_URL);
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.pressSequentially('idhiriyata yanna', { delay: 200 });

  await expect(page.getByText('ඉදිරියට යන්න')).toBeVisible();
});