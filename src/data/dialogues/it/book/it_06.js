export default [
    {
        id: "it_design_kaiwa_001",
        level: "IT",
        lesson: "基本設計",
        title: "基本設計レビュー",
        description: "Reviewing the basic design documents.",
        lines: [
            {
                id: 1,
                speaker: "A",
                japanese: "基本設計書のレビューは終わりましたか。",
                reading: "きほんせっけいしょのレビューはおわりましたか。",
                english: "Has the review of the basic design document been completed?",
                vietnamese: "Việc review tài liệu thiết kế cơ sở đã hoàn thành chưa?"
            },
            {
                id: 2,
                speaker: "B",
                japanese: "はい。まず課題を洗い出しました。",
                reading: "はい。まずかだいをあらいだしました。",
                english: "Yes. First, we identified the issues.",
                vietnamese: "Vâng. Trước tiên chúng tôi đã lọc ra các vấn đề."
            },
            {
                id: 3,
                speaker: "A",
                japanese: "インターフェース部分の設計はどうですか。",
                reading: "インターフェースぶぶんのせっけいはどうですか。",
                english: "How is the interface design?",
                vietnamese: "Phần thiết kế giao diện thế nào?"
            },
            {
                id: 4,
                speaker: "B",
                japanese: "共通レイアウトを採用して統一しました。",
                reading: "きょうつうレイアウトをさいようしてとういつしました。",
                english: "We standardized it using a common layout.",
                vietnamese: "Chúng tôi đã chuẩn hóa bằng bố cục chung."
            },
            {
                id: 5,
                speaker: "A",
                japanese: "システム構成図は更新されていますか。",
                reading: "システムこうせいずはこうしんされていますか。",
                english: "Has the system architecture diagram been updated?",
                vietnamese: "Sơ đồ cấu trúc hệ thống đã được cập nhật chưa?"
            },
            {
                id: 6,
                speaker: "B",
                japanese: "はい。ネットワーク構成図も追加しました。",
                reading: "はい。ネットワークこうせいずもついかしました。",
                english: "Yes. We also added the network configuration diagram.",
                vietnamese: "Vâng. Chúng tôi cũng đã bổ sung sơ đồ mạng."
            },
            {
                id: 7,
                speaker: "A",
                japanese: "状態遷移図はありますか。",
                reading: "じょうたいせんいずはありますか。",
                english: "Do we have a state transition diagram?",
                vietnamese: "Chúng ta có sơ đồ chuyển trạng thái không?"
            },
            {
                id: 8,
                speaker: "B",
                japanese: "はい。主要機能の処理フローと一緒に作成しました。",
                reading: "はい。しゅようきのうのしょりフローといっしょにさくせいしました。",
                english: "Yes. We created it together with the processing flow.",
                vietnamese: "Có. Chúng tôi đã tạo cùng với luồng xử lý."
            },
            {
                id: 9,
                speaker: "A",
                japanese: "それならレビュー結果をまとめましょう。",
                reading: "それならレビューけっかをまとめましょう。",
                english: "Then let's summarize the review results.",
                vietnamese: "Vậy hãy tổng hợp kết quả review."
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
        id: "it_design_kaiwa_002",
        level: "IT",
        lesson: "基本設計",
        title: "ログイン画面設計",
        description: "Designing the login screen.",
        lines: [
            {
                id: 1,
                speaker: "A",
                japanese: "ログイン画面の基本設計について確認しましょう。",
                reading: "ログインがめんのきほんせっけいについてかくにんしましょう。",
                english: "Let's review the basic design of the login screen.",
                vietnamese: "Hãy xác nhận thiết kế cơ sở của màn hình đăng nhập."
            },
            {
                id: 2,
                speaker: "B",
                japanese: "ユーザ権限ごとに表示画面を切り替える予定です。",
                reading: "ユーザけんげんごとにひょうじがめんをきりかえるよていです。",
                english: "We plan to switch screens based on user permissions.",
                vietnamese: "Chúng tôi dự định chuyển màn hình theo quyền người dùng."
            },
            {
                id: 3,
                speaker: "A",
                japanese: "ログイン成功後はどこへ遷移しますか。",
                reading: "ログインせいこうごはどこへせんいしますか。",
                english: "Where will users be redirected after login?",
                vietnamese: "Sau khi đăng nhập thành công sẽ chuyển đến đâu?"
            },
            {
                id: 4,
                speaker: "B",
                japanese: "ダッシュボード画面へ遷移します。",
                reading: "ダッシュボードがめんへせんいします。",
                english: "They will be redirected to the dashboard.",
                vietnamese: "Sẽ chuyển sang màn hình dashboard."
            },
            {
                id: 5,
                speaker: "A",
                japanese: "セッションは保持されますか。",
                reading: "セッションはほじされますか。",
                english: "Will the session be maintained?",
                vietnamese: "Session có được duy trì không?"
            },
            {
                id: 6,
                speaker: "B",
                japanese: "はい。ただし一定時間後に破棄します。",
                reading: "はい。ただしいっていじかんごにはきします。",
                english: "Yes, but it will be discarded after a certain time.",
                vietnamese: "Có, nhưng sẽ bị hủy sau một khoảng thời gian nhất định."
            },
            {
                id: 7,
                speaker: "A",
                japanese: "ログアウト機能も必要ですね。",
                reading: "ログアウトきのうもひつようですね。",
                english: "A logout function is also required.",
                vietnamese: "Chức năng đăng xuất cũng cần thiết."
            },
            {
                id: 8,
                speaker: "B",
                japanese: "ヘッダー部分から操作できるようにします。",
                reading: "ヘッダーぶぶんからそうさできるようにします。",
                english: "We will make it accessible from the header.",
                vietnamese: "Chúng tôi sẽ cho phép thao tác từ phần header."
            },
            {
                id: 9,
                speaker: "A",
                japanese: "エラーメッセージも定義してください。",
                reading: "エラーメッセージもていぎしてください。",
                english: "Please define the error messages too.",
                vietnamese: "Vui lòng định nghĩa cả các thông báo lỗi."
            },
            {
                id: 10,
                speaker: "B",
                japanese: "了解しました。",
                reading: "りょうかいしました。",
                english: "Understood.",
                vietnamese: "Đã hiểu."
            }
        ]
    },

    {
        id: "it_design_kaiwa_003",
        level: "IT",
        lesson: "基本設計",
        title: "データベース設計",
        description: "Discussing database design.",
        lines: [
            {
                id: 1,
                speaker: "A",
                japanese: "データベース設計について相談したいです。",
                reading: "データベースせっけいについてそうだんしたいです。",
                english: "I'd like to discuss the database design.",
                vietnamese: "Tôi muốn trao đổi về thiết kế cơ sở dữ liệu."
            },
            {
                id: 2,
                speaker: "B",
                japanese: "データモデルは完成していますか。",
                reading: "データモデルはかんせいしていますか。",
                english: "Has the data model been completed?",
                vietnamese: "Data model đã hoàn thành chưa?"
            },
            {
                id: 3,
                speaker: "A",
                japanese: "ほぼ完成していますが、関連付ける部分を調整中です。",
                reading: "ほぼかんせいしていますが、かんれんづけるぶぶんをちょうせいちゅうです。",
                english: "It's almost complete, but we're adjusting some relationships.",
                vietnamese: "Gần hoàn thành, nhưng vẫn đang điều chỉnh một số mối liên kết."
            },
            {
                id: 4,
                speaker: "B",
                japanese: "項目名とタイプは決まりましたか。",
                reading: "こうもくめいとタイプはきまりましたか。",
                english: "Have the item names and types been decided?",
                vietnamese: "Tên trường và kiểu dữ liệu đã được quyết định chưa?"
            },
            {
                id: 5,
                speaker: "A",
                japanese: "はい。必須項目も整理しました。",
                reading: "はい。ひっすこうもくもせいりしました。",
                english: "Yes. We also identified the mandatory items.",
                vietnamese: "Vâng. Chúng tôi cũng đã xác định các trường bắt buộc."
            },
            {
                id: 6,
                speaker: "B",
                japanese: "デフォルト値は設定しますか。",
                reading: "デフォルトちはせっていしますか。",
                english: "Will default values be configured?",
                vietnamese: "Có thiết lập giá trị mặc định không?"
            },
            {
                id: 7,
                speaker: "A",
                japanese: "はい。空白を防ぐために必要です。",
                reading: "はい。くうはくをふせぐためにひつようです。",
                english: "Yes. It is necessary to prevent blank values.",
                vietnamese: "Có. Điều đó cần thiết để tránh dữ liệu trống."
            },
            {
                id: 8,
                speaker: "B",
                japanese: "トリガーも利用しますか。",
                reading: "トリガーもりようしますか。",
                english: "Will triggers also be used?",
                vietnamese: "Có sử dụng trigger không?"
            },
            {
                id: 9,
                speaker: "A",
                japanese: "監査ログ用に利用する予定です。",
                reading: "かんさログようにりようするよていです。",
                english: "We plan to use them for audit logs.",
                vietnamese: "Chúng tôi dự định dùng cho audit log."
            },
            {
                id: 10,
                speaker: "B",
                japanese: "了解しました。",
                reading: "りょうかいしました。",
                english: "Understood.",
                vietnamese: "Đã hiểu."
            }
        ]
    },

    {
        id: "it_design_kaiwa_004",
        level: "IT",
        lesson: "基本設計",
        title: "会議室予約システム",
        description: "Designing a meeting room reservation system.",
        lines: [
            {
                id: 1,
                speaker: "A",
                japanese: "会議室予約システムの設計を確認しましょう。",
                reading: "かいぎしつよやくシステムのせっけいをかくにんしましょう。",
                english: "Let's review the design of the meeting room reservation system.",
                vietnamese: "Hãy xem xét thiết kế hệ thống đặt phòng họp."
            },
            {
                id: 2,
                speaker: "B",
                japanese: "予約希望者はログイン後に申請できます。",
                reading: "よやくきぼうしゃはログインごにしんせいできます。",
                english: "Users can make reservations after logging in.",
                vietnamese: "Người muốn đặt phòng có thể đăng ký sau khi đăng nhập."
            },
            {
                id: 3,
                speaker: "A",
                japanese: "会議室予約システムの画面遷移図はありますか。",
                reading: "かいぎしつよやくシステムのがめんせんいずはありますか。",
                english: "Do we have the screen transition diagram?",
                vietnamese: "Chúng ta có sơ đồ chuyển màn hình không?"
            },
            {
                id: 4,
                speaker: "B",
                japanese: "はい。相談内容まで含めて設計しています。",
                reading: "はい。そうだんないようまでふくめてせっけいしています。",
                english: "Yes. It includes the consultation details as well.",
                vietnamese: "Có. Chúng tôi đã thiết kế cả phần nội dung trao đổi."
            },
            {
                id: 5,
                speaker: "A",
                japanese: "会議室の数は足りますか。",
                reading: "かいぎしつのかずはたりますか。",
                english: "Will the number of meeting rooms be sufficient?",
                vietnamese: "Số lượng phòng họp có đủ không?"
            },
            {
                id: 6,
                speaker: "B",
                japanese: "不足する場合は別の会議室へ切り替えます。",
                reading: "ふそくするばあいはべつのかいぎしつへきりかえます。",
                english: "If there aren't enough rooms, we will switch to another room.",
                vietnamese: "Nếu không đủ phòng, chúng tôi sẽ chuyển sang phòng khác."
            },
            {
                id: 7,
                speaker: "A",
                japanese: "承認の仕組みはありますか。",
                reading: "しょうにんのしくみはありますか。",
                english: "Is there an approval mechanism?",
                vietnamese: "Có cơ chế phê duyệt không?"
            },
            {
                id: 8,
                speaker: "B",
                japanese: "はい。管理者が予約を承認します。",
                reading: "はい。かんりしゃがよやくをしょうにんします。",
                english: "Yes. The administrator approves the reservation.",
                vietnamese: "Có. Quản trị viên sẽ phê duyệt việc đặt phòng."
            },
            {
                id: 9,
                speaker: "A",
                japanese: "利用者に通知されますか。",
                reading: "りようしゃにつうちされますか。",
                english: "Will the users be notified?",
                vietnamese: "Người dùng có được thông báo không?"
            },
            {
                id: 10,
                speaker: "B",
                japanese: "はい、メールで通知します。",
                reading: "はい、メールでつうちします。",
                english: "Yes. Notifications will be sent by email.",
                vietnamese: "Có. Sẽ gửi thông báo qua email."
            }
        ]
    },

    {
        id: "it_design_kaiwa_005",
        level: "IT",
        lesson: "基本設計",
        title: "セキュリティ設計",
        description: "Discussing authentication and security design.",
        lines: [
            {
                id: 1,
                speaker: "A",
                japanese: "セキュリティ設計について確認します。",
                reading: "セキュリティせっけいについてかくにんします。",
                english: "Let's review the security design.",
                vietnamese: "Hãy xác nhận thiết kế bảo mật."
            },
            {
                id: 2,
                speaker: "B",
                japanese: "まずパスワードは暗号化します。",
                reading: "まずパスワードはあんごうかします。",
                english: "First, passwords will be encrypted.",
                vietnamese: "Đầu tiên, mật khẩu sẽ được mã hóa."
            },
            {
                id: 3,
                speaker: "A",
                japanese: "ブラウザとの通信も保護されていますか。",
                reading: "ブラウザとのつうしんもほごされていますか。",
                english: "Is communication with the browser protected?",
                vietnamese: "Việc giao tiếp với trình duyệt có được bảo vệ không?"
            },
            {
                id: 4,
                speaker: "B",
                japanese: "はい。HTTPSを利用します。",
                reading: "はい。エイチティーティーピーエスをりようします。",
                english: "Yes. HTTPS will be used.",
                vietnamese: "Có. Chúng tôi sử dụng HTTPS."
            },
            {
                id: 5,
                speaker: "A",
                japanese: "ログイン失敗時の処理はどうしますか。",
                reading: "ログインしっぱいじのしょりはどうしますか。",
                english: "What will happen when login fails?",
                vietnamese: "Sẽ xử lý thế nào khi đăng nhập thất bại?"
            },
            {
                id: 6,
                speaker: "B",
                japanese: "エラーメッセージを表示します。",
                reading: "エラーメッセージをひょうじします。",
                english: "An error message will be displayed.",
                vietnamese: "Thông báo lỗi sẽ được hiển thị."
            },
            {
                id: 7,
                speaker: "A",
                japanese: "管理者以外は設定変更できませんか。",
                reading: "かんりしゃいがいはせっていへんこうできませんか。",
                english: "Users other than administrators cannot change settings, right?",
                vietnamese: "Ngoài quản trị viên thì không thể thay đổi cài đặt đúng không?"
            },
            {
                id: 8,
                speaker: "B",
                japanese: "はい。権限ごとに出し分けます。",
                reading: "はい。けんげんごとにだしわけます。",
                english: "Yes. Permissions determine what is displayed.",
                vietnamese: "Đúng vậy. Chúng tôi sẽ phân chia theo quyền hạn."
            },
            {
                id: 9,
                speaker: "A",
                japanese: "その設計なら安心ですね。",
                reading: "そのせっけいならあんしんですね。",
                english: "That design sounds reliable.",
                vietnamese: "Với thiết kế đó thì rất yên tâm."
            },
            {
                id: 10,
                speaker: "B",
                japanese: "引き続き検証を進めます。",
                reading: "ひきつづきけんしょうをすすめます。",
                english: "We will continue the verification.",
                vietnamese: "Chúng tôi sẽ tiếp tục kiểm chứng."
            }
        ]
    }
];