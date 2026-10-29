export default [
  {
    lesson: "Lesson 1",
    points: [
      {
        title: "V-(으)려고 (để, với ý định)",
        usage: "Gốc không patchim + 려고 / Gốc có patchim + 으려고",
        notes: [
          "Diễn tả mục đích hoặc ý định của hành động ở vế sau.",
          "Chủ ngữ hai vế phải giống nhau; vế sau không dùng thì tương lai.",
        ],
        meaningTitle: "Mục đích, ý định",
        meaning: "'Để ...', 'định ...' — nói về lý do mà ai đó thực hiện hành động.",
        examples: [
          ["한국어를 배우려고 한국에 왔어요.", "Tôi đã đến Hàn Quốc để học tiếng Hàn."],
          ["친구를 만나려고 명동에 가요.", "Tôi đến Myeongdong để gặp bạn."],
          ["책을 읽으려고 도서관에 왔어요.", "Tôi đã đến thư viện để đọc sách."],
        ],
        note: "Có thể dùng dạng V-(으)려고 하다 để nói 'định làm'.",
        quiz: [
          ["한국어를 배우___ 학원에 다녀요.", ["려고", "으려고", "어서", "면"], 0, "배우 không có patchim nên dùng 려고."],
          ["친구를 만나___ 명동에 가요.", ["려고", "으려고", "고", "서"], 0, "만나 không có patchim nên dùng 려고."],
          ["책을 읽___ 도서관에 왔어요.", ["려고", "으려고", "어서", "고"], 1, "읽 có patchim nên dùng 으려고."],
        ],
      },
      {
        title: "V-는/(으)ㄴ/(으)ㄹ N (định ngữ)",
        usage: "Hiện tại: V-는 N / Quá khứ: V-(으)ㄴ N / Tương lai: V-(으)ㄹ N",
        notes: [
          "Động từ bổ nghĩa cho danh từ đứng sau nó.",
          "Hiện tại dùng 는, quá khứ dùng (으)ㄴ, tương lai/dự đoán dùng (으)ㄹ.",
        ],
        meaningTitle: "Động từ bổ nghĩa cho danh từ",
        meaning: "Tương đương mệnh đề quan hệ: 'người/vật mà ...'.",
        examples: [
          ["지금 먹는 음식이 맛있어요.", "Món tôi đang ăn rất ngon."],
          ["어제 본 영화가 재미있었어요.", "Bộ phim tôi xem hôm qua rất hay."],
          ["내일 만날 친구는 한국 사람이에요.", "Người bạn tôi sẽ gặp ngày mai là người Hàn."],
        ],
        note: "Với tính từ: A-(으)ㄴ N (예쁜 꽃).",
        quiz: [
          ["어제 ___ 영화가 재미있었어요. (보다)", ["본", "보는", "볼", "봤는"], 0, "Quá khứ → 본."],
          ["지금 ___ 책이 재미있어요. (읽다)", ["읽는", "읽은", "읽을", "읽었"], 0, "Hiện tại → 읽는."],
          ["내일 ___ 사람은 선생님이에요. (만나다)", ["만날", "만난", "만나는", "만났는"], 0, "Tương lai → 만날."],
        ],
      },
      {
        title: "V-(으)면 (nếu, khi)",
        usage: "Gốc không patchim + 면 / Gốc có patchim + 으면",
        notes: [
          "Diễn tả điều kiện giả định hoặc thói quen lặp lại.",
          "Vế sau có thể là đề nghị, mệnh lệnh, dự đoán.",
        ],
        meaningTitle: "Điều kiện",
        meaning: "'Nếu ... thì ...' hoặc 'mỗi khi ...'.",
        examples: [
          ["비가 오면 집에 있을 거예요.", "Nếu trời mưa tôi sẽ ở nhà."],
          ["시간이 있으면 같이 가요.", "Nếu có thời gian thì cùng đi nhé."],
          ["피곤하면 쉬세요.", "Nếu mệt thì hãy nghỉ đi."],
        ],
        note: "Gốc kết thúc bằng ㄹ: 살다 → 살면.",
        quiz: [
          ["내일 비가 ___ 안 가요. (오다)", ["오면", "오으면", "와면", "오니"], 0, "오 không có patchim nên dùng 면."],
          ["시간이 ___ 전화하세요. (있다)", ["있으면", "있면", "있어면", "있으니"], 0, "있 có patchim nên dùng 으면."],
          ["돈이 ___ 여행을 갈 거예요. (많다)", ["많으면", "많면", "많아면", "많으니까"], 0, "많 có patchim nên dùng 으면."],
        ],
      },
      {
        title: "V-아/어도 되다 (được phép)",
        usage: "Gốc + 아도/어도 되다",
        notes: [
          "Dùng để xin phép hoặc cho phép làm gì.",
          "Dạng hỏi: -아/어도 돼요? Trả lời: 네, -아/어도 돼요.",
        ],
        meaningTitle: "Cho phép",
        meaning: "'Làm ... cũng được', 'có thể làm ... không?'.",
        examples: [
          ["여기에 앉아도 돼요?", "Tôi ngồi đây được không?"],
          ["사진을 찍어도 돼요.", "Chụp ảnh cũng được."],
          ["창문을 열어도 돼요?", "Tôi mở cửa sổ được không?"],
        ],
        note: "Từ chối: 아니요, -(으)면 안 돼요.",
        quiz: [
          ["여기에서 사진을 찍___ 돼요?", ["어도", "으면", "아서", "고"], 0, "찍 có nguyên âm ㅣ nên dùng 어도."],
          ["여기 앉___ 돼요?", ["아도", "어도", "으면", "고"], 0, "앉 có nguyên âm ㅏ nên dùng 아도."],
          ["물을 마셔___ 돼요?", ["도", "서", "면", "고"], 0, "마셔도 돼요: Uống nước được không?"],
        ],
      },
      {
        title: "V-(으)면 안 되다 (không được)",
        usage: "Gốc không patchim + 면 안 되다 / Gốc có patchim + 으면 안 되다",
        notes: [
          "Dùng để cấm đoán hoặc nói điều không nên làm.",
          "Là cặp đối lập với -아/어도 되다.",
        ],
        meaningTitle: "Cấm đoán",
        meaning: "'Nếu làm ... thì không được' = 'không được làm ...'.",
        examples: [
          ["여기에서 담배를 피우면 안 돼요.", "Không được hút thuốc ở đây."],
          ["수업 시간에 자면 안 돼요.", "Không được ngủ trong giờ học."],
          ["늦으면 안 돼요.", "Không được đến muộn."],
        ],
        note: "Có thể rút gọn: 안 돼요 → 안 돼.",
        quiz: [
          ["도서관에서 크게 말하___ 안 돼요.", ["면", "아도", "고", "어서"], 0, "말하 không có patchim nên dùng 면."],
          ["A: 여기에서 사진을 찍어도 돼요? B: 아니요, 찍___ 안 돼요.", ["으면", "어도", "면", "고"], 0, "찍 có patchim nên dùng 으면."],
          ["교실에서 먹___ 안 돼요.", ["으면", "면", "아도", "어서"], 0, "먹 có patchim nên dùng 으면."],
        ],
      },
    ],
  },
  {
    lesson: "Lesson 2",
    points: [
      {
        title: "V-아/어야 하다 (phải, cần phải)",
        usage: "Gốc + 아야/어야 하다 (하다 → 해야 하다)",
        notes: [
          "Diễn tả nghĩa vụ hoặc sự cần thiết.",
          "Còn dùng dạng -아/어야 되다 với nghĩa tương tự.",
        ],
        meaningTitle: "Nghĩa vụ, sự cần thiết",
        meaning: "'Phải ...', 'cần ...'.",
        examples: [
          ["내일 일찍 일어나야 해요.", "Ngày mai tôi phải dậy sớm."],
          ["숙제를 해야 해요.", "Tôi phải làm bài tập."],
          ["병원에 가야 해요.", "Tôi phải đi bệnh viện."],
        ],
        note: "Quá khứ: -아/어야 했어요.",
        quiz: [
          ["시험이 있어서 공부___ 해요.", ["해야", "하면", "하고", "해서"], 0, "Nghĩa vụ → 해야 해요."],
          ["일찍 자___ 해요.", ["야", "아야", "어야", "면"], 0, "자 + 아야 → 자야 해요."],
          ["약을 먹___ 해요.", ["어야", "아야", "으면", "고"], 0, "먹 có nguyên âm ㅓ nên dùng 어야."],
        ],
      },
      {
        title: "V-(으)ㄹ 수 있다/없다 (có thể / không thể)",
        usage: "Gốc không patchim + ㄹ 수 있다 / Gốc có patchim + 을 수 있다",
        notes: [
          "Diễn tả khả năng hoặc cho phép.",
          "Phủ định: -(으)ㄹ 수 없다 hoặc 못 + V.",
        ],
        meaningTitle: "Khả năng",
        meaning: "'Có thể làm ...', 'không thể làm ...'.",
        examples: [
          ["저는 한국어를 할 수 있어요.", "Tôi có thể nói tiếng Hàn."],
          ["수영할 수 없어요.", "Tôi không biết bơi."],
          ["매운 음식을 먹을 수 있어요?", "Bạn ăn được đồ cay không?"],
        ],
        note: "Gốc kết thúc bằng ㄹ: 만들다 → 만들 수 있어요.",
        quiz: [
          ["저는 운전___ 수 있어요.", ["할", "한", "하는", "하고"], 0, "하 + ㄹ 수 있다 → 할 수 있다."],
          ["한국 노래를 부를 ___ 있어요?", ["수", "것", "거", "때"], 0, "Cấu trúc cố định: -(으)ㄹ 수 있다."],
          ["피아노를 칠 ___ 없어요.", ["수", "것", "줄", "때"], 0, "-(으)ㄹ 수 없다 = không thể."],
        ],
      },
      {
        title: "V-고 있다 (đang làm)",
        usage: "Gốc động từ + 고 있다",
        notes: [
          "Diễn tả hành động đang diễn ra hoặc trạng thái đang tiếp diễn.",
          "Dạng kính ngữ: -고 계시다.",
        ],
        meaningTitle: "Hành động đang diễn ra",
        meaning: "'Đang ...'.",
        examples: [
          ["지금 밥을 먹고 있어요.", "Bây giờ tôi đang ăn cơm."],
          ["친구를 기다리고 있어요.", "Tôi đang chờ bạn."],
          ["한국어를 공부하고 있어요.", "Tôi đang học tiếng Hàn."],
        ],
        note: "Danh từ + 중이다: 회의 중이에요. (Đang họp.)",
        quiz: [
          ["지금 한국어를 공부하___ 있어요.", ["고", "면", "서", "지"], 0, "V-고 있다 = đang làm."],
          ["A: 뭐 해요? B: 영화를 보___ 있어요.", ["고", "면", "아서", "으니까"], 0, "Đang xem phim → 보고 있어요."],
          ["지금 전화하는 ___이에요.", ["중", "때", "수", "것"], 0, "V-는 중이다 = đang làm."],
        ],
      },
      {
        title: "V-(으)니까 (vì ... nên)",
        usage: "Gốc không patchim + 니까 / Gốc có patchim + 으니까",
        notes: [
          "Nêu lý do cho một đề nghị, mệnh lệnh hoặc rủ rê ở vế sau.",
          "Có thể dùng với thì quá khứ (았/었으니까).",
        ],
        meaningTitle: "Lý do (đề nghị / mệnh lệnh)",
        meaning: "'Vì ... nên (hãy) ...'.",
        examples: [
          ["비가 오니까 우산을 쓰세요.", "Vì trời mưa nên hãy che ô."],
          ["추우니까 따뜻하게 입으세요.", "Vì lạnh nên hãy mặc ấm."],
          ["시간이 없으니까 택시를 타요.", "Vì không có thời gian nên đi taxi thôi."],
        ],
        note: "-아/어서 không dùng được với đề nghị hoặc mệnh lệnh ở vế sau.",
        quiz: [
          ["늦었___ 빨리 가세요.", ["으니까", "어서", "으면", "고"], 0, "Vế sau là mệnh lệnh nên dùng -(으)니까."],
          ["피곤하___ 일찍 쉬세요.", ["니까", "으니까", "아서", "어서"], 0, "피곤하 không có patchim nên dùng 니까."],
          ["날씨가 좋___ 산책해요.", ["으니까", "니까", "어서", "면"], 0, "좋 có patchim nên dùng 으니까."],
        ],
      },
      {
        title: "V-기 전에 / V-(으)ㄴ 후에 (trước khi / sau khi)",
        usage: "V-기 전에 ; Gốc không patchim + ㄴ 후에 / Gốc có patchim + 은 후에",
        notes: [
          "-기 전에 diễn tả 'trước khi làm ...' và không thay đổi theo patchim.",
          "-(으)ㄴ 후에 diễn tả 'sau khi làm ...'.",
        ],
        meaningTitle: "Trước / sau một hành động",
        meaning: "Chỉ trình tự thời gian giữa hai hành động.",
        examples: [
          ["자기 전에 이를 닦아요.", "Trước khi ngủ tôi đánh răng."],
          ["밥을 먹은 후에 커피를 마셔요.", "Sau khi ăn cơm tôi uống cà phê."],
          ["수업이 끝난 후에 만나요.", "Sau khi hết giờ học chúng ta gặp nhau nhé."],
        ],
        note: "Có thể dùng với danh từ: 식사 전에, 수업 후에.",
        quiz: [
          ["자___ 전에 책을 읽어요.", ["기", "는", "은", "을"], 0, "V-기 전에 = trước khi."],
          ["밥을 먹___ 후에 산책해요.", ["은", "는", "을", "기"], 0, "먹 có patchim nên dùng 은 후에."],
          ["운동하기 ___ 준비 운동을 해요.", ["전에", "후에", "때문에", "동안"], 0, "Khởi động trước khi tập → 전에."],
        ],
      },
    ],
  },
];
