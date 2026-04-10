from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from .models import Property
from . import db

property_bp = Blueprint("property", __name__)


# =========================
# ADD PROPERTY
# =========================

@property_bp.route("/add", methods=["POST"])
@jwt_required()
def add_property():

    try:

        user_id = int(get_jwt_identity())

        data = request.get_json()

        title = data.get("title")
        description = data.get("description")
        price = data.get("price")
        location = data.get("location")
        property_type = data.get("property_type")

        new_property = Property(
            title=title,
            description=description,
            price=price,
            location=location,
            property_type=property_type,
            user_id=user_id
        )

        db.session.add(new_property)
        db.session.commit()

        return jsonify({
            "message": "Property added successfully"
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# =========================
# GET ALL PROPERTIES
# =========================

@property_bp.route("/", methods=["GET"])
def get_all_properties():

    properties = Property.query.all()

    output = []

    for prop in properties:

        property_data = {
            "id": prop.id,
            "title": prop.title,
            "description": prop.description,
            "price": prop.price,
            "location": prop.location,
            "property_type": prop.property_type
        }

        output.append(property_data)

    return jsonify(output)


# =========================
# GET SINGLE PROPERTY
# =========================

@property_bp.route("/<int:id>", methods=["GET"])
def get_single_property(id):

    prop = Property.query.get_or_404(id)

    property_data = {
        "id": prop.id,
        "title": prop.title,
        "description": prop.description,
        "price": prop.price,
        "location": prop.location,
        "property_type": prop.property_type
    }

    return jsonify(property_data)


# =========================
# DELETE PROPERTY
# =========================

@property_bp.route("/delete/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_property(id):

    prop = Property.query.get_or_404(id)

    db.session.delete(prop)
    db.session.commit()

    return jsonify({
        "message": "Property deleted successfully"
    })


# =========================
# UPDATE PROPERTY
# =========================

@property_bp.route("/update/<int:id>", methods=["PUT"])
@jwt_required()
def update_property(id):

    user_id = int(get_jwt_identity())

    prop = Property.query.get_or_404(id)

    if prop.user_id != user_id:
        return jsonify({
            "message": "Unauthorized"
        }), 403

    data = request.get_json()

    prop.title = data.get("title", prop.title)
    prop.description = data.get("description", prop.description)
    prop.price = data.get("price", prop.price)
    prop.location = data.get("location", prop.location)
    prop.property_type = data.get("property_type", prop.property_type)

    db.session.commit()

    return jsonify({
        "message": "Property updated successfully"
    })