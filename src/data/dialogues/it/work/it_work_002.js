export default [
  {
    id: "it_work_001",
    level: "IT",
    lesson: "Work",
    title: "あやふやな要件の確認",
    description:
      "あやふやな要件を確認し、実装方針とスケジュールを決める会話です。",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese:
          "先ほど顧客から新しい検索機能の依頼がありました。",
        reading:
          "さきほどこきゃくからあたらしいけんさくきのうのいらいがありました",
        romaji:
          "Sakihodo kokyaku kara atarashii kensaku kinou no irai ga arimashita.",
        english:
          "We just received a request from the customer for a new search function.",
        vietnamese:
          "Vừa rồi chúng ta đã nhận được yêu cầu từ khách hàng về một chức năng tìm kiếm mới.",
        acceptedAnswers: [
          "先ほど顧客から新しい検索機能の依頼がありました",
          "先ほど顧客から新しい検索機能の依頼がありました。",
          "さきほどこきゃくからあたらしいけんさくきのうのいらいがありました"
        ]
      },
      {
        id: 2,
        speaker: "B",
        japanese:
          "要件を確認しましたが、検索条件が少しあやふやです。",
        reading:
          "ようけんをかくにんしましたが、けんさくじょうけんがすこしあやふやです",
        romaji:
          "Youken o kakunin shimashita ga, kensaku jouken ga sukoshi ayafuya desu.",
        english:
          "I checked the requirements, but the search conditions are still somewhat unclear.",
        vietnamese:
          "Em đã kiểm tra yêu cầu, nhưng điều kiện tìm kiếm vẫn còn hơi mơ hồ.",
        acceptedAnswers: [
          "要件を確認しましたが検索条件が少しあやふやです",
          "要件を確認しましたが、検索条件が少しあやふやです。",
          "ようけんをかくにんしましたがけんさくじょうけんがすこしあやふやです"
        ]
      },
      {
        id: 3,
        speaker: "A",
        japanese:
          "あやふやなまま実装を始めるべきではありませんね。",
        reading:
          "あやふやなままじっそうをはじめるべきではありませんね",
        romaji:
          "Ayafuya na mama jissou o hajimeru beki dewa arimasen ne.",
        english:
          "We should not begin implementation while the requirements remain unclear.",
        vietnamese:
          "Chúng ta không nên bắt đầu triển khai khi yêu cầu vẫn còn mơ hồ.",
        acceptedAnswers: [
          "あやふやなまま実装を始めるべきではありませんね",
          "あやふやなまま実装を始めるべきではありませんね。",
          "あやふやなままじっそうをはじめるべきではありませんね"
        ]
      },
      {
        id: 4,
        speaker: "B",
        japanese:
          "そのとおりです。まず顧客に詳細を確認したほうがいいと思います。",
        reading:
          "そのとおりです。まずこきゃくにしょうさいをかくにんしたほうがいいとおもいます",
        romaji:
          "Sono toori desu. Mazu kokyaku ni shousai o kakunin shita hou ga ii to omoimasu.",
        english:
          "That is correct. I think we should first confirm the details with the customer.",
        vietnamese:
          "Đúng vậy. Em nghĩ trước tiên chúng ta nên xác nhận chi tiết với khách hàng.",
        acceptedAnswers: [
          "そのとおりですまず顧客に詳細を確認したほうがいいと思います",
          "そのとおりです。まず顧客に詳細を確認したほうがいいと思います。",
          "そのとおりですまずこきゃくにしょうさいをかくにんしたほうがいいとおもいます"
        ]
      },
      {
        id: 5,
        speaker: "A",
        japanese:
          "では、確認したい内容を順番に整理してください。",
        reading:
          "では、かくにんしたいないようをじゅんばんにせいりしてください",
        romaji:
          "Dewa, kakunin shitai naiyou o junban ni seiri shite kudasai.",
        english:
          "Please organize the items that need confirmation in order.",
        vietnamese:
          "Vậy hãy sắp xếp theo thứ tự những nội dung cần xác nhận.",
        acceptedAnswers: [
          "では確認したい内容を順番に整理してください",
          "では、確認したい内容を順番に整理してください。",
          "ではかくにんしたいないようをじゅんばんにせいりしてください"
        ]
      },
      {
        id: 6,
        speaker: "B",
        japanese:
          "承知しました。一般ユーザーと管理者で検索権限が異なるか確認します。",
        reading:
          "しょうちしました。いっぱんユーザーとかんりしゃでけんさくけんげんがことなるかかくにんします",
        romaji:
          "Shouchi shimashita. Ippan yuuzaa to kanrisha de kensaku kengen ga kotonaru ka kakunin shimasu.",
        english:
          "Understood. I will confirm whether search permissions differ between general users and administrators.",
        vietnamese:
          "Em hiểu rồi. Em sẽ xác nhận quyền tìm kiếm có khác nhau giữa người dùng thông thường và quản trị viên hay không.",
        acceptedAnswers: [
          "承知しました一般ユーザーと管理者で検索権限が異なるか確認します",
          "承知しました。一般ユーザーと管理者で検索権限が異なるか確認します。",
          "しょうちしましたいっぱんユーザーとかんりしゃでけんさくけんげんがことなるかかくにんします"
        ]
      },
      {
        id: 7,
        speaker: "A",
        japanese:
          "複数の検索条件を指定できるかどうかも確認してください。",
        reading:
          "ふくすうのけんさくじょうけんをしていできるかどうかもかくにんしてください",
        romaji:
          "Fukusuu no kensaku jouken o shitei dekiru ka dou ka mo kakunin shite kudasai.",
        english:
          "Please also confirm whether multiple search conditions can be specified.",
        vietnamese:
          "Hãy xác nhận thêm việc có thể chỉ định nhiều điều kiện tìm kiếm hay không.",
        acceptedAnswers: [
          "複数の検索条件を指定できるかどうかも確認してください",
          "複数の検索条件を指定できるかどうかも確認してください。",
          "ふくすうのけんさくじょうけんをしていできるかどうかもかくにんしてください"
        ]
      },
      {
        id: 8,
        speaker: "B",
        japanese:
          "分かりました。確認結果をもとに解決方法を検討します。",
        reading:
          "わかりました。かくにんけっかをもとにかいけつほうほうをけんとうします",
        romaji:
          "Wakarimashita. Kakunin kekka o moto ni kaiketsu houhou o kentou shimasu.",
        english:
          "Understood. I will consider a solution based on the confirmation results.",
        vietnamese:
          "Em hiểu rồi. Em sẽ xem xét giải pháp dựa trên kết quả xác nhận.",
        acceptedAnswers: [
          "分かりました確認結果をもとに解決方法を検討します",
          "分かりました。確認結果をもとに解決方法を検討します。",
          "わかりましたかくにんけっかをもとにかいけつほうほうをけんとうします"
        ]
      },
      {
        id: 9,
        speaker: "A",
        japanese:
          "期限と開発スケジュールへの影響もまとめて報告してください。",
        reading:
          "きげんとかいはつスケジュールへのえいきょうもまとめてほうこくしてください",
        romaji:
          "Kigen to kaihatsu sukejuuru e no eikyou mo matomete houkoku shite kudasai.",
        english:
          "Please also summarize and report the impact on the deadline and development schedule.",
        vietnamese:
          "Hãy tổng hợp và báo cáo cả ảnh hưởng tới thời hạn và lịch trình phát triển.",
        acceptedAnswers: [
          "期限と開発スケジュールへの影響もまとめて報告してください",
          "期限と開発スケジュールへの影響もまとめて報告してください。",
          "きげんとかいはつスケジュールへのえいきょうもまとめてほうこくしてください"
        ]
      },
      {
        id: 10,
        speaker: "B",
        japanese:
          "はい。顧客への確認後、進捗表を更新して報告します。",
        reading:
          "はい。こきゃくへのかくにんご、しんちょくひょうをこうしんしてほうこくします",
        romaji:
          "Hai. Kokyaku e no kakunin go, shinchokuhyou o koushin shite houkoku shimasu.",
        english:
          "Yes. After confirming with the customer, I will update the progress report and report back.",
        vietnamese:
          "Vâng. Sau khi xác nhận với khách hàng, em sẽ cập nhật bảng tiến độ và báo cáo.",
        acceptedAnswers: [
          "はい顧客への確認後進捗表を更新して報告します",
          "はい。顧客への確認後、進捗表を更新して報告します。",
          "はいこきゃくへのかくにんごしんちょくひょうをこうしんしてほうこくします"
        ]
      }
    ]
  },

  {
    id: "it_work_002",
    level: "IT",
    lesson: "Work",
    title: "データベース接続エラー",
    description:
      "データベースへの接続エラーを調査し、優先順位を決めて対応する会話です。",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese:
          "本番環境でデータベースへの接続エラーが発生しました。",
        reading:
          "ほんばんかんきょうでデータベースへのせつぞくエラーがはっせいしました",
        romaji:
          "Honban kankyou de deetabeesu e no setsuzoku eraa ga hassei shimashita.",
        english:
          "A database connection error occurred in the production environment.",
        vietnamese:
          "Đã xảy ra lỗi kết nối cơ sở dữ liệu trong môi trường production.",
        acceptedAnswers: [
          "本番環境でデータベースへの接続エラーが発生しました",
          "本番環境でデータベースへの接続エラーが発生しました。",
          "ほんばんかんきょうでデータベースへのせつぞくエラーがはっせいしました"
        ]
      },
      {
        id: 2,
        speaker: "B",
        japanese:
          "影響を受けている機能は分かっていますか。",
        reading:
          "えいきょうをうけているきのうはわかっていますか",
        romaji:
          "Eikyou o ukete iru kinou wa wakatte imasu ka.",
        english:
          "Do we know which functions are affected?",
        vietnamese:
          "Chúng ta đã biết những chức năng nào đang bị ảnh hưởng chưa?",
        acceptedAnswers: [
          "影響を受けている機能は分かっていますか",
          "影響を受けている機能は分かっていますか。",
          "えいきょうをうけているきのうはわかっていますか"
        ]
      },
      {
        id: 3,
        speaker: "A",
        japanese:
          "現在、予約システムの検索機能が利用できません。",
        reading:
          "げんざい、よやくシステムのけんさくきのうがりようできません",
        romaji:
          "Genzai, yoyaku shisutemu no kensaku kinou ga riyou dekimasen.",
        english:
          "The search function of the reservation system is currently unavailable.",
        vietnamese:
          "Hiện tại chức năng tìm kiếm của hệ thống đặt chỗ không thể sử dụng.",
        acceptedAnswers: [
          "現在予約システムの検索機能が利用できません",
          "現在、予約システムの検索機能が利用できません。",
          "げんざいよやくシステムのけんさくきのうがりようできません"
        ]
      },
      {
        id: 4,
        speaker: "B",
        japanese:
          "顧客への影響が大きいため、優先順位を上げて対応しましょう。",
        reading:
          "こきゃくへのえいきょうがおおきいため、ゆうせんじゅんいをあげてたいおうしましょう",
        romaji:
          "Kokyaku e no eikyou ga ookii tame, yuusen jun'i o agete taiou shimashou.",
        english:
          "Since the impact on the customer is significant, let us prioritize the issue.",
        vietnamese:
          "Do ảnh hưởng tới khách hàng lớn, chúng ta hãy nâng mức ưu tiên để xử lý.",
        acceptedAnswers: [
          "顧客への影響が大きいため優先順位を上げて対応しましょう",
          "顧客への影響が大きいため、優先順位を上げて対応しましょう。",
          "こきゃくへのえいきょうがおおきいためゆうせんじゅんいをあげてたいおうしましょう"
        ]
      },
      {
        id: 5,
        speaker: "A",
        japanese:
          "承知しました。まず接続履歴とログデータを分析します。",
        reading:
          "しょうちしました。まずせつぞくりれきとログデータをぶんせきします",
        romaji:
          "Shouchi shimashita. Mazu setsuzoku rireki to rogu deeta o bunseki shimasu.",
        english:
          "Understood. I will first analyze the connection history and log data.",
        vietnamese:
          "Em hiểu rồi. Trước tiên em sẽ phân tích lịch sử kết nối và dữ liệu log.",
        acceptedAnswers: [
          "承知しましたまず接続履歴とログデータを分析します",
          "承知しました。まず接続履歴とログデータを分析します。",
          "しょうちしましたまずせつぞくりれきとログデータをぶんせきします"
        ]
      },
      {
        id: 6,
        speaker: "B",
        japanese:
          "小さな警告でも無視しないで確認してください。",
        reading:
          "ちいさなけいこくでもむししないでかくにんしてください",
        romaji:
          "Chiisana keikoku demo mushi shinaide kakunin shite kudasai.",
        english:
          "Please check every warning, even if it appears minor.",
        vietnamese:
          "Hãy kiểm tra tất cả cảnh báo, kể cả những cảnh báo nhỏ.",
        acceptedAnswers: [
          "小さな警告でも無視しないで確認してください",
          "小さな警告でも無視しないで確認してください。",
          "ちいさなけいこくでもむししないでかくにんしてください"
        ]
      },
      {
        id: 7,
        speaker: "A",
        japanese:
          "ログを確認したところ、データベースの権限設定に問題がありました。",
        reading:
          "ログをかくにんしたところ、データベースのけんげんせっていにもんだいがありました",
        romaji:
          "Rogu o kakunin shita tokoro, deetabeesu no kengen settei ni mondai ga arimashita.",
        english:
          "After checking the logs, I found a problem with the database permission settings.",
        vietnamese:
          "Sau khi kiểm tra log, em phát hiện có vấn đề với thiết lập quyền của cơ sở dữ liệu.",
        acceptedAnswers: [
          "ログを確認したところデータベースの権限設定に問題がありました",
          "ログを確認したところ、データベースの権限設定に問題がありました。",
          "ログをかくにんしたところデータベースのけんげんせっていにもんだいがありました"
        ]
      },
      {
        id: 8,
        speaker: "B",
        japanese:
          "管理者権限で設定を更新すればいいですか。",
        reading:
          "かんりしゃけんげんでせっていをこうしんすればいいですか",
        romaji:
          "Kanrisha kengen de settei o koushin sureba ii desu ka.",
        english:
          "Should we update the setting using administrator privileges?",
        vietnamese:
          "Chúng ta chỉ cần cập nhật thiết lập bằng quyền quản trị viên đúng không?",
        acceptedAnswers: [
          "管理者権限で設定を更新すればいいですか",
          "管理者権限で設定を更新すればいいですか。",
          "かんりしゃけんげんでせっていをこうしんすればいいですか"
        ]
      },
      {
        id: 9,
        speaker: "A",
        japanese:
          "はい。更新前に現在の設定をバックアップしてから変更します。",
        reading:
          "はい。こうしんまえにげんざいのせっていをバックアップしてからへんこうします",
        romaji:
          "Hai. Koushin mae ni genzai no settei o bakkuappu shite kara henkou shimasu.",
        english:
          "Yes. I will back up the current settings before making the change.",
        vietnamese:
          "Vâng. Em sẽ sao lưu thiết lập hiện tại trước khi thay đổi.",
        acceptedAnswers: [
          "はい更新前に現在の設定をバックアップしてから変更します",
          "はい。更新前に現在の設定をバックアップしてから変更します。",
          "はいこうしんまえにげんざいのせっていをバックアップしてからへんこうします"
        ]
      },
      {
        id: 10,
        speaker: "B",
        japanese:
          "対応後、接続結果と影響範囲を報告してください。",
        reading:
          "たいおうご、せつぞくけっかとえいきょうはんいをほうこくしてください",
        romaji:
          "Taiou go, setsuzoku kekka to eikyou han'i o houkoku shite kudasai.",
        english:
          "After the fix, please report the connection result and the scope of impact.",
        vietnamese:
          "Sau khi xử lý, hãy báo cáo kết quả kết nối và phạm vi ảnh hưởng.",
        acceptedAnswers: [
          "対応後接続結果と影響範囲を報告してください",
          "対応後、接続結果と影響範囲を報告してください。",
          "たいおうごせつぞくけっかとえいきょうはんいをほうこくしてください"
        ]
      }
    ]
  },

  {
    id: "it_work_003",
    level: "IT",
    lesson: "Work",
    title: "進捗とスケジュールの調整",
    description:
      "開発作業の進捗、締切、優先順位を確認する会話です。",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese:
          "今日の作業状況を報告してもらえますか。",
        reading:
          "きょうのさぎょうじょうきょうをほうこくしてもらえますか",
        romaji:
          "Kyou no sagyou joukyou o houkoku shite moraemasu ka.",
        english:
          "Could you report today's work status?",
        vietnamese:
          "Bạn có thể báo cáo tình trạng công việc hôm nay không?",
        acceptedAnswers: [
          "今日の作業状況を報告してもらえますか",
          "今日の作業状況を報告してもらえますか。",
          "きょうのさぎょうじょうきょうをほうこくしてもらえますか"
        ]
      },
      {
        id: 2,
        speaker: "B",
        japanese:
          "検索モジュールの実装は完了しました。",
        reading:
          "けんさくモジュールのじっそうはかんりょうしました",
        romaji:
          "Kensaku mojuuru no jissou wa kanryou shimashita.",
        english:
          "The implementation of the search module has been completed.",
        vietnamese:
          "Việc triển khai mô đun tìm kiếm đã hoàn thành.",
        acceptedAnswers: [
          "検索モジュールの実装は完了しました",
          "検索モジュールの実装は完了しました。",
          "けんさくモジュールのじっそうはかんりょうしました"
        ]
      },
      {
        id: 3,
        speaker: "A",
        japanese:
          "プロジェクトはもう結合テストの段階に入っていますか。",
        reading:
          "プロジェクトはもうけつごうテストのだんかいにはいっていますか",
        romaji:
          "Purojekuto wa mou ketsugou tesuto no dankai ni haitte imasu ka.",
        english:
          "Has the project already entered the integration testing phase?",
        vietnamese:
          "Dự án đã bước vào giai đoạn kiểm thử tích hợp chưa?",
        acceptedAnswers: [
          "プロジェクトはもう結合テストの段階に入っていますか",
          "プロジェクトはもう結合テストの段階に入っていますか。",
          "プロジェクトはもうけつごうテストのだんかいにはいっていますか"
        ]
      },
      {
        id: 4,
        speaker: "B",
        japanese:
          "いいえ、テスト仕様書の更新がまだ終わっていません。",
        reading:
          "いいえ、テストしようしょのこうしんがまだおわっていません",
        romaji:
          "Iie, tesuto shiyousho no koushin ga mada owatte imasen.",
        english:
          "No. The test specification update has not been completed yet.",
        vietnamese:
          "Chưa. Việc cập nhật tài liệu đặc tả kiểm thử vẫn chưa hoàn thành.",
        acceptedAnswers: [
          "いいえテスト仕様書の更新がまだ終わっていません",
          "いいえ、テスト仕様書の更新がまだ終わっていません。",
          "いいえテストしようしょのこうしんがまだおわっていません"
        ]
      },
      {
        id: 5,
        speaker: "A",
        japanese:
          "締切は明日ですが、スケジュールに問題はありませんか。",
        reading:
          "しめきりはあしたですが、スケジュールにもんだいはありませんか",
        romaji:
          "Shimekiri wa ashita desu ga, sukejuuru ni mondai wa arimasen ka.",
        english:
          "The deadline is tomorrow. Is there any problem with the schedule?",
        vietnamese:
          "Hạn chót là ngày mai. Lịch trình có vấn đề gì không?",
        acceptedAnswers: [
          "締切は明日ですがスケジュールに問題はありませんか",
          "締切は明日ですが、スケジュールに問題はありませんか。",
          "しめきりはあしたですがスケジュールにもんだいはありませんか"
        ]
      },
      {
        id: 6,
        speaker: "B",
        japanese:
          "別の作業もあるため、現在の優先順位を確認したいです。",
        reading:
          "べつのさぎょうもあるため、げんざいのゆうせんじゅんいをかくにんしたいです",
        romaji:
          "Betsu no sagyou mo aru tame, genzai no yuusen jun'i o kakunin shitai desu.",
        english:
          "Since I have other tasks as well, I would like to confirm the current priorities.",
        vietnamese:
          "Do em còn công việc khác, em muốn xác nhận thứ tự ưu tiên hiện tại.",
        acceptedAnswers: [
          "別の作業もあるため現在の優先順位を確認したいです",
          "別の作業もあるため、現在の優先順位を確認したいです。",
          "べつのさぎょうもあるためげんざいのゆうせんじゅんいをかくにんしたいです"
        ]
      },
      {
        id: 7,
        speaker: "A",
        japanese:
          "テスト仕様書の更新を最優先で進めてください。",
        reading:
          "テストしようしょのこうしんをさいゆうせんですすめてください",
        romaji:
          "Tesuto shiyousho no koushin o saiyuusen de susumete kudasai.",
        english:
          "Please give the test specification update the highest priority.",
        vietnamese:
          "Hãy ưu tiên cao nhất cho việc cập nhật tài liệu đặc tả kiểm thử.",
        acceptedAnswers: [
          "テスト仕様書の更新を最優先で進めてください",
          "テスト仕様書の更新を最優先で進めてください。",
          "テストしようしょのこうしんをさいゆうせんですすめてください"
        ]
      },
      {
        id: 8,
        speaker: "B",
        japanese:
          "承知しました。ほかの作業は一時的に止めます。",
        reading:
          "しょうちしました。ほかのさぎょうはいちじてきにとめます",
        romaji:
          "Shouchi shimashita. Hoka no sagyou wa ichijiteki ni tomemasu.",
        english:
          "Understood. I will temporarily stop the other tasks.",
        vietnamese:
          "Em hiểu rồi. Em sẽ tạm dừng các công việc khác.",
        acceptedAnswers: [
          "承知しましたほかの作業は一時的に止めます",
          "承知しました。ほかの作業は一時的に止めます。",
          "しょうちしましたほかのさぎょうはいちじてきにとめます"
        ]
      },
      {
        id: 9,
        speaker: "A",
        japanese:
          "作業が終わったら、進捗表を最新の状態に更新してください。",
        reading:
          "さぎょうがおわったら、しんちょくひょうをさいしんのじょうたいにこうしんしてください",
        romaji:
          "Sagyou ga owattara, shinchokuhyou o saishin no joutai ni koushin shite kudasai.",
        english:
          "After completing the work, please update the progress report to the latest status.",
        vietnamese:
          "Sau khi hoàn thành công việc, hãy cập nhật bảng tiến độ về trạng thái mới nhất.",
        acceptedAnswers: [
          "作業が終わったら進捗表を最新の状態に更新してください",
          "作業が終わったら、進捗表を最新の状態に更新してください。",
          "さぎょうがおわったらしんちょくひょうをさいしんのじょうたいにこうしんしてください"
        ]
      },
      {
        id: 10,
        speaker: "B",
        japanese:
          "分かりました。週明けのレビューに間に合うように進めます。",
        reading:
          "わかりました。しゅうあけのレビューにまにあうようにすすめます",
        romaji:
          "Wakarimashita. Shuuake no rebyuu ni maniau you ni susumemasu.",
        english:
          "Understood. I will proceed so that it is ready for the review at the beginning of next week.",
        vietnamese:
          "Em hiểu rồi. Em sẽ thực hiện để kịp buổi review vào đầu tuần tới.",
        acceptedAnswers: [
          "分かりました週明けのレビューに間に合うように進めます",
          "分かりました。週明けのレビューに間に合うように進めます。",
          "わかりましたしゅうあけのレビューにまにあうようにすすめます"
        ]
      }
    ]
  },

  {
    id: "it_work_004",
    level: "IT",
    lesson: "Work",
    title: "在庫管理システムの不具合",
    description:
      "製造業向け在庫管理システムで、入荷データと在庫数の不一致を調査する会話です。",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese:
          "店舗から在庫数が合わないという報告がありました。",
        reading:
          "てんぽからざいこすうがあわないというほうこくがありました",
        romaji:
          "Tenpo kara zaikosuu ga awanai to iu houkoku ga arimashita.",
        english:
          "A store reported that the inventory quantity does not match.",
        vietnamese:
          "Một cửa hàng đã báo cáo rằng số lượng tồn kho không khớp.",
        acceptedAnswers: [
          "店舗から在庫数が合わないという報告がありました",
          "店舗から在庫数が合わないという報告がありました。",
          "てんぽからざいこすうがあわないというほうこくがありました"
        ]
      },
      {
        id: 2,
        speaker: "B",
        japanese:
          "入荷データは正常に更新されていますか。",
        reading:
          "にゅうかデータはせいじょうにこうしんされていますか",
        romaji:
          "Nyuuka deeta wa seijou ni koushin sarete imasu ka.",
        english:
          "Has the incoming stock data been updated correctly?",
        vietnamese:
          "Dữ liệu nhập hàng đã được cập nhật chính xác chưa?",
        acceptedAnswers: [
          "入荷データは正常に更新されていますか",
          "入荷データは正常に更新されていますか。",
          "にゅうかデータはせいじょうにこうしんされていますか"
        ]
      },
      {
        id: 3,
        speaker: "A",
        japanese:
          "入荷履歴には記録されていますが、在庫には反映されていません。",
        reading:
          "にゅうかりれきにはきろくされていますが、ざいこにははんえいされていません",
        romaji:
          "Nyuuka rireki ni wa kiroku sarete imasu ga, zaiko ni wa han'ei sarete imasen.",
        english:
          "The receipt is recorded in the history, but it is not reflected in the inventory.",
        vietnamese:
          "Dữ liệu đã được ghi trong lịch sử nhập hàng nhưng chưa được phản ánh vào tồn kho.",
        acceptedAnswers: [
          "入荷履歴には記録されていますが在庫には反映されていません",
          "入荷履歴には記録されていますが、在庫には反映されていません。",
          "にゅうかりれきにはきろくされていますがざいこにははんえいされていません"
        ]
      },
      {
        id: 4,
        speaker: "B",
        japanese:
          "仕入データと伝票の内容も確認してください。",
        reading:
          "しいれデータとでんぴょうのないようもかくにんしてください",
        romaji:
          "Shiire deeta to denpyou no naiyou mo kakunin shite kudasai.",
        english:
          "Please also check the purchasing data and the transaction slip details.",
        vietnamese:
          "Hãy kiểm tra cả dữ liệu thu mua và nội dung chứng từ.",
        acceptedAnswers: [
          "仕入データと伝票の内容も確認してください",
          "仕入データと伝票の内容も確認してください。",
          "しいれデータとでんぴょうのないようもかくにんしてください"
        ]
      },
      {
        id: 5,
        speaker: "A",
        japanese:
          "確認したところ、複数の伝票が同じ順番で処理されていました。",
        reading:
          "かくにんしたところ、ふくすうのでんぴょうがおなじじゅんばんでしょりされていました",
        romaji:
          "Kakunin shita tokoro, fukusuu no denpyou ga onaji junban de shori sarete imashita.",
        english:
          "After checking, I found that multiple transaction slips were processed in the same sequence.",
        vietnamese:
          "Sau khi kiểm tra, em phát hiện nhiều chứng từ đã được xử lý trong cùng một thứ tự.",
        acceptedAnswers: [
          "確認したところ複数の伝票が同じ順番で処理されていました",
          "確認したところ、複数の伝票が同じ順番で処理されていました。",
          "かくにんしたところふくすうのでんぴょうがおなじじゅんばんでしょりされていました"
        ]
      },
      {
        id: 6,
        speaker: "B",
        japanese:
          "それが在庫更新の失敗につながった可能性がありますね。",
        reading:
          "それがざいここうしんのしっぱいにつながったかのうせいがありますね",
        romaji:
          "Sore ga zaiko koushin no shippai ni tsunagatta kanousei ga arimasu ne.",
        english:
          "That may have caused the inventory update failure.",
        vietnamese:
          "Điều đó có thể đã dẫn tới việc cập nhật tồn kho thất bại.",
        acceptedAnswers: [
          "それが在庫更新の失敗につながった可能性がありますね",
          "それが在庫更新の失敗につながった可能性がありますね。",
          "それがざいここうしんのしっぱいにつながったかのうせいがありますね"
        ]
      },
      {
        id: 7,
        speaker: "A",
        japanese:
          "はい。更新処理のモジュールを修正する必要があります。",
        reading:
          "はい。こうしんしょりのモジュールをしゅうせいするひつようがあります",
        romaji:
          "Hai. Koushin shori no mojuuru o shuusei suru hitsuyou ga arimasu.",
        english:
          "Yes. We need to modify the inventory update module.",
        vietnamese:
          "Vâng. Chúng ta cần sửa mô đun xử lý cập nhật.",
        acceptedAnswers: [
          "はい更新処理のモジュールを修正する必要があります",
          "はい。更新処理のモジュールを修正する必要があります。",
          "はいこうしんしょりのモジュールをしゅうせいするひつようがあります"
        ]
      },
      {
        id: 8,
        speaker: "B",
        japanese:
          "販売データや発注データへの影響も調査してください。",
        reading:
          "はんばいデータやはっちゅうデータへのえいきょうもちょうさしてください",
        romaji:
          "Hanbai deeta ya hacchuu deeta e no eikyou mo chousa shite kudasai.",
        english:
          "Please also investigate the impact on sales and ordering data.",
        vietnamese:
          "Hãy điều tra cả ảnh hưởng tới dữ liệu bán hàng và đặt hàng.",
        acceptedAnswers: [
          "販売データや発注データへの影響も調査してください",
          "販売データや発注データへの影響も調査してください。",
          "はんばいデータやはっちゅうデータへのえいきょうもちょうさしてください"
        ]
      },
      {
        id: 9,
        speaker: "A",
        japanese:
          "承知しました。関連する取引データをすべて分析します。",
        reading:
          "しょうちしました。かんれんするとりひきデータをすべてぶんせきします",
        romaji:
          "Shouchi shimashita. Kanren suru torihiki deeta o subete bunseki shimasu.",
        english:
          "Understood. I will analyze all related transaction data.",
        vietnamese:
          "Em hiểu rồi. Em sẽ phân tích toàn bộ dữ liệu giao dịch liên quan.",
        acceptedAnswers: [
          "承知しました関連する取引データをすべて分析します",
          "承知しました。関連する取引データをすべて分析します。",
          "しょうちしましたかんれんするとりひきデータをすべてぶんせきします"
        ]
      },
      {
        id: 10,
        speaker: "B",
        japanese:
          "原因と解決方法が分かり次第、顧客に報告しましょう。",
        reading:
          "げんいんとかいけつほうほうがわかりしだい、こきゃくにほうこくしましょう",
        romaji:
          "Genin to kaiketsu houhou ga wakari shidai, kokyaku ni houkoku shimashou.",
        english:
          "Let us report to the customer as soon as the cause and solution are identified.",
        vietnamese:
          "Ngay khi xác định được nguyên nhân và giải pháp, chúng ta hãy báo cáo cho khách hàng.",
        acceptedAnswers: [
          "原因と解決方法が分かり次第顧客に報告しましょう",
          "原因と解決方法が分かり次第、顧客に報告しましょう。",
          "げんいんとかいけつほうほうがわかりしだいこきゃくにほうこくしましょう"
        ]
      }
    ]
  },

  {
    id: "it_work_005",
    level: "IT",
    lesson: "Work",
    title: "請求書と支払い処理",
    description:
      "請求書、支払い、経理システムの処理について確認する会話です。",
    lines: [
      {
        id: 1,
        speaker: "A",
        japanese:
          "経理部から請求書の金額が正しくないという連絡がありました。",
        reading:
          "けいりぶからせいきゅうしょのきんがくがただしくないというれんらくがありました",
        romaji:
          "Keiribu kara seikyuusho no kingaku ga tadashikunai to iu renraku ga arimashita.",
        english:
          "The accounting department reported that an invoice amount is incorrect.",
        vietnamese:
          "Bộ phận kế toán thông báo rằng số tiền trên hóa đơn không chính xác.",
        acceptedAnswers: [
          "経理部から請求書の金額が正しくないという連絡がありました",
          "経理部から請求書の金額が正しくないという連絡がありました。",
          "けいりぶからせいきゅうしょのきんがくがただしくないというれんらくがありました"
        ]
      },
      {
        id: 2,
        speaker: "B",
        japanese:
          "請求データと取引履歴を確認します。",
        reading:
          "せいきゅうデータととりひきりれきをかくにんします",
        romaji:
          "Seikyuu deeta to torihiki rireki o kakunin shimasu.",
        english:
          "I will check the billing data and transaction history.",
        vietnamese:
          "Em sẽ kiểm tra dữ liệu yêu cầu thanh toán và lịch sử giao dịch.",
        acceptedAnswers: [
          "請求データと取引履歴を確認します",
          "請求データと取引履歴を確認します。",
          "せいきゅうデータととりひきりれきをかくにんします"
        ]
      },
      {
        id: 3,
        speaker: "A",
        japanese:
          "支払い期限が近いため、優先的に対応してください。",
        reading:
          "しはらいきげんがちかいため、ゆうせんてきにたいおうしてください",
        romaji:
          "Shiharai kigen ga chikai tame, yuusenteki ni taiou shite kudasai.",
        english:
          "Since the payment deadline is approaching, please prioritize the issue.",
        vietnamese:
          "Do hạn thanh toán đang đến gần, hãy ưu tiên xử lý vấn đề này.",
        acceptedAnswers: [
          "支払い期限が近いため優先的に対応してください",
          "支払い期限が近いため、優先的に対応してください。",
          "しはらいきげんがちかいためゆうせんてきにたいおうしてください"
        ]
      },
      {
        id: 4,
        speaker: "B",
        japanese:
          "承知しました。先月の実績データとも比較します。",
        reading:
          "しょうちしました。せんげつのじっせきデータともひかくします",
        romaji:
          "Shouchi shimashita. Sengetsu no jisseki deeta to mo hikaku shimasu.",
        english:
          "Understood. I will also compare it with last month's actual data.",
        vietnamese:
          "Em hiểu rồi. Em sẽ so sánh với dữ liệu thực tế của tháng trước.",
        acceptedAnswers: [
          "承知しました先月の実績データとも比較します",
          "承知しました。先月の実績データとも比較します。",
          "しょうちしましたせんげつのじっせきデータともひかくします"
        ]
      },
      {
        id: 5,
        speaker: "B",
        japanese:
          "確認したところ、一部の伝票が請求処理の対象から漏れていました。",
        reading:
          "かくにんしたところ、いちぶのでんぴょうがせいきゅうしょりのたいしょうからもれていました",
        romaji:
          "Kakunin shita tokoro, ichibu no denpyou ga seikyuu shori no taishou kara morete imashita.",
        english:
          "After checking, I found that some transaction slips were omitted from the billing process.",
        vietnamese:
          "Sau khi kiểm tra, em phát hiện một số chứng từ đã bị bỏ sót khỏi quy trình thanh toán.",
        acceptedAnswers: [
          "確認したところ一部の伝票が請求処理の対象から漏れていました",
          "確認したところ、一部の伝票が請求処理の対象から漏れていました。",
          "かくにんしたところいちぶのでんぴょうがせいきゅうしょりのたいしょうからもれていました"
        ]
      },
      {
        id: 6,
        speaker: "A",
        japanese:
          "なぜ処理の対象から漏れたのでしょうか。",
        reading:
          "なぜしょりのたいしょうからもれたのでしょうか",
        romaji:
          "Naze shori no taishou kara moreta no deshou ka.",
        english:
          "Why were they omitted from the processing scope?",
        vietnamese:
          "Tại sao chúng lại bị bỏ sót khỏi phạm vi xử lý?",
        acceptedAnswers: [
          "なぜ処理の対象から漏れたのでしょうか",
          "なぜ処理の対象から漏れたのでしょうか。",
          "なぜしょりのたいしょうからもれたのでしょうか"
        ]
      },
      {
        id: 7,
        speaker: "B",
        japanese:
          "一般ユーザーの権限では、一部の取引を検索できない設定になっていました。",
        reading:
          "いっぱんユーザーのけんげんでは、いちぶのとりひきをけんさくできないせっていになっていました",
        romaji:
          "Ippan yuuzaa no kengen dewa, ichibu no torihiki o kensaku dekinai settei ni natte imashita.",
        english:
          "The system was configured so that general users could not search for some transactions.",
        vietnamese:
          "Hệ thống được thiết lập để người dùng thông thường không thể tìm kiếm một số giao dịch.",
        acceptedAnswers: [
          "一般ユーザーの権限では一部の取引を検索できない設定になっていました",
          "一般ユーザーの権限では、一部の取引を検索できない設定になっていました。",
          "いっぱんユーザーのけんげんではいちぶのとりひきをけんさくできないせっていになっていました"
        ]
      },
      {
        id: 8,
        speaker: "A",
        japanese:
          "では、権限設定を更新して請求データを再作成してください。",
        reading:
          "では、けんげんせっていをこうしんしてせいきゅうデータをさいさくせいしてください",
        romaji:
          "Dewa, kengen settei o koushin shite seikyuu deeta o sai sakusei shite kudasai.",
        english:
          "Then update the permission settings and recreate the billing data.",
        vietnamese:
          "Vậy hãy cập nhật thiết lập quyền và tạo lại dữ liệu thanh toán.",
        acceptedAnswers: [
          "では権限設定を更新して請求データを再作成してください",
          "では、権限設定を更新して請求データを再作成してください。",
          "ではけんげんせっていをこうしんしてせいきゅうデータをさいさくせいしてください"
        ]
      },
      {
        id: 9,
        speaker: "B",
        japanese:
          "修正後、新しい帳票と請求書の金額を確認します。",
        reading:
          "しゅうせいご、あたらしいちょうひょうとせいきゅうしょのきんがくをかくにんします",
        romaji:
          "Shuusei go, atarashii chouhyou to seikyuusho no kingaku o kakunin shimasu.",
        english:
          "After the fix, I will verify the amounts in the new report and invoice.",
        vietnamese:
          "Sau khi sửa, em sẽ xác nhận số tiền trong biểu mẫu và hóa đơn mới.",
        acceptedAnswers: [
          "修正後新しい帳票と請求書の金額を確認します",
          "修正後、新しい帳票と請求書の金額を確認します。",
          "しゅうせいごあたらしいちょうひょうとせいきゅうしょのきんがくをかくにんします"
        ]
      },
      {
        id: 10,
        speaker: "A",
        japanese:
          "問題がなければ、経理部へ結果を報告してください。",
        reading:
          "もんだいがなければ、けいりぶへけっかをほうこくしてください",
        romaji:
          "Mondai ga nakereba, keiribu e kekka o houkoku shite kudasai.",
        english:
          "If there are no problems, please report the results to the accounting department.",
        vietnamese:
          "Nếu không có vấn đề, hãy báo cáo kết quả cho bộ phận kế toán.",
        acceptedAnswers: [
          "問題がなければ経理部へ結果を報告してください",
          "問題がなければ、経理部へ結果を報告してください。",
          "もんだいがなければけいりぶへけっかをほうこくしてください"
        ]
      }
    ]
  }
];