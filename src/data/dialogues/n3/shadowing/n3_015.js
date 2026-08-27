export default [
  {
    id: "lesson15_1",
    level: "N3",
    lesson: "Lesson 15",
    title: "クレーム",
    description: "A customer calls a delivery center to complain about a missed delivery and rescheduling.",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese: "はい、スピード便新宿配送センターでございます。",
        reading: "はい、すぴーどびん しんじゅく はいそう せんたー で ございます。",
        romaji: "Hai, Supīdo-bin Shinjuku Haisō Sentā de gozaimasu.",
        english: "Thank you for calling Speed Delivery Shinjuku Distribution Center.",
        vietnamese: "Vâng, đây là Trung tâm phân phối Shinjuku Speed Delivery.",
        acceptedAnswers: ["はい、スピード便新宿配送センターでございます。", "はい、すぴーどびんしんじゅくはいそうせんたーでございます。"]
      },
      {
        id: 2,
        speaker: "B",
        japanese: "あ、昨日不在連絡票が入ってて、今日の3時までに届けてもらえるように連絡したんですけど、まだ届かないんです。",
        reading: "あ、きのう ふざい れんらくひょう が はいってて、きょう の さんじ まで に とどけて もらえる よう に れんらく した ん です けど、まだ とどか ない ん です。",
        romaji: "A, kinō fuzai renraku-hyō ga haittete, kyō no san-ji made ni todokete moraeru yō ni renraku shitan desu kedo, mada todokanain desu.",
        english: "Ah, yesterday a missed delivery slip was left, and I called to have it delivered by 3 today, but it still hasn't arrived.",
        vietnamese: "À, hôm qua có để lại phiếu vắng mặt, tôi đã liên lạc để giao trước 3 giờ hôm nay, nhưng vẫn chưa thấy.",
        acceptedAnswers: ["あ、昨日不在連絡票が入ってて、今日の3時までに届けてもらえるように連絡したんですけど、まだ届かないんです。", "あ、きのうふざいれんらくひょうがはいってて、きょうのさんじまでにとどけてもらえるようにれんらくしたんですけど、まだとどかないんです。"]
      },
      {
        id: 3,
        speaker: "A",
        japanese: "申し訳ございません。ただいまお調べいたします。お客様のお手もとに不在連絡票がございますか？",
        reading: "もうしわけ ございません。ただいま おしらべ いたします。おきゃくさま の おてもと に ふざい れんらくひょう が ございます か？",
        romaji: "Mōshiwake gozaimasen. Tadaima o-shirabe itashimasu. O-kyaku-sama no o-temoto ni fuzai renraku-hyō ga gozaimasu ka?",
        english: "I sincerely apologize. I'll look into it right away. Do you have the missed delivery slip with you?",
        vietnamese: "Tôi thành thật xin lỗi. Tôi sẽ tra cứu ngay. Quý khách có phiếu vắng mặt trong tay không?",
        acceptedAnswers: ["申し訳ございません。ただいまお調べいたします。お客様のお手もとに不在連絡票がございますか？", "もうしわけございません。ただいまおしらべいたします。おきゃくさまのおてもとにふざいれんらくひょうがございますか？"]
      },
      {
        id: 4,
        speaker: "B",
        japanese: "あー、あります。",
        reading: "あー、あります。",
        romaji: "Ā, arimasu.",
        english: "Yes, I do.",
        vietnamese: "À, có.",
        acceptedAnswers: ["あー、あります。", "あー、あります。"]
      },
      {
        id: 5,
        speaker: "A",
        japanese: "右上にある、8桁の配達番号をお願いいたします。",
        reading: "みぎうえ に ある、はちけた の はいたつばんごう を おねがい いたします。",
        romaji: "Migi-ue ni aru, hachi-keta no haitatsu bangō o onegai itashimasu.",
        english: "Could you please give me the 8-digit delivery number in the upper right?",
        vietnamese: "Xin cho tôi mã giao hàng 8 chữ số ở góc trên bên phải.",
        acceptedAnswers: ["右上にある、8桁の配達番号をお願いいたします。", "みぎうえにある、はちけたのはいたつばんごうをおねがいいたします。"]
      },
      {
        id: 6,
        speaker: "B",
        japanese: "えっとー、４６５－６－９２４１です。",
        reading: "えっとー、よんろくご－ろく－きゅうにしいち です。",
        romaji: "Ettō, yon-roku-go-roku-kyū-ni-shi-ichi desu.",
        english: "Let me see — it's 465-6-9241.",
        vietnamese: "Để tôi xem — là 465-6-9241.",
        acceptedAnswers: ["えっとー、４６５－６－９２４１です。", "えっとー、よんろくごーろくーきゅうにしいちです。"]
      },
      {
        id: 7,
        speaker: "A",
        japanese: "はい、中村様ですね。確かに本日3時までとうけたまわっております。",
        reading: "はい、なかむら さま です ね。たしかに ほんじつ さんじ まで と うけたまわって おります。",
        romaji: "Hai, Nakamura-sama desu ne. Tashika ni honjitsu san-ji made to uketamawatte orimasu.",
        english: "Yes, Mr./Ms. Nakamura. We do have a note for delivery by 3 today.",
        vietnamese: "Vâng, anh/chị Nakamura phải không. Đúng là chúng tôi có ghi nhận giao trước 3 giờ hôm nay.",
        acceptedAnswers: ["はい、中村様ですね。確かに本日3時までとうけたまわっております。", "はい、なかむらさまですね。たしかにほんじつさんじまでとうけたまわっております。"]
      },
      {
        id: 8,
        speaker: "A",
        japanese: "ただいま、ドライバーと連絡を取って確かめまして、こちらから中村様のお宅に折り返しお電話差し上げます。",
        reading: "ただいま、どらいばー と れんらく を とって たしかめまして、こちら から なかむら さま の おたく に おりかえし おでんわ さしあげます。",
        romaji: "Tadaima, doraibā to renraku o totte tashikamemashite, kochira kara Nakamura-sama no o-taku ni orikaeshi o-denwa sashiagemasu.",
        english: "I'll contact the driver to confirm and call you back at home right away.",
        vietnamese: "Tôi sẽ liên hệ tài xế xác nhận và gọi lại cho anh/chị.",
        acceptedAnswers: ["ただいま、ドライバーと連絡を取って確かめまして、こちらから中村様のお宅に折り返しお電話差し上げます。", "ただいま、どらいばーとれんらくをとってたしかめまして、こちらからなかむらさまのおたくにおりかえしおでんわさしあげます。"]
      },
      {
        id: 9,
        speaker: "B",
        japanese: "えっと、これから出かけなくちゃいけないんで、あんまり待っていられないんですが。",
        reading: "えっと、これから でかけ なく ちゃ いけない ん で、あんまり まって いられ ない ん です が。",
        romaji: "Etto, korekara dekakenakucha ikenain de, anmari matte irarenain desu ga.",
        english: "Well, I have to go out soon so I can't wait very long.",
        vietnamese: "Ừ, tôi sắp phải ra ngoài nên không thể chờ lâu được.",
        acceptedAnswers: ["えっと、これから出かけなくちゃいけないんで、あんまり待っていられないんですが。", "えっと、これからでかけなくちゃいけないんで、あんまりまっていられないんですが。"]
      },
      {
        id: 10,
        speaker: "A",
        japanese: "2、3分ですぐお電話差し上げられますが…。",
        reading: "に、さんぷん で すぐ おでんわ さしあげられます が…。",
        romaji: "Ni, san-pun de sugu o-denwa sashiagemasu ga….",
        english: "I can call you back within 2 or 3 minutes…",
        vietnamese: "Tôi có thể gọi lại trong vòng 2, 3 phút…",
        acceptedAnswers: ["2、3分ですぐお電話差し上げられますが…。", "に、さんぷんですぐおでんわさしあげられますが…。"]
      },
      {
        id: 11,
        speaker: "B",
        japanese: "あー、わかりました。じゃー、お願いします。",
        reading: "あー、わかりました。じゃー、おねがい します。",
        romaji: "Ā, wakarimashita. Jā, onegai shimasu.",
        english: "Okay, understood. I'll wait then.",
        vietnamese: "À, hiểu rồi. Vậy phiền anh/chị vậy.",
        acceptedAnswers: ["あー、わかりました。じゃー、お願いします。", "あー、わかりました。じゃー、おねがいします。"]
      },
      {
        id: 12,
        speaker: "A",
        japanese: "中村様、たいへん申し訳ございませんが、ただいま事故の影響で道路が渋滞しておりまして、そちらにお届けできるのが30分後ぐらいになるということなんですが…。",
        reading: "なかむら さま、たいへん もうしわけ ございません が、ただいま じこ の えいきょう で どうろ が じゅうたい して おりまして、そちら に おとどけ できる の が さんじゅっぷんご ぐらい に なる と いう こと な ん です が…。",
        romaji: "Nakamura-sama, taihen mōshiwake gozaimasen ga, tadaima jiko no eikyō de dōro ga jūtai shite orimashite, sochira ni o-todoke dekiru no ga sanjuppun-go gurai ni naru to iu koto nan desu ga….",
        english: "Mr./Ms. Nakamura, I'm very sorry, but there's currently a traffic jam due to an accident, and it looks like delivery will be about 30 minutes later than expected…",
        vietnamese: "Anh/chị Nakamura, tôi rất xin lỗi, nhưng hiện tại đường đang tắc do tai nạn, có vẻ việc giao hàng sẽ trễ khoảng 30 phút…",
        acceptedAnswers: ["中村様、たいへん申し訳ございませんが、ただいま事故の影響で道路が渋滞しておりまして、そちらにお届けできるのが30分後ぐらいになるということなんですが…。", "なかむらさま、たいへんもうしわけございませんが、ただいまじこのえいきょうでどうろがじゅうたいしておりまして、そちらにおとどけできるのがさんじゅっぷんごぐらいになるということなんですが…。"]
      },
      {
        id: 13,
        speaker: "B",
        japanese: "あー、あの、私もう家を出なきゃいけないんで、それはちょっと無理ですね。",
        reading: "あー、あの、わたし もう いえ を でなきゃ いけない ん で、それ は ちょっと むり です ね。",
        romaji: "Ā, ano, watashi mō ie o denakya ikenain de, sore wa chotto muri desu ne.",
        english: "Ah, well, I have to leave the house soon, so that's a bit difficult.",
        vietnamese: "À, tôi sắp phải ra ngoài rồi, nên như vậy hơi khó.",
        acceptedAnswers: ["あー、あの、私もう家を出なきゃいけないんで、それはちょっと無理ですね。", "あー、あの、わたしもういえをでなきゃいけないんで、それはちょっとむりですね。"]
      },
      {
        id: 14,
        speaker: "B",
        japanese: "明日の3時までにしてもらえますか？",
        reading: "あした の さんじ まで に して もらえます か？",
        romaji: "Ashita no san-ji made ni shite moraemasu ka?",
        english: "Could you make it by 3 tomorrow instead?",
        vietnamese: "Có thể giao trước 3 giờ ngày mai không?",
        acceptedAnswers: ["明日の3時までにしてもらえますか？", "あしたのさんじまでにしてもらえますか？"]
      },
      {
        id: 15,
        speaker: "A",
        japanese: "かしこまりました。では、明日1時から3時の間にお届けいたします。ご迷惑をおかけしてたいへん申し訳ございませんでした。",
        reading: "かしこまりました。では、あした いちじ から さんじ の あいだ に おとどけ いたします。ごめいわく を おかけ して たいへん もうしわけ ございません でした。",
        romaji: "Kashikomarimashita. De wa, ashita ichi-ji kara san-ji no aida ni o-todoke itashimasu. Go-meiwaku o okake shite taihen mōshiwake gozaimasen deshita.",
        english: "Certainly. We'll deliver tomorrow between 1 and 3. We're very sorry for the inconvenience.",
        vietnamese: "Vâng, rõ rồi. Chúng tôi sẽ giao ngày mai từ 1 đến 3 giờ. Rất xin lỗi vì đã gây bất tiện.",
        acceptedAnswers: ["かしこまりました。では、明日1時から3時の間にお届けいたします。ご迷惑をおかけしてたいへん申し訳ございませんでした。", "かしこまりました。では、あしたいちじからさんじのあいだにおとどけいたします。ごめいわくをおかけしてたいへんもうしわけございませんでした。"]
      },
      {
        id: 16,
        speaker: "B",
        japanese: "わかりました。じゃー、その時間でお願いします。",
        reading: "わかりました。じゃー、その じかん で おねがい します。",
        romaji: "Wakarimashita. Jā, sono jikan de onegai shimasu.",
        english: "Understood. Okay, please come in that window.",
        vietnamese: "Hiểu rồi. Vậy phiền anh/chị trong khoảng thời gian đó nhé.",
        acceptedAnswers: ["わかりました。じゃー、その時間でお願いします。", "わかりました。じゃー、そのじかんでおねがいします。"]
      },
      {
        id: 17,
        speaker: "B",
        japanese: "あ、明日も3時すぎには出かけるんで、絶対3時までに届けてもらいたいんですけど。",
        reading: "あ、あした も さんじ すぎ には でかける ん で、ぜったい さんじ まで に とどけて もらいたい ん です けど。",
        romaji: "A, ashita mo san-ji sugi ni wa dekakeru n de, zettai san-ji made ni todokeite moraitain desu kedo.",
        english: "Oh, I'm going out again after 3 tomorrow too, so please absolutely deliver by 3.",
        vietnamese: "À, ngày mai tôi cũng ra ngoài sau 3 giờ, nên nhất định phải giao trước 3 giờ nhé.",
        acceptedAnswers: ["あ、明日も3時すぎには出かけるんで、絶対3時までに届けてもらいたいんですけど。", "あ、あしたもさんじすぎにはでかけるんで、ぜったいさんじまでにとどけてもらいたいんですけど。"]
      },
      {
        id: 18,
        speaker: "A",
        japanese: "はい、明日は大丈夫でございます。",
        reading: "はい、あした は だいじょうぶ で ございます。",
        romaji: "Hai, ashita wa daijōbu de gozaimasu.",
        english: "Yes, tomorrow will be fine.",
        vietnamese: "Vâng, ngày mai sẽ không có vấn đề gì.",
        acceptedAnswers: ["はい、明日は大丈夫でございます。", "はい、あしたはだいじょうぶでございます。"]
      },
      {
        id: 19,
        speaker: "B",
        japanese: "はい。じゃあよろしくお願いします。",
        reading: "はい。じゃあ よろしく おねがい します。",
        romaji: "Hai. Jā yoroshiku onegai shimasu.",
        english: "Alright. Thank you, I'll leave it to you.",
        vietnamese: "Vâng. Vậy nhờ anh/chị nhé.",
        acceptedAnswers: ["はい。じゃあよろしくお願いします。", "はい。じゃあよろしくおねがいします。"]
      }
    ]
  },
  {
    id: "lesson15_2",
    level: "N3",
    lesson: "Lesson 15",
    title: "恋愛トーク",
    description: "Two friends chat about a group date, a ghosted text, and an indirect proposal at a shrine.",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese: "ね、りか。この間の合コンどうだった？",
        reading: "ね、りか。この まえ の ごうこん どう だった？",
        romaji: "Ne, Rika. Kono mae no gōkon dō datta?",
        english: "Hey Rika, how did the group date the other day go?",
        vietnamese: "Này Rika, buổi hẹn hò nhóm hôm trước thế nào?",
        acceptedAnswers: ["ね、りか。この間の合コンどうだった？", "ね、りか。このまえのごうこんどうだった？"]
      },
      {
        id: 2,
        speaker: "B",
        japanese: "それがさ、一人イケメンがいて、この人がけっこういい人だったんだ。",
        reading: "それ が さ、ひとり いけめん が いて、この ひと が けっこう いい ひと だった ん だ。",
        romaji: "Sore ga sa, hitori ikemen ga ite, kono hito ga kekkō ii hito dattan da.",
        english: "Well, there was this one good-looking guy, and he turned out to be a really nice person.",
        vietnamese: "Thế mà, có một anh điển trai, và anh ấy cũng khá tốt người.",
        acceptedAnswers: ["それがさ、一人イケメンがいて、この人がけっこういい人だったんだ。", "それがさ、ひとりいけめんがいて、このひとがけっこういいひとだったんだ。"]
      },
      {
        id: 3,
        speaker: "A",
        japanese: "えー、いいなー。それで？",
        reading: "えー、いい なー。それ で？",
        romaji: "Ē, ii nā. Sore de?",
        english: "Oh nice! And then?",
        vietnamese: "Ồ, hay nhỉ. Rồi sao?",
        acceptedAnswers: ["えー、いいなー。それで？", "えー、いいなー。それで？"]
      },
      {
        id: 4,
        speaker: "B",
        japanese: "早速メアド交換したんだけど、いくら待っても全然音沙汰なし…。",
        reading: "さっそく めあど こうかん した ん だ けど、いくら まって も ぜんぜん おとさた なし…。",
        romaji: "Sassoku meado kōkan shitan da kedo, ikura matte mo zenzen otosata nashi….",
        english: "We exchanged contact info right away, but no matter how long I waited, not a word…",
        vietnamese: "Đổi địa chỉ email ngay, nhưng đợi mãi chẳng thấy liên lạc gì…",
        acceptedAnswers: ["早速メアド交換したんだけど、いくら待っても全然音沙汰なし…。", "さっそくめあどこうかんしたんだけど、いくらまってもぜんぜんおとさたなし…。"]
      },
      {
        id: 5,
        speaker: "A",
        japanese: "そりゃ、脈ないよ。",
        reading: "そりゃ、みゃく ない よ。",
        romaji: "Sorya, myaku nai yo.",
        english: "That means he's not interested.",
        vietnamese: "Thế thì không có tín hiệu gì rồi.",
        acceptedAnswers: ["そりゃ、脈ないよ。", "そりゃ、みゃくないよ。"]
      },
      {
        id: 6,
        speaker: "B",
        japanese: "そうかな〜。けっこういい感じだったんだけどな〜。",
        reading: "そう かな〜。けっこう いい かんじ だった ん だ けど な〜。",
        romaji: "Sō kana~. Kekkō ii kanji dattan da kedo nā~.",
        english: "You think? It seemed like it was going pretty well though~.",
        vietnamese: "Vậy à~. Cảm giác khá tốt mà~.",
        acceptedAnswers: ["そうかな〜。けっこういい感じだったんだけどな〜。", "そうかな〜。けっこういいかんじだったんだけどな〜。"]
      },
      {
        id: 7,
        speaker: "A",
        japanese: "もうあきらめたほうがいいんじゃない？",
        reading: "もう あきらめた ほう が いい ん じゃ ない？",
        romaji: "Mō akirameta hō ga iin ja nai?",
        english: "Maybe you should just give up at this point?",
        vietnamese: "Có lẽ bỏ đi thôi rồi?",
        acceptedAnswers: ["もうあきらめたほうがいいんじゃない？", "もうあきらめたほうがいいんじゃない？"]
      },
      {
        id: 8,
        speaker: "B",
        japanese: "う〜ん、商社マンで、バリバリ仕事してる人だから、今度こそ玉の輿って思ったんだけど…。",
        reading: "う〜ん、しょうしゃ まん で、ばりばり しごと してる ひと だ から、こんど こそ たま の こし って おもった ん だ けど…。",
        romaji: "Ūn, shōsha-man de, baribari shigoto shiteru hito dakara, kondo koso tama no koshi tte omottandakedo….",
        english: "Hmm, he's a trading company guy who works hard, so I thought this time it could be my prince charming…",
        vietnamese: "Ừm, anh ấy làm công ty thương mại, chăm chỉ, nên tôi nghĩ lần này sẽ gặp được người lý tưởng…",
        acceptedAnswers: ["う〜ん、商社マンで、バリバリ仕事してる人だから、今度こそ玉の輿って思ったんだけど…。", "う〜ん、しょうしゃまんで、ばりばりしごとしてるひとだから、こんどこそたまのこしっておもったんだけど…。"]
      },
      {
        id: 9,
        speaker: "A",
        japanese: "ま、そのうち、また合コンあるじゃない。いつかきっとこれだって人が現れると思うよ。",
        reading: "ま、その うち、また ごうこん ある じゃ ない。いつか きっと これ だって ひと が あらわれる と おもう よ。",
        romaji: "Ma, sono uchi, mata gōkon aru ja nai. Itsuka kitto kore datte hito ga arawareru to omou yo.",
        english: "Well, there'll be another group date soon. I'm sure someday the right person will show up.",
        vietnamese: "Thôi, sẽ có buổi hẹn hò nhóm khác mà. Chắc chắn sẽ có ngày gặp được người đúng.",
        acceptedAnswers: ["ま、そのうち、また合コンあるじゃない。いつかきっとこれだって人が現れると思うよ。", "ま、そのうち、またごうこんあるじゃない。いつかきっとこれだってひとがあらわれるとおもうよ。"]
      },
      {
        id: 10,
        speaker: "B",
        japanese: "そうだね、「下手な鉄砲数撃ちゃ当たる」って言うしね。",
        reading: "そう だ ね、「へた な てっぽう かずうちゃ あたる」って いう し ね。",
        romaji: "Sō da ne, 'heta na teppō kazuuchya ataru' tte iu shi ne.",
        english: "Right, as they say 'keep shooting and you'll eventually hit'.",
        vietnamese: "Đúng nhỉ, có câu 'bắn nhiều thì trúng'.",
        acceptedAnswers: ["そうだね、「下手な鉄砲数撃ちゃ当たる」って言うしね。", "そうだね、「へたなてっぽうかずうちゃあたる」っていうしね。"]
      },
      {
        id: 11,
        speaker: "B",
        japanese: "ところで、由美のほうはどう？うわさの彼とは上手くいってるの？",
        reading: "ところ で、ゆみ の ほう は どう？うわさ の かれ と は うまく いってる の？",
        romaji: "Tokoro de, Yumi no hō wa dō? Uwasa no kare to wa umaku itteru no?",
        english: "By the way, how about you Yumi? How's it going with the guy everyone's talking about?",
        vietnamese: "Nhân tiện, Yumi thì sao? Chuyện với anh chàng mọi người đồn có ổn không?",
        acceptedAnswers: ["ところで、由美のほうはどう？うわさの彼とは上手くいってるの？", "ところで、ゆみのほうはどう？うわさのかれとはうまくいってるの？"]
      },
      {
        id: 12,
        speaker: "A",
        japanese: "えっ、どうって。まー、ぼちぼち、かな。",
        reading: "えっ、どう って。まー、ぼちぼち、かな。",
        romaji: "E, dō tte. Mā, bochibochi, kana.",
        english: "Hm, what can I say. Well, so-so I guess.",
        vietnamese: "Ừ, biết nói sao. Thì, tạm được thôi.",
        acceptedAnswers: ["えっ、どうって。まー、ぼちぼち、かな。", "えっ、どうって。まー、ぼちぼち、かな。"]
      },
      {
        id: 13,
        speaker: "B",
        japanese: "ぼちぼちって？",
        reading: "ぼちぼち って？",
        romaji: "Bochibochi tte?",
        english: "So-so?",
        vietnamese: "Tạm được là sao?",
        acceptedAnswers: ["ぼちぼちって？", "ぼちぼちって？"]
      },
      {
        id: 14,
        speaker: "A",
        japanese: "まあまあ上手くいってるってこと。でもね、実はこの間、彼にプロポーズされたんだ。",
        reading: "まあまあ うまく いってる って こと。でも ね、じつ は この まえ、かれ に ぷろぽーず された ん だ。",
        romaji: "Māmā umaku itteru tte koto. Demo ne, jitsu wa kono mae, kare ni puropōzu sareran da.",
        english: "It means it's going pretty well. But actually, he proposed to me the other day.",
        vietnamese: "Tức là cũng ổn đó. Nhưng thực ra, hôm trước anh ấy đã cầu hôn tôi.",
        acceptedAnswers: ["まあまあ上手くいってるってこと。でもね、実はこの間、彼にプロポーズされたんだ。", "まあまあうまくいってるってこと。でもね、じつはこのまえ、かれにぷろぽーずされたんだ。"]
      },
      {
        id: 15,
        speaker: "B",
        japanese: "えー、すごい。やったじゃない！　で、なんて言われたの？",
        reading: "えー、すごい。やった じゃ ない！で、なんて いわれた の？",
        romaji: "Ē, sugoi. Yatta ja nai! De, nante iwareta no?",
        english: "Wow, amazing! Good for you! So what did he say?",
        vietnamese: "Ồ, tuyệt! Giỏi quá! Vậy anh ấy nói gì?",
        acceptedAnswers: ["えー、すごい。やったじゃない！　で、なんて言われたの？", "えー、すごい。やったじゃない！で、なんていわれたの？"]
      },
      {
        id: 16,
        speaker: "A",
        japanese: "それがね、フフフ…。",
        reading: "それ が ね、ふふふ…。",
        romaji: "Sore ga ne, fufufu….",
        english: "Well, hehe…",
        vietnamese: "Thế mà, hehe…",
        acceptedAnswers: ["それがね、フフフ…。", "それがね、ふふふ…。"]
      },
      {
        id: 17,
        speaker: "B",
        japanese: "え、何？",
        reading: "え、なに？",
        romaji: "E, nani?",
        english: "What? Tell me!",
        vietnamese: "Gì vậy?",
        acceptedAnswers: ["え、何？", "え、なに？"]
      },
      {
        id: 18,
        speaker: "A",
        japanese: "この間、神社の前を通りかかったら、ちょうど結婚式をやってて、白無垢姿のお嫁さんが見えたの。",
        reading: "この まえ、じんじゃ の まえ を とおりかかったら、ちょうど けっこんしき を やってて、しろむく すがた の およめ さん が みえた の。",
        romaji: "Kono mae, jinja no mae o tōrikakattara, chōdo kekkon-shiki o yattete, shiro-muku sugata no o-yome-san ga mieta no.",
        english: "The other day when we were passing by a shrine, a wedding was happening and we could see a bride in a white kimono.",
        vietnamese: "Hôm trước khi đi ngang qua đền thờ, đúng lúc có đám cưới, nhìn thấy cô dâu mặc áo trắng truyền thống.",
        acceptedAnswers: ["この間、神社の前を通りかかったら、ちょうど結婚式をやってて、白無垢姿のお嫁さんが見えたの。", "このまえ、じんじゃのまえをとおりかかったら、ちょうどけっこんしきをやってて、しろむくすがたのおよめさんがみえたの。"]
      },
      {
        id: 19,
        speaker: "A",
        japanese: "そしたら、彼が「あれ、着てみない？」って急に言い出して…。私、びっくりしちゃった。",
        reading: "そしたら、かれ が「あれ、きてみない？」って きゅう に いいだして…。わたし、びっくりしちゃった。",
        romaji: "Soshitara, kare ga 'are, kite minai?' tte kyū ni ii dashite…. Watashi, bikkuri shichatta.",
        english: "Then he suddenly said 'hey, want to try wearing that?'… I was shocked.",
        vietnamese: "Rồi anh ấy đột nhiên nói 'cái đó, thử mặc xem không?'… Tôi bật ngửa.",
        acceptedAnswers: ["そしたら、彼が「あれ、着てみない？」って急に言い出して…。私、びっくりしちゃった。", "そしたら、かれが「あれ、きてみない？」ってきゅうにいいだして…。わたし、びっくりしちゃった。"]
      },
      {
        id: 20,
        speaker: "B",
        japanese: "それってプロポーズなの？　彼ってシャイなんだね。",
        reading: "それって ぷろぽーず な の？かれ って しゃい な ん だ ね。",
        romaji: "Sore tte puropōzu na no? Kare tte shai nan da ne.",
        english: "That was a proposal? He's shy, isn't he.",
        vietnamese: "Đó là lời cầu hôn ư? Anh ấy nhút nhát nhỉ.",
        acceptedAnswers: ["それってプロポーズなの？　彼ってシャイなんだね。", "それってぷろぽーずなの？かれってしゃいなんだね。"]
      },
      {
        id: 21,
        speaker: "A",
        japanese: "うん、そうなの。でも、もっと気の利いたこと言ってほしいよね。",
        reading: "うん、そう な の。でも、もっと き の きいた こと いって ほしい よ ね。",
        romaji: "Un, sō na no. Demo, motto ki no kiita koto itte hoshii yo ne.",
        english: "Yeah, that's the thing. But I wish he'd say something more thoughtful.",
        vietnamese: "Ừ, đúng vậy. Nhưng mà muốn anh ấy nói điều gì tinh tế hơn thì tốt.",
        acceptedAnswers: ["うん、そうなの。でも、もっと気の利いたこと言ってほしいよね。", "うん、そうなの。でも、もっときのきいたこといってほしいよね。"]
      },
      {
        id: 22,
        speaker: "B",
        japanese: "まー、いいじゃない。贅沢言わないの！　で、由美、何て答えたの？",
        reading: "まー、いい じゃ ない。ぜいたく いわ ない の！で、ゆみ、なんて こたえた の？",
        romaji: "Mā, ii ja nai. Zeitaku iwanai no! De, Yumi, nante kotaeta no?",
        english: "Come on, that's fine! Don't be greedy! So Yumi, what did you answer?",
        vietnamese: "Thôi mà, vậy là được rồi. Đừng đòi hỏi nhiều! Vậy Yumi trả lời gì?",
        acceptedAnswers: ["まー、いいじゃない。贅沢言わないの！　で、由美、何て答えたの？", "まー、いいじゃない。ぜいたくいわないの！で、ゆみ、なんてこたえたの？"]
      },
      {
        id: 23,
        speaker: "A",
        japanese: "「私はウェディングドレスのほうがいいんだけどな…」って答えたんだけどね。",
        reading: "「わたし は うぇでぃんぐ どれす の ほう が いい ん だ けど な…」って こたえた ん だ けど ね。",
        romaji: "'Watashi wa wedingu doresu no hō ga iin da kedo na…' tte kotaetan da kedo ne.",
        english: "I said 'I'd actually prefer a wedding dress…'",
        vietnamese: "Tôi trả lời 'Tôi thích váy cưới hơn cơ…'",
        acceptedAnswers: ["「私はウェディングドレスのほうがいいんだけどな…」って答えたんだけどね。", "「わたしはうぇでぃんぐどれすのほうがいいんだけどな…」ってこたえたんだけどね。"]
      },
      {
        id: 24,
        speaker: "B",
        japanese: "へー、で、彼は何て？",
        reading: "へー、で、かれ は なんて？",
        romaji: "Hē, de, kare wa nante?",
        english: "Oh? And what did he say?",
        vietnamese: "Ồ vậy ư, rồi anh ấy nói gì?",
        acceptedAnswers: ["へー、で、彼は何て？", "へー、で、かれはなんて？"]
      },
      {
        id: 25,
        speaker: "A",
        japanese: "「君がウェディングドレスがいいなら、僕もタキシードにするよ」だって。",
        reading: "「きみ が うぇでぃんぐ どれす が いい なら、ぼく も たきしーど に する よ」だって。",
        romaji: "'Kimi ga wedingu doresu ga ii nara, boku mo takishīdo ni suru yo' datte.",
        english: "He said 'If you want a wedding dress, then I'll wear a tuxedo too.'",
        vietnamese: "Anh ấy nói 'Nếu em muốn mặc váy cưới thì anh cũng sẽ mặc tuxedo.'",
        acceptedAnswers: ["「君がウェディングドレスがいいなら、僕もタキシードにするよ」だって。", "「きみがうぇでぃんぐどれすがいいなら、ぼくもたきしーどにするよ」だって。"]
      },
      {
        id: 26,
        speaker: "B",
        japanese: "ふーん、そうなんだ。じゃ、プロポーズ成立ってわけか。",
        reading: "ふーん、そう なん だ。じゃ、ぷろぽーず せいりつ って わけ か。",
        romaji: "Fūn, sō nan da. Ja, puropōzu seiritsu tte wake ka.",
        english: "Hmm, I see. So the proposal went through then.",
        vietnamese: "Ừm, vậy ư. Vậy là cầu hôn thành công rồi.",
        acceptedAnswers: ["ふーん、そうなんだ。じゃ、プロポーズ成立ってわけか。", "ふーん、そうなんだ。じゃ、ぷろぽーずせいりつってわけか。"]
      }
    ]
  },
  {
    id: "lesson15_3",
    level: "N3",
    lesson: "Lesson 15",
    title: "野球観戦",
    description: "Two fans watch their team's final at-bat in the 9th inning and leave disappointed after a strikeout.",
    lines: [
      {
        id: 1,
        // stadium announcer sets the scene
        speaker: "アナウンス",
        japanese: "ブルータイガースとホワイトソックス、３対２、９回の裏、ホワイトソックスの攻撃。ピッチャー振りかぶって、第一球投げたー！バッター空振り三振。",
        reading: "ぶるーたいがーす と ほわいとそっくす、さんたいに、きゅうかい の うら、ほわいとそっくす の こうげき。ぴっちゃー ふりかぶって、だいいっきゅう なげたー！ばったー からぶり さんしん。",
        romaji: "Burū Taigāsu to Howaito Sokkusu, san tai ni, kyū-kai no ura, Howaito Sokkusu no kōgeki. Picchā furikabute, daiikkyū nagetā! Battā karaburi sanshin.",
        english: "Blue Tigers vs White Sox, 3 to 2, bottom of the 9th, White Sox batting. The pitcher winds up and throws the first pitch — batter swings and misses, strikeout!",
        vietnamese: "Blue Tigers đấu White Sox, 3-2, hiệp 9 phần dưới, White Sox tấn công. Pitcher vung tay ném bóng đầu tiên — Batter vung gậy trượt, ba lần out!",
        acceptedAnswers: ["ブルータイガースとホワイトソックス、３対２、９回の裏、ホワイトソックスの攻撃。ピッチャー振りかぶって、第一球投げたー！バッター空振り三振。", "ぶるーたいがーすとほわいとそっくす、さんたいに、きゅうかいのうら、ほわいとそっくすのこうげき。ぴっちゃーふりかぶって、だいいっきゅうなげたー！ばたーからぶりさんしん。"]
      },
      {
        id: 2,
        speaker: "A",
        japanese: "もう、あのバッターなんだっけ？　そうだ、松田だよ！　おい、ちゃんと球見ろよ！　早く引っ込め、こら。",
        reading: "もう、あの ばったー なんだっけ？そうだ、まつだ だよ！おい、ちゃんと たま みろ よ！はやく ひっこめ、こら。",
        romaji: "Mō, ano battā nan dakke? Sō da, Matsuda da yo! Oi, chanto tama miro yo! Hayaku hikkoMe, kora.",
        english: "Ugh, what's that batter's name again? Right, it's Matsuda! Hey, watch the ball properly! Get off the field, you!",
        vietnamese: "Thôi, cái tay đánh bóng đó tên gì nhỉ? À đúng rồi, Matsuda đó! Ê, nhìn bóng đúng cách đi! Vào trong đi, trời ạ.",
        acceptedAnswers: ["もう、あのバッターなんだっけ？　そうだ、松田だよ！　おい、ちゃんと球見ろよ！　早く引っ込め、こら。", "もう、あのばったーなんだっけ？そうだ、まつだだよ！おい、ちゃんとたまみろよ！はやくひっこめ、こら。"]
      },
      {
        id: 3,
        speaker: "B",
        japanese: "そうそうだ。野球なんてやめちまえ。ツーアウトだぞ。もう後がないぞー。",
        reading: "そうそう だ。やきゅう なんて やめちまえ。つーあうと だぞ。もう あと が ない ぞー。",
        romaji: "Sō sō da. Yakyū nante yamechimae. Tsū auto da zo. Mō ato ga nai zō.",
        english: "Exactly. Just quit baseball already. Two outs! There's no room for error now.",
        vietnamese: "Đúng vậy. Bỏ bóng chày đi cho rồi. Hai out rồi đó. Không còn cơ hội nữa.",
        acceptedAnswers: ["そうそうだ。野球なんてやめちまえ。ツーアウトだぞ。もう後がないぞー。", "そうそうだ。やきゅうなんてやめちまえ。つーあうとだぞ。もうあとがないぞー。"]
      },
      {
        id: 4,
        speaker: "A",
        japanese: "お、次は清川か。あいつは今調子がいいから、頼むぞー、打ってくれ。かっ飛ばせー、清川！　フレー、フレー、ホワイトソックス！",
        reading: "お、つぎ は きよかわ か。あいつ は いま ちょうし が いい から、たのむ ぞー、うってくれ。かっとばせー、きよかわ！ふれー、ふれー、ほわいとそっくす！",
        romaji: "O, tsugi wa Kiyokawa ka. Aitsu wa ima chōshi ga ii kara, tanomu zō, utte kure. Kattobase, Kiyokawa! Furē, furē, Howaito Sokkusu!",
        english: "Oh, next up is Kiyokawa. He's in good form lately, so come on, hit it! Smash it, Kiyokawa! Go, go, White Sox!",
        vietnamese: "Ồ, tiếp theo là Kiyokawa. Dạo này anh ấy đang trong phong độ tốt, cố lên, đánh đi. Đánh mạnh vào, Kiyokawa! Cổ vũ nào, White Sox!",
        acceptedAnswers: ["お、次は清川か。あいつは今調子がいいから、頼むぞー、打ってくれ。かっ飛ばせー、清川！　フレー、フレー、ホワイトソックス！", "お、つぎはきよかわか。あいつはいまちょうしがいいから、たのむぞー、うってくれ。かっとばせー、きよかわ！ふれー、ふれー、ほわいとそっくす！"]
      },
      {
        id: 5,
        speaker: "B",
        japanese: "あと一点で同点か。打て打て、清川！　あんなへなちょこピッチャー、こてんぱんにやっちまえ！　おっ、打った打った！　伸びてる。入るかー？",
        reading: "あと いってん で どうてん か。うて うて、きよかわ！あんな へなちょこ ぴっちゃー、こてんぱん に やっちまえ！おっ、うった うった！のびてる。はいる かー？",
        romaji: "Ato itten de dōten ka. Ute ute, Kiyokawa! Anna henachoko picchā, kotenpan ni yacchimae! O, utta utta! Nobitera. Hairu kā?",
        english: "One more run and we tie it up. Hit it, Kiyokawa! Destroy that lousy pitcher! Oh, he hit it, he hit it! It's going… will it go in?",
        vietnamese: "Thêm một điểm là hòa rồi. Đánh đi, Kiyokawa! Đánh bại cái tay pitcher tệ hại đó đi! Ồ, đánh rồi, đánh rồi! Bóng đang bay… vào không?",
        acceptedAnswers: ["あと一点で同点か。打て打て、清川！　あんなへなちょこピッチャー、こてんぱんにやっちまえ！　おっ、打った打った！　伸びてる。入るかー？", "あといってんでどうてんか。うてうて、きよかわ！あんなへなちょこぴっちゃー、こてんぱんにやっちまえ！おっ、うったうった！のびてる。はいるかー？"]
      },
      {
        id: 6,
        speaker: "A",
        japanese: "あー、おしいなー。ファールか。次はちゃーんと球見ていけ。",
        reading: "あー、おしい なー。ふぁーる か。つぎ は ちゃーんと たま みて いけ。",
        romaji: "Ā, oshii nā. Fāru ka. Tsugi wa chānto tama mite ike.",
        english: "Aah, so close! A foul? Next time watch the ball properly.",
        vietnamese: "Tiếc quá. Bóng foul ư? Lần sau nhìn bóng kỹ vào.",
        acceptedAnswers: ["あー、おしいなー。ファールか。次はちゃーんと球見ていけ。", "あー、おしいなー。ふぁーるか。つぎはちゃーんとたまみていけ。"]
      },
      {
        id: 7,
        speaker: "B",
        japanese: "次はどうだ？　おー、落ちついて打ってくれよ。",
        reading: "つぎ は どう だ？おー、おちついて うって くれ よ。",
        romaji: "Tsugi wa dō da? Ō, ochitsuite utte kure yo.",
        english: "How about this one? Oh, stay calm and hit it.",
        vietnamese: "Lần này sao rồi? Ồ, bình tĩnh lại và đánh đi.",
        acceptedAnswers: ["次はどうだ？　おー、落ちついて打ってくれよ。", "つぎはどうだ？おー、おちついてうってくれよ。"]
      },
      {
        id: 8,
        speaker: "A",
        japanese: "そうだ。やれっ、やれっ！　またファールか。もっとバットの芯に当てないと。",
        reading: "そう だ。やれっ、やれっ！また ふぁーる か。もっと ばっと の しん に あてない と。",
        romaji: "Sō da. Yare, yare! Mata fāru ka. Motto batto no shin ni atenai to.",
        english: "That's it, go, go! Another foul? You have to hit it with the sweet spot of the bat.",
        vietnamese: "Đúng rồi. Đánh đi, đánh đi! Foul nữa rồi. Phải đánh đúng tâm gậy mới được.",
        acceptedAnswers: ["そうだ。やれっ、やれっ！　またファールか。もっとバットの芯に当てないと。", "そうだ。やれっ、やれっ！またふぁーるか。もっとばっとのしんにあてないと。"]
      },
      {
        id: 9,
        speaker: "B",
        japanese: "ピッチャーも今日はコントロールがさえてるし。",
        reading: "ぴっちゃー も きょう は こんとろーる が さえてる し。",
        romaji: "Picchā mo kyō wa kontorōru ga saeteru shi.",
        english: "And the pitcher's control is sharp today too.",
        vietnamese: "Pitcher hôm nay kiểm soát bóng cũng tốt nữa.",
        acceptedAnswers: ["ピッチャーも今日はコントロールがさえてるし。", "ぴっちゃーもきょうはこんとろーるがさえてるし。"]
      },
      {
        id: 10,
        speaker: "A",
        japanese: "あー。ツーストライクか。追い込まれたなー。",
        reading: "あー。つーすとらいく か。おいこまれた なー。",
        romaji: "Ā. Tsū sutoraiku ka. Oikomareta nā.",
        english: "Ugh. Two strikes. He's in a tough spot.",
        vietnamese: "Ugh. Hai strike rồi. Đang bị dồn vào chân tường.",
        acceptedAnswers: ["あー。ツーストライクか。追い込まれたなー。", "あー。つーすとらいくか。おいこまれたなー。"]
      },
      {
        id: 11,
        speaker: "B",
        japanese: "はあ〜、なんだよ。見逃しの三振か、まったく情けないな。",
        reading: "はあ〜、なんだ よ。みのがし の さんしん か、まったく なさけない な。",
        romaji: "Hā~, nan da yo. Minogashi no sanshin ka, mattaku nasakenai na.",
        english: "Haah, come on. Called strikeout? That's just pathetic.",
        vietnamese: "Ugh, thế là sao. Bị đánh ba lần out vì không đánh ư, thật đáng xấu hổ.",
        acceptedAnswers: ["はあ〜、なんだよ。見逃しの三振か、まったく情けないな。", "はあ〜、なんだよ。みのがしのさんしんか、まったくなさけないな。"]
      },
      {
        id: 12,
        speaker: "A",
        japanese: "肝心な時に打てないんじゃ、だめだな、あれは。また負けたよ。",
        reading: "かんじん な とき に うてない ん じゃ、だめ だ な、あれ は。また まけた よ。",
        romaji: "Kanjin na toki ni utenain ja, dame da na, are wa. Mata maketa yo.",
        english: "If you can't hit when it counts, you're hopeless. We lost again.",
        vietnamese: "Nếu không đánh được khi quan trọng thì vô dụng thật. Thua nữa rồi.",
        acceptedAnswers: ["肝心な時に打てないんじゃ、だめだな、あれは。また負けたよ。", "かんじんなときにうてないんじゃ、だめだな、あれは。またまけたよ。"]
      },
      {
        id: 13,
        speaker: "B",
        japanese: "こんな調子じゃ、優勝なんて夢のまた夢だな。",
        reading: "こんな ちょうし じゃ、ゆうしょう なんて ゆめ の また ゆめ だ な。",
        romaji: "Konna chōshi ja, yūshō nante yume no mata yume da na.",
        english: "At this rate, winning the championship is a pipe dream.",
        vietnamese: "Kiểu này thì vô địch chỉ là mơ thôi.",
        acceptedAnswers: ["こんな調子じゃ、優勝なんて夢のまた夢だな。", "こんなちょうしじゃ、ゆうしょうなんてゆめのまたゆめだな。"]
      },
      {
        id: 14,
        speaker: "B",
        japanese: "いつになったらうまいビールが飲めるんだよ、まったく。",
        reading: "いつ に なったら うまい びーる が のめる ん だ よ、まったく。",
        romaji: "Itsu ni nattara umai bīru ga nomeru n da yo, mattaku.",
        english: "When will I ever get to enjoy a cold victory beer, seriously.",
        vietnamese: "Bao giờ mới được uống bia ăn mừng đây, thật sự.",
        acceptedAnswers: ["いつになったらうまいビールが飲めるんだよ、まったく。", "いつになったらうまいびーるがのめるんだよ、まったく。"]
      },
      {
        id: 15,
        speaker: "A",
        japanese: "も、帰ろ帰ろ。",
        reading: "も、かえろ かえろ。",
        romaji: "Mo, kaero kaero.",
        english: "Alright, let's just go home.",
        vietnamese: "Thôi, về thôi về thôi.",
        acceptedAnswers: ["も、帰ろ帰ろ。", "も、かえろかえろ。"]
      }
    ]
  },
  {
    id: "lesson15_4",
    level: "N3",
    lesson: "Lesson 15",
    title: "上司と部下",
    description: "A manager asks a subordinate to attend a business dinner — it turns out his grandfather is the VIP client's president.",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese: "山田君、ちょっと、今いいかな。",
        reading: "やまだ くん、ちょっと、いま いい かな。",
        romaji: "Yamada-kun, chotto, ima ii kana.",
        english: "Yamada, do you have a moment?",
        vietnamese: "Yamada, bận không, cho mình hỏi chút?",
        acceptedAnswers: ["山田君、ちょっと、今いいかな。", "やまだくん、ちょっと、いまいいかな。"]
      },
      {
        id: 2,
        speaker: "B",
        japanese: "はい、部長。",
        reading: "はい、ぶちょう。",
        romaji: "Hai, buchō.",
        english: "Yes, Manager.",
        vietnamese: "Vâng, thưa Trưởng phòng.",
        acceptedAnswers: ["はい、部長。", "はい、ぶちょう。"]
      },
      {
        id: 3,
        speaker: "A",
        japanese: "急で悪いんだけど、山田君に頼みたいことがあるんだよ。",
        reading: "きゅう で わるい ん だ けど、やまだ くん に たのみ たい こと が ある ん だ よ。",
        romaji: "Kyū de waruin da kedo, Yamada-kun ni tanomitai koto ga aru n da yo.",
        english: "Sorry for the short notice, but there's something I'd like to ask of you.",
        vietnamese: "Xin lỗi vì đột ngột, nhưng mình có việc muốn nhờ bạn.",
        acceptedAnswers: ["急で悪いんだけど、山田君に頼みたいことがあるんだよ。", "きゅうでわるいんだけど、やまだくんにたのみたいことがあるんだよ。"]
      },
      {
        id: 4,
        speaker: "B",
        japanese: "はい、どのようなことでしょうか。",
        reading: "はい、どの よう な こと でしょう か。",
        romaji: "Hai, dono yō na koto deshō ka.",
        english: "Of course, what is it?",
        vietnamese: "Vâng, đó là việc gì ạ?",
        acceptedAnswers: ["はい、どのようなことでしょうか。", "はい、どのようなことでしょうか。"]
      },
      {
        id: 5,
        speaker: "A",
        japanese: "うちの九州地区のお得意様のＫＢＢ電機さんの接待の件なんだけどね…。",
        reading: "うち の きゅうしゅう ちく の おとくいさま の けーびーびー でんき さん の せったい の けん なん だ けど ね…。",
        romaji: "Uchi no Kyūshū chiku no otokuisama no KBB Denki-san no settai no ken nan da kedo ne….",
        english: "It's about entertaining KBB Electronics, one of our key clients in the Kyushu region…",
        vietnamese: "Là về việc tiếp đãi KBB Electronics, khách hàng quan trọng của chúng ta ở khu vực Kyushu…",
        acceptedAnswers: ["うちの九州地区のお得意様のＫＢＢ電機さんの接待の件なんだけどね…。", "うちのきゅうしゅうちくのおとくいさまのけーびーびーでんきさんのせったいのけんなんだけどね…。"]
      },
      {
        id: 6,
        speaker: "B",
        japanese: "あ、はい。",
        reading: "あ、はい。",
        romaji: "A, hai.",
        english: "Ah, yes.",
        vietnamese: "À, vâng.",
        acceptedAnswers: ["あ、はい。", "あ、はい。"]
      },
      {
        id: 7,
        speaker: "A",
        japanese: "うちの社長にうかがったんだけど、山田君はＫＢＢ電機さんの社長のお孫さんなんだって？",
        reading: "うち の しゃちょう に うかがった ん だ けど、やまだ くん は けーびーびー でんき さん の しゃちょう の おまごさん なん だって？",
        romaji: "Uchi no shachō ni ukagattan da kedo, Yamada-kun wa KBB Denki-san no shachō no omagosan nan datte?",
        english: "I heard from our president that you're the grandson of KBB Electronics' president?",
        vietnamese: "Mình nghe Giám đốc nói, bạn là cháu của Giám đốc KBB Electronics phải không?",
        acceptedAnswers: ["うちの社長にうかがったんだけど、山田君はＫＢＢ電機さんの社長のお孫さんなんだって？", "うちのしゃちょうにうかがったんだけど、やまだくんはけーびーびーでんきさんのしゃちょうのおまごさんなんだって？"]
      },
      {
        id: 8,
        speaker: "B",
        japanese: "はい…。私の母方の祖父ですが…。",
        reading: "はい…。わたし の ははかた の そふ です が…。",
        romaji: "Hai…. Watashi no hahakata no sofu desu ga….",
        english: "Yes… He's my mother's father…",
        vietnamese: "Vâng… Đó là ông ngoại của tôi…",
        acceptedAnswers: ["はい…。私の母方の祖父ですが…。", "はい…。わたしのははかたのそふですが…。"]
      },
      {
        id: 9,
        speaker: "A",
        japanese: "いや〜、知らなかったよー。",
        reading: "いや〜、しらなかった よー。",
        romaji: "Iyā, shiranakatta yō.",
        english: "Wow, I had no idea.",
        vietnamese: "Ồ, mình không biết đấy.",
        acceptedAnswers: ["いや〜、知らなかったよー。", "いや〜、しらなかったよー。"]
      },
      {
        id: 10,
        speaker: "A",
        japanese: "ところで、実は、今週の金曜日にＫＢＢ電機さんの社長とうちの社長が会食をする予定になっていてね。",
        reading: "ところ で、じつ は、こんしゅう の きんようび に けーびーびー でんき さん の しゃちょう と うち の しゃちょう が かいしょく を する よてい に なってい て ね。",
        romaji: "Tokoro de, jitsu wa, konshū no kin'yōbi ni KBB Denki-san no shachō to uchi no shachō ga kaishoku o suru yotei ni natte ite ne.",
        english: "By the way, it turns out this Friday, the president of KBB Electronics and our president are scheduled to have a dinner together.",
        vietnamese: "Nhân tiện, thực ra thứ Sáu tuần này, Giám đốc KBB Electronics và Giám đốc của chúng ta dự định ăn tối cùng nhau.",
        acceptedAnswers: ["ところで、実は、今週の金曜日にＫＢＢ電機さんの社長とうちの社長が会食をする予定になっていてね。", "ところで、じつは、こんしゅうのきんようびにけーびーびーでんきさんのしゃちょうとうちのしゃちょうがかいしょくをするよていになっていてね。"]
      },
      {
        id: 11,
        speaker: "B",
        japanese: "あ、そうなんですか。",
        reading: "あ、そう なん です か。",
        romaji: "A, sō nan desu ka.",
        english: "Oh, is that right?",
        vietnamese: "À, vậy ạ.",
        acceptedAnswers: ["あ、そうなんですか。", "あ、そうなんですか。"]
      },
      {
        id: 12,
        speaker: "A",
        japanese: "それで、せっかくだから、会食の時に山田君にも出席してもらったらどかとうちの社長がおっしゃるんだよ。",
        reading: "それ で、せっかく だ から、かいしょく の とき に やまだ くん に も しゅっせき して もらったら どう か と うち の しゃちょう が おっしゃる ん だ よ。",
        romaji: "Sore de, sekkaku dakara, kaishoku no toki ni Yamada-kun ni mo shusseki shite morattara dō ka to uchi no shachō ga ossharu n da yo.",
        english: "So since it's a rare opportunity, our president is suggesting that you also attend the dinner.",
        vietnamese: "Vì vậy, nhân cơ hội hiếm có này, Giám đốc của chúng ta đề nghị bạn cũng tham dự bữa ăn.",
        acceptedAnswers: ["それで、せっかくだから、会食の時に山田君にも出席してもらったらどかとうちの社長がおっしゃるんだよ。", "それで、せっかくだから、かいしょくのときにやまだくんにもしゅっせきしてもらったらどうかとうちのしゃちょうがおっしゃるんだよ。"]
      },
      {
        id: 13,
        speaker: "B",
        japanese: "私がですか？",
        reading: "わたし が です か？",
        romaji: "Watashi ga desu ka?",
        english: "Me?",
        vietnamese: "Tôi ạ?",
        acceptedAnswers: ["私がですか？", "わたしがですか？"]
      },
      {
        id: 14,
        speaker: "A",
        japanese: "うん、ＫＢＢ電機さんの社長はめったに上京なさらないそうだし…、山田君とも久しぶりにお会いになりたいんじゃないかな？",
        reading: "うん、けーびーびー でんき さん の しゃちょう は めったに じょうきょう なさらない そう だ し…、やまだ くん とも ひさしぶり に おあい に なりたい ん じゃ ない かな？",
        romaji: "Un, KBB Denki-san no shachō wa metta ni jōkyō nasaranai sō da shi…, Yamada-kun to mo hisashiburi ni o-ai ni naritain ja nai kana?",
        english: "Well, apparently the KBB Electronics president rarely comes to Tokyo… and he probably wants to see you again after so long, don't you think?",
        vietnamese: "Ừ, nghe nói Giám đốc KBB Electronics hiếm khi lên Tokyo lắm… và chắc ông ấy muốn gặp lại bạn sau bao lâu nhỉ?",
        acceptedAnswers: ["うん、ＫＢＢ電機さんの社長はめったに上京なさらないそうだし…、山田君とも久しぶりにお会いになりたいんじゃないかな？", "うん、けーびーびーでんきさんのしゃちょうはめったにじょうきょうなさらないそうだし…、やまだくんともひさしぶりにおあいになりたいんじゃないかな？"]
      },
      {
        id: 15,
        speaker: "B",
        japanese: "はあ…。しかし、部長、こんなことを申し上げては何ですが、祖父には仕事とプライベートを混同してはいけないといつも言われていますが…。",
        reading: "はあ…。しかし、ぶちょう、こんな こと を もうしあげては なん です が、そふ に は しごと と ぷらいべーと を こんどう してはいけない と いつも いわれていますが…。",
        romaji: "Hā…. Shikashi, buchō, konna koto o mōshiagete wa nan desu ga, sofu ni wa shigoto to puraibēto o kondō shite wa ikenai to itsumo iwareteimasu ga….",
        english: "Hmm… However, Manager, I'm sorry to say this, but my grandfather always tells me never to mix work and personal life…",
        vietnamese: "Ừm… Tuy nhiên, thưa Trưởng phòng, tôi xin lỗi khi nói điều này, nhưng ông nội luôn dặn tôi không được trộn lẫn công việc và đời tư…",
        acceptedAnswers: ["はあ…。しかし、部長、こんなことを申し上げては何ですが、祖父には仕事とプライベートを混同してはいけないといつも言われていますが…。", "はあ…。しかし、ぶちょう、こんなことをもうしあげてはなんですが、そふにはしごととぷらいべーとをこんどうしてはいけないといつもいわれていますが…。"]
      },
      {
        id: 16,
        speaker: "A",
        japanese: "あー、それは十分承知してるんだが、まあ今回は特別ということで。",
        reading: "あー、それ は じゅうぶん しょうち してる ん だ が、まあ こんかい は とくべつ と いう こと で。",
        romaji: "Ā, sore wa jūbun shōchi shiterun da ga, mā konkai wa tokubetsu to iu koto de.",
        english: "Yes, I fully understand that, but let's just say this occasion is special.",
        vietnamese: "À, mình hiểu điều đó, nhưng cứ coi lần này là trường hợp đặc biệt.",
        acceptedAnswers: ["あー、それは十分承知してるんだが、まあ今回は特別ということで。", "あー、それはじゅうぶんしょうちしてるんだが、まあこんかいはとくべつということで。"]
      },
      {
        id: 17,
        speaker: "B",
        japanese: "わかりました。それでは、お言葉に甘えて出席させていただきます。",
        reading: "わかりました。それ では、おことば に あまえて しゅっせき させて いただきます。",
        romaji: "Wakarimashita. Sore de wa, o-kotoba ni amaete shusseki sasete itadakimasu.",
        english: "Understood. In that case, I'll take you up on your kind offer and attend.",
        vietnamese: "Tôi hiểu rồi. Vậy thì tôi xin nhận lời và tham dự.",
        acceptedAnswers: ["わかりました。それでは、お言葉に甘えて出席させていただきます。", "わかりました。それでは、おことばにあまえてしゅっせきさせていただきます。"]
      },
      {
        id: 18,
        speaker: "A",
        japanese: "頼むよ。何てったって、うちの社長のご提案なんだからね。",
        reading: "たのむ よ。なんてったって、うち の しゃちょう の ごていあん なん だ から ね。",
        romaji: "Tanomu yo. Nantettatte, uchi no shachō no go-teian nan dakara ne.",
        english: "I'm counting on you. After all, it's our president's idea.",
        vietnamese: "Nhờ bạn nhé. Dù sao đây cũng là đề xuất của Giám đốc chúng ta.",
        acceptedAnswers: ["頼むよ。何てったって、うちの社長のご提案なんだからね。", "たのむよ。なんてったって、うちのしゃちょうのごていあんなんだからね。"]
      },
      {
        id: 19,
        speaker: "B",
        japanese: "光栄です。では、祖父にはサプライズということにして…。",
        reading: "こうえい です。では、そふ に は さぷらいず と いう こと に して…。",
        romaji: "Kōei desu. De wa, sofu ni wa sapuraizu to iu koto ni shite….",
        english: "It's an honor. Then let's make it a surprise for my grandfather…",
        vietnamese: "Đó là vinh dự. Vậy thì để làm bất ngờ cho ông ngoại…",
        acceptedAnswers: ["光栄です。では、祖父にはサプライズということにして…。", "こうえいです。では、そふにはさぷらいずということにして…。"]
      },
      {
        id: 20,
        speaker: "A",
        japanese: "うん。ところで、お祖父様はどんなものがお好きなのかな？",
        reading: "うん。ところ で、おじいさま は どんな もの が おすき な の かな？",
        romaji: "Un. Tokoro de, o-jii-sama wa donna mono ga o-suki na no kana?",
        english: "Right. By the way, what kind of things does your grandfather like?",
        vietnamese: "Ừ. Nhân tiện, ông ngoại bạn thích những gì?",
        acceptedAnswers: ["うん。ところで、お祖父様はどんなものがお好きなのかな？", "うん。ところで、おじいさまはどんなものがおすきなのかな？"]
      },
      {
        id: 21,
        speaker: "B",
        japanese: "そうですねー。祖父は「今十」の牛肉が好きで、母がよく送ったりしてますけど…。",
        reading: "そう です ねー。そふ は「いまじゅう」の ぎゅうにく が すき で、はは が よく おくったり してます けど…。",
        romaji: "Sō desu nē. Sofu wa 'Imajū' no gyūniku ga suki de, haha ga yoku okuttari shitemasu kedo….",
        english: "Let me think. My grandfather likes the beef from 'Imaju', and my mother often sends it to him…",
        vietnamese: "Nhỉ. Ông ngoại tôi thích thịt bò từ 'Imaju', và mẹ tôi hay gửi cho ông…",
        acceptedAnswers: ["そうですねー。祖父は「今十」の牛肉が好きで、母がよく送ったりしてますけど…。", "そうですねー。そふは「いまじゅう」のぎゅうにくがすきで、ははがよくおくったりしてますけど…。"]
      },
      {
        id: 22,
        speaker: "A",
        japanese: "じゃっ、それで決まりだな。うちの社長も「今十」好きだし、ちょうどよかった。",
        reading: "じゃっ、それ で きまり だ な。うち の しゃちょう も「いまじゅう」すき だ し、ちょうど よかった。",
        romaji: "Ja, sore de kimari da na. Uchi no shachō mo 'Imajū' suki da shi, chōdo yokatta.",
        english: "That settles it then. Our president likes 'Imaju' too, so that works out perfectly.",
        vietnamese: "Vậy thì quyết định rồi. Giám đốc chúng ta cũng thích 'Imaju', thật hợp lý.",
        acceptedAnswers: ["じゃっ、それで決まりだな。うちの社長も「今十」好きだし、ちょうどよかった。", "じゃっ、それできまりだな。うちのしゃちょうも「いまじゅう」すきだし、ちょうどよかった。"]
      },
      {
        id: 23,
        speaker: "A",
        japanese: "じゃー、細かいことは後で連絡するから、頼んだよ。",
        reading: "じゃー、こまかい こと は あと で れんらく する から、たのんだ よ。",
        romaji: "Jā, komakai koto wa ato de renraku suru kara, tanonda yo.",
        english: "I'll be in touch later with the details — I'm counting on you.",
        vietnamese: "Mình sẽ liên lạc sau về chi tiết — nhờ bạn nhé.",
        acceptedAnswers: ["じゃー、細かいことは後で連絡するから、頼んだよ。", "じゃー、こまかいことはあとでれんらくするから、たのんだよ。"]
      },
      {
        id: 24,
        speaker: "B",
        japanese: "はい、承知しました。",
        reading: "はい、しょうち しました。",
        romaji: "Hai, shōchi shimashita.",
        english: "Yes, understood.",
        vietnamese: "Vâng, tôi hiểu rồi.",
        acceptedAnswers: ["はい、承知しました。", "はい、しょうちしました。"]
      }
    ]
  },
  {
    id: "lesson15_5",
    level: "N3",
    lesson: "Lesson 15",
    title: "就職面接",
    description: "A Korean applicant pitches a home-stay tour idea targeting Japanese adults, and explains why she wants to work in Japan.",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese: "では、李さんが弊社でやりたいと思っていることを話してください。",
        reading: "では、り さん が へいしゃ で やりたい と おもって いる こと を はなして ください。",
        romaji: "De wa, Ri-san ga heisha de yaritai to omotte iru koto o hanashite kudasai.",
        english: "Now, please tell us what you would like to do at our company.",
        vietnamese: "Vậy, hãy cho chúng tôi biết bạn muốn làm gì tại công ty chúng tôi.",
        acceptedAnswers: ["では、李さんが弊社でやりたいと思っていることを話してください。", "では、りさんがへいしゃでやりたいとおもっていることをはなしてください。"]
      },
      {
        id: 2,
        speaker: "B",
        japanese: "はい。えー、近年、韓国ドラマブームをきっかけに、日本では韓国に対する関心が高まっていると思います。",
        reading: "はい。えー、きんねん、かんこく どらま ぶーむ を きっかけ に、にほん では かんこく に たいする かんしん が たかまって いる と おもいます。",
        romaji: "Hai. Ē, kinnen, Kankoku dorama būmu o kikkake ni, Nihon de wa Kankoku ni taisuru kanshin ga takamatte iru to omoimasu.",
        english: "Yes. In recent years, sparked by the Korean drama boom, I believe interest in Korea has been growing in Japan.",
        vietnamese: "Vâng. Những năm gần đây, nhờ làn sóng phim Hàn, tôi nghĩ sự quan tâm đến Hàn Quốc ở Nhật ngày càng tăng.",
        acceptedAnswers: ["はい。えー、近年、韓国ドラマブームをきっかけに、日本では韓国に対する関心が高まっていると思います。", "はい。えー、きんねん、かんこくどらまぶーむをきっかけに、にほんではかんこくにたいするかんしんがたかまっているとおもいます。"]
      },
      {
        id: 3,
        speaker: "B",
        japanese: "韓国へ旅行に来る日本の方もずいぶん増えました。",
        reading: "かんこく へ りょこう に くる にほん の かた も ずいぶん ふえました。",
        romaji: "Kankoku e ryokō ni kuru Nihon no kata mo zuibun fuemashita.",
        english: "The number of Japanese people coming to Korea as tourists has increased considerably.",
        vietnamese: "Số người Nhật đến Hàn Quốc du lịch cũng tăng nhiều.",
        acceptedAnswers: ["韓国へ旅行に来る日本の方もずいぶん増えました。", "かんこくへりょこうにくるにほんのかたもずいぶんふえました。"]
      },
      {
        id: 4,
        speaker: "A",
        japanese: "そうですね。",
        reading: "そう です ね。",
        romaji: "Sō desu ne.",
        english: "That's true.",
        vietnamese: "Đúng vậy nhỉ.",
        acceptedAnswers: ["そうですね。", "そうですね。"]
      },
      {
        id: 5,
        speaker: "B",
        japanese: "はい。そこで、そういう日本の方に、韓国の家庭にホームステイしてもらえるようなツアーを開発してみたいと思っています。",
        reading: "はい。そこ で、そういう にほん の かた に、かんこく の かてい に ほーむすてい して もらえる よう な つあー を かいはつ してみたい と おもって います。",
        romaji: "Hai. Soko de, sō iu Nihon no kata ni, Kankoku no katei ni hōmusutei shite moraeru yō na tsuā o kaihatsu shitemitai to omotte imasu.",
        english: "Yes. So I'd like to develop a tour that allows those Japanese people to do a home-stay with Korean families.",
        vietnamese: "Vâng. Vì vậy, tôi muốn phát triển một tour cho phép những người Nhật đó ở lại với các gia đình Hàn Quốc.",
        acceptedAnswers: ["はい。そこで、そういう日本の方に、韓国の家庭にホームステイしてもらえるようなツアーを開発してみたいと思っています。", "はい。そこで、そういうにほんのかたに、かんこくのかていにほーむすていしてもらえるようなつあーをかいはつしてみたいとおもっています。"]
      },
      {
        id: 6,
        speaker: "A",
        japanese: "ははあ。韓国の家庭にホームステイですか。",
        reading: "ははあ。かんこく の かてい に ほーむすてい です か。",
        romaji: "Hahā. Kankoku no katei ni hōmusutei desu ka.",
        english: "I see. A home-stay with a Korean family.",
        vietnamese: "Ồ vậy. Ở lại với gia đình Hàn Quốc ư.",
        acceptedAnswers: ["ははあ。韓国の家庭にホームステイですか。", "ははあ。かんこくのかていにほーむすていですか。"]
      },
      {
        id: 7,
        speaker: "A",
        japanese: "今までに李さんは外国でホームステイしたり、反対に受け入れたりした経験があるんですか？",
        reading: "いままで に り さん は がいこく で ほーむすてい したり、はんたい に うけいれたり した けいけん が ある ん です か？",
        romaji: "Ima made ni Ri-san wa gaikoku de hōmusutei shitari, hantai ni ukeiretari shita keiken ga arun desu ka?",
        english: "Have you ever stayed with a family abroad yourself, or hosted foreign visitors?",
        vietnamese: "Trước đây bạn có từng ở lại với gia đình nước ngoài, hay ngược lại tiếp nhận người nước ngoài không?",
        acceptedAnswers: ["今までに李さんは外国でホームステイしたり、反対に受け入れたりした経験があるんですか？", "いままでにりさんはがいこくでほーむすていしたり、はんたいにうけいれたりしたけいけんがあるんですか？"]
      },
      {
        id: 8,
        speaker: "B",
        japanese: "いいえ、残念ながらありません。",
        reading: "いいえ、ざんねん ながら ありません。",
        romaji: "Iie, zannen nagara arimasen.",
        english: "No, unfortunately I don't.",
        vietnamese: "Không, tiếc là chưa.",
        acceptedAnswers: ["いいえ、残念ながらありません。", "いいえ、ざんねんながらありません。"]
      },
      {
        id: 9,
        speaker: "A",
        japanese: "あー、ではホームステイについてのノウハウとか、プランを立てる際のツボとかを研究したことは？",
        reading: "あー、では ほーむすてい に ついて の のうはう とか、ぷらん を たてる さい の つぼ とか を けんきゅう した こと は？",
        romaji: "Ā, de wa hōmusutei ni tsuite no nōhau toka, puran o tateru sai no tsubo toka o kenkyū shita koto wa?",
        english: "I see. Have you then researched the know-how of home-stays, or the key points in putting a plan together?",
        vietnamese: "À, vậy bạn đã nghiên cứu về bí quyết của home-stay hay các điểm mấu chốt khi lập kế hoạch chưa?",
        acceptedAnswers: ["あー、ではホームステイについてのノウハウとか、プランを立てる際のツボとかを研究したことは？", "あー、ではほーむすていについてののうはうとか、ぷらんをたてるさいのつぼとかをけんきゅうしたことは？"]
      },
      {
        id: 10,
        speaker: "B",
        japanese: "いいえ、まだありませんが、これから勉強するつもりです。",
        reading: "いいえ、まだ ありません が、これから べんきょう する つもり です。",
        romaji: "Iie, mada arimasen ga, korekara benkyō suru tsumori desu.",
        english: "No, not yet, but I plan to study from now on.",
        vietnamese: "Chưa, nhưng tôi định học từ bây giờ.",
        acceptedAnswers: ["いいえ、まだありませんが、これから勉強するつもりです。", "いいえ、まだありませんが、これからべんきょうするつもりです。"]
      },
      {
        id: 11,
        speaker: "B",
        japanese: "夏休みには北海道の農家にホームステイする予定です。",
        reading: "なつやすみ には ほっかいどう の のうか に ほーむすてい する よてい です。",
        romaji: "Natsuyasumi ni wa Hokkaidō no nōka ni hōmusutei suru yotei desu.",
        english: "I'm planning to do a home-stay at a farm in Hokkaido this summer.",
        vietnamese: "Kỳ nghỉ hè tôi dự định ở lại với một nông gia ở Hokkaido.",
        acceptedAnswers: ["夏休みには北海道の農家にホームステイする予定です。", "なつやすみにはほっかいどうののうかにほーむすていするよていです。"]
      },
      {
        id: 12,
        speaker: "B",
        japanese: "また、日本人を受け入れたことがある韓国人の友人から、そのときの経験について聞き取りをする約束をしました。",
        reading: "また、にほんじん を うけいれた こと が ある かんこくじん の ゆうじん から、その とき の けいけん に ついて ききとり を する やくそく を しました。",
        romaji: "Mata, Nihonjin o ukeireta koto ga aru Kankokujin no yūjin kara, sono toki no keiken ni tsuite kikitori o suru yakusoku o shimashita.",
        english: "I've also arranged to interview a Korean friend who has hosted Japanese people, to hear about their experience.",
        vietnamese: "Tôi cũng đã hẹn phỏng vấn một người bạn Hàn Quốc từng tiếp nhận người Nhật để nghe về kinh nghiệm của họ.",
        acceptedAnswers: ["また、日本人を受け入れたことがある韓国人の友人から、そのときの経験について聞き取りをする約束をしました。", "また、にほんじんをうけいれたことがあるかんこくじんのゆうじんから、そのときのけいけんについてききとりをするやくそくをしました。"]
      },
      {
        id: 13,
        speaker: "B",
        japanese: "そして、気がついたことをまとめていこうと思っています。",
        reading: "そして、きがついた こと を まとめて いこう と おもって います。",
        romaji: "Soshite, ki ga tsuita koto o matomete ikō to omotte imasu.",
        english: "I plan to compile what I learn.",
        vietnamese: "Và tôi sẽ tổng hợp những gì tôi học được.",
        acceptedAnswers: ["そして、気がついたことをまとめていこうと思っています。", "そして、きがついたことをまとめていこうとおもっています。"]
      },
      {
        id: 14,
        speaker: "A",
        japanese: "うん。まー、おもしろい発想だとは思うんですがね。",
        reading: "うん。まー、おもしろい はっそう だ と は おもう ん です が ね。",
        romaji: "Un. Mā, omoshiroi hassō da to wa omoun desu ga ne.",
        english: "Hmm. Well, I do think it's an interesting idea.",
        vietnamese: "Ừ. Tôi nghĩ đó là ý tưởng thú vị đấy.",
        acceptedAnswers: ["うん。まー、おもしろい発想だとは思うんですがね。", "うん。まー、おもしろいはっそうだとはおもうんですがね。"]
      },
      {
        id: 15,
        speaker: "A",
        japanese: "あー、こういうプランは留学斡旋会社なんかでやってみたほうがいいんじゃないかな。",
        reading: "あー、こういう ぷらん は りゅうがく あっせん かいしゃ なんか で やってみた ほう が いい ん じゃ ない かな。",
        romaji: "Ā, kō iu puran wa ryūgaku assen kaisha nanka de yattemita hō ga iin ja nai kana.",
        english: "But you know, this kind of plan might be better tried at a study-abroad agency.",
        vietnamese: "Nhưng loại kế hoạch này có lẽ nên thử ở các công ty môi giới du học.",
        acceptedAnswers: ["あー、こういうプランは留学斡旋会社なんかでやってみたほうがいいんじゃないかな。", "あー、こういうぷらんはりゅうがくあっせんかいしゃなんかでやってみたほうがいいんじゃないかな。"]
      },
      {
        id: 16,
        speaker: "A",
        japanese: "うちではまだやったことないし、未知数だね。",
        reading: "うち では まだ やった こと ない し、みちすう だ ね。",
        romaji: "Uchi de wa mada yatta koto nai shi, michisū da ne.",
        english: "We haven't done anything like this, and it's an unknown quantity.",
        vietnamese: "Chúng tôi chưa làm điều này bao giờ, và đây là ẩn số.",
        acceptedAnswers: ["うちではまだやったことないし、未知数だね。", "うちではまだやったことないし、みちすうだね。"]
      },
      {
        id: 17,
        speaker: "B",
        japanese: "そうかもしれませんが、留学斡旋専門の会社では、学生が中心だと思うんです。",
        reading: "そう かも しれません が、りゅうがく あっせん せんもん の かいしゃ では、がくせい が ちゅうしん だ と おもう ん です。",
        romaji: "Sō kamo shiremasen ga, ryūgaku assen senmon no kaisha de wa, gakusei ga chūshin da to omoun desu.",
        english: "That may be so, but I think study-abroad agencies are mainly focused on students.",
        vietnamese: "Có thể vậy, nhưng tôi nghĩ các công ty môi giới du học chủ yếu tập trung vào học sinh.",
        acceptedAnswers: ["そうかもしれませんが、留学斡旋専門の会社では、学生が中心だと思うんです。", "そうかもしれませんが、りゅうがくあっせんせんもんのかいしゃでは、がくせいがちゅうしんだとおもうんです。"]
      },
      {
        id: 18,
        speaker: "B",
        japanese: "でも、私は、学生よりもむしろ一般の社会人の方、高齢の方などを対象にしたものを作ってみたいと考えています。",
        reading: "でも、わたし は、がくせい より も むしろ いっぱん の しゃかいじん の かた、こうれい の かた など を たいしょう に した もの を つくってみたい と かんがえています。",
        romaji: "Demo, watashi wa, gakusei yori mo mushiro ippan no shakaijin no kata, kōrei no kata nado o taishō ni shita mono o tsukutte mitai to kangaete imasu.",
        english: "However, I'd like to create something targeting working adults and elderly people rather than students.",
        vietnamese: "Tuy nhiên, tôi muốn tạo ra thứ gì đó dành cho người đi làm thông thường và người cao tuổi thay vì học sinh.",
        acceptedAnswers: ["でも、私は、学生よりもむしろ一般の社会人の方、高齢の方などを対象にしたものを作ってみたいと考えています。", "でも、わたしは、がくせいよりもむしろいっぱんのしゃかいじんのかた、こうれいのかたなどをたいしょうにしたものをつくってみたいとかんがえています。"]
      },
      {
        id: 19,
        speaker: "A",
        japanese: "そうですか。ま、ほかでやっているのとどう差別化を図るかが問題でしょうね。",
        reading: "そう です か。ま、ほか で やってる の と どう さべつか を はかる か が もんだい でしょう ね。",
        romaji: "Sō desu ka. Ma, hoka de yatteru no to dō sabetsuka o hakaru ka ga mondai deshō ne.",
        english: "I see. Well, how you differentiate from what others are doing will be the key question.",
        vietnamese: "Vấn đề là làm thế nào để khác biệt so với những gì người khác đang làm.",
        acceptedAnswers: ["そうですか。ま、ほかでやっているのとどう差別化を図るかが問題でしょうね。", "そうですか。ま、ほかでやっているのとどうさべつかをはかるかがもんだいでしょうね。"]
      },
      {
        id: 20,
        speaker: "B",
        japanese: "はい。そのあたりを研究して、実現に向けて努力したいと思います。",
        reading: "はい。その あたり を けんきゅう して、じつげん に むけて どりょく したい と おもいます。",
        romaji: "Hai. Sono atari o kenkyū shite, jitsugen ni mukete doryoku shitai to omoimasu.",
        english: "Yes. I'd like to research that area and work hard toward making it a reality.",
        vietnamese: "Vâng. Tôi muốn nghiên cứu về vấn đề đó và cố gắng để hiện thực hóa nó.",
        acceptedAnswers: ["はい。そのあたりを研究して、実現に向けて努力したいと思います。", "はい。そのあたりをけんきゅうして、じつげんにむけてどりょくしたいとおもいます。"]
      },
      {
        id: 21,
        speaker: "A",
        japanese: "そうですか。",
        reading: "そう です か。",
        romaji: "Sō desu ka.",
        english: "I see.",
        vietnamese: "Vậy ư.",
        acceptedAnswers: ["そうですか。", "そうですか。"]
      },
      {
        id: 22,
        speaker: "A",
        japanese: "ところで李さんはどうして日本で就職しようと思ったんですか？韓国の会社でも同じようなことは出来ると思いますけど。",
        reading: "ところ で り さん は どうして にほん で しゅうしょく しよう と おもった ん です か？かんこく の かいしゃ でも おなじ よう な こと は できる と おもいます けど。",
        romaji: "Tokoro de Ri-san wa dōshite Nihon de shūshoku shiyō to omotta n desu ka? Kankoku no kaisha demo onaji yō na koto wa dekiru to omoimasu kedo.",
        english: "By the way, why did you decide to seek employment in Japan? I would think a Korean company could do the same kind of thing.",
        vietnamese: "Nhân tiện, tại sao bạn muốn xin việc ở Nhật? Tôi nghĩ các công ty Hàn Quốc cũng có thể làm điều tương tự.",
        acceptedAnswers: ["ところで李さんはどうして日本で就職しようと思ったんですか？韓国の会社でも同じようなことは出来ると思いますけど。", "ところでりさんはどうしてにほんでしゅうしょくしようとおもったんですか？かんこくのかいしゃでもおなじようなことはできるとおもいますけど。"]
      },
      {
        id: 23,
        speaker: "B",
        japanese: "はい。確かに韓国にある会社でも可能だとは思いますが、日本の文化や風土をよく理解することがこの仕事には重要だと思いますので、日本の会社で働きたいと考えています。",
        reading: "はい。たしかに かんこく に ある かいしゃ でも かのう だ と は おもいます が、にほん の ぶんか や ふうど を よく りかい する こと が この しごと に は じゅうよう だ と おもいます ので、にほん の かいしゃ で はたらきたい と かんがえています。",
        romaji: "Hai. Tashika ni Kankoku ni aru kaisha demo kanō da to wa omoimasu ga, Nihon no bunka ya fūdo o yoku rikai suru koto ga kono shigoto ni wa jūyō da to omoimasu node, Nihon no kaisha de hatarakitai to kangaete imasu.",
        english: "Yes. It's true that a Korean company could also do it, but I believe deeply understanding Japanese culture and climate is important for this work, so I'd like to work at a Japanese company.",
        vietnamese: "Vâng. Đúng là các công ty ở Hàn Quốc cũng có thể làm được, nhưng tôi nghĩ việc hiểu sâu về văn hóa và phong thổ Nhật Bản rất quan trọng cho công việc này, vì vậy tôi muốn làm việc ở công ty Nhật.",
        acceptedAnswers: ["はい。確かに韓国にある会社でも可能だとは思いますが、日本の文化や風土をよく理解することがこの仕事には重要だと思いますので、日本の会社で働きたいと考えています。", "はい。たしかにかんこくにあるかいしゃでもかのうだとはおもいますが、にほんのぶんかやふうどをよくりかいすることがこのしごとにはじゅうようだとおもいますので、にほんのかいしゃではたらきたいとかんがえています。"]
      }
    ]
  },
];
