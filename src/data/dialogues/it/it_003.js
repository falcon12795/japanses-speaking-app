export const IT_003_DIALOGUE = {
  id: "it-003",
  level: "IT",
  lesson: "TOPIC 1",
  title: "新しい職場での作業依頼・作業確認",
  description: "Yêu cầu công việc và xác nhận công việc tại nơi làm việc mới. Linh vừa gia nhập JOS Systems, được Yamada hướng dẫn về cài đặt email công ty, quy định viết tuần báo và nhờ kiểm tra nội dung tuần báo.",
  category: "Work Request / Task Confirmation",
  characters: [
    {
      key: "A",
      name: "リン",
      displayName: "Linh",
      role: "New employee at JOS Systems"
    },
    {
      key: "B",
      name: "山田",
      displayName: "Yamada",
      role: "Team lead"
    }
  ],
  lines: [
    {
      id: 1,
      speaker: "A",
      japanese: "山田さん、今お時間よろしいでしょうか。",
      reading: "",
      romaji: "",
      english: "Yamada-san, do you have a moment now?",
      vietnamese: "Anh Yamada ơi, bây giờ anh có rảnh không ạ?",
      acceptedAnswers: [
        "山田さん今お時間よろしいでしょうか",
        "やまださんいまおじかんよろしいでしょうか",
        "山田さんいまお時間よろしいでしょうか",
        "やまださん今お時間よろしいでしょうか"
      ]
    },
    {
      id: 2,
      speaker: "A",
      japanese: "少しご相談したいことがありまして、",
      reading: "",
      romaji: "",
      english: "I have something I would like to discuss,",
      vietnamese: "Em có một chút việc muốn trao đổi,",
      acceptedAnswers: [
        "少しご相談したいことがありまして",
        "すこしごそうだんしたいことがありまして",
        "すこしご相談したいことがありまして"
      ]
    },
    {
      id: 3,
      speaker: "A",
      japanese: "お時間をいただけると助かります。",
      reading: "",
      romaji: "",
      english: "so it would be helpful if I could have a little of your time.",
      vietnamese: "anh cho em xin một chút thời gian nhé.",
      acceptedAnswers: [
        "お時間をいただけると助かります",
        "おじかんをいただけるとたすかります",
        "お時間をいただけるとたすかります",
        "おじかんをいただけると助かります"
      ]
    },
    {
      id: 4,
      speaker: "B",
      japanese: "はい、大丈夫ですよ。どうしましたか。",
      reading: "",
      romaji: "",
      english: "Yes, that is fine. What is it?",
      vietnamese: "Ừ, anh rảnh. Có chuyện gì vậy?",
      acceptedAnswers: [
        "はい大丈夫ですよどうしましたか",
        "はいだいじょうぶですよどうしましたか"
      ]
    },
    {
      id: 5,
      speaker: "A",
      japanese: "実は、2つお願いしたいことがあります。",
      reading: "",
      romaji: "",
      english: "Actually, there are two things I would like to ask for your help with.",
      vietnamese: "Thực ra em có 2 việc muốn nhờ.",
      acceptedAnswers: [
        "実は2つお願いしたいことがあります",
        "実は二つお願いしたいことがあります",
        "じつは2つおねがいしたいことがあります",
        "じつはふたつおねがいしたいことがあります",
        "じつは二つお願いしたいことがあります"
      ]
    },
    {
      id: 6,
      speaker: "A",
      japanese: "一つ目はメールの設定についてなんですが、",
      reading: "",
      romaji: "",
      english: "The first is about email setup,",
      vietnamese: "Việc thứ nhất là về cài đặt email,",
      acceptedAnswers: [
        "一つ目はメールの設定についてなんですが",
        "1つ目はメールの設定についてなんですが",
        "ひとつめはメールのせっていについてなんですが",
        "一つ目はメールのせっていについてなんですが"
      ]
    },
    {
      id: 7,
      speaker: "A",
      japanese: "まだよく理解できていなくて、少し困っています。",
      reading: "",
      romaji: "",
      english: "I still do not understand it well and am having a little trouble.",
      vietnamese: "em vẫn chưa hiểu rõ nên đang hơi gặp khó khăn.",
      acceptedAnswers: [
        "まだよく理解できていなくて少し困っています",
        "まだよくりかいできていなくてすこしこまっています",
        "まだよく理解できていなくてすこし困っています"
      ]
    },
    {
      id: 8,
      speaker: "A",
      japanese: "もしよろしければ、設定方法を教えていただけますでしょうか。",
      reading: "",
      romaji: "",
      english: "If possible, could you please teach me how to set it up?",
      vietnamese: "Nếu được, anh có thể hướng dẫn giúp em cách cài đặt không ạ?",
      acceptedAnswers: [
        "もしよろしければ設定方法を教えていただけますでしょうか",
        "もしよろしければせっていほうほうをおしえていただけますでしょうか",
        "もしよろしければ設定方法をおしえていただけますでしょうか"
      ]
    },
    {
      id: 9,
      speaker: "B",
      japanese: "分かりました。では、手順を説明しますね。",
      reading: "",
      romaji: "",
      english: "Understood. Then I will explain the procedure.",
      vietnamese: "Anh hiểu rồi. Vậy để anh giải thích quy trình nhé.",
      acceptedAnswers: [
        "分かりましたでは手順を説明しますね",
        "わかりましたでは手順を説明しますね",
        "わかりましたではてじゅんをせつめいしますね",
        "分かりましたではてじゅんをせつめいしますね"
      ]
    },
    {
      id: 10,
      speaker: "B",
      japanese: "まずグループウェアにログインして、",
      reading: "",
      romaji: "",
      english: "First, log in to the groupware,",
      vietnamese: "Trước tiên em đăng nhập vào groupware,",
      acceptedAnswers: [
        "まずグループウェアにログインして"
      ]
    },
    {
      id: 11,
      speaker: "B",
      japanese: "その中の手順を確認しながら進めてください。",
      reading: "",
      romaji: "",
      english: "and proceed while checking the procedure inside it.",
      vietnamese: "sau đó làm theo hướng dẫn trong đó.",
      acceptedAnswers: [
        "その中の手順を確認しながら進めてください",
        "そのなかのてじゅんをかくにんしながらすすめてください",
        "その中のてじゅんをかくにんしながら進めてください"
      ]
    },
    {
      id: 12,
      speaker: "B",
      japanese: "手順書もプリントアウトしてお渡ししますので、",
      reading: "",
      romaji: "",
      english: "I will also print out the procedure document and give it to you,",
      vietnamese: "Anh cũng sẽ in tài liệu hướng dẫn cho em,",
      acceptedAnswers: [
        "手順書もプリントアウトしてお渡ししますので",
        "てじゅんしょもプリントアウトしておわたししますので",
        "手順書もプリントアウトしておわたししますので"
      ]
    },
    {
      id: 13,
      speaker: "B",
      japanese: "それを見ながら作業すれば問題ないと思います。",
      reading: "",
      romaji: "",
      english: "so I think there will be no problem if you work while looking at it.",
      vietnamese: "cứ xem theo đó mà làm là được.",
      acceptedAnswers: [
        "それを見ながら作業すれば問題ないと思います",
        "それをみながらさぎょうすればもんだいないとおもいます",
        "それを見ながらさぎょうすれば問題ないとおもいます"
      ]
    },
    {
      id: 14,
      speaker: "A",
      japanese: "ありがとうございます。",
      reading: "",
      romaji: "",
      english: "Thank you.",
      vietnamese: "Em cảm ơn anh.",
      acceptedAnswers: [
        "ありがとうございます"
      ]
    },
    {
      id: 15,
      speaker: "A",
      japanese: "まずは手順を確認して、自分で進めてみます。",
      reading: "",
      romaji: "",
      english: "First, I will check the procedure and try to proceed by myself.",
      vietnamese: "Trước tiên em sẽ xem hướng dẫn và thử tự làm.",
      acceptedAnswers: [
        "まずは手順を確認して自分で進めてみます",
        "まずはてじゅんをかくにんしてじぶんですすめてみます",
        "まずは手順をかくにんして自分で進めてみます"
      ]
    },
    {
      id: 16,
      speaker: "A",
      japanese: "もし途中で分からないところがあれば、",
      reading: "",
      romaji: "",
      english: "If there is anything I do not understand along the way,",
      vietnamese: "Nếu trong quá trình làm có chỗ nào không hiểu,",
      acceptedAnswers: [
        "もし途中で分からないところがあれば",
        "もし途中でわからないところがあれば",
        "もしとちゅうでわからないところがあれば",
        "もしとちゅうで分からないところがあれば"
      ]
    },
    {
      id: 17,
      speaker: "A",
      japanese: "また質問させていただいてもよろしいでしょうか。",
      reading: "",
      romaji: "",
      english: "may I ask you again?",
      vietnamese: "thì em hỏi lại anh có được không ạ?",
      acceptedAnswers: [
        "また質問させていただいてもよろしいでしょうか",
        "またしつもんさせていただいてもよろしいでしょうか"
      ]
    },
    {
      id: 18,
      speaker: "B",
      japanese: "はい、もちろんです。遠慮なく聞いてください。",
      reading: "",
      romaji: "",
      english: "Yes, of course. Please feel free to ask.",
      vietnamese: "Ừ, tất nhiên rồi. Em cứ thoải mái hỏi nhé.",
      acceptedAnswers: [
        "はいもちろんです遠慮なく聞いてください",
        "はいもちろんですえんりょなくきいてください",
        "はいもちろんです遠慮なくきいてください"
      ]
    },
    {
      id: 19,
      speaker: "A",
      japanese: "もう一つは週報についてなんですが、",
      reading: "",
      romaji: "",
      english: "The other thing is about the weekly report,",
      vietnamese: "Việc thứ hai là về báo cáo tuần,",
      acceptedAnswers: [
        "もう一つは週報についてなんですが",
        "もう1つは週報についてなんですが",
        "もうひとつはしゅうほうについてなんですが",
        "もう一つはしゅうほうについてなんですが"
      ]
    },
    {
      id: 20,
      speaker: "A",
      japanese: "書き方や提出ルールについて、まだよく理解できていません。",
      reading: "",
      romaji: "",
      english: "I still do not fully understand how to write it or the submission rules.",
      vietnamese: "em vẫn chưa hiểu rõ cách viết và quy định nộp như thế nào.",
      acceptedAnswers: [
        "書き方や提出ルールについてまだよく理解できていません",
        "かきかたいていしゅつルールについてまだよくりかいできていません",
        "書き方やていしゅつルールについてまだよく理解できていません"
      ]
    },
    {
      id: 21,
      speaker: "A",
      japanese: "月曜日に提出するという認識でよろしいでしょうか。",
      reading: "",
      romaji: "",
      english: "Is my understanding correct that it should be submitted on Monday?",
      vietnamese: "Em hiểu là sẽ nộp vào thứ hai hàng tuần, như vậy có đúng không ạ?",
      acceptedAnswers: [
        "月曜日に提出するという認識でよろしいでしょうか",
        "げつようびにしていしゅつするというにんしきでよろしいでしょうか",
        "月曜日にていしゅつするというにんしきでよろしいでしょうか"
      ]
    },
    {
      id: 22,
      speaker: "B",
      japanese: "そうですね。週報は毎週月曜日に提出することになっています。",
      reading: "",
      romaji: "",
      english: "Yes. Weekly reports are to be submitted every Monday.",
      vietnamese: "Ừ đúng rồi. Báo cáo tuần sẽ nộp vào thứ hai hàng tuần.",
      acceptedAnswers: [
        "そうですね週報は毎週月曜日に提出することになっています",
        "そうですねしゅうほうはまいしゅうげつようびにしていしゅつすることになっています",
        "そうですね週報はまいしゅう月曜日にていしゅつすることになっています"
      ]
    },
    {
      id: 23,
      speaker: "A",
      japanese: "内容はどのように書けばよろしいでしょうか。",
      reading: "",
      romaji: "",
      english: "How should I write the content?",
      vietnamese: "Vậy nội dung thì nên viết như thế nào ạ?",
      acceptedAnswers: [
        "内容はどのように書けばよろしいでしょうか",
        "ないようはどのようにかけばよろしいでしょうか",
        "内容はどのようにかけばよろしいでしょうか"
      ]
    },
    {
      id: 24,
      speaker: "B",
      japanese: "前の週に行った業務や進捗状況を書いてください。",
      reading: "",
      romaji: "",
      english: "Please write about the work you did during the previous week and the progress status.",
      vietnamese: "Em hãy viết về công việc đã làm và tình hình tiến độ trong tuần trước.",
      acceptedAnswers: [
        "前の週に行った業務や進捗状況を書いてください",
        "まえのしゅうにおこなったぎょうむやしんちょくじょうきょうをかいてください",
        "前の週におこなった業務やしんちょくじょうきょうを書いてください"
      ]
    },
    {
      id: 25,
      speaker: "B",
      japanese: "あとでサンプルをお見せしますので、",
      reading: "",
      romaji: "",
      english: "I will show you a sample later,",
      vietnamese: "Anh sẽ cho em xem một mẫu để tham khảo,",
      acceptedAnswers: [
        "あとでサンプルをお見せしますので",
        "あとでサンプルをおみせしますので"
      ]
    },
    {
      id: 26,
      speaker: "B",
      japanese: "それを参考にすると分かりやすいと思います。",
      reading: "",
      romaji: "",
      english: "so I think it will be easier to understand if you use it as a reference.",
      vietnamese: "như vậy sẽ dễ hiểu hơn.",
      acceptedAnswers: [
        "それを参考にすると分かりやすいと思います",
        "それを参考にするとわかりやすいと思います",
        "それをさんこうにするとわかりやすいとおもいます",
        "それをさんこうにすると分かりやすいと思います"
      ]
    },
    {
      id: 27,
      speaker: "A",
      japanese: "ありがとうございます。",
      reading: "",
      romaji: "",
      english: "Thank you.",
      vietnamese: "Em cảm ơn anh.",
      acceptedAnswers: [
        "ありがとうございます"
      ]
    },
    {
      id: 28,
      speaker: "A",
      japanese: "まずはサンプルを確認して、自分で書いてみます。",
      reading: "",
      romaji: "",
      english: "First, I will check the sample and try writing it myself.",
      vietnamese: "Trước tiên em sẽ xem mẫu rồi thử viết.",
      acceptedAnswers: [
        "まずはサンプルを確認して自分で書いてみます",
        "まずはサンプルをかくにんしてじぶんでかいてみます",
        "まずはサンプルを確認してじぶんで書いてみます"
      ]
    },
    {
      id: 29,
      speaker: "A",
      japanese: "山田さん、先ほど教えていただいた週報ですが、",
      reading: "",
      romaji: "",
      english: "Yamada-san, about the weekly report you explained earlier,",
      vietnamese: "Anh Yamada ơi, về báo cáo tuần mà anh vừa hướng dẫn cho em,",
      acceptedAnswers: [
        "山田さん先ほど教えていただいた週報ですが",
        "やまださんさきほどおしえていただいたしゅうほうですが",
        "山田さんさきほどおしえていただいた週報ですが"
      ]
    },
    {
      id: 30,
      speaker: "A",
      japanese: "一度書いてみました。",
      reading: "",
      romaji: "",
      english: "I tried writing it once.",
      vietnamese: "thì em vừa viết xong rồi.",
      acceptedAnswers: [
        "一度書いてみました",
        "いちどかいてみました",
        "1度書いてみました"
      ]
    },
    {
      id: 31,
      speaker: "A",
      japanese: "日本語の表現に少し自信がないので、",
      reading: "",
      romaji: "",
      english: "I am not very confident about my Japanese expressions,",
      vietnamese: "Vì em chưa tự tin lắm về cách diễn đạt tiếng Nhật,",
      acceptedAnswers: [
        "日本語の表現に少し自信がないので",
        "にほんごのひょうげんにすこしじしんがないので",
        "日本語のひょうげんにすこし自信がないので"
      ]
    },
    {
      id: 32,
      speaker: "A",
      japanese: "チェックしていただけますでしょうか。",
      reading: "",
      romaji: "",
      english: "so could you please check it?",
      vietnamese: "anh có thể kiểm tra giúp em được không ạ?",
      acceptedAnswers: [
        "チェックしていただけますでしょうか"
      ]
    },
    {
      id: 33,
      speaker: "B",
      japanese: "いいですよ。内容を確認しますね。",
      reading: "",
      romaji: "",
      english: "Sure. I will check the content.",
      vietnamese: "Được thôi, anh sẽ xem nội dung nhé.",
      acceptedAnswers: [
        "いいですよ内容を確認しますね",
        "いいですよないようをかくにんしますね"
      ]
    },
    {
      id: 34,
      speaker: "B",
      japanese: "ただ、今は少し急ぎの作業をしているので、",
      reading: "",
      romaji: "",
      english: "However, I am doing a somewhat urgent task now,",
      vietnamese: "Nhưng hiện tại anh đang có việc gấp,",
      acceptedAnswers: [
        "ただ今は少し急ぎの作業をしているので",
        "ただいまはすこしいそぎのさぎょうをしているので",
        "ただ今はすこしいそぎの作業をしているので"
      ]
    },
    {
      id: 35,
      speaker: "B",
      japanese: "すぐには対応できません。",
      reading: "",
      romaji: "",
      english: "so I cannot handle it immediately.",
      vietnamese: "nên chưa kiểm tra ngay được.",
      acceptedAnswers: [
        "すぐには対応できません",
        "すぐにはたいおうできません"
      ]
    },
    {
      id: 36,
      speaker: "B",
      japanese: "1時間後ぐらいでもよろしいでしょうか。",
      reading: "",
      romaji: "",
      english: "Would it be okay in about one hour?",
      vietnamese: "Khoảng 1 tiếng nữa được không?",
      acceptedAnswers: [
        "1時間後ぐらいでもよろしいでしょうか",
        "一時間後ぐらいでもよろしいでしょうか",
        "いちじかんごぐらいでもよろしいでしょうか"
      ]
    },
    {
      id: 37,
      speaker: "A",
      japanese: "はい、大丈夫です。",
      reading: "",
      romaji: "",
      english: "Yes, that is fine.",
      vietnamese: "Dạ được ạ.",
      acceptedAnswers: [
        "はい大丈夫です",
        "はいだいじょうぶです"
      ]
    },
    {
      id: 38,
      speaker: "A",
      japanese: "お手数をおかけしますが、よろしくお願いいたします。",
      reading: "",
      romaji: "",
      english: "I am sorry to trouble you, but thank you for your help.",
      vietnamese: "Em làm phiền anh rồi, mong anh giúp em nhé.",
      acceptedAnswers: [
        "お手数をおかけしますがよろしくお願いいたします",
        "おてすうをおかけしますがよろしくおねがいいたします"
      ]
    },
    {
      id: 39,
      speaker: "A",
      japanese: "山田さん、週報の件ですが、修正が終わりました。",
      reading: "",
      romaji: "",
      english: "Yamada-san, regarding the weekly report, I have finished the corrections.",
      vietnamese: "Anh Yamada ơi, về báo cáo tuần, em đã sửa xong rồi.",
      acceptedAnswers: [
        "山田さん週報の件ですが修正が終わりました",
        "やまださんしゅうほうのけんですがしゅうせいがおわりました",
        "山田さんしゅうほうの件ですが修正がおわりました"
      ]
    },
    {
      id: 40,
      speaker: "A",
      japanese: "フィードバックをもとに、表現をいくつか修正しました。",
      reading: "",
      romaji: "",
      english: "Based on your feedback, I corrected several expressions.",
      vietnamese: "Dựa trên góp ý của anh, em đã chỉnh lại một số cách diễn đạt cho dễ hiểu hơn.",
      acceptedAnswers: [
        "フィードバックをもとに表現をいくつか修正しました",
        "フィードバックをもとにひょうげんをいくつかしゅうせいしました"
      ]
    },
    {
      id: 41,
      speaker: "A",
      japanese: "ご確認いただけますでしょうか。",
      reading: "",
      romaji: "",
      english: "Could you please check it?",
      vietnamese: "Anh có thể kiểm tra lại giúp em được không ạ?",
      acceptedAnswers: [
        "ご確認いただけますでしょうか",
        "ごかくにんいただけますでしょうか"
      ]
    },
    {
      id: 42,
      speaker: "B",
      japanese: "確認しますね。問題がなければ、そのまま提出しましょう。",
      reading: "",
      romaji: "",
      english: "I will check it. If there are no problems, let's submit it as it is.",
      vietnamese: "Để anh kiểm tra nhé. Nếu không có vấn đề gì thì em cứ nộp luôn.",
      acceptedAnswers: [
        "確認しますね問題がなければそのまま提出しましょう",
        "かくにんしますねもんだいがなければそのままていしゅつしましょう",
        "確認しますね問題がなければそのままていしゅつしましょう"
      ]
    },
    {
      id: 43,
      speaker: "B",
      japanese: "もし追加の修正があれば、こちらからお伝えします。",
      reading: "",
      romaji: "",
      english: "If there are any additional corrections, I will let you know.",
      vietnamese: "Nếu cần chỉnh sửa thêm thì anh sẽ phản hồi lại cho em.",
      acceptedAnswers: [
        "もし追加の修正があればこちらからお伝えします",
        "もしついかのしゅうせいがあればこちらからおつたえします",
        "もし追加のしゅうせいがあればこちらからお伝えします"
      ]
    },
    {
      id: 44,
      speaker: "A",
      japanese: "承知しました。よろしくお願いいたします。",
      reading: "",
      romaji: "",
      english: "Understood. Thank you for your support.",
      vietnamese: "Dạ em hiểu rồi. Mong anh giúp em ạ.",
      acceptedAnswers: [
        "承知しましたよろしくお願いいたします",
        "しょうちしましたよろしくおねがいいたします"
      ]
    }
  ]
};