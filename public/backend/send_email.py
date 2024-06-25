from flask import jsonify
import smtplib

SENDER_EMAIL = "your-email@gmail.com"
SENDER_PASSWORD = "your-password"

def send_email(request):
    data = request.get_json()
    subject = data['subject']
    body = data['body']
    receiver_email = data['receiver']

    message = f"Subject: {subject}\n\n{body}"
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, receiver_email, message)
    
    return jsonify({"message": "Email sent successfully"})
