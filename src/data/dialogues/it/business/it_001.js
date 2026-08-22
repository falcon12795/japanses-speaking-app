export const IT_001_DIALOGUE = {
    id: "it-business-001",
    level: "IT",
    lesson: "Business",
    title: "オンサイト初日の挨拶",
    description: "Chào hỏi trong ngày đầu tiên đi onsite. An, Front SE từ NTT Việt Nam, gặp Tanaka, người phụ trách dự án phía Sakura Soft, sau khi trao đổi danh thiếp và bắt đầu trao đổi về dự án phát triển hệ thống quản lý nhân sự.",
    category: "Onsite / Project Kickoff",
    characters: [
        {
            key: "A",
            name: "田中",
            displayName: "Tanaka",
            role: "Sakura Soft project owner"
        },
        {
            key: "B",
            name: "アン",
            displayName: "An",
            role: "Front SE from NTT Vietnam"
        }
    ],
    lines: [
        {
            id: 1,
            speaker: "A",
            japanese: "はじめまして。",
            reading: "はじめまして。",
            romaji: "hajimemashite.",
            english: "Nice to meet you.",
            vietnamese: "Rất vui được gặp bạn.",
            acceptedAnswers: ["はじめまして。", "はじめまして", "初めまして"]
        },
        {
            id: 2,
            speaker: "A",
            japanese: "サクラソフト社の田中と申します。",
            reading: "サクラソフトしゃのたなかともうします。",
            romaji: "sakurasofuto sha no tanaka to moushimasu.",
            english: "I am Tanaka from Sakura Soft.",
            vietnamese: "Rất vui được gặp bạn. Tôi là Tanaka đến từ công ty Sakura Soft.",
            acceptedAnswers: ["サクラソフト社の田中と申します。", "サクラソフト社の田中と申します", "さくらそふとしゃのたなかともうします", "サクラソフトしゃのたなかともうします"]
        },
        {
            id: 3,
            speaker: "A",
            japanese: "本日ご来社くださり、",
            reading: "ほんじつごらいしゃくださり、",
            romaji: "honjitsu goraisha kudasari,",
            english: "Thank you for coming to our company today,",
            vietnamese: "Hôm nay cảm ơn bạn đã đến công ty chúng tôi,",
            acceptedAnswers: ["本日ご来社くださり、", "本日ご来社くださり", "ほんじつごらいしゃくださり"]
        },
        {
            id: 4,
            speaker: "A",
            japanese: "まことにありがとうございます。",
            reading: "まことにありがとうございます。",
            romaji: "makoto ni arigatou gozaimasu.",
            english: "thank you very much.",
            vietnamese: "thật sự cảm ơn bạn rất nhiều.",
            acceptedAnswers: ["まことにありがとうございます。", "まことにありがとうございます"]
        },
        {
            id: 5,
            speaker: "B",
            japanese: "はじめまして。",
            reading: "はじめまして。",
            romaji: "hajimemashite.",
            english: "Nice to meet you.",
            vietnamese: "Rất vui được gặp bạn.",
            acceptedAnswers: ["はじめまして。", "はじめまして", "初めまして"]
        },
        {
            id: 6,
            speaker: "B",
            japanese: "今回のプロジェクトでフロントSEをつとめることになりました、",
            reading: "こんかいのぷろじぇくとでふろんとSEをつとめることになりました、",
            romaji: "konkai no purojekuto de furonto SE wo tsutomeru koto ni narimashita,",
            english: "I will be serving as the Front SE for this project,",
            vietnamese: "Tôi sẽ đảm nhiệm vai trò Front SE trong dự án lần này,",
            acceptedAnswers: ["今回のプロジェクトでフロントSEをつとめることになりました、", "今回のプロジェクトでフロントSEをつとめることになりました", "こんかいのぷろじぇくとでふろんとSEをつとめることになりました", "こんかいのぷろじぇくとでふろんとえすいーをつとめることになりました"]
        },
        {
            id: 7,
            speaker: "B",
            japanese: "アンと申します。",
            reading: "あんともうします。",
            romaji: "an to moushimasu.",
            english: "My name is An.",
            vietnamese: "Tôi tên là An.",
            acceptedAnswers: ["アンと申します。", "アンと申します", "あんともうします"]
        },
        {
            id: 8,
            speaker: "B",
            japanese: "どうぞよろしくお願いいたします。",
            reading: "どうぞよろしくおねがいいたします。",
            romaji: "douzo yoroshiku onegai itashimasu.",
            english: "I look forward to working with you.",
            vietnamese: "Rất mong được anh giúp đỡ.",
            acceptedAnswers: ["どうぞよろしくお願いいたします。", "どうぞよろしくお願いいたします", "どうぞよろしくおねがいいたします"]
        },
        {
            id: 9,
            speaker: "A",
            japanese: "アンさんは東京で働くのは初めてですか。",
            reading: "あんさんはとうきょうではたらくのははじめてですか。",
            romaji: "an san wa toukyou de hataraku no wa hajimete desu ka.",
            english: "Is this your first time working in Tokyo, An?",
            vietnamese: "Đây là lần đầu bạn làm việc tại Tokyo phải không?",
            acceptedAnswers: ["アンさんは東京で働くのは初めてですか。", "アンさんは東京で働くのは初めてですか", "あんさんはとうきょうではたらくのははじめてですか"]
        },
        {
            id: 10,
            speaker: "B",
            japanese: "はい、初めてのオンサイトなので、",
            reading: "はい、はじめてのおんさいとなので、",
            romaji: "hai, hajimete no onsaito nano de,",
            english: "Yes, since this is my first onsite assignment,",
            vietnamese: "Vâng, vì là lần đầu đi onsite nên,",
            acceptedAnswers: ["はい、初めてのオンサイトなので、", "はい初めてのオンサイトなので", "はい、はじめてのおんさいとなので、", "はいはじめてのおんさいとなので"]
        },
        {
            id: 11,
            speaker: "B",
            japanese: "少し緊張していますが、",
            reading: "すこしきんちょうしていますが、",
            romaji: "sukoshi kinchou shite imasu ga,",
            english: "I am a little nervous, but",
            vietnamese: "tôi hơi hồi hộp một chút nhưng,",
            acceptedAnswers: ["少し緊張していますが、", "少し緊張していますが", "すこしきんちょうしていますが"]
        },
        {
            id: 12,
            speaker: "B",
            japanese: "頑張りたいと思います。",
            reading: "がんばりたいとおもいます。",
            romaji: "ganbaritai to omoimasu.",
            english: "I would like to do my best.",
            vietnamese: "tôi sẽ cố gắng hết sức.",
            acceptedAnswers: ["頑張りたいと思います。", "頑張りたいと思います", "がんばりたいとおもいます"]
        },
        {
            id: 13,
            speaker: "B",
            japanese: "あの、これ、",
            reading: "あの、これ、",
            romaji: "ano, kore,",
            english: "Um, this,",
            vietnamese: "À, cái này,",
            acceptedAnswers: ["あの、これ、", "あのこれ"]
        },
        {
            id: 14,
            speaker: "B",
            japanese: "ベトナムのおみやげです。",
            reading: "べとなむのおみやげです。",
            romaji: "betonamu no omiyage desu.",
            english: "is a souvenir from Vietnam.",
            vietnamese: "là quà từ Việt Nam.",
            acceptedAnswers: ["ベトナムのおみやげです。", "ベトナムのおみやげです", "べとなむのおみやげです"]
        },
        {
            id: 15,
            speaker: "B",
            japanese: "よかったら、",
            reading: "よかったら、",
            romaji: "yokattara,",
            english: "If you like,",
            vietnamese: "Nếu được thì,",
            acceptedAnswers: ["よかったら、", "よかったら"]
        },
        {
            id: 16,
            speaker: "B",
            japanese: "皆さんで召し上がってください。",
            reading: "みなさんでめしあがってください。",
            romaji: "minasan de meshiaagatte kudasai.",
            english: "please enjoy it together with everyone.",
            vietnamese: "mong mọi người cùng thưởng thức.",
            acceptedAnswers: ["皆さんで召し上がってください。", "皆さんで召し上がってください", "みなさんでめしあがってください"]
        },
        {
            id: 17,
            speaker: "A",
            japanese: "まあ、うれしい。",
            reading: "まあ、うれしい。",
            romaji: "maa, ureshii.",
            english: "Oh, how nice.",
            vietnamese: "Ồ, vui quá.",
            acceptedAnswers: ["まあ、うれしい。", "まあうれしい"]
        },
        {
            id: 18,
            speaker: "A",
            japanese: "ありがとうございます。",
            reading: "ありがとうございます。",
            romaji: "arigatou gozaimasu.",
            english: "Thank you very much.",
            vietnamese: "Cảm ơn bạn.",
            acceptedAnswers: ["ありがとうございます。", "ありがとうございます"]
        },
        {
            id: 19,
            speaker: "A",
            japanese: "これは何ですか。",
            reading: "これはなんですか。",
            romaji: "kore wa nan desu ka.",
            english: "What is this?",
            vietnamese: "Đây là gì vậy?",
            acceptedAnswers: ["これは何ですか。", "これは何ですか", "これはなんですか"]
        },
        {
            id: 20,
            speaker: "B",
            japanese: "バナナキャンディーです。",
            reading: "ばななきゃんでぃーです。",
            romaji: "banana kyandii desu.",
            english: "It is banana candy.",
            vietnamese: "Đây là kẹo chuối.",
            acceptedAnswers: ["バナナキャンディーです。", "バナナキャンディーです", "ばななきゃんでぃーです"]
        },
        {
            id: 21,
            speaker: "B",
            japanese: "私の故郷で有名なお菓子です。",
            reading: "わたしのこきょうでゆうめいなおかしです。",
            romaji: "watashi no kokyou de yuumei na okashi desu.",
            english: "It is a famous sweet from my hometown.",
            vietnamese: "Nó là đặc sản nổi tiếng ở quê tôi.",
            acceptedAnswers: ["私の故郷で有名なお菓子です。", "私の故郷で有名なお菓子です", "わたしのこきょうでゆうめいなおかしです"]
        },
        {
            id: 22,
            speaker: "A",
            japanese: "アンさん、ありがとう。",
            reading: "あんさん、ありがとう。",
            romaji: "an san, arigatou.",
            english: "Thank you, An.",
            vietnamese: "Cảm ơn bạn nhé.",
            acceptedAnswers: ["アンさん、ありがとう。", "アンさんありがとう", "あんさん、ありがとう", "あんさんありがとう"]
        },
        {
            id: 23,
            speaker: "A",
            japanese: "じゃ、これからプロジェクトについて説明しますね。",
            reading: "じゃ、これからぷろじぇくとについにてせつめいしますね。",
            romaji: "ja, korekara purojekuto ni tsuite setsumei shimasu ne.",
            english: "Well then, I will now explain the project.",
            vietnamese: "Vậy thì bây giờ tôi sẽ giải thích về dự án nhé.",
            acceptedAnswers: ["じゃ、これからプロジェクトについて説明しますね。", "じゃこれからプロジェクトについて説明しますね", "じゃ、これからぷろじぇくとについてせつめいしますね", "じゃこれからぷろじぇくとについてせつめいしますね"]
        },
        {
            id: 24,
            speaker: "A",
            japanese: "今回の案件は、",
            reading: "こんかいのあんけんは、",
            romaji: "konkai no anken wa,",
            english: "This case is,",
            vietnamese: "Dự án lần này là,",
            acceptedAnswers: ["今回の案件は、", "今回の案件は", "こんかいのあんけんは"]
        },
        {
            id: 25,
            speaker: "A",
            japanese: "人事管理システムの開発プロジェクトです。",
            reading: "じんじかんりしすてむのかいはつぷろじぇくとです。",
            romaji: "jinji kanri shisutemu no kaihatsu purojekuto desu.",
            english: "a development project for a human resources management system.",
            vietnamese: "dự án phát triển hệ thống quản lý nhân sự.",
            acceptedAnswers: ["人事管理システムの開発プロジェクトです。", "人事管理システムの開発プロジェクトです", "じんじかんりしすてむのかいはつぷろじぇくとです"]
        },
        {
            id: 26,
            speaker: "A",
            japanese: "このシステムでは、",
            reading: "このしすてむでは、",
            romaji: "kono shisutemu de wa,",
            english: "With this system,",
            vietnamese: "Hệ thống này,",
            acceptedAnswers: ["このシステムでは、", "このシステムでは", "このしすてむでは"]
        },
        {
            id: 27,
            speaker: "A",
            japanese: "社員の情報や勤怠、休暇などを管理できるようにします。",
            reading: "しゃいんのじょうほうやきんたい、きゅうかなどをかんりできるようにします。",
            romaji: "shain no jouhou ya kintai, kyuuka nado wo kanri dekiru you ni shimasu.",
            english: "employee information, attendance, leave, and similar data will be manageable.",
            vietnamese: "sẽ giúp quản lý thông tin nhân viên, chấm công, nghỉ phép,...",
            acceptedAnswers: ["社員の情報や勤怠、休暇などを管理できるようにします。", "社員の情報や勤怠休暇などを管理できるようにします", "しゃいんのじょうほうやきんたい、きゅうかなどをかんりできるようにします", "しゃいんのじょうほうやきんたいきゅうかなどをかんりできるようにします"]
        },
        {
            id: 28,
            speaker: "A",
            japanese: "また、管理者がデータを簡単に確認できるようにする予定です。",
            reading: "また、かんりしゃがでーたをかんたんにかくにんできるようにするよていです。",
            romaji: "mata, kanrisha ga deeta wo kantan ni kakunin dekiru you ni suru yotei desu.",
            english: "In addition, we plan to make it easy for administrators to check the data.",
            vietnamese: "Ngoài ra, chúng tôi cũng dự định xây dựng để phía quản lý có thể dễ dàng kiểm tra dữ liệu.",
            acceptedAnswers: ["また、管理者がデータを簡単に確認できるようにする予定です。", "また管理者がデータを簡単に確認できるようにする予定です", "また、かんりしゃがでーたをかんたんにかくにんできるようにするよていです", "またかんりしゃがでーたをかんたんにかくにんできるようにするよていです"]
        },
        {
            id: 29,
            speaker: "A",
            japanese: "アンさんにはフロントSEとして、",
            reading: "あんさんにはふろんとSEとして、",
            romaji: "an san ni wa furonto SE to shite,",
            english: "As the Front SE, An,",
            vietnamese: "An sẽ đảm nhận vai trò Front SE,",
            acceptedAnswers: ["アンさんにはフロントSEとして、", "アンさんにはフロントSEとして", "あんさんにはふろんとSEとして", "あんさんにはふろんとえすいーとして"]
        },
        {
            id: 30,
            speaker: "A",
            japanese: "チーム全体をまとめていただきます。",
            reading: "ちーむぜんたいをまとめていただきます。",
            romaji: "chiimu zentai wo matomete itadakimasu.",
            english: "we would like you to coordinate the entire team.",
            vietnamese: "phụ trách điều phối toàn bộ team.",
            acceptedAnswers: ["チーム全体をまとめていただきます。", "チーム全体をまとめていただきます", "ちーむぜんたいをまとめていただきます"]
        },
        {
            id: 31,
            speaker: "A",
            japanese: "また、日本側とベトナム側の間に立って、",
            reading: "また、にほんがわとべとなむがわのあいだにたって、",
            romaji: "mata, nihongawa to betonamugawa no aida ni tatte,",
            english: "Also, standing between the Japan side and the Vietnam side,",
            vietnamese: "Ngoài ra, bạn sẽ đứng giữa phía Nhật và phía Việt Nam,",
            acceptedAnswers: ["また、日本側とベトナム側の間に立って、", "また日本側とベトナム側の間に立って", "また、にほんがわとべとなむがわのあいだにたって", "またにほんがわとべとなむがわのあいだにたって"]
        },
        {
            id: 32,
            speaker: "A",
            japanese: "情報を共有したり、",
            reading: "じょうほうをきょうゆうしたり、",
            romaji: "jouhou wo kyouyuu shitari,",
            english: "to share information,",
            vietnamese: "để chia sẻ thông tin,",
            acceptedAnswers: ["情報を共有したり、", "情報を共有したり", "じょうほうをきょうゆうしたり"]
        },
        {
            id: 33,
            speaker: "A",
            japanese: "問題があれば調整したりしていただきたいです。",
            reading: "もんだいがあればちょうせいしたりしていただきたいです。",
            romaji: "mondai ga areba chousei shitari shite itadakitai desu.",
            english: "and coordinate when issues arise.",
            vietnamese: "cũng như xử lý, điều chỉnh khi có vấn đề phát sinh.",
            acceptedAnswers: ["問題があれば調整したりしていただきたいです。", "問題があれば調整したりしていただきたいです", "もんだいがあればちょうせいしたりしていただきたいです"]
        },
        {
            id: 34,
            speaker: "B",
            japanese: "はい、分かりました。",
            reading: "はい、わかりました。",
            romaji: "hai, wakarimashita.",
            english: "Yes, I understand.",
            vietnamese: "Vâng, tôi hiểu rồi.",
            acceptedAnswers: ["はい、分かりました。", "はい分かりました", "はい、わかりました。", "はいわかりました"]
        },
        {
            id: 35,
            speaker: "B",
            japanese: "御社とオフショアチームの間で、",
            reading: "おんしゃとおふしょあちーむのあいだで、",
            romaji: "onsha to ofushoa chiimu no aida de,",
            english: "Between your company and the offshore team,",
            vietnamese: "Giữa phía công ty các bạn và team offshore,",
            acceptedAnswers: ["御社とオフショアチームの間で、", "御社とオフショアチームの間で", "おんしゃとおふしょあちーむのあいだで"]
        },
        {
            id: 36,
            speaker: "B",
            japanese: "しっかりコミュニケーションを取れるように頑張ります。",
            reading: "しっかりこみゅにけーしょんをとれるようにがんばります。",
            romaji: "shikkari komyunikeeshon wo toreru you ni ganbarimasu.",
            english: "I will do my best to ensure good communication.",
            vietnamese: "Tôi sẽ cố gắng giao tiếp tốt.",
            acceptedAnswers: ["しっかりコミュニケーションを取れるように頑張ります。", "しっかりコミュニケーションを取れるように頑張ります", "しっかりこみゅにけーしょんをとれるようにがんばります"]
        },
        {
            id: 37,
            speaker: "B",
            japanese: "このプロジェクトに参加できて、",
            reading: "このぷろじぇくとにさんかできて、",
            romaji: "kono purojekuto ni sanka dekite,",
            english: "To be able to participate in this project,",
            vietnamese: "Khi được tham gia dự án này,",
            acceptedAnswers: ["このプロジェクトに参加できて、", "このプロジェクトに参加できて", "このぷろじぇくとにさんかできて"]
        },
        {
            id: 38,
            speaker: "B",
            japanese: "とてもうれしいです。",
            reading: "とてもうれしいです。",
            romaji: "totemo ureshii desu.",
            english: "I am very happy.",
            vietnamese: "tôi rất vui.",
            acceptedAnswers: ["とてもうれしいです。", "とてもうれしいです"]
        },
        {
            id: 39,
            speaker: "B",
            japanese: "チームメンバーと協力しながら、",
            reading: "ちーむめんばーときょうりょくしながら、",
            romaji: "chiimu menbaa to kyouryoku shinagara,",
            english: "While cooperating with team members,",
            vietnamese: "Tôi muốn phối hợp với các thành viên trong team,",
            acceptedAnswers: ["チームメンバーと協力しながら、", "チームメンバーと協力しながら", "ちーむめんばーときょうりょくしながら"]
        },
        {
            id: 40,
            speaker: "B",
            japanese: "仕事を進めていきたいと思います。",
            reading: "しごとをすすめていきたいとおもいます。",
            romaji: "shigoto wo susumete ikitai to omoimasu.",
            english: "I would like to proceed with the work.",
            vietnamese: "để triển khai công việc.",
            acceptedAnswers: ["仕事を進めていきたいと思います。", "仕事を進めていきたいと思います", "しごとをすすめていきたいとおもいます"]
        },
        {
            id: 41,
            speaker: "B",
            japanese: "まだ分からないことも多いですが、",
            reading: "まだわからないこともおいですが、",
            romaji: "mada wakaranai koto mo oi desu ga,",
            english: "There are still many things I do not know, but",
            vietnamese: "Hiện tại vẫn còn nhiều điều tôi chưa nắm rõ, nhưng",
            acceptedAnswers: ["まだ分からないことも多いですが、", "まだ分からないことも多いですが", "まだわからないこともおいですが"]
        },
        {
            id: 42,
            speaker: "B",
            japanese: "一日でも早くチームの役に立てるように頑張ります。",
            reading: "ついたちでもはやくちーむのやくにたてるようにがんばります。",
            romaji: "itichi nichi demo hayaku chiimu no yaku ni tateru you ni ganbarimasu.",
            english: "I will do my best to contribute to the team as soon as possible.",
            vietnamese: "tôi sẽ cố gắng để sớm có thể đóng góp cho team.",
            acceptedAnswers: ["一日でも早くチームの役に立てるように頑張ります。", "一日でも早くチームの役に立てるように頑張ります", "いちにちでもはやくちーむのやくにたてるようにがんばります", "ついたちでもはやくちーむのやくにたてるようにがんばります"]
        },
        {
            id: 43,
            speaker: "A",
            japanese: "いいですね。",
            reading: "いいですね。",
            romaji: "ii desu ne.",
            english: "That sounds good.",
            vietnamese: "Tốt rồi.",
            acceptedAnswers: ["いいですね。", "いいですね"]
        },
        {
            id: 44,
            speaker: "A",
            japanese: "何かあれば、遠慮なく聞いてください。",
            reading: "なにかあれば、えんりょなくきいてください。",
            romaji: "nanika areba, enryo naku kiite kudasai.",
            english: "If you have any questions, please feel free to ask.",
            vietnamese: "Nếu có gì chưa rõ thì bạn cứ hỏi thoải mái nhé.",
            acceptedAnswers: ["何かあれば、遠慮なく聞いてください。", "何かあれば遠慮なく聞いてください", "なにかあれば、えんりょなくきいてください", "なにかあればえんりょなくきいてください"]
        },
        {
            id: 45,
            speaker: "B",
            japanese: "ありがとうございます。",
            reading: "ありがとうございます。",
            romaji: "arigatou gozaimasu.",
            english: "Thank you.",
            vietnamese: "Cảm ơn anh.",
            acceptedAnswers: ["ありがとうございます。", "ありがとうございます"]
        },
        {
            id: 46,
            speaker: "B",
            japanese: "いろいろ教えていただけると助かります。",
            reading: "いろいろおしえていただけるとたすかります。",
            romaji: "iroiro oshiete itadakeru to tasakarimasu.",
            english: "It would be very helpful if you could teach me various things.",
            vietnamese: "Nếu được anh hướng dẫn thêm thì tốt quá ạ.",
            acceptedAnswers: ["いろいろ教えていただけると助かります。", "いろいろ教えていただけると助かります", "いろいろおしえていただけるとたすかります"]
        },
        {
            id: 47,
            speaker: "A",
            japanese: "日本では、",
            reading: "にほんでは、",
            romaji: "nihon de wa,",
            english: "In Japan,",
            vietnamese: "Ở Nhật thì,",
            acceptedAnswers: ["日本では、", "日本では", "にほんでは"]
        },
        {
            id: 48,
            speaker: "A",
            japanese: "第一印象や身だしなみが大切です。",
            reading: "だいいちいんしょうやみだしなみがたいせつです。",
            romaji: "daiichi inshou ya midashinami ga taisetsu desu.",
            english: "first impressions and appearance are important.",
            vietnamese: "ấn tượng ban đầu và tác phong ăn mặc rất quan trọng.",
            acceptedAnswers: ["第一印象や身だしなみが大切です。", "第一印象や身だしなみが大切です", "だいいちいんしょうやみだしなみがたいせつです"]
        },
        {
            id: 49,
            speaker: "A",
            japanese: "敬語やビジネスマナーも、",
            reading: "けいごやびじねすまなーも、",
            romaji: "keigo ya bijinesu manaa mo,",
            english: "Honorific language and business manners too,",
            vietnamese: "Về kính ngữ và tác phong làm việc,",
            acceptedAnswers: ["敬語やビジネスマナーも、", "敬語やビジネスマナーも", "けいごやびじねすまなーも"]
        },
        {
            id: 50,
            speaker: "A",
            japanese: "少しずつ慣れていけば大丈夫ですよ。",
            reading: "すこしずつなれていけばだいじょうぶですよ。",
            romaji: "sukoshizutsu narete ikeba daijoubu desu yo.",
            english: "it is fine if you get used to them little by little.",
            vietnamese: "bạn cứ dần dần làm quen là được.",
            acceptedAnswers: ["少しずつ慣れていけば大丈夫ですよ。", "少しずつ慣れていけば大丈夫ですよ", "すこしずつなれていけばだいじょうぶですよ"]
        },
        {
            id: 51,
            speaker: "B",
            japanese: "はい、分かりました。",
            reading: "はい、わかりました。",
            romaji: "hai, wakarimashita.",
            english: "Yes, I understand.",
            vietnamese: "Vâng, tôi hiểu rồi.",
            acceptedAnswers: ["はい、分かりました。", "はい分かりました", "はい、わかりました。", "はいわかりました"]
        },
        {
            id: 52,
            speaker: "B",
            japanese: "まだ敬語は完璧ではありませんが、",
            reading: "まだけいごはかんぺきではありませんが、",
            romaji: "mada keigo wa kanpeki de wa arimasen ga,",
            english: "My honorific language is not perfect yet, but",
            vietnamese: "Kính ngữ của tôi vẫn chưa phải là tốt nhất nhưng,",
            acceptedAnswers: ["まだ敬語は完璧ではありませんが、", "まだ敬語は完璧ではありませんが", "まだけいごはかんぺきではありませんが"]
        },
        {
            id: 53,
            speaker: "B",
            japanese: "しっかり勉強していきたいと思います。",
            reading: "しっかりべんきょうしていきたいとおもいます。",
            romaji: "shikkari benkyou shite ikitai to omoimasu.",
            english: "I would like to study it seriously.",
            vietnamese: "tôi sẽ cố gắng học thêm.",
            acceptedAnswers: ["しっかり勉強していきたいと思います。", "しっかり勉強していきたいと思います", "しっかりべんきょうしていきたいとおもいます"]
        },
        {
            id: 54,
            speaker: "B",
            japanese: "ご迷惑をおかけすることもあるかと思いますが、",
            reading: "ごめいわくをおかけすることもあるかとおもいますが、",
            romaji: "gomeiwaku wo okake suru koto mo aru ka to omoimasu ga,",
            english: "I may cause some inconvenience, but",
            vietnamese: "Có thể tôi sẽ làm phiền trong thời gian đầu,",
            acceptedAnswers: ["ご迷惑をおかけすることもあるかと思いますが、", "ご迷惑をおかけすることもあるかと思いますが", "ごめいわくをおかけすることもあるかとおもいますが"]
        },
        {
            id: 55,
            speaker: "B",
            japanese: "よろしくお願いいたします。",
            reading: "よろしくおねがいいたします。",
            romaji: "yoroshiku onegai itashimasu.",
            english: "I appreciate your support.",
            vietnamese: "mong anh giúp đỡ.",
            acceptedAnswers: ["よろしくお願いいたします。", "よろしくお願いいたします", "よろしくおねがいいたします"]
        },
        {
            id: 56,
            speaker: "A",
            japanese: "大丈夫ですよ。",
            reading: "だいじょうぶですよ。",
            romaji: "daijoubu desu yo.",
            english: "It is all right.",
            vietnamese: "Không sao đâu.",
            acceptedAnswers: ["大丈夫ですよ。", "大丈夫ですよ", "だいじょうぶですよ"]
        },
        {
            id: 57,
            speaker: "A",
            japanese: "とても丁寧に話されていますので、",
            reading: "とてもていねいにはなされていますので、",
            romaji: "totemo teinei ni hanasarete imasu no de,",
            english: "You are speaking very politely, so",
            vietnamese: "Bạn nói chuyện rất lịch sự nên,",
            acceptedAnswers: ["とても丁寧に話されていますので、", "とても丁寧に話されていますので", "とてもていねいにはなされていますので"]
        },
        {
            id: 58,
            speaker: "A",
            japanese: "安心しました。",
            reading: "あんしんしました。",
            romaji: "anshin shimashita.",
            english: "I feel reassured.",
            vietnamese: "tôi thấy rất yên tâm.",
            acceptedAnswers: ["安心しました。", "安心しました", "あんしんしました"]
        },
        {
            id: 59,
            speaker: "B",
            japanese: "ありがとうございます。",
            reading: "ありがとうございます。",
            romaji: "arigatou gozaimasu.",
            english: "Thank you.",
            vietnamese: "Cảm ơn anh.",
            acceptedAnswers: ["ありがとうございます。", "ありがとうございます"]
        },
        {
            id: 60,
            speaker: "A",
            japanese: "今回のプロジェクトは少しスケジュールが厳しいですが、",
            reading: "こんかいのぷろじぇくとはすこしすけじゅーるがきびしいですが、",
            romaji: "konkai no purojekuto wa sukoshi sukejuuru ga kibishii desu ga,",
            english: "This project has a somewhat tight schedule, but",
            vietnamese: "Dự án lần này tiến độ hơi gấp, nhưng",
            acceptedAnswers: ["今回のプロジェクトは少しスケジュールが厳しいですが、", "今回のプロジェクトは少しスケジュールが厳しいですが", "こんかいのぷろじぇくとはすこしすけじゅーるがきびしいですが"]
        },
        {
            id: 61,
            speaker: "A",
            japanese: "いいシステムを作りたいと考えています。",
            reading: "いいしすてむをつくりたいとかんがえています。",
            romaji: "ii shisutemu wo tsukuritai to kangaete imasu.",
            english: "we want to build a good system.",
            vietnamese: "chúng tôi muốn xây dựng một hệ thống thật tốt.",
            acceptedAnswers: ["いいシステムを作りたいと考えています。", "いいシステムを作りたいと考えています", "いいしすてむをつくりたいとかんがえています"]
        },
        {
            id: 62,
            speaker: "B",
            japanese: "はい、",
            reading: "はい、",
            romaji: "hai,",
            english: "Yes,",
            vietnamese: "Vâng,",
            acceptedAnswers: ["はい、", "はい"]
        },
        {
            id: 63,
            speaker: "B",
            japanese: "品質にも気をつけながら進めていきたいと思います。",
            reading: "ひんしつにもきをつけるながらすすめていきたいとおもいます。",
            romaji: "hinshitsu ni mo ki wo tsukenagara susumete ikitai to omoimasu.",
            english: "I would like to proceed while paying attention to quality as well.",
            vietnamese: "tôi sẽ chú ý đến cả chất lượng khi triển khai công việc.",
            acceptedAnswers: ["品質にも気をつけながら進めていきたいと思います。", "品質にも気をつけながら進めていきたいと思います", "ひんしつにもきをつながらすすめていきたいとおもいます", "ひんしつにもきをつけるながらすすめていきたいとおもいます"]
        },
        {
            id: 64,
            speaker: "B",
            japanese: "チームの一員として、",
            reading: "ちーむのいちいんとして、",
            romaji: "chiimu no ichiin to shite,",
            english: "As a member of the team,",
            vietnamese: "Với tư cách là một thành viên trong team,",
            acceptedAnswers: ["チームの一員として、", "チームの一員として", "ちーむのいちいんとして"]
        },
        {
            id: 65,
            speaker: "B",
            japanese: "しっかり対応します。",
            reading: "しっかりたいおうします。",
            romaji: "shikkari taiou shimasu.",
            english: "I will respond properly.",
            vietnamese: "tôi sẽ cố gắng đối ứng thật tốt.",
            acceptedAnswers: ["しっかり対応します。", "しっかり対応します", "しっかりたいおうします"]
        },
        {
            id: 66,
            speaker: "A",
            japanese: "心強いですね。",
            reading: "こころづよいですね。",
            romaji: "kokorozuyoi desu ne.",
            english: "That is reassuring.",
            vietnamese: "Thật yên tâm.",
            acceptedAnswers: ["心強いですね。", "心強いですね", "こころづよいですね"]
        },
        {
            id: 67,
            speaker: "A",
            japanese: "明日はキックオフ会議がありますね。",
            reading: "あしたはきっくおふかいぎがありますね。",
            romaji: "ashita wa kikkuofu kaigi ga arimasu ne.",
            english: "Tomorrow, there will be a kickoff meeting.",
            vietnamese: "Ngày mai sẽ có buổi họp kickoff.",
            acceptedAnswers: ["明日はキックオフ会議がありますね。", "明日はキックオフ会議がありますね", "あしたはきっくおふかいぎがありますね"]
        },
        {
            id: 68,
            speaker: "A",
            japanese: "会議ではプロジェクトの進め方やスケジュールについて説明しますので、",
            reading: "かいぎではぷろじぇくとのすすめかたやすけじゅーるについてせつめいしますので、",
            romaji: "kaigi de wa purojekuto no susumekata ya sukejuuru ni tsuite setsumei shimasu no de,",
            english: "In the meeting, we will explain how to proceed with the project and the schedule,",
            vietnamese: "Trong buổi họp, chúng tôi sẽ trình bày về cách triển khai dự án và schedule nên,",
            acceptedAnswers: ["会議ではプロジェクトの進め方やスケジュールについて説明しますので、", "会議ではプロジェクトの進め方やスケジュールについて説明しますので", "かいぎではぷろじぇくとのすすめかたやすけじゅーるについてせつめいしますので"]
        },
        {
            id: 69,
            speaker: "A",
            japanese: "事前に資料を確認して、",
            reading: "じぜんにしりょうをかくにんして、",
            romaji: "jizen ni shiryou wo kakunin shite,",
            english: "please check the materials beforehand,",
            vietnamese: "bạn hãy xem trước tài liệu,",
            acceptedAnswers: ["事前に資料を確認して、", "事前に資料を確認して", "じぜんにしりょうをかくにんして"]
        },
        {
            id: 70,
            speaker: "A",
            japanese: "分からない点があればまとめておいてください。",
            reading: "わからないてんがあればまとめておいてください。",
            romaji: "wakaranai ten ga areba matomete oite kudasai.",
            english: "and summarize any unclear points.",
            vietnamese: "nếu có gì chưa rõ thì hãy ghi lại nhé.",
            acceptedAnswers: ["分からない点があればまとめておいてください。", "分からない点があればまとめておいてください", "わからないてんがあればまとめておいてください"]
        },
        {
            id: 71,
            speaker: "B",
            japanese: "はい、分かりました。",
            reading: "はい、わかりました。",
            romaji: "hai, wakarimashita.",
            english: "Yes, I understand.",
            vietnamese: "Vâng, tôi hiểu rồi.",
            acceptedAnswers: ["はい、分かりました。", "はい分かりました", "はい、わかりました。", "はいわかりました"]
        },
        {
            id: 72,
            speaker: "B",
            japanese: "しっかり準備しておきます。",
            reading: "しっかりじゅんびしておきます。",
            romaji: "shikkari junbi shite okimasu.",
            english: "I will prepare thoroughly.",
            vietnamese: "Tôi sẽ chuẩn bị thật kỹ.",
            acceptedAnswers: ["しっかり準備しておきます。", "しっかり準備しておきます", "しっかりじゅんびしておきます"]
        },
        {
            id: 73,
            speaker: "A",
            japanese: "では、今日はこれで終了です。",
            reading: "では、きょうはこれでしゅうりょうです。",
            romaji: "dewa, kyou wa kore de shuuryou desu.",
            english: "Well then, that is all for today.",
            vietnamese: "Vậy hôm nay chúng ta dừng ở đây nhé.",
            acceptedAnswers: ["では、今日はこれで終了です。", "では今日はこれで終了です", "では、きょうはこれでしゅうりょうです", "ではきょうはこれでしゅうりょうです"]
        },
        {
            id: 74,
            speaker: "A",
            japanese: "今日から一緒に働けるのを楽しみにしています。",
            reading: "きょうからいっしょにはたらけるのをたのしみにしています。",
            romaji: "kyou kara issho ni hatarakeru no wo tanoshimi ni shite imasu.",
            english: "I look forward to working with you from today.",
            vietnamese: "Tôi rất mong chờ được làm việc cùng bạn từ hôm nay.",
            acceptedAnswers: ["今日から一緒に働けるのを楽しみにしています。", "今日から一緒に働けるのを楽しみにしています", "きょうからいっしょにはたらけるのをたのしみにしています"]
        },
        {
            id: 75,
            speaker: "B",
            japanese: "私も楽しみにしています。",
            reading: "わたしもたのしみにしています。",
            romaji: "watashi mo tanoshimi ni shite imasu.",
            english: "I am also looking forward to it.",
            vietnamese: "Tôi cũng rất háo hức.",
            acceptedAnswers: ["私も楽しみにしています。", "私も楽しみにしています", "わたしもたのしみにしています"]
        },
        {
            id: 76,
            speaker: "B",
            japanese: "今日からよろしくお願いいたします。",
            reading: "きょうからよろしくおねがいいたします。",
            romaji: "kyou kara yoroshiku onegai itashimasu.",
            english: "I look forward to working with you from today.",
            vietnamese: "Từ hôm nay mong được anh giúp đỡ.",
            acceptedAnswers: ["今日からよろしくお願いいたします。", "今日からよろしくお願いいたします", "きょうからよろしくおねがいいたします"]
        },
        {
            id: 77,
            speaker: "A",
            japanese: "こちらこそ、ありがとうございます。",
            reading: "こちらこそ、ありがとうございます。",
            romaji: "kochira koso, arigatou gozaimasu.",
            english: "Thank you as well.",
            vietnamese: "Cảm ơn bạn.",
            acceptedAnswers: ["こちらこそ、ありがとうございます。", "こちらこそありがとうございます"]
        },
        {
            id: 78,
            speaker: "A",
            japanese: "今後ともよろしくお願いいたします。",
            reading: "こんごともよろしくおねがいいたします。",
            romaji: "kongo tomo yoroshiku onegai itashimasu.",
            english: "I look forward to continuing to work with you.",
            vietnamese: "Tôi cũng mong được bạn hỗ trợ trong thời gian tới.",
            acceptedAnswers: ["今後ともよろしくお願いいたします。", "今後ともよろしくお願いいたします", "こんごともよろしくおねがいいたします"]
        }
    ]
};