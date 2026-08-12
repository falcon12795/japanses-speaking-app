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
      acceptedAnswers: ["山田さん今お時間よろしいでしょうか"]
    },
    {
      id: 2,
      speaker: "A",
      japanese: "少しご相談したいことがありまして、お時間をいただけると助かります。",
      reading: "",
      romaji: "",
      english: "I have something I would like to discuss, so it would be helpful if I could have a little of your time.",
      vietnamese: "Em có một chút việc muốn trao đổi, anh cho em xin một chút thời gian nhé.",
      acceptedAnswers: ["少しご相談したいことがありましてお時間をいただけると助かります"]
    },
    {
      id: 3,
      speaker: "B",
      japanese: "はい、大丈夫ですよ。どうしましたか。",
      reading: "",
      romaji: "",
      english: "Yes, that is fine. What is it?",
      vietnamese: "Ừ, anh rảnh. Có chuyện gì vậy?",
      acceptedAnswers: ["はい大丈夫ですよどうしましたか"]
    },
    {
      id: 4,
      speaker: "A",
      japanese: "実は、2つお願いしたいことがあります。",
      reading: "",
      romaji: "",
      english: "Actually, there are two things I would like to ask for your help with.",
      vietnamese: "Thực ra em có 2 việc muốn nhờ.",
      acceptedAnswers: ["実は2つお願いしたいことがあります", "実は二つお願いしたいことがあります"]
    },
    {
      id: 5,
      speaker: "A",
      japanese: "一つ目はメールの設定についてなんですが、まだよく理解できていなくて、少し困っています。",
      reading: "",
      romaji: "",
      english: "The first is about email setup. I still do not understand it well and am having a little trouble.",
      vietnamese: "Việc thứ nhất là về cài đặt email, em vẫn chưa hiểu rõ nên đang hơi gặp khó khăn.",
      acceptedAnswers: ["一つ目はメールの設定についてなんですがまだよく理解できていなくて少し困っています"]
    },
    {
      id: 6,
      speaker: "A",
      japanese: "もしよろしければ、設定方法を教えていただけますでしょうか。",
      reading: "",
      romaji: "",
      english: "If possible, could you please teach me how to set it up?",
      vietnamese: "Nếu được, anh có thể hướng dẫn giúp em cách cài đặt không ạ?",
      acceptedAnswers: ["もしよろしければ設定方法を教えていただけますでしょうか"]
    },
    {
      id: 7,
      speaker: "B",
      japanese: "分かりました。では、手順を説明しますね。",
      reading: "",
      romaji: "",
      english: "Understood. Then I will explain the procedure.",
      vietnamese: "Anh hiểu rồi. Vậy để anh giải thích quy trình nhé.",
      acceptedAnswers: ["分かりましたでは手順を説明しますね", "わかりましたでは手順を説明しますね"]
    },
    {
      id: 8,
      speaker: "B",
      japanese: "まずグループウェアにログインして、その中の手順を確認しながら進めてください。",
      reading: "",
      romaji: "",
      english: "First, log in to the groupware and proceed while checking the procedure inside it.",
      vietnamese: "Trước tiên em đăng nhập vào groupware, sau đó làm theo hướng dẫn trong đó.",
      acceptedAnswers: ["まずグループウェアにログインしてその中の手順を確認しながら進めてください"]
    },
    {
      id: 9,
      speaker: "B",
      japanese: "手順書もプリントアウトしてお渡ししますので、それを見ながら作業すれば問題ないと思います。",
      reading: "",
      romaji: "",
      english: "I will also print out the procedure document and give it to you, so I think there will be no problem if you work while looking at it.",
      vietnamese: "Anh cũng sẽ in tài liệu hướng dẫn cho em, cứ xem theo đó mà làm là được.",
      acceptedAnswers: ["手順書もプリントアウトしてお渡ししますのでそれを見ながら作業すれば問題ないと思います"]
    },
    {
      id: 10,
      speaker: "A",
      japanese: "ありがとうございます。",
      reading: "",
      romaji: "",
      english: "Thank you.",
      vietnamese: "Em cảm ơn anh.",
      acceptedAnswers: ["ありがとうございます"]
    },
    {
      id: 11,
      speaker: "A",
      japanese: "まずは手順を確認して、自分で進めてみます。",
      reading: "",
      romaji: "",
      english: "First, I will check the procedure and try to proceed by myself.",
      vietnamese: "Trước tiên em sẽ xem hướng dẫn và thử tự làm.",
      acceptedAnswers: ["まずは手順を確認して自分で進めてみます"]
    },
    {
      id: 12,
      speaker: "A",
      japanese: "もし途中で分からないところがあれば、また質問させていただいてもよろしいでしょうか。",
      reading: "",
      romaji: "",
      english: "If there is anything I do not understand along the way, may I ask you again?",
      vietnamese: "Nếu trong quá trình làm có chỗ nào không hiểu thì em hỏi lại anh có được không ạ?",
      acceptedAnswers: ["もし途中で分からないところがあればまた質問させていただいてもよろしいでしょうか", "もし途中でわからないところがあればまた質問させていただいてもよろしいでしょうか"]
    },
    {
      id: 13,
      speaker: "B",
      japanese: "はい、もちろんです。遠慮なく聞いてください。",
      reading: "",
      romaji: "",
      english: "Yes, of course. Please feel free to ask.",
      vietnamese: "Ừ, tất nhiên rồi. Em cứ thoải mái hỏi nhé.",
      acceptedAnswers: ["はいもちろんです遠慮なく聞いてください"]
    },
    {
      id: 14,
      speaker: "A",
      japanese: "もう一つは週報についてなんですが、書き方や提出ルールについて、まだよく理解できていません。",
      reading: "",
      romaji: "",
      english: "The other thing is about the weekly report. I still do not fully understand how to write it or the submission rules.",
      vietnamese: "Việc thứ hai là về báo cáo tuần, em vẫn chưa hiểu rõ cách viết và quy định nộp như thế nào.",
      acceptedAnswers: ["もう一つは週報についてなんですが書き方や提出ルールについてまだよく理解できていません"]
    },
    {
      id: 15,
      speaker: "A",
      japanese: "月曜日に提出するという認識でよろしいでしょうか。",
      reading: "",
      romaji: "",
      english: "Is my understanding correct that it should be submitted on Monday?",
      vietnamese: "Em hiểu là sẽ nộp vào thứ hai hàng tuần, như vậy có đúng không ạ?",
      acceptedAnswers: ["月曜日に提出するという認識でよろしいでしょうか"]
    },
    {
      id: 16,
      speaker: "B",
      japanese: "そうですね。週報は毎週月曜日に提出することになっています。",
      reading: "",
      romaji: "",
      english: "Yes. Weekly reports are to be submitted every Monday.",
      vietnamese: "Ừ đúng rồi. Báo cáo tuần sẽ nộp vào thứ hai hàng tuần.",
      acceptedAnswers: ["そうですね週報は毎週月曜日に提出することになっています"]
    },
    {
      id: 17,
      speaker: "A",
      japanese: "内容はどのように書けばよろしいでしょうか。",
      reading: "",
      romaji: "",
      english: "How should I write the content?",
      vietnamese: "Vậy nội dung thì nên viết như thế nào ạ?",
      acceptedAnswers: ["内容はどのように書けばよろしいでしょうか"]
    },
    {
      id: 18,
      speaker: "B",
      japanese: "前の週に行った業務や進捗状況を書いてください。",
      reading: "",
      romaji: "",
      english: "Please write about the work you did during the previous week and the progress status.",
      vietnamese: "Em hãy viết về công việc đã làm và tình hình tiến độ trong tuần trước.",
      acceptedAnswers: ["前の週に行った業務や進捗状況を書いてください"]
    },
    {
      id: 19,
      speaker: "B",
      japanese: "あとでサンプルをお見せしますので、それを参考にすると分かりやすいと思います。",
      reading: "",
      romaji: "",
      english: "I will show you a sample later, so I think it will be easier to understand if you use it as a reference.",
      vietnamese: "Anh sẽ cho em xem một mẫu để tham khảo, như vậy sẽ dễ hiểu hơn.",
      acceptedAnswers: ["あとでサンプルをお見せしますのでそれを参考にすると分かりやすいと思います", "あとでサンプルをお見せしますのでそれを参考にするとわかりやすいと思います"]
    },
    {
      id: 20,
      speaker: "A",
      japanese: "ありがとうございます。まずはサンプルを確認して、自分で書いてみます。",
      reading: "",
      romaji: "",
      english: "Thank you. First, I will check the sample and try writing it myself.",
      vietnamese: "Em cảm ơn anh. Em sẽ xem mẫu rồi thử viết.",
      acceptedAnswers: ["ありがとうございますまずはサンプルを確認して自分で書いてみます"]
    },
    {
      id: 21,
      speaker: "A",
      japanese: "山田さん、先ほど教えていただいた週報ですが、一度書いてみました。",
      reading: "",
      romaji: "",
      english: "Yamada-san, about the weekly report you explained earlier, I tried writing it once.",
      vietnamese: "Anh Yamada ơi, về báo cáo tuần mà anh vừa hướng dẫn cho em thì em vừa viết xong rồi.",
      acceptedAnswers: ["山田さん先ほど教えていただいた週報ですが一度書いてみました"]
    },
    {
      id: 22,
      speaker: "A",
      japanese: "日本語の表現に少し自信がないので、チェックしていただけますでしょうか。",
      reading: "",
      romaji: "",
      english: "I am not very confident about my Japanese expressions, so could you please check it?",
      vietnamese: "Vì em chưa tự tin lắm về cách diễn đạt tiếng Nhật, anh có thể kiểm tra giúp em được không ạ?",
      acceptedAnswers: ["日本語の表現に少し自信がないのでチェックしていただけますでしょうか"]
    },
    {
      id: 23,
      speaker: "B",
      japanese: "いいですよ。内容を確認しますね。",
      reading: "",
      romaji: "",
      english: "Sure. I will check the content.",
      vietnamese: "Được thôi, anh sẽ xem nội dung nhé.",
      acceptedAnswers: ["いいですよ内容を確認しますね"]
    },
    {
      id: 24,
      speaker: "B",
      japanese: "ただ、今は少し急ぎの作業をしているので、すぐには対応できません。",
      reading: "",
      romaji: "",
      english: "However, I am doing a somewhat urgent task now, so I cannot handle it immediately.",
      vietnamese: "Nhưng hiện tại anh đang có việc gấp nên chưa kiểm tra ngay được.",
      acceptedAnswers: ["ただ今は少し急ぎの作業をしているのですぐには対応できません"]
    },
    {
      id: 25,
      speaker: "B",
      japanese: "1時間後ぐらいでもよろしいでしょうか。",
      reading: "",
      romaji: "",
      english: "Would it be okay in about one hour?",
      vietnamese: "Khoảng 1 tiếng nữa được không?",
      acceptedAnswers: ["1時間後ぐらいでもよろしいでしょうか", "一時間後ぐらいでもよろしいでしょうか"]
    },
    {
      id: 26,
      speaker: "A",
      japanese: "はい、大丈夫です。",
      reading: "",
      romaji: "",
      english: "Yes, that is fine.",
      vietnamese: "Dạ được ạ.",
      acceptedAnswers: ["はい大丈夫です"]
    },
    {
      id: 27,
      speaker: "A",
      japanese: "お手数をおかけしますが、よろしくお願いいたします。",
      reading: "",
      romaji: "",
      english: "I am sorry to trouble you, but thank you for your help.",
      vietnamese: "Em làm phiền anh rồi, mong anh giúp em nhé.",
      acceptedAnswers: ["お手数をおかけしますがよろしくお願いいたします"]
    },
    {
      id: 28,
      speaker: "A",
      japanese: "山田さん、週報の件ですが、修正が終わりました。",
      reading: "",
      romaji: "",
      english: "Yamada-san, regarding the weekly report, I have finished the corrections.",
      vietnamese: "Anh Yamada ơi, về báo cáo tuần, em đã sửa xong rồi.",
      acceptedAnswers: ["山田さん週報の件ですが修正が終わりました"]
    },
    {
      id: 29,
      speaker: "A",
      japanese: "フィードバックをもとに、表現をいくつか修正しました。",
      reading: "",
      romaji: "",
      english: "Based on your feedback, I corrected several expressions.",
      vietnamese: "Dựa trên góp ý của anh, em đã chỉnh lại một số cách diễn đạt cho dễ hiểu hơn.",
      acceptedAnswers: ["フィードバックをもとに表現をいくつか修正しました"]
    },
    {
      id: 30,
      speaker: "A",
      japanese: "ご確認いただけますでしょうか。",
      reading: "",
      romaji: "",
      english: "Could you please check it?",
      vietnamese: "Anh có thể kiểm tra lại giúp em được không ạ?",
      acceptedAnswers: ["ご確認いただけますでしょうか"]
    },
    {
      id: 31,
      speaker: "B",
      japanese: "確認しますね。問題がなければ、そのまま提出しましょう。",
      reading: "",
      romaji: "",
      english: "I will check it. If there are no problems, let's submit it as it is.",
      vietnamese: "Để anh kiểm tra nhé. Nếu không có vấn đề gì thì em cứ nộp luôn.",
      acceptedAnswers: ["確認しますね問題がなければそのまま提出しましょう"]
    },
    {
      id: 32,
      speaker: "B",
      japanese: "もし追加の修正があれば、こちらからお伝えします。",
      reading: "",
      romaji: "",
      english: "If there are any additional corrections, I will let you know.",
      vietnamese: "Nếu cần chỉnh sửa thêm thì anh sẽ phản hồi lại cho em.",
      acceptedAnswers: ["もし追加の修正があればこちらからお伝えします"]
    },
    {
      id: 33,
      speaker: "A",
      japanese: "承知しました。よろしくお願いいたします。",
      reading: "",
      romaji: "",
      english: "Understood. Thank you for your support.",
      vietnamese: "Dạ em hiểu rồi. Mong anh giúp em ạ.",
      acceptedAnswers: ["承知しましたよろしくお願いいたします"]
    }
  ]
};
