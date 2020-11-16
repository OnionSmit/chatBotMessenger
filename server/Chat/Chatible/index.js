import _ from "lodash";
import GetUser, { Request, getPartnerId, endPairing, endChat } from "./user";
import { checkUserCache } from "../store";
import { FbSendMessage, FbSendMessageAs , FbSendMessagePair} from "../../APIs";
import { Messenges } from "../../const";
import { Text } from "../response";
import pair from "./pair";

export default new class Chatible {
  async handle(senderId, pageId, timestamp, text) {
    const status = await this.handleUser(senderId, timestamp, pageId);
    switch (text.toLowerCase()) {
      case 'tìm nam':
        if (status === 0) {
          await Request(senderId, timestamp);
          FbSendMessage(senderId, Messenges.Request.SendMale);
          pair();
        } else {
          return FbSendMessage(senderId, Messenges.Request.Sent);
        }
        break;
      case 'tìm nữ':
          if (status == 0) {
            await Request(senderId, timestamp);
            FbSendMessage(senderId, Messenges.Request.SendFeMale);
            pair();
          } else {
            return FbSendMessage(senderId, Messenges.Request.Sent);
          }
        break;
      default:
        if (status === 1) {
          if (text.toLowerCase() === "end") return endPairing(senderId);
            return FbSendMessage(senderId, Messenges.Request.Sent);
        } else if (status == 2) {
          if (text.toLowerCase() === "kết thúc") return endChat(senderId);
          return FbSendMessage(getPartnerId(senderId), Text(text));
        }
        break;
    }

  }

  handleUser(senderId, timestamp, pageId) {
    return new Promise(async resolve => {
      let status = checkUserCache(senderId);
      if (status === 0) {
        status = (await GetUser(senderId, timestamp, pageId)).status;
      }
      resolve(status);
    });
  }
  
}();
