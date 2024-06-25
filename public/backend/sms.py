from flask import jsonify
from twilio.rest import Client

def send_sms(request):
    data = request.get_json()
    account_sid = data['accountSid']
    auth_token = data['authToken']
    client = Client(account_sid, auth_token)
    message_body = data['message']
    from_number = data['fromNumber']
    to_number = data['toNumber']

    try:
        message = client.messages.create(
            body=message_body,
            from_=from_number,
            to=to_number
        )
        return jsonify({"message": "SMS sent successfully"})
    except Exception as e:
        return jsonify({"error": f"An error occurred: {e}"}), 500
