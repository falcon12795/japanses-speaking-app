export default [
  {
    "id": "it_trouble_001",
    "level": "IT",
    "lesson": "Work",
    "title": "本番環境で障害発生",
    "description": "Discussing a production incident and troubleshooting.",
    "lines": [
      {
        "id": 1,
        "speaker": "A",
        "japanese": "大変！本番環境でエラーが落ちて、バグが他の機能にまで跳ねちゃったみたい。",
        "reading": "たいへん！ほんばんかんきょうでエラーがおちて、バグがほかのきのうにまで はねちゃったみたい。",
        "english": "Oh no! An error occurred in production and it looks like the bug has spread to other functions.",
        "vietnamese": "Chết rồi! Hệ thống production bị lỗi, có vẻ bug đã ảnh hưởng sang cả các chức năng khác."
      },
      {
        "id": 2,
        "speaker": "B",
        "japanese": "ええっ！？すぐに原因の切り分けをさせられて、今データの照合をしてるんですけど、差分が多すぎて焦ってます。",
        "reading": "ええっ！？すぐにげんいんのきりわけをさせられて、いまデータのしょうごうをしてるんですけど、さぶんがおおすぎてあせってます。",
        "english": "What!? I was immediately asked to isolate the cause and I'm checking the data now, but there are too many differences and I'm panicking.",
        "vietnamese": "Hả!? Em được yêu cầu phân tách nguyên nhân ngay lập tức và đang đối chiếu dữ liệu, nhưng có quá nhiều khác biệt nên đang rất cuống."
      },
      {
        "id": 3,
        "speaker": "A",
        "japanese": "落ち着いて。まずは影響範囲を洗い出さないと。リリースを急ぐあまり、テスト工程を挟まなかったのがまずかったね。",
        "reading": "おちついて。まずはえいきょうはんいをあらいださないと。リリースをいそぐあまり、テストこうていをはさまなかったのがまずかったね。",
        "english": "Calm down. First we need to identify the impact scope. We rushed the release and skipped the testing phase, which was a mistake.",
        "vietnamese": "Bình tĩnh đã. Trước tiên phải xác định phạm vi ảnh hưởng. Vì quá vội release mà bỏ qua giai đoạn test, đó là sai lầm."
      },
      {
        "id": 4,
        "speaker": "B",
        "japanese": "はい…。まるでパニック映画のような状態ですが、とにかく整合性を確認しとかなくちゃ。",
        "reading": "はい…。まるでパニックえいがのようなじょうたいですが、とにかくせいごうせいをかくにんしとかなくちゃ。",
        "english": "Yes... It's like a disaster movie, but we have to verify the consistency first.",
        "vietnamese": "Vâng... Tình hình chẳng khác gì phim thảm họa, nhưng trước mắt phải kiểm tra tính nhất quán dữ liệu."
      },
      {
        "id": 5,
        "speaker": "A",
        "japanese": "課長が「修正方針を早く握ろう」とするんだけど、現在の仕様は別の部署から引き継いだような複雑なコードだから、時間がかかりそうだね。",
        "reading": "かちょうが しゅうせいほうしんをはやくにぎろうとするんだけど、げんざいのしようはべつのぶしょからひきついだようなふくざつなコードだから、じかんがかかりそうだね。",
        "english": "The manager wants to quickly define the fix strategy, but the current system is based on complicated code inherited from another department, so it may take time.",
        "vietnamese": "Trưởng phòng muốn sớm chốt phương án sửa chữa, nhưng hệ thống hiện tại là code phức tạp được bàn giao từ phòng ban khác nên có lẽ sẽ mất thời gian."
      },
      {
        "id": 6,
        "speaker": "B",
        "japanese": "そうですね。今後の再発防止策も兼ねて、今回の対応策を他チームにも横展開できたらいいんですけど。",
        "reading": "そうですね。こんごのさいはつぼうしさくもかねて、こんかいのたいおうさくをほかチームにもよこてんかいできたらいいんですけど。",
        "english": "That's true. It would be nice if we could share these countermeasures with other teams as part of preventing future incidents.",
        "vietnamese": "Đúng vậy. Nếu có thể phổ biến biện pháp xử lý lần này sang các nhóm khác như một giải pháp ngăn tái phát thì sẽ tốt."
      },
      {
        "id": 7,
        "speaker": "A",
        "japanese": "うん。そのためにも、まずは今回の原因をしっかり持ち帰って、次回からはスケジュールを逆算して動けるようにしよう。",
        "reading": "うん。そのためにも、まずはこんかいのげんいんをしっかりもちかえって、じかいからはスケジュールをぎゃくさんしてうごけるようにしよう。",
        "english": "Right. First let's bring back a proper analysis of the cause and plan future schedules backwards from the deadline.",
        "vietnamese": "Ừ. Trước hết hãy tổng kết rõ nguyên nhân lần này, và từ lần sau hãy lên kế hoạch theo cách tính ngược từ deadline."
      },
      {
        "id": 8,
        "speaker": "B",
        "japanese": "わかりました。あ、これ以上のアカウント権限の付与は、一旦「巻き」で止めておいたほうが安全ですかね？",
        "reading": "わかりました。あ、これいじょうのアカウントけんげんのふよは、いったん まき でとめておいたほうがあんぜんですかね。",
        "english": "Understood. By the way, would it be safer to stop any further account permission grants for now?",
        "vietnamese": "Hiểu rồi ạ. À, việc cấp thêm quyền tài khoản thì tạm thời dừng lại sẽ an toàn hơn phải không ạ?"
      },
      {
        "id": 9,
        "speaker": "A",
        "japanese": "そうね、そうしよう！",
        "reading": "そうね、そうしよう！",
        "english": "Yes, let's do that!",
        "vietnamese": "Ừ, làm như vậy đi!"
      }
    ]
  },
  {
    "id": "it_migration_001",
    "level": "IT",
    "lesson": "Work",
    "title": "データ移行プロジェクト",
    "description": "Discussing data migration project progress and issues.",
    "lines": [
      {
        "id": 1,
        "speaker": "A",
        "japanese": "お疲れ様です。そういえば、例のデータ移行の件ですが、進捗はどうですか？",
        "reading": "おつかれさまです。そういえば、れいのデータいこうのけんですが、しんちょくはどうですか？",
        "english": "Good work. By the way, how is the data migration project progressing?",
        "vietnamese": "Vất vả rồi. Nhân tiện, dự án di chuyển dữ liệu đó tiến độ thế nào rồi?"
      },
      {
        "id": 2,
        "speaker": "B",
        "japanese": "それが、週末にシステム改修を挟んだにもかかわらず、まだデータの整合を取るのに苦戦していまして…。",
        "reading": "それが、しゅうまつにシステムかいしゅうをはさんだにもかかわらず、まだデータのせいごうをとるのにくせんしていまして…。",
        "english": "Well, despite doing a system modification over the weekend, we're still struggling to reconcile the data.",
        "vietnamese": "Thực ra dù đã thực hiện cải sửa hệ thống vào cuối tuần, chúng tôi vẫn đang rất vất vả trong việc đối soát dữ liệu."
      },
      {
        "id": 3,
        "speaker": "A",
        "japanese": "え？事前にスケジュールを逆算して動いていたにしては、ちょっと遅れていない？何が原因？",
        "reading": "え？じぜんにスケジュールをぎゃくさんしてうごいていたにしては、ちょっとおくれていない？なにがげんいん？",
        "english": "Really? Considering you planned backwards from the schedule, isn't it running a bit late? What's the cause?",
        "vietnamese": "Hả? Với việc đã lập kế hoạch tính ngược từ trước thì chẳng phải đang chậm sao? Nguyên nhân là gì?"
      },
      {
        "id": 4,
        "speaker": "B",
        "japanese": "新旧システムの差分の切り分けをめぐって、チーム内で意見が割れてしまいまして。",
        "reading": "しんきゅうシステムのさぶんのきりわけをめぐって、チームないでいけんがわれてしまいまして。",
        "english": "There were disagreements within the team regarding how to isolate the differences between the old and new systems.",
        "vietnamese": "Trong nhóm đã xảy ra bất đồng ý kiến về việc phân tích sự khác biệt giữa hệ thống cũ và mới."
      },
      {
        "id": 5,
        "speaker": "A",
        "japanese": "なるほど。でも、現状の課題を早く洗い出さないと、残りのタスクの棚卸どころではないよ。納期は動かせないんだから。",
        "reading": "なるほど。でも、げんじょうのかだいをはやくあらいださないと、のこりのタスクのたなおろしどころではないよ。のうきはうごかせないんだから。",
        "english": "I see. But unless we identify the current issues quickly, we won't even be able to review the remaining tasks. The deadline won't move.",
        "vietnamese": "Ra vậy. Nhưng nếu không nhanh chóng xác định các vấn đề hiện tại thì còn chưa thể rà soát hết các task còn lại. Deadline thì không thể lùi được."
      },
      {
        "id": 6,
        "speaker": "B",
        "japanese": "はい…。マスターデータの照合すら、まだやりもしないメンバーもいて、正直困っています。",
        "reading": "はい…。マスターデータのしょうごうすら、まだやりもしないメンバーもいて、しょうじきこまっています。",
        "english": "Yes... To be honest, some team members haven't even started validating the master data yet.",
        "vietnamese": "Vâng... Thực lòng mà nói có thành viên còn chưa bắt đầu đối soát dữ liệu master."
      },
      {
        "id": 7,
        "speaker": "A",
        "japanese": "彼はリーダーのくせに、ちょっと無責任だね。でも、文句を言う一方で、僕たちで権限の付与やタスクの引き継ぐ段取りを急いで握らないと。",
        "reading": "かれはリーダーのくせに、ちょっとむせきにんだね。でも、もんくをいういっぽうで、ぼくたちでけんげんのふよやタスクのひきつぐだんどりをいそいでにぎらないと。",
        "english": "He's a leader, yet that's quite irresponsible. Still, instead of just complaining, we need to quickly organize permissions and task handovers.",
        "vietnamese": "Là leader mà như vậy thì khá vô trách nhiệm. Tuy nhiên thay vì chỉ phàn nàn, chúng ta phải nhanh chóng thống nhất việc cấp quyền và bàn giao công việc."
      },
      {
        "id": 8,
        "speaker": "B",
        "japanese": "そうですね。メンバーのスキル感からすると、このタスクをそのまま他部署へ横展開するのは厳しそうです。",
        "reading": "そうですね。メンバーのスキルかんからすると、このタスクをそのままたぶしょへよこてんかいするのはきびしそうです。",
        "english": "That's true. Given the members' skill levels, it seems difficult to spread this task to other departments as is.",
        "vietnamese": "Đúng vậy. Xét về mặt kỹ năng của các thành viên thì việc triển khai ngang task này sang bộ phận khác sẽ khá khó."
      },
      {
        "id": 9,
        "speaker": "A",
        "japanese": "よし、この課題は一旦僕が持ち帰るよ。午後からの会議は15分巻きで行くから、Bさんはテスト環境でバグが跳ねてエラーに落ちないか、もう一度確認しておいて。",
        "reading": "よし、このかだいはいったんぼくがもちかえるよ。ごごからのかいぎはじゅうごふんまきでいくから、Bさんはテストかんきょうでバグがはねてエラーにおちないか、もういちどかくにんしておいて。",
        "english": "Okay, I'll take ownership of this issue for now. We'll shorten the afternoon meeting by fifteen minutes, so please verify again whether bugs propagate into errors in the test environment.",
        "vietnamese": "Được rồi, tạm thời tôi sẽ nhận xử lý vấn đề này. Cuộc họp chiều nay sẽ rút ngắn 15 phút, còn B hãy kiểm tra lại xem bug có lan rộng và gây lỗi trong môi trường test hay không."
      },
      {
        "id": 10,
        "speaker": "B",
        "japanese": "承知いたしました。開発と運用の兼ね合いも兼ねて、すぐに確認します！",
        "reading": "しょうちいたしました。かいはつとうんようのかねあいもかねて、すぐにかくにんします！",
        "english": "Understood. I'll check it immediately while considering both development and operations.",
        "vietnamese": "Vâng, tôi hiểu rồi. Tôi sẽ kiểm tra ngay, đồng thời cân nhắc cả phía phát triển và vận hành."
      }
    ]
  }
]