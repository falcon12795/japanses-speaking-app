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
            reading: "",
            romaji: "",
            english: "Now, I would like to start the kickoff meeting.",
            vietnamese: "Chúng ta bắt đầu buổi họp kickoff nhé.",
            acceptedAnswers: ["ではキックオフ会議を始めたいと思います"]
        },
        {
            id: 2,
            speaker: "A",
            japanese: "本日はお忙しいところ、ご参加いただきありがとうございます。",
            reading: "",
            romaji: "",
            english: "Thank you for participating today despite your busy schedule.",
            vietnamese: "Cảm ơn mọi người đã tham gia dù đang rất bận.",
            acceptedAnswers: ["本日はお忙しいところご参加いただきありがとうございます"]
        },
        {
            id: 3,
            speaker: "B",
            japanese: "こちらこそ、ありがとうございます。よろしくお願いします。",
            reading: "",
            romaji: "",
            english: "Thank you as well. I look forward to working with you.",
            vietnamese: "Chúng tôi cũng xin cảm ơn, mong các bạn giúp đỡ.",
            acceptedAnswers: ["こちらこそありがとうございますよろしくお願いします"]
        },
        {
            id: 4,
            speaker: "A",
            japanese: "本日のアジェンダですが、最初に佐藤様にプロジェクトの目的を説明していただきます。",
            reading: "",
            romaji: "",
            english: "Regarding today's agenda, first, Mr. Sato will explain the purpose of the project.",
            vietnamese: "Về agenda hôm nay, trước tiên anh Sato sẽ trình bày về mục đích dự án.",
            acceptedAnswers: ["本日のアジェンダですが最初に佐藤様にプロジェクトの目的を説明していただきます"]
        },
        {
            id: 5,
            speaker: "A",
            japanese: "次に、弊社がキックオフ資料を説明いたします。",
            reading: "",
            romaji: "",
            english: "Next, our side will explain the kickoff materials.",
            vietnamese: "Sau đó, phía bên tôi sẽ giải thích về tài liệu kickoff.",
            acceptedAnswers: ["次に弊社がキックオフ資料を説明いたします"]
        },
        {
            id: 6,
            speaker: "A",
            japanese: "最後にQ&Aと相談をします。",
            reading: "",
            romaji: "",
            english: "Finally, we will have Q&A and discussion.",
            vietnamese: "Cuối cùng chúng ta sẽ thực hiện Q&A và thảo luận.",
            acceptedAnswers: ["最後にQ&Aと相談をします", "最後にキューアンドエーと相談をします"]
        },
        {
            id: 7,
            speaker: "A",
            japanese: "この順番で進めたいと思いますが、よろしいでしょうか。",
            reading: "",
            romaji: "",
            english: "I would like to proceed in this order. Is that all right?",
            vietnamese: "Chúng ta sẽ tiến hành theo thứ tự này, mọi người thấy ổn không ạ?",
            acceptedAnswers: ["この順番で進めたいと思いますがよろしいでしょうか"]
        },
        {
            id: 8,
            speaker: "B",
            japanese: "はい、そうしましょう。",
            reading: "",
            romaji: "",
            english: "Yes, let's do that.",
            vietnamese: "Vâng, OK nhé.",
            acceptedAnswers: ["はいそうしましょう"]
        },
        {
            id: 9,
            speaker: "A",
            japanese: "では、まず佐藤さんから目的についてご説明をお願いします。",
            reading: "",
            romaji: "",
            english: "Then, first, Mr. Sato, please explain the purpose.",
            vietnamese: "Vậy trước tiên, xin mời anh Sato trình bày về mục đích dự án.",
            acceptedAnswers: ["ではまず佐藤さんから目的についてご説明をお願いします"]
        },
        {
            id: 10,
            speaker: "B",
            japanese: "はい、ありがとうございます。今回のプロジェクトは、自動化テストのPOCプロジェクトです。",
            reading: "",
            romaji: "",
            english: "Yes, thank you. This project is an automation test POC project.",
            vietnamese: "Vâng, cảm ơn. Dự án lần này là dự án POC về test tự động.",
            acceptedAnswers: ["はいありがとうございます今回のプロジェクトは自動化テストのPOCプロジェクトです", "はいありがとうございます今回のプロジェクトは自動化テストのピーオーシープロジェクトです"]
        },
        {
            id: 11,
            speaker: "A",
            japanese: "POCというのは、どのような意味でしょうか。",
            reading: "",
            romaji: "",
            english: "What does POC mean?",
            vietnamese: "POC có nghĩa là gì vậy ạ?",
            acceptedAnswers: ["POCというのはどのような意味でしょうか", "ピーオーシーというのはどのような意味でしょうか"]
        },
        {
            id: 12,
            speaker: "B",
            japanese: "はい、新しいアイデアや方法が使えるかどうかを確認するためのものです。",
            reading: "",
            romaji: "",
            english: "It is for checking whether a new idea or method can be used.",
            vietnamese: "Đó là việc kiểm chứng xem một ý tưởng hay phương pháp mới có thể áp dụng được hay không.",
            acceptedAnswers: ["はい新しいアイデアや方法が使えるかどうかを確認するためのものです"]
        },
        {
            id: 13,
            speaker: "A",
            japanese: "なるほど、分かりました。",
            reading: "",
            romaji: "",
            english: "I see. I understand.",
            vietnamese: "À ra vậy, tôi hiểu rồi.",
            acceptedAnswers: ["なるほど分かりました", "なるほどわかりました"]
        },
        {
            id: 14,
            speaker: "B",
            japanese: "現在は手動で単体テストを行っていますが、時間がかかっています。",
            reading: "",
            romaji: "",
            english: "Currently, unit tests are performed manually, but they take time.",
            vietnamese: "Hiện tại chúng ta đang thực hiện unit test thủ công, nhưng việc này tốn khá nhiều thời gian.",
            acceptedAnswers: ["現在は手動で単体テストを行っていますが時間がかかっています"]
        },
        {
            id: 15,
            speaker: "A",
            japanese: "確かに、手動だと時間がかかりますね。",
            reading: "",
            romaji: "",
            english: "Indeed, manual work takes time.",
            vietnamese: "Đúng vậy, làm thủ công thì sẽ mất thời gian.",
            acceptedAnswers: ["確かに手動だと時間がかかりますね"]
        },
        {
            id: 16,
            speaker: "B",
            japanese: "そのため、テストを自動化して、工数を減らしたいと考えています。",
            reading: "",
            romaji: "",
            english: "Therefore, we would like to automate testing and reduce effort.",
            vietnamese: "Vì vậy, chúng tôi muốn tự động hóa test để giảm công sức thực hiện.",
            acceptedAnswers: ["そのためテストを自動化して工数を減らしたいと考えています"]
        },
        {
            id: 17,
            speaker: "A",
            japanese: "はい、とても重要なポイントだと思います。",
            reading: "",
            romaji: "",
            english: "Yes, I think that is a very important point.",
            vietnamese: "Vâng, theo tôi đó là một điểm rất quan trọng.",
            acceptedAnswers: ["はいとても重要なポイントだと思います"]
        },
        {
            id: 18,
            speaker: "B",
            japanese: "また、自動化によって、効率や効果も確認したいです。",
            reading: "",
            romaji: "",
            english: "Also, through automation, we would like to check efficiency and effectiveness.",
            vietnamese: "Ngoài ra, chúng tôi cũng muốn kiểm tra hiệu quả và hiệu suất khi tự động hóa.",
            acceptedAnswers: ["また自動化によって効率や効果も確認したいです"]
        },
        {
            id: 19,
            speaker: "A",
            japanese: "分かりました。ご説明ありがとうございます。",
            reading: "",
            romaji: "",
            english: "I understand. Thank you for the explanation.",
            vietnamese: "Tôi hiểu rồi. Cảm ơn anh đã giải thích.",
            acceptedAnswers: ["分かりましたご説明ありがとうございます", "わかりましたご説明ありがとうございます"]
        },
        {
            id: 20,
            speaker: "A",
            japanese: "それでは、私からキックオフ資料を説明いたします。",
            reading: "",
            romaji: "",
            english: "Now, I will explain the kickoff materials.",
            vietnamese: "Tiếp theo, tôi xin trình bày về tài liệu kickoff.",
            acceptedAnswers: ["それでは私からキックオフ資料を説明いたします"]
        },
        {
            id: 21,
            speaker: "A",
            japanese: "プロジェクトの概要、体制、計画、リスト・課題の順を追って説明いたします。",
            reading: "",
            romaji: "",
            english: "I will explain in order: project overview, structure, plan, list and issues.",
            vietnamese: "Tôi sẽ trình bày lần lượt theo các mục: tổng quan, tổ chức dự án, kế hoạch, các vấn đề và rủi ro.",
            acceptedAnswers: ["プロジェクトの概要体制計画リスト課題の順を追って説明いたします"]
        },
        {
            id: 22,
            speaker: "B",
            japanese: "はい、お願いします。",
            reading: "",
            romaji: "",
            english: "Yes, please go ahead.",
            vietnamese: "Vâng, mời bạn trình bày nhé.",
            acceptedAnswers: ["はいお願いします"]
        },
        {
            id: 23,
            speaker: "A",
            japanese: "まず、プロジェクト概要についてです。",
            reading: "",
            romaji: "",
            english: "First, about the project overview.",
            vietnamese: "Trước tiên là về tổng quan dự án.",
            acceptedAnswers: ["まずプロジェクト概要についてです"]
        },
        {
            id: 24,
            speaker: "A",
            japanese: "今回のプロジェクトでは、手動と自動の両方で単体テストを行ってから、テスト時間や結果を比較して、効率を確認します。",
            reading: "",
            romaji: "",
            english: "In this project, we will perform unit tests both manually and automatically, then compare test time and results to verify efficiency.",
            vietnamese: "Trong dự án này, chúng ta sẽ thực hiện cả test thủ công và test tự động, sau đó so sánh thời gian và kết quả để đánh giá hiệu quả.",
            acceptedAnswers: ["今回のプロジェクトでは手動と自動の両方で単体テストを行ってからテスト時間や結果を比較して効率を確認します"]
        },
        {
            id: 25,
            speaker: "B",
            japanese: "分かりやすいですね。",
            reading: "",
            romaji: "",
            english: "That is easy to understand.",
            vietnamese: "Tôi thấy rất dễ hiểu.",
            acceptedAnswers: ["分かりやすいですね", "わかりやすいですね"]
        },
        {
            id: 26,
            speaker: "A",
            japanese: "次に、プロジェクト体制について説明します。",
            reading: "",
            romaji: "",
            english: "Next, I will explain the project structure.",
            vietnamese: "Tiếp theo là về cơ cấu tổ chức dự án.",
            acceptedAnswers: ["次にプロジェクト体制について説明します"]
        },
        {
            id: 27,
            speaker: "A",
            japanese: "このプロジェクトは日本とベトナムのチームで進めます。",
            reading: "",
            romaji: "",
            english: "This project will be carried out by teams in Japan and Vietnam.",
            vietnamese: "Dự án sẽ được thực hiện bởi team Nhật và team Việt Nam.",
            acceptedAnswers: ["このプロジェクトは日本とベトナムのチームで進めます"]
        },
        {
            id: 28,
            speaker: "B",
            japanese: "それぞれの役割はどうなりますか。",
            reading: "",
            romaji: "",
            english: "What are the respective roles?",
            vietnamese: "Vai trò của mỗi bên sẽ như thế nào?",
            acceptedAnswers: ["それぞれの役割はどうなりますか"]
        },
        {
            id: 29,
            speaker: "A",
            japanese: "日本側は要件定義とレビューを担当します。",
            reading: "",
            romaji: "",
            english: "The Japan side will handle requirement definition and review.",
            vietnamese: "Phía Nhật sẽ phụ trách định nghĩa yêu cầu và review.",
            acceptedAnswers: ["日本側は要件定義とレビューを担当します"]
        },
        {
            id: 30,
            speaker: "A",
            japanese: "ベトナム側は開発とテストを担当します。",
            reading: "",
            romaji: "",
            english: "The Vietnam side will handle development and testing.",
            vietnamese: "Phía Việt Nam sẽ phụ trách phát triển và thực hiện test.",
            acceptedAnswers: ["ベトナム側は開発とテストを担当します"]
        },
        {
            id: 31,
            speaker: "B",
            japanese: "分かりました。",
            reading: "",
            romaji: "",
            english: "I understand.",
            vietnamese: "Tôi hiểu rồi.",
            acceptedAnswers: ["分かりました", "わかりました"]
        },
        {
            id: 32,
            speaker: "A",
            japanese: "私はPMとして全体を管理します。",
            reading: "",
            romaji: "",
            english: "As PM, I will manage the whole project.",
            vietnamese: "Tôi sẽ quản lý toàn bộ dự án với vai trò PM.",
            acceptedAnswers: ["私はPMとして全体を管理します", "私はピーエムとして全体を管理します"]
        },
        {
            id: 33,
            speaker: "A",
            japanese: "また、フロントSEとして両チームの間で調整を行います。",
            reading: "",
            romaji: "",
            english: "Also, as Front SE, I will coordinate between both teams.",
            vietnamese: "Ngoài ra, với vai trò Front SE, tôi sẽ thực hiện điều phối giữa hai team.",
            acceptedAnswers: ["またフロントSEとして両チームの間で調整を行います", "またフロントエスイーとして両チームの間で調整を行います"]
        },
        {
            id: 34,
            speaker: "B",
            japanese: "コミュニケーションが大切ですね。",
            reading: "",
            romaji: "",
            english: "Communication is important, isn't it?",
            vietnamese: "Việc giao tiếp là rất quan trọng nhỉ.",
            acceptedAnswers: ["コミュニケーションが大切ですね"]
        },
        {
            id: 35,
            speaker: "A",
            japanese: "はい、情報共有をしっかり行いたいと思います。",
            reading: "",
            romaji: "",
            english: "Yes, I would like to make sure information sharing is done properly.",
            vietnamese: "Vâng, tôi muốn đảm bảo việc chia sẻ thông tin được thực hiện tốt.",
            acceptedAnswers: ["はい情報共有をしっかり行いたいと思います"]
        },
        {
            id: 36,
            speaker: "A",
            japanese: "次に計画について説明します。",
            reading: "",
            romaji: "",
            english: "Next, I will explain the plan.",
            vietnamese: "Tiếp theo là về kế hoạch dự án.",
            acceptedAnswers: ["次に計画について説明します"]
        },
        {
            id: 37,
            speaker: "A",
            japanese: "まず、環境の準備を行います。",
            reading: "",
            romaji: "",
            english: "First, we will prepare the environment.",
            vietnamese: "Trước tiên, chúng ta sẽ chuẩn bị môi trường.",
            acceptedAnswers: ["まず環境の準備を行います"]
        },
        {
            id: 38,
            speaker: "A",
            japanese: "その後、テストツールを選びます。",
            reading: "",
            romaji: "",
            english: "After that, we will select a test tool.",
            vietnamese: "Sau đó sẽ lựa chọn tool test.",
            acceptedAnswers: ["その後テストツールを選びます"]
        },
        {
            id: 39,
            speaker: "B",
            japanese: "ツールはいくつか候補がありますか。",
            reading: "",
            romaji: "",
            english: "Are there several candidate tools?",
            vietnamese: "Về tool test thì có nhiều lựa chọn không?",
            acceptedAnswers: ["ツールはいくつか候補がありますか"]
        },
        {
            id: 40,
            speaker: "A",
            japanese: "はい、いくつかありますので、比較して決めます。",
            reading: "",
            romaji: "",
            english: "Yes, there are several, so we will compare them and decide.",
            vietnamese: "Vâng, cũng có một số lựa chọn, chúng tôi sẽ so sánh rồi quyết định.",
            acceptedAnswers: ["はいいくつかありますので比較して決めます"]
        },
        {
            id: 41,
            speaker: "B",
            japanese: "分かりました。",
            reading: "",
            romaji: "",
            english: "I understand.",
            vietnamese: "Tôi hiểu rồi.",
            acceptedAnswers: ["分かりました", "わかりました"]
        },
        {
            id: 42,
            speaker: "A",
            japanese: "次に、テストケースを作成して実行します。",
            reading: "",
            romaji: "",
            english: "Next, we will create and execute test cases.",
            vietnamese: "Tiếp theo, chúng tôi sẽ tạo test case và thực hiện test.",
            acceptedAnswers: ["次にテストケースを作成して実行します"]
        },
        {
            id: 43,
            speaker: "A",
            japanese: "最後に、結果をまとめて分析します。",
            reading: "",
            romaji: "",
            english: "Finally, we will summarize and analyze the results.",
            vietnamese: "Cuối cùng, tổng hợp kết quả và tiến hành phân tích.",
            acceptedAnswers: ["最後に結果をまとめて分析します"]
        },
        {
            id: 44,
            speaker: "B",
            japanese: "スケジュールはどのくらいですか。",
            reading: "",
            romaji: "",
            english: "How long is the schedule?",
            vietnamese: "Về schedule thì sẽ mất khoảng bao lâu?",
            acceptedAnswers: ["スケジュールはどのくらいですか"]
        },
        {
            id: 45,
            speaker: "A",
            japanese: "全体で約2か月を予定しています。",
            reading: "",
            romaji: "",
            english: "The whole project is planned to take about two months.",
            vietnamese: "Toàn bộ dự án dự kiến khoảng 2 tháng.",
            acceptedAnswers: ["全体で約2か月を予定しています", "全体で約二か月を予定しています"]
        },
        {
            id: 46,
            speaker: "A",
            japanese: "次に、課題やリスクについて共有します。",
            reading: "",
            romaji: "",
            english: "Next, I will share issues and risks.",
            vietnamese: "Tiếp theo, tôi xin chia sẻ về các vấn đề và rủi ro.",
            acceptedAnswers: ["次に課題やリスクについて共有します"]
        },
        {
            id: 47,
            speaker: "A",
            japanese: "まず、ツール選定に時間がかかる可能性があります。",
            reading: "",
            romaji: "",
            english: "First, selecting a tool may take time.",
            vietnamese: "Trước tiên, việc lựa chọn tool có thể sẽ mất thời gian.",
            acceptedAnswers: ["まずツール選定に時間がかかる可能性があります"]
        },
        {
            id: 48,
            speaker: "B",
            japanese: "確かに、その点は注意が必要ですね。",
            reading: "",
            romaji: "",
            english: "Indeed, that point requires attention.",
            vietnamese: "Đúng vậy, tôi nghĩ cần chú ý ở điểm này.",
            acceptedAnswers: ["確かにその点は注意が必要ですね"]
        },
        {
            id: 49,
            speaker: "A",
            japanese: "また、環境準備も時間がかかると思います。",
            reading: "",
            romaji: "",
            english: "Also, I think preparing the environment will take time.",
            vietnamese: "Ngoài ra, việc chuẩn bị môi trường cũng có thể sẽ mất thời gian.",
            acceptedAnswers: ["また環境準備も時間がかかると思います"]
        },
        {
            id: 50,
            speaker: "B",
            japanese: "早めに進めたほうがいいですね。",
            reading: "",
            romaji: "",
            english: "It would be better to proceed early.",
            vietnamese: "Tôi nghĩ nên tiến hành sớm thì tốt hơn.",
            acceptedAnswers: ["早めに進めたほうがいいですね"]
        },
        {
            id: 51,
            speaker: "A",
            japanese: "はい、そのように進めたいと思います。",
            reading: "",
            romaji: "",
            english: "Yes, I would like to proceed that way.",
            vietnamese: "Vâng, chúng tôi sẽ xử lý theo hướng đó.",
            acceptedAnswers: ["はいそのように進めたいと思います"]
        },
        {
            id: 52,
            speaker: "A",
            japanese: "また、リスクについても共有させていただきます。",
            reading: "",
            romaji: "",
            english: "Also, I would like to share the risks.",
            vietnamese: "Tiếp theo, tôi xin chia sẻ về rủi ro.",
            acceptedAnswers: ["またリスクについても共有させていただきます"]
        },
        {
            id: 53,
            speaker: "A",
            japanese: "例えば、自動化テストの結果が期待どおりにならない可能性があります。",
            reading: "",
            romaji: "",
            english: "For example, the results of automated testing may not turn out as expected.",
            vietnamese: "Ví dụ, kết quả của test tự động có thể không đạt như kỳ vọng.",
            acceptedAnswers: ["例えば自動化テストの結果が期待どおりにならない可能性があります"]
        },
        {
            id: 54,
            speaker: "B",
            japanese: "なるほど、それはあり得ますね。",
            reading: "",
            romaji: "",
            english: "I see, that is possible.",
            vietnamese: "Đúng là có khả năng đó nhỉ.",
            acceptedAnswers: ["なるほどそれはあり得ますね"]
        },
        {
            id: 55,
            speaker: "A",
            japanese: "はい。その場合は、手動テストと合わせて確認しながら進めたいと思います。",
            reading: "",
            romaji: "",
            english: "Yes. In that case, I would like to proceed while checking together with manual testing.",
            vietnamese: "Trong trường hợp đó, chúng tôi sẽ kết hợp với việc test thủ công để kiểm tra.",
            acceptedAnswers: ["はいその場合は手動テストと合わせて確認しながら進めたいと思います"]
        },
        {
            id: 56,
            speaker: "A",
            japanese: "また、メンバーがツールに慣れていないため、作業に時間がかかる可能性もあります。",
            reading: "",
            romaji: "",
            english: "Also, because members are not used to the tool, the work may take more time.",
            vietnamese: "Ngoài ra, do các thành viên chưa quen với tool nên có khả năng công việc sẽ mất nhiều thời gian hơn.",
            acceptedAnswers: ["またメンバーがツールに慣れていないため作業に時間がかかる可能性もあります"]
        },
        {
            id: 57,
            speaker: "B",
            japanese: "その点も考えておく必要がありますね。",
            reading: "",
            romaji: "",
            english: "We need to take that point into account as well.",
            vietnamese: "Tôi nghĩ chúng ta cũng cần tính đến điểm này.",
            acceptedAnswers: ["その点も考えておく必要がありますね"]
        },
        {
            id: 58,
            speaker: "A",
            japanese: "はい、必要に応じてトレーニングを行う予定です。",
            reading: "",
            romaji: "",
            english: "Yes, we plan to conduct training as needed.",
            vietnamese: "Vâng, tùy theo tình hình, chúng tôi sẽ tổ chức training khi cần thiết.",
            acceptedAnswers: ["はい必要に応じてトレーニングを行う予定です"]
        },
        {
            id: 59,
            speaker: "B",
            japanese: "何か問題があれば、すぐに共有してください。",
            reading: "",
            romaji: "",
            english: "If there are any problems, please share them immediately.",
            vietnamese: "Nếu có vấn đề gì thì bạn hãy chia sẻ ngay nhé.",
            acceptedAnswers: ["何か問題があればすぐに共有してください"]
        },
        {
            id: 60,
            speaker: "A",
            japanese: "はい、承知しました。",
            reading: "",
            romaji: "",
            english: "Yes, understood.",
            vietnamese: "Vâng, tôi đã rõ.",
            acceptedAnswers: ["はい承知しました"]
        },
        {
            id: 61,
            speaker: "A",
            japanese: "では、この内容で進めたいと思いますが、よろしいでしょうか。",
            reading: "",
            romaji: "",
            english: "Then, I would like to proceed with this content. Is that all right?",
            vietnamese: "Vậy thì chúng ta sẽ tiến hành dự án theo nội dung này, mọi người thấy ổn không ạ?",
            acceptedAnswers: ["ではこの内容で進めたいと思いますがよろしいでしょうか"]
        },
        {
            id: 62,
            speaker: "B",
            japanese: "はい、問題ありません。",
            reading: "",
            romaji: "",
            english: "Yes, no problem.",
            vietnamese: "Vâng, không có vấn đề gì.",
            acceptedAnswers: ["はい問題ありません"]
        },
        {
            id: 63,
            speaker: "A",
            japanese: "ありがとうございます。",
            reading: "",
            romaji: "",
            english: "Thank you.",
            vietnamese: "Cảm ơn mọi người.",
            acceptedAnswers: ["ありがとうございます"]
        },
        {
            id: 64,
            speaker: "A",
            japanese: "それでは、本日のキックオフ会議はこれで終了といたします。",
            reading: "",
            romaji: "",
            english: "Then, today's kickoff meeting will end here.",
            vietnamese: "Vậy buổi họp kickoff hôm nay xin kết thúc tại đây.",
            acceptedAnswers: ["それでは本日のキックオフ会議はこれで終了といたします"]
        },
        {
            id: 65,
            speaker: "B",
            japanese: "ありがとうございました。よろしくお願いします。",
            reading: "",
            romaji: "",
            english: "Thank you very much. I look forward to working with you.",
            vietnamese: "Cảm ơn các bạn, mong rằng chúng ta sẽ hợp tác tốt.",
            acceptedAnswers: ["ありがとうございましたよろしくお願いします"]
        },
        {
            id: 66,
            speaker: "A",
            japanese: "こちらこそ、よろしくお願いいたします。",
            reading: "",
            romaji: "",
            english: "Likewise, I look forward to working with you.",
            vietnamese: "Vâng, chúng tôi cũng vậy. Mong được hợp tác tốt.",
            acceptedAnswers: ["こちらこそよろしくお願いいたします"]
        }
    ]
};