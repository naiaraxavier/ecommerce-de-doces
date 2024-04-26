from flask_cors import CORS
from flask import jsonify
from database.db import create_app
from controllers.login_manager import login_manager
from controllers.auth_controller import auth_controller
from controllers.cart_controller import cart_controller
from controllers.product_controller import product_controller


app = create_app()


login_manager.init_app(app)

CORS(app)


app.register_blueprint(auth_controller)
app.register_blueprint(product_controller)
app.register_blueprint(cart_controller)


@app.route("/")
def initial():
    return jsonify({"message": "API up!"})


if __name__ == "__main__":
    app.run(debug=True)
