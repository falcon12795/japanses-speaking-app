export default [
    {
        id: "it_req_kaiwa_001",
        level: "IT",
        lesson: "要件定義",
        title: "要求仕様書の確認",
        description: "Discussing requirement specification documents.",
        lines: [
            {
                id: 1,
                speaker: "A",
                japanese: "要求仕様書のレビューは終わりましたか。",
                reading: "ようきゅうしようしょのレビューはおわりましたか。",
                english: "Has the requirement specification review been completed?",
                vietnamese: "Việc review tài liệu đặc tả yêu cầu đã hoàn thành chưa?"
            },
            {
                id: 2,
                speaker: "B",
                japanese: "はい。要件定義書と比較しながら確認しました。",
                reading: "はい。ようけんていぎしょとひかくしながらかくにんしました。",
                english: "Yes. I reviewed it while comparing it with the requirements definition document.",
                vietnamese: "Vâng. Tôi đã kiểm tra bằng cách đối chiếu với tài liệu định nghĩa yêu cầu."
            },
            {
                id: 3,
                speaker: "A",
                japanese: "受入基準は明確に記述されていますか。",
                reading: "じゅにゅうきじゅんはめいかくにきじゅつされていますか。",
                english: "Are the acceptance criteria clearly documented?",
                vietnamese: "Tiêu chí nghiệm thu đã được mô tả rõ ràng chưa?"
            },
            {
                id: 4,
                speaker: "B",
                japanese: "一部あやふやだったので修正しました。",
                reading: "いちぶあやふやだったのでしゅうせいしました。",
                english: "Some parts were unclear, so I revised them.",
                vietnamese: "Một số phần còn mơ hồ nên tôi đã chỉnh sửa."
            },
            {
                id: 5,
                speaker: "A",
                japanese: "非技術者でも理解できる内容ですか。",
                reading: "ひぎじゅつしゃでもりかいできるないようですか。",
                english: "Can non-technical people understand it?",
                vietnamese: "Người không có chuyên môn kỹ thuật có thể hiểu được không?"
            },
            {
                id: 6,
                speaker: "B",
                japanese: "はい。できるだけ明瞭な表現にしました。",
                reading: "はい。できるだけめいりょうなひょうげんにしました。",
                english: "Yes. I used clear expressions as much as possible.",
                vietnamese: "Vâng. Tôi đã dùng cách diễn đạt rõ ràng nhất có thể."
            },
            {
                id: 7,
                speaker: "A",
                japanese: "ユースケースも更新されていますか。",
                reading: "ユースケースもこうしんされていますか。",
                english: "Have the use cases been updated?",
                vietnamese: "Các use case cũng đã được cập nhật chứ?"
            },
            {
                id: 8,
                speaker: "B",
                japanese: "はい。一般ユーザ向けのケースも追加しました。",
                reading: "はい。いっぱんユーザむけのケースもついかしました。",
                english: "Yes. I added use cases for general users.",
                vietnamese: "Vâng. Tôi đã bổ sung use case cho người dùng thông thường."
            },
            {
                id: 9,
                speaker: "A",
                japanese: "それならお客様へ提出できますね。",
                reading: "それならおきゃくさまへていしゅつできますね。",
                english: "Then we can submit it to the customer.",
                vietnamese: "Vậy thì có thể gửi cho khách hàng được rồi."
            },
            {
                id: 10,
                speaker: "B",
                japanese: "承知しました。",
                reading: "しょうちしました。",
                english: "Understood.",
                vietnamese: "Đã rõ."
            }
        ]
    },

    {
        id: "it_req_kaiwa_002",
        level: "IT",
        lesson: "要件定義",
        title: "ユーザ管理機能",
        description: "Discussing user management requirements.",
        lines: [
            {
                id: 1,
                speaker: "A",
                japanese: "ユーザ管理機能について確認しましょう。",
                reading: "ユーザかんりきのうについてかくにんしましょう。",
                english: "Let's review the user management function.",
                vietnamese: "Hãy xác nhận chức năng quản lý người dùng."
            },
            {
                id: 2,
                speaker: "B",
                japanese: "まずユーザ新規登録機能があります。",
                reading: "まずユーザしんきとうろくきのうがあります。",
                english: "First, there is a user registration function.",
                vietnamese: "Trước tiên sẽ có chức năng đăng ký người dùng mới."
            },
            {
                id: 3,
                speaker: "A",
                japanese: "ユーザ検索機能も必要ですね。",
                reading: "ユーザけんさくきのうもひつようですね。",
                english: "We also need a user search function.",
                vietnamese: "Chúng ta cũng cần chức năng tìm kiếm người dùng."
            },
            {
                id: 4,
                speaker: "B",
                japanese: "キーワード検索で対応する予定です。",
                reading: "キーワードけんさくでたいおうするよていです。",
                english: "We plan to support it with keyword searching.",
                vietnamese: "Chúng tôi dự định hỗ trợ bằng tìm kiếm từ khóa."
            },
            {
                id: 5,
                speaker: "A",
                japanese: "ユーザ情報更新はできますか。",
                reading: "ユーザじょうほうこうしんはできますか。",
                english: "Can user information be updated?",
                vietnamese: "Có thể cập nhật thông tin người dùng không?"
            },
            {
                id: 6,
                speaker: "B",
                japanese: "はい。登録情報の更新が可能です。",
                reading: "はい。とうろくじょうほうのこうしんがかのうです。",
                english: "Yes. Registered information can be updated.",
                vietnamese: "Vâng. Có thể cập nhật thông tin đã đăng ký."
            },
            {
                id: 7,
                speaker: "A",
                japanese: "操作権限はどう管理しますか。",
                reading: "そうさけんげんはどうかんりしますか。",
                english: "How will operation permissions be managed?",
                vietnamese: "Quyền thao tác sẽ được quản lý thế nào?"
            },
            {
                id: 8,
                speaker: "B",
                japanese: "システム管理者だけが付与できます。",
                reading: "システムかんりしゃだけがふよできます。",
                english: "Only system administrators can grant permissions.",
                vietnamese: "Chỉ quản trị hệ thống mới có thể cấp quyền."
            },
            {
                id: 9,
                speaker: "A",
                japanese: "無効化機能も必要ですね。",
                reading: "むこうかきのうもひつようですね。",
                english: "A deactivation function is also necessary.",
                vietnamese: "Chức năng vô hiệu hóa cũng cần thiết."
            },
            {
                id: 10,
                speaker: "B",
                japanese: "はい。有効・無効を切り替えられます。",
                reading: "はい。ゆうこう・むこうをきりかえられます。",
                english: "Yes. Users can be enabled or disabled.",
                vietnamese: "Vâng. Có thể chuyển đổi giữa hiệu lực và vô hiệu."
            }
        ]
    },

    {
        id: "it_req_kaiwa_003",
        level: "IT",
        lesson: "要件定義",
        title: "会計システムの要件",
        description: "Discussing accounting system requirements.",
        lines: [
            {
                id: 1,
                speaker: "A",
                japanese: "会計システムの要件を整理しましょう。",
                reading: "かいけいシステムのようけんをせいりしましょう。",
                english: "Let's organize the accounting system requirements.",
                vietnamese: "Hãy sắp xếp các yêu cầu của hệ thống kế toán."
            },
            {
                id: 2,
                speaker: "B",
                japanese: "まず銀行口座との連携が必要です。",
                reading: "まずぎんこうこうざとのれんけいがひつようです。",
                english: "First, integration with bank accounts is necessary.",
                vietnamese: "Trước tiên cần liên kết với tài khoản ngân hàng."
            },
            {
                id: 3,
                speaker: "A",
                japanese: "インターネットバンキングに対応しますか。",
                reading: "インターネットバンキングにたいおうしますか。",
                english: "Will it support internet banking?",
                vietnamese: "Có hỗ trợ internet banking không?"
            },
            {
                id: 4,
                speaker: "B",
                japanese: "はい。取引データを自動取り込みします。",
                reading: "はい。とりひきデータをじどうとりこみします。",
                english: "Yes. Transaction data will be imported automatically.",
                vietnamese: "Vâng. Dữ liệu giao dịch sẽ được import tự động."
            },
            {
                id: 5,
                speaker: "A",
                japanese: "レシートの処理はどうしますか。",
                reading: "レシートのしょりはどうしますか。",
                english: "How will receipts be handled?",
                vietnamese: "Việc xử lý hóa đơn sẽ thế nào?"
            },
            {
                id: 6,
                speaker: "B",
                japanese: "スマホで撮影して登録します。",
                reading: "スマホでさつえいしてとうろくします。",
                english: "They will be photographed by smartphone and registered.",
                vietnamese: "Sẽ được chụp bằng điện thoại rồi đăng ký vào hệ thống."
            },
            {
                id: 7,
                speaker: "A",
                japanese: "自動化仕訳は可能ですか。",
                reading: "じどうかしわけはかのうですか。",
                english: "Is automatic journal entry possible?",
                vietnamese: "Có thể tự động hạch toán không?"
            },
            {
                id: 8,
                speaker: "B",
                japanese: "はい。取引内容から自動で仕訳します。",
                reading: "はい。とりひきないようからじどうでしわけします。",
                english: "Yes. Journal entries are generated automatically from transactions.",
                vietnamese: "Vâng. Hạch toán sẽ được tạo tự động từ nội dung giao dịch."
            },
            {
                id: 9,
                speaker: "A",
                japanese: "手入力を減らせそうですね。",
                reading: "てにゅうりょくをへらせそうですね。",
                english: "It seems we can reduce manual input.",
                vietnamese: "Có vẻ chúng ta có thể giảm nhập liệu thủ công."
            },
            {
                id: 10,
                speaker: "B",
                japanese: "それが大きなメリットです。",
                reading: "それがおおきなメリットです。",
                english: "That is a major benefit.",
                vietnamese: "Đó là lợi ích lớn nhất."
            }
        ]
    },

    {
        id: "it_req_kaiwa_004",
        level: "IT",
        lesson: "要件定義",
        title: "セキュリティ対策",
        description: "Discussing information security requirements.",
        lines: [
            {
                id: 1,
                speaker: "A",
                japanese: "情報セキュリティについて話しましょう。",
                reading: "じょうほうセキュリティについてはなしましょう。",
                english: "Let's talk about information security.",
                vietnamese: "Hãy trao đổi về bảo mật thông tin."
            },
            {
                id: 2,
                speaker: "B",
                japanese: "セキュリティ対策を徹底する必要があります。",
                reading: "セキュリティたいさくをてっていするひつようがあります。",
                english: "We need to thoroughly implement security measures.",
                vietnamese: "Chúng ta cần thực hiện triệt để các biện pháp bảo mật."
            },
            {
                id: 3,
                speaker: "A",
                japanese: "どのような対策を考えていますか。",
                reading: "どのようなたいさくをかんがえていますか。",
                english: "What kind of measures are you considering?",
                vietnamese: "Bạn đang cân nhắc những biện pháp nào?"
            },
            {
                id: 4,
                speaker: "B",
                japanese: "まず操作権限の管理を強化します。",
                reading: "まずそうさけんげんのかんりをきょうかします。",
                english: "First, we will strengthen permission management.",
                vietnamese: "Trước tiên sẽ tăng cường quản lý quyền thao tác."
            },
            {
                id: 5,
                speaker: "A",
                japanese: "ログファイルも保存しますか。",
                reading: "ログファイルもほぞんしますか。",
                english: "Will log files also be stored?",
                vietnamese: "Có lưu lại file log không?"
            },
            {
                id: 6,
                speaker: "B",
                japanese: "はい。全操作履歴を記録します。",
                reading: "はい。ぜんそうさりれきをきろくします。",
                english: "Yes. All operation histories will be recorded.",
                vietnamese: "Vâng. Toàn bộ lịch sử thao tác sẽ được ghi lại."
            },
            {
                id: 7,
                speaker: "A",
                japanese: "不正アクセス対策はどうですか。",
                reading: "ふせいアクセスたいさくはどうですか。",
                english: "How about unauthorized access prevention?",
                vietnamese: "Về phòng chống truy cập trái phép thì sao?"
            },
            {
                id: 8,
                speaker: "B",
                japanese: "多要素認証を導入する予定です。",
                reading: "たようそにんしょうをどうにゅうするよていです。",
                english: "We plan to introduce multi-factor authentication.",
                vietnamese: "Chúng tôi dự định triển khai xác thực đa yếu tố."
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
                japanese: "はい。標準対策として適用します。",
                reading: "はい。ひょうじゅんたいさくとしててきようします。",
                english: "Yes. We will apply it as a standard measure.",
                vietnamese: "Vâng. Chúng tôi sẽ áp dụng như một đối sách tiêu chuẩn."
            }
        ]
    },

    {
        id: "it_req_kaiwa_005",
        level: "IT",
        lesson: "要件定義",
        title: "将来を見据えた設計",
        description: "Future-oriented system design discussion.",
        lines: [
            {
                id: 1,
                speaker: "A",
                japanese: "今回のシステムは将来も見据えた設計が必要ですね。",
                reading: "こんかいのシステムはしょうらいもみすえたせっけいがひつようですね。",
                english: "This system needs a future-oriented design.",
                vietnamese: "Hệ thống lần này cần được thiết kế hướng đến tương lai."
            },
            {
                id: 2,
                speaker: "B",
                japanese: "はい。本格的に取り組みたいと思います。",
                reading: "はい。ほんかくてきにとりくみたいとおもいます。",
                english: "Yes. We would like to tackle it seriously.",
                vietnamese: "Vâng. Chúng tôi muốn thực hiện một cách nghiêm túc."
            },
            {
                id: 3,
                speaker: "A",
                japanese: "既存機能の流用は可能ですか。",
                reading: "きそんきのうのりゅうようはかのうですか。",
                english: "Can we reuse existing functions?",
                vietnamese: "Có thể tái sử dụng các chức năng hiện có không?"
            },
            {
                id: 4,
                speaker: "B",
                japanese: "はい。一部は再利用できます。",
                reading: "はい。いちぶはさいりようできます。",
                english: "Yes. Some parts can be reused.",
                vietnamese: "Có. Một phần có thể tái sử dụng."
            },
            {
                id: 5,
                speaker: "A",
                japanese: "それで開発コストも削減できますね。",
                reading: "それでかいはつコストもさくげんできますね。",
                english: "That will reduce development costs as well.",
                vietnamese: "Như vậy cũng có thể giảm chi phí phát triển."
            },
            {
                id: 6,
                speaker: "B",
                japanese: "はい。保守性も向上すると思います。",
                reading: "はい。ほしゅせいもこうじょうするとおもいます。",
                english: "Yes. I think maintainability will also improve.",
                vietnamese: "Vâng. Tôi nghĩ khả năng bảo trì cũng sẽ được cải thiện."
            },
            {
                id: 7,
                speaker: "A",
                japanese: "入力と出力の仕様は統一されていますか。",
                reading: "にゅうりょくとしゅつりょくのしようはとういつされていますか。",
                english: "Are the input and output specifications standardized?",
                vietnamese: "Đặc tả đầu vào và đầu ra đã được thống nhất chưa?"
            },
            {
                id: 8,
                speaker: "B",
                japanese: "はい。共通ルールを作成しました。",
                reading: "はい。きょうつうルールをさくせいしました。",
                english: "Yes. We created common rules.",
                vietnamese: "Vâng. Chúng tôi đã tạo quy tắc chung."
            },
            {
                id: 9,
                speaker: "A",
                japanese: "それなら長期的にも運用しやすいですね。",
                reading: "それならちょうきてきにもうんようしやすいですね。",
                english: "Then it will be easy to operate in the long term.",
                vietnamese: "Như vậy sẽ dễ vận hành về lâu dài."
            },
            {
                id: 10,
                speaker: "B",
                japanese: "はい、その方針で進めます。",
                reading: "はい、そのほうしんですすめます。",
                english: "Yes, we will proceed with that policy.",
                vietnamese: "Vâng, chúng tôi sẽ tiến hành theo phương châm đó."
            }
        ]
    }
];