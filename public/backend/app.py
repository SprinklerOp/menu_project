from flask import Flask, request, jsonify
from modules import email, geo, google, sms, text_to_audio, whatsapp

app = Flask(__name__)

# Endpoint for sending email
@app.route('/send_email', methods=['POST'])
def send_email():
    return email.send_email(request)

# Endpoint for getting coordinates
@app.route('/get_coordinates', methods=['POST'])
def get_coordinates():
    return geo.get_coordinates(request)

# Endpoint for scraping Google
@app.route('/scrape_google', methods=['POST'])
def scrape_google():
    return google.scrape_google(request)

# Endpoint for sending WhatsApp message
@app.route('/send_whatsapp', methods=['POST'])
def send_whatsapp():
    return whatsapp.send_whatsapp(request)

# Endpoint for sending SMS
@app.route('/send_sms', methods=['POST'])
def send_sms():
    return sms.send_sms(request)

# Endpoint for converting text to audio
@app.route('/text_to_audio', methods=['POST'])
def text_to_audio():
    return text_to_audio.text_to_audio(request)

if __name__ == '__main__':
    app.run(debug=True)
