from flask import jsonify
import geocoder

def get_coordinates(request):
    data = request.get_json()
    address = data['address']
    location = geocoder.osm(address)
    return jsonify({"lat": location.lat, "lon": location.lng})
