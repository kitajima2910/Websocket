import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    let dataText = Buffer.from(data).toString();
    console.log(new Date(), "Tin nhắn nhận từ client: ", dataText);
    ws.send("Data server gửi lên: " + dataText);
  });

  // setInterval(async () => {
  //   ws.send('Xin chào client =]]z')
  // }, 3000)
});
