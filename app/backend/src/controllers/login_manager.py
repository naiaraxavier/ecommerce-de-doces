from flask_login import LoginManager
from models.user_model import UserModel

login_manager = LoginManager()
login_manager.login_view = "login"


# Autenticação
@login_manager.user_loader
def load_user(user_id):
    return UserModel.query.get(int(user_id))
