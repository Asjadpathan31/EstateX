from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash

from .models import User
from . import db

auth = Blueprint("auth", __name__)


# =========================
# SIGNUP
# =========================

@auth.route("/signup", methods=["POST"])
def signup():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    # Check if user exists
    user = User.query.filter_by(email=email).first()

    if user:
        return jsonify({
            "message": "User already exists"
        }), 400

    # Hash password
    hashed_password = generate_password_hash(password)

    new_user = User(
        name=name,
        email=email,
        password=hashed_password
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "message": "User created successfully"
    }), 201


# =========================
# LOGIN
# =========================

@auth.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    if not check_password_hash(user.password, password):
        return jsonify({
            "message": "Invalid password"
        }), 401

    # VERY IMPORTANT FIX
    access_token = create_access_token(
        identity=str(user.id)
    )

    return jsonify({
        "access_token": access_token
    })