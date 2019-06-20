from flask import request
from app.api import bp
from app.models.user import User
from app.schemas.user_schema import UserSchema


@bp.route("/login")
def login():
    email = request.json.get("email")
    pw_candidate = request.json.get("password")

