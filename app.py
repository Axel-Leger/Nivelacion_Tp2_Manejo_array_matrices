from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

personas = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/agregar", methods=["POST"])
def agregar():
    data = request.get_json()
    nombre = data.get("nombre")
    edad = int(data.get("edad"))
    nota = float(data.get("nota"))
    
    personas.append([nombre, edad, nota])

    return "", 200


@app.route("/mostrar", methods = ["GET"])
def mostrar():
    return jsonify({"original": personas, "ordenado": sorted(personas, key=lambda x: x[2], reverse=True)})

if __name__ == "__main__":
    app.run(debug=True)