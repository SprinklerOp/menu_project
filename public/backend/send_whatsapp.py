from flask import jsonify
import pywhatkit as kit
import datetime

def send_whatsapp(request):
    data = request.get_json()
    phone_number = data['phoneNumber']
    message = data['message']
    now = datetime.datetime.now()
    hour = now.hour
    minute = now.minute

    try:
        kit.sendwhatmsg(phone_number, message, hour, minute + 1)
        return jsonify({"message": f"Message scheduled successfully at {hour}:{minute + 1}: {message}"})
    except Exception as e:
        return jsonify({"error": f"An error occurred: {e}"}), 500
