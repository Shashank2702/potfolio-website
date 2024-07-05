from flask import Flask, jsonify

app = Flask(__name__)

# sample data
data = {
   "about": {"title": "About Me", "content": "This is the about section"},
    "projects": {"title": "My Projects", "items": [
        {"title": "Project 1", "description": "This is project 1"},
        {"title": "Project 2", "description": "This is project 2"},
        {"title": "Project 3", "description": "This is project 3"}
    ]},
    "contact": {"title": "Get in Touch", "content": "This is the contact section"}
}

@app.route('/api/data')
def get_data():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)