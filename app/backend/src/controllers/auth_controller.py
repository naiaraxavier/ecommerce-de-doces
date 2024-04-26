from flask import Blueprint, request, jsonify
from flask_login import login_required, login_user, logout_user
from models.user_model import UserModel


auth_controller = Blueprint("auth_controller", __name__)


# Rota para autenticação do usuário
@auth_controller.route("/login", methods=["POST"])
def login():
    data = request.json

    user = UserModel.query.filter_by(username=data.get("username")).first()

    if user and data.get("password") == user.password:
        login_user(user)
        return jsonify({"message": "Logged in successfully"})
    return jsonify({"message": "Unauthorized. Invalid credentials"}), 401


# Rota para logout do usuário
@auth_controller.route("/logout", methods=["POST"])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logout successfully"})
