export default [
  {
    lesson: "Lesson 1",
    points: [
      {
        title: "N은/는 (trợ từ chủ đề)",
        usage: "N(có patchim) + 은 / N(không patchim) + 는",
        notes: [
          "은/는 gắn sau danh từ để đánh dấu chủ đề của câu (điều đang được nói đến).",
          "Danh từ kết thúc bằng phụ âm cuối (patchim) dùng 은, kết thúc bằng nguyên âm dùng 는.",
        ],
        meaningTitle: "Đánh dấu chủ đề của câu",
        meaning: "Dùng để giới thiệu chủ đề hoặc đối chiếu: 'còn về ... thì ...'.",
        examples: [
          ["저는 학생이에요.", "Tôi là học sinh."],
          ["이 책은 재미있어요.", "Quyển sách này thú vị."],
          ["오늘은 날씨가 좋아요.", "Hôm nay thời tiết đẹp."],
        ],
        note: "저 + 는 = 저는, 나 + 는 = 나는 (có thể viết gọn: 전, 난).",
        quiz: [
          ["저___ 한국 사람이에요.", ["은", "는", "이", "가"], 1, "저 không có patchim nên dùng 는."],
          ["책___ 재미있어요.", ["는", "은", "를", "도"], 1, "책 có patchim ㄱ nên dùng 은."],
          ["오늘___ 월요일이에요.", ["는", "은", "을", "를"], 1, "오늘 có patchim ㄹ nên dùng 은."],
        ],
      },
      {
        title: "N이/가 (trợ từ chủ ngữ)",
        usage: "N(có patchim) + 이 / N(không patchim) + 가",
        notes: [
          "이/가 đánh dấu chủ ngữ của câu, nhất là khi giới thiệu thông tin mới.",
          "Dùng với các động từ/tính từ như 있다, 없다, 좋다, 오다 (비가 오다).",
        ],
        meaningTitle: "Đánh dấu chủ ngữ",
        meaning: "Nhấn mạnh người hoặc vật thực hiện hành động hoặc ở trạng thái nào đó.",
        examples: [
          ["비가 와요.", "Trời mưa."],
          ["친구가 와요.", "Bạn đến."],
          ["날씨가 좋아요.", "Thời tiết đẹp."],
        ],
        note: "Với 저, 나, 누구 + 가 → 제가, 내가, 누가.",
        quiz: [
          ["눈___ 와요.", ["이", "가", "은", "는"], 0, "눈 có patchim nên dùng 이."],
          ["고양이___ 귀여워요.", ["이", "가", "은", "를"], 1, "고양이 không có patchim nên dùng 가."],
          ["비___ 와요.", ["이", "가", "을", "도"], 1, "비 không có patchim nên dùng 가."],
        ],
      },
      {
        title: "N이에요/예요 (là)",
        usage: "N(có patchim) + 이에요 / N(không patchim) + 예요",
        notes: [
          "Dùng để nói 'A là B' trong lối nói lịch sự thân mật (해요체).",
          "Dạng trang trọng là 입니다.",
        ],
        meaningTitle: "Khẳng định danh tính",
        meaning: "Dùng để nói ai/cái gì là gì: nghề nghiệp, quốc tịch, tên...",
        examples: [
          ["저는 학생이에요.", "Tôi là học sinh."],
          ["이것은 책이에요.", "Đây là quyển sách."],
          ["제 친구는 의사예요.", "Bạn tôi là bác sĩ."],
        ],
        note: "Khi hỏi: 이름이 뭐예요? (Tên bạn là gì?)",
        quiz: [
          ["저는 선생님___.", ["이에요", "예요", "이에", "가요"], 0, "선생님 có patchim ㅁ nên dùng 이에요."],
          ["저는 의사___.", ["이에요", "예요", "입니", "이야"], 1, "의사 không có patchim nên dùng 예요."],
          ["이것은 커피___.", ["이에요", "예요", "이예요", "에요"], 1, "커피 không có patchim nên dùng 예요."],
        ],
      },
      {
        title: "N이/가 아니에요 (không phải là)",
        usage: "N(có patchim) + 이 아니에요 / N(không patchim) + 가 아니에요",
        notes: [
          "Là dạng phủ định của 이에요/예요.",
          "Dạng trang trọng: 이/가 아닙니다.",
        ],
        meaningTitle: "Phủ định danh tính",
        meaning: "Dùng để nói 'A không phải là B'.",
        examples: [
          ["저는 학생이 아니에요.", "Tôi không phải là học sinh."],
          ["이것은 물이 아니에요.", "Đây không phải là nước."],
          ["저는 의사가 아니에요.", "Tôi không phải là bác sĩ."],
        ],
        note: "Câu trả lời ngắn: 아니요, 학생이 아니에요.",
        quiz: [
          ["저는 의사___ 아니에요.", ["이", "가", "은", "를"], 1, "의사 không có patchim nên dùng 가 아니에요."],
          ["이것은 책___ 아니에요.", ["이", "가", "를", "도"], 0, "책 có patchim nên dùng 이 아니에요."],
          ["그 사람은 한국 사람___ 아니에요.", ["가", "이", "는", "에"], 1, "사람 có patchim ㅁ nên dùng 이 아니에요."],
        ],
      },
      {
        title: "N을/를 (trợ từ tân ngữ)",
        usage: "N(có patchim) + 을 / N(không patchim) + 를",
        notes: [
          "을/를 đánh dấu tân ngữ trực tiếp của động từ.",
          "Trong văn nói, 을/를 thường được lược bỏ.",
        ],
        meaningTitle: "Đánh dấu tân ngữ",
        meaning: "Chỉ đối tượng chịu tác động của hành động.",
        examples: [
          ["밥을 먹어요.", "Tôi ăn cơm."],
          ["커피를 마셔요.", "Tôi uống cà phê."],
          ["영화를 봐요.", "Tôi xem phim."],
        ],
        note: "Một số động từ như 좋아하다 cũng đi với 을/를: 음악을 좋아해요.",
        quiz: [
          ["물___ 마셔요.", ["을", "를", "이", "가"], 0, "물 có patchim ㄹ nên dùng 을."],
          ["사과___ 먹어요.", ["을", "를", "은", "는"], 1, "사과 không có patchim nên dùng 를."],
          ["음악___ 들어요.", ["를", "을", "가", "도"], 1, "음악 có patchim ㄱ nên dùng 을."],
        ],
      },
    ],
  },
  {
    lesson: "Lesson 2",
    points: [
      {
        title: "N에 (địa điểm đến, thời gian, vị trí)",
        usage: "N + 에 + 가다/오다/있다",
        notes: [
          "에 chỉ nơi đến, nơi tồn tại hoặc mốc thời gian.",
          "Dùng với các động từ 가다, 오다, 있다, 살다 (ở).",
        ],
        meaningTitle: "Địa điểm đến / thời điểm",
        meaning: "Chỉ nơi hướng tới, nơi tồn tại hoặc thời điểm cụ thể.",
        examples: [
          ["학교에 가요.", "Tôi đi đến trường."],
          ["일곱 시에 일어나요.", "Tôi thức dậy lúc bảy giờ."],
          ["집에 있어요.", "Tôi ở nhà."],
        ],
        note: "Không dùng 에 sau 오늘, 어제, 내일, 지금.",
        quiz: [
          ["도서관___ 가요.", ["에", "에서", "을", "가"], 0, "Nơi đến của 가다 dùng 에."],
          ["아침 일곱 시___ 일어나요.", ["에서", "를", "에", "은"], 2, "Mốc thời gian dùng 에."],
          ["저는 서울___ 살아요.", ["에", "에서", "을", "이"], 0, "살다 (sống ở) đi với 에."],
        ],
      },
      {
        title: "N에서 (làm việc gì ở đâu)",
        usage: "N(địa điểm) + 에서 + động từ hành động",
        notes: [
          "에서 chỉ nơi diễn ra hành động.",
          "Ngoài ra, 에서 còn có nghĩa 'từ' (xuất phát điểm): 베트남에서 왔어요.",
        ],
        meaningTitle: "Nơi diễn ra hành động",
        meaning: "Dùng với động từ hành động như 먹다, 공부하다, 일하다.",
        examples: [
          ["도서관에서 공부해요.", "Tôi học ở thư viện."],
          ["회사에서 일해요.", "Tôi làm việc ở công ty."],
          ["식당에서 점심을 먹어요.", "Tôi ăn trưa ở nhà hàng."],
        ],
        note: "Với 있다/없다 dùng 에, không dùng 에서.",
        quiz: [
          ["카페___ 커피를 마셔요.", ["에", "에서", "를", "가"], 1, "Hành động 마시다 diễn ra ở quán nên dùng 에서."],
          ["학교___ 한국어를 공부해요.", ["에서", "에", "이", "을"], 0, "Hành động 공부하다 dùng 에서."],
          ["저는 집___ 있어요.", ["에서", "에", "를", "도"], 1, "있다 đi với 에."],
        ],
      },
      {
        title: "N도 (cũng)",
        usage: "N + 도",
        notes: [
          "도 thay thế 은/는, 이/가, 을/를 và mang nghĩa 'cũng'.",
          "Không dùng đồng thời 도 với 은/는.",
        ],
        meaningTitle: "Cũng",
        meaning: "Thêm một đối tượng khác vào cùng hành động hoặc trạng thái.",
        examples: [
          ["저도 학생이에요.", "Tôi cũng là học sinh."],
          ["커피도 마셔요.", "Tôi cũng uống cà phê."],
          ["친구도 와요.", "Bạn cũng đến."],
        ],
        note: "A: 저는 커피를 마셔요. B: 저도 마셔요.",
        quiz: [
          ["저는 학생이에요. 친구___ 학생이에요.", ["도", "만", "은", "에"], 0, "'Cũng' dùng 도."],
          ["A: 저는 커피를 마셔요. B: 저___ 커피를 마셔요.", ["도", "를", "만", "에"], 0, "'Tôi cũng' là 저도."],
          ["사과도 좋아하고 바나나___ 좋아해요.", ["를", "만", "도", "에"], 2, "'Cũng thích chuối' dùng 도."],
        ],
      },
      {
        title: "N와/과, N(이)랑 (và, cùng với)",
        usage: "N(không patchim) + 와 / N(có patchim) + 과 ; N(không patchim) + 랑 / N(có patchim) + 이랑",
        notes: [
          "Nối hai danh từ ('A và B') hoặc chỉ người cùng làm việc ('cùng với A').",
          "와/과 trang trọng hơn, (이)랑 dùng trong văn nói.",
        ],
        meaningTitle: "Và / cùng với",
        meaning: "Liệt kê danh từ hoặc nói về người đi cùng.",
        examples: [
          ["친구와 영화를 봐요.", "Tôi xem phim với bạn."],
          ["엄마랑 시장에 가요.", "Tôi đi chợ với mẹ."],
          ["빵과 우유를 샀어요.", "Tôi đã mua bánh mì và sữa."],
        ],
        note: "'(이)랑' cũng có thể dùng để liệt kê: 사과랑 바나나.",
        quiz: [
          ["친구___ 같이 가요.", ["와", "과", "을", "를"], 0, "친구 không có patchim nên dùng 와."],
          ["책___ 연필을 샀어요.", ["와", "과", "는", "도"], 1, "책 có patchim nên dùng 과."],
          ["엄마___ 같이 갔어요.", ["랑", "이랑", "을", "도"], 0, "엄마 không có patchim nên dùng 랑."],
        ],
      },
      {
        title: "있어요 / 없어요 (có / không có)",
        usage: "N이/가 + 있어요 / 없어요",
        notes: [
          "있다: có, ở; 없다: không có, không ở.",
          "Dạng kính ngữ của 있다 (ở) là 계시다.",
        ],
        meaningTitle: "Sự tồn tại và sở hữu",
        meaning: "Nói về việc có/không có vật, người hoặc thời gian.",
        examples: [
          ["집에 고양이가 있어요.", "Ở nhà có con mèo."],
          ["돈이 없어요.", "Tôi không có tiền."],
          ["시간이 있어요?", "Bạn có thời gian không?"],
        ],
        note: "Để nói sở hữu: 저는 동생이 있어요. (Tôi có em.)",
        quiz: [
          ["A: 시간이 있어요? B: 아니요, 바빠서 시간이 ___.", ["없어요", "있어요", "아니에요", "이에요"], 0, "Không có thời gian → 없어요."],
          ["우리 집에는 고양이가 한 마리 ___.", ["있어요", "없어요", "와요", "가요"], 0, "'Có một con mèo' → 있어요."],
          ["'있어요'의 반대말은 무엇이에요?", ["없어요", "가요", "와요", "좋아요"], 0, "Từ trái nghĩa của 있다 là 없다."],
        ],
      },
    ],
  },
  {
    lesson: "Lesson 3",
    points: [
      {
        title: "V-아요/어요 (hiện tại thân mật lịch sự)",
        usage: "Gốc động từ + 아요/어요 (ㅏ,ㅗ → 아요; còn lại → 어요; 하다 → 해요)",
        notes: [
          "Là kiểu nói lịch sự thông dụng nhất trong giao tiếp hằng ngày.",
          "Thân từ kết thúc bằng ㅏ hoặc ㅗ dùng 아요, các nguyên âm khác dùng 어요, 하다 → 해요.",
        ],
        meaningTitle: "Hiện tại / thói quen",
        meaning: "Nói về hành động hiện tại, thói quen, hoặc tương lai gần trong văn nói.",
        examples: [
          ["학교에 가요.", "Tôi đi đến trường."],
          ["밥을 먹어요.", "Tôi ăn cơm."],
          ["한국어를 공부해요.", "Tôi học tiếng Hàn."],
        ],
        note: "Câu hỏi và câu kể giống nhau, chỉ khác ngữ điệu: 먹어요? / 먹어요.",
        quiz: [
          ["먹다 → 먹___", ["아요", "어요", "해요", "여요"], 1, "먹 có nguyên âm ㅓ nên dùng 어요."],
          ["좋다 → 좋___", ["아요", "어요", "해요", "여요"], 0, "좋 có nguyên âm ㅗ nên dùng 아요."],
          ["공부하다 → ___", ["공부해요", "공부하아요", "공부하요", "공부했요"], 0, "하다 → 해요."],
        ],
      },
      {
        title: "V-ㅂ니다/습니다 (hiện tại trang trọng)",
        usage: "Gốc không patchim + ㅂ니다 / Gốc có patchim + 습니다",
        notes: [
          "Dùng trong ngữ cảnh trang trọng: bản tin, phát biểu, công việc, gặp người lần đầu.",
          "Câu hỏi: -ㅂ니까?/-습니까?",
        ],
        meaningTitle: "Hiện tại (trang trọng)",
        meaning: "Cách nói lịch sự, trang trọng nhất trong tiếng Hàn.",
        examples: [
          ["감사합니다.", "Xin cảm ơn."],
          ["저는 학생입니다.", "Tôi là học sinh."],
          ["밥을 먹습니다.", "Tôi ăn cơm."],
        ],
        note: "Gốc kết thúc bằng ㄹ bỏ ㄹ: 살다 → 삽니다.",
        quiz: [
          ["먹다 → 먹___", ["ㅂ니다", "습니다", "어요", "는다"], 1, "먹 có patchim nên dùng 습니다."],
          ["가다 → ___", ["갑니다", "갑습니다", "가습니다", "가ㅂ니다"], 0, "가 không có patchim nên thêm ㅂ니다 → 갑니다."],
          ["하다 → ___", ["합니다", "합습니다", "하습니다", "해습니다"], 0, "하 + ㅂ니다 = 합니다."],
        ],
      },
      {
        title: "V-았/었어요 (quá khứ)",
        usage: "Gốc động từ + 았어요/었어요 (하다 → 했어요)",
        notes: [
          "Cách chọn 았/었 giống 아요/어요: ㅏ,ㅗ → 았, còn lại → 었.",
          "Dạng trang trọng: -았/었습니다.",
        ],
        meaningTitle: "Hành động đã xảy ra",
        meaning: "Nói về hành động hoặc trạng thái trong quá khứ.",
        examples: [
          ["어제 영화를 봤어요.", "Hôm qua tôi đã xem phim."],
          ["점심을 먹었어요.", "Tôi đã ăn trưa."],
          ["숙제를 했어요.", "Tôi đã làm bài tập."],
        ],
        note: "이에요/예요 → 이었어요/였어요.",
        quiz: [
          ["어제 친구를 ___. (만나다)", ["만났어요", "만나요", "만날 거예요", "만나었어요"], 0, "만나 + 았어요 → 만났어요."],
          ["아침에 밥을 ___. (먹다)", ["먹었어요", "먹았어요", "먹어요", "먹을 거예요"], 0, "먹 + 었어요 = 먹었어요."],
          ["지난주에 한국어를 ___. (공부하다)", ["공부했어요", "공부하었어요", "공부해요", "공부할 거예요"], 0, "하다 → 했어요."],
        ],
      },
      {
        title: "V-(으)ㄹ 거예요 (tương lai, dự định)",
        usage: "Gốc không patchim + ㄹ 거예요 / Gốc có patchim + 을 거예요",
        notes: [
          "Diễn đạt dự định hoặc dự đoán trong tương lai.",
          "Với ngôi thứ nhất là dự định, với ngôi thứ ba là phỏng đoán.",
        ],
        meaningTitle: "Tương lai / dự định",
        meaning: "Nói về điều sẽ làm hoặc sẽ xảy ra.",
        examples: [
          ["내일 친구를 만날 거예요.", "Ngày mai tôi sẽ gặp bạn."],
          ["주말에 영화를 볼 거예요.", "Cuối tuần tôi sẽ xem phim."],
          ["저녁에 책을 읽을 거예요.", "Buổi tối tôi sẽ đọc sách."],
        ],
        note: "Gốc kết thúc bằng ㄹ chỉ thêm 거예요: 살다 → 살 거예요.",
        quiz: [
          ["내일 학교에 ___. (가다)", ["갈 거예요", "간 거예요", "가요", "갔어요"], 0, "가 + ㄹ 거예요 = 갈 거예요."],
          ["주말에 책을 ___. (읽다)", ["읽을 거예요", "읽ㄹ 거예요", "읽은 거예요", "읽는 거예요"], 0, "읽 có patchim nên dùng 을 거예요."],
          ["다음 달에 한국에 ___. (오다)", ["올 거예요", "왔어요", "와요", "온 거예요"], 0, "오 + ㄹ 거예요 = 올 거예요."],
        ],
      },
      {
        title: "V-고 싶어요 (muốn)",
        usage: "Gốc động từ + 고 싶어요",
        notes: [
          "Diễn tả mong muốn của người nói (ngôi thứ nhất) hoặc hỏi người nghe.",
          "Với ngôi thứ ba dùng -고 싶어 하다.",
        ],
        meaningTitle: "Mong muốn",
        meaning: "Nói điều mình muốn làm.",
        examples: [
          ["한국에 가고 싶어요.", "Tôi muốn đi Hàn Quốc."],
          ["커피를 마시고 싶어요.", "Tôi muốn uống cà phê."],
          ["집에서 쉬고 싶어요.", "Tôi muốn nghỉ ngơi ở nhà."],
        ],
        note: "Với danh từ dùng 을/를 hoặc 이/가: 커피(를/가) 마시고 싶어요.",
        quiz: [
          ["저는 한국 음식을 먹___ 싶어요.", ["고", "어서", "으면", "지만"], 0, "Mong muốn: V-고 싶어요."],
          ["물을 마시고 ___.", ["싶어요", "있어요", "좋아요", "해요"], 0, "V-고 싶어요 = muốn."],
          ["A: 뭐 하고 싶어요? B: 영화를 ___.", ["보고 싶어요", "봐요 싶어요", "볼 싶어요", "보고요 싶어요"], 0, "Muốn xem phim → 보고 싶어요."],
        ],
      },
      {
        title: "V-(으)세요 (xin hãy / kính ngữ)",
        usage: "Gốc không patchim + 세요 / Gốc có patchim + 으세요",
        notes: [
          "Dùng để đề nghị lịch sự (hãy...) hoặc nói kính ngữ về người lớn tuổi, người trên.",
          "Một số động từ có dạng kính ngữ riêng: 먹다 → 드시다, 자다 → 주무시다, 있다 → 계시다.",
        ],
        meaningTitle: "Đề nghị lịch sự / kính ngữ",
        meaning: "Bảo ai làm gì một cách lịch sự hoặc nói về hành động của người đáng kính.",
        examples: [
          ["여기에 앉으세요.", "Xin mời ngồi ở đây."],
          ["안녕히 가세요.", "Xin đi cẩn thận."],
          ["선생님은 책을 읽으세요.", "Thầy giáo đang đọc sách."],
        ],
        note: "Gốc kết thúc bằng ㄹ bỏ ㄹ: 만들다 → 만드세요.",
        quiz: [
          ["여기 앉___.", ["으세요", "세요", "아요", "어요"], 0, "앉 có patchim nên dùng 으세요."],
          ["빨리 오___.", ["세요", "으세요", "아요", "어요"], 0, "오 không có patchim nên dùng 세요."],
          ["문을 닫___.", ["으세요", "세요", "아세요", "어세요"], 0, "닫 có patchim ㄷ nên dùng 으세요."],
        ],
      },
    ],
  },
  {
    lesson: "Lesson 4",
    points: [
      {
        title: "안 + V (phủ định)",
        usage: "안 + động từ / tính từ ; 하다 → 동사 + 안 해요",
        notes: [
          "안 đặt trước động từ hoặc tính từ để phủ định.",
          "Với động từ dạng N하다, đặt 안 trước 하다: 공부 안 해요.",
        ],
        meaningTitle: "Phủ định đơn giản",
        meaning: "Nói 'không làm', 'không phải' theo ý chí hoặc trạng thái.",
        examples: [
          ["저는 고기를 안 먹어요.", "Tôi không ăn thịt."],
          ["오늘은 학교에 안 가요.", "Hôm nay tôi không đến trường."],
          ["날씨가 안 좋아요.", "Thời tiết không tốt."],
        ],
        note: "'못' diễn tả không thể làm: 못 가요 (không đi được).",
        quiz: [
          ["저는 커피를 ___ 마셔요.", ["안", "못", "없", "아니"], 0, "Không uống (theo ý chí) → 안."],
          ["오늘은 운동 ___ 해요.", ["안", "못", "아니", "없"], 0, "공부하다/운동하다 → 운동 안 해요."],
          ["날씨가 ___ 좋아요.", ["안", "못", "아니", "없"], 0, "Tính từ phủ định dùng 안."],
        ],
      },
      {
        title: "V-(으)ㄹ까요? (rủ rê, hỏi ý kiến)",
        usage: "Gốc không patchim + ㄹ까요? / Gốc có patchim + 을까요?",
        notes: [
          "Dùng để đề nghị cùng làm gì hoặc hỏi ý kiến người nghe.",
          "Câu trả lời thường là -(으)ㅂ시다 hoặc -아요/어요.",
        ],
        meaningTitle: "Đề nghị / hỏi ý kiến",
        meaning: "'Chúng ta cùng ... nhé?' hoặc 'Tôi ... nhé?'",
        examples: [
          ["같이 점심 먹을까요?", "Chúng ta cùng ăn trưa nhé?"],
          ["어디에서 만날까요?", "Chúng ta gặp nhau ở đâu nhỉ?"],
          ["영화를 볼까요?", "Chúng ta xem phim nhé?"],
        ],
        note: "Đồng ý: 좋아요, 같이 가요.",
        quiz: [
          ["우리 같이 영화를 ___? (보다)", ["볼까요", "봐요", "봤어요", "보고요"], 0, "Rủ rê → 볼까요?"],
          ["뭘 ___? (먹다)", ["먹을까요", "먹까요", "먹은까요", "먹어까요"], 0, "먹 có patchim nên dùng 을까요."],
          ["A: 같이 갈까요? B: ___", ["좋아요. 같이 가요.", "좋아요. 같이 갔어요.", "아니에요. 학생이에요.", "있어요. 같이 가요?"], 0, "Đồng ý lời rủ: 좋아요. 같이 가요."],
        ],
      },
      {
        title: "A/V-아서/어서 (vì, nên / rồi)",
        usage: "Gốc + 아서/어서 (하다 → 해서)",
        notes: [
          "Nối lý do với kết quả: 'vì ... nên ...'.",
          "Cũng dùng để nối hai hành động liên tiếp: 'làm ... rồi làm ...'.",
          "Không dùng với thì quá khứ (았/었) ở vế trước và với đề nghị/mệnh lệnh ở vế sau.",
        ],
        meaningTitle: "Nguyên nhân / trình tự",
        meaning: "Chỉ nguyên nhân hoặc hành động diễn ra theo trình tự.",
        examples: [
          ["비가 와서 집에 있어요.", "Vì trời mưa nên tôi ở nhà."],
          ["피곤해서 일찍 잤어요.", "Vì mệt nên tôi đã đi ngủ sớm."],
          ["친구를 만나서 영화를 봤어요.", "Tôi đã gặp bạn rồi xem phim."],
        ],
        note: "N이라서/라서: 학생이라서 (vì là học sinh).",
        quiz: [
          ["비가 ___ 우산을 썼어요. (오다)", ["와서", "오서", "오아서", "왔서"], 0, "오 + 아서 → 와서."],
          ["너무 ___ 잠을 잤어요. (피곤하다)", ["피곤해서", "피곤하서", "피곤하어서", "피곤하아서"], 0, "하다 → 해서."],
          ["친구가 ___ 같이 놀았어요. (오다)", ["와서", "오서", "왔서", "오고서"], 0, "오 + 아서 → 와서."],
        ],
      },
      {
        title: "V-고 (và, rồi)",
        usage: "Gốc động từ/tính từ + 고",
        notes: [
          "Nối hai vế câu có quan hệ ngang hàng hoặc theo thứ tự.",
          "Không thay đổi dạng theo patchim.",
        ],
        meaningTitle: "Liệt kê / nối tiếp",
        meaning: "'Và' (liệt kê) hoặc 'rồi' (hành động nối tiếp).",
        examples: [
          ["밥을 먹고 커피를 마셔요.", "Tôi ăn cơm rồi uống cà phê."],
          ["저는 학생이고 친구는 의사예요.", "Tôi là học sinh còn bạn tôi là bác sĩ."],
          ["책을 읽고 잤어요.", "Tôi đọc sách rồi đi ngủ."],
        ],
        note: "Thì quá khứ chỉ cần ở vế cuối: 먹고 갔어요.",
        quiz: [
          ["집에 가___ 쉬어요.", ["고", "서", "면", "니까"], 0, "'Về nhà rồi nghỉ' dùng -고."],
          ["아침을 먹___ 학교에 가요.", ["고", "어서", "으면", "지만"], 0, "Hành động nối tiếp dùng -고."],
          ["이 음식은 맛있___ 싸요.", ["고", "서", "면", "지만"], 0, "Liệt kê hai tính chất dùng -고."],
        ],
      },
    ],
  },
];
