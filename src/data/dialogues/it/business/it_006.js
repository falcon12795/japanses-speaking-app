export const IT_006_DIALOGUE = {
    "id": "it-business-006",
    "level": "IT",
    "title": "打ち合わせでの業務確認",
    "lesson": "Business",
    "description": "Confirm về nghiệp vụ trong buổi họp. Minh xác nhận nghiệp vụ của chức năng xử lý xuất hàng với Yamamoto, bao gồm picking list, xuất PDF, nhập hoàn tất xuất hàng, batch, lỗi, cập nhật dữ liệu, phạm vi và schedule.",
    "category": "Business Confirmation / Shipping Process",
    "characters": [
        {
            "key": "A",
            "name": "ミン",
            "displayName": "Minh",
            "role": "Developer"
        },
        {
            "key": "B",
            "name": "山本",
            "displayName": "Yamamoto",
            "role": "Team leader of shipping system project"
        }
    ],
    "lines": [
        {
            "id": 1,
            "speaker": "A",
            "japanese": "山本さん、今少しお時間よろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "Yamamoto-san, do you have a moment now?",
            "vietnamese": "Anh Yamamoto ơi, bây giờ anh có rảnh chút không ạ?",
            "acceptedAnswers": [
                "山本さん今少しお時間よろしいでしょうか",
                "やまもとさんいますこしおじかんよろしいでしょうか"
            ]
        },
        {
            "id": 2,
            "speaker": "A",
            "japanese": "今回の担当業務について、",
            "reading": "",
            "romaji": "",
            "english": "Regarding my assigned work this time,",
            "vietnamese": "Về công việc được giao đợt này,",
            "acceptedAnswers": [
                "今回の担当業務について",
                "こんかいのたんとうぎょうむについて"
            ]
        },
        {
            "id": 3,
            "speaker": "A",
            "japanese": "いくつか確認させていただきたいことがあります。",
            "reading": "",
            "romaji": "",
            "english": "there are several things I would like to confirm.",
            "vietnamese": "em muốn xác nhận lại một vài điểm ạ.",
            "acceptedAnswers": [
                "いくつか確認させていただきたいことがあります",
                "いくつかかくにんさせていただきたいことがあります"
            ]
        },
        {
            "id": 4,
            "speaker": "B",
            "japanese": "はい、大丈夫ですよ。どうしましたか。",
            "reading": "",
            "romaji": "",
            "english": "Yes, that is fine. What is it?",
            "vietnamese": "Ừ, được chứ. Có chuyện gì thế em?",
            "acceptedAnswers": [
                "はい大丈夫ですよどうしましたか",
                "はいだいじょうぶですよどうしましたか"
            ]
        },
        {
            "id": 5,
            "speaker": "A",
            "japanese": "先ほどご説明いただいた出荷処理機能についてなんですが、",
            "reading": "",
            "romaji": "",
            "english": "Regarding the shipment processing function explained earlier,",
            "vietnamese": "Về chức năng xử lý xuất hàng anh vừa giải thích lúc nãy,",
            "acceptedAnswers": [
                "先ほどご説明いただいた出荷処理機能についてなんですが",
                "さきほどごせつめいいただいたしゅっかしょりきのうについてなんですが"
            ]
        },
        {
            "id": 6,
            "speaker": "A",
            "japanese": "自分の理解が正しいか確認させてください。",
            "reading": "",
            "romaji": "",
            "english": "please let me confirm whether my understanding is correct.",
            "vietnamese": "cho em xác nhận lại xem em hiểu đúng chưa nhé.",
            "acceptedAnswers": [
                "自分の理解が正しいか確認させてください",
                "じぶんのりかいがただしいかかくにんさせてください"
            ]
        },
        {
            "id": 7,
            "speaker": "B",
            "japanese": "はい、どうぞ。",
            "reading": "",
            "romaji": "",
            "english": "Yes, go ahead.",
            "vietnamese": "Ừ, em nói đi.",
            "acceptedAnswers": [
                "はいどうぞ"
            ]
        },
        {
            "id": 8,
            "speaker": "A",
            "japanese": "出荷指示データをもとにピッキングリストを作成して、",
            "reading": "",
            "romaji": "",
            "english": "Create a picking list based on shipment instruction data,",
            "vietnamese": "Tạo danh sách picking từ dữ liệu chỉ thị xuất hàng,",
            "acceptedAnswers": [
                "出荷指示データをもとにピッキングリストを作成して",
                "しゅっかしじデータをもとにピッキングリストをさくせいして"
            ]
        },
        {
            "id": 9,
            "speaker": "A",
            "japanese": "その後、出荷完了のデータを入力するという",
            "reading": "",
            "romaji": "",
            "english": "and after that, inputting shipment completion data,",
            "vietnamese": "sau đó nhập dữ liệu hoàn tất xuất hàng,",
            "acceptedAnswers": [
                "その後出荷完了のデータを入力するという",
                "そののちしゅっかかんりょうのデータをにゅうりょくするという",
                "その後しゅっかかんりょうのデータをにゅうりょくするという"
            ]
        },
        {
            "id": 10,
            "speaker": "A",
            "japanese": "流れでよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "is that flow correct?",
            "vietnamese": "luồng xử lý như vậy đúng không ạ?",
            "acceptedAnswers": [
                "流れでよろしいでしょうか",
                "ながれでよろしいでしょうか"
            ]
        },
        {
            "id": 11,
            "speaker": "B",
            "japanese": "はい、その通りです。",
            "reading": "",
            "romaji": "",
            "english": "Yes, that is correct.",
            "vietnamese": "Đúng rồi em.",
            "acceptedAnswers": [
                "はいその通りです",
                "はいそのとおりです"
            ]
        },
        {
            "id": 12,
            "speaker": "A",
            "japanese": "ありがとうございます。全体の流れは理解できました。",
            "reading": "",
            "romaji": "",
            "english": "Thank you. I understood the overall flow.",
            "vietnamese": "Cảm ơn anh. Luồng tổng thể em hiểu rồi ạ.",
            "acceptedAnswers": [
                "ありがとうございます全体の流れは理解できました",
                "ありがとうございますぜんたいのながれはりかいできました"
            ]
        },
        {
            "id": 13,
            "speaker": "A",
            "japanese": "ただ、細かい処理の部分について、",
            "reading": "",
            "romaji": "",
            "english": "However, regarding detailed processing parts,",
            "vietnamese": "Tuy nhiên vế các chi tiết xử lý nhỏ,",
            "acceptedAnswers": [
                "ただ細かい処理の部分について",
                "ただこまかいしょりのぶぶんについて"
            ]
        },
        {
            "id": 14,
            "speaker": "A",
            "japanese": "まだ少しイメージができていません。",
            "reading": "",
            "romaji": "",
            "english": "I still cannot picture it clearly.",
            "vietnamese": "em vẫn chưa hình dung rõ lắm.",
            "acceptedAnswers": [
                "まだ少しイメージができていません",
                "まだすこしイメージができていません"
            ]
        },
        {
            "id": 15,
            "speaker": "A",
            "japanese": "詳細設計書を確認したいのですが、",
            "reading": "",
            "romaji": "",
            "english": "I want to check the detailed design document,",
            "vietnamese": "Em muốn xem tài liệu thiết kế chi tiết,",
            "acceptedAnswers": [
                "詳細設計書を確認したいのですが",
                "しょうさいせっけいしょをかくにんしたいのですが"
            ]
        },
        {
            "id": 16,
            "speaker": "A",
            "japanese": "共有されていますでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "has it been shared?",
            "vietnamese": "không biết đã được chia sẻ chưa ạ?",
            "acceptedAnswers": [
                "共有されていますでしょうか",
                "きょうゆうされていますでしょうか"
            ]
        },
        {
            "id": 17,
            "speaker": "B",
            "japanese": "はい、共有フォルダにありますので、",
            "reading": "",
            "romaji": "",
            "english": "Yes, it is in the shared folder,",
            "vietnamese": "Có trong thư mục dùng chung rồi,",
            "acceptedAnswers": [
                "はい共有フォルダにありますので",
                "はいきょうゆうフォルダにありますので"
            ]
        },
        {
            "id": 18,
            "speaker": "B",
            "japanese": "後で確認してください。",
            "reading": "",
            "romaji": "",
            "english": "so please check it later.",
            "vietnamese": "lát nữa em vào xem nhé.",
            "acceptedAnswers": [
                "後で確認してください",
                "あとでかくにんしてください"
            ]
        },
        {
            "id": 19,
            "speaker": "A",
            "japanese": "承知しました。では、一度資料を確認してみます。",
            "reading": "",
            "romaji": "",
            "english": "Understood. Then I will check the materials first.",
            "vietnamese": "Vâng ạ. Thế em xem thử tài liệu trước nhé.",
            "acceptedAnswers": [
                "承知しましたでは一度資料を確認してみます",
                "しょうちしましたではいちどしりょうをかくにんしてみます",
                "承知しましたでは1度資料を確認してみます"
            ]
        },
        {
            "id": 20,
            "speaker": "A",
            "japanese": "山本さん、先ほど資料を確認したのですが、",
            "reading": "",
            "romaji": "",
            "english": "Yamamoto-san, I checked the materials earlier,",
            "vietnamese": "Anh Yamamoto ơi, em vừa xem tài liệu xong,",
            "acceptedAnswers": [
                "山本さん先ほど資料を確認したのですが",
                "やまもとさんさきほどしりょうをかくにんしたのですが"
            ]
        },
        {
            "id": 21,
            "speaker": "A",
            "japanese": "いくつか分からない点があったので、",
            "reading": "",
            "romaji": "",
            "english": "there were some unclear points,",
            "vietnamese": "nhưng có vài điểm chưa rõ,",
            "acceptedAnswers": [
                "いくつか分からない点があったので",
                "いくつかわからないてんがあったので"
            ]
        },
        {
            "id": 22,
            "speaker": "A",
            "japanese": "確認させていただいてもよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "may I confirm them with you?",
            "vietnamese": "cho em hỏi lại chút được không ạ?",
            "acceptedAnswers": [
                "確認させていただいてもよろしいでしょうか",
                "かくにんさせていただいてもよろしいでしょうか"
            ]
        },
        {
            "id": 23,
            "speaker": "B",
            "japanese": "はい、大丈夫ですよ。どうぞ。",
            "reading": "",
            "romaji": "",
            "english": "Yes, that is fine. Go ahead.",
            "vietnamese": "Ừ, thoải mái. Em hỏi đi.",
            "acceptedAnswers": [
                "はい大丈夫ですよどうぞ",
                "はいだいじょうぶですよどうぞ"
            ]
        },
        {
            "id": 24,
            "speaker": "A",
            "japanese": "まず、ピッキングリストについてなんですが、",
            "reading": "",
            "romaji": "",
            "english": "First, regarding the picking list,",
            "vietnamese": "Trước hết, về danh sách picking,",
            "acceptedAnswers": [
                "まずピッキングリストについてなんですが"
            ]
        },
        {
            "id": 25,
            "speaker": "A",
            "japanese": "画面表示だけでしょうか、",
            "reading": "",
            "romaji": "",
            "english": "is it screen display only,",
            "vietnamese": "mình chỉ hiển thị màn hình,",
            "acceptedAnswers": [
                "画面表示だけでしょうか",
                "がめんひょうじだけでしょうか"
            ]
        },
        {
            "id": 26,
            "speaker": "A",
            "japanese": "それとも印刷も必要でしょうか。",
            "reading": "",
            "romaji": "",
            "english": "or is printing also required?",
            "vietnamese": "hay cần in ra nữa ạ?",
            "acceptedAnswers": [
                "それとも印刷も必要でしょうか",
                "それともいんさつもひつようでしょうか"
            ]
        },
        {
            "id": 27,
            "speaker": "B",
            "japanese": "画面表示とPDF出力の両方が必要です。",
            "reading": "",
            "romaji": "",
            "english": "Both screen display and PDF output are required.",
            "vietnamese": "Cần cả hiển thị màn hình và xuất PDF.",
            "acceptedAnswers": [
                "画面表示とPDF出力の両方が必要です",
                "がめんひょうじとPDFしゅつりょくのりょうほうがひつようです"
            ]
        },
        {
            "id": 28,
            "speaker": "A",
            "japanese": "はい、分かりました。",
            "reading": "",
            "romaji": "",
            "english": "Yes, understood.",
            "vietnamese": "Dạ, em hiểu rồi.",
            "acceptedAnswers": [
                "はい分かりました",
                "はいわかりました"
            ]
        },
        {
            "id": 29,
            "speaker": "A",
            "japanese": "あと、出荷完了の入力についてなんですが、",
            "reading": "",
            "romaji": "",
            "english": "Also, regarding shipment completion input,",
            "vietnamese": "Còn về nhập hoàn tất xuất hàng,",
            "acceptedAnswers": [
                "あと出荷完了の入力についてなんですが",
                "あとしゅっかかんりょうのにゅうりょくについてなんですが"
            ]
        },
        {
            "id": 30,
            "speaker": "A",
            "japanese": "こちらはすべて自動処理になりますか。",
            "reading": "",
            "romaji": "",
            "english": "will all of this be automatic processing?",
            "vietnamese": "phần này có tự động toàn bộ không ạ?",
            "acceptedAnswers": [
                "こちらはすべて自動処理になりますか",
                "こちらはすべてじどうしょりになりますか"
            ]
        },
        {
            "id": 31,
            "speaker": "B",
            "japanese": "いいえ、すべて自動ではありません。",
            "reading": "",
            "romaji": "",
            "english": "No, not everything is automatic.",
            "vietnamese": "Không, không phải tự động tất cả đâu.",
            "acceptedAnswers": [
                "いいえすべて自動ではありません",
                "いいえすべてじどうではありません"
            ]
        },
        {
            "id": 32,
            "speaker": "B",
            "japanese": "基本は手動で入力していただきますが、",
            "reading": "",
            "romaji": "",
            "english": "Basically it will be input manually, but",
            "vietnamese": "Cơ bản vẫn phải nhập tay,",
            "acceptedAnswers": [
                "基本は手動で入力していただきますが",
                "きほんはしゅどうでにゅうりょくしていただきますが"
            ]
        },
        {
            "id": 33,
            "speaker": "B",
            "japanese": "一部のデータについてはバッチ処理で自動的に更新されます。",
            "reading": "",
            "romaji": "",
            "english": "some data will be updated automatically by batch processing.",
            "vietnamese": "nhưng một số dữ liệu sẽ cập nhật tự động bằng batch.",
            "acceptedAnswers": [
                "一部のデータについてはバッチ処理で自動的に更新されます",
                "いちぶのデータについてはバッチしょりでじどうてきにこうしんされます"
            ]
        },
        {
            "id": 34,
            "speaker": "B",
            "japanese": "例えば、夜間にまとめて処理されるデータがありますので、",
            "reading": "",
            "romaji": "",
            "english": "For example, since there is data processed together at night,",
            "vietnamese": "Ví dụ có dữ liệu được xử lý gộp ban đêm,",
            "acceptedAnswers": [
                "例えば夜間にまとめて処理されるデータがありますので",
                "たとえばやかんにまとめてしょりされるデータがありますので"
            ]
        },
        {
            "id": 35,
            "speaker": "B",
            "japanese": "その点も考えて実装してください。",
            "reading": "",
            "romaji": "",
            "english": "please implement considering that point as well.",
            "vietnamese": "nên hãy tính đến điểm đó khi làm nhé.",
            "acceptedAnswers": [
                "その点も考えて実装してください",
                "そのてんもかんがえてじっそうしてください"
            ]
        },
        {
            "id": 36,
            "speaker": "A",
            "japanese": "理解しました。手動入力が中心で、",
            "reading": "",
            "romaji": "",
            "english": "Understood. Manual input is central, and",
            "vietnamese": "Em hiểu rồi. Chủ yếu là nhập tay,",
            "acceptedAnswers": [
                "理解しました手動入力が中心で",
                "りかいしましたしゅどうにゅうりょくがちゅうしんで"
            ]
        },
        {
            "id": 37,
            "speaker": "A",
            "japanese": "一部は自動処理になるということですね。",
            "reading": "",
            "romaji": "",
            "english": "and some parts become automatic processing.",
            "vietnamese": "và một phần là tự động đúng không ạ.",
            "acceptedAnswers": [
                "一部は自動処理になるということですね",
                "いちぶはじどうしょりになるということですね"
            ]
        },
        {
            "id": 38,
            "speaker": "A",
            "japanese": "処理のタイミングにも注意しながら対応します。",
            "reading": "",
            "romaji": "",
            "english": "I will handle it while paying attention to processing timing.",
            "vietnamese": "Em sẽ chú ý thời điểm xử lý khi làm.",
            "acceptedAnswers": [
                "処理のタイミングにも注意しながら対応します",
                "しょりのタイミングにもちゅういしながらたいおうします"
            ]
        },
        {
            "id": 39,
            "speaker": "A",
            "japanese": "それから、エラーが発生した場合についてなんですが、",
            "reading": "",
            "romaji": "",
            "english": "Also, regarding cases where an error occurs,",
            "vietnamese": "Ngoài ra, về trường hợp phát sinh lỗi,",
            "acceptedAnswers": [
                "それからエラーが発生した場合についてなんですが",
                "それからエラーがはっせいしたばあいについてなんですが"
            ]
        },
        {
            "id": 40,
            "speaker": "A",
            "japanese": "エラーが出たら、そのまま処理を止めればよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "if an error appears, should we just stop processing?",
            "vietnamese": "khi có lỗi thì chỉ cần dừng xử lý lại là được phải không ạ?",
            "acceptedAnswers": [
                "エラーが出たらそのまま処理を止めればよろしいでしょうか",
                "エラーがでたらそのまましょりをとめればよろしいでしょうか"
            ]
        },
        {
            "id": 41,
            "speaker": "B",
            "japanese": "いいえ、それだけでは不十分です。",
            "reading": "",
            "romaji": "",
            "english": "No, that alone is not sufficient.",
            "vietnamese": "Không, như thế là chưa đủ.",
            "acceptedAnswers": [
                "いいえそれだけでは不十分です",
                "いいえそれだけではふじゅうぶんです"
            ]
        },
        {
            "id": 42,
            "speaker": "B",
            "japanese": "エラーが発生した場合は、エラーメッセージを表示して、",
            "reading": "",
            "romaji": "",
            "english": "When an error occurs, display an error message,",
            "vietnamese": "Nếu phát sinh lỗi, phải hiện thông báo lỗi,",
            "acceptedAnswers": [
                "エラーが発生した場合はエラーメッセージを表示して",
                "エラーがはっせいしたばあいはエラーメッセージをひょうじして"
            ]
        },
        {
            "id": 43,
            "speaker": "B",
            "japanese": "ユーザーが内容を確認できるようにしてください。",
            "reading": "",
            "romaji": "",
            "english": "so that users can check the details.",
            "vietnamese": "để người dùng có thể kiểm tra nội dung.",
            "acceptedAnswers": [
                "ユーザーが内容を確認できるようにしてください",
                "ユーザーがないようをかくにんできるようにしてください"
            ]
        },
        {
            "id": 44,
            "speaker": "B",
            "japanese": "その上で、修正して再入力できるような",
            "reading": "",
            "romaji": "",
            "english": "On top of that, so they can correct and re-input,",
            "vietnamese": "Sau đó, để họ có thể sửa và nhập lại,",
            "acceptedAnswers": [
                "その上で修正して再入力できるような",
                "そのうえでしゅうせいにしてさいにゅうりょくできるような"
            ]
        },
        {
            "id": 45,
            "speaker": "B",
            "japanese": "画面にする必要があります。",
            "reading": "",
            "romaji": "",
            "english": "the screen needs to support that.",
            "vietnamese": "cần làm giao diện tương ứng.",
            "acceptedAnswers": [
                "画面にする必要があります",
                "がめんにするひつようがあります"
            ]
        },
        {
            "id": 46,
            "speaker": "B",
            "japanese": "また、どこが間違っているか分かりやすい",
            "reading": "",
            "romaji": "",
            "english": "Also, easy to understand where it is wrong",
            "vietnamese": "Ngoài ra, tạo câu thông báo dễ hiểu",
            "acceptedAnswers": [
                "またどこが間違っているか分かりやすい",
                "またどこがまちがっているかわかりやすい"
            ]
        },
        {
            "id": 47,
            "speaker": "B",
            "japanese": "メッセージにすることも重要です。",
            "reading": "",
            "romaji": "",
            "english": "message is also important.",
            "vietnamese": "về chỗ bị sai cũng rất quan trọng.",
            "acceptedAnswers": [
                "メッセージにすることも重要です",
                "メッセージにすることもじゅうようです"
            ]
        },
        {
            "id": 48,
            "speaker": "A",
            "japanese": "はい、理解しました。",
            "reading": "",
            "romaji": "",
            "english": "Yes, I understand.",
            "vietnamese": "Dạ em hiểu rồi.",
            "acceptedAnswers": [
                "はい理解しました",
                "はいりかいしました"
            ]
        },
        {
            "id": 49,
            "speaker": "A",
            "japanese": "ユーザーが原因を把握できるような",
            "reading": "",
            "romaji": "",
            "english": "So that users can grasp the cause,",
            "vietnamese": "Để người dùng nắm được nguyên nhân,",
            "acceptedAnswers": [
                "ユーザーが原因を把握できるような",
                "ユーザーがげんいんをはあくできるような"
            ]
        },
        {
            "id": 50,
            "speaker": "A",
            "japanese": "対応が必要ということですね。",
            "reading": "",
            "romaji": "",
            "english": "handling is required, right?",
            "vietnamese": "mình cần đối ứng như vậy đúng không ạ.",
            "acceptedAnswers": [
                "対応が必要ということですね",
                "たいおうがひつようということですね"
            ]
        },
        {
            "id": 51,
            "speaker": "A",
            "japanese": "修正しやすい画面になるように意識して対応します。",
            "reading": "",
            "romaji": "",
            "english": "I will handle it keeping in mind an easy-to-correct screen.",
            "vietnamese": "Em sẽ chú ý làm màn hình sao cho dễ sửa đổi.",
            "acceptedAnswers": [
                "修正しやすい画面になるように意識して対応します",
                "しゅうせいしやすいがめんになるようにいしきしてたいおうします"
            ]
        },
        {
            "id": 52,
            "speaker": "A",
            "japanese": "もう一点だけよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "May I ask just one more point?",
            "vietnamese": "Cho em hỏi thêm 1 điểm nữa được không ạ?",
            "acceptedAnswers": [
                "もう一点だけよろしいでしょうか",
                "もういってんだけよろしいでしょうか",
                "もう1点だけよろしいでしょうか"
            ]
        },
        {
            "id": 53,
            "speaker": "B",
            "japanese": "はい、どうぞ。",
            "reading": "",
            "romaji": "",
            "english": "Yes, go ahead.",
            "vietnamese": "Ừ, em cứ hỏi.",
            "acceptedAnswers": [
                "はいどうぞ"
            ]
        },
        {
            "id": 54,
            "speaker": "A",
            "japanese": "出荷データの更新タイミングですが、",
            "reading": "",
            "romaji": "",
            "english": "Regarding the shipment data update timing,",
            "vietnamese": "Về thời điểm cập nhật dữ liệu xuất hàng,",
            "acceptedAnswers": [
                "出荷データの更新タイミングですが",
                "しゅっかデータのこうしんタイミングですが"
            ]
        },
        {
            "id": 55,
            "speaker": "A",
            "japanese": "ピッキング完了時にすぐ更新するという認識で",
            "reading": "",
            "romaji": "",
            "english": "updating immediately upon picking completion,",
            "vietnamese": "cập nhật ngay khi hoàn thành picking,",
            "acceptedAnswers": [
                "ピッキング完了時にすぐ更新するという認識で",
                "ピッキングかんりょうじにすぐこうしんするというにんしきで"
            ]
        },
        {
            "id": 56,
            "speaker": "A",
            "japanese": "よろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "is that understanding correct?",
            "vietnamese": "hiểu như vậy có đúng không ạ?",
            "acceptedAnswers": [
                "よろしいでしょうか"
            ]
        },
        {
            "id": 57,
            "speaker": "B",
            "japanese": "いいえ、そのタイミングでは更新しません。",
            "reading": "",
            "romaji": "",
            "english": "No, it is not updated at that timing.",
            "vietnamese": "Không, thời điểm đó không cập nhật.",
            "acceptedAnswers": [
                "いいえそのタイミングでは更新しません",
                "いいえそのタイミングではこうしんしません"
            ]
        },
        {
            "id": 58,
            "speaker": "B",
            "japanese": "ピッキングの段階ではまだ確定していないため、",
            "reading": "",
            "romaji": "",
            "english": "Because it is not yet confirmed at the picking stage,",
            "vietnamese": "Vì ở giai đoạn picking vẫn chưa chốt,",
            "acceptedAnswers": [
                "ピッキングの段階ではまだ確定していないため",
                "ピッキングのだんかいではまだかくていしていないため"
            ]
        },
        {
            "id": 59,
            "speaker": "B",
            "japanese": "データは更新されません。",
            "reading": "",
            "romaji": "",
            "english": "data is not updated.",
            "vietnamese": "nên dữ liệu sẽ không cập nhật.",
            "acceptedAnswers": [
                "データは更新されません",
                "データはこうしんされません"
            ]
        },
        {
            "id": 60,
            "speaker": "B",
            "japanese": "出荷完了の入力が終わったタイミングで、",
            "reading": "",
            "romaji": "",
            "english": "At the timing when shipment completion input finishes,",
            "vietnamese": "Khi hoàn tất nhập xong xuất hàng,",
            "acceptedAnswers": [
                "出荷完了の入力が終わったタイミングで",
                "しゅっかかんりょうのにゅうりょくがおわったタイミングで"
            ]
        },
        {
            "id": 61,
            "speaker": "B",
            "japanese": "正式なデータとして更新されます。",
            "reading": "",
            "romaji": "",
            "english": "it will be updated as official data.",
            "vietnamese": "mới cập nhật thành dữ liệu chính thức.",
            "acceptedAnswers": [
                "正式なデータとして更新されます",
                "せいしきなデータとしてこうしんされます"
            ]
        },
        {
            "id": 62,
            "speaker": "B",
            "japanese": "その流れで実装してください。",
            "reading": "",
            "romaji": "",
            "english": "Please implement following that flow.",
            "vietnamese": "Hãy làm theo luồng đó nhé.",
            "acceptedAnswers": [
                "その流れで実装してください",
                "そのながれでじっそうしてください"
            ]
        },
        {
            "id": 63,
            "speaker": "A",
            "japanese": "承知しました。出荷完了後にデータを更新する",
            "reading": "",
            "romaji": "",
            "english": "Understood. Updating data after shipment completion,",
            "vietnamese": "Dạ em hiểu rồi. Cập nhật dữ liệu sau khi xuất hàng,",
            "acceptedAnswers": [
                "承知しました出荷完了後にデータを更新する",
                "しょうちしましたしゅっかかんりょうごにデータをこうしんする"
            ]
        },
        {
            "id": 64,
            "speaker": "A",
            "japanese": "ということですね。",
            "reading": "",
            "romaji": "",
            "english": "is that right?",
            "vietnamese": "nghĩa là vậy đúng không ạ.",
            "acceptedAnswers": [
                "ということですね"
            ]
        },
        {
            "id": 65,
            "speaker": "A",
            "japanese": "処理の流れを意識しながら実装を進めます。",
            "reading": "",
            "romaji": "",
            "english": "I will proceed with implementation keeping the flow in mind.",
            "vietnamese": "Em sẽ chú ý luồng xử lý trong quá trình code.",
            "acceptedAnswers": [
                "処理の流れを意識しながら実装を進めます",
                "しょりのながれにいしきしながらじっそうをすすめます"
            ]
        },
        {
            "id": 66,
            "speaker": "B",
            "japanese": "ミンさん、今回の担当範囲についてですが、",
            "reading": "",
            "romaji": "",
            "english": "Minh, regarding your assigned scope this time,",
            "vietnamese": "Minh ơi, về phạm vi đảm nhận lần này,",
            "acceptedAnswers": [
                "ミンさん今回の担当範囲についてですが",
                "ミンさんこんかいのたんとうはんいについてですが"
            ]
        },
        {
            "id": 67,
            "speaker": "B",
            "japanese": "ピッキングリストの作成から",
            "reading": "",
            "romaji": "",
            "english": "from creating the picking list,",
            "vietnamese": "từ việc tạo danh sách picking,",
            "acceptedAnswers": [
                "ピッキングリストの作成から",
                "ピッキングリストのさくせいから"
            ]
        },
        {
            "id": 68,
            "speaker": "B",
            "japanese": "出荷完了入力まで対応していただく想定ですが、",
            "reading": "",
            "romaji": "",
            "english": "to shipment completion input, we expect you to handle it,",
            "vietnamese": "đến nhập hoàn tất xuất hàng anh dự định giao cho em,",
            "acceptedAnswers": [
                "出荷完了入力まで対応していただく想定ですが",
                "しゅっかかんりょうにゅうりょくまでたいおうしていただくそうていですが"
            ]
        },
        {
            "id": 69,
            "speaker": "B",
            "japanese": "その認識で問題ないでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "is that understanding fine?",
            "vietnamese": "hiểu như thế có vấn đề gì không?",
            "acceptedAnswers": [
                "その認識で問題ないでしょうか",
                "そのにんしきでもんだいないでしょうか"
            ]
        },
        {
            "id": 70,
            "speaker": "A",
            "japanese": "はい、問題ありません。",
            "reading": "",
            "romaji": "",
            "english": "Yes, no problem.",
            "vietnamese": "Dạ không vấn đề gì ạ.",
            "acceptedAnswers": [
                "はい問題ありません",
                "はいもんだいありません"
            ]
        },
        {
            "id": 71,
            "speaker": "A",
            "japanese": "一連の処理を担当するという理解で",
            "reading": "",
            "romaji": "",
            "english": "With the understanding that I will handle a series of processes,",
            "vietnamese": "Với hiểu biết là phụ trách cả chuỗi xử lý,",
            "acceptedAnswers": [
                "一連の処理を担当するという理解で",
                "いちれんのしょりをたんとうするというりかいで"
            ]
        },
        {
            "id": 72,
            "speaker": "A",
            "japanese": "進めさせていただきます。",
            "reading": "",
            "romaji": "",
            "english": "I will proceed.",
            "vietnamese": "em xin phép tiếp tục tiến hành.",
            "acceptedAnswers": [
                "進めさせていただきます",
                "すすめさせていただきます"
            ]
        },
        {
            "id": 73,
            "speaker": "A",
            "japanese": "スケジュールについても確認させてください。",
            "reading": "",
            "romaji": "",
            "english": "Please let me confirm about the schedule as well.",
            "vietnamese": "Cho em xác nhận thêm về lịch trình nữa ạ.",
            "acceptedAnswers": [
                "スケジュールについても確認させてください",
                "スケジュールについてもかくにんさせてください"
            ]
        },
        {
            "id": 74,
            "speaker": "A",
            "japanese": "こちらの機能はいつまでに完了すれば",
            "reading": "",
            "romaji": "",
            "english": "By when should this function be completed",
            "vietnamese": "Chức năng này cần hoàn thành trước bao giờ",
            "acceptedAnswers": [
                "こちらの機能はいつまでに完了すれば",
                "こちらのきのうはいつまでにかんりょうすれば"
            ]
        },
        {
            "id": 75,
            "speaker": "A",
            "japanese": "よろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "would it be okay?",
            "vietnamese": "thì được ạ?",
            "acceptedAnswers": [
                "よろしいでしょうか"
            ]
        },
        {
      "id": 76,
      "speaker": "B",
      "japanese": "今月の20日までにお願いします。",
      "reading": "",
      "romaji": "",
      "english": "Please finish by the 20th of this month.",
      "vietnamese": "Làm giúp anh trước ngày 20 tháng này nhé.",
      "acceptedAnswers": [
        "今月の20日までにお願いします",
        "こんげつのはつかまでにおねがいします",
        "こんげつの20日までにおねがいします",
        "今月の二十日までにお願いします"
      ]
    },
    {
      "id": 77,
      "speaker": "A",
      "japanese": "20日ですね。",
      "reading": "",
      "romaji": "",
      "english": "The 20th, right?",
      "vietnamese": "Ngày 20 đúng không ạ.",
      "acceptedAnswers": [
        "20日ですね",
        "はつかね",
        "二十日ですね"
      ]
    },
    {
      "id": 78,
      "speaker": "A",
      "japanese": "途中でレビューの予定はありますか。",
      "reading": "",
      "romaji": "",
      "english": "Is there a review planned midway?",
      "vietnamese": "Giữa chừng có lịch review không ạ?",
      "acceptedAnswers": [
        "途中でレビューの予定はありますか",
        "とちゅうでレビューのよていはありますか"
      ]
    },
    {
      "id": 79,
      "speaker": "B",
      "japanese": "はい、15日に中間レビューを行います。",
      "reading": "",
      "romaji": "",
      "english": "Yes, we will do an interim review on the 15th.",
      "vietnamese": "Có, ngày 15 mình sẽ review giữa kỳ.",
      "acceptedAnswers": [
        "はい15日に中間レビューを行います",
        "はいじゅうごにちにちゅうかんレビューをおこないます",
        "はい十五日に中間レビューを行います"
      ]
    },
    {
      "id": 80,
      "speaker": "A",
      "japanese": "分かりました。",
      "reading": "",
      "romaji": "",
      "english": "Understood.",
      "vietnamese": "Dạ em rõ rồi.",
      "acceptedAnswers": [
        "分かりました",
        "わかりました"
      ]
    },
    {
      "id": 81,
      "speaker": "A",
      "japanese": "もし作業中に問題が発生した場合は、",
      "reading": "",
      "romaji": "",
      "english": "If a problem occurs during work,",
      "vietnamese": "Nếu trong lúc làm có phát sinh vấn đề,",
      "acceptedAnswers": [
        "もし作業中に問題が発生した場合は",
        "もしさぎょうちゅうにもんだいがはっせいしたばあいは"
      ]
    },
    {
      "id": 82,
      "speaker": "A",
      "japanese": "どのように報告すればよろしいでしょうか。",
      "reading": "",
      "romaji": "",
      "english": "how should I report it?",
      "vietnamese": "thì em báo cáo thế nào ạ?",
      "acceptedAnswers": [
        "どのように報告すればよろしいでしょうか",
        "どのようにほうこくすればよろしいでしょうか"
      ]
    },
    {
      "id": 83,
      "speaker": "B",
      "japanese": "まずはチャットで連絡してください。",
      "reading": "",
      "romaji": "",
      "english": "First, please contact via chat.",
      "vietnamese": "Trước hết cứ nhắn tin qua chat.",
      "acceptedAnswers": [
        "まずはチャットで連絡してください",
        "まずはチャットでれんらくしてください"
      ]
    },
    {
      "id": 84,
      "speaker": "B",
      "japanese": "必要に応じてミーティングを設定します。",
      "reading": "",
      "romaji": "",
      "english": "We will set up a meeting as needed.",
      "vietnamese": "Nếu cần anh sẽ xếp lịch họp sau.",
      "acceptedAnswers": [
        "必要に応じてミーティングを設定します",
        "ひつようにおうじてミーティングをせっていします"
      ]
    },
    {
      "id": 85,
      "speaker": "A",
      "japanese": "承知しました。",
      "reading": "",
      "romaji": "",
      "english": "Understood.",
      "vietnamese": "Dạ vâng.",
      "acceptedAnswers": [
        "承知しました",
        "しょうちしました"
      ]
    },
    {
      "id": 86,
      "speaker": "A",
      "japanese": "では、まず詳細設計書を確認してから、",
      "reading": "",
      "romaji": "",
      "english": "Then, after checking the detailed design document first,",
      "vietnamese": "Thế em xem kỹ bản thiết kế chi tiết trước,",
      "acceptedAnswers": [
        "ではまず詳細設計書を確認してから",
        "ではまずしょうさいせっけいしょをかくにんしてから"
      ]
    },
    {
      "id": 87,
      "speaker": "A",
      "japanese": "ピッキングリストの作成に着手します。",
      "reading": "",
      "romaji": "",
      "english": "I will start creating the picking list.",
      "vietnamese": "rồi bắt tay vào tạo danh sách picking.",
      "acceptedAnswers": [
        "ピッキングリストの作成に着手します",
        "ピッキングリストのさくせいにちゃくしゅします"
      ]
    },
    {
      "id": 88,
      "speaker": "A",
      "japanese": "進める中で不明点があれば、",
      "reading": "",
      "romaji": "",
      "english": "If there are unclear points while proceeding,",
      "vietnamese": "Trong quá trình làm có chỗ nào chưa rõ,",
      "acceptedAnswers": [
        "進める中で不明点があれば",
        "すすめるなかでふめいてんがあれば"
      ]
    },
    {
      "id": 89,
      "speaker": "A",
      "japanese": "随時ご相談させていただきます。",
      "reading": "",
      "romaji": "",
      "english": "I will consult you as needed.",
      "vietnamese": "em xin phép trao đổi lại sau ạ.",
      "acceptedAnswers": [
        "随時ご相談させていただきます",
        "ずいじごそうだんさせていただきます"
      ]
    },
    {
      "id": 90,
      "speaker": "B",
      "japanese": "はい、その進め方で問題ありません。",
      "reading": "",
      "romaji": "",
      "english": "Yes, there is no problem with that way of proceeding.",
      "vietnamese": "Ừ, cứ tiến hành như thế nhé.",
      "acceptedAnswers": [
        "はいその進め方で問題ありません",
        "はいそのすすめかたでもんだいありません"
      ]
    }
  ]
};