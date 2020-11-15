import axios from "axios";
import { PageToken } from "../../const";

export default (senderId) => {
  axios.post(`https://graph.facebook.com/v8.0/me/messages?access_token=${PageToken}`, {
    messaging_type: "RESPONSE",
    recipient: {
      id: senderId,
    },
    message: {
      text: "Vui lòng chọn để chat",
      quick_replies: [
        {
          content_type: "text",
          title: "Tìm Nam",
          payload: "<POSTBACK_PAYLOAD>",
        },
        {
          content_type: "text",
          title: "Tìm Nữ",
          payload: "<POSTBACK_PAYLOAD>",
        }
      ]
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((e) => {
    console.log(e.response.data);
  });
};
