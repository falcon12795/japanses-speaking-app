export default [
  {
    lesson: "Lesson 1: Greetings",
    dialogues: [
      {
        title: "Meeting for the first time",
        description: "Introducing yourself and asking where someone is from.",
        lines: [
          ["A", "안녕하세요? 처음 뵙겠습니다. 저는 김민수입니다.", "Xin chào! Lần đầu được gặp. Tôi là Kim Min-su."],
          ["B", "안녕하세요? 저는 란이에요.", "Xin chào! Tôi là Lan."],
          ["A", "란 씨는 어느 나라 사람이에요?", "Bạn Lan là người nước nào?"],
          ["B", "저는 베트남 사람이에요. 민수 씨는요?", "Tôi là người Việt Nam. Còn bạn Min-su?"],
          ["A", "저는 한국 사람이에요. 만나서 반갑습니다.", "Tôi là người Hàn Quốc. Rất vui được gặp bạn."],
          ["B", "저도 만나서 반갑습니다.", "Tôi cũng rất vui được gặp bạn."],
          ["A", "란 씨는 학생이에요?", "Bạn Lan là học sinh à?"],
          ["B", "네, 저는 대학생이에요.", "Vâng, tôi là sinh viên đại học."],
        ],
      },
      {
        title: "How are you today?",
        description: "Everyday greetings and small talk with a friend.",
        lines: [
          ["A", "안녕하세요? 오늘 기분이 어때요?", "Xin chào! Hôm nay tâm trạng bạn thế nào?"],
          ["B", "좋아요. 그런데 조금 피곤해요.", "Tốt. Nhưng tôi hơi mệt."],
          ["A", "왜요? 어제 늦게 잤어요?", "Tại sao? Hôm qua bạn ngủ muộn à?"],
          ["B", "네, 열두 시에 잤어요.", "Vâng, tôi đi ngủ lúc mười hai giờ."],
          ["A", "그럼 커피 한 잔 마실까요?", "Vậy chúng ta uống một ly cà phê nhé?"],
          ["B", "좋아요. 같이 마셔요.", "Được ạ. Cùng uống nhé."],
        ],
      },
    ],
  },
  {
    lesson: "Lesson 2: Daily Life",
    dialogues: [
      {
        title: "Ordering at a cafe",
        description: "Ordering a drink and paying by card.",
        lines: [
          ["A", "어서 오세요. 주문하시겠어요?", "Xin chào quý khách. Quý khách gọi món ạ?"],
          ["B", "아이스 아메리카노 한 잔 주세요.", "Cho tôi một ly Americano đá."],
          ["A", "다른 건 필요하세요?", "Quý khách cần gì thêm không ạ?"],
          ["B", "아니요, 괜찮아요. 얼마예요?", "Không, không cần. Bao nhiêu tiền ạ?"],
          ["A", "사천 원이에요.", "Bốn nghìn won ạ."],
          ["B", "카드로 계산할게요.", "Tôi sẽ thanh toán bằng thẻ."],
          ["A", "네, 여기 있어요. 감사합니다.", "Vâng, của quý khách đây ạ. Cảm ơn."],
          ["B", "감사합니다.", "Cảm ơn."],
        ],
      },
      {
        title: "Asking for directions",
        description: "Asking where the bank is and how far it is.",
        lines: [
          ["A", "실례합니다. 은행이 어디에 있어요?", "Xin lỗi. Ngân hàng ở đâu ạ?"],
          ["B", "저기 편의점이 보이죠?", "Bạn thấy cửa hàng tiện lợi ở đằng kia chứ?"],
          ["A", "네, 보여요.", "Vâng, tôi thấy."],
          ["B", "편의점 옆에 있어요.", "Ngân hàng ở bên cạnh cửa hàng tiện lợi."],
          ["A", "여기에서 멀어요?", "Từ đây có xa không?"],
          ["B", "아니요, 가까워요. 걸어서 오 분이에요.", "Không, gần thôi. Đi bộ năm phút."],
          ["A", "감사합니다.", "Cảm ơn bạn."],
          ["B", "아니에요.", "Không có gì."],
        ],
      },
    ],
  },
  {
    lesson: "Lesson 3: Eating & Shopping",
    dialogues: [
      {
        title: "At a restaurant",
        description: "Deciding what to eat and calling the waiter.",
        lines: [
          ["A", "뭐 먹을까요?", "Chúng ta ăn gì nhỉ?"],
          ["B", "저는 비빔밥을 먹고 싶어요.", "Tôi muốn ăn cơm trộn."],
          ["A", "저는 김치찌개를 먹을게요.", "Tôi sẽ ăn canh kim chi."],
          ["B", "조금 매워요. 괜찮아요?", "Hơi cay đấy. Bạn ổn chứ?"],
          ["A", "네, 저는 매운 음식을 좋아해요.", "Vâng, tôi thích đồ ăn cay."],
          ["B", "저기요, 비빔밥 하나, 김치찌개 하나 주세요.", "Xin lỗi, cho tôi một cơm trộn và một canh kim chi."],
        ],
      },
      {
        title: "Buying a shirt",
        description: "Asking the price and bargaining at a clothes shop.",
        lines: [
          ["A", "어서 오세요. 뭘 찾으세요?", "Xin chào. Quý khách tìm gì ạ?"],
          ["B", "흰색 셔츠를 사고 싶어요.", "Tôi muốn mua một chiếc áo sơ mi trắng."],
          ["A", "이거 어때요? 요즘 인기가 많아요.", "Cái này thế nào ạ? Dạo này được ưa chuộng lắm."],
          ["B", "예뻐요. 얼마예요?", "Đẹp quá. Bao nhiêu tiền ạ?"],
          ["A", "삼만 원이에요.", "Ba vạn won ạ."],
          ["B", "좀 비싸요. 깎아 주세요.", "Hơi đắt. Giảm giá cho tôi nhé."],
          ["A", "그럼 이만 오천 원에 드릴게요.", "Vậy tôi bán hai vạn năm nghìn won."],
          ["B", "네, 그걸로 주세요.", "Vâng, cho tôi cái đó."],
        ],
      },
    ],
  },
  {
    lesson: "Lesson 4: Making Plans",
    dialogues: [
      {
        title: "Weekend plans",
        description: "Planning to watch a movie together.",
        lines: [
          ["A", "주말에 뭐 할 거예요?", "Cuối tuần bạn sẽ làm gì?"],
          ["B", "친구랑 영화를 볼 거예요. 같이 갈까요?", "Tôi sẽ xem phim với bạn. Chúng ta cùng đi nhé?"],
          ["A", "좋아요. 몇 시에 만날까요?", "Được ạ. Mấy giờ chúng ta gặp?"],
          ["B", "오후 두 시에 어때요?", "Hai giờ chiều thì sao?"],
          ["A", "괜찮아요. 어디에서 만날까요?", "Được. Chúng ta gặp ở đâu?"],
          ["B", "극장 앞에서 만나요.", "Gặp nhau trước rạp chiếu phim nhé."],
          ["A", "네, 그때 봐요.", "Vâng, hẹn gặp lúc đó."],
        ],
      },
      {
        title: "A phone call",
        description: "Calling a friend to invite them to lunch.",
        lines: [
          ["A", "여보세요? 민수 씨, 지금 뭐 해요?", "Alo? Min-su, bây giờ bạn đang làm gì?"],
          ["B", "집에서 쉬고 있어요. 왜요?", "Tôi đang nghỉ ở nhà. Có chuyện gì vậy?"],
          ["A", "내일 시간 있어요?", "Ngày mai bạn có thời gian không?"],
          ["B", "네, 있어요. 무슨 일이에요?", "Có. Có việc gì vậy?"],
          ["A", "같이 점심을 먹고 싶어요.", "Tôi muốn cùng ăn trưa với bạn."],
          ["B", "좋아요. 몇 시에 만날까요?", "Được. Mấy giờ chúng ta gặp?"],
          ["A", "열두 시에 학교 앞에서 만나요.", "Mười hai giờ gặp trước trường nhé."],
          ["B", "알겠어요. 내일 봐요.", "Tôi hiểu rồi. Mai gặp nhé."],
        ],
      },
    ],
  },
];
