// English sounds (General American). tip: how to produce the sound, written for Vietnamese learners.
// words[0] is the word spoken aloud when the sound is selected.
export const EN_SOUND_GROUPS = [
  { id: "vowel", label: "Vowels", description: "Single vowel sounds (mouth shape stays the same)." },
  { id: "diphthong", label: "Diphthongs", description: "Two vowel sounds glided together." },
  { id: "consonant", label: "Consonants", description: "Sounds made by blocking or narrowing the airflow." },
];

export const EN_SOUNDS = [
  // Vowels
  { id: "i-long", ipa: "/iː/", type: "vowel", name: "Long ee", tip: "Kéo môi sang hai bên như cười, lưỡi cao, kéo dài âm. Giống 'i' tiếng Việt nhưng dài hơn.", words: [
    { word: "see", ipa: "/siː/", vi: "Nhìn thấy" },
    { word: "green", ipa: "/ɡriːn/", vi: "Màu xanh lá" },
    { word: "team", ipa: "/tiːm/", vi: "Đội" },
  ] },
  { id: "i-short", ipa: "/ɪ/", type: "vowel", name: "Short i", tip: "Âm 'i' ngắn, môi thả lỏng, lưỡi thấp hơn /iː/. Nằm giữa 'i' và 'ê' tiếng Việt.", words: [
    { word: "sit", ipa: "/sɪt/", vi: "Ngồi" },
    { word: "big", ipa: "/bɪɡ/", vi: "To" },
    { word: "fish", ipa: "/fɪʃ/", vi: "Con cá" },
  ] },
  { id: "e", ipa: "/e/", type: "vowel", name: "Short e", tip: "Giống 'e' tiếng Việt trong 'xe', miệng mở vừa phải.", words: [
    { word: "bed", ipa: "/bed/", vi: "Cái giường" },
    { word: "ten", ipa: "/ten/", vi: "Số mười" },
    { word: "red", ipa: "/red/", vi: "Màu đỏ" },
  ] },
  { id: "ae", ipa: "/æ/", type: "vowel", name: "Short a", tip: "Mở miệng rộng, hàm dưới hạ thấp, giữa 'a' và 'e'. Không đọc thành 'e'.", words: [
    { word: "cat", ipa: "/kæt/", vi: "Con mèo" },
    { word: "apple", ipa: "/ˈæp.əl/", vi: "Quả táo" },
    { word: "hand", ipa: "/hænd/", vi: "Bàn tay" },
  ] },
  { id: "a-long", ipa: "/ɑː/", type: "vowel", name: "Long ah", tip: "Há miệng to, lưỡi hạ thấp và lùi về sau, kéo dài như 'a' khi bác sĩ bảo há miệng.", words: [
    { word: "father", ipa: "/ˈfɑː.ðər/", vi: "Bố" },
    { word: "hot", ipa: "/hɑːt/", vi: "Nóng" },
    { word: "car", ipa: "/kɑːr/", vi: "Ô tô" },
  ] },
  { id: "o-long", ipa: "/ɔː/", type: "vowel", name: "Long aw", tip: "Tròn môi, miệng mở vừa, giống 'o' tiếng Việt nhưng dài và tròn môi hơn.", words: [
    { word: "ball", ipa: "/bɔːl/", vi: "Quả bóng" },
    { word: "water", ipa: "/ˈwɔː.tər/", vi: "Nước" },
    { word: "talk", ipa: "/tɔːk/", vi: "Nói chuyện" },
  ] },
  { id: "u-short", ipa: "/ʊ/", type: "vowel", name: "Short oo", tip: "Môi tròn nhẹ, thả lỏng, ngắn. Không tròn và căng như 'u' tiếng Việt.", words: [
    { word: "book", ipa: "/bʊk/", vi: "Quyển sách" },
    { word: "good", ipa: "/ɡʊd/", vi: "Tốt" },
    { word: "put", ipa: "/pʊt/", vi: "Đặt" },
  ] },
  { id: "u-long", ipa: "/uː/", type: "vowel", name: "Long oo", tip: "Chu môi tròn và nhô ra trước, lưỡi lùi và cao, kéo dài âm.", words: [
    { word: "blue", ipa: "/bluː/", vi: "Màu xanh dương" },
    { word: "food", ipa: "/fuːd/", vi: "Thức ăn" },
    { word: "school", ipa: "/skuːl/", vi: "Trường học" },
  ] },
  { id: "uh", ipa: "/ʌ/", type: "vowel", name: "Short u", tip: "Miệng mở nhỏ, lưỡi thả lỏng ở giữa. Giống 'â' hoặc 'ơ' ngắn trong tiếng Việt.", words: [
    { word: "cup", ipa: "/kʌp/", vi: "Cái cốc" },
    { word: "love", ipa: "/lʌv/", vi: "Yêu" },
    { word: "sun", ipa: "/sʌn/", vi: "Mặt trời" },
  ] },
  { id: "er", ipa: "/ɜːr/", type: "vowel", name: "Stressed er", tip: "Cuộn lưỡi nhẹ về phía sau (không chạm vào vòm miệng), môi hơi tròn, âm dài.", words: [
    { word: "bird", ipa: "/bɜːrd/", vi: "Con chim" },
    { word: "work", ipa: "/wɜːrk/", vi: "Làm việc" },
    { word: "learn", ipa: "/lɜːrn/", vi: "Học" },
  ] },
  { id: "schwa", ipa: "/ə/", type: "vowel", name: "Schwa", tip: "Âm phổ biến nhất trong tiếng Anh: rất ngắn, nhẹ, thả lỏng. Chỉ xuất hiện ở âm tiết không nhấn.", words: [
    { word: "about", ipa: "/əˈbaʊt/", vi: "Về" },
    { word: "banana", ipa: "/bəˈnæn.ə/", vi: "Quả chuối" },
    { word: "teacher", ipa: "/ˈtiː.tʃər/", vi: "Giáo viên" },
  ] },

  // Diphthongs
  { id: "ei", ipa: "/eɪ/", type: "diphthong", name: "Long a", tip: "Bắt đầu bằng /e/ rồi trượt lên /ɪ/. Giống 'ây' trong tiếng Việt nhưng đầu âm mở hơn.", words: [
    { word: "day", ipa: "/deɪ/", vi: "Ngày" },
    { word: "make", ipa: "/meɪk/", vi: "Làm" },
    { word: "train", ipa: "/treɪn/", vi: "Tàu hỏa" },
  ] },
  { id: "ai", ipa: "/aɪ/", type: "diphthong", name: "Long i", tip: "Bắt đầu bằng /a/ rồi trượt lên /ɪ/. Giống 'ai' trong tiếng Việt.", words: [
    { word: "my", ipa: "/maɪ/", vi: "Của tôi" },
    { word: "time", ipa: "/taɪm/", vi: "Thời gian" },
    { word: "night", ipa: "/naɪt/", vi: "Đêm" },
  ] },
  { id: "oi", ipa: "/ɔɪ/", type: "diphthong", name: "Oy", tip: "Bắt đầu bằng /ɔː/ tròn môi rồi trượt lên /ɪ/. Giống 'oi' tiếng Việt.", words: [
    { word: "boy", ipa: "/bɔɪ/", vi: "Cậu bé" },
    { word: "coin", ipa: "/kɔɪn/", vi: "Đồng xu" },
    { word: "enjoy", ipa: "/ɪnˈdʒɔɪ/", vi: "Thích thú" },
  ] },
  { id: "au", ipa: "/aʊ/", type: "diphthong", name: "Ow", tip: "Bắt đầu bằng /a/ rồi trượt về /ʊ/, môi tròn dần. Giống 'ao' tiếng Việt.", words: [
    { word: "now", ipa: "/naʊ/", vi: "Bây giờ" },
    { word: "house", ipa: "/haʊs/", vi: "Ngôi nhà" },
    { word: "cloud", ipa: "/klaʊd/", vi: "Đám mây" },
  ] },
  { id: "ou", ipa: "/oʊ/", type: "diphthong", name: "Long o", tip: "Bắt đầu bằng /o/ rồi trượt về /ʊ/, môi tròn dần. Đừng đọc thành 'ô' ngắn.", words: [
    { word: "go", ipa: "/ɡoʊ/", vi: "Đi" },
    { word: "home", ipa: "/hoʊm/", vi: "Nhà" },
    { word: "phone", ipa: "/foʊn/", vi: "Điện thoại" },
  ] },
  { id: "ir", ipa: "/ɪr/", type: "diphthong", name: "Ear", tip: "Bắt đầu bằng /ɪ/ rồi cuộn lưỡi nhẹ thành /r/.", words: [
    { word: "ear", ipa: "/ɪr/", vi: "Cái tai" },
    { word: "near", ipa: "/nɪr/", vi: "Gần" },
    { word: "beer", ipa: "/bɪr/", vi: "Bia" },
  ] },
  { id: "er-air", ipa: "/er/", type: "diphthong", name: "Air", tip: "Bắt đầu bằng /e/ rồi cuộn lưỡi nhẹ thành /r/.", words: [
    { word: "air", ipa: "/er/", vi: "Không khí" },
    { word: "care", ipa: "/ker/", vi: "Quan tâm" },
    { word: "chair", ipa: "/tʃer/", vi: "Cái ghế" },
  ] },
  { id: "ur", ipa: "/ʊr/", type: "diphthong", name: "Ure", tip: "Bắt đầu bằng /ʊ/ tròn môi rồi cuộn lưỡi nhẹ thành /r/.", words: [
    { word: "tour", ipa: "/tʊr/", vi: "Chuyến tham quan" },
    { word: "poor", ipa: "/pʊr/", vi: "Nghèo" },
    { word: "sure", ipa: "/ʃʊr/", vi: "Chắc chắn" },
  ] },

  // Consonants
  { id: "p", ipa: "/p/", type: "consonant", name: "P", voiced: false, tip: "Khép hai môi rồi bật hơi mạnh. Đặt tay trước miệng sẽ thấy luồng hơi (khác 'p' tiếng Việt).", words: [
    { word: "pen", ipa: "/pen/", vi: "Cây bút" },
    { word: "paper", ipa: "/ˈpeɪ.pər/", vi: "Giấy" },
    { word: "stop", ipa: "/stɑːp/", vi: "Dừng lại" },
  ] },
  { id: "b", ipa: "/b/", type: "consonant", name: "B", voiced: true, tip: "Khép hai môi rồi bật ra, có rung dây thanh quản. Giống 'b' tiếng Việt.", words: [
    { word: "bag", ipa: "/bæɡ/", vi: "Cái túi" },
    { word: "baby", ipa: "/ˈbeɪ.bi/", vi: "Em bé" },
    { word: "job", ipa: "/dʒɑːb/", vi: "Công việc" },
  ] },
  { id: "t", ipa: "/t/", type: "consonant", name: "T", voiced: false, tip: "Đầu lưỡi chạm lợi trên rồi bật hơi mạnh. Khác 't' tiếng Việt vì có hơi bật ra.", words: [
    { word: "tea", ipa: "/tiː/", vi: "Trà" },
    { word: "table", ipa: "/ˈteɪ.bəl/", vi: "Cái bàn" },
    { word: "eat", ipa: "/iːt/", vi: "Ăn" },
  ] },
  { id: "d", ipa: "/d/", type: "consonant", name: "D", voiced: true, tip: "Đầu lưỡi chạm lợi trên rồi bật ra, có rung dây thanh quản. Giống 'đ' tiếng Việt.", words: [
    { word: "dog", ipa: "/dɔːɡ/", vi: "Con chó" },
    { word: "day", ipa: "/deɪ/", vi: "Ngày" },
    { word: "good", ipa: "/ɡʊd/", vi: "Tốt" },
  ] },
  { id: "k", ipa: "/k/", type: "consonant", name: "K", voiced: false, tip: "Cuống lưỡi chạm vòm mềm rồi bật hơi mạnh, như 'k' nhưng có hơi bật.", words: [
    { word: "cat", ipa: "/kæt/", vi: "Con mèo" },
    { word: "key", ipa: "/kiː/", vi: "Chìa khóa" },
    { word: "book", ipa: "/bʊk/", vi: "Quyển sách" },
  ] },
  { id: "g", ipa: "/ɡ/", type: "consonant", name: "G", voiced: true, tip: "Cuống lưỡi chạm vòm mềm rồi bật ra, có rung dây thanh quản. Giống 'g' trong 'gà'.", words: [
    { word: "go", ipa: "/ɡoʊ/", vi: "Đi" },
    { word: "game", ipa: "/ɡeɪm/", vi: "Trò chơi" },
    { word: "big", ipa: "/bɪɡ/", vi: "To" },
  ] },
  { id: "f", ipa: "/f/", type: "consonant", name: "F", voiced: false, tip: "Răng trên chạm nhẹ môi dưới, thổi hơi ra. Giống 'ph' tiếng Việt.", words: [
    { word: "fish", ipa: "/fɪʃ/", vi: "Con cá" },
    { word: "family", ipa: "/ˈfæm.ə.li/", vi: "Gia đình" },
    { word: "leaf", ipa: "/liːf/", vi: "Chiếc lá" },
  ] },
  { id: "v", ipa: "/v/", type: "consonant", name: "V", voiced: true, tip: "Răng trên chạm nhẹ môi dưới như /f/ nhưng có rung dây thanh quản. Giống 'v' tiếng Việt.", words: [
    { word: "very", ipa: "/ˈver.i/", vi: "Rất" },
    { word: "van", ipa: "/væn/", vi: "Xe tải nhỏ" },
    { word: "love", ipa: "/lʌv/", vi: "Yêu" },
  ] },
  { id: "th-voiceless", ipa: "/θ/", type: "consonant", name: "Voiceless th", voiced: false, tip: "Đặt đầu lưỡi giữa hai hàm răng và thổi hơi nhẹ, không rung cổ họng. Không đọc thành 't' hay 's'.", words: [
    { word: "think", ipa: "/θɪŋk/", vi: "Nghĩ" },
    { word: "thank", ipa: "/θæŋk/", vi: "Cảm ơn" },
    { word: "bath", ipa: "/bæθ/", vi: "Tắm" },
  ] },
  { id: "th-voiced", ipa: "/ð/", type: "consonant", name: "Voiced th", voiced: true, tip: "Vị trí lưỡi như /θ/ nhưng có rung dây thanh quản. Không đọc thành 'd' hay 'z'.", words: [
    { word: "this", ipa: "/ðɪs/", vi: "Cái này" },
    { word: "mother", ipa: "/ˈmʌð.ər/", vi: "Mẹ" },
    { word: "with", ipa: "/wɪð/", vi: "Với" },
  ] },
  { id: "s", ipa: "/s/", type: "consonant", name: "S", voiced: false, tip: "Răng khít nhau, đầu lưỡi gần lợi trên, thổi hơi tạo tiếng xì. Giống 'x' tiếng Việt. Nhớ đọc rõ âm 's' cuối từ.", words: [
    { word: "sun", ipa: "/sʌn/", vi: "Mặt trời" },
    { word: "city", ipa: "/ˈsɪt.i/", vi: "Thành phố" },
    { word: "bus", ipa: "/bʌs/", vi: "Xe buýt" },
  ] },
  { id: "z", ipa: "/z/", type: "consonant", name: "Z", voiced: true, tip: "Vị trí như /s/ nhưng có rung dây thanh quản (như tiếng vo ve của ong).", words: [
    { word: "zoo", ipa: "/zuː/", vi: "Sở thú" },
    { word: "easy", ipa: "/ˈiː.zi/", vi: "Dễ" },
    { word: "dogs", ipa: "/dɔːɡz/", vi: "Những con chó" },
  ] },
  { id: "sh", ipa: "/ʃ/", type: "consonant", name: "SH", voiced: false, tip: "Chu môi hơi tròn, lưỡi nâng lên gần vòm miệng, thổi hơi. Giống 'sh' khi suỵt 'shhh'.", words: [
    { word: "ship", ipa: "/ʃɪp/", vi: "Con tàu" },
    { word: "shop", ipa: "/ʃɑːp/", vi: "Cửa hàng" },
    { word: "fish", ipa: "/fɪʃ/", vi: "Con cá" },
  ] },
  { id: "zh", ipa: "/ʒ/", type: "consonant", name: "ZH", voiced: true, tip: "Vị trí như /ʃ/ nhưng có rung dây thanh quản. Giống 'gi' kéo dài, môi hơi tròn.", words: [
    { word: "vision", ipa: "/ˈvɪʒ.ən/", vi: "Tầm nhìn" },
    { word: "measure", ipa: "/ˈmeʒ.ər/", vi: "Đo lường" },
    { word: "usual", ipa: "/ˈjuː.ʒu.əl/", vi: "Thông thường" },
  ] },
  { id: "h", ipa: "/h/", type: "consonant", name: "H", voiced: false, tip: "Thở hơi nhẹ từ cổ họng, miệng mở sẵn theo nguyên âm theo sau. Giống 'h' tiếng Việt.", words: [
    { word: "hat", ipa: "/hæt/", vi: "Cái mũ" },
    { word: "house", ipa: "/haʊs/", vi: "Ngôi nhà" },
    { word: "hello", ipa: "/həˈloʊ/", vi: "Xin chào" },
  ] },
  { id: "ch", ipa: "/tʃ/", type: "consonant", name: "CH", voiced: false, tip: "Bắt đầu như /t/ rồi chuyển sang /ʃ/, môi hơi chu. Giống 'ch' tiếng Việt nhưng mạnh hơn.", words: [
    { word: "chair", ipa: "/tʃer/", vi: "Cái ghế" },
    { word: "cheese", ipa: "/tʃiːz/", vi: "Phô mai" },
    { word: "watch", ipa: "/wɑːtʃ/", vi: "Đồng hồ đeo tay" },
  ] },
  { id: "j", ipa: "/dʒ/", type: "consonant", name: "J", voiced: true, tip: "Bắt đầu như /d/ rồi chuyển sang /ʒ/, có rung dây thanh quản.", words: [
    { word: "job", ipa: "/dʒɑːb/", vi: "Công việc" },
    { word: "jump", ipa: "/dʒʌmp/", vi: "Nhảy" },
    { word: "page", ipa: "/peɪdʒ/", vi: "Trang" },
  ] },
  { id: "m", ipa: "/m/", type: "consonant", name: "M", voiced: true, tip: "Khép hai môi, đẩy hơi ra qua mũi. Giống 'm' tiếng Việt, kể cả ở cuối từ.", words: [
    { word: "man", ipa: "/mæn/", vi: "Người đàn ông" },
    { word: "mother", ipa: "/ˈmʌð.ər/", vi: "Mẹ" },
    { word: "time", ipa: "/taɪm/", vi: "Thời gian" },
  ] },
  { id: "n", ipa: "/n/", type: "consonant", name: "N", voiced: true, tip: "Đầu lưỡi chạm lợi trên, hơi ra qua mũi. Giống 'n' tiếng Việt, kể cả ở cuối từ.", words: [
    { word: "nose", ipa: "/noʊz/", vi: "Cái mũi" },
    { word: "name", ipa: "/neɪm/", vi: "Tên" },
    { word: "run", ipa: "/rʌn/", vi: "Chạy" },
  ] },
  { id: "ng", ipa: "/ŋ/", type: "consonant", name: "NG", voiced: true, tip: "Cuống lưỡi chạm vòm mềm, hơi ra qua mũi. Giống 'ng' tiếng Việt; không bật thêm âm 'g'.", words: [
    { word: "sing", ipa: "/sɪŋ/", vi: "Hát" },
    { word: "long", ipa: "/lɔːŋ/", vi: "Dài" },
    { word: "morning", ipa: "/ˈmɔːr.nɪŋ/", vi: "Buổi sáng" },
  ] },
  { id: "l", ipa: "/l/", type: "consonant", name: "L", voiced: true, tip: "Đầu lưỡi chạm lợi trên. Ở cuối từ, lưỡi vẫn giữ chạm lợi (không bỏ âm như tiếng Việt).", words: [
    { word: "light", ipa: "/laɪt/", vi: "Ánh sáng" },
    { word: "yellow", ipa: "/ˈjel.oʊ/", vi: "Màu vàng" },
    { word: "ball", ipa: "/bɔːl/", vi: "Quả bóng" },
  ] },
  { id: "r", ipa: "/r/", type: "consonant", name: "R", voiced: true, tip: "Cuộn lưỡi lên nhưng KHÔNG chạm vòm miệng, môi hơi tròn. Khác 'r' rung của tiếng Việt.", words: [
    { word: "red", ipa: "/red/", vi: "Màu đỏ" },
    { word: "run", ipa: "/rʌn/", vi: "Chạy" },
    { word: "carry", ipa: "/ˈker.i/", vi: "Mang" },
  ] },
  { id: "w", ipa: "/w/", type: "consonant", name: "W", voiced: true, tip: "Chu môi tròn như chuẩn bị huýt sáo rồi mở ra nhanh. Giống 'u' trong 'uống'.", words: [
    { word: "water", ipa: "/ˈwɔː.tər/", vi: "Nước" },
    { word: "window", ipa: "/ˈwɪn.doʊ/", vi: "Cửa sổ" },
    { word: "away", ipa: "/əˈweɪ/", vi: "Xa" },
  ] },
  { id: "y", ipa: "/j/", type: "consonant", name: "Y", voiced: true, tip: "Lưỡi nâng cao gần vòm miệng, môi kéo sang hai bên rồi chuyển nhanh sang nguyên âm. Giống 'i' trong 'ia'.", words: [
    { word: "yes", ipa: "/jes/", vi: "Vâng" },
    { word: "you", ipa: "/juː/", vi: "Bạn" },
    { word: "year", ipa: "/jɪr/", vi: "Năm" },
  ] },
];

