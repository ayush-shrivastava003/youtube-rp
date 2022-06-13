from flask import Flask, request, Response
from pypresence import Presence
from urllib.parse import unquote, parse_qs

server = Flask(__name__)
# instantiate RPC
# initialize connection?

@server.route("/")
def index():
    queries = request.url.split("?")[1]
    content = parse_qs(queries)
    title = content["title"]
    author = content["author"]

    print(f"Watching {title} by {author}")

    # update RPC

    res = Response("<h1/>success", status=200)
    res.headers["Access-Control-Allow-Origin"] = "*"
    return res

server.run("0.0.0.0", 3000, debug=True)