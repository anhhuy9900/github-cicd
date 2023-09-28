import { createServer, ServerResponse } from "http"

(() => {
  const server = createServer((req, res: ServerResponse) => {
    console.log(`Got request from ${req.headers["user-agent"]}`)
    console.log(`Got request for ${req.url}`)
    res.end()
  })
  server.listen(8080)
  console.log("SERVER STARED")
})()
