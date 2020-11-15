require("dotenv").config();
export const VerifyToken = process.env.verify_token || "VerifyToken";
export const PageToken = process.env.page_token || "";
export const MongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/MessengerStranger";
export const MongoDbName =
  process.env.MONGODB_DBNAME || require("parse-mongo-url")(MongoUri).name;
export const Timeout = 300 * 10e2;
import { Text } from "./Chat/response";

export const Messenges = {
  Timeout: Text("Đã hết 5 phút rồii"),
  Help: Text(
    'Hãy nhắn 1 kí tự nào đó để bắt đầu và kết thúc lại bằng "pp" nhé'
  ),
  Paired: Text(
    "[BOT] 💓 Ping Ping! Đã tìm thấy bạn rồi! Gửi lời chào với nhau nào! Gửi 'KẾT THÚC' để thoát khỏi cuộc trò chuyện "
  ),
  Request: {
    SendMale: Text(
      "[BOT]🆗 Đang tìm Nam 🕵‍♀...Lưu ý: Tùy chọn này chỉ có tác dụng với PHẦN LỚN các cuộc nói chuyện"
    ),
    SendFeMale: Text(
      "[BOT]🆗 Đang tìm Nữ 👸...Lưu ý: Tùy chọn này chỉ có tác dụng với PHẦN LỚN các cuộc nói chuyện."
    ),
    Send: Text(
      "[BOT]🆗 Chúng mình sẽ thông báo khi tìm được bạn chat."
    ),
    Sent: Text(
      "[BOT] 🔎 Đang tìm bạn chat... Nếu bạn muốn hủy, Gửi 'end' nhé !!."
    ),
    Error: Text(
      "[BOT] ❌ Vui lòng ấn Bắt đầu hoặc 'Tìm Nam' và 'Tìm Nữ'."
    ),
  },
  Test: {
    Test1: Text("test1"),
    Test2: Text("test2"),
    Test3: Text("test3")
  },
  End: {
    Pair: Text(
      "[BOT] ❌ Hủy tìm kiếm! Gửi 'Tìm Nam' Hoặc 'Tìm Nữ' để tìm bạn chat."
    ),
    Chat: {
      Active: Text("[BOT]🆗 Bạn đã kết thúc cuộc trò chuyện."),
      Passive: Text("[BOT] ❌ Bạn kia đã kết thúc cuộc trò chuyện này rồi, lêu lêu..")
    }
  },
  ChangeFav: {
    SuccessMessage: Text("Bạn đã đổi sở thích thành công. Hãy thử ngay nhé"),
    Male: "Nam",
    Famale: "Nữ",
    Any: "Ai cũng được",
    Ask: "Hãy lựa chọn giới tính của người bạn tiếp theo nhé"
  },
};
