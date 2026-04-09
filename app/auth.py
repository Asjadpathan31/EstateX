from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_bcrypt import Bcrypt

from .models import User
from . import db

auth = Blueprint("auth", __name__)

bcrypt = Bcrypt()


# =========================
# SIGNUP ROUTE
# =========================

@auth.route("/signup", methods=["POST"])
def signup():

    data = request.get_json()

    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    # Check if email exists
    existing_user = User.query.filter_by(
        email=email
    ).first()

    if existing_user:
        return jsonify({
            "message": "Email already exists"
        }), 400

    # Hash password
    hashed_password = bcrypt.generate_password_hash(
        password
    ).decode("utf-8")

    # Create new user
    new_user = User(
        username=username,
        email=email,
        password=hashed_password
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "message": "User created successfully"
    }), 201


# =========================
# LOGIN ROUTE
# =========================

@auth.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(
        email=email
    ).first()

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    # Check password
    if not bcrypt.check_password_hash(
        user.password,
        password
    ):
        return jsonify({
            "message": "Invalid password"
        }), 401

    # Create JWT token
    access_token = create_access_token(
        identity=user.id
    )

    return jsonify({
        "access_token": access_token
    })