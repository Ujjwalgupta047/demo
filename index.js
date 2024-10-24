const express = require('express')
require('dotenv').config()
const app = express()
const port=4000

app.get('/', function (req, res) {
  res.send('Hello World')
})

const githubData={
  "login": "Ujjwalgupta047",
  "id": 146421055,
  "node_id": "U_kgDOCLo1Pw",
  "avatar_url": "https://avatars.githubusercontent.com/u/146421055?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Ujjwalgupta047",
  "html_url": "https://github.com/Ujjwalgupta047",
  "followers_url": "https://api.github.com/users/Ujjwalgupta047/followers",
  "following_url": "https://api.github.com/users/Ujjwalgupta047/following{/other_user}",
  "gists_url": "https://api.github.com/users/Ujjwalgupta047/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Ujjwalgupta047/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Ujjwalgupta047/subscriptions",
  "organizations_url": "https://api.github.com/users/Ujjwalgupta047/orgs",
  "repos_url": "https://api.github.com/users/Ujjwalgupta047/repos",
  "events_url": "https://api.github.com/users/Ujjwalgupta047/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Ujjwalgupta047/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-09-29T07:25:03Z",
  "updated_at": "2024-10-09T12:40:51Z"
}

app.get('/twitter', function (req, res) {
  res.send('Welcome to twitter')
})

app.get('/login', function (req, res) {
  res.send('<h1> please login at chai aur code </h1>')
})

app.get('/github', function (req, res) {
  res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${port}`)
})