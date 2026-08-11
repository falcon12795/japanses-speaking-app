export const IT_DIALOGUES = [
  {
    id: "it-001",
    level: "IT",
    title: "オンサイト初日の挨拶",
    description:
      "Chào hỏi trong ngày đầu tiên đi onsite. An, Front SE từ NTT Việt Nam, gặp Tanaka, người phụ trách dự án phía Sakura Soft, sau khi trao đổi danh thiếp và bắt đầu trao đổi về dự án phát triển hệ thống quản lý nhân sự.",
    category: "Onsite / Project Kickoff",
    source: {
      topic: "TOPIC 1",
      document: "TOPIC_01_オンサイト初日の挨拶.docx",
      level: "A2-B1",
    },
    characters: [
      {
        key: "A",
        name: "田中",
        displayName: "Tanaka",
        role: "Sakura Soft project owner",
      },
      {
        key: "B",
        name: "アン",
        displayName: "An",
        role: "Front SE from NTT Vietnam",
      },
    ],
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese: "はじめまして。サクラソフト社の田中と申します。",
        reading: "",
        romaji: "",
        english: "Nice to meet you. I am Tanaka from Sakura Soft.",
        vietnamese:
          "Rất vui được gặp bạn. Tôi là Tanaka đến từ công ty Sakura Soft.",
        acceptedAnswers: [
          "はじめましてサクラソフト社の田中と申します",
        ],
      },
      {
        id: 2,
        speaker: "A",
        japanese: "本日ご来社くださり、まことにありがとうございます。",
        reading: "",
        romaji: "",
        english: "Thank you very much for coming to our company today.",
        vietnamese: "Hôm nay cảm ơn bạn đã đến công ty chúng tôi.",
        acceptedAnswers: [
          "本日ご来社くださりまことにありがとうございます",
        ],
      },
      {
        id: 3,
        speaker: "B",
        japanese:
          "はじめまして。今回のプロジェクトでフロントSEをつとめることになりました、アンと申します。",
        reading: "",
        romaji: "",
        english:
          "Nice to meet you. I am An, and I will serve as the Front SE for this project.",
        vietnamese:
          "Rất vui được gặp anh. Tôi là An, sẽ đảm nhiệm vai trò Front SE trong dự án lần này.",
        acceptedAnswers: [
          "はじめまして今回のプロジェクトでフロントSEをつとめることになりましたアンと申します",
          "はじめまして今回のプロジェクトでフロントエスイーをつとめることになりましたアンと申します",
        ],
      },
      {
        id: 4,
        speaker: "B",
        japanese: "どうぞよろしくお願いいたします。",
        reading: "",
        romaji: "",
        english: "I look forward to working with you.",
        vietnamese: "Rất mong được anh giúp đỡ.",
        acceptedAnswers: [
          "どうぞよろしくお願いいたします",
        ],
      },
      {
        id: 5,
        speaker: "A",
        japanese: "アンさんは東京で働くのは初めてですか。",
        reading: "",
        romaji: "",
        english: "Is this your first time working in Tokyo, An?",
        vietnamese: "Đây là lần đầu bạn làm việc tại Tokyo phải không?",
        acceptedAnswers: [
          "アンさんは東京で働くのは初めてですか",
        ],
      },
      {
        id: 6,
        speaker: "B",
        japanese:
          "はい、初めてのオンサイトなので、少し緊張していますが、頑張りたいと思います。",
        reading: "",
        romaji: "",
        english:
          "Yes, this is my first onsite assignment, so I am a little nervous, but I will do my best.",
        vietnamese:
          "Vâng, đây là lần đầu tôi đi onsite nên cũng hơi hồi hộp, nhưng tôi sẽ cố gắng hết sức.",
        acceptedAnswers: [
          "はい初めてのオンサイトなので少し緊張していますが頑張りたいと思います",
        ],
      },
      {
        id: 7,
        speaker: "B",
        japanese: "あの、これ、ベトナムのおみやげです。",
        reading: "",
        romaji: "",
        english: "Um, this is a souvenir from Vietnam.",
        vietnamese: "À, đây là quà từ Việt Nam.",
        acceptedAnswers: [
          "あのこれベトナムのおみやげです",
          "あのこれベトナムのお土産です",
        ],
      },
      {
        id: 8,
        speaker: "B",
        japanese: "よかったら、皆さんで召し上がってください。",
        reading: "",
        romaji: "",
        english: "If you like, please enjoy it together with everyone.",
        vietnamese: "Nếu được thì mong mọi người cùng thưởng thức.",
        acceptedAnswers: [
          "よかったら皆さんで召し上がってください",
          "よかったらみなさんで召し上がってください",
        ],
      },
      {
        id: 9,
        speaker: "A",
        japanese: "まあ、うれしい。ありがとうございます。これは何ですか。",
        reading: "",
        romaji: "",
        english: "Oh, how nice. Thank you. What is this?",
        vietnamese: "Ồ, vui quá. Cảm ơn bạn. Đây là gì vậy?",
        acceptedAnswers: [
          "まあうれしいありがとうございますこれは何ですか",
        ],
      },
      {
        id: 10,
        speaker: "B",
        japanese: "バナナキャンディーです。私の故郷で有名なお菓子です。",
        reading: "",
        romaji: "",
        english:
          "It is banana candy. It is a famous sweet from my hometown.",
        vietnamese: "Đây là kẹo chuối, là đặc sản nổi tiếng ở quê tôi.",
        acceptedAnswers: [
          "バナナキャンディーです私の故郷で有名なお菓子です",
          "バナナキャンディです私の故郷で有名なお菓子です",
        ],
      },
      {
        id: 11,
        speaker: "A",
        japanese: "アンさん、ありがとう。",
        reading: "",
        romaji: "",
        english: "Thank you, An.",
        vietnamese: "Cảm ơn bạn nhé.",
        acceptedAnswers: [
          "アンさんありがとう",
        ],
      },
      {
        id: 12,
        speaker: "A",
        japanese: "じゃ、これからプロジェクトについて説明しますね。",
        reading: "",
        romaji: "",
        english: "Well then, I will now explain the project.",
        vietnamese: "Vậy thì bây giờ tôi sẽ giải thích về dự án nhé.",
        acceptedAnswers: [
          "じゃこれからプロジェクトについて説明しますね",
        ],
      },
      {
        id: 13,
        speaker: "A",
        japanese: "今回の案件は、人事管理システムの開発プロジェクトです。",
        reading: "",
        romaji: "",
        english:
          "This case is a development project for a human resources management system.",
        vietnamese:
          "Dự án lần này là dự án phát triển hệ thống quản lý nhân sự.",
        acceptedAnswers: [
          "今回の案件は人事管理システムの開発プロジェクトです",
        ],
      },
      {
        id: 14,
        speaker: "A",
        japanese:
          "このシステムでは、社員の情報や勤怠、休暇などを管理できるようにします。",
        reading: "",
        romaji: "",
        english:
          "With this system, employee information, attendance, leave, and similar data will be manageable.",
        vietnamese:
          "Hệ thống này sẽ giúp quản lý thông tin nhân viên, chấm công, nghỉ phép,...",
        acceptedAnswers: [
          "このシステムでは社員の情報や勤怠休暇などを管理できるようにします",
        ],
      },
      {
        id: 15,
        speaker: "A",
        japanese: "また、管理者がデータを簡単に確認できるようにする予定です。",
        reading: "",
        romaji: "",
        english:
          "In addition, we plan to make it easy for administrators to check the data.",
        vietnamese:
          "Ngoài ra, chúng tôi cũng dự định xây dựng để phía quản lý có thể dễ dàng kiểm tra dữ liệu.",
        acceptedAnswers: [
          "また管理者がデータを簡単に確認できるようにする予定です",
        ],
      },
      {
        id: 16,
        speaker: "A",
        japanese:
          "アンさんにはフロントSEとして、チーム全体をまとめていただきます。",
        reading: "",
        romaji: "",
        english:
          "As the Front SE, An, we would like you to coordinate the entire team.",
        vietnamese:
          "An sẽ đảm nhận vai trò Front SE, phụ trách điều phối toàn bộ team.",
        acceptedAnswers: [
          "アンさんにはフロントSEとしてチーム全体をまとめていただきます",
          "アンさんにはフロントエスイーとしてチーム全体をまとめていただきます",
        ],
      },
      {
        id: 17,
        speaker: "A",
        japanese:
          "また、日本側とベトナム側の間に立って、情報を共有したり、問題があれば調整したりしていただきたいです。",
        reading: "",
        romaji: "",
        english:
          "Also, we would like you to stand between the Japan side and the Vietnam side to share information and coordinate when issues arise.",
        vietnamese:
          "Ngoài ra, bạn sẽ đứng giữa phía Nhật và phía Việt Nam để chia sẻ thông tin, cũng như xử lý, điều chỉnh khi có vấn đề phát sinh.",
        acceptedAnswers: [
          "また日本側とベトナム側の間に立って情報を共有したり問題があれば調整したりしていただきたいです",
        ],
      },
      {
        id: 18,
        speaker: "B",
        japanese: "はい、分かりました。",
        reading: "",
        romaji: "",
        english: "Yes, I understand.",
        vietnamese: "Vâng, tôi hiểu rồi.",
        acceptedAnswers: [
          "はい分かりました",
          "はいわかりました",
        ],
      },
      {
        id: 19,
        speaker: "B",
        japanese:
          "御社とオフショアチームの間で、しっかりコミュニケーションを取れるように頑張ります。",
        reading: "",
        romaji: "",
        english:
          "I will do my best to communicate well between your company and the offshore team.",
        vietnamese:
          "Tôi sẽ cố gắng giao tiếp tốt giữa phía công ty các bạn và team offshore.",
        acceptedAnswers: [
          "御社とオフショアチームの間でしっかりコミュニケーションを取れるように頑張ります",
        ],
      },
      {
        id: 20,
        speaker: "B",
        japanese: "このプロジェクトに参加できて、とてもうれしいです。",
        reading: "",
        romaji: "",
        english:
          "I am very happy to be able to participate in this project.",
        vietnamese: "Tôi rất vui khi được tham gia dự án này.",
        acceptedAnswers: [
          "このプロジェクトに参加できてとてもうれしいです",
        ],
      },
      {
        id: 21,
        speaker: "B",
        japanese:
          "チームメンバーと協力しながら、仕事を進めていきたいと思います。",
        reading: "",
        romaji: "",
        english:
          "I would like to proceed with the work while cooperating with the team members.",
        vietnamese:
          "Tôi muốn phối hợp với các thành viên trong team để triển khai công việc hiệu quả.",
        acceptedAnswers: [
          "チームメンバーと協力しながら仕事を進めていきたいと思います",
        ],
      },
      {
        id: 22,
        speaker: "B",
        japanese:
          "まだ分からないことも多いですが、一日でも早くチームの役に立てるように頑張ります。",
        reading: "",
        romaji: "",
        english:
          "There are still many things I do not know, but I will do my best to contribute to the team as soon as possible.",
        vietnamese:
          "Hiện tại vẫn còn nhiều điều tôi chưa nắm rõ, nhưng tôi sẽ cố gắng để sớm có thể đóng góp cho team.",
        acceptedAnswers: [
          "まだ分からないことも多いですが一日でも早くチームの役に立てるように頑張ります",
          "まだわからないことも多いですが一日でも早くチームの役に立てるように頑張ります",
        ],
      },
      {
        id: 23,
        speaker: "A",
        japanese: "いいですね。何かあれば、遠慮なく聞いてください。",
        reading: "",
        romaji: "",
        english:
          "That sounds good. If you have any questions, please feel free to ask.",
        vietnamese:
          "Tốt rồi. Nếu có gì chưa rõ thì bạn cứ hỏi thoải mái nhé.",
        acceptedAnswers: [
          "いいですね何かあれば遠慮なく聞いてください",
        ],
      },
      {
        id: 24,
        speaker: "B",
        japanese: "ありがとうございます。いろいろ教えていただけると助かります。",
        reading: "",
        romaji: "",
        english:
          "Thank you. It would be very helpful if you could teach me various things.",
        vietnamese:
          "Vâng, cảm ơn anh. Nếu được anh hướng dẫn thêm thì tốt quá ạ.",
        acceptedAnswers: [
          "ありがとうございますいろいろ教えていただけると助かります",
        ],
      },
      {
        id: 25,
        speaker: "A",
        japanese: "日本では、第一印象や身だしなみが大切です。",
        reading: "",
        romaji: "",
        english:
          "In Japan, first impressions and appearance are important.",
        vietnamese:
          "Ở Nhật thì ấn tượng ban đầu và tác phong ăn mặc rất quan trọng.",
        acceptedAnswers: [
          "日本では第一印象や身だしなみが大切です",
        ],
      },
      {
        id: 26,
        speaker: "A",
        japanese:
          "敬語やビジネスマナーも、少しずつ慣れていけば大丈夫ですよ。",
        reading: "",
        romaji: "",
        english:
          "As for honorific language and business manners, it is fine if you get used to them little by little.",
        vietnamese:
          "Về kính ngữ và tác phong làm việc, bạn cứ dần dần làm quen là được.",
        acceptedAnswers: [
          "敬語やビジネスマナーも少しずつ慣れていけば大丈夫ですよ",
        ],
      },
      {
        id: 27,
        speaker: "B",
        japanese:
          "はい、分かりました。まだ敬語は完璧ではありませんが、しっかり勉強していきたいと思います。",
        reading: "",
        romaji: "",
        english:
          "Yes, I understand. My honorific language is not perfect yet, but I would like to study it seriously.",
        vietnamese:
          "Vâng, tôi hiểu rồi. Kính ngữ của tôi vẫn chưa phải là tốt nhất nhưng tôi sẽ cố gắng học thêm.",
        acceptedAnswers: [
          "はい分かりましたまだ敬語は完璧ではありませんがしっかり勉強していきたいと思います",
          "はいわかりましたまだ敬語は完璧ではありませんがしっかり勉強していきたいと思います",
        ],
      },
      {
        id: 28,
        speaker: "B",
        japanese:
          "ご迷惑をおかけすることもあるかと思いますが、よろしくお願いいたします。",
        reading: "",
        romaji: "",
        english:
          "I may cause some inconvenience, but I appreciate your support.",
        vietnamese:
          "Có thể tôi sẽ làm phiền trong thời gian đầu, mong anh giúp đỡ.",
        acceptedAnswers: [
          "ご迷惑をおかけすることもあるかと思いますがよろしくお願いいたします",
        ],
      },
      {
        id: 29,
        speaker: "A",
        japanese:
          "大丈夫ですよ。とても丁寧に話されていますので、安心しました。",
        reading: "",
        romaji: "",
        english:
          "It is all right. You are speaking very politely, so I feel reassured.",
        vietnamese:
          "Không sao đâu. Bạn nói chuyện rất lịch sự nên tôi thấy rất yên tâm.",
        acceptedAnswers: [
          "大丈夫ですよとても丁寧に話されていますので安心しました",
        ],
      },
      {
        id: 30,
        speaker: "B",
        japanese: "ありがとうございます。",
        reading: "",
        romaji: "",
        english: "Thank you.",
        vietnamese: "Cảm ơn anh.",
        acceptedAnswers: [
          "ありがとうございます",
        ],
      },
      {
        id: 31,
        speaker: "A",
        japanese:
          "今回のプロジェクトは少しスケジュールが厳しいですが、いいシステムを作りたいと考えています。",
        reading: "",
        romaji: "",
        english:
          "This project has a somewhat tight schedule, but we want to build a good system.",
        vietnamese:
          "Dự án lần này tiến độ hơi gấp, nhưng chúng tôi muốn xây dựng một hệ thống thật tốt.",
        acceptedAnswers: [
          "今回のプロジェクトは少しスケジュールが厳しいですがいいシステムを作りたいと考えています",
        ],
      },
      {
        id: 32,
        speaker: "B",
        japanese:
          "はい、品質にも気をつけながら進めていきたいと思います。",
        reading: "",
        romaji: "",
        english:
          "Yes, I would like to proceed while paying attention to quality as well.",
        vietnamese:
          "Vâng, tôi sẽ chú ý đến cả chất lượng khi triển khai công việc.",
        acceptedAnswers: [
          "はい品質にも気をつけながら進めていきたいと思います",
        ],
      },
      {
        id: 33,
        speaker: "B",
        japanese: "チームの一員として、しっかり対応します。",
        reading: "",
        romaji: "",
        english: "As a member of the team, I will respond properly.",
        vietnamese:
          "Với tư cách là một thành viên trong team, tôi sẽ cố gắng đối ứng thật tốt.",
        acceptedAnswers: [
          "チームの一員としてしっかり対応します",
        ],
      },
      {
        id: 34,
        speaker: "A",
        japanese: "心強いですね。明日はキックオフ会議がありますね。",
        reading: "",
        romaji: "",
        english:
          "That is reassuring. Tomorrow, there will be a kickoff meeting.",
        vietnamese:
          "Vậy thì tôi yên tâm rồi. Ngày mai sẽ có buổi họp kickoff.",
        acceptedAnswers: [
          "心強いですね明日はキックオフ会議がありますね",
        ],
      },
      {
        id: 35,
        speaker: "A",
        japanese:
          "会議ではプロジェクトの進め方やスケジュールについて説明しますので、事前に資料を確認して、分からない点があればまとめておいてください。",
        reading: "",
        romaji: "",
        english:
          "In the meeting, we will explain how to proceed with the project and the schedule, so please check the materials beforehand and summarize any unclear points.",
        vietnamese:
          "Trong buổi họp, chúng tôi sẽ trình bày về cách triển khai dự án và schedule nên bạn hãy xem trước tài liệu, nếu có gì chưa rõ thì hãy ghi lại nhé.",
        acceptedAnswers: [
          "会議ではプロジェクトの進め方やスケジュールについて説明しますので事前に資料を確認して分からない点があればまとめておいてください",
          "会議ではプロジェクトの進め方やスケジュールについて説明しますので事前に資料を確認してわからない点があればまとめておいてください",
        ],
      },
      {
        id: 36,
        speaker: "B",
        japanese: "はい、分かりました。しっかり準備しておきます。",
        reading: "",
        romaji: "",
        english: "Yes, I understand. I will prepare thoroughly.",
        vietnamese: "Vâng, tôi hiểu rồi. Tôi sẽ chuẩn bị thật kỹ.",
        acceptedAnswers: [
          "はい分かりましたしっかり準備しておきます",
          "はいわかりましたしっかり準備しておきます",
        ],
      },
      {
        id: 37,
        speaker: "A",
        japanese:
          "では、今日はこれで終了です。今日から一緒に働けるのを楽しみにしています。",
        reading: "",
        romaji: "",
        english:
          "Well then, that is all for today. I look forward to working with you from today.",
        vietnamese:
          "Vậy hôm nay chúng ta dừng ở đây nhé. Tôi rất mong chờ được làm việc cùng bạn từ hôm nay.",
        acceptedAnswers: [
          "では今日はこれで終了です今日から一緒に働けるのを楽しみにしています",
        ],
      },
      {
        id: 38,
        speaker: "B",
        japanese:
          "私も楽しみにしています。今日からよろしくお願いいたします。",
        reading: "",
        romaji: "",
        english:
          "I am also looking forward to it. I look forward to working with you from today.",
        vietnamese:
          "Tôi cũng rất háo hức. Từ hôm nay mong được anh giúp đỡ.",
        acceptedAnswers: [
          "私も楽しみにしています今日からよろしくお願いいたします",
        ],
      },
      {
        id: 39,
        speaker: "A",
        japanese:
          "こちらこそ、ありがとうございます。今後ともよろしくお願いいたします。",
        reading: "",
        romaji: "",
        english:
          "Thank you as well. I look forward to continuing to work with you.",
        vietnamese:
          "Cảm ơn bạn. Tôi cũng mong được bạn hỗ trợ trong thời gian tới.",
        acceptedAnswers: [
          "こちらこそありがとうございます今後ともよろしくお願いいたします",
        ],
      },
    ],
  },
];