// Pairs of words that differ by one sound, commonly confused by Vietnamese speakers.
export const EN_MINIMAL_PAIRS = [
  { sounds: "/iː/ – /ɪ/", a: { word: "sheep", ipa: "/ʃiːp/" }, b: { word: "ship", ipa: "/ʃɪp/" } },
  { sounds: "/iː/ – /ɪ/", a: { word: "seat", ipa: "/siːt/" }, b: { word: "sit", ipa: "/sɪt/" } },
  { sounds: "/iː/ – /ɪ/", a: { word: "leave", ipa: "/liːv/" }, b: { word: "live", ipa: "/lɪv/" } },
  { sounds: "/e/ – /æ/", a: { word: "bed", ipa: "/bed/" }, b: { word: "bad", ipa: "/bæd/" } },
  { sounds: "/e/ – /æ/", a: { word: "men", ipa: "/men/" }, b: { word: "man", ipa: "/mæn/" } },
  { sounds: "/æ/ – /ʌ/", a: { word: "cap", ipa: "/kæp/" }, b: { word: "cup", ipa: "/kʌp/" } },
  { sounds: "/ʊ/ – /uː/", a: { word: "full", ipa: "/fʊl/" }, b: { word: "fool", ipa: "/fuːl/" } },
  { sounds: "/ʊ/ – /uː/", a: { word: "pull", ipa: "/pʊl/" }, b: { word: "pool", ipa: "/puːl/" } },
  { sounds: "/ɔː/ – /oʊ/", a: { word: "caught", ipa: "/kɔːt/" }, b: { word: "coat", ipa: "/koʊt/" } },
  { sounds: "/p/ – /b/", a: { word: "pen", ipa: "/pen/" }, b: { word: "ben", ipa: "/ben/" } },
  { sounds: "/t/ – /d/", a: { word: "tie", ipa: "/taɪ/" }, b: { word: "die", ipa: "/daɪ/" } },
  { sounds: "/k/ – /ɡ/", a: { word: "back", ipa: "/bæk/" }, b: { word: "bag", ipa: "/bæɡ/" } },
  { sounds: "/s/ – /ʃ/", a: { word: "sea", ipa: "/siː/" }, b: { word: "she", ipa: "/ʃiː/" } },
  { sounds: "/s/ – /ʃ/", a: { word: "sip", ipa: "/sɪp/" }, b: { word: "ship", ipa: "/ʃɪp/" } },
  { sounds: "/tʃ/ – /ʃ/", a: { word: "chip", ipa: "/tʃɪp/" }, b: { word: "ship", ipa: "/ʃɪp/" } },
  { sounds: "/tʃ/ – /dʒ/", a: { word: "cheap", ipa: "/tʃiːp/" }, b: { word: "jeep", ipa: "/dʒiːp/" } },
  { sounds: "/θ/ – /s/", a: { word: "think", ipa: "/θɪŋk/" }, b: { word: "sink", ipa: "/sɪŋk/" } },
  { sounds: "/θ/ – /t/", a: { word: "three", ipa: "/θriː/" }, b: { word: "tree", ipa: "/triː/" } },
  { sounds: "/ð/ – /d/", a: { word: "they", ipa: "/ðeɪ/" }, b: { word: "day", ipa: "/deɪ/" } },
  { sounds: "/ð/ – /z/", a: { word: "breathe", ipa: "/briːð/" }, b: { word: "breeze", ipa: "/briːz/" } },
  { sounds: "/f/ – /v/", a: { word: "fan", ipa: "/fæn/" }, b: { word: "van", ipa: "/væn/" } },
  { sounds: "/s/ – /z/", a: { word: "bus", ipa: "/bʌs/" }, b: { word: "buzz", ipa: "/bʌz/" } },
  { sounds: "/l/ – /r/", a: { word: "light", ipa: "/laɪt/" }, b: { word: "right", ipa: "/raɪt/" } },
  { sounds: "/l/ – /r/", a: { word: "lock", ipa: "/lɑːk/" }, b: { word: "rock", ipa: "/rɑːk/" } },
  { sounds: "/n/ – /ŋ/", a: { word: "thin", ipa: "/θɪn/" }, b: { word: "thing", ipa: "/θɪŋ/" } },
  { sounds: "/w/ – /v/", a: { word: "west", ipa: "/west/" }, b: { word: "vest", ipa: "/vest/" } },
];
