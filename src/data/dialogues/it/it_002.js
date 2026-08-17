export const IT_002_DIALOGUE = {
    id: "it-002",
    level: "IT",
    lesson: "TOPIC 1",
    title: "キックオフ会議",
    description: "プロジェクトの目的・概要・体制の説明。自動化テストPOCプロジェクトのキックオフ会議で、Satoがプロジェクト目的を説明し、Lanが概要・体制・計画・課題・リスクを説明します。",
    category: "Kickoff / Automation Test POC",
    characters: [
        {
            key: "A",
            name: "ラン",
            displayName: "Lan",
            role: "PM of automation test POC project from NTT Vietnam"
        },
        {
            key: "B",
            name: "佐藤",
            displayName: "Sato",
            role: "Project owner from Sakura Software"
        }
    ],
    lines: [
        {
            id: 1,
            speaker: "A",
            japanese: "では、キックオフ会議を始めたいと思います。",
            reading: "では、きっくおふかいぎをはじめたいとおもいます。",
            romaji: "dewa, kikkuofu kaigi wo hajimetai to omoimasu.",
            english: "Now, I would like to start the kickoff meeting.",
            vietnamese: "Chúng ta bắt đầu buổi họp kickoff nhé.",
            acceptedAnswers: ["では、キックオフ会議を始めたいと思います。", "ではキックオフ会議を始めたいと思います", "では、きっくおふかいぎをはじめたいとおもいます", "ではきっくおふかいぎをはじめたいとおもいます"]
        },
        {
            id: 2,
            speaker: "A",
            japanese: "本日はお忙しいところ、ご参加いただきありがとうございます。",
            reading: "ほんじつはおいそがしいところ、ごさんかいただきありがとうございます。",
            romaji: "honjitsu wa oisogashii tokoro, gosanka itadaki arigatou gozaimasu.",
            english: "Thank you for participating today despite your busy schedule.",
            vietnamese: "Cảm ơn mọi người đã tham gia dù đang rất bận.",
            acceptedAnswers: ["本日はお忙しいところ、ご参加いただきありがとうございます。", "本日はお忙しいところご参加いただきありがとうございます", "ほんじつはおいそがしいところ、ごさんかいただきありがとうございます", "ほんじつはおいそがしいところごさんかいただきありがとうございます"]
        },
        {
            id: 3,
            speaker: "B",
            japanese: "こちらこそ、ありがとうございます。よろしくお願いします。",
            reading: "こちらこそ、ありがとうございます。よろしくお願いします。",
            romaji: "kochira koso, arigatou gozaimasu. yoroshiku onegai shimasu.",
            english: "Thank you as well. I look forward to working with you.",
            vietnamese: "Chúng tôi cũng xin cảm ơn, mong các bạn giúp đỡ.",
            acceptedAnswers: ["こちらこそ、ありがとうございます。よろしくお願いします。", "こちらこそありがとうございますよろしくお願いします", "こちらこそ、ありがとうございます。よろしくおねがいします。", "こちらこそありがとうございますよろしくおねがいします"]
        },
        {
            id: 4,
            speaker: "A",
            japanese: "本日のアジェンダですが、",
            reading: "ほんじつのあじぇんだですが、",
            romaji: "honjitsu no ajenda desu ga,",
            english: "Regarding today's agenda,",
            vietnamese: "Về agenda hôm nay,",
            acceptedAnswers: ["本日のアジェンダですが、", "本日のアジェンダですが", "ほんじつのあじぇんだですが"]
        },
        {
            id: 5,
            speaker: "A",
            japanese: "最初に佐藤様にプロジェクトの目的を説明していただきます。",
            reading: "さいしょにさとうさまにぷろじぇくとのもくてきをせつめいしていただきます。",
            romaji: "saisho ni satou sama ni purojekuto no mokuteki wo setsumei shite itadakimasu.",
            english: "first, Mr. Sato will explain the purpose of the project.",
            vietnamese: "trước tiên anh Sato sẽ trình bày về mục đích dự án.",
            acceptedAnswers: ["最初に佐藤様にプロジェクトの目的を説明していただきます。", "最初に佐藤様にプロジェクトの目的を説明していただきます", "さいしょにさとうさまにぷろじぇくとのもくてきをせつめいしていただきます"]
        },
        {
            id: 6,
            speaker: "A",
            japanese: "次に、弊社がキックオフ資料を説明いたします。",
            reading: "つぎに、へいしゃがきっくおふしりょうをせつめいいたします。",
            romaji: "tsugi ni, heisha ga kikkuofu shiryou wo setsumei itashimasu.",
            english: "Next, our side will explain the kickoff materials.",
            vietnamese: "Sau đó, phía bên tôi sẽ giải thích về tài liệu kickoff.",
            acceptedAnswers: ["次に、弊社がキックオフ資料を説明いたします。", "次に弊社がキックオフ資料を説明いたします", "つぎに、へいしゃがきっくおふしりょうをせつめいいたします", "つぎにへいしゃがきっくおふしりょうをせつめいいたします"]
        },
        {
            id: 7,
            speaker: "A",
            japanese: "最後にQ&Aと相談をします。",
            reading: "さいごにきゅーあんどえーとそうだんをします。",
            romaji: "saigo ni kyuu ando ee to soudan wo shimasu.",
            english: "Finally, we will have Q&A and discussion.",
            vietnamese: "Cuối cùng chúng ta sẽ thực hiện Q&A và thảo luận.",
            acceptedAnswers: ["最後にQ&Aと相談をします。", "最後にQ&Aと相談をします", "最後にキューアンドエーと相談をします", "さいごにQ&Aとそうだんをします", "さいごにきゅーあんどえーとそうだんをします"]
        },
        {
            id: 8,
            speaker: "A",
            japanese: "この順番で進めたいと思いますが、よろしいでしょうか。",
            reading: "このじゅんばんですすめたいとおもいますが、よろしいでしょうか。",
            romaji: "kono junban de susumetai to omoimasu ga, yoroshii desu ka.",
            english: "I would like to proceed in this order. Is that all right?",
            vietnamese: "Chúng ta sẽ tiến hành theo thứ tự này, mọi người thấy ổn không ạ?",
            acceptedAnswers: ["この順番で進めたいと思いますが、よろしいでしょうか。", "この順番で進めたいと思いますがよろしいでしょうか", "このじゅんばんですすめたいとおもいますが、よろしいでしょうか", "このじゅんばんですすめたいとおもいますがよろしいでしょうか"]
        },
        {
            id: 9,
            speaker: "B",
            japanese: "はい、そうしましょう。",
            reading: "はい、そうしましょう。",
            romaji: "hai, sou shimashou.",
            english: "Yes, let's do that.",
            vietnamese: "Vâng, OK nhé.",
            acceptedAnswers: ["はい、そうしましょう。", "はいそうしましょう"]
        },
        {
            id: 10,
            speaker: "A",
            japanese: "では、まず佐藤さんから目的についてご説明をお願いします。",
            reading: "では、まずさとうさんからもくてきについてごせつめいをおねがいします。",
            romaji: "dewa, mazu satou san kara mokuteki ni tsuite gosetsumei wo onegai shimasu.",
            english: "Then, first, Mr. Sato, please explain the purpose.",
            vietnamese: "Vậy trước tiên, xin mời anh Sato trình bày về mục đích dự án.",
            acceptedAnswers: ["では、まず佐藤さんから目的についてご説明をお願いします。", "ではまず佐藤さんから目的についてご説明をお願いします", "では、まずさとうさんからもくてきについてごせつめいをおねがいします", "ではまずさとうさんからもくてきについてごせつめいをおねがいします"]
        },
        {
            id: 11,
            speaker: "B",
            japanese: "はい、ありがとうございます。",
            reading: "はい、ありがとうございます。",
            romaji: "hai, arigatou gozaimasu.",
            english: "Yes, thank you.",
            vietnamese: "Vâng, cảm ơn.",
            acceptedAnswers: ["はい、ありがとうございます。", "はいありがとうございます"]
        },
        {
            id: 12,
            speaker: "B",
            japanese: "今回のプロジェクトは、自動化テストのPOCプロジェクトです。",
            reading: "こんかいのぷろじぇくとは、じどうかてすとのぴーおーしーぷろじぇくとです。",
            romaji: "konkai no purojekuto wa, jidouka tesuto no piiooshii purojekuto desu.",
            english: "This project is an automation test POC project.",
            vietnamese: "Dự án lần này là dự án POC về test tự động.",
            acceptedAnswers: ["今回のプロジェクトは、自動化テストのPOCプロジェクトです。", "今回のプロジェクトは自動化テストのPOCプロジェクトです", "今回のプロジェクトは自動化テストのピーオーシープロジェクトです", "こんかいのぷろじぇくとは、じどうかてすとのPOCぷろじぇくとです", "こんかいのぷろじぇくとはじどうかてすとのぴーおーしーぷろじぇくとです"]
        },
        {
            id: 13,
            speaker: "A",
            japanese: "POCというのは、どのような意味でしょうか。",
            reading: "ぴーおーしーというのは、どのようないみでしょうか。",
            romaji: "piiooshii to iu no wa, dono you na imi desu ka.",
            english: "What does POC mean?",
            vietnamese: "POC có nghĩa là gì vậy ạ?",
            acceptedAnswers: ["POCというのは、どのような意味でしょうか。", "POCというのはどのような意味でしょうか", "ピーオーシーというのはどのような意味でしょうか", "ぴーおーしーというのはどのようないみでしょうか"]
        },
        {
            id: 14,
            speaker: "B",
            japanese: "はい、新しいアイデアや方法が使えるかどうか、",
            reading: "はい、あたらしいあいであやほうほうがつかえるかどうか、",
            romaji: "hai, atarashii aidea ya houhou ga tsukaeru ka dou ka,",
            english: "Yes, to see whether a new idea or method can be used,",
            vietnamese: "Vâng, để kiểm chứng xem ý tưởng hay phương pháp mới có dùng được hay không,",
            acceptedAnswers: ["はい、新しいアイデアや方法が使えるかどうか、", "はい新しいアイデアや方法が使えるかどうか", "はい、あたらしいあいであやほうほうがつかえるかどうか", "はいあたらしいあいであやほうほうがつかえるかどうか"]
        },
        {
            id: 15,
            speaker: "B",
            japanese: "確認するためのものです。",
            reading: "かくにんするためのものです。",
            romaji: "kakunin suru tame no mono desu.",
            english: "it is for checking that.",
            vietnamese: "đó là mục đích của dự án này.",
            acceptedAnswers: ["確認するためのものです。", "確認するためのものです", "かくにんするためのものです"]
        },
        {
            id: 16,
            speaker: "A",
            japanese: "なるほど、分かりました。",
            reading: "なるほど、わかりました。",
            romaji: "naruhodo, wakarimashita.",
            english: "I see. I understand.",
            vietnamese: "À ra vậy, tôi hiểu rồi.",
            acceptedAnswers: ["なるほど、分かりました。", "なるほど分かりました", "なるほど、わかりました。", "なるほどわかりました"]
        },
        {
            id: 17,
            speaker: "B",
            japanese: "現在は手動で単体テストを行っていますが、",
            reading: "げんざいはしゅどうでたんたいてすとをおこなっていますが、",
            romaji: "genzai wa shudou de tantai tesuto wo okonatte imasu ga,",
            english: "Currently, unit tests are performed manually,",
            vietnamese: "Hiện tại chúng ta đang thực hiện unit test thủ công,",
            acceptedAnswers: ["現在は手動で単体テストを行っていますが、", "現在は手動で単体テストを行っていますが", "げんざいはしゅどうでたんたいてすとをおこなっていますが"]
        },
        {
            id: 18,
            speaker: "B",
            japanese: "時間がかかっています。",
            reading: "じかんがかかっています。",
            romaji: "jikan ga kakaatte imasu.",
            english: "but they take time.",
            vietnamese: "nhưng việc này tốn khá nhiều thời gian.",
            acceptedAnswers: ["時間がかかっています。", "時間がかかっています", "じかんがかかっています"]
        },
        {
            id: 19,
            speaker: "A",
            japanese: "確かに、手動だと時間がかかりますね。",
            reading: "たしかに、しゅどうだとじかんがかかりますね。",
            romaji: "tashika ni, shudou dato jikan ga kakarimasu ne.",
            english: "Indeed, manual work takes time.",
            vietnamese: "Đúng vậy, làm thủ công thì sẽ mất thời gian.",
            acceptedAnswers: ["確かに、手動だと時間がかかりますね。", "確かに手動だと時間がかかりますね", "たしかに、しゅどうだとじかんがかかりますね", "たしかにしゅどうだとじかんがかかりますね"]
        },
        {
            id: 20,
            speaker: "B",
            japanese: "そのため、テストを自動化して、",
            reading: "そのため、てすとをじどうかして、",
            romaji: "sono tame, tesuto wo jidouka shite,",
            english: "Therefore, by automating testing,",
            vietnamese: "Vì vậy, chúng tôi muốn tự động hóa test,",
            acceptedAnswers: ["そのため、テストを自動化して、", "そのためテストを自動化して", "そのため、てすとをじどうかして", "そのためてすとをじどうかして"]
        },
        {
            id: 21,
            speaker: "B",
            japanese: "工数を減らしたいと考えています。",
            reading: "こうすうをへらしたいとかんがえています。",
            romaji: "kousuu wo herashitai to kangaete imasu.",
            english: "we would like to reduce effort.",
            vietnamese: "để giảm công sức thực hiện.",
            acceptedAnswers: ["工数を減らしたいと考えています。", "工数を減らしたいと考えています", "こうすうをへらしたいとかんがえています"]
        },
        {
            id: 22,
            speaker: "A",
            japanese: "はい、とても重要なポイントだと思います。",
            reading: "はい、とてもじゅうようなぽいんとだとおもいます。",
            romaji: "hai, totemo juuyou na pointo da to omoimasu.",
            english: "Yes, I think that is a very important point.",
            vietnamese: "Vâng, theo tôi đó là một điểm rất quan trọng.",
            acceptedAnswers: ["はい、とても重要なポイントだと思います。", "はいとても重要なポイントだと思います", "はい、とてもじゅうようなぽいんとだとおもいます", "はいとてもじゅうようなぽいんとだとおもいます"]
        },
        {
            id: 23,
            speaker: "B",
            japanese: "また、自動化によって、効率や効果も確認したいです。",
            reading: "また、じどうかによって、こうりつやこうかもかくにんしたいです。",
            romaji: "mata, jidouka ni yotte, kouritsu ya kouka mo kakunin shitai desu.",
            english: "Also, through automation, we would like to check efficiency and effectiveness.",
            vietnamese: "Ngoài ra, chúng tôi cũng muốn kiểm tra hiệu quả và hiệu suất khi tự động hóa.",
            acceptedAnswers: ["また、自動化によって、効率や効果も確認したいです。", "また自動化によって効率や効果も確認したいです", "また、じどうかによって、こうりつやこうかもかくにんしたいです", "またじどうかによってこうりつやこうかもかくにんしたいです"]
        },
        {
            id: 24,
            speaker: "A",
            japanese: "分かりました。ご説明ありがとうございます。",
            reading: "わかりました。ごせつめいありがとうございます。",
            romaji: "wakarimashita. gosetsumei arigatou gozaimasu.",
            english: "I understand. Thank you for the explanation.",
            vietnamese: "Tôi hiểu rồi. Cảm ơn anh đã giải thích.",
            acceptedAnswers: ["分かりました。ご説明ありがとうございます。", "分かりましたご説明ありがとうございます", "わかりました。ごせつめいありがとうございます。", "わかりましたごせつめいありがとうございます"]
        },
        {
            id: 25,
            speaker: "A",
            japanese: "それでは、私からキックオフ資料を説明いたします。",
            reading: "それでは、わたしからきっくおふしりょうをせつめいいたします。",
            romaji: "sore dewa, watashi kara kikkuofu shiryou wo setsumei itashimasu.",
            english: "Now, I will explain the kickoff materials.",
            vietnamese: "Tiếp theo, tôi xin trình bày về tài liệu kickoff.",
            acceptedAnswers: ["それでは、私からキックオフ資料を説明いたします。", "それでは私からキックオフ資料を説明いたします", "それでは、わたしからきっくおふしりょうをせつめいいたします", "それではわたしからきっくおふしりょうをせつめいいたします"]
        },
        {
            id: 26,
            speaker: "A",
            japanese: "プロジェクトの概要、体制、計画、",
            reading: "ぷろじぇくとのがいよう、たいせい、けいかく、",
            romaji: "purojekuto no gaiyou, taisei, keikaku,",
            english: "Project overview, structure, plan,",
            vietnamese: "Các mục tổng quan, tổ chức dự án, kế hoạch,",
            acceptedAnswers: ["プロジェクトの概要、体制、計画、", "プロジェクトの概要体制計画", "ぷろじぇくとのがいよう、たいせい、けいかく", "ぷろじぇくとのがいようたいせいけいかく"]
        },
        {
            id: 27,
            speaker: "A",
            japanese: "リスト・課題の順を追って説明いたします。",
            reading: "りすと・かだいのじゅんをおってせつめいいたします。",
            romaji: "risuto/kadai no jun wo otte setsumei itashimasu.",
            english: "I will explain in order along with list and issues.",
            vietnamese: "tôi sẽ lần lượt trình bày cùng các vấn đề và rủi ro.",
            acceptedAnswers: ["リスト・課題の順を追って説明いたします。", "リスト課題の順を追って説明いたします", "りすと・かだいのじゅんをおってせつめいいたします", "りすとかだいのじゅんをおってせつめいいたします"]
        },
        {
            id: 28,
            speaker: "B",
            japanese: "はい、お願いします。",
            reading: "はい、おねがいします。",
            romaji: "hai, onegai shimasu.",
            english: "Yes, please go ahead.",
            vietnamese: "Vâng, mời bạn trình bày nhé.",
            acceptedAnswers: ["はい、お願いします。", "はいお願いします", "はい、おねがいします。", "はいおねがいします"]
        },
        {
            id: 29,
            speaker: "A",
            japanese: "まず、プロジェクト概要についてです。",
            reading: "まず、ぷろじぇくとがいようについてです。",
            romaji: "mazu, purojekuto gaiyou ni tsuite desu.",
            english: "First, about the project overview.",
            vietnamese: "Trước tiên là về tổng quan dự án.",
            acceptedAnswers: ["まず、プロジェクト概要についてです。", "まずプロジェクト概要についてです", "まず、ぷろじぇくとがいようについてです", "まずぷろじぇくとがいようについてです"]
        },
        {
            id: 30,
            speaker: "A",
            japanese: "今回のプロジェクトでは、手動と自動の両方で単体テストを行ってから、",
            reading: "こんかいのぷろじぇくとでは、しゅどうとじどうのりょうほうでたんたいてすとをおこなってから、",
            romaji: "konkai no purojekuto de wa, shudou to jidou no ryouhou de tantai tesuto wo okonatte kara,",
            english: "In this project, after performing unit tests both manually and automatically,",
            vietnamese: "Trong dự án này, sau khi thực hiện cả test thủ công và test tự động,",
            acceptedAnswers: ["今回のプロジェクトでは、手動と自動の両方で単体テストを行ってから、", "今回のプロジェクトでは手動と自動の両方で単体テストを行ってから", "こんかいのぷろじぇくとでは、しゅどうとじどうのりょうほうでたんたいてすとをおこなってから", "こんかいのぷろじぇくとではしゅどうとじどうのりょうほうでたんたいてすとをおこなってから"]
        },
        {
            id: 31,
            speaker: "A",
            japanese: "テスト時間や結果を比較して、効率を確認します。",
            reading: "てすとじかんやけっかをひかくして、こうりつをかくにんします。",
            romaji: "tesuto jikan ya kekka wo hikaku shite, kouritsu wo kakunin shimasu.",
            english: "we will compare test time and results to verify efficiency.",
            vietnamese: "chúng ta sẽ so sánh thời gian và kết quả để đánh giá hiệu quả.",
            acceptedAnswers: ["テスト時間や結果を比較して、効率を確認します。", "テスト時間や結果を比較して効率を確認します", "てすとじかんやけっかをひかくして、こうりつをかくにんします", "てすとじかんやけっかをひかくしてこうりつをかくにんします"]
        },
        {
            id: 32,
            speaker: "B",
            japanese: "分かりやすいですね。",
            reading: "わかりやすいですね。",
            romaji: "wakariyasui desu ne.",
            english: "That is easy to understand.",
            vietnamese: "Tôi thấy rất dễ hiểu.",
            acceptedAnswers: ["分かりやすいですね。", "分かりやすいですね", "わかりやすいですね。", "わかりやすいですね"]
        },
        {
            id: 33,
            speaker: "A",
            japanese: "次に、プロジェクト体制について説明します。",
            reading: "つぎに、ぷろじぇくとたいせいについてせつめいします。",
            romaji: "tsugi ni, purojekuto taisei ni tsuite setsumei shimasu.",
            english: "Next, I will explain the project structure.",
            vietnamese: "Tiếp theo là về cơ cấu tổ chức dự án.",
            acceptedAnswers: ["次に、プロジェクト体制について説明します。", "次にプロジェクト体制について説明します", "つぎに、ぷろじぇくとたいせいについてせつめいします", "つぎにぷろじぇくとたいせいについてせつめいします"]
        },
        {
            id: 34,
            speaker: "A",
            japanese: "このプロジェクトは日本とベトナムのチームで進めます。",
            reading: "このぷろじぇくとはにほんとべとなむのちーむですすめます。",
            romaji: "kono purojekuto wa nihon to betonamu no chiimu de susumemasu.",
            english: "This project will be carried out by teams in Japan and Vietnam.",
            vietnamese: "Dự án sẽ được thực hiện bởi team Nhật và team Việt Nam.",
            acceptedAnswers: ["このプロジェクトは日本とベトナムのチームで進めます。", "このプロジェクトは日本とベトナムのチームで進めます", "このぷろじぇくとはにほんとべとなむのちーむですすめます"]
        },
        {
            id: 35,
            speaker: "B",
            japanese: "それぞれの役割はどうなりますか。",
            reading: "それぞれのやくわりはどうなりますか。",
            romaji: "sorezore no yakuwari wa dou narimasu ka.",
            english: "What are the respective roles?",
            vietnamese: "Vai trò của mỗi bên sẽ như thế nào?",
            acceptedAnswers: ["それぞれの役割はどうなりますか。", "それぞれの役割はどうなりますか", "それぞれのやくわりはどうなりますか"]
        },
        {
            id: 36,
            speaker: "A",
            japanese: "日本側は要件定義とレビューを担当します。",
            reading: "にほんがわはようけんていぎとれびゅーをたんとうします。",
            romaji: "nihongawa wa youken teigi to rebyuu wo tantou shimasu.",
            english: "The Japan side will handle requirement definition and review.",
            vietnamese: "Phía Nhật sẽ phụ trách định nghĩa yêu cầu và review.",
            acceptedAnswers: ["日本側は要件定義とレビューを担当します。", "日本側は要件定義とレビューを担当します", "にほんがわはようけんていぎとれびゅーをたんとうします"]
        },
        {
            id: 37,
            speaker: "A",
            japanese: "ベトナム側は開発とテストを担当します。",
            reading: "べとなむがわはかいはつとてすとをたんとうします。",
            romaji: "betonamugawa wa kaihatsu to tesuto wo tantou shimasu.",
            english: "The Vietnam side will handle development and testing.",
            vietnamese: "Phía Việt Nam sẽ phụ trách phát triển và thực hiện test.",
            acceptedAnswers: ["ベトナム側は開発とテストを担当します。", "ベトナム側は開発とテストを担当します", "べとなむがわはかいはつとてすとをたんとうします"]
        },
        {
            id: 38,
            speaker: "B",
            japanese: "分かりました。",
            reading: "わかりました。",
            romaji: "wakarimashita.",
            english: "I understand.",
            vietnamese: "Tôi hiểu rồi.",
            acceptedAnswers: ["分かりました。", "分かりました", "わかりました。", "わかりました"]
        },
        {
            id: 39,
            speaker: "A",
            japanese: "私はPMとして全体を管理します。",
            reading: "わたしはぴーえむとしてぜんたいをかんりします。",
            romaji: "watashi wa PM to shite zentai wo kanri shimasu.",
            english: "As PM, I will manage the whole project.",
            vietnamese: "Tôi sẽ quản lý toàn bộ dự án với vai trò PM.",
            acceptedAnswers: ["私はPMとして全体を管理します。", "私はPMとして全体を管理します", "私はピーエムとして全体を管理します", "わたしはPMとしてぜんたいをかんりします", "わたしはぴーえむとしてぜんたいをかんりします"]
        },
        {
            id: 40,
            speaker: "A",
            japanese: "また、フロントSEとして両チームの間で調整を行います。",
            reading: "また、ふろんとえすいーとしてりょうちーむのあいだでちょうせいをおこないます。",
            romaji: "mata, furonto SE to shite ryou chiimu no aida de chousei wo okonaimasu.",
            english: "Also, as Front SE, I will coordinate between both teams.",
            vietnamese: "Ngoài ra, với vai trò Front SE, tôi sẽ thực hiện điều phối giữa hai team.",
            acceptedAnswers: ["また、フロントSEとして両チームの間で調整を行います。", "またフロントSEとして両チームの間で調整を行います", "またフロントエスイーとして両チームの間で調整を行います", "また、ふろんとSEとしてりょうちーむのあいだでちょうせいをおこないます", "またふろんとえすいーとしてりょうちーむのあいだでちょうせいをおこないます"]
        },
        {
            id: 41,
            speaker: "B",
            japanese: "コミュニケーションが大切ですね。",
            reading: "こみゅにけーしょんがたいせつですね。",
            romaji: "komyunikeeshon ga taisetsu desu ne.",
            english: "Communication is important, isn't it?",
            vietnamese: "Việc giao tiếp là rất quan trọng nhỉ.",
            acceptedAnswers: ["コミュニケーションが大切ですね。", "コミュニケーションが大切ですね", "こみゅにけーしょんがたいせつですね"]
        },
        {
            id: 42,
            speaker: "A",
            japanese: "はい、情報共有をしっかり行いたいと思います。",
            reading: "はい、じょうほうきょうゆうをしっかりおこないたいとおもいます。",
            romaji: "hai, jouhou kyouyuu wo shikkari okonaitai to omoimasu.",
            english: "Yes, I would like to make sure information sharing is done properly.",
            vietnamese: "Vâng, tôi muốn đảm bảo việc chia sẻ thông tin được thực hiện tốt.",
            acceptedAnswers: ["はい、情報共有をしっかり行いたいと思います。", "はい情報共有をしっかり行いたいと思います", "はい、じょうほうきょうゆうをしっかりおこないたいとおもいます", "はいじょうほうきょうゆうをしっかりおこないたいとおもいます"]
        },
        {
            id: 43,
            speaker: "A",
            japanese: "次に計画について説明します。",
            reading: "つぎにけいかくについてせつめいします。",
            romaji: "tsugi ni keikaku ni tsuite setsumei shimasu.",
            english: "Next, I will explain the plan.",
            vietnamese: "Tiếp theo là về kế hoạch dự án.",
            acceptedAnswers: ["次に計画について説明します。", "次に計画について説明します", "つぎにけいかくについてせつめいします"]
        },
        {
            id: 44,
            speaker: "A",
            japanese: "まず、環境の準備を行います。",
            reading: "まず、かんきょうのじゅんびをおこないます。",
            romaji: "mazu, kankyou no junbi wo okonaimasu.",
            english: "First, we will prepare the environment.",
            vietnamese: "Trước tiên, chúng ta sẽ chuẩn bị môi trường.",
            acceptedAnswers: ["まず、環境の準備を行います。", "まず環境の準備を行います", "まず、かんきょうのじゅんびをおこないます", "まずかんきょうのじゅんびをおこないます"]
        },
        {
            id: 45,
            speaker: "A",
            japanese: "その後、テストツールを選びます。",
            reading: "そのご、てすとつーるをえらびます。",
            romaji: "sono go, tesuto tsuuru wo erabimasu.",
            english: "After that, we will select a test tool.",
            vietnamese: "Sau đó sẽ lựa chọn tool test.",
            acceptedAnswers: ["その後、テストツールを選びます。", "その後テストツールを選びます", "そのご、てすとつーるをえらびます", "そのごてすとつーるをえらびます"]
        },
        {
            id: 46,
            speaker: "B",
            japanese: "ツールはいくつか候補がありますか。",
            reading: "つーるはいくつかこうほがありますか。",
            romaji: "tsuuru wa ikutsuka kouho ga arimasu ka.",
            english: "Are there several candidate tools?",
            vietnamese: "Về tool test thì có nhiều lựa chọn không?",
            acceptedAnswers: ["ツールはいくつか候補がありますか。", "ツールはいくつか候補がありますか", "つーるはいくつかこうほがありますか"]
        },
        {
            id: 47,
            speaker: "A",
            japanese: "はい、いくつかありますので、比較して決めます。",
            reading: "はい、いくつかありますので、ひかくしてきめます。",
            romaji: "hai, ikutsuka arimasu no de, hikaku shite kimemasu.",
            english: "Yes, there are several, so we will compare them and decide.",
            vietnamese: "Vâng, cũng có một số lựa chọn, chúng tôi sẽ so sánh rồi quyết định.",
            acceptedAnswers: ["はい、いくつかありますので、比較して決めます。", "はいいくつかありますので比較して決めます", "はい、いくつかありますので、ひかくしてきめます", "はいいくつかありますのでひかくしてきめます"]
        },
        {
            id: 48,
            speaker: "B",
            japanese: "分かりました。",
            reading: "わかりました。",
            romaji: "wakarimashita.",
            english: "I understand.",
            vietnamese: "Tôi hiểu rồi.",
            acceptedAnswers: ["分かりました。", "分かりました", "わかりました。", "わかりました"]
        },
        {
            id: 49,
            speaker: "A",
            japanese: "次に、テストケースを作成して実行します。",
            reading: "つぎに、てすとけーすをさくせいしてじっこうします。",
            romaji: "tsugi ni, tesuto keesu wo sakusei shite jikkou shimasu.",
            english: "Next, we will create and execute test cases.",
            vietnamese: "Tiếp theo, chúng tôi sẽ tạo test case và thực hiện test.",
            acceptedAnswers: ["次に、テストケースを作成して実行します。", "次にテストケースを作成して実行します", "つぎに、てすとけーすをさくせいしてじっこうします", "つぎにてすとけーすをさくせいしてじっこうします"]
        },
        {
            id: 50,
            speaker: "A",
            japanese: "最後に、結果をまとめて分析します。",
            reading: "さいごに、けっかをまとめてぶんせきします。",
            romaji: "saigo ni, kekka wo matomete bunseki shimasu.",
            english: "Finally, we will summarize and analyze the results.",
            vietnamese: "Cuối cùng, tổng hợp kết quả và tiến hành phân tích.",
            acceptedAnswers: ["最後に、結果をまとめて分析します。", "最後に結果をまとめて分析します", "さいごに、けっかをまとめてぶんせきします", "さいごにけっかをまとめてぶんせきします"]
        },
        {
            id: 51,
            speaker: "B",
            japanese: "スケジュールはどのくらいですか。",
            reading: "すけじゅーるはどのくらいですか。",
            romaji: "sukejuuru wa dono kurai desu ka.",
            english: "How long is the schedule?",
            vietnamese: "Về schedule thì sẽ mất khoảng bao lâu?",
            acceptedAnswers: ["スケジュールはどのくらいですか。", "スケジュールはどのくらいですか", "すけじゅーるはどのくらいですか"]
        },
        {
            id: 52,
            speaker: "A",
            japanese: "全体で約2か月を予定しています。",
            reading: "ぜんたいでやくにかげつをよていしています。",
            romaji: "zentai de yaku nikagetsu wo yotei shite imasu.",
            english: "The whole project is planned to take about two months.",
            vietnamese: "Toàn bộ dự án dự kiến khoảng 2 tháng.",
            acceptedAnswers: ["全体で約2か月を予定しています。", "全体で約2か月を予定しています", "全体で約二か月を予定しています", "ぜんたいでやくにかげつをよていしています"]
        },
        {
            id: 53,
            speaker: "A",
            japanese: "次に、課題やリスクについて共有します。",
            reading: "つぎに、かだいやりすくについてきょうゆうします。",
            romaji: "tsugi ni, kadai ya risuku ni tsuite kyouyuu shimasu.",
            english: "Next, I will share issues and risks.",
            vietnamese: "Tiếp theo, tôi xin chia sẻ về các vấn đề và rủi ro.",
            acceptedAnswers: ["次に、課題やリスクについて共有します。", "次に課題やリスクについて共有します", "つぎに、かだいやりすくについてきょうゆうします", "つぎにかだいやりすくについてきょうゆうします"]
        },
        {
            id: 54,
            speaker: "A",
            japanese: "まず、ツール選定に時間がかかる可能性があります。",
            reading: "まず、つーるせんていにじかんがかかるかのうせいがありがす。",
            romaji: "mazu, tsuuru sentei ni jikan ga kakaru kanousei ga arimasu.",
            english: "First, selecting a tool may take time.",
            vietnamese: "Trước tiên, việc lựa chọn tool có thể sẽ mất thời gian.",
            acceptedAnswers: ["まず、ツール選定に時間がかかる可能性があります。", "まずツール選定に時間がかかる可能性があります", "まず、つーるせんていにじかんがかかるかのうせいがあります", "まずつーるせんていにじかんがかかるかのうせいがあります"]
        },
        {
            id: 55,
            speaker: "B",
            japanese: "確かに、その点は注意が必要ですね。",
            reading: "たしかに、そのてんはちゅういがひつようですね。",
            romaji: "tashika ni, sono ten wa chuui ga hitsuyou desu ne.",
            english: "Indeed, that point requires attention.",
            vietnamese: "Đúng vậy, tôi nghĩ cần chú ý ở điểm này.",
            acceptedAnswers: ["確かに、その点は注意が必要ですね。", "確かにその点は注意が必要ですね", "たしかに、そのてんはちゅういがひつようですね", "たしかにそのてんはちゅういがひつようですね"]
        },
        {
            id: 56,
            speaker: "A",
            japanese: "また、環境準備も時間がかかると思います。",
            reading: "また、かんきょうじゅんびもじかんがかかるとおもいます。",
            romaji: "mata, kankyou junbi mo jikan ga kakaru to omoimasu.",
            english: "Also, I think preparing the environment will take time.",
            vietnamese: "Ngoài ra, việc chuẩn bị môi trường cũng có thể sẽ mất thời gian.",
            acceptedAnswers: ["また、環境準備も時間がかかると思います。", "また環境準備も時間がかかると思います", "また、かんきょうじゅんびもじかんがかかるとおもいます", "またかんきょうじゅんびもじかんがかかるとおもいます"]
        },
        {
            id: 57,
            speaker: "B",
            japanese: "早めに進めたほうがいいですね。",
            reading: "はやめにすすめたほうがいいですね。",
            romaji: "hayame ni susumeta hou ga ii desu ne.",
            english: "It would be better to proceed early.",
            vietnamese: "Tôi nghĩ nên tiến hành sớm thì tốt hơn.",
            acceptedAnswers: ["早めに進めたほうがいいですね。", "早めに進めたほうがいいですね", "はやめにすすめたほうがいいですね"]
        },
        {
            id: 58,
            speaker: "A",
            japanese: "はい、そのように進めたいと思います。",
            reading: "はい、そのようにすすめたいとおもいます。",
            romaji: "hai, sono you ni susumetai to omoimasu.",
            english: "Yes, I would like to proceed that way.",
            vietnamese: "Vâng, chúng tôi sẽ xử lý theo hướng đó.",
            acceptedAnswers: ["はい、そのように進めたいと思います。", "はいそのように進めたいと思います", "はい、そのようにすすめたいとおもいます", "はいそのようにすすめたいとおもいます"]
        },
        {
            id: 59,
            speaker: "A",
            japanese: "また、リスクについても共有させていただきます。",
            reading: "また、りすくについてもきょうゆうさせていただきます。",
            romaji: "mata, risuku ni tsuite mo kyouyuu sasete itadakimasu.",
            english: "Also, I would like to share the risks.",
            vietnamese: "Tiếp theo, tôi xin chia sẻ về rủi ro.",
            acceptedAnswers: ["また、リスクについても共有させていただきます。", "またリスクについても共有させていただきます", "また、りすくについてもきょうゆうさせていただきます", "またりすくについてもきょうゆうさせていただきます"]
        },
        {
            id: 60,
            speaker: "A",
            japanese: "例えば、自動化テストの結果が",
            reading: "たとえば、じどうかてすとのけっかが",
            romaji: "tatoueba, jidouka tesuto no kekka ga",
            english: "For example, if the results of automated testing",
            vietnamese: "Ví dụ, kết quả của test tự động",
            acceptedAnswers: ["例えば、自動化テストの結果が", "例えば自動化テストの結果が", "たとえば、じどうかてすとのけっかが", "たとえばじどうかてすとのけっかが"]
        },
        {
            id: 61,
            speaker: "A",
            japanese: "期待どおりにならない可能性があります。",
            reading: "きたいどりにならないかのうせいがあります。",
            romaji: "kitai doori ni naranai kanousei ga arimasu.",
            english: "may not turn out as expected.",
            vietnamese: "có thể không đạt như kỳ vọng.",
            acceptedAnswers: ["期待どおりにならない可能性があります。", "期待どおりにならない可能性があります", "きたいどりにならないかのうせいがあります", "きたいどうりにならないかのうせいがあります"]
        },
        {
            id: 62,
            speaker: "B",
            japanese: "なるほど、それはあり得ますね。",
            reading: "なるほど、それはありえますね。",
            romaji: "naruhodo, sore wa ariemasu ne.",
            english: "I see, that is possible.",
            vietnamese: "Đúng là có khả năng đó nhỉ.",
            acceptedAnswers: ["なるほど、それはあり得ますね。", "なるほどそれはあり得ますね", "なるほど、それはありえますね", "なるほどそれはありえますね"]
        },
        {
            id: 63,
            speaker: "A",
            japanese: "はい。その場合は、",
            reading: "はい。そのばあいは、",
            romaji: "hai. sono baai wa,",
            english: "Yes. In that case,",
            vietnamese: "Vâng, trong trường hợp đó,",
            acceptedAnswers: ["はい。その場合は、", "はいその場合は", "はい。そのばあいは、", "はいそのばあいは"]
        },
        {
            id: 64,
            speaker: "A",
            japanese: "手動テストと合わせて確認しながら進めたいと思います。",
            reading: "しゅどうてすととあわせてかくにんしながらすすめたいとおもいます。",
            romaji: "shudou tesuto to awasete kakunin shinagara susumetai to omoimasu.",
            english: "I would like to proceed while checking together with manual testing.",
            vietnamese: "chúng tôi sẽ kết hợp với việc test thủ công để kiểm tra.",
            acceptedAnswers: ["手動テストと合わせて確認しながら進めたいと思います。", "手動テストと合わせて確認しながら進めたいと思います", "しゅどうてすととあわせてかくにんしながらすすめたいとおもいます"]
        },
        {
            id: 65,
            speaker: "A",
            japanese: "また、メンバーがツールに慣れていないため、",
            reading: "また、めんばーがつーるになれていないため、",
            romaji: "mata, menbaa ga tsuuru ni narete inai tame,",
            english: "Also, because members are not used to the tool,",
            vietnamese: "Ngoài ra, do các thành viên chưa quen với tool,",
            acceptedAnswers: ["また、メンバーがツールに慣れていないため、", "またメンバーがツールに慣れていないため", "また、めんばーがつーるになれていないため", "まためんばーがつーるになれていないため"]
        },
        {
            id: 66,
            speaker: "A",
            japanese: "作業に時間がかかる可能性もあります。",
            reading: "さぎょうにじかんがかかるかのうせいもあります。",
            romaji: "sagyou ni jikan ga kakaru kanousei mo arimasu.",
            english: "the work may take more time.",
            vietnamese: "nên có khả năng công việc sẽ mất nhiều thời gian hơn.",
            acceptedAnswers: ["作業に時間がかかる可能性もあります。", "作業に時間がかかる可能性もあります", "さぎょうにじかんがかかるかのうせいもあります"]
        },
        {
            id: 67,
            speaker: "B",
            japanese: "その点も考えておく必要がありますね。",
            reading: "そのてんもかんがえておくひつようがありますね。",
            romaji: "sono ten mo kangaete oku hitsuyou ga arimasu ne.",
            english: "We need to take that point into account as well.",
            vietnamese: "Tôi nghĩ chúng ta cũng cần tính đến điểm này.",
            acceptedAnswers: ["その点も考えておく必要がありますね。", "その点も考えておく必要がありますね", "そのてんもかんがえておくひつようがありますね"]
        },
        {
            id: 68,
            speaker: "A",
            japanese: "はい、必要に応じてトレーニングを行う予定です。",
            reading: "はい、ひつようにおうじてとれーにんぐをおこなうよていです。",
            romaji: "hai, hitsuyou ni oujite toreeningu wo okonau yotei desu.",
            english: "Yes, we plan to conduct training as needed.",
            vietnamese: "Vâng, tùy theo tình hình, chúng tôi sẽ tổ chức training khi cần thiết.",
            acceptedAnswers: ["はい、必要に応じてトレーニングを行う予定です。", "はい必要に応じてトレーニングを行う予定です", "はい、ひつようにおうじてとれーにんぐをおこなうよていです", "はいひつようにおうじてとれーにんぐをおこなうよていです"]
        },
        {
            id: 69,
            speaker: "B",
            japanese: "何か問題があれば、すぐに共有してください。",
            reading: "なにかもんだいがあれば、すぐにきょうゆうしてください。",
            romaji: "nanika mondai ga areba, sugu ni kyouyuu shite kudasai.",
            english: "If there are any problems, please share them immediately.",
            vietnamese: "Nếu có vấn đề gì thì bạn hãy chia sẻ ngay nhé.",
            acceptedAnswers: ["何か問題があれば、すぐに共有してください。", "何か問題があればすぐに共有してください", "なにかもんだいがあれば、すぐにきょうゆうしてください", "なにかもんだいがあればすぐにきょうゆうしてください"]
        },
        {
            id: 70,
            speaker: "A",
            japanese: "はい、承知しました。",
            reading: "はい、しょうちしました。",
            romaji: "hai, shouchi shimashita.",
            english: "Yes, understood.",
            vietnamese: "Vâng, tôi đã rõ.",
            acceptedAnswers: ["はい、承知しました。", "はい承知しました", "はい、しょうちしました。", "はいしょうちしました"]
        },
        {
            id: 71,
            speaker: "A",
            japanese: "では、この内容で進めたいと思いますが、よろしいでしょうか。",
            reading: "では、このないようですすめたいとおもいますが、よろしいでしょうか。",
            romaji: "dewa, kono naiyou de susumetai to omoimasu ga, yoroshii desu ka.",
            english: "Then, I would like to proceed with this content. Is that all right?",
            vietnamese: "Vậy thì chúng ta sẽ tiến hành dự án theo nội dung này, mọi người thấy ổn không ạ?",
            acceptedAnswers: ["では、この内容で進めたいと思いますが、よろしいでしょうか。", "ではこの内容で進めたいと思いますがよろしいでしょうか", "では、このないようですすめたいとおもいますが、よろしいでしょうか", "ではこのないようですすめたいとおもいますがよろしいでしょうか"]
        },
        {
            id: 72,
            speaker: "B",
            japanese: "はい、問題ありません。",
            reading: "はい、もんだいありません。",
            romaji: "hai, mondai arimasen.",
            english: "Yes, no problem.",
            vietnamese: "Vâng, không có vấn đề gì.",
            acceptedAnswers: ["はい、問題ありません。", "はい問題ありません", "はい、もんだいありません。", "はいもんだいありません"]
        },
        {
            id: 73,
            speaker: "A",
            japanese: "ありがとうございます。",
            reading: "ありがとうございます。",
            romaji: "arigatou gozaimasu.",
            english: "Thank you.",
            vietnamese: "Cảm ơn mọi người.",
            acceptedAnswers: ["ありがとうございます。", "ありがとうございます"]
        },
        {
            id: 74,
            speaker: "A",
            japanese: "それでは、本日のキックオフ会議はこれで終了といたします。",
            reading: "それでは、ほんじつのきっくおふかいぎはこれでしゅうりょうといいたします。",
            romaji: "sore dewa, honjitsu no kikkuofu kaigi wa kore de shuuryou to itashimasu.",
            english: "Then, today's kickoff meeting will end here.",
            vietnamese: "Vậy buổi họp kickoff hôm nay xin kết thúc tại đây.",
            acceptedAnswers: ["それでは、本日のキックオフ会議はこれで終了といたします。", "それでは本日のキックオフ会議はこれで終了といたします", "それでは、ほんじつのきっくおふかいぎはこれでしゅうりょうといいたします", "それではほんじつのきっくおふかいぎはこれでしゅうりょうといいたします"]
        },
        {
            id: 75,
            speaker: "B",
            japanese: "ありがとうございました。よろしくお願いします。",
            reading: "ありがとうございました。よろしくお願いします。",
            romaji: "arigatou gozaimashita. yoroshiku onegai shimasu.",
            english: "Thank you very much. I look forward to working with you.",
            vietnamese: "Cảm ơn các bạn, mong rằng chúng ta sẽ hợp tác tốt.",
            acceptedAnswers: ["ありがとうございました。よろしくお願いします。", "ありがとうございましたよろしくお願いします", "ありがとうございました。よろしくおねがいします。", "ありがとうございましたよろしくおねがいします"]
        },
        {
            id: 76,
            speaker: "A",
            japanese: "こちらこそ、よろしくお願いいたします。",
            reading: "こちらこそ、よろしくおねがいいたします。",
            romaji: "kochira koso, yoroshiku onegai itashimasu.",
            english: "Likewise, I look forward to working with you.",
            vietnamese: "Vâng, chúng tôi cũng vậy. Mong được hợp tác tốt.",
            acceptedAnswers: ["こちらこそ、よろしくお願いいたします。", "こちらこそよろしくお願いいたします", "こちらこそ、よろしくおねがいいたします。", "こちらこそよろしくおねがいいたします"]
        }
    ]
};