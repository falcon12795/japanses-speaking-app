export default [
  {
    id: "it_shousai_kaiwa_001",
    level: "IT",
    lesson: "詳細設計",
    title: "詳細設計レビュー",
    description: "Reviewing the detailed design document.",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese: "詳細設計書のレビューを始めましょう。",
        reading: "しょうさいせっけいしょのレビューをはじめましょう。",
        english: "Let's start reviewing the detailed design document.",
        vietnamese: "Hãy bắt đầu review tài liệu thiết kế chi tiết."
      },
      {
        id: 2,
        speaker: "B",
        japanese: "まず画面詳細設計を確認したいです。",
        reading: "まずがめんしょうさいせっけいをかくにんしたいです。",
        english: "First, I'd like to review the detailed screen design.",
        vietnamese: "Trước tiên tôi muốn kiểm tra thiết kế chi tiết màn hình."
      },
      {
        id: 3,
        speaker: "A",
        japanese: "表示方法は統一されていますか。",
        reading: "ひょうじほうほうはとういつされていますか。",
        english: "Are the display methods standardized?",
        vietnamese: "Cách hiển thị đã được thống nhất chưa?"
      },
      {
        id: 4,
        speaker: "B",
        japanese: "はい。既存システムに合わせて整理しました。",
        reading: "はい。きぞんシステムにあわせてせいりしました。",
        english: "Yes. We aligned it with the existing system.",
        vietnamese: "Vâng. Chúng tôi đã sắp xếp theo hệ thống hiện tại."
      },
      {
        id: 5,
        speaker: "A",
        japanese: "条件分岐の処理は細かく定めていますか。",
        reading: "じょうけんぶんきのしょりはこまかくさだめていますか。",
        english: "Have the conditional branches been defined in detail?",
        vietnamese: "Các nhánh điều kiện đã được xác định chi tiết chưa?"
      },
      {
        id: 6,
        speaker: "B",
        japanese: "はい。内部構造も資料一式に含めています。",
        reading: "はい。ないぶこうぞうもしりょういっしきにふくめています。",
        english: "Yes. The internal structure is also included in the document set.",
        vietnamese: "Vâng. Cấu trúc bên trong cũng được đưa vào bộ tài liệu."
      },
      {
        id: 7,
        speaker: "A",
        japanese: "保守性も考慮されていますね。",
        reading: "ほしゅせいもこうりょされていますね。",
        english: "Maintainability has also been considered.",
        vietnamese: "Khả năng bảo trì cũng đã được xem xét."
      },
      {
        id: 8,
        speaker: "B",
        japanese: "はい。生産性向上も図っています。",
        reading: "はい。せいさんせいこうじょうもはかっています。",
        english: "Yes. We are also aiming to improve productivity.",
        vietnamese: "Vâng. Chúng tôi cũng hướng tới nâng cao năng suất."
      },
      {
        id: 9,
        speaker: "A",
        japanese: "前工程との整合性も問題なさそうですね。",
        reading: "ぜんこうていとのせいごうせいももんだいなさそうですね。",
        english: "Consistency with the previous phase also looks good.",
        vietnamese: "Sự nhất quán với công đoạn trước có vẻ cũng ổn."
      },
      {
        id: 10,
        speaker: "B",
        japanese: "はい、その認識で問題ありません。",
        reading: "はい、そのにんしきでもんだいありません。",
        english: "Yes, that understanding is correct.",
        vietnamese: "Vâng, nhận định đó là chính xác."
      }
    ]
  },

  {
    id: "it_shousai_kaiwa_002",
    level: "IT",
    lesson: "詳細設計",
    title: "画面設計の確認",
    description: "Discussing detailed screen specification.",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese: "新規ユーザ追加画面について確認しましょう。",
        reading: "しんきユーザついかがめんについてかくにんしましょう。",
        english: "Let's review the new user registration screen.",
        vietnamese: "Hãy cùng xác nhận màn hình thêm người dùng mới."
      },
      {
        id: 2,
        speaker: "B",
        japanese: "まずラベルとコントロール名を確認します。",
        reading: "まずラベルとコントロールめいをかくにんします。",
        english: "First, let's confirm the labels and control names.",
        vietnamese: "Đầu tiên hãy xác nhận nhãn và tên control."
      },
      {
        id: 3,
        speaker: "A",
        japanese: "テキストボックスの最大長は何桁ですか。",
        reading: "テキストボックスのさいだいちょうはなんけたですか。",
        english: "What is the maximum length of the textbox?",
        vietnamese: "Textbox có độ dài tối đa bao nhiêu ký tự?"
      },
      {
        id: 4,
        speaker: "B",
        japanese: "30桁を想定しています。",
        reading: "さんじゅうけたをそうていしています。",
        english: "We assume 30 characters.",
        vietnamese: "Chúng tôi dự kiến là 30 ký tự."
      },
      {
        id: 5,
        speaker: "A",
        japanese: "初期値は設定されていますか。",
        reading: "しょきちはせっていされていますか。",
        english: "Are default values configured?",
        vietnamese: "Giá trị mặc định đã được thiết lập chưa?"
      },
      {
        id: 6,
        speaker: "B",
        japanese: "はい。追加区分に初期値を設定しています。",
        reading: "はい。ついかくぶんにしょきちをせっていしています。",
        english: "Yes. Default values are set for the additional category.",
        vietnamese: "Vâng. Giá trị mặc định đã được đặt cho phân loại bổ sung."
      },
      {
        id: 7,
        speaker: "A",
        japanese: "ラジオボタンとコンボボックスは編集可能ですか。",
        reading: "ラジオボタンとコンボボックスはへんしゅうかのうですか。",
        english: "Are the radio buttons and combobox editable?",
        vietnamese: "Radio button và combobox có thể chỉnh sửa không?"
      },
      {
        id: 8,
        speaker: "B",
        japanese: "条件によって活性と非活性を切り替えます。",
        reading: "じょうけんによってかっせいとひかっせいをきりかえます。",
        english: "They will switch between active and inactive based on conditions.",
        vietnamese: "Chúng sẽ chuyển đổi giữa active và inactive theo điều kiện."
      },
      {
        id: 9,
        speaker: "A",
        japanese: "入力値チェックも必要ですね。",
        reading: "にゅうりょくちチェックもひつようですね。",
        english: "Input validation is also necessary.",
        vietnamese: "Kiểm tra giá trị nhập cũng cần thiết."
      },
      {
        id: 10,
        speaker: "B",
        japanese: "はい。空白以外を必須条件にします。",
        reading: "はい。くうはくいがいをひっすじょうけんにします。",
        english: "Yes. Non-blank values will be required.",
        vietnamese: "Vâng. Giá trị không được để trống sẽ là điều kiện bắt buộc."
      }
    ]
  },

  {
    id: "it_shousai_kaiwa_003",
    level: "IT",
    lesson: "詳細設計",
    title: "レビュー依頼",
    description: "Requesting a review for detailed design.",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese: "レビュー依頼を送りましたか。",
        reading: "レビューいらいをおくりましたか。",
        english: "Did you send the review request?",
        vietnamese: "Bạn đã gửi yêu cầu review chưa?"
      },
      {
        id: 2,
        speaker: "B",
        japanese: "はい。先行レビューも依頼済みです。",
        reading: "はい。せんこうレビューもいらいずみです。",
        english: "Yes. The advance review has also been requested.",
        vietnamese: "Vâng. Review trước cũng đã được yêu cầu."
      },
      {
        id: 3,
        speaker: "A",
        japanese: "いつ頃フィードバックをもらえそうですか。",
        reading: "いつごろフィードバックをもらえそうですか。",
        english: "When can we expect feedback?",
        vietnamese: "Khoảng khi nào chúng ta nhận được phản hồi?"
      },
      {
        id: 4,
        speaker: "B",
        japanese: "今週中には回答が来ると思います。",
        reading: "こんしゅうじゅうにはかいとうがくるとおもいます。",
        english: "I think we'll receive responses within this week.",
        vietnamese: "Tôi nghĩ sẽ nhận được phản hồi trong tuần này."
      },
      {
        id: 5,
        speaker: "A",
        japanese: "レビュー対象は全ての設計内容ですか。",
        reading: "レビューたいしょうはすべてのせっけいないようですか。",
        english: "Are all design contents included in the review?",
        vietnamese: "Toàn bộ nội dung thiết kế đều nằm trong phạm vi review chứ?"
      },
      {
        id: 6,
        speaker: "B",
        japanese: "はい。ただし技術面を優先しています。",
        reading: "はい。ただしぎじゅつめんをゆうせんしています。",
        english: "Yes, but we prioritize the technical aspects.",
        vietnamese: "Vâng, nhưng ưu tiên các khía cạnh kỹ thuật."
      },
      {
        id: 7,
        speaker: "A",
        japanese: "ネイティブレビューも予定されていますか。",
        reading: "ネイティブレビューもよていされていますか。",
        english: "Is a native review also planned?",
        vietnamese: "Có kế hoạch native review không?"
      },
      {
        id: 8,
        speaker: "B",
        japanese: "はい。文言について確認してもらいます。",
        reading: "はい。もんごんについてかくにんしてもらいます。",
        english: "Yes. They will review the wording.",
        vietnamese: "Có. Họ sẽ kiểm tra phần câu chữ."
      },
      {
        id: 9,
        speaker: "A",
        japanese: "それなら安心ですね。",
        reading: "それならあんしんですね。",
        english: "That sounds reassuring.",
        vietnamese: "Như vậy thì yên tâm."
      },
      {
        id: 10,
        speaker: "B",
        japanese: "レビュー結果を共有します。",
        reading: "レビューけっかをきょうゆうします。",
        english: "I will share the review results.",
        vietnamese: "Tôi sẽ chia sẻ kết quả review."
      }
    ]
  },

  {
    id: "it_shousai_kaiwa_004",
    level: "IT",
    lesson: "詳細設計",
    title: "手戻り防止",
    description: "Reducing rework during detailed design.",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese: "最近、手戻りが増えていますね。",
        reading: "さいきん、てもどりがふえていますね。",
        english: "Recently, rework has been increasing.",
        vietnamese: "Gần đây việc làm lại đang tăng lên."
      },
      {
        id: 2,
        speaker: "B",
        japanese: "はい。前提条件の認識がずれていました。",
        reading: "はい。ぜんていじょうけんのにんしきがずれていました。",
        english: "Yes. There was a misunderstanding of the preconditions.",
        vietnamese: "Vâng. Có sự khác biệt trong nhận thức về điều kiện tiền đề."
      },
      {
        id: 3,
        speaker: "A",
        japanese: "要件の粒度も関係していますか。",
        reading: "ようけんのりゅうどもかんけいしていますか。",
        english: "Is the granularity of requirements also related?",
        vietnamese: "Độ chi tiết của yêu cầu cũng có liên quan không?"
      },
      {
        id: 4,
        speaker: "B",
        japanese: "その可能性があります。",
        reading: "そのかのうせいがあります。",
        english: "That is possible.",
        vietnamese: "Điều đó có thể xảy ra."
      },
      {
        id: 5,
        speaker: "A",
        japanese: "詳細設計工程で整理すべきですね。",
        reading: "しょうさいせっけいこうていでせいりすべきですね。",
        english: "We should organize it during the detailed design phase.",
        vietnamese: "Chúng ta nên sắp xếp lại trong giai đoạn thiết kế chi tiết."
      },
      {
        id: 6,
        speaker: "B",
        japanese: "はい。進め方を統一したいと思います。",
        reading: "はい。すすめかたをとういつしたいとおもいます。",
        english: "Yes. I want to standardize the way we proceed.",
        vietnamese: "Vâng. Tôi muốn thống nhất cách thức thực hiện."
      },
      {
        id: 7,
        speaker: "A",
        japanese: "レビューを先行して実施しましょう。",
        reading: "レビューをせんこうしてじっししましょう。",
        english: "Let's conduct reviews earlier.",
        vietnamese: "Hãy thực hiện review sớm hơn."
      },
      {
        id: 8,
        speaker: "B",
        japanese: "そうすれば手戻りを減らせます。",
        reading: "そうすればてもどりをへらせます。",
        english: "That will reduce rework.",
        vietnamese: "Như vậy có thể giảm việc làm lại."
      },
      {
        id: 9,
        speaker: "A",
        japanese: "オンスケジュールで進めたいですね。",
        reading: "オンスケジュールですすめたいですね。",
        english: "We want to stay on schedule.",
        vietnamese: "Chúng ta muốn giữ đúng tiến độ."
      },
      {
        id: 10,
        speaker: "B",
        japanese: "はい、滞りなく進めます。",
        reading: "はい、とどこおりなくすすめます。",
        english: "Yes, we will proceed smoothly.",
        vietnamese: "Vâng, chúng tôi sẽ tiến hành suôn sẻ."
      }
    ]
  },

  {
    id: "it_shousai_kaiwa_005",
    level: "IT",
    lesson: "詳細設計",
    title: "採用管理システム",
    description: "Discussing a recruitment management system.",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese: "採用管理システムの設計について説明してください。",
        reading: "さいようかんりシステムのせっけいについてせつめいしてください。",
        english: "Please explain the design of the recruitment management system.",
        vietnamese: "Hãy giải thích thiết kế của hệ thống quản lý tuyển dụng."
      },
      {
        id: 2,
        speaker: "B",
        japanese: "まず業務要件を整理しました。",
        reading: "まずぎょうむようけんをせいりしました。",
        english: "First, we organized the business requirements.",
        vietnamese: "Trước tiên chúng tôi đã sắp xếp các yêu cầu nghiệp vụ."
      },
      {
        id: 3,
        speaker: "A",
        japanese: "どのような構成単位がありますか。",
        reading: "どのようなこうせいたんいがありますか。",
        english: "What structural units are there?",
        vietnamese: "Có những đơn vị cấu trúc nào?"
      },
      {
        id: 4,
        speaker: "B",
        japanese: "応募者管理、面接管理、評価管理があります。",
        reading: "おうぼしゃかんり、めんせつかんり、ひょうかかんりがあります。",
        english: "There are applicant management, interview management, and evaluation management.",
        vietnamese: "Có quản lý ứng viên, quản lý phỏng vấn và quản lý đánh giá."
      },
      {
        id: 5,
        speaker: "A",
        japanese: "プロトタイプは作成しましたか。",
        reading: "プロトタイプはさくせいしましたか。",
        english: "Have you created a prototype?",
        vietnamese: "Đã tạo prototype chưa?"
      },
      {
        id: 6,
        speaker: "B",
        japanese: "はい。現行サンプルを参考にしました。",
        reading: "はい。げんこうサンプルをさんこうにしました。",
        english: "Yes. We used the current sample as a reference.",
        vietnamese: "Vâng. Chúng tôi tham khảo mẫu hiện tại."
      },
      {
        id: 7,
        speaker: "A",
        japanese: "業務の実態と合っていますか。",
        reading: "ぎょうむのじったいとあっていますか。",
        english: "Does it match the actual business operations?",
        vietnamese: "Nó có phù hợp với thực tế nghiệp vụ không?"
      },
      {
        id: 8,
        speaker: "B",
        japanese: "はい。現場担当者にも確認してもらいました。",
        reading: "はい。げんばたんとうしゃにもかくにんしてもらいました。",
        english: "Yes. The on-site staff also reviewed it.",
        vietnamese: "Vâng. Người phụ trách hiện trường cũng đã xác nhận."
      },
      {
        id: 9,
        speaker: "A",
        japanese: "それなら安心ですね。",
        reading: "それならあんしんですね。",
        english: "That sounds reassuring.",
        vietnamese: "Như vậy thì yên tâm rồi."
      },
      {
        id: 10,
        speaker: "B",
        japanese: "次回はプロダクト評価を実施します。",
        reading: "じかいはプロダクトひょうかをじっしします。",
        english: "Next, we will conduct the product evaluation.",
        vietnamese: "Tiếp theo chúng tôi sẽ thực hiện đánh giá sản phẩm."
      }
    ]
  }
]