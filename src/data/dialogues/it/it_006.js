export const IT_006_DIALOGUE = {
    "id": "it-006",
    "level": "IT",
    "title": "打ち合わせでの業務確認",
    "lesson": "TOPIC 1",
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
            "japanese": "山本さん、今少しお時間よろしいでしょうか。今回の担当業務について、いくつか確認させていただきたいことがあります。",
            "reading": "",
            "romaji": "",
            "english": "Yamamoto-san, do you have a moment? There are several things I would like to confirm about my assigned work this time.",
            "vietnamese": "Anh Yamamoto ơi, anh có chút thời gian không ạ? Em có vài điểm muốn trao đổi thêm về công việc được giao lần này.",
            "acceptedAnswers": [
                "山本さん今少しお時間よろしいでしょうか今回の担当業務についていくつか確認させていただきたいことがあります"
            ]
        },
        {
            "id": 2,
            "speaker": "B",
            "japanese": "はい、大丈夫ですよ。どうしましたか。",
            "reading": "",
            "romaji": "",
            "english": "Yes, that is fine. What is it?",
            "vietnamese": "Ừ, anh đang rảnh. Có chuyện gì vậy?",
            "acceptedAnswers": [
                "はい大丈夫ですよどうしましたか"
            ]
        },
        {
            "id": 3,
            "speaker": "A",
            "japanese": "先ほどご説明いただいた出荷処理機能についてなんですが、自分の理解が正しいか確認させてください。",
            "reading": "",
            "romaji": "",
            "english": "Regarding the shipment processing function you explained earlier, please let me confirm whether my understanding is correct.",
            "vietnamese": "Về chức năng xử lý xuất hàng mà anh vừa giải thích lúc nãy, em muốn xác nhận lại xem mình đã hiểu đúng chưa.",
            "acceptedAnswers": [
                "先ほどご説明いただいた出荷処理機能についてなんですが自分の理解が正しいか確認させてください"
            ]
        },
        {
            "id": 4,
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
            "id": 5,
            "speaker": "A",
            "japanese": "出荷指示データをもとにピッキングリストを作成して、その後、出荷完了のデータを入力するという流れでよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "Is it correct that the flow is to create a picking list based on shipment instruction data, and then input shipment completion data?",
            "vietnamese": "Theo em hiểu thì luồng xử lý sẽ là lấy dữ liệu chỉ thị xuất hàng để tạo danh sách picking, sau đó nhập dữ liệu hoàn tất xuất hàng, đúng không ạ?",
            "acceptedAnswers": [
                "出荷指示データをもとにピッキングリストを作成してその後出荷完了のデータを入力するという流れでよろしいでしょうか"
            ]
        },
        {
            "id": 6,
            "speaker": "B",
            "japanese": "はい、その通りです。",
            "reading": "",
            "romaji": "",
            "english": "Yes, that is correct.",
            "vietnamese": "Đúng rồi.",
            "acceptedAnswers": [
                "はいその通りです"
            ]
        },
        {
            "id": 7,
            "speaker": "A",
            "japanese": "ありがとうございます。全体の流れは理解できました。ただ、細かい処理の部分について、まだ少しイメージができていません。詳細設計書を確認したいのですが、共有されていますでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "Thank you. I understood the overall flow, but I still cannot picture the detailed processing well. I would like to check the detailed design document. Has it been shared?",
            "vietnamese": "Dạ, em hiểu được luồng tổng thể rồi. Nhưng phần xử lý chi tiết thì em vẫn chưa hình dung rõ lắm. Không biết tài liệu thiết kế chi tiết đã được share chưa ạ?",
            "acceptedAnswers": [
                "ありがとうございます全体の流れは理解できましたただ細かい処理の部分についてまだ少しイメージができていません詳細設計書を確認したいのですが共有されていますでしょうか"
            ]
        },
        {
            "id": 8,
            "speaker": "B",
            "japanese": "はい、共有フォルダにありますので、後で確認してください。",
            "reading": "",
            "romaji": "",
            "english": "Yes, it is in the shared folder, so please check it later.",
            "vietnamese": "Có rồi, em vào thư mục dùng chung để xem nhé.",
            "acceptedAnswers": [
                "はい共有フォルダにありますので後で確認してください"
            ]
        },
        {
            "id": 9,
            "speaker": "A",
            "japanese": "承知しました。では、一度資料を確認してみます。",
            "reading": "",
            "romaji": "",
            "english": "Understood. I will check the materials once.",
            "vietnamese": "Dạ vâng, em sẽ xem thử tài liệu trước.",
            "acceptedAnswers": [
                "承知しましたでは一度資料を確認してみます"
            ]
        },
        {
            "id": 10,
            "speaker": "A",
            "japanese": "山本さん、先ほど資料を確認したのですが、いくつか分からない点があったので、確認させていただいてもよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "Yamamoto-san, I checked the materials earlier, but there are some unclear points. May I confirm them?",
            "vietnamese": "Anh Yamamoto ơi, em vừa xem tài liệu xong, nhưng vẫn còn một vài chỗ chưa rõ nên em muốn hỏi lại, được không ạ?",
            "acceptedAnswers": [
                "山本さん先ほど資料を確認したのですがいくつか分からない点があったので確認させていただいてもよろしいでしょうか"
            ]
        },
        {
            "id": 11,
            "speaker": "B",
            "japanese": "はい、大丈夫ですよ。どうぞ。",
            "reading": "",
            "romaji": "",
            "english": "Yes, that is fine. Go ahead.",
            "vietnamese": "Ừ, em cứ hỏi đi.",
            "acceptedAnswers": [
                "はい大丈夫ですよどうぞ"
            ]
        },
        {
            "id": 12,
            "speaker": "A",
            "japanese": "まず、ピッキングリストについてなんですが、画面表示だけでしょうか、それとも印刷も必要でしょうか。",
            "reading": "",
            "romaji": "",
            "english": "First, regarding the picking list, is screen display enough, or is printing also required?",
            "vietnamese": "Trước hết, về danh sách picking, mình chỉ hiển thị trên màn hình hay cần in ra nữa ạ?",
            "acceptedAnswers": [
                "まずピッキングリストについてなんですが画面表示だけでしょうかそれとも印刷も必要でしょうか"
            ]
        },
        {
            "id": 13,
            "speaker": "B",
            "japanese": "画面表示とPDF出力の両方が必要です。",
            "reading": "",
            "romaji": "",
            "english": "Both screen display and PDF output are required.",
            "vietnamese": "Cần cả hiển thị trên màn hình và xuất file PDF.",
            "acceptedAnswers": [
                "画面表示とPDF出力の両方が必要です"
            ]
        },
        {
            "id": 14,
            "speaker": "A",
            "japanese": "はい、分かりました。",
            "reading": "",
            "romaji": "",
            "english": "Yes, understood.",
            "vietnamese": "Dạ, em hiểu rồi.",
            "acceptedAnswers": [
                "はい分かりました"
            ]
        },
        {
            "id": 15,
            "speaker": "A",
            "japanese": "あと、出荷完了の入力についてなんですが、こちらはすべて自動処理になりますか。",
            "reading": "",
            "romaji": "",
            "english": "Also, regarding shipment completion input, will all of this be automatic processing?",
            "vietnamese": "Còn về phần nhập hoàn tất xuất hàng, có phải tất cả đều xử lý tự động không ạ?",
            "acceptedAnswers": [
                "あと出荷完了の入力についてなんですがこちらはすべて自動処理になりますか"
            ]
        },
        {
            "id": 16,
            "speaker": "B",
            "japanese": "いいえ、すべて自動ではありません。基本は手動で入力していただきますが、一部のデータについてはバッチ処理で自動的に更新されます。例えば、夜間にまとめて処理されるデータがありますので、その点も考えて実装してください。",
            "reading": "",
            "romaji": "",
            "english": "No, not everything is automatic. Basically, it will be manually input, but some data will be automatically updated by batch processing. For example, some data is processed at night, so please consider that when implementing.",
            "vietnamese": "Không, không phải toàn bộ đều tự động đâu. Về cơ bản vẫn là nhập tay, nhưng một số dữ liệu sẽ được cập nhật tự động bằng xử lý batch. Ví dụ có những dữ liệu sẽ được xử lý vào ban đêm, nên em nhớ lưu ý điểm này khi làm nhé.",
            "acceptedAnswers": [
                "いいえすべて自動ではありません基本は手動で入力していただきますが一部のデータについてはバッチ処理で自動的に更新されます例えば夜間にまとめて処理されるデータがありますのでその点も考えて実装してください"
            ]
        },
        {
            "id": 17,
            "speaker": "A",
            "japanese": "理解しました。手動入力が中心で、一部は自動処理になるということですね。処理のタイミングにも注意しながら対応します。",
            "reading": "",
            "romaji": "",
            "english": "Understood. So manual input is the main flow, and some parts are automatic. I will pay attention to processing timing.",
            "vietnamese": "Dạ, em hiểu rồi. Nghĩa là chủ yếu vẫn nhập tay, chỉ một phần là tự động đúng không ạ. Em sẽ chú ý đến thời điểm xử lý khi làm.",
            "acceptedAnswers": [
                "理解しました手動入力が中心で一部は自動処理になるということですね処理のタイミングにも注意しながら対応します"
            ]
        },
        {
            "id": 18,
            "speaker": "A",
            "japanese": "それから、エラーが発生した場合についてなんですが、エラーが出たら、そのまま処理を止めればよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "Also, regarding cases when an error occurs, is it enough to stop processing when an error appears?",
            "vietnamese": "Tiếp theo, nếu xảy ra lỗi, thì chỉ cần dừng xử lý lại là được đúng không ạ?",
            "acceptedAnswers": [
                "それからエラーが発生した場合についてなんですがエラーが出たらそのまま処理を止めればよろしいでしょうか"
            ]
        },
        {
            "id": 19,
            "speaker": "B",
            "japanese": "いいえ、それだけでは不十分です。エラーが発生した場合は、エラーメッセージを表示して、ユーザーが内容を確認できるようにしてください。その上で、修正して再入力できるような画面にする必要があります。また、どこが間違っているか分かりやすいメッセージにすることも重要です。",
            "reading": "",
            "romaji": "",
            "english": "No, that alone is not sufficient. When an error occurs, display an error message so the user can understand it. Then the screen needs to allow correction and re-input. It is also important to make the message clear about what is wrong.",
            "vietnamese": "Không, như vậy là chưa đủ. Khi có lỗi, cần hiển thị thông báo lỗi để người dùng biết vấn đề là gì. Sau đó phải cho phép họ sửa và nhập lại. Ngoài ra, thông báo lỗi cũng cần rõ ràng để người dùng hiểu đang sai ở đâu.",
            "acceptedAnswers": [
                "いいえそれだけでは不十分ですエラーが発生した場合はエラーメッセージを表示してユーザーが内容を確認できるようにしてくださいその上で修正して再入力できるような画面にする必要がありますまたどこが間違っているか分かりやすいメッセージにすることも重要です"
            ]
        },
        {
            "id": 20,
            "speaker": "A",
            "japanese": "はい、理解しました。ユーザーが原因を把握できるような対応が必要ということですね。修正しやすい画面になるように意識して対応します。",
            "reading": "",
            "romaji": "",
            "english": "Yes, I understand. We need to handle it so users can grasp the cause. I will keep in mind making the screen easy to correct.",
            "vietnamese": "Dạ, em hiểu rồi. Nghĩa là cần phải đối ứng để sao cho người dùng biết nguyên nhân lỗi. Em sẽ cố gắng thiết kế sao cho màn hình dễ sửa nhất có thể.",
            "acceptedAnswers": [
                "はい理解しましたユーザーが原因を把握できるような対応が必要ということですね修正しやすい画面になるように意識して対応します"
            ]
        },
        {
            "id": 21,
            "speaker": "A",
            "japanese": "もう一点だけよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "May I ask one more point?",
            "vietnamese": "Em hỏi thêm một điểm nữa được không ạ?",
            "acceptedAnswers": [
                "もう一点だけよろしいでしょうか"
            ]
        },
        {
            "id": 22,
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
            "id": 23,
            "speaker": "A",
            "japanese": "出荷データの更新タイミングですが、ピッキング完了時にすぐ更新するという認識でよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "Regarding shipment data update timing, is it correct that it is updated immediately when picking is complete?",
            "vietnamese": "Về thời điểm cập nhật dữ liệu xuất hàng, có phải cập nhật ngay khi hoàn tất picking không ạ?",
            "acceptedAnswers": [
                "出荷データの更新タイミングですがピッキング完了時にすぐ更新するという認識でよろしいでしょうか"
            ]
        },
        {
            "id": 24,
            "speaker": "B",
            "japanese": "いいえ、そのタイミングでは更新しません。ピッキングの段階ではまだ確定していないため、データは更新されません。出荷完了の入力が終わったタイミングで、正式なデータとして更新されます。その流れで実装してください。",
            "reading": "",
            "romaji": "",
            "english": "No, it is not updated at that timing. At the picking stage, it is not yet confirmed, so the data is not updated. It is updated as official data when shipment completion input is finished. Please implement it that way.",
            "vietnamese": "Không, không phải lúc đó. Ở bước picking thì dữ liệu vẫn chưa được xác nhận nên chưa cập nhật. Chỉ khi nhập xong thông tin hoàn tất xuất hàng thì mới cập nhật chính thức. Em làm theo luồng đó nhé.",
            "acceptedAnswers": [
                "いいえそのタイミングでは更新しませんピッキングの段階ではまだ確定していないためデータは更新されません出荷完了の入力が終わったタイミングで正式なデータとして更新されますその流れで実装してください"
            ]
        },
        {
            "id": 25,
            "speaker": "A",
            "japanese": "承知しました。出荷完了後にデータを更新するということですね。処理の流れを意識しながら実装を進めます。",
            "reading": "",
            "romaji": "",
            "english": "Understood. So the data is updated after shipment completion. I will implement while keeping the processing flow in mind.",
            "vietnamese": "Dạ, em rõ rồi. Nghĩa là sau khi hoàn tất xuất hàng thì mới cập nhật dữ liệu. Em sẽ chú ý luồng xử lý khi làm.",
            "acceptedAnswers": [
                "承知しました出荷完了後にデータを更新するということですね処理の流れを意識しながら実装を進めます"
            ]
        },
        {
            "id": 26,
            "speaker": "B",
            "japanese": "ミンさん、今回の担当範囲についてですが、ピッキングリストの作成から出荷完了入力まで対応していただく想定ですが、その認識で問題ないでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "Minh, regarding your scope this time, we assume you will handle from creating the picking list to shipment completion input. Is that understanding okay?",
            "vietnamese": "Minh này, về phạm vi công việc lần này, anh dự định giao cho em làm từ phần tạo danh sách picking đến nhập hoàn tất xuất hàng, em thấy như vậy có ổn không?",
            "acceptedAnswers": [
                "ミンさん今回の担当範囲についてですがピッキングリストの作成から出荷完了入力まで対応していただく想定ですがその認識で問題ないでしょうか"
            ]
        },
        {
            "id": 27,
            "speaker": "A",
            "japanese": "はい、問題ありません。一連の処理を担当するという理解で進めさせていただきます。",
            "reading": "",
            "romaji": "",
            "english": "Yes, no problem. I will proceed with the understanding that I am responsible for the series of processes.",
            "vietnamese": "Dạ, không vấn đề gì ạ. Em sẽ phụ trách toàn bộ quy trình đó.",
            "acceptedAnswers": [
                "はい問題ありません一連の処理を担当するという理解で進めさせていただきます"
            ]
        },
        {
            "id": 28,
            "speaker": "A",
            "japanese": "スケジュールについても確認させてください。こちらの機能はいつまでに完了すればよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "Please let me confirm the schedule as well. By when should this function be completed?",
            "vietnamese": "Cho em hỏi thêm một chút về schedule, chức năng này cần hoàn thành trước khi nào ạ?",
            "acceptedAnswers": [
                "スケジュールについても確認させてくださいこちらの機能はいつまでに完了すればよろしいでしょうか"
            ]
        },
        {
            "id": 29,
            "speaker": "B",
            "japanese": "今月の20日までにお願いします。",
            "reading": "",
            "romaji": "",
            "english": "Please complete it by the 20th of this month.",
            "vietnamese": "Hạn là ngày 20 tháng này nhé.",
            "acceptedAnswers": [
                "今月の20日までにお願いします"
            ]
        },
        {
            "id": 30,
            "speaker": "A",
            "japanese": "20日ですね。途中でレビューの予定はありますか。",
            "reading": "",
            "romaji": "",
            "english": "The 20th, right? Is there a review planned during the work?",
            "vietnamese": "Dạ, ngày 20 đúng không ạ. Trong quá trình làm có review giữa kỳ không anh?",
            "acceptedAnswers": [
                "20日ですね途中でレビューの予定はありますか"
            ]
        },
        {
            "id": 31,
            "speaker": "B",
            "japanese": "はい、15日に中間レビューを行います。",
            "reading": "",
            "romaji": "",
            "english": "Yes, we will conduct an interim review on the 15th.",
            "vietnamese": "Có, ngày 15 sẽ có review giữa kỳ.",
            "acceptedAnswers": [
                "はい15日に中間レビューを行います"
            ]
        },
        {
            "id": 32,
            "speaker": "A",
            "japanese": "分かりました。",
            "reading": "",
            "romaji": "",
            "english": "Understood.",
            "vietnamese": "Dạ, em rõ rồi.",
            "acceptedAnswers": [
                "分かりました"
            ]
        },
        {
            "id": 33,
            "speaker": "A",
            "japanese": "もし作業中に問題が発生した場合は、どのように報告すればよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "If a problem occurs during the work, how should I report it?",
            "vietnamese": "Nếu trong lúc làm có phát sinh vấn đề, thì em nên báo cáo như thế nào ạ?",
            "acceptedAnswers": [
                "もし作業中に問題が発生した場合はどのように報告すればよろしいでしょうか"
            ]
        },
        {
            "id": 34,
            "speaker": "B",
            "japanese": "まずはチャットで連絡してください。必要に応じてミーティングを設定します。",
            "reading": "",
            "romaji": "",
            "english": "First, please contact me by chat. If needed, we will set up a meeting.",
            "vietnamese": "Trước hết cứ nhắn qua chat nhé. Nếu cần thì sẽ họp trao đổi thêm.",
            "acceptedAnswers": [
                "まずはチャットで連絡してください必要に応じてミーティングを設定します"
            ]
        },
        {
            "id": 35,
            "speaker": "A",
            "japanese": "承知しました。",
            "reading": "",
            "romaji": "",
            "english": "Understood.",
            "vietnamese": "Dạ, em hiểu rồi.",
            "acceptedAnswers": [
                "承知しました"
            ]
        },
        {
            "id": 36,
            "speaker": "A",
            "japanese": "では、まず詳細設計書を確認してから、ピッキングリストの作成に着手します。進める中で不明点があれば、随時ご相談させていただきます。",
            "reading": "",
            "romaji": "",
            "english": "Then I will first check the detailed design document and start creating the picking list. If unclear points arise while proceeding, I will consult you as needed.",
            "vietnamese": "Vậy trước tiên em sẽ xem kỹ tài liệu thiết kế chi tiết, sau đó bắt đầu làm phần danh sách picking. Trong quá trình làm, nếu có gì chưa rõ em sẽ trao đổi thêm.",
            "acceptedAnswers": [
                "ではまず詳細設計書を確認してからピッキングリストの作成に着手します進める中で不明点があれば随時ご相談させていただきます"
            ]
        },
        {
            "id": 37,
            "speaker": "B",
            "japanese": "はい、その進め方で問題ありません。",
            "reading": "",
            "romaji": "",
            "english": "Yes, there is no problem with that approach.",
            "vietnamese": "Ừ, làm như vậy là ổn rồi.",
            "acceptedAnswers": [
                "はいその進め方で問題ありません"
            ]
        },
        {
            "id": 38,
            "speaker": "A",
            "japanese": "本日はご説明ありがとうございました。しっかり理解した上で進めたいと思います。",
            "reading": "",
            "romaji": "",
            "english": "Thank you for the explanation today. I would like to proceed after understanding it well.",
            "vietnamese": "Hôm nay cảm ơn anh đã giải thích rất chi tiết. Em sẽ cố gắng nắm chắc nội dung rồi triển khai.",
            "acceptedAnswers": [
                "本日はご説明ありがとうございましたしっかり理解した上で進めたいと思います"
            ]
        },
        {
            "id": 39,
            "speaker": "B",
            "japanese": "よろしくお願いします。",
            "reading": "",
            "romaji": "",
            "english": "Thank you.",
            "vietnamese": "Ừ, em cố lên nhé.",
            "acceptedAnswers": [
                "よろしくお願いします"
            ]
        },
        {
            "id": 40,
            "speaker": "A",
            "japanese": "はい、よろしくお願いいたします。",
            "reading": "",
            "romaji": "",
            "english": "Yes, thank you.",
            "vietnamese": "Dạ, em sẽ cố gắng ạ.",
            "acceptedAnswers": [
                "はいよろしくお願いいたします"
            ]
        }
    ]
};