export const IT_005_DIALOGUE = {
    "id": "it-005",
    "level": "IT",
    "lesson": "TOPIC 1",
    "title": "要件説明",
    "description": "Giải thích yêu cầu. Tamamura giải thích yêu cầu mobile cho hệ thống quản lý chuyên cần, Ly xác nhận các điểm liên quan đến chức năng, xử lý offline, gửi tự động, lịch sử chỉnh sửa và màn hình mobile.",
    "category": "Requirements Explanation / Mobile Support",
    "characters": [
        {
            "key": "A",
            "name": "リー",
            "displayName": "Ly",
            "role": "Front SE working at customer site"
        },
        {
            "key": "B",
            "name": "玉村",
            "displayName": "Tamamura",
            "role": "Customer-side project owner"
        }
    ],
    "lines": [
        {
            "id": 1,
            "speaker": "B",
            "japanese": "プロジェクトのメンバーが全員揃いましたので、要件の説明会を始めたいと思います。説明の中で、分かりにくいところや確認しておきたいことがありましたら、その場で質問してください。",
            "reading": "",
            "romaji": "",
            "english": "All project members are here, so I would like to start the requirements explanation meeting. If anything is unclear or needs confirmation during the explanation, please ask on the spot.",
            "vietnamese": "Mọi người đã có mặt đầy đủ, tôi xin bắt đầu buổi giải thích yêu cầu. Trong lúc tôi trình bày, nếu có chỗ nào khó hiểu hoặc cần xác nhận thì các bạn hãy hỏi luôn nhé.",
            "acceptedAnswers": [
                "プロジェクトのメンバーが全員揃いましたので要件の説明会を始めたいと思います説明の中で分かりにくいところや確認しておきたいことがありましたらその場で質問してください"
            ]
        },
        {
            "id": 2,
            "speaker": "A",
            "japanese": "承知しました。よろしくお願いいたします。",
            "reading": "",
            "romaji": "",
            "english": "Understood. Thank you.",
            "vietnamese": "Vâng, tôi hiểu rồi ạ.",
            "acceptedAnswers": [
                "承知しましたよろしくお願いいたします"
            ]
        },
        {
            "id": 3,
            "speaker": "B",
            "japanese": "では、まずプロジェクトの概要についてご説明します。今回の開発は、1年前に作成した出席管理システムをベースに、モバイル対応を行います。既存の機能は基本的にそのまま使いますが、モバイルで使いやすいように、画面や操作を一部変更します。",
            "reading": "",
            "romaji": "",
            "english": "First, I will explain the project overview. This development will be based on the attendance management system created one year ago and will add mobile support. Existing functions will basically remain, but some screens and operations will be changed for easier mobile use.",
            "vietnamese": "Trước tiên, tôi xin giải thích về tổng quan dự án. Lần phát triển này sẽ dựa trên hệ thống quản lý điểm danh đã làm cách đây 1 năm, và thực hiện đối ứng trên mobile. Các chức năng hiện tại cơ bản sẽ được giữ nguyên, nhưng một số màn hình và thao tác sẽ được điều chỉnh để dễ dùng hơn trên mobile.",
            "acceptedAnswers": [
                "ではまずプロジェクトの概要についてご説明します今回の開発は1年前に作成した出席管理システムをベースにモバイル対応を行います既存の機能は基本的にそのまま使いますがモバイルで使いやすいように画面や操作を一部変更します"
            ]
        },
        {
            "id": 4,
            "speaker": "A",
            "japanese": "既存機能をベースにして、モバイル用に調整するという理解でよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "Is it correct to understand that we will adjust the existing functions for mobile use?",
            "vietnamese": "Chúng tôi hiểu là sẽ dựa trên hệ thống cũ rồi điều chỉnh để sử dụng trên mobile đúng không ạ.",
            "acceptedAnswers": [
                "既存機能をベースにしてモバイル用に調整するという理解でよろしいでしょうか"
            ]
        },
        {
            "id": 5,
            "speaker": "B",
            "japanese": "はい、そのとおりです。特に講師が授業中に使うことを想定していますので、操作のしやすさを重視したいと考えています。講師にとっては、短い時間で入力できることが重要だと思います。",
            "reading": "",
            "romaji": "",
            "english": "Yes, that is correct. We especially assume instructors will use it during class, so we want to prioritize ease of operation. For instructors, being able to input data quickly is important.",
            "vietnamese": "Vâng, đúng vậy. Hệ thống này được thiết kế để giảng viên sử dụng trong giờ học nên chúng tôi muốn ưu tiên tính dễ thao tác. Đối với giảng viên thì việc có thể nhập liệu nhanh trong thời gian ngắn là rất quan trọng.",
            "acceptedAnswers": [
                "はいそのとおりです特に講師が授業中に使うことを想定していますので操作のしやすさを重視したいと考えています講師にとっては短い時間で入力できることが重要だと思います"
            ]
        },
        {
            "id": 6,
            "speaker": "A",
            "japanese": "講師にとって使いやすい画面にする必要がありますね。",
            "reading": "",
            "romaji": "",
            "english": "We need to make screens that are easy for instructors to use.",
            "vietnamese": "Như vậy sẽ cần thiết kế màn hình dễ sử dụng cho giảng viên.",
            "acceptedAnswers": [
                "講師にとって使いやすい画面にする必要がありますね"
            ]
        },
        {
            "id": 7,
            "speaker": "B",
            "japanese": "では、機能について説明します。今回のシステムでは、出席・欠席・遅刻の管理に加えて、学習時間も自動で記録します。学習時間は、授業の開始時間と終了時間から計算する想定です。",
            "reading": "",
            "romaji": "",
            "english": "Next, I will explain the functions. In this system, in addition to managing attendance, absence, and lateness, study time will also be recorded automatically. Study time is assumed to be calculated from lesson start and end times.",
            "vietnamese": "Tiếp theo là phần chức năng. Ngoài việc quản lý đi học, nghỉ học, đi muộn, hệ thống còn tự động ghi lại thời gian học. Thời gian học sẽ được tính dựa trên thời gian bắt đầu và kết thúc buổi học.",
            "acceptedAnswers": [
                "では機能について説明します今回のシステムでは出席・欠席・遅刻の管理に加えて学習時間も自動で記録します学習時間は授業の開始時間と終了時間から計算する想定です"
            ]
        },
        {
            "id": 8,
            "speaker": "A",
            "japanese": "開始と終了の時間から自動で計算する形で合っていますか。",
            "reading": "",
            "romaji": "",
            "english": "Is it correct that it will be automatically calculated from the start and end times?",
            "vietnamese": "Tức là hệ thống sẽ tự động tính dựa trên thời gian bắt đầu và kết thúc đúng không ạ.",
            "acceptedAnswers": [
                "開始と終了の時間から自動で計算する形で合っていますか"
            ]
        },
        {
            "id": 9,
            "speaker": "B",
            "japanese": "はい、その通りです。また、途中で学習者が退出した場合は、その時点までの時間を記録します。",
            "reading": "",
            "romaji": "",
            "english": "Yes, that is correct. Also, if a learner leaves midway, the time up to that point will be recorded.",
            "vietnamese": "Đúng vậy. Ngoài ra, nếu học viên rời khỏi buổi học giữa chừng thì sẽ ghi nhận đến thời điểm đó.",
            "acceptedAnswers": [
                "はいその通りですまた途中で学習者が退出した場合はその時点までの時間を記録します"
            ]
        },
        {
            "id": 10,
            "speaker": "A",
            "japanese": "つまり、自習時間なども含めて、1日の学習時間をまとめて記録するという理解でよろしいでしょうか。",
            "reading": "",
            "romaji": "",
            "english": "So is it correct to understand that the total daily study time including self-study will be recorded?",
            "vietnamese": "Tức là sẽ tính gộp thời gian học của 1 ngày bao gồm cả thời gian tự học đúng không ạ?",
            "acceptedAnswers": [
                "つまり自習時間なども含めて1日の学習時間をまとめて記録するという理解でよろしいでしょうか"
            ]
        },
        {
            "id": 11,
            "speaker": "B",
            "japanese": "いいえ、今回はそこまでは含みません。あくまで授業中の時間のみを対象としています。自習時間については、今回の範囲には入っていません。",
            "reading": "",
            "romaji": "",
            "english": "No, this time it does not include that. Only the time during class is targeted. Self-study time is not included in the scope this time.",
            "vietnamese": "Không, lần này không bao gồm phần đó. Đối tượng tính chỉ là thời gian trong giờ học thôi. Về thời gian tự học thì không nằm trong phạm vi của lần này.",
            "acceptedAnswers": [
                "いいえ今回はそこまでは含みませんあくまで授業中の時間のみを対象としています自習時間については今回の範囲には入っていません"
            ]
        },
        {
            "id": 12,
            "speaker": "A",
            "japanese": "失礼しました。授業中の時間のみを記録するということですね。",
            "reading": "",
            "romaji": "",
            "english": "Excuse me. So it means only time during class will be recorded.",
            "vietnamese": "Tôi hiểu rồi, vậy là chỉ tính thời gian trong giờ học thôi.",
            "acceptedAnswers": [
                "失礼しました授業中の時間のみを記録するということですね"
            ]
        },
        {
            "id": 13,
            "speaker": "B",
            "japanese": "はい、その認識でお願いします。",
            "reading": "",
            "romaji": "",
            "english": "Yes, please proceed with that understanding.",
            "vietnamese": "Vâng, đúng như các bạn hiểu nhé.",
            "acceptedAnswers": [
                "はいその認識でお願いします"
            ]
        },
        {
            "id": 14,
            "speaker": "B",
            "japanese": "次に、画面設計書についてです。今回は1年前の設計書をベースに使いますが、モバイル対応で追加・変更する部分には、「追加」または「変更」と記載しています。",
            "reading": "",
            "romaji": "",
            "english": "Next is the screen design document. We will use the design document from one year ago as the base, and parts added or changed for mobile support are marked as 'Add' or 'Change'.",
            "vietnamese": "Tiếp theo là tài liệu thiết kế màn hình. Chúng tôi sẽ dùng lại tài liệu của 1 năm trước, nhưng những phần thay đổi hoặc bổ sung sẽ được ghi rõ là “追加” hoặc “変更”.",
            "acceptedAnswers": [
                "次に画面設計書についてです今回は1年前の設計書をベースに使いますがモバイル対応で追加・変更する部分には「追加」または「変更」と記載しています"
            ]
        },
        {
            "id": 15,
            "speaker": "A",
            "japanese": "変更がある部分にマークが付いている形ですね。",
            "reading": "",
            "romaji": "",
            "english": "So the changed parts are marked, right?",
            "vietnamese": "Như vậy các phần có thay đổi sẽ được đánh dấu đúng không ạ.",
            "acceptedAnswers": [
                "変更がある部分にマークが付いている形ですね"
            ]
        },
        {
            "id": 16,
            "speaker": "B",
            "japanese": "はい、そのとおりです。まずはその部分を中心に確認していただければと思います。",
            "reading": "",
            "romaji": "",
            "english": "Yes, that is correct. Please check those parts first.",
            "vietnamese": "Đúng vậy, các bạn hãy kiểm tra những phần đó trước nhé.",
            "acceptedAnswers": [
                "はいそのとおりですまずはその部分を中心に確認していただければと思います"
            ]
        },
        {
            "id": 17,
            "speaker": "A",
            "japanese": "分かりました。",
            "reading": "",
            "romaji": "",
            "english": "Understood.",
            "vietnamese": "Vâng, chúng tôi hiểu rồi.",
            "acceptedAnswers": [
                "分かりました"
            ]
        },
        {
            "id": 18,
            "speaker": "B",
            "japanese": "続いて、「モバイル対応＿特別対応」のファイルについて説明します。こちらには、異常処理をまとめています。特に、通信が不安定な場合の対応が重要になります。",
            "reading": "",
            "romaji": "",
            "english": "Next, I will explain the 'Mobile Support Special Handling' file. This file summarizes abnormal handling. Especially handling unstable communication is important.",
            "vietnamese": "Tiếp theo tôi sẽ giải thích về file “Đối ứng trên mobile_Xử lý đặc biệt”. Trong file chúng tôi đã tổng hợp về những xử lý bất thường. Đặc biệt việc đối ứng khi mạng không ổn định là rất quan trọng.",
            "acceptedAnswers": [
                "続いて「モバイル対応＿特別対応」のファイルについて説明しますこちらには異常処理をまとめています特に通信が不安定な場合の対応が重要になります"
            ]
        },
        {
            "id": 19,
            "speaker": "A",
            "japanese": "通信が不安定な場合でも入力できるようにする、という対応ですね。",
            "reading": "",
            "romaji": "",
            "english": "This means users should be able to input data even when communication is unstable, right?",
            "vietnamese": "Khi mạng không ổn định thì vẫn nhập được dữ liệu đúng không ạ.",
            "acceptedAnswers": [
                "通信が不安定な場合でも入力できるようにするという対応ですね"
            ]
        },
        {
            "id": 20,
            "speaker": "B",
            "japanese": "はい、そのようにしたいと考えています。オフラインで入力したデータは、オンラインに戻ったタイミングで自動送信します。",
            "reading": "",
            "romaji": "",
            "english": "Yes, that is what we want. Data entered offline will be automatically sent when the device returns online.",
            "vietnamese": "Đúng vậy, chúng tôi muốn xử lý theo hướng đó. Dữ liệu nhập offline sẽ tự động gửi khi có lại kết nối.",
            "acceptedAnswers": [
                "はいそのようにしたいと考えていますオフラインで入力したデータはオンラインに戻ったタイミングで自動送信します"
            ]
        },
        {
            "id": 21,
            "speaker": "A",
            "japanese": "オンラインに戻った後、ユーザーがボタンを押して送信する形でしょうか。",
            "reading": "",
            "romaji": "",
            "english": "After returning online, will the user press a button to send it?",
            "vietnamese": "Khi có kết nối trở lại thì người dùng sẽ bấm nút để gửi thông tin nhỉ?",
            "acceptedAnswers": [
                "オンラインに戻った後ユーザーがボタンを押して送信する形でしょうか"
            ]
        },
        {
            "id": 22,
            "speaker": "B",
            "japanese": "いえ、その操作は不要にしたいと考えています。ユーザーが操作しなくても、自動で送信される仕様にしたいです。",
            "reading": "",
            "romaji": "",
            "english": "No, we want to make that operation unnecessary. We want the specification to send automatically without user operation.",
            "vietnamese": "Không phải, chúng tôi muốn xử lý để không cần thao tác đó. Dù user không thao tác gì cả thì data vẫn sẽ được gửi tự động.",
            "acceptedAnswers": [
                "いえその操作は不要にしたいと考えていますユーザーが操作しなくても自動で送信される仕様にしたいです"
            ]
        },
        {
            "id": 23,
            "speaker": "A",
            "japanese": "承知しました。",
            "reading": "",
            "romaji": "",
            "english": "Understood.",
            "vietnamese": "Tôi hiểu rồi.",
            "acceptedAnswers": [
                "承知しました"
            ]
        },
        {
            "id": 24,
            "speaker": "B",
            "japanese": "もし送信に失敗した場合は、再送できるようにしてください。",
            "reading": "",
            "romaji": "",
            "english": "If sending fails, please make it possible to resend.",
            "vietnamese": "Nếu gửi thất bại thì các bạn hãy xử lý để sao cho có thể gửi lại được nhé.",
            "acceptedAnswers": [
                "もし送信に失敗した場合は再送できるようにしてください"
            ]
        },
        {
            "id": 25,
            "speaker": "A",
            "japanese": "エラー時は再送する想定で進めます。",
            "reading": "",
            "romaji": "",
            "english": "We will proceed assuming resend on error.",
            "vietnamese": "Vâng, tôi sẽ xử lý theo hướng khi có lỗi thì sẽ gửi lại.",
            "acceptedAnswers": [
                "エラー時は再送する想定で進めます"
            ]
        },
        {
            "id": 26,
            "speaker": "B",
            "japanese": "はい、その対応をお願いします。",
            "reading": "",
            "romaji": "",
            "english": "Yes, please handle it that way.",
            "vietnamese": "Vâng, nhờ các bạn xử lý như vậy.",
            "acceptedAnswers": [
                "はいその対応をお願いします"
            ]
        },
        {
            "id": 27,
            "speaker": "B",
            "japanese": "次に、出席データの修正についてです。入力後の修正は、当日中であれば可能とします。また、修正した場合は履歴を残すようにしてください。",
            "reading": "",
            "romaji": "",
            "english": "Next is about correction of attendance data. Corrections after input are allowed within the same day. Also, please keep a history when corrections are made.",
            "vietnamese": "Tiếp theo là việc chỉnh sửa dữ liệu điểm danh. Sau khi nhập xong thì có thể chỉnh sửa trong ngày hôm đó. Ngoài ra, các bạn hãy xử lý sao cho có thể lưu lại lịch sử trong trường hợp đã sửa.",
            "acceptedAnswers": [
                "次に出席データの修正についてです入力後の修正は当日中であれば可能としますまた修正した場合は履歴を残すようにしてください"
            ]
        },
        {
            "id": 28,
            "speaker": "A",
            "japanese": "当日中は修正可能で、履歴も残す形で対応します。",
            "reading": "",
            "romaji": "",
            "english": "We will handle it so corrections are possible within the same day and history is kept.",
            "vietnamese": "Vâng, chúng tôi sẽ xử lý để có thể chỉnh sửa trong ngày hôm đó và lưu lại lịch sử chỉnh sửa.",
            "acceptedAnswers": [
                "当日中は修正可能で履歴も残す形で対応します"
            ]
        },
        {
            "id": 29,
            "speaker": "B",
            "japanese": "最後に、モバイル画面についてです。PC版と同じ内容をすべて表示するのではなく、必要な情報に絞って表示したいと考えています。",
            "reading": "",
            "romaji": "",
            "english": "Finally, about the mobile screen. Instead of displaying everything from the PC version, we want to show only necessary information.",
            "vietnamese": "Cuối cùng là về màn hình mobile. Chúng tôi muốn rằng không cần hiển thị toàn bộ nội dung giống như PC mà chỉ cần hiển thị những thông tin cần thiết.",
            "acceptedAnswers": [
                "最後にモバイル画面についてですPC版と同じ内容をすべて表示するのではなく必要な情報に絞って表示したいと考えています"
            ]
        },
        {
            "id": 30,
            "speaker": "A",
            "japanese": "表示項目を絞って、シンプルな画面にする方向ですね。",
            "reading": "",
            "romaji": "",
            "english": "So the direction is to narrow down display items and make a simple screen.",
            "vietnamese": "Tức là các bạn muốn lọc ra các item hiển thị và xử lý thành một màn hình đơn giản thôi nhỉ.",
            "acceptedAnswers": [
                "表示項目を絞ってシンプルな画面にする方向ですね"
            ]
        },
        {
            "id": 31,
            "speaker": "B",
            "japanese": "はい。操作しやすい画面になるように設計をお願いします。",
            "reading": "",
            "romaji": "",
            "english": "Yes. Please design it to be easy to operate.",
            "vietnamese": "Đúng vậy, nhờ các bạn design sao cho màn hình dễ thao tác nhé.",
            "acceptedAnswers": [
                "はい操作しやすい画面になるように設計をお願いします"
            ]
        },
        {
            "id": 32,
            "speaker": "A",
            "japanese": "承知しました。本日の内容については理解しました。資料を確認して、不明点があれば後ほど確認させてください。",
            "reading": "",
            "romaji": "",
            "english": "Understood. I understood today's content. I will check the materials and confirm later if there are unclear points.",
            "vietnamese": "Tôi đã hiểu nội dung hôm nay. Sau khi xem tài liệu, nếu có điểm chưa rõ tôi sẽ xác nhận lại sau.",
            "acceptedAnswers": [
                "承知しました本日の内容については理解しました資料を確認して不明点があれば後ほど確認させてください"
            ]
        },
        {
            "id": 33,
            "speaker": "B",
            "japanese": "はい、お願いします。それでは、本日の説明は以上です。本日はありがとうございました。",
            "reading": "",
            "romaji": "",
            "english": "Yes, please. That is all for today's explanation. Thank you very much for today.",
            "vietnamese": "Vâng. Vậy hôm nay xin kết thúc phần giải thích tại đây. Cảm ơn mọi người.",
            "acceptedAnswers": [
                "はいお願いしますそれでは本日の説明は以上です本日はありがとうございました"
            ]
        }
    ]
};