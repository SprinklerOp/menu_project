from flask import jsonify
import pyttsx3

def text_to_audio(request):
    data = request.get_json()
    text = data['text']
    
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    engine.setProperty('rate', 140)
    engine.setProperty('volume', 1.0)
    for voice in voices:
        engine.setProperty('voice', voice.id)
        engine.say(text)
        engine.runAndWait()

    return jsonify({"message": "Text converted to audio successfully"})
